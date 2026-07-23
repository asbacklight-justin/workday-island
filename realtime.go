package main

import (
	"bytes"
	"context"
	"crypto/ed25519"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"os"
	"runtime"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

const (
	realtimeWebSocketURL = "wss://admin.asbacklight.cn/api/realtime/ws"
	realtimeBootstrapURL = "https://admin.asbacklight.cn/api/realtime/bootstrap"
)

var errRealtimeAuth = errors.New("realtime authentication failed")

type realtimeWire struct {
	Action    string          `json:"action"`
	RequestID string          `json:"request_id,omitempty"`
	Data      json.RawMessage `json:"data,omitempty"`
	Code      string          `json:"code,omitempty"`
	Message   string          `json:"message,omitempty"`
}

type realtimeChallenge struct {
	Challenge string    `json:"challenge"`
	ExpiresAt time.Time `json:"expires_at"`
}

type realtimeAuthUser struct {
	UserID       int64  `json:"user_id"`
	Username     string `json:"username"`
	DisplayName  string `json:"display_name"`
	DeviceID     string `json:"device_id"`
	CredentialID string `json:"credential_id"`
}

type realtimeAuthOK struct {
	ConnectionID string           `json:"connection_id"`
	User         realtimeAuthUser `json:"user"`
}

type realtimeEventMessage struct {
	MessageID    string          `json:"message_id"`
	ChannelID    string          `json:"channel_id"`
	SenderUserID int64           `json:"sender_user_id"`
	EventType    string          `json:"event_type"`
	Payload      json.RawMessage `json:"payload"`
	CreatedAt    time.Time       `json:"created_at"`
}

type realtimeAccepted struct {
	Message          realtimeEventMessage `json:"message"`
	OnlineDeliveries int                  `json:"online_deliveries"`
}

type realtimeBootstrapEnvelope struct {
	Code    int                       `json:"code"`
	Message string                    `json:"message"`
	Data    realtimeBootstrapResponse `json:"data"`
}

type realtimeBootstrapResponse struct {
	UserID       int64  `json:"user_id"`
	Username     string `json:"username"`
	DisplayName  string `json:"display_name"`
	DeviceID     string `json:"device_id"`
	CredentialID string `json:"credential_id"`
}

type RealtimeClient struct {
	app *App

	mu            sync.RWMutex
	status        string
	desiredOnline bool
	lastError     string
	conn          *websocket.Conn
	cancel        context.CancelFunc

	connectMu sync.Mutex
	writeMu   sync.Mutex
	pendingMu sync.Mutex
	pending   map[string]chan realtimeWire
}

func NewRealtimeClient(app *App) *RealtimeClient {
	return &RealtimeClient{
		app:     app,
		status:  "offline",
		pending: make(map[string]chan realtimeWire),
	}
}

func (client *RealtimeClient) Snapshot() RealtimeSnapshot {
	client.mu.RLock()
	snapshot := RealtimeSnapshot{
		Status:        client.status,
		DesiredOnline: client.desiredOnline,
		LastError:     client.lastError,
	}
	client.mu.RUnlock()
	state := client.app.store.Snapshot()
	snapshot.Identity = state.RealtimeIdentity
	snapshot.Messages = state.RealtimeMessages
	if snapshot.Messages == nil {
		snapshot.Messages = []RealtimeMessage{}
	}
	return snapshot
}

func (client *RealtimeClient) Connect(nickname string) (RealtimeSnapshot, error) {
	client.connectMu.Lock()
	defer client.connectMu.Unlock()

	identity, err := client.ensureIdentity(nickname)
	if err != nil {
		client.setStatus("auth_failed", err.Error())
		return client.Snapshot(), err
	}
	if identity.CredentialID == "" {
		err := errors.New("设备注册信息不完整")
		client.setStatus("auth_failed", err.Error())
		return client.Snapshot(), err
	}

	client.mu.Lock()
	if client.desiredOnline {
		client.mu.Unlock()
		return client.Snapshot(), nil
	}
	ctx, cancel := context.WithCancel(context.Background())
	client.desiredOnline = true
	client.lastError = ""
	client.cancel = cancel
	client.mu.Unlock()
	client.setStatus("connecting", "")
	go client.run(ctx)
	return client.Snapshot(), nil
}

func (client *RealtimeClient) Disconnect() RealtimeSnapshot {
	client.mu.Lock()
	client.desiredOnline = false
	cancel := client.cancel
	client.cancel = nil
	conn := client.conn
	client.conn = nil
	client.mu.Unlock()
	if cancel != nil {
		cancel()
	}
	if conn != nil {
		_ = conn.Close()
	}
	client.failPending(errors.New("实时连接已下线"))
	client.setStatus("offline", "")
	return client.Snapshot()
}

func (client *RealtimeClient) ResetIdentity() (RealtimeSnapshot, error) {
	client.connectMu.Lock()
	defer client.connectMu.Unlock()
	client.Disconnect()
	state := client.app.store.Snapshot()
	if state.RealtimeIdentity != nil && state.RealtimeIdentity.DeviceID != "" {
		if err := deleteRealtimePrivateKey(state.RealtimeIdentity.DeviceID); err != nil {
			return client.Snapshot(), err
		}
	}
	if err := client.app.store.ClearRealtimeIdentity(); err != nil {
		return client.Snapshot(), err
	}
	client.emitState()
	return client.Snapshot(), nil
}

func (client *RealtimeClient) Shutdown() {
	client.Disconnect()
}

func (client *RealtimeClient) SendChat(toUserID int64, text string) (RealtimeMessage, error) {
	text = strings.TrimSpace(text)
	if text == "" {
		return RealtimeMessage{}, errors.New("消息内容不能为空")
	}
	if len([]rune(text)) > 4000 {
		return RealtimeMessage{}, errors.New("消息内容不能超过 4000 个字符")
	}
	return client.publish(toUserID, "chat.text", map[string]any{"text": text})
}

func (client *RealtimeClient) SendWindowCommand(toUserID int64, effect, text string) (RealtimeMessage, error) {
	eventType := ""
	switch effect {
	case "shake":
		eventType = "window.shake"
	case "flash":
		eventType = "window.flash"
	default:
		return RealtimeMessage{}, errors.New("不支持的窗口互动类型")
	}
	text = strings.TrimSpace(text)
	if len([]rune(text)) > 120 {
		return RealtimeMessage{}, errors.New("窗口互动提示语不能超过 120 个字符")
	}
	return client.publish(toUserID, eventType, map[string]any{
		"source": "workday-island",
		"text":   text,
	})
}

func (client *RealtimeClient) AckRead(messageID string) error {
	messageID = strings.TrimSpace(messageID)
	if messageID == "" {
		return nil
	}
	return client.writeJSON(map[string]any{
		"action":     "event.ack",
		"request_id": "read_" + newID(),
		"message_id": messageID,
		"status":     "read",
	})
}

func (client *RealtimeClient) run(ctx context.Context) {
	attempt := 0
	for {
		if ctx.Err() != nil || !client.isDesiredOnline() {
			return
		}
		if attempt > 0 {
			client.setStatus("reconnecting", client.lastConnectionError())
		}
		err := client.connectAndServe(ctx)
		if ctx.Err() != nil || !client.isDesiredOnline() {
			return
		}
		// A connection that completed authentication was healthy at least once.
		// Retry it as a fresh disconnect instead of carrying failures from older
		// Wi-Fi changes, sleep/wake cycles, or server restarts forever.
		if client.currentStatus() == "online" {
			attempt = 0
		}
		if errors.Is(err, errRealtimeAuth) {
			client.mu.Lock()
			client.desiredOnline = false
			client.mu.Unlock()
			client.setStatus("auth_failed", strings.TrimSpace(strings.TrimPrefix(err.Error(), errRealtimeAuth.Error()+":")))
			return
		}
		attempt++
		client.setStatus("reconnecting", readableRealtimeError(err))
		delay := time.Second << min(attempt-1, 4)
		if delay > 30*time.Second {
			delay = 30 * time.Second
		}
		timer := time.NewTimer(delay)
		select {
		case <-ctx.Done():
			timer.Stop()
			return
		case <-timer.C:
		}
	}
}

func (client *RealtimeClient) connectAndServe(ctx context.Context) error {
	dialer := websocket.Dialer{
		HandshakeTimeout:  12 * time.Second,
		Proxy:             http.ProxyFromEnvironment,
		EnableCompression: true,
	}
	conn, response, err := dialer.DialContext(ctx, realtimeWebSocketURL, nil)
	if err != nil {
		if response != nil {
			if response.StatusCode == http.StatusBadRequest {
				return errors.New("实时服务网关暂未启用 WebSocket，请稍后重试或联系管理员")
			}
			return fmt.Errorf("WebSocket 握手失败（HTTP %d）", response.StatusCode)
		}
		return err
	}
	defer conn.Close()
	client.mu.Lock()
	if !client.desiredOnline {
		client.mu.Unlock()
		return context.Canceled
	}
	client.conn = conn
	client.mu.Unlock()
	defer func() {
		client.mu.Lock()
		if client.conn == conn {
			client.conn = nil
		}
		client.mu.Unlock()
		client.failPending(errors.New("实时连接已断开"))
	}()

	client.setStatus("authenticating", "")
	if err := conn.SetReadDeadline(time.Now().Add(15 * time.Second)); err != nil {
		return err
	}
	var challengeFrame realtimeWire
	if err := conn.ReadJSON(&challengeFrame); err != nil {
		return fmt.Errorf("读取认证挑战失败: %w", err)
	}
	if challengeFrame.Action != "auth.challenge" {
		return fmt.Errorf("%w: 服务端未返回认证挑战", errRealtimeAuth)
	}
	var challenge realtimeChallenge
	if err := json.Unmarshal(challengeFrame.Data, &challenge); err != nil || challenge.Challenge == "" {
		return fmt.Errorf("%w: 认证挑战格式无效", errRealtimeAuth)
	}
	identity := client.app.store.Snapshot().RealtimeIdentity
	if identity == nil || identity.CredentialID == "" {
		return fmt.Errorf("%w: 缺少设备凭据", errRealtimeAuth)
	}
	privateKey, err := loadRealtimePrivateKey(identity.DeviceID)
	if err != nil || len(privateKey) != ed25519.PrivateKeySize {
		return fmt.Errorf("%w: 无法读取本机设备私钥", errRealtimeAuth)
	}
	timestamp := time.Now().Unix()
	signature, err := signRealtimeChallenge(ed25519.PrivateKey(privateKey), challenge.Challenge, identity.CredentialID, timestamp)
	if err != nil {
		return fmt.Errorf("%w: %s", errRealtimeAuth, err.Error())
	}
	if err := client.writeJSONTo(conn, map[string]any{
		"action":        "auth.device",
		"request_id":    "auth_" + newID(),
		"credential_id": identity.CredentialID,
		"timestamp":     timestamp,
		"signature":     base64.StdEncoding.EncodeToString(signature),
	}); err != nil {
		return err
	}
	var authFrame realtimeWire
	if err := conn.ReadJSON(&authFrame); err != nil {
		return fmt.Errorf("读取认证结果失败: %w", err)
	}
	if authFrame.Action == "error" {
		return fmt.Errorf("%w: %s", errRealtimeAuth, firstNonEmpty(authFrame.Message, authFrame.Code, "设备认证失败"))
	}
	if authFrame.Action != "auth.ok" {
		return fmt.Errorf("%w: 服务端未确认设备认证", errRealtimeAuth)
	}
	var authOK realtimeAuthOK
	if err := json.Unmarshal(authFrame.Data, &authOK); err != nil {
		return fmt.Errorf("%w: 认证响应格式无效", errRealtimeAuth)
	}
	if authOK.User.UserID != 0 && authOK.User.UserID != identity.UserID {
		return fmt.Errorf("%w: 服务端身份与本地身份不一致", errRealtimeAuth)
	}

	_ = conn.SetReadDeadline(time.Now().Add(90 * time.Second))
	conn.SetPongHandler(func(string) error {
		return conn.SetReadDeadline(time.Now().Add(90 * time.Second))
	})
	client.setStatus("online", "")
	for {
		var frame realtimeWire
		if err := conn.ReadJSON(&frame); err != nil {
			return err
		}
		if err := client.handleFrame(frame); err != nil {
			client.setTransientError(err)
		}
	}
}

func (client *RealtimeClient) handleFrame(frame realtimeWire) error {
	switch frame.Action {
	case "event.accepted", "error":
		if frame.RequestID != "" && client.resolvePending(frame.RequestID, frame) {
			return nil
		}
		if frame.Action == "error" {
			return errors.New(firstNonEmpty(frame.Message, frame.Code, "实时服务返回错误"))
		}
	case "event.message":
		return client.handleIncomingEvent(frame.Data)
	case "ping":
		return client.writeJSON(map[string]any{"action": "pong", "request_id": frame.RequestID})
	}
	return nil
}

func (client *RealtimeClient) handleIncomingEvent(data json.RawMessage) error {
	var incoming realtimeEventMessage
	if err := json.Unmarshal(data, &incoming); err != nil {
		return fmt.Errorf("解析实时消息失败: %w", err)
	}
	if incoming.MessageID == "" {
		return errors.New("实时消息缺少 message_id")
	}
	identity := client.app.store.Snapshot().RealtimeIdentity
	if identity == nil {
		return errors.New("本地实时身份不存在")
	}
	message := client.convertMessage(incoming, 0, identity.UserID)
	added, err := client.app.store.AddRealtimeMessage(message)
	if err != nil {
		return err
	}
	_ = client.writeJSON(map[string]any{
		"action":     "event.ack",
		"request_id": "ack_" + newID(),
		"message_id": incoming.MessageID,
		"status":     "received",
	})
	if !added {
		return nil
	}
	switch incoming.EventType {
	case "chat.text":
		client.emitMessage(message)
		title := fmt.Sprintf("工位岛 · 用户 %d", message.SenderUserID)
		body := message.Text
		if len([]rune(body)) > 80 {
			body = string([]rune(body)[:80]) + "…"
		}
		go func() { _ = sendNotification(title, body) }()
	case "window.shake":
		client.app.showRealtimeEffect("shake", message.SenderUserID, message.Text)
	case "window.flash":
		client.app.showRealtimeEffect("flash", message.SenderUserID, message.Text)
	}
	client.emitState()
	return nil
}

func (client *RealtimeClient) publish(toUserID int64, eventType string, payload map[string]any) (RealtimeMessage, error) {
	identity := client.app.store.Snapshot().RealtimeIdentity
	if identity == nil || identity.UserID == 0 {
		return RealtimeMessage{}, errors.New("请先创建并上线实时身份")
	}
	if toUserID <= 0 {
		return RealtimeMessage{}, errors.New("请输入有效的对方用户 ID")
	}
	if toUserID == identity.UserID {
		return RealtimeMessage{}, errors.New("不能向自己的用户 ID 发送互动")
	}
	if client.currentStatus() != "online" {
		return RealtimeMessage{}, errors.New("当前未上线，请先连接实时服务")
	}
	requestID := "req_" + newID()
	responseChannel := make(chan realtimeWire, 1)
	client.pendingMu.Lock()
	client.pending[requestID] = responseChannel
	client.pendingMu.Unlock()
	defer func() {
		client.pendingMu.Lock()
		delete(client.pending, requestID)
		client.pendingMu.Unlock()
	}()
	if err := client.writeJSON(map[string]any{
		"action":     "event.publish",
		"request_id": requestID,
		"to_user_id": toUserID,
		"event_type": eventType,
		"payload":    payload,
	}); err != nil {
		return RealtimeMessage{}, err
	}
	select {
	case frame := <-responseChannel:
		if frame.Action == "error" {
			return RealtimeMessage{}, errors.New(firstNonEmpty(frame.Message, frame.Code, "消息发送失败"))
		}
		var accepted realtimeAccepted
		if err := json.Unmarshal(frame.Data, &accepted); err != nil {
			return RealtimeMessage{}, fmt.Errorf("解析发送结果失败: %w", err)
		}
		message := client.convertMessage(accepted.Message, accepted.OnlineDeliveries, identity.UserID)
		if message.PeerUserID == 0 {
			message.PeerUserID = toUserID
		}
		added, err := client.app.store.AddRealtimeMessage(message)
		if err != nil {
			return RealtimeMessage{}, err
		}
		if added {
			client.emitMessage(message)
			client.emitState()
		}
		return message, nil
	case <-time.After(12 * time.Second):
		return RealtimeMessage{}, errors.New("等待实时服务确认超时")
	}
}

func (client *RealtimeClient) convertMessage(source realtimeEventMessage, onlineDeliveries int, ownUserID int64) RealtimeMessage {
	var payload struct {
		Text string `json:"text"`
	}
	_ = json.Unmarshal(source.Payload, &payload)
	createdAt := source.CreatedAt
	if createdAt.IsZero() {
		createdAt = time.Now()
	}
	return RealtimeMessage{
		MessageID:        source.MessageID,
		ChannelID:        source.ChannelID,
		SenderUserID:     source.SenderUserID,
		PeerUserID:       peerFromDirectChannel(source.ChannelID, ownUserID),
		EventType:        source.EventType,
		Text:             payload.Text,
		CreatedAt:        createdAt,
		OnlineDeliveries: onlineDeliveries,
		Outgoing:         source.SenderUserID == ownUserID,
	}
}

func (client *RealtimeClient) ensureIdentity(nickname string) (*RealtimeIdentity, error) {
	state := client.app.store.Snapshot()
	if state.RealtimeIdentity != nil && state.RealtimeIdentity.CredentialID != "" {
		privateKey, err := loadRealtimePrivateKey(state.RealtimeIdentity.DeviceID)
		if err != nil || len(privateKey) != ed25519.PrivateKeySize {
			return nil, errors.New("本机设备私钥不可用，请重置实时身份后重新连接")
		}
		return state.RealtimeIdentity, nil
	}

	var identity RealtimeIdentity
	var privateKey ed25519.PrivateKey
	if state.RealtimeIdentity != nil && state.RealtimeIdentity.DeviceID != "" {
		identity = *state.RealtimeIdentity
		loaded, err := loadRealtimePrivateKey(identity.DeviceID)
		if err != nil || len(loaded) != ed25519.PrivateKeySize {
			return nil, errors.New("本机设备私钥不可用，请重置实时身份后重新连接")
		}
		privateKey = ed25519.PrivateKey(loaded)
	} else {
		publicKey, generatedPrivateKey, err := ed25519.GenerateKey(rand.Reader)
		if err != nil {
			return nil, fmt.Errorf("生成设备密钥失败: %w", err)
		}
		identity = RealtimeIdentity{
			DeviceID:  uuid.NewString(),
			PublicKey: base64.StdEncoding.EncodeToString(publicKey),
		}
		privateKey = generatedPrivateKey
		if err := saveRealtimePrivateKey(identity.DeviceID, privateKey); err != nil {
			return nil, err
		}
		if err := client.app.store.SaveRealtimeIdentity(identity); err != nil {
			_ = deleteRealtimePrivateKey(identity.DeviceID)
			return nil, err
		}
	}

	nickname = strings.TrimSpace(nickname)
	if nickname == "" {
		nickname = defaultRealtimeNickname()
	}
	requestBody, err := json.Marshal(map[string]string{
		"nickname":    nickname,
		"public_key":  identity.PublicKey,
		"device_id":   identity.DeviceID,
		"device_name": defaultRealtimeDeviceName(),
	})
	if err != nil {
		return nil, err
	}
	request, err := http.NewRequest(http.MethodPost, realtimeBootstrapURL, bytes.NewReader(requestBody))
	if err != nil {
		return nil, err
	}
	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("Accept", "application/json")
	response, err := client.app.httpClient.Do(request)
	if err != nil {
		return nil, fmt.Errorf("注册实时设备失败: %w", err)
	}
	defer response.Body.Close()
	var envelope realtimeBootstrapEnvelope
	if err := json.NewDecoder(response.Body).Decode(&envelope); err != nil {
		return nil, fmt.Errorf("解析设备注册响应失败（HTTP %d）", response.StatusCode)
	}
	if response.StatusCode < 200 || response.StatusCode >= 300 || envelope.Code != http.StatusOK {
		return nil, fmt.Errorf("设备注册失败（HTTP %d）：%s", response.StatusCode, firstNonEmpty(envelope.Message, "服务端拒绝注册"))
	}
	if envelope.Data.UserID == 0 || envelope.Data.CredentialID == "" {
		return nil, errors.New("设备注册响应缺少用户或凭据信息")
	}
	identity.UserID = envelope.Data.UserID
	identity.Username = envelope.Data.Username
	identity.DisplayName = envelope.Data.DisplayName
	if envelope.Data.DeviceID != "" && envelope.Data.DeviceID != identity.DeviceID {
		return nil, errors.New("设备注册响应中的 device_id 与本机不一致")
	}
	identity.CredentialID = envelope.Data.CredentialID
	if err := client.app.store.SaveRealtimeIdentity(identity); err != nil {
		return nil, err
	}
	return &identity, nil
}

func (client *RealtimeClient) writeJSON(value any) error {
	client.mu.RLock()
	conn := client.conn
	status := client.status
	client.mu.RUnlock()
	if conn == nil || status == "offline" {
		return errors.New("实时连接不可用")
	}
	return client.writeJSONTo(conn, value)
}

func (client *RealtimeClient) writeJSONTo(conn *websocket.Conn, value any) error {
	client.writeMu.Lock()
	defer client.writeMu.Unlock()
	_ = conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
	return conn.WriteJSON(value)
}

func (client *RealtimeClient) resolvePending(requestID string, frame realtimeWire) bool {
	client.pendingMu.Lock()
	channel := client.pending[requestID]
	client.pendingMu.Unlock()
	if channel == nil {
		return false
	}
	select {
	case channel <- frame:
	default:
	}
	return true
}

func (client *RealtimeClient) failPending(err error) {
	client.pendingMu.Lock()
	pending := client.pending
	client.pending = make(map[string]chan realtimeWire)
	client.pendingMu.Unlock()
	for requestID, channel := range pending {
		select {
		case channel <- realtimeWire{Action: "error", RequestID: requestID, Code: "connection_closed", Message: err.Error()}:
		default:
		}
	}
}

func (client *RealtimeClient) setStatus(status, lastError string) {
	client.mu.Lock()
	client.status = status
	client.lastError = strings.TrimSpace(lastError)
	client.mu.Unlock()
	client.emitState()
}

func (client *RealtimeClient) setTransientError(err error) {
	client.mu.Lock()
	client.lastError = readableRealtimeError(err)
	client.mu.Unlock()
	client.emitState()
}

func (client *RealtimeClient) emitState() {
	if client.app.ctx != nil {
		wailsruntime.EventsEmit(client.app.ctx, "realtime:state", client.Snapshot())
	}
}

func (client *RealtimeClient) emitMessage(message RealtimeMessage) {
	if client.app.ctx != nil {
		wailsruntime.EventsEmit(client.app.ctx, "realtime:message", message)
	}
}

func (client *RealtimeClient) currentStatus() string {
	client.mu.RLock()
	defer client.mu.RUnlock()
	return client.status
}

func (client *RealtimeClient) isDesiredOnline() bool {
	client.mu.RLock()
	defer client.mu.RUnlock()
	return client.desiredOnline
}

func (client *RealtimeClient) lastConnectionError() string {
	client.mu.RLock()
	defer client.mu.RUnlock()
	return client.lastError
}

func peerFromDirectChannel(channelID string, ownUserID int64) int64 {
	parts := strings.Split(channelID, ":")
	if len(parts) != 3 || parts[0] != "direct" {
		return 0
	}
	first, errFirst := strconv.ParseInt(parts[1], 10, 64)
	second, errSecond := strconv.ParseInt(parts[2], 10, 64)
	if errFirst != nil || errSecond != nil {
		return 0
	}
	if first == ownUserID {
		return second
	}
	if second == ownUserID {
		return first
	}
	return 0
}

func signRealtimeChallenge(privateKey ed25519.PrivateKey, challenge, credentialID string, timestamp int64) ([]byte, error) {
	if len(privateKey) != ed25519.PrivateKeySize {
		return nil, errors.New("设备私钥长度无效")
	}
	challenge = strings.TrimSpace(challenge)
	credentialID = strings.TrimSpace(credentialID)
	if challenge == "" || credentialID == "" {
		return nil, errors.New("认证挑战或设备凭据为空")
	}
	signingText := fmt.Sprintf("%s\n%s\n%d", challenge, credentialID, timestamp)
	return ed25519.Sign(privateKey, []byte(signingText)), nil
}

func defaultRealtimeNickname() string {
	if current, err := os.Hostname(); err == nil && strings.TrimSpace(current) != "" {
		return strings.TrimSpace(current) + " 的工位岛"
	}
	return "我的工位岛"
}

func defaultRealtimeDeviceName() string {
	if current, err := os.Hostname(); err == nil && strings.TrimSpace(current) != "" {
		return fmt.Sprintf("%s · %s", strings.TrimSpace(current), runtime.GOOS)
	}
	return "Workday Island · " + runtime.GOOS
}

func readableRealtimeError(err error) string {
	if err == nil {
		return ""
	}
	text := strings.TrimSpace(err.Error())
	if strings.Contains(strings.ToLower(text), "use of closed network connection") {
		return "连接已关闭"
	}
	return text
}

func firstNonEmpty(values ...string) string {
	for _, value := range values {
		if strings.TrimSpace(value) != "" {
			return strings.TrimSpace(value)
		}
	}
	return ""
}

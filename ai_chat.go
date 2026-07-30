package main

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"sync"
	"time"

	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

const aiChatStreamEventName = "ai-chat:stream"

type AIChatModel struct {
	ID             string `json:"id"`
	Name           string `json:"name"`
	Description    string `json:"description"`
	Badge          string `json:"badge"`
	Configured     bool   `json:"configured"`
	Allowed        bool   `json:"allowed"`
	Available      bool   `json:"available"`
	DisabledReason string `json:"disabled_reason,omitempty"`
}

type AIChatPolicy struct {
	AllowedModels   []string `json:"allowed_models"`
	DailyTokenLimit int64    `json:"daily_token_limit"`
	TotalTokenLimit int64    `json:"total_token_limit"`
	DailyUsed       int64    `json:"daily_used"`
	TotalUsed       int64    `json:"total_used"`
	DailyRemaining  int64    `json:"daily_remaining"`
	TotalRemaining  int64    `json:"total_remaining"`
	SourceType      string   `json:"source_type"`
	SourceID        uint64   `json:"source_id"`
	SourceName      string   `json:"source_name"`
	QuotaExceeded   bool     `json:"quota_exceeded"`
	QuotaMessage    string   `json:"quota_message"`
	UnlimitedDaily  bool     `json:"unlimited_daily"`
	UnlimitedTotal  bool     `json:"unlimited_total"`
}

type AIChatModels struct {
	Models []AIChatModel `json:"models"`
	Policy *AIChatPolicy `json:"policy,omitempty"`
}

type AIChatUsage struct {
	ConversationCount int64 `json:"conversation_count"`
	MessageCount      int64 `json:"message_count"`
	TodayTokens       int64 `json:"today_tokens"`
	TotalTokens       int64 `json:"total_tokens"`
}

type AIChatConversation struct {
	ID                 uint64     `json:"id"`
	Title              string     `json:"title"`
	Model              string     `json:"model"`
	SystemPrompt       string     `json:"system_prompt"`
	ThinkingEnabled    bool       `json:"thinking_enabled"`
	Pinned             bool       `json:"pinned"`
	Archived           bool       `json:"archived"`
	MessageCount       int        `json:"message_count"`
	TotalTokens        int64      `json:"total_tokens"`
	LastMessagePreview string     `json:"last_message_preview"`
	LastMessageTime    *time.Time `json:"last_message_time,omitempty"`
	CreateTime         time.Time  `json:"create_time"`
	ModifyTime         time.Time  `json:"modify_time"`
}

type AIChatMessage struct {
	ID               uint64    `json:"id"`
	ConversationID   uint64    `json:"conversation_id"`
	ClientRequestID  string    `json:"client_request_id,omitempty"`
	Role             string    `json:"role"`
	Content          string    `json:"content"`
	ReasoningContent string    `json:"reasoning_content,omitempty"`
	Model            string    `json:"model,omitempty"`
	Status           string    `json:"status"`
	SequenceNo       int       `json:"sequence_no"`
	PromptTokens     int       `json:"prompt_tokens"`
	CompletionTokens int       `json:"completion_tokens"`
	FinishReason     string    `json:"finish_reason,omitempty"`
	ErrorCode        string    `json:"error_code,omitempty"`
	ErrorMessage     string    `json:"error_message,omitempty"`
	Feedback         int8      `json:"feedback"`
	CreateTime       time.Time `json:"create_time"`
	ModifyTime       time.Time `json:"modify_time"`
}

type AIChatConversationPage struct {
	Total    int64                `json:"total"`
	List     []AIChatConversation `json:"list"`
	Page     int                  `json:"page"`
	PageSize int                  `json:"pageSize"`
}

type AIChatConversationInput struct {
	Title           string `json:"title"`
	Model           string `json:"model"`
	SystemPrompt    string `json:"system_prompt"`
	ThinkingEnabled bool   `json:"thinking_enabled"`
}

type AIChatConversationUpdate struct {
	Title           *string `json:"title,omitempty"`
	Model           *string `json:"model,omitempty"`
	SystemPrompt    *string `json:"system_prompt,omitempty"`
	ThinkingEnabled *bool   `json:"thinking_enabled,omitempty"`
	Pinned          *bool   `json:"pinned,omitempty"`
	Archived        *bool   `json:"archived,omitempty"`
}

type AIChatMessageInput struct {
	Content         string `json:"content"`
	ClientRequestID string `json:"client_request_id"`
	Model           string `json:"model"`
	ThinkingEnabled bool   `json:"thinking_enabled"`
}

type AIChatBridgeEvent struct {
	ClientRequestID string         `json:"clientRequestId"`
	Event           string         `json:"event"`
	Payload         map[string]any `json:"payload"`
}

type AIChatClient struct {
	app     *App
	account *CloudDiskClient
	baseURL string
	stream  *http.Client

	mu      sync.Mutex
	cancels map[string]context.CancelFunc
	emit    func(AIChatBridgeEvent)
}

func NewAIChatClient(app *App, account *CloudDiskClient, baseURL string) *AIChatClient {
	client := &AIChatClient{
		app: app, account: account, baseURL: strings.TrimRight(baseURL, "/"),
		stream:  &http.Client{Transport: app.httpClient.Transport},
		cancels: make(map[string]context.CancelFunc),
	}
	client.emit = func(event AIChatBridgeEvent) {
		if app.ctx != nil {
			wailsruntime.EventsEmit(app.ctx, aiChatStreamEventName, event)
		}
	}
	return client
}

func (client *AIChatClient) Shutdown() {
	client.mu.Lock()
	cancels := client.cancels
	client.cancels = make(map[string]context.CancelFunc)
	client.mu.Unlock()
	for _, cancel := range cancels {
		cancel()
	}
}

func (client *AIChatClient) Models(ctx context.Context) (AIChatModels, error) {
	var result AIChatModels
	err := client.account.requestAccountJSON(ctx, http.MethodGet, "/ai-chat/models", nil, &result, "AI 对话")
	if result.Models == nil {
		result.Models = []AIChatModel{}
	}
	return result, err
}

func (client *AIChatClient) Usage(ctx context.Context) (AIChatUsage, error) {
	var result AIChatUsage
	err := client.account.requestAccountJSON(ctx, http.MethodGet, "/ai-chat/usage", nil, &result, "AI 对话")
	return result, err
}

func (client *AIChatClient) Conversations(ctx context.Context, page, pageSize int, keyword string, archived bool) (AIChatConversationPage, error) {
	if page < 1 {
		page = 1
	}
	if pageSize < 1 || pageSize > 100 {
		pageSize = 50
	}
	query := url.Values{}
	query.Set("page", strconv.Itoa(page))
	query.Set("pageSize", strconv.Itoa(pageSize))
	query.Set("archived", strconv.FormatBool(archived))
	if keyword = strings.TrimSpace(keyword); keyword != "" {
		query.Set("keyword", keyword)
	}
	var result AIChatConversationPage
	err := client.account.requestAccountJSON(ctx, http.MethodGet, "/ai-chat/conversations?"+query.Encode(), nil, &result, "AI 对话")
	if result.List == nil {
		result.List = []AIChatConversation{}
	}
	return result, err
}

func (client *AIChatClient) CreateConversation(ctx context.Context, input AIChatConversationInput) (AIChatConversation, error) {
	var result AIChatConversation
	err := client.account.requestAccountJSON(ctx, http.MethodPost, "/ai-chat/conversations", input, &result, "AI 对话")
	return result, err
}

func (client *AIChatClient) UpdateConversation(ctx context.Context, id uint64, input AIChatConversationUpdate) (AIChatConversation, error) {
	if id == 0 {
		return AIChatConversation{}, errors.New("会话 ID 不合法")
	}
	payload := make(map[string]any)
	if input.Title != nil {
		payload["title"] = strings.TrimSpace(*input.Title)
	}
	if input.Model != nil {
		payload["model"] = strings.TrimSpace(*input.Model)
	}
	if input.SystemPrompt != nil {
		payload["system_prompt"] = *input.SystemPrompt
	}
	if input.ThinkingEnabled != nil {
		payload["thinking_enabled"] = *input.ThinkingEnabled
	}
	if input.Pinned != nil {
		payload["pinned"] = *input.Pinned
	}
	if input.Archived != nil {
		payload["archived"] = *input.Archived
	}
	if len(payload) == 0 {
		return AIChatConversation{}, errors.New("没有可更新的会话字段")
	}
	var result AIChatConversation
	path := "/ai-chat/conversations/" + strconv.FormatUint(id, 10)
	err := client.account.requestAccountJSON(ctx, http.MethodPatch, path, payload, &result, "AI 对话")
	return result, err
}

func (client *AIChatClient) DeleteConversation(ctx context.Context, id uint64) error {
	if id == 0 {
		return errors.New("会话 ID 不合法")
	}
	return client.account.requestAccountJSON(ctx, http.MethodDelete, "/ai-chat/conversations/"+strconv.FormatUint(id, 10), nil, nil, "AI 对话")
}

func (client *AIChatClient) Messages(ctx context.Context, conversationID uint64, limit int) ([]AIChatMessage, error) {
	if conversationID == 0 {
		return nil, errors.New("会话 ID 不合法")
	}
	if limit < 1 || limit > 500 {
		limit = 200
	}
	var result []AIChatMessage
	path := "/ai-chat/conversations/" + strconv.FormatUint(conversationID, 10) + "/messages?limit=" + strconv.Itoa(limit)
	err := client.account.requestAccountJSON(ctx, http.MethodGet, path, nil, &result, "AI 对话")
	if result == nil {
		result = []AIChatMessage{}
	}
	return result, err
}

func (client *AIChatClient) Feedback(ctx context.Context, messageID uint64, feedback int8) error {
	if messageID == 0 {
		return errors.New("消息 ID 不合法")
	}
	if feedback < -1 || feedback > 1 {
		return errors.New("反馈值不合法")
	}
	path := "/ai-chat/messages/" + strconv.FormatUint(messageID, 10) + "/feedback"
	return client.account.requestAccountJSON(ctx, http.MethodPatch, path, map[string]any{"feedback": feedback}, nil, "AI 对话")
}

func (client *AIChatClient) StreamMessage(ctx context.Context, conversationID uint64, input AIChatMessageInput) error {
	if conversationID == 0 {
		return errors.New("会话 ID 不合法")
	}
	input.Content = strings.TrimSpace(input.Content)
	input.ClientRequestID = strings.TrimSpace(input.ClientRequestID)
	if input.Content == "" || input.ClientRequestID == "" {
		return errors.New("消息内容和请求 ID 不能为空")
	}
	token := client.account.accountToken()
	if token == "" {
		return ErrCloudDiskLoginRequired
	}
	body, err := json.Marshal(input)
	if err != nil {
		return err
	}
	streamCtx, cancel := context.WithCancel(ctx)
	client.mu.Lock()
	if previous := client.cancels[input.ClientRequestID]; previous != nil {
		previous()
	}
	client.cancels[input.ClientRequestID] = cancel
	client.mu.Unlock()
	defer func() {
		cancel()
		client.mu.Lock()
		delete(client.cancels, input.ClientRequestID)
		client.mu.Unlock()
	}()

	endpoint := client.baseURL + "/ai-chat/conversations/" + strconv.FormatUint(conversationID, 10) + "/messages/stream"
	request, err := http.NewRequestWithContext(streamCtx, http.MethodPost, endpoint, bytes.NewReader(body))
	if err != nil {
		return err
	}
	request.Header.Set("Accept", "text/event-stream")
	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("Authorization", "Bearer "+token)
	setBacklightClientHeaders(request.Header)
	response, err := client.stream.Do(request)
	if err != nil {
		if errors.Is(err, context.Canceled) {
			return context.Canceled
		}
		return fmt.Errorf("连接 AI 对话服务失败: %w", err)
	}
	defer response.Body.Close()
	if response.StatusCode < http.StatusOK || response.StatusCode >= http.StatusMultipleChoices {
		if response.StatusCode == http.StatusUnauthorized {
			client.account.Logout()
		}
		return decodeAIChatHTTPError(response)
	}
	return client.readSSE(response.Body, input.ClientRequestID)
}

func (client *AIChatClient) Cancel(clientRequestID string) {
	client.mu.Lock()
	cancel := client.cancels[strings.TrimSpace(clientRequestID)]
	client.mu.Unlock()
	if cancel != nil {
		cancel()
	}
}

func (client *AIChatClient) readSSE(body io.Reader, clientRequestID string) error {
	reader := bufio.NewReaderSize(body, 32*1024)
	eventName := "message"
	dataLines := make([]string, 0, 2)
	dispatch := func() error {
		if len(dataLines) == 0 {
			eventName = "message"
			return nil
		}
		payload := make(map[string]any)
		if err := json.Unmarshal([]byte(strings.Join(dataLines, "\n")), &payload); err != nil {
			return fmt.Errorf("AI 对话流数据无效: %w", err)
		}
		client.emit(AIChatBridgeEvent{ClientRequestID: clientRequestID, Event: eventName, Payload: payload})
		eventName = "message"
		dataLines = dataLines[:0]
		return nil
	}
	for {
		line, err := reader.ReadString('\n')
		line = strings.TrimRight(line, "\r\n")
		switch {
		case line == "":
			if dispatchErr := dispatch(); dispatchErr != nil {
				return dispatchErr
			}
		case strings.HasPrefix(line, "event:"):
			eventName = strings.TrimSpace(strings.TrimPrefix(line, "event:"))
		case strings.HasPrefix(line, "data:"):
			value := strings.TrimPrefix(line, "data:")
			dataLines = append(dataLines, strings.TrimPrefix(value, " "))
		}
		if err != nil {
			if errors.Is(err, io.EOF) {
				return dispatch()
			}
			return fmt.Errorf("读取 AI 对话流失败: %w", err)
		}
	}
}

func decodeAIChatHTTPError(response *http.Response) error {
	var envelope struct {
		Message string `json:"message"`
	}
	_ = json.NewDecoder(io.LimitReader(response.Body, 2<<20)).Decode(&envelope)
	message := strings.TrimSpace(envelope.Message)
	if message == "" {
		message = fmt.Sprintf("AI 对话请求失败（HTTP %d）", response.StatusCode)
	}
	return errors.New(message)
}

func (a *App) GetAIChatModels() (AIChatModels, error) {
	return a.aiChat.Models(context.Background())
}

func (a *App) GetAIChatUsage() (AIChatUsage, error) {
	return a.aiChat.Usage(context.Background())
}

func (a *App) ListAIChatConversations(page, pageSize int, keyword string, archived bool) (AIChatConversationPage, error) {
	return a.aiChat.Conversations(context.Background(), page, pageSize, keyword, archived)
}

func (a *App) CreateAIChatConversation(input AIChatConversationInput) (AIChatConversation, error) {
	return a.aiChat.CreateConversation(context.Background(), input)
}

func (a *App) UpdateAIChatConversation(id uint64, input AIChatConversationUpdate) (AIChatConversation, error) {
	return a.aiChat.UpdateConversation(context.Background(), id, input)
}

func (a *App) DeleteAIChatConversation(id uint64) error {
	return a.aiChat.DeleteConversation(context.Background(), id)
}

func (a *App) ListAIChatMessages(conversationID uint64, limit int) ([]AIChatMessage, error) {
	return a.aiChat.Messages(context.Background(), conversationID, limit)
}

func (a *App) SetAIChatFeedback(messageID uint64, feedback int8) error {
	return a.aiChat.Feedback(context.Background(), messageID, feedback)
}

func (a *App) StreamAIChatMessage(conversationID uint64, input AIChatMessageInput) error {
	return a.aiChat.StreamMessage(context.Background(), conversationID, input)
}

func (a *App) CancelAIChatStream(clientRequestID string) {
	a.aiChat.Cancel(clientRequestID)
}

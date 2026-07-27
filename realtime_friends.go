package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"sort"
	"strconv"
	"strings"
	"time"
)

type realtimeUserSummaryWire struct {
	UserID      int64  `json:"user_id"`
	Username    string `json:"username"`
	DisplayName string `json:"display_name"`
	AvatarURL   string `json:"avatar_url"`
	Online      bool   `json:"online"`
}

type realtimeFriendWire struct {
	User         realtimeUserSummaryWire `json:"user"`
	FriendsSince time.Time               `json:"friends_since"`
}

type realtimeFriendRequestWire struct {
	FriendRequestID string                  `json:"friend_request_id"`
	Requester       realtimeUserSummaryWire `json:"requester"`
	Addressee       realtimeUserSummaryWire `json:"addressee"`
	Message         string                  `json:"message"`
	Status          string                  `json:"status"`
	RespondedAt     *time.Time              `json:"responded_at"`
	CreateTime      time.Time               `json:"create_time"`
	ModifyTime      time.Time               `json:"modify_time"`
}

func (client *RealtimeClient) CreateFriendRequest(target, message string) (RealtimeFriendRequest, error) {
	target = strings.TrimSpace(target)
	message = strings.TrimSpace(message)
	if target == "" {
		return RealtimeFriendRequest{}, errors.New("请输入好友用户名或用户 ID")
	}
	if len([]rune(message)) > 255 {
		return RealtimeFriendRequest{}, errors.New("好友申请留言不能超过 255 个字符")
	}
	payload := map[string]any{"message": message}
	if userID, err := strconv.ParseInt(target, 10, 64); err == nil && userID > 0 {
		payload["target_user_id"] = userID
	} else {
		if len([]rune(target)) > 100 {
			return RealtimeFriendRequest{}, errors.New("用户名不能超过 100 个字符")
		}
		payload["target_username"] = target
	}
	frame, err := client.request("friend.request.create", payload)
	if err != nil {
		return RealtimeFriendRequest{}, err
	}
	if frame.Action != "friend.request.created" {
		return RealtimeFriendRequest{}, fmt.Errorf("好友申请响应无效：%s", frame.Action)
	}
	request, err := decodeFriendRequest(frame.Data)
	if err != nil {
		return RealtimeFriendRequest{}, err
	}
	client.mergeFriendRequest(request)
	client.emitState()
	return request, nil
}

func (client *RealtimeClient) RespondFriendRequest(friendRequestID, decision string) (RealtimeFriendRequest, error) {
	friendRequestID = strings.TrimSpace(friendRequestID)
	if friendRequestID == "" {
		return RealtimeFriendRequest{}, errors.New("好友申请 ID 不能为空")
	}
	decision = strings.ToLower(strings.TrimSpace(decision))
	if decision != "accept" && decision != "reject" {
		return RealtimeFriendRequest{}, errors.New("好友申请处理方式无效")
	}
	frame, err := client.request("friend.request.respond", map[string]any{
		"friend_request_id": friendRequestID,
		"decision":          decision,
	})
	if err != nil {
		return RealtimeFriendRequest{}, err
	}
	if frame.Action != "friend.request.responded" {
		return RealtimeFriendRequest{}, fmt.Errorf("好友申请处理响应无效：%s", frame.Action)
	}
	request, err := decodeFriendRequest(frame.Data)
	if err != nil {
		return RealtimeFriendRequest{}, err
	}
	client.mergeFriendRequest(request)
	client.emitState()
	if decision == "accept" {
		client.refreshFriendStateAsync()
	}
	return request, nil
}

func (client *RealtimeClient) RemoveFriend(friendUserID int64) error {
	if friendUserID <= 0 {
		return errors.New("好友用户 ID 无效")
	}
	frame, err := client.request("friend.remove", map[string]any{"target_user_id": friendUserID})
	if err != nil {
		return err
	}
	if frame.Action != "friend.removed" {
		return fmt.Errorf("删除好友响应无效：%s", frame.Action)
	}
	client.removeFriend(friendUserID)
	client.emitState()
	return nil
}

func (client *RealtimeClient) RefreshFriends() (RealtimeSnapshot, error) {
	if err := client.refreshFriendState(); err != nil {
		return client.Snapshot(), err
	}
	return client.Snapshot(), nil
}

func (client *RealtimeClient) refreshFriendState() error {
	requestFrame, err := client.request("friend.requests.list", map[string]any{
		"direction": "incoming",
		"status":    "pending",
	})
	if err != nil {
		return err
	}
	if requestFrame.Action != "friend.requests.result" {
		return fmt.Errorf("好友申请列表响应无效：%s", requestFrame.Action)
	}
	var requestWires []realtimeFriendRequestWire
	if err := json.Unmarshal(requestFrame.Data, &requestWires); err != nil {
		return fmt.Errorf("解析好友申请列表失败: %w", err)
	}
	requests := make([]RealtimeFriendRequest, 0, len(requestWires))
	for _, item := range requestWires {
		requests = append(requests, convertFriendRequest(item))
	}

	friendFrame, err := client.request("friend.list", nil)
	if err != nil {
		return err
	}
	if friendFrame.Action != "friend.list.result" {
		return fmt.Errorf("好友列表响应无效：%s", friendFrame.Action)
	}
	var friendWires []realtimeFriendWire
	if err := json.Unmarshal(friendFrame.Data, &friendWires); err != nil {
		return fmt.Errorf("解析好友列表失败: %w", err)
	}
	friends := make([]RealtimeFriend, 0, len(friendWires))
	for _, item := range friendWires {
		friends = append(friends, RealtimeFriend{
			User:         convertUserSummary(item.User),
			FriendsSince: item.FriendsSince,
		})
	}
	sortFriends(friends)
	sort.SliceStable(requests, func(i, j int) bool {
		return requests[i].CreateTime.After(requests[j].CreateTime)
	})
	client.mu.Lock()
	client.friendRequests = requests
	client.friends = friends
	client.mu.Unlock()
	client.emitState()
	return nil
}

func (client *RealtimeClient) refreshFriendStateAsync() {
	go func() {
		if err := client.refreshFriendState(); err != nil && client.currentStatus() == "online" {
			client.setTransientError(err)
		}
	}()
}

func (client *RealtimeClient) request(action string, payload map[string]any) (realtimeWire, error) {
	if client.currentStatus() != "online" {
		return realtimeWire{}, errors.New("当前未上线，请先连接实时服务")
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
	body := make(map[string]any, len(payload)+2)
	body["action"] = action
	body["request_id"] = requestID
	for key, value := range payload {
		body[key] = value
	}
	if err := client.writeJSON(body); err != nil {
		return realtimeWire{}, err
	}
	select {
	case frame := <-responseChannel:
		if frame.Action == "error" {
			return realtimeWire{}, errors.New(firstNonEmpty(frame.Message, frame.Code, "实时服务请求失败"))
		}
		return frame, nil
	case <-time.After(12 * time.Second):
		return realtimeWire{}, errors.New("等待实时服务确认超时")
	}
}

func (client *RealtimeClient) handleFriendRequestPush(data json.RawMessage) error {
	request, err := decodeFriendRequest(data)
	if err != nil {
		return err
	}
	client.mergeFriendRequest(request)
	client.emitState()
	return nil
}

func (client *RealtimeClient) handleFriendAdded(data json.RawMessage) error {
	var wire realtimeUserSummaryWire
	if err := json.Unmarshal(data, &wire); err != nil {
		return fmt.Errorf("解析新增好友失败: %w", err)
	}
	if wire.UserID == 0 {
		return errors.New("新增好友缺少用户 ID")
	}
	client.mergeFriend(RealtimeFriend{User: convertUserSummary(wire), FriendsSince: time.Now()})
	client.emitState()
	return nil
}

func (client *RealtimeClient) handleFriendRemoved(data json.RawMessage) error {
	var payload struct {
		UserID       int64 `json:"user_id"`
		FriendUserID int64 `json:"friend_user_id"`
	}
	if err := json.Unmarshal(data, &payload); err != nil {
		return fmt.Errorf("解析删除好友事件失败: %w", err)
	}
	identity := client.currentIdentity()
	if identity == nil {
		return errors.New("本地实时身份不存在")
	}
	target := payload.FriendUserID
	if target == identity.UserID || target == 0 {
		target = payload.UserID
	}
	if target == 0 || target == identity.UserID {
		return errors.New("删除好友事件缺少对方用户 ID")
	}
	client.removeFriend(target)
	client.emitState()
	return nil
}

func (client *RealtimeClient) mergeFriendRequest(incoming RealtimeFriendRequest) {
	if incoming.FriendRequestID == "" {
		return
	}
	client.mu.Lock()
	defer client.mu.Unlock()
	for index := range client.friendRequests {
		if client.friendRequests[index].FriendRequestID != incoming.FriendRequestID {
			continue
		}
		current := client.friendRequests[index]
		if incoming.Requester.UserID == 0 {
			incoming.Requester = current.Requester
		}
		if incoming.Addressee.UserID == 0 {
			incoming.Addressee = current.Addressee
		}
		if incoming.Message == "" {
			incoming.Message = current.Message
		}
		if incoming.CreateTime.IsZero() {
			incoming.CreateTime = current.CreateTime
		}
		client.friendRequests[index] = incoming
		return
	}
	client.friendRequests = append(client.friendRequests, incoming)
	sort.SliceStable(client.friendRequests, func(i, j int) bool {
		return client.friendRequests[i].CreateTime.After(client.friendRequests[j].CreateTime)
	})
}

func (client *RealtimeClient) mergeFriend(incoming RealtimeFriend) {
	if incoming.User.UserID == 0 {
		return
	}
	client.mu.Lock()
	defer client.mu.Unlock()
	for index := range client.friends {
		if client.friends[index].User.UserID == incoming.User.UserID {
			if incoming.FriendsSince.IsZero() {
				incoming.FriendsSince = client.friends[index].FriendsSince
			}
			client.friends[index] = incoming
			sortFriends(client.friends)
			return
		}
	}
	client.friends = append(client.friends, incoming)
	sortFriends(client.friends)
}

func (client *RealtimeClient) removeFriend(userID int64) {
	client.mu.Lock()
	defer client.mu.Unlock()
	filtered := client.friends[:0]
	for _, friend := range client.friends {
		if friend.User.UserID != userID {
			filtered = append(filtered, friend)
		}
	}
	client.friends = filtered
}

func decodeFriendRequest(data json.RawMessage) (RealtimeFriendRequest, error) {
	var wire realtimeFriendRequestWire
	if err := json.Unmarshal(data, &wire); err != nil {
		return RealtimeFriendRequest{}, fmt.Errorf("解析好友申请失败: %w", err)
	}
	if wire.FriendRequestID == "" {
		return RealtimeFriendRequest{}, errors.New("好友申请响应缺少申请 ID")
	}
	return convertFriendRequest(wire), nil
}

func convertFriendRequest(wire realtimeFriendRequestWire) RealtimeFriendRequest {
	return RealtimeFriendRequest{
		FriendRequestID: wire.FriendRequestID,
		Requester:       convertUserSummary(wire.Requester),
		Addressee:       convertUserSummary(wire.Addressee),
		Message:         wire.Message,
		Status:          wire.Status,
		RespondedAt:     wire.RespondedAt,
		CreateTime:      wire.CreateTime,
		ModifyTime:      wire.ModifyTime,
	}
}

func convertUserSummary(wire realtimeUserSummaryWire) RealtimeUserSummary {
	return RealtimeUserSummary{
		UserID:      wire.UserID,
		Username:    wire.Username,
		DisplayName: wire.DisplayName,
		AvatarURL:   wire.AvatarURL,
		Online:      wire.Online,
	}
}

func sortFriends(friends []RealtimeFriend) {
	sort.SliceStable(friends, func(i, j int) bool {
		if friends[i].User.Online != friends[j].User.Online {
			return friends[i].User.Online
		}
		left := strings.ToLower(firstNonEmpty(friends[i].User.DisplayName, friends[i].User.Username))
		right := strings.ToLower(firstNonEmpty(friends[j].User.DisplayName, friends[j].User.Username))
		return left < right
	})
}

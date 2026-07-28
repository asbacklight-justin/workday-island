package main

import (
	"context"
	"crypto/ed25519"
	"crypto/rand"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/gorilla/websocket"
)

func TestPeerFromDirectChannel(t *testing.T) {
	tests := []struct {
		name      string
		channelID string
		ownID     int64
		want      int64
	}{
		{name: "first participant", channelID: "direct:12:45", ownID: 12, want: 45},
		{name: "second participant", channelID: "direct:12:45", ownID: 45, want: 12},
		{name: "not a participant", channelID: "direct:12:45", ownID: 99, want: 0},
		{name: "invalid channel", channelID: "group:12:45", ownID: 12, want: 0},
		{name: "invalid ids", channelID: "direct:a:45", ownID: 12, want: 0},
	}
	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			if got := peerFromDirectChannel(test.channelID, test.ownID); got != test.want {
				t.Fatalf("peerFromDirectChannel() = %d, want %d", got, test.want)
			}
		})
	}
}

func TestSignRealtimeChallengeUsesDocumentedPayload(t *testing.T) {
	publicKey, privateKey, err := ed25519.GenerateKey(rand.Reader)
	if err != nil {
		t.Fatal(err)
	}
	const (
		challenge  = "challenge-value"
		credential = "cred_device-1"
		timestamp  = int64(1784800000)
	)
	signature, err := signRealtimeChallenge(privateKey, challenge, credential, timestamp)
	if err != nil {
		t.Fatal(err)
	}
	payload := fmt.Sprintf("%s\n%s\n%d", challenge, credential, timestamp)
	if !ed25519.Verify(publicKey, []byte(payload), signature) {
		t.Fatal("signature does not verify against the documented challenge payload")
	}
	if ed25519.Verify(publicKey, []byte(payload+"\n"), signature) {
		t.Fatal("signature unexpectedly verifies with a trailing newline")
	}
}

func TestPasswordAuthenticationUsesDocumentedFrame(t *testing.T) {
	frame := realtimePasswordAuthFrame(" zhangsan ", "secret", "Windows Desktop", "auth_001")
	encoded, err := json.Marshal(frame)
	if err != nil {
		t.Fatal(err)
	}
	var decoded map[string]any
	if err := json.Unmarshal(encoded, &decoded); err != nil {
		t.Fatal(err)
	}
	if decoded["action"] != "auth.password" || decoded["request_id"] != "auth_001" {
		t.Fatalf("unexpected auth envelope: %#v", decoded)
	}
	if decoded["username"] != "zhangsan" || decoded["password"] != "secret" || decoded["device_name"] != "Windows Desktop" {
		t.Fatalf("unexpected password auth fields: %#v", decoded)
	}
}

func TestRealtimeMessagesPersistAndDeduplicate(t *testing.T) {
	store := NewStore(filepath.Join(t.TempDir(), "data.json"))
	message := RealtimeMessage{
		MessageID:    "msg-1",
		ChannelID:    "direct:12:45",
		SenderUserID: 45,
		PeerUserID:   45,
		EventType:    "chat.text",
		Text:         "hello",
		CreatedAt:    time.Now(),
	}
	added, err := store.AddRealtimeMessage(message)
	if err != nil {
		t.Fatal(err)
	}
	if !added {
		t.Fatal("first message should be added")
	}
	added, err = store.AddRealtimeMessage(message)
	if err != nil {
		t.Fatal(err)
	}
	if added {
		t.Fatal("duplicate message should not be added")
	}

	loaded := NewStore(store.path)
	if err := loaded.Load(); err != nil {
		t.Fatal(err)
	}
	messages := loaded.Snapshot().RealtimeMessages
	if len(messages) != 1 || messages[0].MessageID != message.MessageID {
		t.Fatalf("unexpected persisted messages: %#v", messages)
	}
}

func TestConvertWindowEffectPreservesPromptText(t *testing.T) {
	client := &RealtimeClient{}
	message := client.convertMessage(realtimeEventMessage{
		MessageID:         "msg-effect",
		ChannelID:         "direct:12:45",
		SenderUserID:      45,
		SenderDisplayName: "李四",
		EventType:         "window.shake",
		Payload:           json.RawMessage(`{"source":"workday-island","text":"起来活动一下"}`),
		CreatedAt:         time.Now(),
	}, 1, 12)
	if message.PeerUserID != 45 || message.Text != "起来活动一下" || message.SenderDisplayName != "李四" {
		t.Fatalf("unexpected converted effect: %#v", message)
	}
}

func TestConvertWindowEffectFallsBackToFriendDisplayName(t *testing.T) {
	client := &RealtimeClient{friends: []RealtimeFriend{{
		User: RealtimeUserSummary{UserID: 45, Username: "lisi", DisplayName: "李四"},
	}}}
	message := client.convertMessage(realtimeEventMessage{
		MessageID:    "msg-effect-friend",
		ChannelID:    "direct:12:45",
		SenderUserID: 45,
		EventType:    "window.flash",
		Payload:      json.RawMessage(`{"text":""}`),
		CreatedAt:    time.Now(),
	}, 1, 12)
	if message.SenderDisplayName != "李四" {
		t.Fatalf("friend nickname was not used: %#v", message)
	}
}

func TestConvertIncomingMessageFallsBackToSenderWithoutDirectChannel(t *testing.T) {
	client := &RealtimeClient{}
	message := client.convertMessage(realtimeEventMessage{
		MessageID:    "msg-without-channel",
		SenderUserID: 45,
		EventType:    "chat.text",
		Payload:      json.RawMessage(`{"text":"实时消息"}`),
		CreatedAt:    time.Now(),
	}, 1, 12)
	if message.PeerUserID != 45 || message.Outgoing {
		t.Fatalf("incoming message was not attached to its sender: %#v", message)
	}
}

func TestWindowEffectPromptLength(t *testing.T) {
	client := &RealtimeClient{}
	tooLong := make([]rune, 121)
	for index := range tooLong {
		tooLong[index] = '好'
	}
	if _, err := client.SendWindowCommand(45, "flash", string(tooLong)); err == nil {
		t.Fatal("expected an error for an interaction prompt over 120 characters")
	}
}

func TestDecodeDocumentedFriendRequest(t *testing.T) {
	request, err := decodeFriendRequest(json.RawMessage(`{
		"friend_request_id":"fr_test",
		"requester":{"user_id":123,"username":"zhangsan","display_name":"张三","online":true},
		"addressee":{"user_id":456,"username":"lisi","display_name":"李四","online":false},
		"message":"你好",
		"status":"pending",
		"create_time":"2026-07-27T16:05:00+08:00",
		"modify_time":"2026-07-27T16:05:00+08:00"
	}`))
	if err != nil {
		t.Fatal(err)
	}
	if request.FriendRequestID != "fr_test" || request.Requester.UserID != 123 || request.Addressee.UserID != 456 {
		t.Fatalf("unexpected friend request: %#v", request)
	}
	if !request.Requester.Online || request.Addressee.Online || request.Message != "你好" {
		t.Fatalf("friend request fields were not preserved: %#v", request)
	}
}

func TestFriendRequestUpdatePreservesUserSummaries(t *testing.T) {
	client := &RealtimeClient{
		friendRequests: []RealtimeFriendRequest{{
			FriendRequestID: "fr_test",
			Requester:       RealtimeUserSummary{UserID: 123, Username: "zhangsan"},
			Addressee:       RealtimeUserSummary{UserID: 456, Username: "lisi"},
			Message:         "hello",
			Status:          "pending",
		}},
	}
	client.mergeFriendRequest(RealtimeFriendRequest{FriendRequestID: "fr_test", Status: "accepted"})
	updated := client.friendRequests[0]
	if updated.Status != "accepted" || updated.Requester.UserID != 123 || updated.Addressee.UserID != 456 || updated.Message != "hello" {
		t.Fatalf("partial realtime update lost existing fields: %#v", updated)
	}
}

func TestFriendsSortOnlineFirst(t *testing.T) {
	friends := []RealtimeFriend{
		{User: RealtimeUserSummary{UserID: 1, DisplayName: "Alice", Online: false}},
		{User: RealtimeUserSummary{UserID: 2, DisplayName: "Zoe", Online: true}},
		{User: RealtimeUserSummary{UserID: 3, DisplayName: "Bob", Online: true}},
	}
	sortFriends(friends)
	got := []int64{friends[0].User.UserID, friends[1].User.UserID, friends[2].User.UserID}
	want := []int64{3, 2, 1}
	for index := range want {
		if got[index] != want[index] {
			t.Fatalf("sortFriends() = %v, want %v", got, want)
		}
	}
}

func TestRealtimeEndpointHandshake(t *testing.T) {
	if os.Getenv("WORKDAY_ISLAND_REALTIME_TEST") != "1" {
		t.Skip("set WORKDAY_ISLAND_REALTIME_TEST=1 to test the production WebSocket handshake")
	}
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()
	targetURL := os.Getenv("WORKDAY_ISLAND_REALTIME_URL")
	if targetURL == "" {
		targetURL = realtimeWebSocketURL
	}
	conn, response, err := (&websocket.Dialer{HandshakeTimeout: 10 * time.Second}).DialContext(ctx, targetURL, nil)
	if err != nil {
		status := 0
		if response != nil {
			status = response.StatusCode
		}
		t.Fatalf("WebSocket handshake failed (HTTP %d): %v", status, err)
	}
	defer conn.Close()
	_ = conn.SetReadDeadline(time.Now().Add(10 * time.Second))
	var frame realtimeWire
	if err := conn.ReadJSON(&frame); err != nil {
		t.Fatalf("read auth challenge: %v", err)
	}
	if frame.Action != "auth.challenge" {
		t.Fatalf("first action = %q, want auth.challenge", frame.Action)
	}
	var challenge realtimeChallenge
	if err := json.Unmarshal(frame.Data, &challenge); err != nil {
		t.Fatalf("decode auth challenge: %v", err)
	}
	if challenge.Challenge == "" {
		t.Fatal("auth challenge is empty")
	}
}

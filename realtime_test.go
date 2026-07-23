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
		MessageID:    "msg-effect",
		ChannelID:    "direct:12:45",
		SenderUserID: 45,
		EventType:    "window.shake",
		Payload:      json.RawMessage(`{"source":"workday-island","text":"起来活动一下"}`),
		CreatedAt:    time.Now(),
	}, 1, 12)
	if message.PeerUserID != 45 || message.Text != "起来活动一下" {
		t.Fatalf("unexpected converted effect: %#v", message)
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

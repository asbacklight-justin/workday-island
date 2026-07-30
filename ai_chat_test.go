package main

import (
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"testing"
	"time"
)

func TestAIChatClientUsesAccountAndClientHeaders(t *testing.T) {
	t.Parallel()

	var mu sync.Mutex
	var paths []string
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Header.Get("Authorization") != "Bearer ai-chat-token" {
			t.Errorf("authorization = %q", request.Header.Get("Authorization"))
		}
		if request.Header.Get("X-Client-Source") != clientSource {
			t.Errorf("client source = %q", request.Header.Get("X-Client-Source"))
		}
		if request.Header.Get("X-Client-Version") != appVersion {
			t.Errorf("client version = %q", request.Header.Get("X-Client-Version"))
		}
		mu.Lock()
		paths = append(paths, request.URL.RequestURI())
		mu.Unlock()

		writer.Header().Set("Content-Type", "application/json")
		switch {
		case request.URL.Path == "/ai-chat/models":
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"models":[{"id":"deepseek-v4-flash","name":"DeepSeek V4 Flash","available":true}],"policy":{"daily_token_limit":1000}}}`))
		case request.URL.Path == "/ai-chat/usage":
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"conversation_count":2,"message_count":8,"today_tokens":320,"total_tokens":810}}`))
		case request.URL.Path == "/ai-chat/conversations":
			if request.Method == http.MethodPost {
				var payload AIChatConversationInput
				if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
					t.Errorf("decode create payload: %v", err)
				}
				if payload.Model != "deepseek-v4-flash" || !payload.ThinkingEnabled {
					t.Errorf("unexpected create payload: %+v", payload)
				}
				_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"id":7,"title":"新对话","model":"deepseek-v4-flash","thinking_enabled":true}}`))
				return
			}
			if request.URL.Query().Get("archived") != "false" || request.URL.Query().Get("keyword") != "方案" {
				t.Errorf("unexpected conversation query: %s", request.URL.RawQuery)
			}
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"total":1,"list":[{"id":7,"title":"新对话","model":"deepseek-v4-flash"}],"page":1,"pageSize":50}}`))
		default:
			http.NotFound(writer, request)
		}
	}))
	defer server.Close()

	app := NewApp()
	app.cloudDisk.baseURL = server.URL
	app.cloudDisk.mu.Lock()
	app.cloudDisk.token = "ai-chat-token"
	app.cloudDisk.mu.Unlock()
	app.aiChat = NewAIChatClient(app, app.cloudDisk, server.URL)

	models, err := app.GetAIChatModels()
	if err != nil {
		t.Fatalf("GetAIChatModels: %v", err)
	}
	if len(models.Models) != 1 || models.Models[0].ID != "deepseek-v4-flash" {
		t.Fatalf("models = %+v", models.Models)
	}
	usage, err := app.GetAIChatUsage()
	if err != nil {
		t.Fatalf("GetAIChatUsage: %v", err)
	}
	if usage.TodayTokens != 320 || usage.ConversationCount != 2 {
		t.Fatalf("usage = %+v", usage)
	}
	page, err := app.ListAIChatConversations(1, 50, "方案", false)
	if err != nil {
		t.Fatalf("ListAIChatConversations: %v", err)
	}
	if page.Total != 1 || len(page.List) != 1 {
		t.Fatalf("page = %+v", page)
	}
	created, err := app.CreateAIChatConversation(AIChatConversationInput{
		Title: "新对话", Model: "deepseek-v4-flash", ThinkingEnabled: true,
	})
	if err != nil {
		t.Fatalf("CreateAIChatConversation: %v", err)
	}
	if created.ID != 7 {
		t.Fatalf("created = %+v", created)
	}

	mu.Lock()
	defer mu.Unlock()
	if len(paths) != 4 {
		t.Fatalf("paths = %v", paths)
	}
}

func TestAIChatClientStreamsSSEWithRequestIdentity(t *testing.T) {
	t.Parallel()

	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Header.Get("Authorization") != "Bearer stream-token" {
			t.Errorf("authorization = %q", request.Header.Get("Authorization"))
		}
		if request.Header.Get("X-Client-Source") != clientSource || request.Header.Get("X-Client-Version") != appVersion {
			t.Errorf("client headers = %q / %q", request.Header.Get("X-Client-Source"), request.Header.Get("X-Client-Version"))
		}
		writer.Header().Set("Content-Type", "text/event-stream")
		writer.WriteHeader(http.StatusOK)
		_, _ = writer.Write([]byte("event: meta\ndata: {\"message\":{\"id\":9,\"role\":\"assistant\",\"status\":\"streaming\"}}\n\n"))
		_, _ = writer.Write([]byte("event: reasoning\ndata: {\"reasoning\":\"先分析\"}\n\n"))
		_, _ = writer.Write([]byte("event: delta\ndata: {\"delta\":\"你好\"}\n\n"))
		_, _ = writer.Write([]byte("event: done\ndata: {\"message\":{\"id\":9,\"role\":\"assistant\",\"content\":\"你好\",\"status\":\"completed\"}}\n\n"))
	}))
	defer server.Close()

	app := NewApp()
	app.cloudDisk.mu.Lock()
	app.cloudDisk.token = "stream-token"
	app.cloudDisk.mu.Unlock()
	client := NewAIChatClient(app, app.cloudDisk, server.URL)
	var events []AIChatBridgeEvent
	client.emit = func(event AIChatBridgeEvent) {
		events = append(events, event)
	}

	err := client.StreamMessage(context.Background(), 7, AIChatMessageInput{
		Content: "你好", ClientRequestID: "desktop-request-1", Model: "deepseek-v4-flash", ThinkingEnabled: true,
	})
	if err != nil {
		t.Fatalf("StreamMessage: %v", err)
	}
	if len(events) != 4 {
		t.Fatalf("events = %+v", events)
	}
	if events[0].ClientRequestID != "desktop-request-1" || events[0].Event != "meta" {
		t.Fatalf("meta event = %+v", events[0])
	}
	if events[2].Payload["delta"] != "你好" || events[3].Event != "done" {
		t.Fatalf("stream events = %+v", events)
	}
}

func TestAIChatClientCanCancelStream(t *testing.T) {
	t.Parallel()

	started := make(chan struct{})
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		writer.Header().Set("Content-Type", "text/event-stream")
		writer.WriteHeader(http.StatusOK)
		if flusher, ok := writer.(http.Flusher); ok {
			flusher.Flush()
		}
		close(started)
		<-request.Context().Done()
	}))
	defer server.Close()

	app := NewApp()
	app.cloudDisk.mu.Lock()
	app.cloudDisk.token = "stream-token"
	app.cloudDisk.mu.Unlock()
	client := NewAIChatClient(app, app.cloudDisk, server.URL)
	done := make(chan error, 1)
	go func() {
		done <- client.StreamMessage(context.Background(), 2, AIChatMessageInput{
			Content: "停止测试", ClientRequestID: "cancel-me", Model: "deepseek-v4-flash",
		})
	}()

	select {
	case <-started:
	case <-time.After(2 * time.Second):
		t.Fatal("stream did not start")
	}
	client.Cancel("cancel-me")
	select {
	case err := <-done:
		if err == nil || !strings.Contains(err.Error(), "canceled") {
			t.Fatalf("cancel error = %v", err)
		}
	case <-time.After(2 * time.Second):
		t.Fatal("stream did not stop")
	}
}

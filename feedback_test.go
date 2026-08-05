package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"runtime"
	"strings"
	"testing"
)

func TestSubmitPublicFeedback(t *testing.T) {
	previousEndpoint := publicFeedbackEndpoint
	defer func() { publicFeedbackEndpoint = previousEndpoint }()

	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Method != http.MethodPost {
			t.Fatalf("method = %s", request.Method)
		}
		for name, want := range map[string]string{
			"X-Client-Source":  clientSource,
			"X-Client-Version": appVersion,
			"X-App-Source":     clientSource,
			"X-App-Version":    appVersion,
		} {
			if got := request.Header.Get(name); got != want {
				t.Errorf("%s = %q, want %q", name, got, want)
			}
		}
		var payload publicFeedbackPayload
		if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
			t.Fatal(err)
		}
		if payload.FeedbackType != "bug" || payload.Title != "按钮没有反应" || payload.Content != "点击后没有任何变化" || payload.Contact != "me@example.com" {
			t.Fatalf("unexpected payload: %#v", payload)
		}
		if payload.Source != clientSource || payload.AppVersion != appVersion || payload.ClientPlatform != runtime.GOOS+"/"+runtime.GOARCH {
			t.Fatalf("missing client metadata: %#v", payload)
		}
		writer.Header().Set("Content-Type", "application/json")
		_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"id":42}}`))
	}))
	defer server.Close()
	publicFeedbackEndpoint = server.URL

	app := NewApp()
	app.httpClient = server.Client()
	result, err := app.SubmitPublicFeedback(PublicFeedbackInput{
		FeedbackType: "bug", Title: " 按钮没有反应 ", Content: " 点击后没有任何变化 ", Contact: " me@example.com ",
	})
	if err != nil {
		t.Fatal(err)
	}
	if result.ID != 42 {
		t.Fatalf("id = %d, want 42", result.ID)
	}
}

func TestSubmitPublicFeedbackValidation(t *testing.T) {
	app := NewApp()
	tests := []struct {
		name  string
		input PublicFeedbackInput
	}{
		{"invalid type", PublicFeedbackInput{FeedbackType: "spam", Title: "a", Content: "b"}},
		{"missing title", PublicFeedbackInput{Content: "b"}},
		{"long title", PublicFeedbackInput{Title: strings.Repeat("题", 161), Content: "b"}},
		{"missing content", PublicFeedbackInput{Title: "a"}},
		{"long content", PublicFeedbackInput{Title: "a", Content: strings.Repeat("内", 5001)}},
		{"long contact", PublicFeedbackInput{Title: "a", Content: "b", Contact: strings.Repeat("c", 161)}},
	}
	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			if _, err := app.SubmitPublicFeedback(test.input); err == nil {
				t.Fatal("expected validation error")
			}
		})
	}
}

func TestSubmitPublicFeedbackServiceError(t *testing.T) {
	previousEndpoint := publicFeedbackEndpoint
	defer func() { publicFeedbackEndpoint = previousEndpoint }()
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, _ *http.Request) {
		writer.WriteHeader(http.StatusTooManyRequests)
		_, _ = writer.Write([]byte(`{"code":429,"message":"请求过于频繁，请稍后重试","data":null}`))
	}))
	defer server.Close()
	publicFeedbackEndpoint = server.URL
	app := NewApp()
	app.httpClient = server.Client()
	_, err := app.SubmitPublicFeedback(PublicFeedbackInput{Title: "建议", Content: "内容"})
	if err == nil || !strings.Contains(err.Error(), "请求过于频繁") {
		t.Fatalf("unexpected error: %v", err)
	}
}

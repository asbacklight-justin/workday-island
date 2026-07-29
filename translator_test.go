package main

import (
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"reflect"
	"testing"
)

func TestTranslationClientUsesSharedAccountAndClientHeaders(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		writer.Header().Set("Content-Type", "application/json")
		if request.Header.Get("Authorization") != "Bearer account-token" {
			t.Fatalf("authorization = %q", request.Header.Get("Authorization"))
		}
		if request.Header.Get("X-Client-Source") != clientSource || request.Header.Get("X-Client-Version") != appVersion {
			t.Fatalf("client headers = %q / %q", request.Header.Get("X-Client-Source"), request.Header.Get("X-Client-Version"))
		}
		switch request.URL.Path {
		case "/ai/translate":
			var payload map[string]string
			if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
				t.Fatal(err)
			}
			if payload["text"] != "你好，世界" || payload["source"] != "auto" || payload["target"] != "en" {
				t.Fatalf("payload = %#v", payload)
			}
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"translated":"Hello, world"}}`))
		case "/ai/translate/quota":
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"daily_char_limit":10000,"used_characters":120,"reserved_characters":0,"remaining_characters":9880,"unlimited":false,"quota_exceeded":false,"source_type":"default","source_name":"系统默认"}}`))
		case "/ai/translate/history":
			if request.URL.Query().Get("page") != "2" || request.URL.Query().Get("pageSize") != "20" || request.URL.Query().Get("keyword") != "world" {
				t.Fatalf("query = %s", request.URL.RawQuery)
			}
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"total":1,"list":[{"id":8,"source_text":"你好，世界","source_lang":"zh","target_text":"Hello, world","target_lang":"en","word_count":5,"translate_time":"2026-07-29T08:00:00Z"}],"page":2,"pageSize":20}}`))
		default:
			http.NotFound(writer, request)
		}
	}))
	defer server.Close()

	account := NewCloudDiskClient(&App{}, server.URL)
	account.token = "account-token"
	client := NewTranslationClient(account)

	result, err := client.Translate(context.Background(), " 你好，世界 ", "auto", "en")
	if err != nil {
		t.Fatal(err)
	}
	if result.Translated != "Hello, world" {
		t.Fatalf("translated = %q", result.Translated)
	}
	quota, err := client.Quota(context.Background())
	if err != nil {
		t.Fatal(err)
	}
	if quota.DailyCharLimit != 10000 || quota.RemainingCharacters != 9880 {
		t.Fatalf("quota = %#v", quota)
	}
	history, err := client.History(context.Background(), 2, 20, " world ")
	if err != nil {
		t.Fatal(err)
	}
	if history.Total != 1 || len(history.List) != 1 || history.List[0].ID != 8 {
		t.Fatalf("history = %#v", history)
	}
}

func TestTranslationClientBatchDeleteNormalisesIDs(t *testing.T) {
	var received []uint64
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Method != http.MethodDelete || request.URL.Path != "/ai/translate/history" {
			t.Fatalf("request = %s %s", request.Method, request.URL.Path)
		}
		var payload struct {
			IDs []uint64 `json:"ids"`
		}
		if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
			t.Fatal(err)
		}
		received = payload.IDs
		writer.Header().Set("Content-Type", "application/json")
		_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":null}`))
	}))
	defer server.Close()

	account := NewCloudDiskClient(&App{}, server.URL)
	account.token = "account-token"
	if err := NewTranslationClient(account).DeleteHistoryBatch(context.Background(), []uint64{3, 0, 3, 7}); err != nil {
		t.Fatal(err)
	}
	if !reflect.DeepEqual(received, []uint64{3, 7}) {
		t.Fatalf("ids = %v", received)
	}
}

func TestTranslationClientUnauthorizedClearsSharedSession(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, _ *http.Request) {
		writer.Header().Set("Content-Type", "application/json")
		writer.WriteHeader(http.StatusUnauthorized)
		_, _ = writer.Write([]byte(`{"code":401,"message":"expired","data":null}`))
	}))
	defer server.Close()

	account := NewCloudDiskClient(&App{}, server.URL)
	account.token = "expired-token"
	_, err := NewTranslationClient(account).Quota(context.Background())
	if err == nil {
		t.Fatal("expected unauthorized translation request to fail")
	}
	if account.Session().LoggedIn {
		t.Fatal("shared account session should be cleared")
	}
}

func TestTranslationClientValidatesInput(t *testing.T) {
	client := NewTranslationClient(NewCloudDiskClient(&App{}, "http://example.invalid"))
	tests := []struct {
		text, source, target string
	}{
		{"", "auto", "en"},
		{"hello", "xx", "zh"},
		{"hello", "en", "auto"},
		{"hello", "en", "en"},
		{string(make([]rune, maxTranslationCharacters+1)), "auto", "zh"},
	}
	for _, test := range tests {
		if _, err := client.Translate(context.Background(), test.text, test.source, test.target); err == nil {
			t.Fatalf("expected validation error for source=%q target=%q length=%d", test.source, test.target, len([]rune(test.text)))
		}
	}
}

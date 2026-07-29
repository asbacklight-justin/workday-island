package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"sync/atomic"
	"testing"
	"time"
)

func TestEnglishClientStartsQuizAndMapsQuestions(t *testing.T) {
	var loginCalls atomic.Int32
	var startSource string
	server := httptest.NewServer(http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
		response.Header().Set("Content-Type", "application/json")
		if request.Header.Get("X-Client-Source") != clientSource || request.Header.Get("X-Client-Version") != appVersion {
			t.Fatalf("missing client headers: source=%q version=%q", request.Header.Get("X-Client-Source"), request.Header.Get("X-Client-Version"))
		}
		switch request.URL.Path {
		case "/user/login":
			loginCalls.Add(1)
			var payload map[string]any
			if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
				t.Fatal(err)
			}
			if payload["username"] != englishUsername || payload["password"] != englishPassword {
				t.Fatalf("unexpected login payload: %#v", payload)
			}
			_, _ = response.Write([]byte(`{"code":200,"message":"login success","data":{"token":"test-token"}}`))
		case "/word-game/game/start":
			if request.Header.Get("Authorization") != "Bearer test-token" {
				t.Fatalf("unexpected authorization header: %q", request.Header.Get("Authorization"))
			}
			var payload map[string]any
			if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
				t.Fatal(err)
			}
			startSource, _ = payload["source"].(string)
			_, _ = response.Write([]byte(`{"code":200,"message":"success","data":{"session":{"id":42},"questions":[{"word_id":7,"word":"concise","translation":"简明的","phonetic":"/kənˈsaɪs/","example":"Keep it concise.","source":"nce2","options":["模糊的","昂贵的","简明的","安静的"],"correct_answer":"简明的"}]}}`))
		default:
			http.NotFound(response, request)
		}
	}))
	defer server.Close()

	client := NewEnglishClient(&http.Client{Timeout: time.Second}, server.URL)
	batch, err := client.Start("quiz", "nce2")
	if err != nil {
		t.Fatal(err)
	}
	if loginCalls.Load() != 1 {
		t.Fatalf("expected one login, got %d", loginCalls.Load())
	}
	if startSource != "nce2" {
		t.Fatalf("expected nce2 source, got %q", startSource)
	}
	if batch.Mode != "quiz" || batch.SessionID != 42 || len(batch.Questions) != 1 {
		t.Fatalf("unexpected batch: %#v", batch)
	}
	question := batch.Questions[0]
	if question.WordID != 7 || question.Word != "concise" || question.Source != "nce2" || question.CorrectAnswer != "简明的" || len(question.Options) != 4 {
		t.Fatalf("unexpected question: %#v", question)
	}
}

func TestEnglishClientTranslatesAndCachesExample(t *testing.T) {
	var translateCalls atomic.Int32
	server := httptest.NewServer(http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
		response.Header().Set("Content-Type", "application/json")
		switch request.URL.Path {
		case "/user/login":
			_, _ = response.Write([]byte(`{"code":200,"message":"success","data":{"token":"test-token"}}`))
		case "/ai/translate":
			translateCalls.Add(1)
			if request.Header.Get("Authorization") != "Bearer test-token" {
				t.Fatalf("unexpected authorization header: %q", request.Header.Get("Authorization"))
			}
			var payload map[string]string
			if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
				t.Fatal(err)
			}
			if payload["text"] != "Keep it concise." || payload["source"] != "en" || payload["target"] != "zh" {
				t.Fatalf("unexpected translation payload: %#v", payload)
			}
			_, _ = response.Write([]byte(`{"code":200,"message":"success","data":{"translated":"保持简洁。"}}`))
		default:
			http.NotFound(response, request)
		}
	}))
	defer server.Close()

	client := NewEnglishClient(&http.Client{Timeout: time.Second}, server.URL)
	for i := 0; i < 2; i++ {
		got, err := client.TranslateExample(" Keep it concise. ")
		if err != nil {
			t.Fatal(err)
		}
		if got != "保持简洁。" {
			t.Fatalf("unexpected translation: %q", got)
		}
	}
	if translateCalls.Load() != 1 {
		t.Fatalf("translation was not cached: calls=%d", translateCalls.Load())
	}
}

func TestEnglishAPISource(t *testing.T) {
	tests := map[string]string{
		"":        "nce2",
		"invalid": "nce2",
		"all":     "",
		"nce2":    "nce2",
		"nce3":    "nce3",
		"cet4":    "cet4",
		"cet6":    "cet6",
		"ielts":   "ielts",
	}
	for input, expected := range tests {
		if got := englishAPISource(input); got != expected {
			t.Fatalf("englishAPISource(%q) = %q, want %q", input, got, expected)
		}
	}
}

func TestEnglishClientRelogsOnceAfterUnauthorized(t *testing.T) {
	var loginCalls atomic.Int32
	var answerCalls atomic.Int32
	server := httptest.NewServer(http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
		response.Header().Set("Content-Type", "application/json")
		switch request.URL.Path {
		case "/user/login":
			call := loginCalls.Add(1)
			_, _ = response.Write([]byte(fmt.Sprintf(`{"code":200,"message":"success","data":{"token":"token-%d"}}`, call)))
		case "/word-game/game/submit-single-answer":
			call := answerCalls.Add(1)
			if call == 1 {
				response.WriteHeader(http.StatusUnauthorized)
				_, _ = response.Write([]byte(`{"code":401,"message":"expired","data":null}`))
				return
			}
			if request.Header.Get("Authorization") != "Bearer token-2" {
				t.Fatalf("retry did not use refreshed token: %q", request.Header.Get("Authorization"))
			}
			_, _ = response.Write([]byte(`{"code":200,"message":"success","data":{"is_correct":true,"correct_answer":"简明的"}}`))
		default:
			http.NotFound(response, request)
		}
	}))
	defer server.Close()

	client := NewEnglishClient(&http.Client{Timeout: time.Second}, server.URL)
	result, err := client.SubmitAnswer(3, 8, "简明的")
	if err != nil {
		t.Fatal(err)
	}
	if !result.Correct || result.CorrectAnswer != "简明的" {
		t.Fatalf("unexpected result: %#v", result)
	}
	if loginCalls.Load() != 2 || answerCalls.Load() != 2 {
		t.Fatalf("expected one retry, login=%d answer=%d", loginCalls.Load(), answerCalls.Load())
	}
}

func TestEnglishGameTypeForMode(t *testing.T) {
	tests := []struct {
		input    string
		mode     string
		gameType string
	}{
		{input: "study", mode: "study", gameType: "flash_card"},
		{input: "sentence", mode: "sentence", gameType: "flash_card"},
		{input: "quiz", mode: "quiz", gameType: "multiple_choice"},
		{input: "chinese", mode: "chinese", gameType: "chinese_picker"},
		{input: "spelling", mode: "spelling", gameType: "spelling"},
		{input: "unknown", mode: "study", gameType: "flash_card"},
	}
	for _, test := range tests {
		mode, gameType := englishGameTypeForMode(test.input)
		if mode != test.mode || gameType != test.gameType {
			t.Fatalf("%q mapped to (%q, %q), want (%q, %q)", test.input, mode, gameType, test.mode, test.gameType)
		}
	}
}

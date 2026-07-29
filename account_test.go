package main

import (
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"
)

func TestRegisterRealtimeAccount(t *testing.T) {
	var received realtimeRegistrationRequest
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Method != http.MethodPost {
			t.Fatalf("method = %s, want POST", request.Method)
		}
		if request.Header.Get("Content-Type") != "application/json" {
			t.Fatalf("content type = %q", request.Header.Get("Content-Type"))
		}
		if request.Header.Get("X-Client-Source") != clientSource || request.Header.Get("X-Client-Version") != appVersion {
			t.Fatalf("missing client headers: source=%q version=%q", request.Header.Get("X-Client-Source"), request.Header.Get("X-Client-Version"))
		}
		if err := json.NewDecoder(request.Body).Decode(&received); err != nil {
			t.Fatalf("decode request: %v", err)
		}
		writer.Header().Set("Content-Type", "application/json")
		_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"id":42,"username":"alice_01","nickname":"Alice"}}`))
	}))
	defer server.Close()

	result, err := registerRealtimeAccount(context.Background(), &http.Client{Timeout: time.Second}, server.URL, RealtimeRegistrationInput{
		Username: " alice_01 ", Nickname: " Alice ", Password: "secret12", ConfirmPassword: "secret12",
		Email: "alice@example.com", Phone: "13800138000", InviteCode: " invite-1 ",
	})
	if err != nil {
		t.Fatalf("register account: %v", err)
	}
	if result.UserID != 42 || result.Username != "alice_01" || result.Nickname != "Alice" {
		t.Fatalf("result = %+v", result)
	}
	if received.Source != "workday-island" || received.Username != "alice_01" || received.InviteCode != "invite-1" {
		t.Fatalf("request = %+v", received)
	}
	if received.Password != "secret12" || received.ConfirmPassword != "secret12" {
		t.Fatal("password fields were not forwarded as required by the registration API")
	}
}

func TestRegisterRealtimeAccountReturnsServiceMessage(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, _ *http.Request) {
		writer.WriteHeader(http.StatusBadRequest)
		_, _ = writer.Write([]byte(`{"code":400,"message":"登录账号已存在","data":null}`))
	}))
	defer server.Close()

	_, err := registerRealtimeAccount(context.Background(), server.Client(), server.URL, validRealtimeRegistrationInput())
	if err == nil || !strings.Contains(err.Error(), "登录账号已存在") {
		t.Fatalf("error = %v", err)
	}
}

func TestNormaliseRealtimeRegistrationRejectsInvalidCoreFields(t *testing.T) {
	tests := []struct {
		name   string
		mutate func(*RealtimeRegistrationInput)
	}{
		{name: "username", mutate: func(input *RealtimeRegistrationInput) { input.Username = "a-b" }},
		{name: "nickname", mutate: func(input *RealtimeRegistrationInput) { input.Nickname = "A" }},
		{name: "password length", mutate: func(input *RealtimeRegistrationInput) { input.Password, input.ConfirmPassword = "123", "123" }},
		{name: "password mismatch", mutate: func(input *RealtimeRegistrationInput) { input.ConfirmPassword = "different" }},
		{name: "email", mutate: func(input *RealtimeRegistrationInput) { input.Email = "not-an-email" }},
		{name: "phone", mutate: func(input *RealtimeRegistrationInput) { input.Phone = "10086" }},
	}
	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			input := validRealtimeRegistrationInput()
			test.mutate(&input)
			if _, err := normaliseRealtimeRegistration(input); err == nil {
				t.Fatal("expected validation error")
			}
		})
	}
}

func TestNormaliseRealtimeRegistrationAllowsEmptyInviteCode(t *testing.T) {
	input := validRealtimeRegistrationInput()
	input.InviteCode = " "
	request, err := normaliseRealtimeRegistration(input)
	if err != nil {
		t.Fatalf("empty invite code should be optional: %v", err)
	}
	if request.InviteCode != "" {
		t.Fatalf("invite code = %q, want empty", request.InviteCode)
	}
}

func validRealtimeRegistrationInput() RealtimeRegistrationInput {
	return RealtimeRegistrationInput{
		Username: "alice_01", Nickname: "Alice", Password: "secret12", ConfirmPassword: "secret12",
		Email: "alice@example.com", Phone: "13800138000", InviteCode: "invite-1",
	}
}

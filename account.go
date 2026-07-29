package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/mail"
	"regexp"
	"strings"
	"unicode/utf8"
)

const realtimeAccountRegisterURL = "https://admin.asbacklight.cn/api/user/register"

var (
	realtimeUsernamePattern = regexp.MustCompile(`^[A-Za-z0-9_]{3,20}$`)
	realtimePhonePattern    = regexp.MustCompile(`^1[3-9][0-9]{9}$`)
)

type realtimeRegistrationRequest struct {
	Username        string `json:"username"`
	Nickname        string `json:"nickname"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
	Email           string `json:"email"`
	Phone           string `json:"phone"`
	InviteCode      string `json:"inviteCode"`
	Source          string `json:"source"`
}

type realtimeRegistrationEnvelope struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Data    struct {
		ID       uint64 `json:"id"`
		Username string `json:"username"`
		Nickname string `json:"nickname"`
	} `json:"data"`
}

func (a *App) RegisterRealtimeAccount(input RealtimeRegistrationInput) (RealtimeRegistrationResult, error) {
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	return registerRealtimeAccount(ctx, a.httpClient, realtimeAccountRegisterURL, input)
}

func registerRealtimeAccount(ctx context.Context, client *http.Client, endpoint string, input RealtimeRegistrationInput) (RealtimeRegistrationResult, error) {
	requestBody, err := normaliseRealtimeRegistration(input)
	if err != nil {
		return RealtimeRegistrationResult{}, err
	}
	body, err := json.Marshal(requestBody)
	if err != nil {
		return RealtimeRegistrationResult{}, fmt.Errorf("创建注册请求失败: %w", err)
	}
	request, err := http.NewRequestWithContext(ctx, http.MethodPost, endpoint, bytes.NewReader(body))
	if err != nil {
		return RealtimeRegistrationResult{}, fmt.Errorf("创建注册请求失败: %w", err)
	}
	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("Accept", "application/json")
	setBacklightClientHeaders(request.Header)
	response, err := client.Do(request)
	if err != nil {
		return RealtimeRegistrationResult{}, fmt.Errorf("连接注册服务失败: %w", err)
	}
	defer response.Body.Close()

	var envelope realtimeRegistrationEnvelope
	if err := json.NewDecoder(io.LimitReader(response.Body, 1<<20)).Decode(&envelope); err != nil {
		return RealtimeRegistrationResult{}, fmt.Errorf("注册服务响应无效: %w", err)
	}
	if response.StatusCode < http.StatusOK || response.StatusCode >= http.StatusMultipleChoices || envelope.Code != http.StatusOK {
		message := strings.TrimSpace(envelope.Message)
		if message == "" {
			message = fmt.Sprintf("注册失败（HTTP %d）", response.StatusCode)
		}
		return RealtimeRegistrationResult{}, errors.New(message)
	}
	if envelope.Data.ID == 0 || strings.TrimSpace(envelope.Data.Username) == "" {
		return RealtimeRegistrationResult{}, errors.New("注册服务未返回完整账号信息")
	}
	return RealtimeRegistrationResult{
		UserID:   envelope.Data.ID,
		Username: envelope.Data.Username,
		Nickname: envelope.Data.Nickname,
	}, nil
}

func normaliseRealtimeRegistration(input RealtimeRegistrationInput) (realtimeRegistrationRequest, error) {
	input.Username = strings.TrimSpace(input.Username)
	input.Nickname = strings.TrimSpace(input.Nickname)
	input.Email = strings.TrimSpace(input.Email)
	input.Phone = strings.TrimSpace(input.Phone)
	input.InviteCode = strings.TrimSpace(input.InviteCode)

	if !realtimeUsernamePattern.MatchString(input.Username) {
		return realtimeRegistrationRequest{}, errors.New("用户名须为 3–20 位字母、数字或下划线")
	}
	nicknameLength := utf8.RuneCountInString(input.Nickname)
	if nicknameLength < 2 || nicknameLength > 20 {
		return realtimeRegistrationRequest{}, errors.New("昵称长度须为 2–20 个字符")
	}
	passwordLength := utf8.RuneCountInString(input.Password)
	if passwordLength < 6 || passwordLength > 20 {
		return realtimeRegistrationRequest{}, errors.New("密码长度须为 6–20 个字符")
	}
	if input.Password != input.ConfirmPassword {
		return realtimeRegistrationRequest{}, errors.New("两次输入的密码不一致")
	}
	if input.Email != "" {
		address, err := mail.ParseAddress(input.Email)
		if err != nil || address.Address != input.Email {
			return realtimeRegistrationRequest{}, errors.New("邮箱格式不正确")
		}
	}
	if input.Phone != "" && !realtimePhonePattern.MatchString(input.Phone) {
		return realtimeRegistrationRequest{}, errors.New("手机号格式不正确")
	}
	return realtimeRegistrationRequest{
		Username:        input.Username,
		Nickname:        input.Nickname,
		Password:        input.Password,
		ConfirmPassword: input.ConfirmPassword,
		Email:           input.Email,
		Phone:           input.Phone,
		InviteCode:      input.InviteCode,
		Source:          "workday-island",
	}, nil
}

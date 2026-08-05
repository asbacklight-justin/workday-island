package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	goruntime "runtime"
	"strings"
)

var publicFeedbackEndpoint = cloudDiskAPIBaseURL + "/public/feedback"

type PublicFeedbackInput struct {
	FeedbackType string `json:"feedbackType"`
	Title        string `json:"title"`
	Content      string `json:"content"`
	Contact      string `json:"contact"`
}

type PublicFeedbackResult struct {
	ID uint64 `json:"id"`
}

type publicFeedbackPayload struct {
	Source         string `json:"source"`
	FeedbackType   string `json:"feedback_type"`
	Title          string `json:"title"`
	Content        string `json:"content"`
	Contact        string `json:"contact"`
	PageURL        string `json:"page_url"`
	AppVersion     string `json:"app_version"`
	ClientPlatform string `json:"client_platform"`
}

// SubmitPublicFeedback sends an explicitly submitted About-page report to the
// public Backlight endpoint. It deliberately does not require an account.
func (a *App) SubmitPublicFeedback(input PublicFeedbackInput) (PublicFeedbackResult, error) {
	feedbackType := strings.ToLower(strings.TrimSpace(input.FeedbackType))
	if feedbackType == "" {
		feedbackType = "suggestion"
	}
	if !isPublicFeedbackType(feedbackType) {
		return PublicFeedbackResult{}, errors.New("请选择有效的反馈类型")
	}
	title := strings.TrimSpace(input.Title)
	content := strings.TrimSpace(input.Content)
	contact := strings.TrimSpace(input.Contact)
	if title == "" {
		return PublicFeedbackResult{}, errors.New("请填写反馈标题")
	}
	if len([]rune(title)) > 160 {
		return PublicFeedbackResult{}, errors.New("反馈标题不能超过 160 个字符")
	}
	if content == "" {
		return PublicFeedbackResult{}, errors.New("请填写反馈内容")
	}
	if len([]rune(content)) > 5000 {
		return PublicFeedbackResult{}, errors.New("反馈内容不能超过 5000 个字符")
	}
	if len([]rune(contact)) > 160 {
		return PublicFeedbackResult{}, errors.New("联系方式不能超过 160 个字符")
	}

	payload, err := json.Marshal(publicFeedbackPayload{
		Source:         clientSource,
		FeedbackType:   feedbackType,
		Title:          title,
		Content:        content,
		Contact:        contact,
		PageURL:        "workday-island://about/feedback",
		AppVersion:     appVersion,
		ClientPlatform: goruntime.GOOS + "/" + goruntime.GOARCH,
	})
	if err != nil {
		return PublicFeedbackResult{}, err
	}
	request, err := http.NewRequestWithContext(context.Background(), http.MethodPost, publicFeedbackEndpoint, bytes.NewReader(payload))
	if err != nil {
		return PublicFeedbackResult{}, err
	}
	request.Header.Set("Accept", "application/json")
	request.Header.Set("Content-Type", "application/json")
	setBacklightClientHeaders(request.Header)
	// The public feedback handler also accepts these compatibility headers and
	// gives them precedence over body metadata.
	request.Header.Set("X-App-Source", clientSource)
	request.Header.Set("X-App-Version", appVersion)

	client := a.httpClient
	if client == nil {
		client = http.DefaultClient
	}
	response, err := client.Do(request)
	if err != nil {
		return PublicFeedbackResult{}, fmt.Errorf("连接意见反馈服务失败: %w", err)
	}
	defer response.Body.Close()
	body, err := io.ReadAll(io.LimitReader(response.Body, 2<<20))
	if err != nil {
		return PublicFeedbackResult{}, fmt.Errorf("读取意见反馈服务响应失败: %w", err)
	}
	var envelope cloudEnvelope
	if err := json.Unmarshal(body, &envelope); err != nil {
		return PublicFeedbackResult{}, fmt.Errorf("意见反馈服务响应无效: %w", err)
	}
	if response.StatusCode < 200 || response.StatusCode >= 300 || envelope.Code != http.StatusOK {
		return PublicFeedbackResult{}, errors.New(firstNonEmpty(strings.TrimSpace(envelope.Message), fmt.Sprintf("提交意见反馈失败（HTTP %d）", response.StatusCode)))
	}
	var result PublicFeedbackResult
	if len(envelope.Data) == 0 || string(envelope.Data) == "null" {
		return result, nil
	}
	if err := json.Unmarshal(envelope.Data, &result); err != nil {
		return PublicFeedbackResult{}, fmt.Errorf("解析意见反馈结果失败: %w", err)
	}
	return result, nil
}

func isPublicFeedbackType(value string) bool {
	switch value {
	case "bug", "suggestion", "experience", "other":
		return true
	default:
		return false
	}
}

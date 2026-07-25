package main

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"
	"sync"
	"time"
)

const (
	englishAPIBaseURL  = "https://admin.asbacklight.cn/api"
	englishUsername    = "tourist"
	englishPassword    = "tourist123456"
	englishBatchSize   = 30
	englishTokenMaxAge = 6*24*time.Hour + 20*time.Hour
)

type EnglishClient struct {
	httpClient *http.Client
	baseURL    string
	mu         sync.Mutex
	token      string
	tokenAt    time.Time
}

type englishEnvelope struct {
	Code    int             `json:"code"`
	Message string          `json:"message"`
	Data    json.RawMessage `json:"data"`
}

type englishLoginData struct {
	Token string `json:"token"`
}

type englishStartData struct {
	Session struct {
		ID uint64 `json:"id"`
	} `json:"session"`
	Questions []struct {
		WordID        uint64   `json:"word_id"`
		Word          string   `json:"word"`
		Translation   string   `json:"translation"`
		Phonetic      string   `json:"phonetic"`
		Example       string   `json:"example"`
		Options       []string `json:"options"`
		CorrectAnswer string   `json:"correct_answer"`
	} `json:"questions"`
}

type englishAnswerData struct {
	IsCorrect     bool   `json:"is_correct"`
	CorrectAnswer string `json:"correct_answer"`
}

func NewEnglishClient(httpClient *http.Client, baseURL string) *EnglishClient {
	return &EnglishClient{
		httpClient: httpClient,
		baseURL:    strings.TrimRight(baseURL, "/"),
	}
}

func (c *EnglishClient) Start(mode, source string) (EnglishStudyBatch, error) {
	mode, gameType := englishGameTypeForMode(mode)
	source = englishAPISource(source)
	payload := map[string]any{
		"game_type":      gameType,
		"question_count": englishBatchSize,
		"source":         source,
	}
	var data englishStartData
	if err := c.authorizedJSON(http.MethodPost, "/word-game/game/start", payload, &data); err != nil {
		return EnglishStudyBatch{}, err
	}
	batch := EnglishStudyBatch{SessionID: data.Session.ID, Mode: mode}
	for _, question := range data.Questions {
		if strings.TrimSpace(question.Word) == "" || strings.TrimSpace(question.Translation) == "" {
			continue
		}
		batch.Questions = append(batch.Questions, EnglishQuestion{
			Word:          question.Word,
			WordID:        question.WordID,
			Translation:   question.Translation,
			Phonetic:      question.Phonetic,
			Example:       question.Example,
			Options:       append([]string(nil), question.Options...),
			CorrectAnswer: question.CorrectAnswer,
		})
	}
	if len(batch.Questions) == 0 {
		return EnglishStudyBatch{}, errors.New("词灵题库暂时没有可用单词")
	}
	return batch, nil
}

func englishAPISource(source string) string {
	if source == "all" {
		return ""
	}
	if validEnglishSource(source) {
		return source
	}
	return "nce2"
}

func englishGameTypeForMode(mode string) (string, string) {
	switch mode {
	case "quiz":
		return mode, "multiple_choice"
	case "chinese":
		return mode, "chinese_picker"
	case "spelling":
		return mode, "spelling"
	default:
		return "study", "flash_card"
	}
}

func (c *EnglishClient) SubmitAnswer(sessionID, wordID uint64, answer string) (EnglishAnswerResult, error) {
	if sessionID == 0 || wordID == 0 {
		return EnglishAnswerResult{}, errors.New("学习会话或单词无效")
	}
	var data englishAnswerData
	err := c.authorizedJSON(http.MethodPost, "/word-game/game/submit-single-answer", map[string]any{
		"session_id":  sessionID,
		"word_id":     wordID,
		"user_answer": strings.TrimSpace(answer),
	}, &data)
	if err != nil {
		return EnglishAnswerResult{}, err
	}
	return EnglishAnswerResult{Correct: data.IsCorrect, CorrectAnswer: data.CorrectAnswer}, nil
}

func (c *EnglishClient) authorizedJSON(method, path string, payload any, result any) error {
	token, err := c.ensureToken(false)
	if err != nil {
		return err
	}
	status, err := c.doJSON(method, path, payload, token, result)
	if err == nil {
		return nil
	}
	if status != http.StatusUnauthorized && status != http.StatusForbidden {
		return err
	}
	token, loginErr := c.ensureToken(true)
	if loginErr != nil {
		return loginErr
	}
	_, err = c.doJSON(method, path, payload, token, result)
	return err
}

func (c *EnglishClient) ensureToken(force bool) (string, error) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if !force && c.token != "" && time.Since(c.tokenAt) < englishTokenMaxAge {
		return c.token, nil
	}
	var data englishLoginData
	_, err := c.doJSON(http.MethodPost, "/user/login", map[string]any{
		"username":      englishUsername,
		"password":      englishPassword,
		"expireSeconds": 604800,
	}, "", &data)
	if err != nil {
		return "", fmt.Errorf("词灵游客登录失败: %w", err)
	}
	if strings.TrimSpace(data.Token) == "" {
		return "", errors.New("词灵游客登录未返回令牌")
	}
	c.token = data.Token
	c.tokenAt = time.Now()
	return c.token, nil
}

func (c *EnglishClient) doJSON(method, path string, payload any, token string, result any) (int, error) {
	body, err := json.Marshal(payload)
	if err != nil {
		return 0, err
	}
	request, err := http.NewRequest(method, c.baseURL+path, bytes.NewReader(body))
	if err != nil {
		return 0, err
	}
	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("Accept", "application/json")
	if token != "" {
		request.Header.Set("Authorization", "Bearer "+token)
	}
	response, err := c.httpClient.Do(request)
	if err != nil {
		return 0, fmt.Errorf("无法连接词灵服务: %w", err)
	}
	defer response.Body.Close()
	raw, err := io.ReadAll(io.LimitReader(response.Body, 2<<20))
	if err != nil {
		return response.StatusCode, fmt.Errorf("读取词灵响应失败: %w", err)
	}
	var envelope englishEnvelope
	if err := json.Unmarshal(raw, &envelope); err != nil {
		return response.StatusCode, fmt.Errorf("词灵服务返回了无效响应 (HTTP %d)", response.StatusCode)
	}
	if response.StatusCode < 200 || response.StatusCode >= 300 || envelope.Code != http.StatusOK {
		message := strings.TrimSpace(envelope.Message)
		if message == "" {
			message = http.StatusText(response.StatusCode)
		}
		return response.StatusCode, fmt.Errorf("%s (HTTP %d)", message, response.StatusCode)
	}
	if result != nil && len(envelope.Data) > 0 && string(envelope.Data) != "null" {
		if err := json.Unmarshal(envelope.Data, result); err != nil {
			return response.StatusCode, fmt.Errorf("解析词灵数据失败: %w", err)
		}
	}
	return response.StatusCode, nil
}

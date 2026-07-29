package main

import (
	"context"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

const maxTranslationCharacters = 4000

var translationLanguages = map[string]bool{
	"auto": true,
	"zh":   true,
	"en":   true,
	"ja":   true,
	"ko":   true,
	"fr":   true,
	"de":   true,
	"es":   true,
	"ru":   true,
	"pt":   true,
	"ar":   true,
}

type TranslationResult struct {
	Translated string `json:"translated"`
}

type TranslationQuota struct {
	DailyCharLimit      int64  `json:"daily_char_limit"`
	UsedCharacters      int64  `json:"used_characters"`
	ReservedCharacters  int64  `json:"reserved_characters"`
	RemainingCharacters int64  `json:"remaining_characters"`
	Unlimited           bool   `json:"unlimited"`
	QuotaExceeded       bool   `json:"quota_exceeded"`
	QuotaMessage        string `json:"quota_message"`
	SourceType          string `json:"source_type"`
	SourceID            uint64 `json:"source_id"`
	SourceName          string `json:"source_name"`
}

type TranslationHistory struct {
	ID            uint64    `json:"id"`
	SourceText    string    `json:"source_text"`
	SourceLang    string    `json:"source_lang"`
	TargetText    string    `json:"target_text"`
	TargetLang    string    `json:"target_lang"`
	WordCount     int       `json:"word_count"`
	TranslateTime time.Time `json:"translate_time"`
	CreateTime    time.Time `json:"create_time"`
}

type TranslationHistoryPage struct {
	Total    int64                `json:"total"`
	List     []TranslationHistory `json:"list"`
	Page     int                  `json:"page"`
	PageSize int                  `json:"pageSize"`
}

type TranslationClient struct {
	account *CloudDiskClient
}

func NewTranslationClient(account *CloudDiskClient) *TranslationClient {
	return &TranslationClient{account: account}
}

func (client *TranslationClient) Translate(ctx context.Context, text, source, target string) (TranslationResult, error) {
	text = strings.TrimSpace(text)
	source = strings.ToLower(strings.TrimSpace(source))
	target = strings.ToLower(strings.TrimSpace(target))
	if text == "" {
		return TranslationResult{}, errors.New("请输入要翻译的文本")
	}
	if len([]rune(text)) > maxTranslationCharacters {
		return TranslationResult{}, fmt.Errorf("翻译内容不能超过 %d 个字符", maxTranslationCharacters)
	}
	if !translationLanguages[source] {
		return TranslationResult{}, errors.New("不支持所选源语言")
	}
	if target == "auto" || !translationLanguages[target] {
		return TranslationResult{}, errors.New("不支持所选目标语言")
	}
	if source != "auto" && source == target {
		return TranslationResult{}, errors.New("源语言与目标语言不能相同")
	}
	var result TranslationResult
	err := client.account.requestAccountJSON(ctx, http.MethodPost, "/ai/translate", map[string]string{
		"text": text, "source": source, "target": target,
	}, &result, "翻译服务")
	if err != nil {
		return TranslationResult{}, err
	}
	if strings.TrimSpace(result.Translated) == "" {
		return TranslationResult{}, errors.New("翻译服务未返回内容")
	}
	return result, nil
}

func (client *TranslationClient) Quota(ctx context.Context) (TranslationQuota, error) {
	var result TranslationQuota
	err := client.account.requestAccountJSON(ctx, http.MethodGet, "/ai/translate/quota", nil, &result, "翻译服务")
	return result, err
}

func (client *TranslationClient) History(ctx context.Context, page, pageSize int, keyword string) (TranslationHistoryPage, error) {
	if page < 1 {
		page = 1
	}
	if pageSize < 1 || pageSize > 200 {
		pageSize = 20
	}
	query := url.Values{}
	query.Set("page", strconv.Itoa(page))
	query.Set("pageSize", strconv.Itoa(pageSize))
	if keyword = strings.TrimSpace(keyword); keyword != "" {
		query.Set("keyword", keyword)
	}
	var result TranslationHistoryPage
	err := client.account.requestAccountJSON(ctx, http.MethodGet, "/ai/translate/history?"+query.Encode(), nil, &result, "翻译服务")
	if result.List == nil {
		result.List = []TranslationHistory{}
	}
	return result, err
}

func (client *TranslationClient) DeleteHistory(ctx context.Context, id uint64) error {
	if id == 0 {
		return errors.New("翻译历史 ID 无效")
	}
	return client.account.requestAccountJSON(ctx, http.MethodDelete, "/ai/translate/history/"+strconv.FormatUint(id, 10), nil, nil, "翻译服务")
}

func (client *TranslationClient) DeleteHistoryBatch(ctx context.Context, ids []uint64) error {
	valid := make([]uint64, 0, len(ids))
	seen := make(map[uint64]bool, len(ids))
	for _, id := range ids {
		if id > 0 && !seen[id] {
			seen[id] = true
			valid = append(valid, id)
		}
	}
	if len(valid) == 0 {
		return errors.New("请选择要删除的翻译历史")
	}
	return client.account.requestAccountJSON(ctx, http.MethodDelete, "/ai/translate/history", map[string]any{"ids": valid}, nil, "翻译服务")
}

func (client *TranslationClient) ExportSelected(keyword string) (CloudDiskTransfer, error) {
	if client.account.app.ctx == nil {
		return CloudDiskTransfer{}, errors.New("应用窗口尚未就绪")
	}
	token := client.account.accountToken()
	if token == "" {
		return CloudDiskTransfer{}, ErrCloudDiskLoginRequired
	}
	destination, err := wailsruntime.SaveFileDialog(client.account.app.ctx, wailsruntime.SaveDialogOptions{
		Title: "导出翻译历史", DefaultFilename: "translate_history.xlsx",
	})
	if err != nil {
		return CloudDiskTransfer{}, err
	}
	if destination == "" {
		return CloudDiskTransfer{Cancelled: true}, nil
	}
	if filepath.Ext(destination) == "" {
		destination += ".xlsx"
	}
	query := url.Values{}
	if keyword = strings.TrimSpace(keyword); keyword != "" {
		query.Set("keyword", keyword)
	}
	target := client.account.baseURL + "/ai/translate/history/export"
	if encoded := query.Encode(); encoded != "" {
		target += "?" + encoded
	}
	request, err := http.NewRequestWithContext(context.Background(), http.MethodGet, target, nil)
	if err != nil {
		return CloudDiskTransfer{}, err
	}
	request.Header.Set("Accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
	request.Header.Set("Authorization", "Bearer "+token)
	setBacklightClientHeaders(request.Header)
	response, err := client.account.apiClient.Do(request)
	if err != nil {
		return CloudDiskTransfer{}, fmt.Errorf("连接翻译服务失败: %w", err)
	}
	defer response.Body.Close()
	if response.StatusCode == http.StatusUnauthorized {
		client.account.Logout()
		return CloudDiskTransfer{}, errors.New("账号登录已过期，请重新登录")
	}
	if response.StatusCode < http.StatusOK || response.StatusCode >= http.StatusMultipleChoices {
		message, _ := io.ReadAll(io.LimitReader(response.Body, 4096))
		return CloudDiskTransfer{}, fmt.Errorf("导出翻译历史失败（HTTP %d）：%s", response.StatusCode, strings.TrimSpace(string(message)))
	}
	temp, err := os.CreateTemp(filepath.Dir(destination), "."+filepath.Base(destination)+".*.part")
	if err != nil {
		return CloudDiskTransfer{}, fmt.Errorf("创建导出文件失败: %w", err)
	}
	tempPath := temp.Name()
	defer os.Remove(tempPath)
	if _, err := io.Copy(temp, response.Body); err != nil {
		_ = temp.Close()
		return CloudDiskTransfer{}, fmt.Errorf("写入导出文件失败: %w", err)
	}
	if err := temp.Close(); err != nil {
		return CloudDiskTransfer{}, err
	}
	if err := replaceDownloadedFile(tempPath, destination); err != nil {
		return CloudDiskTransfer{}, err
	}
	return CloudDiskTransfer{Name: filepath.Base(destination), Path: destination}, nil
}

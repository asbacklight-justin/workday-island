package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"mime"
	"mime/multipart"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/google/uuid"
	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

const cloudDiskAPIBaseURL = "https://admin.asbacklight.cn/api"

var ErrCloudDiskLoginRequired = errors.New("请先登录工位岛账号")

type CloudDiskUser struct {
	ID       uint64 `json:"id"`
	Username string `json:"username"`
	Nickname string `json:"nickname"`
}

type CloudDiskSession struct {
	LoggedIn bool           `json:"loggedIn"`
	User     *CloudDiskUser `json:"user,omitempty"`
}

type AccountSession struct {
	LoggedIn bool             `json:"loggedIn"`
	User     *CloudDiskUser   `json:"user,omitempty"`
	Realtime RealtimeSnapshot `json:"realtime"`
}

type CloudDiskNode struct {
	ID          uint64    `json:"id"`
	ParentID    uint64    `json:"parent_id"`
	NodeType    int8      `json:"node_type"`
	Name        string    `json:"name"`
	Size        int64     `json:"size"`
	ContentType string    `json:"content_type"`
	CreateTime  time.Time `json:"create_time"`
	ModifyTime  time.Time `json:"modify_time"`
}

type CloudDiskPage struct {
	Total    int64           `json:"total"`
	List     []CloudDiskNode `json:"list"`
	Page     int             `json:"page"`
	PageSize int             `json:"pageSize"`
}

type CloudDiskQuota struct {
	UserID            uint64 `json:"user_id"`
	UsedBytes         int64  `json:"used_bytes"`
	DailyUploaded     int64  `json:"daily_uploaded"`
	SingleFileLimit   int64  `json:"single_file_limit"`
	DailyUploadLimit  int64  `json:"daily_upload_limit"`
	TotalStorageLimit int64  `json:"total_storage_limit"`
	StorageRemaining  int64  `json:"storage_remaining"`
	SourceType        string `json:"source_type"`
	SourceName        string `json:"source_name"`
}

type CloudDiskTransfer struct {
	Cancelled bool   `json:"cancelled"`
	Name      string `json:"name,omitempty"`
	Path      string `json:"path,omitempty"`
}

type cloudLoginEnvelope struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Data    struct {
		Token string        `json:"token"`
		User  CloudDiskUser `json:"user"`
	} `json:"data"`
}

type cloudEnvelope struct {
	Code    int             `json:"code"`
	Message string          `json:"message"`
	Data    json.RawMessage `json:"data"`
}

type cloudUploadTicket struct {
	UploadID string            `json:"upload_id"`
	Method   string            `json:"method"`
	URL      string            `json:"url"`
	Fields   map[string]string `json:"fields"`
	Headers  map[string]string `json:"headers"`
}

type cloudDownloadTicket struct {
	URL string `json:"url"`
}

type CloudDiskClient struct {
	app       *App
	baseURL   string
	apiClient *http.Client
	xfer      *http.Client

	mu    sync.RWMutex
	token string
	user  *CloudDiskUser
}

func NewCloudDiskClient(app *App, baseURL string) *CloudDiskClient {
	return &CloudDiskClient{
		app:       app,
		baseURL:   strings.TrimRight(baseURL, "/"),
		apiClient: &http.Client{Timeout: 20 * time.Second},
		xfer:      &http.Client{},
	}
}

func (client *CloudDiskClient) Session() CloudDiskSession {
	client.mu.RLock()
	defer client.mu.RUnlock()
	session := CloudDiskSession{LoggedIn: client.token != ""}
	if client.user != nil {
		user := *client.user
		session.User = &user
	}
	return session
}

func (client *CloudDiskClient) Login(ctx context.Context, username, password string) (CloudDiskSession, error) {
	username = strings.TrimSpace(username)
	if username == "" || password == "" {
		return client.Session(), ErrCloudDiskLoginRequired
	}
	payload, err := json.Marshal(map[string]any{
		"username": username, "password": password, "expireSeconds": 604800,
	})
	if err != nil {
		return client.Session(), err
	}
	request, err := http.NewRequestWithContext(ctx, http.MethodPost, client.baseURL+"/user/login", bytes.NewReader(payload))
	if err != nil {
		return client.Session(), err
	}
	request.Header.Set("Content-Type", "application/json")
	request.Header.Set("Accept", "application/json")
	response, err := client.apiClient.Do(request)
	if err != nil {
		return client.Session(), fmt.Errorf("连接账号服务失败: %w", err)
	}
	defer response.Body.Close()
	var envelope cloudLoginEnvelope
	if err := json.NewDecoder(io.LimitReader(response.Body, 2<<20)).Decode(&envelope); err != nil {
		return client.Session(), fmt.Errorf("账号服务响应无效: %w", err)
	}
	if response.StatusCode < 200 || response.StatusCode >= 300 || envelope.Code != http.StatusOK || envelope.Data.Token == "" {
		return client.Session(), errors.New(firstNonEmpty(strings.TrimSpace(envelope.Message), "用户名或密码错误"))
	}
	client.mu.Lock()
	client.token = envelope.Data.Token
	user := envelope.Data.User
	client.user = &user
	client.mu.Unlock()
	return client.Session(), nil
}

func (client *CloudDiskClient) Logout() {
	client.mu.Lock()
	client.token = ""
	client.user = nil
	client.mu.Unlock()
}

func (client *CloudDiskClient) List(ctx context.Context, parentID uint64, page, pageSize int, keyword string) (CloudDiskPage, error) {
	if page < 1 {
		page = 1
	}
	if pageSize < 1 || pageSize > 100 {
		pageSize = 50
	}
	query := url.Values{}
	query.Set("parent_id", strconv.FormatUint(parentID, 10))
	query.Set("page", strconv.Itoa(page))
	query.Set("pageSize", strconv.Itoa(pageSize))
	if keyword = strings.TrimSpace(keyword); keyword != "" {
		query.Set("keyword", keyword)
	}
	var result CloudDiskPage
	err := client.requestJSON(ctx, http.MethodGet, "/netdisk/items?"+query.Encode(), nil, &result)
	if result.List == nil {
		result.List = []CloudDiskNode{}
	}
	return result, err
}

func (client *CloudDiskClient) Quota(ctx context.Context) (CloudDiskQuota, error) {
	var result CloudDiskQuota
	err := client.requestJSON(ctx, http.MethodGet, "/netdisk/quota", nil, &result)
	return result, err
}

func (client *CloudDiskClient) CreateFolder(ctx context.Context, parentID uint64, name string) (CloudDiskNode, error) {
	var result CloudDiskNode
	err := client.requestJSON(ctx, http.MethodPost, "/netdisk/folders", map[string]any{
		"parent_id": parentID, "name": strings.TrimSpace(name),
	}, &result)
	return result, err
}

func (client *CloudDiskClient) Update(ctx context.Context, id uint64, name *string, parentID *uint64) (CloudDiskNode, error) {
	payload := map[string]any{}
	if name != nil {
		payload["name"] = strings.TrimSpace(*name)
	}
	if parentID != nil {
		payload["parent_id"] = *parentID
	}
	var result CloudDiskNode
	err := client.requestJSON(ctx, http.MethodPatch, "/netdisk/items/"+strconv.FormatUint(id, 10), payload, &result)
	return result, err
}

func (client *CloudDiskClient) Delete(ctx context.Context, id uint64) error {
	return client.requestJSON(ctx, http.MethodDelete, "/netdisk/items/"+strconv.FormatUint(id, 10), nil, nil)
}

func (client *CloudDiskClient) UploadSelected(parentID uint64) (CloudDiskTransfer, error) {
	if client.app.ctx == nil {
		return CloudDiskTransfer{}, errors.New("应用窗口尚未就绪")
	}
	if !client.Session().LoggedIn {
		return CloudDiskTransfer{}, ErrCloudDiskLoginRequired
	}
	selected, err := wailsruntime.OpenFileDialog(client.app.ctx, wailsruntime.OpenDialogOptions{Title: "选择要上传到工作云盘的文件"})
	if err != nil {
		return CloudDiskTransfer{}, err
	}
	if selected == "" {
		return CloudDiskTransfer{Cancelled: true}, nil
	}
	info, err := os.Stat(selected)
	if err != nil {
		return CloudDiskTransfer{}, fmt.Errorf("读取文件失败: %w", err)
	}
	if !info.Mode().IsRegular() {
		return CloudDiskTransfer{}, errors.New("请选择一个普通文件")
	}
	contentType := mime.TypeByExtension(strings.ToLower(filepath.Ext(info.Name())))
	if contentType == "" {
		contentType = "application/octet-stream"
	}
	var ticket cloudUploadTicket
	if err := client.requestJSON(context.Background(), http.MethodPost, "/netdisk/files/upload/init", map[string]any{
		"parent_id": parentID, "name": info.Name(), "size": info.Size(), "content_type": contentType,
	}, &ticket); err != nil {
		return CloudDiskTransfer{}, err
	}
	if ticket.UploadID == "" || ticket.URL == "" {
		return CloudDiskTransfer{}, errors.New("上传服务未返回有效凭证")
	}
	if err := client.uploadFile(selected, info, contentType, ticket); err != nil {
		_ = client.requestJSON(context.Background(), http.MethodDelete, "/netdisk/files/upload/"+url.PathEscape(ticket.UploadID), nil, nil)
		return CloudDiskTransfer{}, err
	}
	var node CloudDiskNode
	if err := client.requestJSON(context.Background(), http.MethodPost, "/netdisk/files/upload/"+url.PathEscape(ticket.UploadID)+"/complete", nil, &node); err != nil {
		_ = client.requestJSON(context.Background(), http.MethodDelete, "/netdisk/files/upload/"+url.PathEscape(ticket.UploadID), nil, nil)
		return CloudDiskTransfer{}, err
	}
	client.emitProgress("upload", info.Name(), info.Size(), info.Size())
	return CloudDiskTransfer{Name: info.Name(), Path: selected}, nil
}

func (client *CloudDiskClient) DownloadSelected(id uint64, name string) (CloudDiskTransfer, error) {
	if client.app.ctx == nil {
		return CloudDiskTransfer{}, errors.New("应用窗口尚未就绪")
	}
	var ticket cloudDownloadTicket
	if err := client.requestJSON(context.Background(), http.MethodGet, "/netdisk/files/"+strconv.FormatUint(id, 10)+"/download", nil, &ticket); err != nil {
		return CloudDiskTransfer{}, err
	}
	if ticket.URL == "" {
		return CloudDiskTransfer{}, errors.New("下载服务未返回有效地址")
	}
	name = filepath.Base(strings.TrimSpace(name))
	if name == "." || name == "" {
		name = "download"
	}
	destination, err := wailsruntime.SaveFileDialog(client.app.ctx, wailsruntime.SaveDialogOptions{
		Title: "保存工作云盘文件", DefaultFilename: name,
	})
	if err != nil {
		return CloudDiskTransfer{}, err
	}
	if destination == "" {
		return CloudDiskTransfer{Cancelled: true}, nil
	}
	request, err := http.NewRequestWithContext(context.Background(), http.MethodGet, ticket.URL, nil)
	if err != nil {
		return CloudDiskTransfer{}, err
	}
	response, err := client.xfer.Do(request)
	if err != nil {
		return CloudDiskTransfer{}, fmt.Errorf("下载文件失败: %w", err)
	}
	defer response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return CloudDiskTransfer{}, fmt.Errorf("下载服务返回 HTTP %d", response.StatusCode)
	}
	temp, err := os.CreateTemp(filepath.Dir(destination), "."+filepath.Base(destination)+".*.part")
	if err != nil {
		return CloudDiskTransfer{}, fmt.Errorf("创建下载文件失败: %w", err)
	}
	tempPath := temp.Name()
	defer os.Remove(tempPath)
	reader := &cloudProgressReader{
		reader: response.Body, total: response.ContentLength,
		report: func(done, total int64) { client.emitProgress("download", name, done, total) },
	}
	if _, err := io.Copy(temp, reader); err != nil {
		_ = temp.Close()
		return CloudDiskTransfer{}, fmt.Errorf("写入下载文件失败: %w", err)
	}
	if err := temp.Close(); err != nil {
		return CloudDiskTransfer{}, err
	}
	if err := replaceDownloadedFile(tempPath, destination); err != nil {
		return CloudDiskTransfer{}, err
	}
	client.emitProgress("download", name, response.ContentLength, response.ContentLength)
	return CloudDiskTransfer{Name: name, Path: destination}, nil
}

func (client *CloudDiskClient) requestJSON(ctx context.Context, method, path string, payload any, output any) error {
	client.mu.RLock()
	token := client.token
	client.mu.RUnlock()
	if token == "" {
		return ErrCloudDiskLoginRequired
	}
	var body io.Reader
	if payload != nil {
		encoded, err := json.Marshal(payload)
		if err != nil {
			return err
		}
		body = bytes.NewReader(encoded)
	}
	request, err := http.NewRequestWithContext(ctx, method, client.baseURL+path, body)
	if err != nil {
		return err
	}
	request.Header.Set("Accept", "application/json")
	request.Header.Set("Authorization", "Bearer "+token)
	if payload != nil {
		request.Header.Set("Content-Type", "application/json")
	}
	response, err := client.apiClient.Do(request)
	if err != nil {
		return fmt.Errorf("连接工作云盘失败: %w", err)
	}
	defer response.Body.Close()
	var envelope cloudEnvelope
	if err := json.NewDecoder(io.LimitReader(response.Body, 8<<20)).Decode(&envelope); err != nil {
		return fmt.Errorf("工作云盘响应无效: %w", err)
	}
	if response.StatusCode == http.StatusUnauthorized || envelope.Code == http.StatusUnauthorized {
		client.Logout()
		return errors.New("账号登录已过期，请重新登录")
	}
	if response.StatusCode < 200 || response.StatusCode >= 300 || envelope.Code != http.StatusOK {
		return errors.New(firstNonEmpty(strings.TrimSpace(envelope.Message), fmt.Sprintf("工作云盘请求失败（HTTP %d）", response.StatusCode)))
	}
	if output == nil || len(envelope.Data) == 0 || string(envelope.Data) == "null" {
		return nil
	}
	if err := json.Unmarshal(envelope.Data, output); err != nil {
		return fmt.Errorf("解析工作云盘数据失败: %w", err)
	}
	return nil
}

func (client *CloudDiskClient) uploadFile(path string, info os.FileInfo, contentType string, ticket cloudUploadTicket) error {
	file, err := os.Open(path)
	if err != nil {
		return fmt.Errorf("打开上传文件失败: %w", err)
	}
	defer file.Close()
	var request *http.Request
	switch ticket.Method {
	case "put":
		reader := &cloudProgressReader{
			reader: file, total: info.Size(),
			report: func(done, total int64) { client.emitProgress("upload", info.Name(), done, total) },
		}
		request, err = http.NewRequest(http.MethodPut, ticket.URL, reader)
		if err == nil {
			request.ContentLength = info.Size()
			for key, value := range ticket.Headers {
				request.Header.Set(key, value)
			}
			if request.Header.Get("Content-Type") == "" {
				request.Header.Set("Content-Type", contentType)
			}
		}
	case "qiniu_form":
		request, err = client.qiniuUploadRequest(file, info, ticket)
	default:
		return errors.New("对象存储不支持当前上传方式")
	}
	if err != nil {
		return err
	}
	response, err := client.xfer.Do(request)
	if err != nil {
		return fmt.Errorf("上传文件失败: %w", err)
	}
	defer response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		message, _ := io.ReadAll(io.LimitReader(response.Body, 4096))
		return fmt.Errorf("对象存储上传失败（HTTP %d）：%s", response.StatusCode, strings.TrimSpace(string(message)))
	}
	return nil
}

func (client *CloudDiskClient) qiniuUploadRequest(file *os.File, info os.FileInfo, ticket cloudUploadTicket) (*http.Request, error) {
	boundary := "workday-island-" + strings.ReplaceAll(uuid.NewString(), "-", "")
	var framing bytes.Buffer
	writer := multipart.NewWriter(&framing)
	if err := writer.SetBoundary(boundary); err != nil {
		return nil, err
	}
	for key, value := range ticket.Fields {
		if err := writer.WriteField(key, value); err != nil {
			return nil, err
		}
	}
	if _, err := writer.CreateFormFile("file", info.Name()); err != nil {
		return nil, err
	}
	prefix := append([]byte(nil), framing.Bytes()...)
	beforeClose := framing.Len()
	if err := writer.Close(); err != nil {
		return nil, err
	}
	suffix := append([]byte(nil), framing.Bytes()[beforeClose:]...)
	reader := &cloudProgressReader{
		reader: io.MultiReader(bytes.NewReader(prefix), file, bytes.NewReader(suffix)),
		total:  int64(len(prefix)) + info.Size() + int64(len(suffix)),
		report: func(done, total int64) { client.emitProgress("upload", info.Name(), done, total) },
	}
	request, err := http.NewRequest(http.MethodPost, ticket.URL, reader)
	if err != nil {
		return nil, err
	}
	request.ContentLength = reader.total
	request.Header.Set("Content-Type", writer.FormDataContentType())
	return request, nil
}

func (client *CloudDiskClient) emitProgress(direction, name string, done, total int64) {
	if client.app.ctx == nil {
		return
	}
	percent := 0
	if total > 0 {
		percent = int(done * 100 / total)
		if percent > 100 {
			percent = 100
		}
	}
	wailsruntime.EventsEmit(client.app.ctx, "cloud:transfer-progress", map[string]any{
		"direction": direction, "name": name, "done": done, "total": total, "percent": percent,
	})
}

type cloudProgressReader struct {
	reader   io.Reader
	total    int64
	done     int64
	lastEmit time.Time
	report   func(done, total int64)
}

func (reader *cloudProgressReader) Read(buffer []byte) (int, error) {
	count, err := reader.reader.Read(buffer)
	reader.done += int64(count)
	now := time.Now()
	if reader.report != nil && (err == io.EOF || reader.done == reader.total || now.Sub(reader.lastEmit) >= 100*time.Millisecond) {
		reader.lastEmit = now
		reader.report(reader.done, reader.total)
	}
	return count, err
}

func replaceDownloadedFile(source, destination string) error {
	if err := os.Rename(source, destination); err == nil {
		return nil
	}
	if err := os.Remove(destination); err != nil && !errors.Is(err, os.ErrNotExist) {
		return fmt.Errorf("无法覆盖已存在的文件: %w", err)
	}
	if err := os.Rename(source, destination); err != nil {
		return fmt.Errorf("保存下载文件失败: %w", err)
	}
	return nil
}

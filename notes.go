package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"html"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strconv"
	"strings"
	"time"

	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

const (
	noteKindFolder = "folder"
	noteKindNote   = "note"
)

var noteHTMLTagPattern = regexp.MustCompile(`(?s)<[^>]*>`)

// NoteNode is the desktop view of a cloud-note folder, note, or recycle entry.
// IDs are opaque to the frontend and include a type prefix so folder and note
// numeric IDs can never collide.
type NoteNode struct {
	ID          string     `json:"id"`
	ParentID    string     `json:"parentId,omitempty"`
	Kind        string     `json:"kind"`
	Title       string     `json:"title"`
	Content     string     `json:"content,omitempty"`
	ContentType string     `json:"contentType,omitempty"`
	Favorite    bool       `json:"favorite,omitempty"`
	Pinned      bool       `json:"pinned,omitempty"`
	HasPassword bool       `json:"hasPassword,omitempty"`
	Locked      bool       `json:"locked,omitempty"`
	WordCount   int        `json:"wordCount,omitempty"`
	Revision    uint64     `json:"revision,omitempty"`
	DeletedAt   *time.Time `json:"deletedAt,omitempty"`
	CreatedAt   time.Time  `json:"createdAt"`
	UpdatedAt   time.Time  `json:"updatedAt"`
}

type NoteVersion struct {
	ID        string    `json:"id"`
	NoteID    string    `json:"noteId"`
	Title     string    `json:"title"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"createdAt"`
}

type NoteNodeInput struct {
	ParentID    string `json:"parentId"`
	Kind        string `json:"kind"`
	Title       string `json:"title"`
	Content     string `json:"content,omitempty"`
	ContentType string `json:"contentType,omitempty"`
}

type NoteUpdateInput struct {
	Title       string `json:"title"`
	Content     string `json:"content"`
	Revision    uint64 `json:"revision,omitempty"`
	ContentType string `json:"contentType,omitempty"`
}

type NoteExportResult struct {
	Cancelled bool   `json:"cancelled"`
	Path      string `json:"path,omitempty"`
	Name      string `json:"name,omitempty"`
}

type cloudNoteFolder struct {
	ID         uint64    `json:"id"`
	ParentID   uint64    `json:"parent_id"`
	FolderName string    `json:"folder_name"`
	IsPinned   int8      `json:"is_pinned"`
	CreateTime time.Time `json:"create_time"`
	ModifyTime time.Time `json:"modify_time"`
}

type cloudNoteListItem struct {
	ID          uint64    `json:"id"`
	FolderID    uint64    `json:"folder_id"`
	Title       string    `json:"title"`
	Snippet     string    `json:"snippet"`
	ContentType string    `json:"content_type"`
	IsPinned    int8      `json:"is_pinned"`
	IsFavorite  int8      `json:"is_favorite"`
	WordCount   int       `json:"word_count"`
	HasPassword bool      `json:"has_password"`
	IsLocked    bool      `json:"is_locked"`
	Revision    uint64    `json:"revision"`
	CreateTime  time.Time `json:"create_time"`
	ModifyTime  time.Time `json:"modify_time"`
}

type cloudNoteDetail struct {
	ID          uint64    `json:"id"`
	FolderID    uint64    `json:"folder_id"`
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	ContentType string    `json:"content_type"`
	IsPinned    int8      `json:"is_pinned"`
	IsFavorite  int8      `json:"is_favorite"`
	WordCount   int       `json:"word_count"`
	Revision    uint64    `json:"revision"`
	IsLocked    bool      `json:"is_locked"`
	HasPassword bool      `json:"has_password"`
	CreateTime  time.Time `json:"create_time"`
	ModifyTime  time.Time `json:"modify_time"`
	UnlockToken string    `json:"unlock_token,omitempty"`
}

type cloudNoteCreateResult cloudNoteDetail

func (result *cloudNoteCreateResult) UnmarshalJSON(data []byte) error {
	trimmed := strings.TrimSpace(string(data))
	if strings.HasPrefix(trimmed, "{") {
		var detail cloudNoteDetail
		if err := json.Unmarshal(data, &detail); err != nil {
			return err
		}
		*result = cloudNoteCreateResult(detail)
		return nil
	}
	var id uint64
	if err := json.Unmarshal(data, &id); err != nil {
		return err
	}
	result.ID = id
	return nil
}

type cloudNoteRecycleItem struct {
	ID         uint64     `json:"id"`
	NoteID     uint64     `json:"note_id"`
	Title      string     `json:"title"`
	DeleteTime time.Time  `json:"delete_time"`
	ExpireTime *time.Time `json:"expire_time"`
}

type cloudNoteVersion struct {
	VersionNo  int       `json:"version_no"`
	Title      string    `json:"title"`
	Content    string    `json:"content"`
	CreateTime time.Time `json:"create_time"`
}

type cloudNotePage[T any] struct {
	Total    int64 `json:"total"`
	List     []T   `json:"list"`
	Page     int   `json:"page"`
	PageSize int   `json:"pageSize"`
}

func folderNodeID(id uint64) string { return "folder:" + strconv.FormatUint(id, 10) }
func noteNodeID(id uint64) string   { return "note:" + strconv.FormatUint(id, 10) }
func recycleNodeID(id uint64) string {
	return "recycle:" + strconv.FormatUint(id, 10)
}

func parseCloudNodeID(value string) (kind string, id uint64, err error) {
	parts := strings.Split(strings.TrimSpace(value), ":")
	if len(parts) != 2 || (parts[0] != noteKindFolder && parts[0] != noteKindNote && parts[0] != "recycle") {
		return "", 0, errors.New("云笔记项目不存在")
	}
	id, err = strconv.ParseUint(parts[1], 10, 64)
	if err != nil || id == 0 {
		return "", 0, errors.New("云笔记项目不存在")
	}
	return parts[0], id, nil
}

func parseCloudFolderID(value string) (uint64, error) {
	if strings.TrimSpace(value) == "" {
		return 0, nil
	}
	kind, id, err := parseCloudNodeID(value)
	if err != nil || kind != noteKindFolder {
		return 0, errors.New("目标文件夹不存在")
	}
	return id, nil
}

func (client *CloudDiskClient) cloudNoteHeaders(noteID uint64) map[string]string {
	client.mu.RLock()
	defer client.mu.RUnlock()
	token := client.noteUnlockTokens[noteID]
	if token == "" {
		return nil
	}
	return map[string]string{"X-Note-Unlock-Token": token}
}

func (client *CloudDiskClient) setCloudNoteUnlockToken(noteID uint64, token string) {
	client.mu.Lock()
	defer client.mu.Unlock()
	if token == "" {
		delete(client.noteUnlockTokens, noteID)
		return
	}
	client.noteUnlockTokens[noteID] = token
}

func (client *CloudDiskClient) requestCloudNoteJSON(ctx context.Context, method, path string, payload, output any, noteID uint64) error {
	return client.requestAccountJSONWithHeaders(ctx, method, path, payload, output, "云笔记", client.cloudNoteHeaders(noteID))
}

func (client *CloudDiskClient) ListNoteNodes(ctx context.Context) ([]NoteNode, error) {
	var folders []cloudNoteFolder
	if err := client.requestCloudNoteJSON(ctx, http.MethodGet, "/cloud_note/folder", nil, &folders, 0); err != nil {
		return nil, err
	}
	nodes := make([]NoteNode, 0, len(folders)+32)
	for _, folder := range folders {
		parentID := ""
		if folder.ParentID != 0 {
			parentID = folderNodeID(folder.ParentID)
		}
		nodes = append(nodes, NoteNode{
			ID: folderNodeID(folder.ID), ParentID: parentID, Kind: noteKindFolder,
			Title: folder.FolderName, Pinned: folder.IsPinned != 0,
			CreatedAt: folder.CreateTime, UpdatedAt: folder.ModifyTime,
		})
	}

	for page := 1; ; page++ {
		query := url.Values{"page": {strconv.Itoa(page)}, "pageSize": {"100"}}
		var result cloudNotePage[cloudNoteListItem]
		if err := client.requestCloudNoteJSON(ctx, http.MethodGet, "/cloud_note/note?"+query.Encode(), nil, &result, 0); err != nil {
			return nil, err
		}
		for _, item := range result.List {
			parentID := ""
			if item.FolderID != 0 {
				parentID = folderNodeID(item.FolderID)
			}
			nodes = append(nodes, NoteNode{
				ID: noteNodeID(item.ID), ParentID: parentID, Kind: noteKindNote,
				Title: item.Title, Content: item.Snippet, ContentType: item.ContentType, Favorite: item.IsFavorite != 0,
				Pinned: item.IsPinned != 0, HasPassword: item.HasPassword, Locked: item.IsLocked || item.HasPassword,
				WordCount: item.WordCount, Revision: item.Revision,
				CreatedAt: item.CreateTime, UpdatedAt: item.ModifyTime,
			})
		}
		if len(result.List) < 100 || int64(page*100) >= result.Total {
			break
		}
	}

	for page := 1; ; page++ {
		query := url.Values{"page": {strconv.Itoa(page)}, "pageSize": {"100"}}
		var result cloudNotePage[cloudNoteRecycleItem]
		if err := client.requestCloudNoteJSON(ctx, http.MethodGet, "/cloud_note/recycle?"+query.Encode(), nil, &result, 0); err != nil {
			return nil, err
		}
		for _, item := range result.List {
			deletedAt := item.DeleteTime
			nodes = append(nodes, NoteNode{
				ID: recycleNodeID(item.ID), Kind: noteKindNote, Title: item.Title,
				DeletedAt: &deletedAt, CreatedAt: item.DeleteTime, UpdatedAt: item.DeleteTime,
			})
		}
		if len(result.List) < 100 || int64(page*100) >= result.Total {
			break
		}
	}
	return nodes, nil
}

func noteNodeFromDetail(detail cloudNoteDetail) NoteNode {
	parentID := ""
	if detail.FolderID != 0 {
		parentID = folderNodeID(detail.FolderID)
	}
	return NoteNode{
		ID: noteNodeID(detail.ID), ParentID: parentID, Kind: noteKindNote,
		Title: detail.Title, Content: detail.Content, ContentType: detail.ContentType, Favorite: detail.IsFavorite != 0,
		Pinned: detail.IsPinned != 0, HasPassword: detail.HasPassword, Locked: detail.IsLocked || detail.HasPassword,
		WordCount: detail.WordCount, Revision: detail.Revision,
		CreatedAt: detail.CreateTime, UpdatedAt: detail.ModifyTime,
	}
}

func (client *CloudDiskClient) GetNoteNode(ctx context.Context, opaqueID string) (NoteNode, error) {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind != noteKindNote {
		return NoteNode{}, errors.New("笔记不存在")
	}
	var detail cloudNoteDetail
	if err := client.requestCloudNoteJSON(ctx, http.MethodGet, "/cloud_note/note/"+strconv.FormatUint(id, 10), nil, &detail, id); err != nil {
		return NoteNode{}, err
	}
	node := noteNodeFromDetail(detail)
	if client.cloudNoteHeaders(id) != nil && detail.HasPassword && !detail.IsLocked {
		node.Locked = false
	}
	return node, nil
}

func (client *CloudDiskClient) CreateNoteNode(ctx context.Context, input NoteNodeInput) (NoteNode, error) {
	folderID, err := parseCloudFolderID(input.ParentID)
	if err != nil {
		return NoteNode{}, err
	}
	kind := strings.ToLower(strings.TrimSpace(input.Kind))
	title := normaliseNoteTitle(input.Title, kind)
	if kind == noteKindFolder {
		var folder cloudNoteFolder
		err := client.requestCloudNoteJSON(ctx, http.MethodPost, "/cloud_note/folder", map[string]any{
			"parent_id": folderID, "folder_name": title,
		}, &folder, 0)
		if err != nil {
			return NoteNode{}, err
		}
		parentID := ""
		if folder.ParentID != 0 {
			parentID = folderNodeID(folder.ParentID)
		}
		return NoteNode{ID: folderNodeID(folder.ID), ParentID: parentID, Kind: noteKindFolder, Title: folder.FolderName, Pinned: folder.IsPinned != 0, CreatedAt: folder.CreateTime, UpdatedAt: folder.ModifyTime}, nil
	}
	if kind != noteKindNote {
		return NoteNode{}, errors.New("云笔记项目类型无效")
	}
	contentType := strings.ToLower(strings.TrimSpace(input.ContentType))
	if contentType == "" {
		contentType = "richtext"
	}
	if contentType != "richtext" && contentType != "markdown" && contentType != "spreadsheet" {
		return NoteNode{}, errors.New("不支持的云笔记文档类型")
	}
	var created cloudNoteCreateResult
	err = client.requestCloudNoteJSON(ctx, http.MethodPost, "/cloud_note/note", map[string]any{
		"folder_id": folderID, "title": title, "content": input.Content, "content_type": contentType,
	}, &created, 0)
	if err != nil {
		return NoteNode{}, err
	}
	detail := cloudNoteDetail(created)
	if detail.ID == 0 {
		return NoteNode{}, errors.New("云端创建成功，但未返回笔记标识")
	}
	if detail.ContentType == "" || detail.CreateTime.IsZero() {
		if fresh, detailErr := client.GetNoteNode(ctx, noteNodeID(detail.ID)); detailErr == nil {
			return fresh, nil
		}
		parentID := ""
		if folderID != 0 {
			parentID = folderNodeID(folderID)
		}
		now := time.Now()
		return NoteNode{
			ID: noteNodeID(detail.ID), ParentID: parentID, Kind: noteKindNote,
			Title: title, Content: input.Content, ContentType: contentType, CreatedAt: now, UpdatedAt: now,
		}, nil
	}
	return noteNodeFromDetail(detail), nil
}

func (client *CloudDiskClient) UpdateNoteNode(ctx context.Context, opaqueID string, input NoteUpdateInput) (NoteNode, error) {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind != noteKindNote {
		return NoteNode{}, errors.New("笔记不存在")
	}
	var detail cloudNoteDetail
	payload := map[string]any{
		"title": normaliseNoteTitle(input.Title, noteKindNote), "content": input.Content,
	}
	contentType := strings.TrimSpace(input.ContentType)
	if contentType == "" {
		contentType = "richtext"
	}
	payload["content_type"] = contentType
	if input.Revision != 0 {
		payload["revision"] = input.Revision
	}
	err = client.requestCloudNoteJSON(ctx, http.MethodPut, "/cloud_note/note/"+strconv.FormatUint(id, 10), payload, &detail, id)
	return noteNodeFromDetail(detail), err
}

func (client *CloudDiskClient) RenameNoteNode(ctx context.Context, opaqueID, title string) (NoteNode, error) {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind == "recycle" {
		return NoteNode{}, errors.New("云笔记项目不存在")
	}
	title = normaliseNoteTitle(title, kind)
	if kind == noteKindNote {
		var detail cloudNoteDetail
		err = client.requestCloudNoteJSON(ctx, http.MethodPut, "/cloud_note/note/"+strconv.FormatUint(id, 10), map[string]any{"title": title}, &detail, id)
		return noteNodeFromDetail(detail), err
	}
	if err := client.requestCloudNoteJSON(ctx, http.MethodPut, "/cloud_note/folder/"+strconv.FormatUint(id, 10), map[string]any{"folder_name": title}, nil, 0); err != nil {
		return NoteNode{}, err
	}
	return client.getCloudNoteFolder(ctx, id)
}

func (client *CloudDiskClient) getCloudNoteFolder(ctx context.Context, id uint64) (NoteNode, error) {
	var folders []cloudNoteFolder
	if err := client.requestCloudNoteJSON(ctx, http.MethodGet, "/cloud_note/folder", nil, &folders, 0); err != nil {
		return NoteNode{}, err
	}
	for _, folder := range folders {
		if folder.ID != id {
			continue
		}
		parentID := ""
		if folder.ParentID != 0 {
			parentID = folderNodeID(folder.ParentID)
		}
		return NoteNode{ID: folderNodeID(folder.ID), ParentID: parentID, Kind: noteKindFolder, Title: folder.FolderName, Pinned: folder.IsPinned != 0, CreatedAt: folder.CreateTime, UpdatedAt: folder.ModifyTime}, nil
	}
	return NoteNode{}, errors.New("文件夹不存在")
}

func (client *CloudDiskClient) MoveNoteNode(ctx context.Context, opaqueID, parentOpaqueID string) (NoteNode, error) {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind == "recycle" {
		return NoteNode{}, errors.New("云笔记项目不存在")
	}
	parentID, err := parseCloudFolderID(parentOpaqueID)
	if err != nil {
		return NoteNode{}, err
	}
	if kind == noteKindNote {
		if err := client.requestCloudNoteJSON(ctx, http.MethodPost, "/cloud_note/note/"+strconv.FormatUint(id, 10)+"/move", map[string]any{"folder_id": parentID}, nil, id); err != nil {
			return NoteNode{}, err
		}
		return client.GetNoteNode(ctx, opaqueID)
	}
	if err := client.requestCloudNoteJSON(ctx, http.MethodPut, "/cloud_note/folder/"+strconv.FormatUint(id, 10), map[string]any{"parent_id": parentID}, nil, 0); err != nil {
		return NoteNode{}, err
	}
	return client.getCloudNoteFolder(ctx, id)
}

func (client *CloudDiskClient) SetNoteFlag(ctx context.Context, opaqueID, flag string, value bool) (NoteNode, error) {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind == "recycle" {
		return NoteNode{}, errors.New("云笔记项目不存在")
	}
	if kind == noteKindFolder {
		if flag != "pinned" {
			return client.getCloudNoteFolder(ctx, id)
		}
		pinned := 0
		if value {
			pinned = 1
		}
		if err := client.requestCloudNoteJSON(ctx, http.MethodPut, "/cloud_note/folder/"+strconv.FormatUint(id, 10), map[string]any{"is_pinned": pinned}, nil, 0); err != nil {
			return NoteNode{}, err
		}
		return client.getCloudNoteFolder(ctx, id)
	}
	action := "pin"
	if flag == "favorite" {
		action = "favorite"
	}
	current, err := client.GetNoteNode(ctx, opaqueID)
	if err != nil {
		return NoteNode{}, err
	}
	currentValue := current.Pinned
	if flag == "favorite" {
		currentValue = current.Favorite
	}
	if currentValue != value {
		if err := client.requestCloudNoteJSON(ctx, http.MethodPost, "/cloud_note/note/"+strconv.FormatUint(id, 10)+"/"+action, nil, nil, id); err != nil {
			return NoteNode{}, err
		}
	}
	return client.GetNoteNode(ctx, opaqueID)
}

func (client *CloudDiskClient) TrashNoteNode(ctx context.Context, opaqueID string) error {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind == "recycle" {
		return errors.New("云笔记项目不存在")
	}
	path := "/cloud_note/note/"
	if kind == noteKindFolder {
		path = "/cloud_note/folder/"
	}
	return client.requestCloudNoteJSON(ctx, http.MethodDelete, path+strconv.FormatUint(id, 10), nil, nil, id)
}

func (client *CloudDiskClient) RestoreNoteNode(ctx context.Context, opaqueID string) error {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind != "recycle" {
		return errors.New("回收站项目不存在")
	}
	return client.requestCloudNoteJSON(ctx, http.MethodPost, "/cloud_note/recycle/"+strconv.FormatUint(id, 10)+"/restore", nil, nil, 0)
}

func (client *CloudDiskClient) DeleteNoteNodeForever(ctx context.Context, opaqueID string) error {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind != "recycle" {
		return errors.New("回收站项目不存在")
	}
	return client.requestCloudNoteJSON(ctx, http.MethodDelete, "/cloud_note/recycle/"+strconv.FormatUint(id, 10), nil, nil, 0)
}

func (client *CloudDiskClient) ListNoteVersions(ctx context.Context, opaqueID string) ([]NoteVersion, error) {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind != noteKindNote {
		return nil, errors.New("笔记不存在")
	}
	var versions []cloudNoteVersion
	if err := client.requestCloudNoteJSON(ctx, http.MethodGet, "/cloud_note/version/"+strconv.FormatUint(id, 10), nil, &versions, id); err != nil {
		return nil, err
	}
	result := make([]NoteVersion, 0, len(versions))
	for _, version := range versions {
		result = append(result, NoteVersion{
			ID: "version:" + strconv.Itoa(version.VersionNo), NoteID: opaqueID,
			Title: version.Title, Content: version.Content, CreatedAt: version.CreateTime,
		})
	}
	sort.Slice(result, func(i, j int) bool { return result[i].CreatedAt.After(result[j].CreatedAt) })
	return result, nil
}

func (client *CloudDiskClient) RestoreNoteVersion(ctx context.Context, opaqueID, versionOpaqueID string) (NoteNode, error) {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind != noteKindNote {
		return NoteNode{}, errors.New("笔记不存在")
	}
	parts := strings.Split(strings.TrimSpace(versionOpaqueID), ":")
	if len(parts) != 2 || parts[0] != "version" {
		return NoteNode{}, errors.New("历史版本不存在")
	}
	versionNo, err := strconv.Atoi(parts[1])
	if err != nil || versionNo < 1 {
		return NoteNode{}, errors.New("历史版本不存在")
	}
	var detail cloudNoteDetail
	err = client.requestCloudNoteJSON(ctx, http.MethodPost, "/cloud_note/version/"+strconv.FormatUint(id, 10)+"/rollback", map[string]any{"version_no": versionNo}, &detail, id)
	return noteNodeFromDetail(detail), err
}

func (client *CloudDiskClient) SetNotePassword(ctx context.Context, opaqueID, password string) error {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind != noteKindNote {
		return errors.New("笔记不存在")
	}
	err = client.requestCloudNoteJSON(ctx, http.MethodPost, "/cloud_note/note/"+strconv.FormatUint(id, 10)+"/password", map[string]any{"password": strings.TrimSpace(password)}, nil, id)
	if err == nil {
		client.setCloudNoteUnlockToken(id, "")
		if strings.TrimSpace(password) != "" {
			_, err = client.UnlockNote(ctx, opaqueID, password)
		}
	}
	return err
}

func (client *CloudDiskClient) UnlockNote(ctx context.Context, opaqueID, password string) (NoteNode, error) {
	kind, id, err := parseCloudNodeID(opaqueID)
	if err != nil || kind != noteKindNote {
		return NoteNode{}, errors.New("笔记不存在")
	}
	var detail cloudNoteDetail
	if err := client.requestCloudNoteJSON(ctx, http.MethodPost, "/cloud_note/note/"+strconv.FormatUint(id, 10)+"/verify", map[string]any{"password": password}, &detail, 0); err != nil {
		return NoteNode{}, err
	}
	client.setCloudNoteUnlockToken(id, detail.UnlockToken)
	node := noteNodeFromDetail(detail)
	node.Locked = false
	return node, nil
}

func normaliseNoteTitle(title, kind string) string {
	title = strings.TrimSpace(title)
	if title == "" {
		if kind == noteKindFolder {
			return "新建文件夹"
		}
		return "无标题笔记"
	}
	runes := []rune(title)
	if len(runes) > 160 {
		title = string(runes[:160])
	}
	return title
}

func cloneNoteNodes(nodes []NoteNode, _ bool) []NoteNode {
	result := append([]NoteNode(nil), nodes...)
	for index := range result {
		if result[index].DeletedAt != nil {
			value := *result[index].DeletedAt
			result[index].DeletedAt = &value
		}
	}
	return result
}

func notePlainText(content string) string {
	content = strings.ReplaceAll(content, "<br>", "\n")
	content = strings.ReplaceAll(content, "<br/>", "\n")
	content = strings.ReplaceAll(content, "<br />", "\n")
	content = strings.ReplaceAll(content, "</p>", "\n")
	content = strings.ReplaceAll(content, "</div>", "\n")
	return strings.TrimSpace(html.UnescapeString(noteHTMLTagPattern.ReplaceAllString(content, "")))
}

func (a *App) requireCloudNotesLogin() error {
	if a.cloudDisk == nil || !a.cloudDisk.Session().LoggedIn {
		return ErrCloudDiskLoginRequired
	}
	return nil
}

func (a *App) ListNoteNodes() ([]NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return nil, err
	}
	return a.cloudDisk.ListNoteNodes(context.Background())
}

func (a *App) GetNoteNode(id string) (NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteNode{}, err
	}
	return a.cloudDisk.GetNoteNode(context.Background(), id)
}

func (a *App) CreateNoteNode(input NoteNodeInput) (NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteNode{}, err
	}
	return a.cloudDisk.CreateNoteNode(context.Background(), input)
}

func (a *App) UpdateNote(id string, input NoteUpdateInput) (NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteNode{}, err
	}
	return a.cloudDisk.UpdateNoteNode(context.Background(), id, input)
}

func (a *App) RenameNoteNode(id, title string) (NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteNode{}, err
	}
	return a.cloudDisk.RenameNoteNode(context.Background(), id, title)
}

func (a *App) MoveNoteNode(id, parentID string) (NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteNode{}, err
	}
	return a.cloudDisk.MoveNoteNode(context.Background(), id, parentID)
}

func (a *App) SetNoteFavorite(id string, favorite bool) (NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteNode{}, err
	}
	return a.cloudDisk.SetNoteFlag(context.Background(), id, "favorite", favorite)
}

func (a *App) SetNotePinned(id string, pinned bool) (NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteNode{}, err
	}
	return a.cloudDisk.SetNoteFlag(context.Background(), id, "pinned", pinned)
}

func (a *App) TrashNoteNode(id string) error {
	if err := a.requireCloudNotesLogin(); err != nil {
		return err
	}
	return a.cloudDisk.TrashNoteNode(context.Background(), id)
}

func (a *App) RestoreNoteNode(id string) error {
	if err := a.requireCloudNotesLogin(); err != nil {
		return err
	}
	return a.cloudDisk.RestoreNoteNode(context.Background(), id)
}

func (a *App) DeleteNoteNodeForever(id string) error {
	if err := a.requireCloudNotesLogin(); err != nil {
		return err
	}
	return a.cloudDisk.DeleteNoteNodeForever(context.Background(), id)
}

func (a *App) ListNoteVersions(noteID string) ([]NoteVersion, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return nil, err
	}
	return a.cloudDisk.ListNoteVersions(context.Background(), noteID)
}

func (a *App) RestoreNoteVersion(noteID, versionID string) (NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteNode{}, err
	}
	return a.cloudDisk.RestoreNoteVersion(context.Background(), noteID, versionID)
}

func (a *App) SetNotePassword(noteID, password string) error {
	if err := a.requireCloudNotesLogin(); err != nil {
		return err
	}
	return a.cloudDisk.SetNotePassword(context.Background(), noteID, password)
}

func (a *App) UnlockNote(noteID, password string) (NoteNode, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteNode{}, err
	}
	return a.cloudDisk.UnlockNote(context.Background(), noteID, password)
}

func (a *App) ExportNote(noteID, format string) (NoteExportResult, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteExportResult{}, err
	}
	if a.ctx == nil {
		return NoteExportResult{}, errors.New("应用窗口尚未就绪")
	}
	node, err := a.cloudDisk.GetNoteNode(context.Background(), noteID)
	if err != nil {
		return NoteExportResult{}, err
	}
	if node.Locked {
		return NoteExportResult{}, errors.New("请先解锁笔记")
	}
	format = strings.ToLower(strings.TrimSpace(format))
	extension := ".txt"
	content := notePlainText(node.Content)
	if format == "word" || format == "doc" {
		extension = ".doc"
		content = fmt.Sprintf(`<!doctype html><html><head><meta charset="utf-8"><title>%s</title></head><body><h1>%s</h1>%s</body></html>`,
			html.EscapeString(node.Title), html.EscapeString(node.Title), node.Content)
	}
	filename := normaliseNoteTitle(node.Title, noteKindNote)
	filename = strings.Map(func(r rune) rune {
		if strings.ContainsRune(`\/:*?"<>|`, r) {
			return '_'
		}
		return r
	}, filename) + extension
	destination, err := wailsruntime.SaveFileDialog(a.ctx, wailsruntime.SaveDialogOptions{
		Title: "导出云笔记", DefaultFilename: filepath.Base(filename),
	})
	if err != nil {
		return NoteExportResult{}, err
	}
	if destination == "" {
		return NoteExportResult{Cancelled: true}, nil
	}
	if err := os.WriteFile(destination, []byte(content), 0o600); err != nil {
		return NoteExportResult{}, fmt.Errorf("导出笔记失败: %w", err)
	}
	return NoteExportResult{Path: destination, Name: filepath.Base(destination)}, nil
}

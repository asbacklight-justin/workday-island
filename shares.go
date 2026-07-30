package main

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"
)

const publicShareWebBaseURL = "https://admin.asbacklight.cn"

type NoteShareQuota struct {
	DailyShareLimit int64  `json:"daily_share_limit"`
	TotalShareLimit int64  `json:"total_share_limit"`
	DailyUsed       int64  `json:"daily_used"`
	TotalUsed       int64  `json:"total_used"`
	DailyRemaining  int64  `json:"daily_remaining"`
	TotalRemaining  int64  `json:"total_remaining"`
	SourceType      string `json:"source_type"`
	SourceID        uint64 `json:"source_id"`
	SourceName      string `json:"source_name"`
	QuotaExceeded   bool   `json:"quota_exceeded"`
	QuotaMessage    string `json:"quota_message"`
	UnlimitedDaily  bool   `json:"unlimited_daily"`
	UnlimitedTotal  bool   `json:"unlimited_total"`
}

func (quota *NoteShareQuota) UnmarshalJSON(data []byte) error {
	type quotaAlias NoteShareQuota
	trimmed := strings.TrimSpace(string(data))
	if strings.HasPrefix(trimmed, "{") {
		var decoded quotaAlias
		if err := json.Unmarshal(data, &decoded); err != nil {
			return err
		}
		*quota = NoteShareQuota(decoded)
		return nil
	}
	var legacyLimit int64
	if err := json.Unmarshal(data, &legacyLimit); err != nil {
		return err
	}
	*quota = NoteShareQuota{
		DailyShareLimit: legacyLimit,
		TotalShareLimit: legacyLimit,
		DailyRemaining:  legacyLimit,
		TotalRemaining:  legacyLimit,
		SourceType:      "default",
		SourceName:      "系统默认",
		UnlimitedDaily:  legacyLimit == 0,
		UnlimitedTotal:  legacyLimit == 0,
	}
	return nil
}

type NoteShareRecord struct {
	ID              uint64     `json:"id"`
	ShareCode       string     `json:"share_code"`
	ShareURI        string     `json:"share_uri"`
	PublicURL       string     `json:"public_url"`
	Title           string     `json:"title"`
	Description     string     `json:"description"`
	Content         string     `json:"content"`
	ContentMode     string     `json:"content_mode"`
	AllowCopy       int8       `json:"allow_copy"`
	AllowEdit       int8       `json:"allow_edit"`
	AllowComment    int8       `json:"allow_comment"`
	CommentCount    int64      `json:"comment_count"`
	IsEncrypted     int8       `json:"is_encrypted"`
	Status          int8       `json:"status"`
	ValidType       int8       `json:"valid_type"`
	ValidStartTime  *time.Time `json:"valid_start_time"`
	ValidEndTime    *time.Time `json:"valid_end_time"`
	ShareTime       time.Time  `json:"share_time"`
	Source          string     `json:"source"`
	ShowSource      int8       `json:"show_source"`
	ShowCreator     int8       `json:"show_creator"`
	CreatorNickname string     `json:"creator_nickname"`
	RefType         string     `json:"ref_type"`
	RefID           uint64     `json:"ref_id"`
	ViewCount       int64      `json:"view_count"`
	RevokedAt       *time.Time `json:"revoked_at"`
	RevokeReason    string     `json:"revoke_reason"`
	SourceDeletedAt *time.Time `json:"source_deleted_at"`
	LifecycleState  string     `json:"lifecycle_state"`
	CreateTime      time.Time  `json:"create_time"`
	ModifyTime      time.Time  `json:"modify_time"`
}

type NoteSharePage struct {
	Total    int64             `json:"total"`
	List     []NoteShareRecord `json:"list"`
	Page     int               `json:"page"`
	PageSize int               `json:"pageSize"`
}

type CreateNoteShareInput struct {
	NoteID         string `json:"noteId"`
	Title          string `json:"title"`
	Description    string `json:"description"`
	ContentMode    string `json:"contentMode"`
	AllowCopy      bool   `json:"allowCopy"`
	AllowComment   bool   `json:"allowComment"`
	IsEncrypted    bool   `json:"isEncrypted"`
	AccessPassword string `json:"accessPassword"`
	ValidType      int8   `json:"validType"`
	ValidStartTime string `json:"validStartTime"`
	ValidEndTime   string `json:"validEndTime"`
	Source         string `json:"source"`
	ShowSource     bool   `json:"showSource"`
	ShowCreator    bool   `json:"showCreator"`
}

type UpdateNoteShareInput struct {
	Title          string `json:"title"`
	Description    string `json:"description"`
	ContentMode    string `json:"contentMode"`
	AllowCopy      bool   `json:"allowCopy"`
	AllowEdit      bool   `json:"allowEdit"`
	AllowComment   bool   `json:"allowComment"`
	IsEncrypted    bool   `json:"isEncrypted"`
	AccessPassword string `json:"accessPassword"`
	Status         int8   `json:"status"`
	ValidType      int8   `json:"validType"`
	ValidStartTime string `json:"validStartTime"`
	ValidEndTime   string `json:"validEndTime"`
	Source         string `json:"source"`
	ShowSource     bool   `json:"showSource"`
	ShowCreator    bool   `json:"showCreator"`
}

type cloudNoteSharePage struct {
	Total    int64             `json:"total"`
	List     []NoteShareRecord `json:"list"`
	Page     int               `json:"page"`
	PageSize int               `json:"pageSize"`
}

func boolInt8(value bool) int8 {
	if value {
		return 1
	}
	return 0
}

func normalizeShareContentMode(value string) (string, error) {
	value = strings.ToLower(strings.TrimSpace(value))
	if value == "" {
		value = "snapshot"
	}
	if value != "snapshot" && value != "live" {
		return "", errors.New("分享内容更新方式无效")
	}
	return value, nil
}

func validateShareSchedule(validType int8, start, end string) error {
	if validType == 0 {
		return nil
	}
	if validType != 1 || strings.TrimSpace(start) == "" || strings.TrimSpace(end) == "" {
		return errors.New("请选择完整的分享有效期")
	}
	startTime, startErr := time.Parse(time.RFC3339, start)
	endTime, endErr := time.Parse(time.RFC3339, end)
	if startErr != nil || endErr != nil || !startTime.Before(endTime) {
		return errors.New("分享结束时间必须晚于开始时间")
	}
	return nil
}

func enrichNoteShare(record NoteShareRecord) NoteShareRecord {
	if record.ShareCode != "" {
		record.PublicURL = publicShareWebBaseURL + "/share/" + url.PathEscape(record.ShareCode)
	}
	return record
}

func (client *CloudDiskClient) GetNoteShareQuota(ctx context.Context) (NoteShareQuota, error) {
	var result NoteShareQuota
	err := client.requestAccountJSON(ctx, http.MethodGet, "/cloud_note/share/quota", nil, &result, "云笔记分享")
	return result, err
}

func (client *CloudDiskClient) CreateNoteShare(ctx context.Context, input CreateNoteShareInput) (NoteShareRecord, error) {
	kind, noteID, err := parseCloudNodeID(input.NoteID)
	if err != nil || kind != noteKindNote {
		return NoteShareRecord{}, errors.New("请选择要分享的云笔记")
	}
	contentMode, err := normalizeShareContentMode(input.ContentMode)
	if err != nil {
		return NoteShareRecord{}, err
	}
	if strings.TrimSpace(input.Title) == "" {
		return NoteShareRecord{}, errors.New("分享标题不能为空")
	}
	if input.IsEncrypted && strings.TrimSpace(input.AccessPassword) == "" {
		return NoteShareRecord{}, errors.New("请设置访问密码")
	}
	if err := validateShareSchedule(input.ValidType, input.ValidStartTime, input.ValidEndTime); err != nil {
		return NoteShareRecord{}, err
	}
	source := strings.TrimSpace(input.Source)
	if source == "" {
		source = "Workday Island"
	}
	payload := map[string]any{
		"title": strings.TrimSpace(input.Title), "description": strings.TrimSpace(input.Description),
		"content_mode": contentMode, "allow_copy": boolInt8(input.AllowCopy), "allow_edit": 0,
		"allow_comment": boolInt8(input.AllowComment), "is_encrypted": boolInt8(input.IsEncrypted),
		"access_password": strings.TrimSpace(input.AccessPassword), "status": 1,
		"valid_type": input.ValidType, "source": source,
		"show_source": boolInt8(input.ShowSource), "show_creator": boolInt8(input.ShowCreator),
		"ref_type": "note", "ref_id": noteID,
	}
	if input.ValidType == 1 {
		payload["valid_start_time"] = input.ValidStartTime
		payload["valid_end_time"] = input.ValidEndTime
	} else {
		payload["valid_start_time"] = ""
		payload["valid_end_time"] = ""
	}
	if token := client.cloudNoteHeaders(noteID)["X-Note-Unlock-Token"]; token != "" {
		payload["note_unlock_token"] = token
	}
	var result NoteShareRecord
	if err := client.requestAccountJSON(ctx, http.MethodPost, "/share", payload, &result, "云笔记分享"); err != nil {
		return NoteShareRecord{}, err
	}
	return enrichNoteShare(result), nil
}

func (client *CloudDiskClient) ListNoteShares(ctx context.Context, page, pageSize int, keyword, lifecycle string) (NoteSharePage, error) {
	if page < 1 {
		page = 1
	}
	if pageSize < 1 || pageSize > 100 {
		pageSize = 20
	}
	query := url.Values{
		"page": {strconv.Itoa(page)}, "pageSize": {strconv.Itoa(pageSize)}, "ref_type": {"note"},
	}
	if keyword = strings.TrimSpace(keyword); keyword != "" {
		query.Set("keyword", keyword)
	}
	if lifecycle = strings.TrimSpace(lifecycle); lifecycle != "" {
		query.Set("lifecycle_state", lifecycle)
	}
	var remote cloudNoteSharePage
	if err := client.requestAccountJSON(ctx, http.MethodGet, "/share?"+query.Encode(), nil, &remote, "分享管理"); err != nil {
		return NoteSharePage{}, err
	}
	result := NoteSharePage{Total: remote.Total, Page: remote.Page, PageSize: remote.PageSize, List: make([]NoteShareRecord, 0, len(remote.List))}
	for _, item := range remote.List {
		result.List = append(result.List, enrichNoteShare(item))
	}
	return result, nil
}

func (client *CloudDiskClient) GetNoteShare(ctx context.Context, id uint64) (NoteShareRecord, error) {
	if id == 0 {
		return NoteShareRecord{}, errors.New("分享记录不存在")
	}
	var result NoteShareRecord
	if err := client.requestAccountJSON(ctx, http.MethodGet, "/share/"+strconv.FormatUint(id, 10), nil, &result, "分享管理"); err != nil {
		return NoteShareRecord{}, err
	}
	if result.RefType != "note" {
		return NoteShareRecord{}, errors.New("该记录不是云笔记分享")
	}
	return enrichNoteShare(result), nil
}

func (client *CloudDiskClient) UpdateNoteShare(ctx context.Context, id uint64, input UpdateNoteShareInput) (NoteShareRecord, error) {
	if id == 0 || strings.TrimSpace(input.Title) == "" {
		return NoteShareRecord{}, errors.New("分享标题不能为空")
	}
	contentMode, err := normalizeShareContentMode(input.ContentMode)
	if err != nil {
		return NoteShareRecord{}, err
	}
	if err := validateShareSchedule(input.ValidType, input.ValidStartTime, input.ValidEndTime); err != nil {
		return NoteShareRecord{}, err
	}
	payload := map[string]any{
		"title": strings.TrimSpace(input.Title), "description": strings.TrimSpace(input.Description),
		"content_mode": contentMode, "allow_copy": boolInt8(input.AllowCopy),
		"allow_edit": boolInt8(input.AllowEdit), "allow_comment": boolInt8(input.AllowComment),
		"is_encrypted": boolInt8(input.IsEncrypted), "status": input.Status,
		"valid_type": input.ValidType, "source": strings.TrimSpace(input.Source),
		"show_source": boolInt8(input.ShowSource), "show_creator": boolInt8(input.ShowCreator),
	}
	if strings.TrimSpace(input.AccessPassword) != "" || !input.IsEncrypted {
		payload["access_password"] = strings.TrimSpace(input.AccessPassword)
	}
	if input.ValidType == 1 {
		payload["valid_start_time"] = input.ValidStartTime
		payload["valid_end_time"] = input.ValidEndTime
	} else {
		payload["valid_start_time"] = ""
		payload["valid_end_time"] = ""
	}
	var result NoteShareRecord
	if err := client.requestAccountJSON(ctx, http.MethodPut, "/share/"+strconv.FormatUint(id, 10), payload, &result, "分享管理"); err != nil {
		return NoteShareRecord{}, err
	}
	return enrichNoteShare(result), nil
}

func (client *CloudDiskClient) RevokeNoteShare(ctx context.Context, id uint64) (NoteShareRecord, error) {
	var result NoteShareRecord
	err := client.requestAccountJSON(ctx, http.MethodPost, "/share/"+strconv.FormatUint(id, 10)+"/revoke", nil, &result, "分享管理")
	return enrichNoteShare(result), err
}

func (client *CloudDiskClient) RegenerateNoteShare(ctx context.Context, id uint64) (NoteShareRecord, error) {
	var result NoteShareRecord
	err := client.requestAccountJSON(ctx, http.MethodPost, "/share/"+strconv.FormatUint(id, 10)+"/regenerate", nil, &result, "分享管理")
	return enrichNoteShare(result), err
}

func (client *CloudDiskClient) DeleteNoteShare(ctx context.Context, id uint64) error {
	if id == 0 {
		return errors.New("分享记录不存在")
	}
	return client.requestAccountJSON(ctx, http.MethodDelete, "/share/"+strconv.FormatUint(id, 10), nil, nil, "分享管理")
}

func (a *App) GetNoteShareQuota() (NoteShareQuota, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteShareQuota{}, err
	}
	return a.cloudDisk.GetNoteShareQuota(context.Background())
}

func (a *App) CreateNoteShare(input CreateNoteShareInput) (NoteShareRecord, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteShareRecord{}, err
	}
	return a.cloudDisk.CreateNoteShare(context.Background(), input)
}

func (a *App) ListNoteShares(page, pageSize int, keyword, lifecycle string) (NoteSharePage, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteSharePage{}, err
	}
	return a.cloudDisk.ListNoteShares(context.Background(), page, pageSize, keyword, lifecycle)
}

func (a *App) GetNoteShare(id uint64) (NoteShareRecord, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteShareRecord{}, err
	}
	return a.cloudDisk.GetNoteShare(context.Background(), id)
}

func (a *App) UpdateNoteShare(id uint64, input UpdateNoteShareInput) (NoteShareRecord, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteShareRecord{}, err
	}
	return a.cloudDisk.UpdateNoteShare(context.Background(), id, input)
}

func (a *App) RevokeNoteShare(id uint64) (NoteShareRecord, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteShareRecord{}, err
	}
	return a.cloudDisk.RevokeNoteShare(context.Background(), id)
}

func (a *App) RegenerateNoteShare(id uint64) (NoteShareRecord, error) {
	if err := a.requireCloudNotesLogin(); err != nil {
		return NoteShareRecord{}, err
	}
	return a.cloudDisk.RegenerateNoteShare(context.Background(), id)
}

func (a *App) DeleteNoteShare(id uint64) error {
	if err := a.requireCloudNotesLogin(); err != nil {
		return err
	}
	return a.cloudDisk.DeleteNoteShare(context.Background(), id)
}

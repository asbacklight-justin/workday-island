package main

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"
)

type UserNotice struct {
	ID           uint64     `json:"id"`
	Title        string     `json:"title"`
	Content      string     `json:"content"`
	NoticeType   string     `json:"notice_type"`
	IsTop        int8       `json:"is_top"`
	PublishTime  *time.Time `json:"publish_time,omitempty"`
	ExpireTime   *time.Time `json:"expire_time,omitempty"`
	BusinessType string     `json:"business_type,omitempty"`
	BusinessID   *uint64    `json:"business_id,omitempty"`
	ActionURL    string     `json:"action_url,omitempty"`
	CreateTime   time.Time  `json:"create_time"`
	IsRead       bool       `json:"is_read"`
	ReadTime     *time.Time `json:"read_time,omitempty"`
}

type UserNoticePage struct {
	Total    int64        `json:"total"`
	List     []UserNotice `json:"list"`
	Page     int          `json:"page"`
	PageSize int          `json:"pageSize"`
}

type noticeUnreadCount struct {
	Count int64 `json:"count"`
}

func (a *App) ListUserNotices(page, pageSize int, noticeType, readStatus string) (UserNoticePage, error) {
	if a.cloudDisk == nil {
		return UserNoticePage{}, ErrCloudDiskLoginRequired
	}
	if page < 1 {
		page = 1
	}
	if pageSize < 1 || pageSize > 50 {
		pageSize = 15
	}
	noticeType = strings.ToUpper(strings.TrimSpace(noticeType))
	readStatus = strings.ToUpper(strings.TrimSpace(readStatus))
	if noticeType != "" && noticeType != "SYSTEM" && noticeType != "BUSINESS" && noticeType != "SECURITY" && noticeType != "ANNOUNCEMENT" {
		return UserNoticePage{}, errors.New("通知类型不合法")
	}
	if readStatus != "" && readStatus != "READ" && readStatus != "UNREAD" {
		return UserNoticePage{}, errors.New("通知状态不合法")
	}
	query := url.Values{}
	query.Set("page", strconv.Itoa(page))
	query.Set("pageSize", strconv.Itoa(pageSize))
	if noticeType != "" {
		query.Set("notice_type", noticeType)
	}
	if readStatus != "" {
		query.Set("read_status", readStatus)
	}
	var result UserNoticePage
	err := a.cloudDisk.requestAccountJSON(context.Background(), http.MethodGet, "/notice/visible?"+query.Encode(), nil, &result, "通知中心")
	return result, err
}

func (a *App) GetUserNoticeUnreadCount() (int64, error) {
	if a.cloudDisk == nil {
		return 0, ErrCloudDiskLoginRequired
	}
	var result noticeUnreadCount
	if err := a.cloudDisk.requestAccountJSON(context.Background(), http.MethodGet, "/notice/unread-count", nil, &result, "通知中心"); err != nil {
		return 0, err
	}
	return result.Count, nil
}

func (a *App) MarkUserNoticeRead(id uint64) error {
	if id == 0 {
		return errors.New("通知 ID 不合法")
	}
	if a.cloudDisk == nil {
		return ErrCloudDiskLoginRequired
	}
	return a.cloudDisk.requestAccountJSON(context.Background(), http.MethodPost, "/notice/read/"+strconv.FormatUint(id, 10), nil, nil, "通知中心")
}

func (a *App) MarkAllUserNoticesRead() error {
	if a.cloudDisk == nil {
		return ErrCloudDiskLoginRequired
	}
	return a.cloudDisk.requestAccountJSON(context.Background(), http.MethodPost, "/notice/read-all", nil, nil, "通知中心")
}

func (a *App) DeleteUserNotice(id uint64) error {
	if id == 0 {
		return errors.New("通知 ID 不合法")
	}
	if a.cloudDisk == nil {
		return ErrCloudDiskLoginRequired
	}
	if err := a.cloudDisk.requestAccountJSON(context.Background(), http.MethodDelete, "/notice/user/"+strconv.FormatUint(id, 10), nil, nil, "通知中心"); err != nil {
		return fmt.Errorf("删除通知失败: %w", err)
	}
	return nil
}

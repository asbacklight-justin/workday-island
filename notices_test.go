package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func newNoticeTestApp(server *httptest.Server) *App {
	app := NewApp()
	app.cloudDisk = NewCloudDiskClient(app, server.URL)
	app.cloudDisk.apiClient = server.Client()
	app.cloudDisk.token = "notice-token"
	return app
}

func TestUserNoticeClient(t *testing.T) {
	var requests []string
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Header.Get("Authorization") != "Bearer notice-token" {
			t.Errorf("missing account token")
		}
		if request.Header.Get("X-Client-Source") != clientSource || request.Header.Get("X-Client-Version") != appVersion {
			t.Errorf("missing client headers")
		}
		requests = append(requests, request.Method+" "+request.URL.RequestURI())
		writer.Header().Set("Content-Type", "application/json")
		switch request.URL.Path {
		case "/notice/visible":
			_ = json.NewEncoder(writer).Encode(map[string]any{"code": 200, "message": "success", "data": map[string]any{"total": 1, "page": 2, "pageSize": 15, "list": []map[string]any{{"id": 7, "title": "维护通知", "content": "今晚升级", "notice_type": "SYSTEM", "is_read": false, "create_time": "2026-08-05T20:00:00+08:00"}}}})
		case "/notice/unread-count":
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"count":3}}`))
		default:
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":null}`))
		}
	}))
	defer server.Close()
	app := newNoticeTestApp(server)

	page, err := app.ListUserNotices(2, 15, "system", "unread")
	if err != nil || page.Total != 1 || len(page.List) != 1 || page.List[0].ID != 7 {
		t.Fatalf("unexpected page: %#v, %v", page, err)
	}
	count, err := app.GetUserNoticeUnreadCount()
	if err != nil || count != 3 {
		t.Fatalf("unexpected unread count: %d, %v", count, err)
	}
	if err := app.MarkUserNoticeRead(7); err != nil {
		t.Fatal(err)
	}
	if err := app.MarkAllUserNoticesRead(); err != nil {
		t.Fatal(err)
	}
	if err := app.DeleteUserNotice(7); err != nil {
		t.Fatal(err)
	}
	joined := strings.Join(requests, "\n")
	for _, want := range []string{"GET /notice/visible?notice_type=SYSTEM&page=2&pageSize=15&read_status=UNREAD", "GET /notice/unread-count", "POST /notice/read/7", "POST /notice/read-all", "DELETE /notice/user/7"} {
		if !strings.Contains(joined, want) {
			t.Errorf("missing %q in:\n%s", want, joined)
		}
	}
}

func TestUserNoticeValidationAndLogin(t *testing.T) {
	app := NewApp()
	if _, err := app.ListUserNotices(1, 15, "invalid", ""); err == nil {
		t.Fatal("expected invalid type")
	}
	if _, err := app.ListUserNotices(1, 15, "", "invalid"); err == nil {
		t.Fatal("expected invalid status")
	}
	if err := app.MarkUserNoticeRead(0); err == nil {
		t.Fatal("expected invalid id")
	}
	if err := app.DeleteUserNotice(0); err == nil {
		t.Fatal("expected invalid id")
	}
	if _, err := app.GetUserNoticeUnreadCount(); err == nil {
		t.Fatal("expected login error")
	}
}

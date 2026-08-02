package main

import (
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"sync/atomic"
	"testing"
	"time"
)

func writeCloudNoteTestResponse(t *testing.T, writer http.ResponseWriter, data any) {
	t.Helper()
	writer.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(writer).Encode(map[string]any{
		"code": 200, "message": "success", "data": data,
	}); err != nil {
		t.Fatal(err)
	}
}

func authenticatedCloudNoteClient(server *httptest.Server, token string) *CloudDiskClient {
	client := NewCloudDiskClient(nil, server.URL)
	client.token = token
	client.user = &CloudDiskUser{ID: 7, Username: "tester"}
	return client
}

func TestCloudNotesListAndDetailAlwaysComeFromServer(t *testing.T) {
	var detailCalls atomic.Int32
	modified := time.Date(2026, 7, 30, 9, 30, 0, 0, time.UTC)
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Header.Get("Authorization") != "Bearer account-a" {
			t.Errorf("authorization = %q", request.Header.Get("Authorization"))
		}
		if request.Header.Get("X-Client-Source") != clientSource || request.Header.Get("X-Client-Version") != appVersion {
			t.Errorf("client headers = %q / %q", request.Header.Get("X-Client-Source"), request.Header.Get("X-Client-Version"))
		}
		switch request.URL.Path {
		case "/cloud_note/folder":
			writeCloudNoteTestResponse(t, writer, []map[string]any{{
				"id": 3, "parent_id": 0, "folder_name": "工作", "is_pinned": 1,
				"create_time": modified, "modify_time": modified,
			}})
		case "/cloud_note/note":
			writeCloudNoteTestResponse(t, writer, map[string]any{
				"total": 1, "page": 1, "pageSize": 100,
				"list": []map[string]any{{
					"id": 9, "folder_id": 3, "title": "周报", "snippet": "云端摘要",
					"word_count": 42, "revision": 5, "create_time": modified, "modify_time": modified,
				}},
			})
		case "/cloud_note/recycle":
			writeCloudNoteTestResponse(t, writer, map[string]any{
				"total": 1, "page": 1, "pageSize": 100,
				"list": []map[string]any{{
					"id": 11, "note_id": 10, "title": "已删除", "delete_time": modified,
				}},
			})
		case "/cloud_note/note/9":
			call := detailCalls.Add(1)
			writeCloudNoteTestResponse(t, writer, map[string]any{
				"id": 9, "folder_id": 3, "title": "周报",
				"content":    "<p>云端正文 " + string(rune('0'+call)) + "</p>",
				"word_count": 43, "revision": 5 + call,
				"create_time": modified, "modify_time": modified,
			})
		default:
			http.NotFound(writer, request)
		}
	}))
	defer server.Close()

	client := authenticatedCloudNoteClient(server, "account-a")
	nodes, err := client.ListNoteNodes(t.Context())
	if err != nil {
		t.Fatal(err)
	}
	if len(nodes) != 3 || nodes[0].ID != "folder:3" || nodes[1].ID != "note:9" || nodes[2].ID != "recycle:11" {
		t.Fatalf("nodes = %+v", nodes)
	}
	if nodes[1].Content != "云端摘要" || nodes[1].WordCount != 42 || nodes[1].Revision != 5 {
		t.Fatalf("note summary = %+v", nodes[1])
	}

	first, err := client.GetNoteNode(t.Context(), "note:9")
	if err != nil {
		t.Fatal(err)
	}
	second, err := client.GetNoteNode(t.Context(), "note:9")
	if err != nil {
		t.Fatal(err)
	}
	if first.Content == second.Content || detailCalls.Load() != 2 {
		t.Fatalf("details were not freshly fetched: first=%q second=%q calls=%d", first.Content, second.Content, detailCalls.Load())
	}
}

func TestNoteNodePreservesPasswordMetadata(t *testing.T) {
	now := time.Date(2026, 7, 30, 10, 0, 0, 0, time.UTC)
	node := noteNodeFromDetail(cloudNoteDetail{
		ID:          91,
		Title:       "受保护笔记",
		HasPassword: true,
		IsLocked:    true,
		CreateTime:  now,
		ModifyTime:  now,
	})
	if !node.HasPassword || !node.Locked {
		t.Fatalf("password metadata was lost: %+v", node)
	}
}

func TestCloudNotesUseCurrentAccountTokenWithoutLocalLeak(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.URL.Path != "/cloud_note/note/1" {
			http.NotFound(writer, request)
			return
		}
		title := "账号 A"
		if request.Header.Get("Authorization") == "Bearer account-b" {
			title = "账号 B"
		}
		writeCloudNoteTestResponse(t, writer, map[string]any{
			"id": 1, "title": title, "content": "<p>" + title + " 的云笔记</p>",
			"revision": 1, "create_time": time.Now(), "modify_time": time.Now(),
		})
	}))
	defer server.Close()

	client := authenticatedCloudNoteClient(server, "account-a")
	accountA, err := client.GetNoteNode(t.Context(), "note:1")
	if err != nil {
		t.Fatal(err)
	}
	client.mu.Lock()
	client.token = "account-b"
	client.user = &CloudDiskUser{ID: 8, Username: "other"}
	client.noteUnlockTokens = make(map[uint64]string)
	client.mu.Unlock()
	accountB, err := client.GetNoteNode(t.Context(), "note:1")
	if err != nil {
		t.Fatal(err)
	}
	if accountA.Title != "账号 A" || accountB.Title != "账号 B" || strings.Contains(accountB.Content, "账号 A") {
		t.Fatalf("account data leaked: A=%+v B=%+v", accountA, accountB)
	}
}

func TestCloudNoteUpdateSendsRevisionAndUsesCloudResponse(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Method != http.MethodPut || request.URL.Path != "/cloud_note/note/4" {
			http.NotFound(writer, request)
			return
		}
		body, err := io.ReadAll(request.Body)
		if err != nil {
			t.Fatal(err)
		}
		var payload map[string]any
		if err := json.Unmarshal(body, &payload); err != nil {
			t.Fatal(err)
		}
		if payload["revision"] != float64(12) || payload["content_type"] != "richtext" {
			t.Errorf("payload = %s", body)
		}
		writeCloudNoteTestResponse(t, writer, map[string]any{
			"id": 4, "title": "云端已保存", "content": "<p>新内容</p>",
			"revision": 13, "create_time": time.Now(), "modify_time": time.Now(),
		})
	}))
	defer server.Close()

	client := authenticatedCloudNoteClient(server, "account-a")
	updated, err := client.UpdateNoteNode(t.Context(), "note:4", NoteUpdateInput{
		Title: "云端已保存", Content: "<p>新内容</p>", Revision: 12,
	})
	if err != nil {
		t.Fatal(err)
	}
	if updated.Revision != 13 || updated.Content != "<p>新内容</p>" {
		t.Fatalf("updated = %+v", updated)
	}
}

func TestCloudNoteCreateAcceptsLegacyNumericIDAndFetchesDetail(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		switch request.URL.Path {
		case "/cloud_note/note":
			if request.Method != http.MethodPost {
				t.Fatalf("method = %s", request.Method)
			}
			writeCloudNoteTestResponse(t, writer, 77)
		case "/cloud_note/note/77":
			writeCloudNoteTestResponse(t, writer, map[string]any{
				"id": 77, "title": "无标题笔记", "content": "",
				"content_type": "richtext", "revision": 1,
				"create_time": time.Now(), "modify_time": time.Now(),
			})
		default:
			http.NotFound(writer, request)
		}
	}))
	defer server.Close()

	client := authenticatedCloudNoteClient(server, "account-a")
	created, err := client.CreateNoteNode(t.Context(), NoteNodeInput{Kind: noteKindNote, Title: "无标题笔记"})
	if err != nil {
		t.Fatal(err)
	}
	if created.ID != "note:77" || created.Kind != noteKindNote || created.ContentType != "richtext" {
		t.Fatalf("created = %+v", created)
	}
}

func TestCloudNoteCreateUsesProductionDetailShape(t *testing.T) {
	var detailCalls atomic.Int32
	now := time.Now().UTC().Truncate(time.Second)
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		switch {
		case request.Method == http.MethodPost && request.URL.Path == "/cloud_note/note":
			writeCloudNoteTestResponse(t, writer, map[string]any{
				"id": 88, "user_id": 7, "folder_id": 0,
				"title": "无标题笔记", "content": "", "content_type": "richtext",
				"paper_style": "plain", "paper_config": "",
				"is_time_locked": false, "is_pinned": 0, "is_favorite": 0,
				"word_count": 0, "revision": 1, "is_locked": false,
				"has_password": false, "create_time": now, "modify_time": now,
				"tags": []string{},
			})
		case request.Method == http.MethodGet && request.URL.Path == "/cloud_note/note/88":
			detailCalls.Add(1)
			http.Error(writer, "unexpected detail request", http.StatusInternalServerError)
		default:
			http.NotFound(writer, request)
		}
	}))
	defer server.Close()

	client := authenticatedCloudNoteClient(server, "account-a")
	created, err := client.CreateNoteNode(t.Context(), NoteNodeInput{
		Kind: noteKindNote, Title: "无标题笔记",
	})
	if err != nil {
		t.Fatal(err)
	}
	if created.ID != "note:88" || created.Kind != noteKindNote || created.Title != "无标题笔记" ||
		created.ContentType != "richtext" || created.Locked || created.Revision != 1 {
		t.Fatalf("created = %+v", created)
	}
	if detailCalls.Load() != 0 {
		t.Fatalf("production create response triggered %d redundant detail requests", detailCalls.Load())
	}
}

func TestCloudNoteCreatePreservesMarkdownAndSpreadsheetTypes(t *testing.T) {
	tests := []struct {
		name, contentType, title, content string
	}{
		{name: "markdown", contentType: "markdown", title: "无标题Markdown", content: "# 标题\n\n正文"},
		{name: "spreadsheet", contentType: "spreadsheet", title: "无标题表格", content: `{"version":1,"activeSheetId":"sheet_1","sheets":[{"id":"sheet_1","name":"工作表1","rowCount":100,"colCount":26,"cells":{}}]}`},
	}
	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
				if request.Method != http.MethodPost || request.URL.Path != "/cloud_note/note" {
					http.NotFound(writer, request)
					return
				}
				var payload map[string]any
				if err := json.NewDecoder(request.Body).Decode(&payload); err != nil {
					t.Fatal(err)
				}
				if payload["content_type"] != test.contentType || payload["content"] != test.content {
					t.Fatalf("payload = %#v", payload)
				}
				writeCloudNoteTestResponse(t, writer, map[string]any{
					"id": 91, "title": test.title, "content": test.content, "content_type": test.contentType,
					"revision": 1, "create_time": time.Now(), "modify_time": time.Now(),
				})
			}))
			defer server.Close()

			client := authenticatedCloudNoteClient(server, "account-a")
			created, err := client.CreateNoteNode(t.Context(), NoteNodeInput{
				Kind: noteKindNote, Title: test.title, Content: test.content, ContentType: test.contentType,
			})
			if err != nil {
				t.Fatal(err)
			}
			if created.ContentType != test.contentType || created.Content != test.content {
				t.Fatalf("created = %+v", created)
			}
		})
	}
}

func TestCloudNoteCreateRejectsUnsupportedContentType(t *testing.T) {
	client := authenticatedCloudNoteClient(&httptest.Server{}, "account-a")
	_, err := client.CreateNoteNode(t.Context(), NoteNodeInput{Kind: noteKindNote, ContentType: "binary"})
	if err == nil || !strings.Contains(err.Error(), "文档类型") {
		t.Fatalf("error = %v", err)
	}
}

func TestLegacyLocalNotesAreDiscardedAndNotSerialized(t *testing.T) {
	path := filepath.Join(t.TempDir(), "data.json")
	legacy := `{"todos":[],"noteNodes":[{"id":"old","kind":"note","title":"旧笔记","content":"LOCAL-SECRET"}],"noteVersions":[{"id":"v1","noteId":"old","content":"OLD-SECRET"}],"settings":{}}`
	if err := os.WriteFile(path, []byte(legacy), 0o600); err != nil {
		t.Fatal(err)
	}
	store := NewStore(path)
	if err := store.Load(); err != nil {
		t.Fatal(err)
	}
	snapshot := store.Snapshot()
	if len(snapshot.NoteNodes) != 0 || len(snapshot.NoteVersions) != 0 {
		t.Fatalf("legacy notes were retained: %+v / %+v", snapshot.NoteNodes, snapshot.NoteVersions)
	}
	data, err := os.ReadFile(path)
	if err != nil {
		t.Fatal(err)
	}
	if strings.Contains(string(data), "noteNodes") || strings.Contains(string(data), "LOCAL-SECRET") || strings.Contains(string(data), "OLD-SECRET") {
		t.Fatalf("local state still contains note data: %s", data)
	}
}

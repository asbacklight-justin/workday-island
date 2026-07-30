package main

import (
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"strconv"
	"testing"
	"time"
)

func TestCreateNoteShareUsesCloudNoteReferenceAndCurrentAccount(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Method != http.MethodPost || request.URL.Path != "/share" {
			http.NotFound(writer, request)
			return
		}
		if request.Header.Get("Authorization") != "Bearer current-account" {
			t.Errorf("authorization = %q", request.Header.Get("Authorization"))
		}
		if request.Header.Get("X-Client-Source") != clientSource || request.Header.Get("X-Client-Version") != appVersion {
			t.Errorf("client headers = %q / %q", request.Header.Get("X-Client-Source"), request.Header.Get("X-Client-Version"))
		}
		body, err := io.ReadAll(request.Body)
		if err != nil {
			t.Fatal(err)
		}
		var payload map[string]any
		if err := json.Unmarshal(body, &payload); err != nil {
			t.Fatal(err)
		}
		if payload["ref_type"] != "note" || payload["ref_id"] != float64(42) {
			t.Errorf("note reference = %#v / %#v", payload["ref_type"], payload["ref_id"])
		}
		if payload["note_unlock_token"] != "unlock-42" {
			t.Errorf("unlock token = %#v", payload["note_unlock_token"])
		}
		if payload["content_mode"] != "live" || payload["allow_copy"] != float64(1) || payload["allow_comment"] != float64(1) {
			t.Errorf("share policy = %s", body)
		}
		writeCloudNoteTestResponse(t, writer, map[string]any{
			"id": 91, "share_code": "abc123", "title": "周报",
			"ref_type": "note", "ref_id": 42, "lifecycle_state": "active",
			"create_time": time.Now(), "modify_time": time.Now(), "share_time": time.Now(),
		})
	}))
	defer server.Close()

	client := authenticatedCloudNoteClient(server, "current-account")
	client.setCloudNoteUnlockToken(42, "unlock-42")
	record, err := client.CreateNoteShare(t.Context(), CreateNoteShareInput{
		NoteID: "note:42", Title: "周报", ContentMode: "live",
		AllowCopy: true, AllowComment: true, Source: "Workday Island",
		ShowSource: true, ShowCreator: true,
	})
	if err != nil {
		t.Fatal(err)
	}
	if record.ID != 91 || record.PublicURL != "https://admin.asbacklight.cn/share/abc123" {
		t.Fatalf("record = %+v", record)
	}
}

func TestListNoteSharesAlwaysFiltersToNotesAndBuildsPublicURL(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Method != http.MethodGet || request.URL.Path != "/share" {
			http.NotFound(writer, request)
			return
		}
		query := request.URL.Query()
		if query.Get("ref_type") != "note" || query.Get("keyword") != "周报" || query.Get("lifecycle_state") != "active" {
			t.Errorf("query = %s", request.URL.RawQuery)
		}
		writeCloudNoteTestResponse(t, writer, map[string]any{
			"total": 1, "page": 2, "pageSize": 10,
			"list": []map[string]any{{
				"id": 7, "share_code": "cloud-note-7", "title": "周报",
				"ref_type": "note", "ref_id": 5, "lifecycle_state": "active",
				"create_time": time.Now(), "modify_time": time.Now(), "share_time": time.Now(),
			}},
		})
	}))
	defer server.Close()

	client := authenticatedCloudNoteClient(server, "account-a")
	page, err := client.ListNoteShares(t.Context(), 2, 10, "周报", "active")
	if err != nil {
		t.Fatal(err)
	}
	if page.Total != 1 || len(page.List) != 1 || page.List[0].PublicURL != "https://admin.asbacklight.cn/share/cloud-note-7" {
		t.Fatalf("page = %+v", page)
	}
}

func TestNoteShareQuotaAcceptsLegacyTopLevelNumber(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.Method != http.MethodGet || request.URL.Path != "/cloud_note/share/quota" {
			http.NotFound(writer, request)
			return
		}
		writer.Header().Set("Content-Type", "application/json")
		_, _ = writer.Write([]byte(`0`))
	}))
	defer server.Close()

	client := authenticatedCloudNoteClient(server, "account-a")
	quota, err := client.GetNoteShareQuota(t.Context())
	if err != nil {
		t.Fatal(err)
	}
	if !quota.UnlimitedDaily || !quota.UnlimitedTotal || quota.SourceName != "系统默认" {
		t.Fatalf("quota = %+v", quota)
	}
}

func TestNoteShareManagementActionsReuseShareEndpoints(t *testing.T) {
	var calls []string
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		calls = append(calls, request.Method+" "+request.URL.Path)
		if request.Header.Get("Authorization") != "Bearer account-a" {
			t.Errorf("authorization = %q", request.Header.Get("Authorization"))
		}
		id, _ := strconv.ParseUint(request.PathValue("id"), 10, 64)
		if id == 0 {
			id = 15
		}
		if request.Method == http.MethodDelete {
			writeCloudNoteTestResponse(t, writer, nil)
			return
		}
		writeCloudNoteTestResponse(t, writer, map[string]any{
			"id": id, "share_code": "managed", "title": "共享笔记",
			"ref_type": "note", "ref_id": 6, "lifecycle_state": "active",
			"create_time": time.Now(), "modify_time": time.Now(), "share_time": time.Now(),
		})
	}))
	defer server.Close()

	client := authenticatedCloudNoteClient(server, "account-a")
	if _, err := client.UpdateNoteShare(t.Context(), 15, UpdateNoteShareInput{
		Title: "共享笔记", ContentMode: "snapshot", AllowCopy: true, Status: 1,
		ShowSource: true, ShowCreator: true,
	}); err != nil {
		t.Fatal(err)
	}
	if _, err := client.RevokeNoteShare(t.Context(), 15); err != nil {
		t.Fatal(err)
	}
	if _, err := client.RegenerateNoteShare(t.Context(), 15); err != nil {
		t.Fatal(err)
	}
	if err := client.DeleteNoteShare(t.Context(), 15); err != nil {
		t.Fatal(err)
	}
	expected := []string{
		"PUT /share/15",
		"POST /share/15/revoke",
		"POST /share/15/regenerate",
		"DELETE /share/15",
	}
	if len(calls) != len(expected) {
		t.Fatalf("calls = %#v", calls)
	}
	for index := range expected {
		if calls[index] != expected[index] {
			t.Fatalf("calls = %#v", calls)
		}
	}
}

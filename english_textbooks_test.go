package main

import (
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestListEnglishTextbooksRequiresPlusMembership(t *testing.T) {
	app := NewApp()
	_, err := app.ListEnglishTextbooks()
	if !errors.Is(err, ErrEnglishTextbookPlusRequired) {
		t.Fatalf("expected Plus membership error, got %v", err)
	}
}

func TestListEnglishTextbooksUsesSharedAccountSession(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/english-textbooks" {
			t.Fatalf("unexpected path: %s", r.URL.Path)
		}
		if got := r.Header.Get("Authorization"); got != "Bearer account-token" {
			t.Fatalf("unexpected authorization: %q", got)
		}
		w.Header().Set("Content-Type", "application/json")
		_, _ = w.Write([]byte(`{"code":200,"message":"success","data":{"list":[{"code":"nce2","title_en":"New Concept English 2","title_cn":"新概念英语第二册"}],"total":1}}`))
	}))
	defer server.Close()

	app := NewApp()
	app.cloudDisk.baseURL = server.URL
	app.cloudDisk.apiClient = server.Client()
	app.cloudDisk.token = "account-token"
	app.cloudDisk.user = &CloudDiskUser{MembershipTier: "plus"}

	result, err := app.ListEnglishTextbooks()
	if err != nil {
		t.Fatalf("list textbooks: %v", err)
	}
	if result.Total != 1 || len(result.List) != 1 || result.List[0].Code != "nce2" {
		t.Fatalf("unexpected textbook response: %#v", result)
	}
}

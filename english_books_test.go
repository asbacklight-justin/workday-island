package main

import (
	"errors"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestEnglishLibraryRequiresPlusMembership(t *testing.T) {
	app := NewApp()
	if _, err := app.ListEnglishBooks("", ""); !errors.Is(err, ErrEnglishLibraryPlusRequired) {
		t.Fatalf("expected Plus membership error, got %v", err)
	}
}

func TestEnglishLibraryUsesSharedAccountSession(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/english-library/books" {
			t.Fatalf("unexpected path: %s", r.URL.Path)
		}
		if r.URL.Query().Get("keyword") != "alice" || r.URL.Query().Get("language") != "en" {
			t.Fatalf("unexpected query: %s", r.URL.RawQuery)
		}
		if got := r.Header.Get("Authorization"); got != "Bearer account-token" {
			t.Fatalf("unexpected authorization: %q", got)
		}
		if strings.TrimSpace(r.Header.Get("X-Client-Version")) == "" {
			t.Fatal("missing desktop client version header")
		}
		w.Header().Set("Content-Type", "application/json")
		_, _ = w.Write([]byte(`{"code":200,"message":"success","data":{"list":[{"id":7,"title":"Alice's Adventures in Wonderland","language":"en","progress":12.5}],"total":1,"page":1,"pageSize":100}}`))
	}))
	defer server.Close()

	app := NewApp()
	app.cloudDisk.baseURL = server.URL
	app.cloudDisk.apiClient = server.Client()
	app.cloudDisk.token = "account-token"
	app.cloudDisk.user = &CloudDiskUser{MembershipTier: "plus"}

	result, err := app.ListEnglishBooks("alice", "en")
	if err != nil {
		t.Fatalf("list English books: %v", err)
	}
	if result.Total != 1 || len(result.List) != 1 || result.List[0].ID != 7 {
		t.Fatalf("unexpected library response: %#v", result)
	}
}

package main

import (
	"context"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestCloudDiskLoginAndListShareAccountToken(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		writer.Header().Set("Content-Type", "application/json")
		if request.Header.Get("X-Client-Source") != clientSource || request.Header.Get("X-Client-Version") != appVersion {
			t.Fatalf("missing client headers: source=%q version=%q", request.Header.Get("X-Client-Source"), request.Header.Get("X-Client-Version"))
		}
		switch request.URL.Path {
		case "/user/login":
			if request.Method != http.MethodPost {
				t.Fatalf("unexpected login method: %s", request.Method)
			}
			body, _ := io.ReadAll(request.Body)
			if !strings.Contains(string(body), `"username":"justin"`) || !strings.Contains(string(body), `"expireSeconds":604800`) {
				t.Fatalf("unexpected login payload: %s", body)
			}
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"token":"shared-token","user":{"id":26,"username":"justin","nickname":"Justin"}}}`))
		case "/netdisk/items":
			if request.Header.Get("Authorization") != "Bearer shared-token" {
				t.Fatalf("cloud request did not share the account token: %q", request.Header.Get("Authorization"))
			}
			if request.URL.Query().Get("parent_id") != "7" || request.URL.Query().Get("keyword") != "report" {
				t.Fatalf("unexpected cloud query: %s", request.URL.RawQuery)
			}
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"total":1,"list":[{"id":9,"parent_id":7,"node_type":2,"name":"report.pdf","size":12}],"page":1,"pageSize":50}}`))
		default:
			http.NotFound(writer, request)
		}
	}))
	defer server.Close()

	app := &App{}
	client := NewCloudDiskClient(app, server.URL)
	session, err := client.Login(context.Background(), "justin", "secret")
	if err != nil {
		t.Fatal(err)
	}
	if !session.LoggedIn || session.User == nil || session.User.ID != 26 {
		t.Fatalf("unexpected session: %#v", session)
	}
	page, err := client.List(context.Background(), 7, 1, 50, "report")
	if err != nil {
		t.Fatal(err)
	}
	if page.Total != 1 || len(page.List) != 1 || page.List[0].Name != "report.pdf" {
		t.Fatalf("unexpected page: %#v", page)
	}
}

func TestCloudDiskUnauthorizedClearsSession(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		writer.Header().Set("Content-Type", "application/json")
		if request.URL.Path == "/user/login" {
			_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"token":"expired-token","user":{"id":26,"username":"justin"}}}`))
			return
		}
		writer.WriteHeader(http.StatusUnauthorized)
		_, _ = writer.Write([]byte(`{"code":401,"message":"登录已过期","data":null}`))
	}))
	defer server.Close()

	client := NewCloudDiskClient(&App{}, server.URL)
	if _, err := client.Login(context.Background(), "justin", "secret"); err != nil {
		t.Fatal(err)
	}
	if _, err := client.Quota(context.Background()); err == nil {
		t.Fatal("expected unauthorized quota request to fail")
	}
	if client.Session().LoggedIn {
		t.Fatal("expired session should be cleared")
	}
}

func TestCloudProgressReaderReportsCompletion(t *testing.T) {
	var done, total int64
	reader := &cloudProgressReader{
		reader: strings.NewReader("hello"),
		total:  5,
		report: func(current, expected int64) {
			done, total = current, expected
		},
	}
	content, err := io.ReadAll(reader)
	if err != nil {
		t.Fatal(err)
	}
	if string(content) != "hello" || done != 5 || total != 5 {
		t.Fatalf("unexpected progress: content=%q done=%d total=%d", content, done, total)
	}
}

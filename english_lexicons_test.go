package main

import (
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestEnglishLexiconsRequirePlusMembership(t *testing.T) {
	app := NewApp()
	if _, err := app.ListEnglishLexicons(); !errors.Is(err, ErrEnglishLexiconPlusRequired) {
		t.Fatalf("expected Plus membership error, got %v", err)
	}
}

func TestEnglishLexiconLessonUsesSharedAccountSession(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/english-lexicons/nce_2/lessons/1" {
			t.Fatalf("unexpected path: %s", r.URL.Path)
		}
		if got := r.Header.Get("Authorization"); got != "Bearer account-token" {
			t.Fatalf("unexpected authorization: %q", got)
		}
		w.Header().Set("Content-Type", "application/json")
		_, _ = w.Write([]byte(`{"code":200,"message":"success","data":{"lexicon":{"code":"nce_2","name":"新概念英语第二册"},"lesson":{"lesson_no":1,"title":"A private conversation"},"entries":[{"id":1,"sort_no":1,"word":"private","meaning_cn":"私人的"}]}}`))
	}))
	defer server.Close()

	app := NewApp()
	app.cloudDisk.baseURL = server.URL
	app.cloudDisk.apiClient = server.Client()
	app.cloudDisk.token = "account-token"
	app.cloudDisk.user = &CloudDiskUser{MembershipTier: "plus"}

	result, err := app.GetEnglishLexiconLesson("nce_2", 1)
	if err != nil {
		t.Fatalf("get lexicon lesson: %v", err)
	}
	if result.Lesson.LessonNo != 1 || len(result.Entries) != 1 || result.Entries[0].Word != "private" {
		t.Fatalf("unexpected lexicon lesson: %#v", result)
	}
}

package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestLogoutAccountClearsRealtimeAndCloudSessions(t *testing.T) {
	app := NewApp()
	app.cloudDisk.token = "test-token"
	app.cloudDisk.user = &CloudDiskUser{ID: 7, Username: "justin", Nickname: "Justin"}
	app.realtime.desiredOnline = true
	app.realtime.authMode = "password"
	app.realtime.authUsername = "justin"
	app.realtime.authPassword = "secret"
	app.realtime.activeIdentity = &RealtimeIdentity{UserID: 7, Username: "justin", DisplayName: "Justin", AuthMode: "password"}

	session := app.LogoutAccount()

	if session.LoggedIn || session.User != nil {
		t.Fatalf("expected logged-out account session, got %+v", session)
	}
	if session.Realtime.DesiredOnline || session.Realtime.Identity != nil {
		t.Fatalf("expected realtime session to be disconnected, got %+v", session.Realtime)
	}
	if cloud := app.cloudDisk.Session(); cloud.LoggedIn || cloud.User != nil {
		t.Fatalf("expected cloud session to be cleared, got %+v", cloud)
	}
}

func TestAccountSessionSharesCloudUserAndRealtimeState(t *testing.T) {
	app := NewApp()
	app.cloudDisk.token = "test-token"
	app.cloudDisk.user = &CloudDiskUser{ID: 8, Username: "alice", Nickname: "Alice"}
	app.realtime.authMode = "password"
	app.realtime.activeIdentity = &RealtimeIdentity{UserID: 8, Username: "alice", DisplayName: "Alice", AuthMode: "password"}

	session := app.GetAccountSession()

	if !session.LoggedIn || session.User == nil || session.User.Nickname != "Alice" {
		t.Fatalf("expected shared account user, got %+v", session)
	}
	if session.Realtime.Identity == nil || session.Realtime.Identity.UserID != 8 {
		t.Fatalf("expected shared realtime identity, got %+v", session.Realtime)
	}
}

func TestRefreshAccountSessionUpdatesMembershipWithoutRelogin(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(writer http.ResponseWriter, request *http.Request) {
		if request.URL.Path != "/user/info" {
			http.NotFound(writer, request)
			return
		}
		if request.Header.Get("Authorization") != "Bearer test-token" {
			t.Fatalf("profile refresh did not reuse account token: %q", request.Header.Get("Authorization"))
		}
		writer.Header().Set("Content-Type", "application/json")
		_, _ = writer.Write([]byte(`{"code":200,"message":"success","data":{"id":8,"username":"alice","nickname":"Alice","roles":[{"role_code":"WORKDAY_ISLAND_ULTRA","role_name":"工位岛Ultra会员"}]}}`))
	}))
	defer server.Close()

	app := NewApp()
	app.cloudDisk = NewCloudDiskClient(app, server.URL)
	app.cloudDisk.token = "test-token"
	app.cloudDisk.user = &CloudDiskUser{ID: 8, Username: "alice", Nickname: "Alice", MembershipTier: "member"}

	session, err := app.RefreshAccountSession()
	if err != nil {
		t.Fatal(err)
	}
	if !session.LoggedIn || session.User == nil || session.User.MembershipTier != "ultra" {
		t.Fatalf("expected refreshed Ultra membership, got %+v", session)
	}
}

package main

import "testing"

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

package main

import (
	"path/filepath"
	"testing"
)

func TestRequiredMembershipRankForTheme(t *testing.T) {
	tests := map[string]int{
		"system":      0,
		"aurora":      0,
		"plus-theme":  1,
		"plus-light":  1,
		"pro-theme":   2,
		"pro-light":   2,
		"ultra-theme": 3,
		"ultra-light": 3,
	}
	for theme, want := range tests {
		if got := requiredMembershipRankForTheme(theme); got != want {
			t.Fatalf("requiredMembershipRankForTheme(%q) = %d, want %d", theme, got, want)
		}
	}
}

func TestSaveSettingsEnforcesMemberThemeAccess(t *testing.T) {
	tests := []struct {
		name    string
		tier    string
		theme   string
		allowed bool
	}{
		{name: "guest cannot use Plus", theme: "plus-theme"},
		{name: "guest cannot use bright Plus", theme: "plus-light"},
		{name: "Plus can use Plus", tier: "plus", theme: "plus-theme", allowed: true},
		{name: "Plus can use bright Plus", tier: "plus", theme: "plus-light", allowed: true},
		{name: "Plus cannot use Pro", tier: "plus", theme: "pro-theme"},
		{name: "Plus cannot use bright Pro", tier: "plus", theme: "pro-light"},
		{name: "Pro can use Plus", tier: "pro", theme: "plus-theme", allowed: true},
		{name: "Pro can use Pro", tier: "pro", theme: "pro-theme", allowed: true},
		{name: "Pro can use bright Pro", tier: "pro", theme: "pro-light", allowed: true},
		{name: "Pro cannot use Ultra", tier: "pro", theme: "ultra-theme"},
		{name: "Pro cannot use bright Ultra", tier: "pro", theme: "ultra-light"},
		{name: "Ultra can use Plus", tier: "ultra", theme: "plus-theme", allowed: true},
		{name: "Ultra can use Pro", tier: "ultra", theme: "pro-theme", allowed: true},
		{name: "Ultra can use Ultra", tier: "ultra", theme: "ultra-theme", allowed: true},
		{name: "Ultra can use every bright tier", tier: "ultra", theme: "ultra-light", allowed: true},
	}
	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			app := &App{store: NewStore(filepath.Join(t.TempDir(), "data.json"))}
			app.cloudDisk = NewCloudDiskClient(app, cloudDiskAPIBaseURL)
			if test.tier != "" {
				app.cloudDisk.token = "test-token"
				app.cloudDisk.user = &CloudDiskUser{MembershipTier: test.tier}
			}
			settings := app.store.Snapshot().Settings
			settings.Workdays = []int{1, 2, 3, 4, 5}
			settings.Theme = test.theme
			_, err := app.SaveSettings(settings)
			if test.allowed && err != nil {
				t.Fatalf("expected theme to be allowed: %v", err)
			}
			if !test.allowed && err == nil {
				t.Fatal("expected theme to be rejected")
			}
		})
	}
}

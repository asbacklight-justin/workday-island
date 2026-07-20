package main

import (
	"fmt"
	"net/http"
	"net/url"
	"path/filepath"
	"runtime"
	"sync/atomic"
	"testing"
	"time"
)

func TestCompareVersions(t *testing.T) {
	tests := []struct {
		left, right string
		want        int
	}{
		{"0.6.1", "0.6.0", 1},
		{"v1.0.0", "0.9.9", 1},
		{"0.6.0", "0.6.0", 0},
		{"0.5.9", "0.6.0", -1},
	}
	for _, test := range tests {
		got, err := compareVersions(test.left, test.right)
		if err != nil || got != test.want {
			t.Fatalf("compareVersions(%q, %q) = %d, %v; want %d", test.left, test.right, got, err, test.want)
		}
	}
	if _, err := compareVersions("not-a-version", "0.6.0"); err == nil {
		t.Fatal("invalid version should fail")
	}
}

func TestCheckForUpdatesSelectsPlatformAsset(t *testing.T) {
	if runtime.GOOS != "darwin" && runtime.GOOS != "windows" {
		t.Skip("desktop update assets are only selected on macOS and Windows")
	}
	oldEndpoint := latestReleaseEndpoint
	defer func() { latestReleaseEndpoint = oldEndpoint }()
	latestReleaseEndpoint = "https://api.github.test/releases/latest"
	suffix := "macOS-universal.dmg"
	if runtime.GOOS == "windows" {
		suffix = "windows-x64-Setup.exe"
	}
	assetName := "Workday-Island-v9.0.0-" + suffix
	body := fmt.Sprintf(`{"tag_name":"v9.0.0","html_url":"https://github.com/asbacklight-justin/workday-island/releases/tag/v9.0.0","body":"notes","published_at":"2026-07-20T00:00:00Z","assets":[{"name":%q,"browser_download_url":"https://github.com/asbacklight-justin/workday-island/releases/download/v9.0.0/%s","size":12345,"digest":"sha256:abc"}]}`, assetName, assetName)
	app := NewApp()
	app.store = NewStore(filepath.Join(t.TempDir(), "data.json"))
	app.httpClient = &http.Client{Transport: roundTripFunc(func(request *http.Request) (*http.Response, error) {
		return testResponse(request, http.StatusOK, body), nil
	})}
	info, err := app.CheckForUpdates(true)
	if err != nil {
		t.Fatal(err)
	}
	if !info.Available || info.LatestVersion != "9.0.0" || info.AssetName != assetName || info.Digest != "sha256:abc" {
		t.Fatalf("unexpected update info: %#v", info)
	}
}

func TestAutomaticUpdateCheckSkipsWithinOneDay(t *testing.T) {
	app := NewApp()
	app.store = NewStore(filepath.Join(t.TempDir(), "data.json"))
	if err := app.store.MarkUpdateChecked(time.Now()); err != nil {
		t.Fatal(err)
	}
	info, err := app.CheckForUpdates(false)
	if err != nil || !info.Skipped {
		t.Fatalf("expected skipped update check, got %#v, %v", info, err)
	}
}

func TestCheckForUpdatesFallsBackWhenAPIRateLimited(t *testing.T) {
	if runtime.GOOS != "darwin" && runtime.GOOS != "windows" {
		t.Skip("desktop update assets are only selected on macOS and Windows")
	}
	oldEndpoint, oldPage := latestReleaseEndpoint, latestReleasePage
	defer func() {
		latestReleaseEndpoint = oldEndpoint
		latestReleasePage = oldPage
	}()
	latestReleaseEndpoint = "https://api.github.test/releases/latest"
	latestReleasePage = "https://github.test/releases/latest"
	var attempts atomic.Int32
	app := NewApp()
	app.store = NewStore(filepath.Join(t.TempDir(), "data.json"))
	app.httpClient = &http.Client{Transport: roundTripFunc(func(request *http.Request) (*http.Response, error) {
		attempts.Add(1)
		if request.URL.Host == "api.github.test" {
			response := testResponse(request, http.StatusForbidden, `{"message":"rate limit exceeded"}`)
			response.Header.Set("X-RateLimit-Remaining", "0")
			return response, nil
		}
		finalURL, _ := url.Parse("https://github.com/asbacklight-justin/workday-island/releases/tag/v9.0.0")
		request.URL = finalURL
		return testResponse(request, http.StatusOK, `<html><body>release</body></html>`), nil
	})}
	info, err := app.CheckForUpdates(true)
	if err != nil {
		t.Fatal(err)
	}
	wantName := updateAssetName("9.0.0", runtime.GOOS, runtime.GOARCH)
	if attempts.Load() != 2 || !info.Available || info.LatestVersion != "9.0.0" || info.AssetName != wantName || info.DownloadURL == "" {
		t.Fatalf("unexpected fallback result: attempts=%d info=%#v", attempts.Load(), info)
	}
}

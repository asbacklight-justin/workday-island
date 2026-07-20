package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"regexp"
	"runtime"
	"strconv"
	"strings"
	"time"

	wailsRuntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

var latestReleaseEndpoint = "https://api.github.com/repos/asbacklight-justin/workday-island/releases/latest"
var latestReleasePage = "https://github.com/asbacklight-justin/workday-island/releases/latest"

var releaseTagPattern = regexp.MustCompile(`/asbacklight-justin/workday-island/releases/tag/(v?[0-9]+\.[0-9]+\.[0-9]+)`)

const updateCheckInterval = 24 * time.Hour

type githubRelease struct {
	TagName     string        `json:"tag_name"`
	HTMLURL     string        `json:"html_url"`
	Body        string        `json:"body"`
	PublishedAt time.Time     `json:"published_at"`
	Assets      []githubAsset `json:"assets"`
}

type githubAsset struct {
	Name               string `json:"name"`
	BrowserDownloadURL string `json:"browser_download_url"`
	Size               int64  `json:"size"`
	Digest             string `json:"digest"`
}

func (a *App) CheckForUpdates(force bool) (UpdateInfo, error) {
	result := UpdateInfo{CurrentVersion: appVersion}
	if !force {
		if last := a.store.LastUpdateCheck(); last != nil {
			elapsed := time.Since(*last)
			if elapsed >= 0 && elapsed < updateCheckInterval {
				result.Skipped = true
				return result, nil
			}
		}
	}

	ctx, cancel := context.WithTimeout(context.Background(), 12*time.Second)
	defer cancel()
	release, err := a.fetchLatestRelease(ctx)
	if err != nil {
		return result, err
	}
	latest := strings.TrimPrefix(strings.TrimSpace(release.TagName), "v")
	if latest == "" {
		return result, errors.New("更新信息缺少版本号")
	}
	comparison, err := compareVersions(latest, appVersion)
	if err != nil {
		return result, fmt.Errorf("更新版本格式无效: %w", err)
	}
	result.LatestVersion = latest
	result.Available = comparison > 0
	result.ReleaseURL = release.HTMLURL
	result.ReleaseNotes = strings.TrimSpace(release.Body)
	result.PublishedAt = release.PublishedAt
	if asset := selectUpdateAsset(release, runtime.GOOS, runtime.GOARCH); asset != nil {
		result.DownloadURL = asset.BrowserDownloadURL
		result.AssetName = asset.Name
		result.AssetSize = asset.Size
		result.Digest = asset.Digest
	} else if name := updateAssetName(latest, runtime.GOOS, runtime.GOARCH); name != "" {
		result.AssetName = name
		tag := strings.TrimSpace(release.TagName)
		if !strings.HasPrefix(tag, "v") {
			tag = "v" + latest
		}
		result.DownloadURL = "https://github.com/asbacklight-justin/workday-island/releases/download/" + url.PathEscape(tag) + "/" + url.PathEscape(name)
	}
	if err := a.store.MarkUpdateChecked(time.Now()); err != nil {
		return result, err
	}
	return result, nil
}

func (a *App) fetchLatestRelease(ctx context.Context) (githubRelease, error) {
	release, apiErr := a.fetchLatestReleaseAPI(ctx)
	if apiErr == nil {
		return release, nil
	}
	release, pageErr := a.fetchLatestReleasePage(ctx)
	if pageErr == nil {
		return release, nil
	}
	return githubRelease{}, fmt.Errorf("检查更新失败: %v；备用更新源失败: %v", apiErr, pageErr)
}

func (a *App) fetchLatestReleaseAPI(ctx context.Context) (githubRelease, error) {
	request, err := http.NewRequestWithContext(ctx, http.MethodGet, latestReleaseEndpoint, nil)
	if err != nil {
		return githubRelease{}, err
	}
	request.Header.Set("Accept", "application/vnd.github+json")
	request.Header.Set("X-GitHub-Api-Version", "2022-11-28")
	request.Header.Set("User-Agent", "Workday-Island/"+appVersion)
	response, err := a.httpClient.Do(request)
	if err != nil {
		return githubRelease{}, err
	}
	defer response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		if response.StatusCode == http.StatusForbidden && response.Header.Get("X-RateLimit-Remaining") == "0" {
			return githubRelease{}, errors.New("GitHub API 请求额度已用完")
		}
		return githubRelease{}, fmt.Errorf("GitHub API 返回 HTTP %d", response.StatusCode)
	}
	var release githubRelease
	if err := json.NewDecoder(io.LimitReader(response.Body, 2<<20)).Decode(&release); err != nil {
		return githubRelease{}, fmt.Errorf("解析 GitHub API 响应失败: %w", err)
	}
	return release, nil
}

func (a *App) fetchLatestReleasePage(ctx context.Context) (githubRelease, error) {
	request, err := http.NewRequestWithContext(ctx, http.MethodGet, latestReleasePage, nil)
	if err != nil {
		return githubRelease{}, err
	}
	request.Header.Set("Accept", "text/html,application/xhtml+xml")
	request.Header.Set("User-Agent", "Workday-Island/"+appVersion)
	response, err := a.httpClient.Do(request)
	if err != nil {
		return githubRelease{}, err
	}
	defer response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return githubRelease{}, fmt.Errorf("GitHub Releases 页面返回 HTTP %d", response.StatusCode)
	}
	pageURL := latestReleasePage
	if response.Request != nil && response.Request.URL != nil {
		pageURL = response.Request.URL.String()
	}
	match := releaseTagPattern.FindStringSubmatch(pageURL)
	if len(match) < 2 {
		body, err := io.ReadAll(io.LimitReader(response.Body, 2<<20))
		if err != nil {
			return githubRelease{}, err
		}
		match = releaseTagPattern.FindStringSubmatch(string(body))
	}
	if len(match) < 2 {
		return githubRelease{}, errors.New("无法从 GitHub Releases 页面识别版本号")
	}
	tag := match[1]
	if _, err := compareVersions(strings.TrimPrefix(tag, "v"), appVersion); err != nil {
		return githubRelease{}, err
	}
	return githubRelease{
		TagName: tag,
		HTMLURL: "https://github.com/asbacklight-justin/workday-island/releases/tag/" + url.PathEscape(tag),
	}, nil
}

func (a *App) OpenUpdateURL(target string) error {
	parsed, err := url.Parse(target)
	if err != nil {
		return errors.New("更新地址无效")
	}
	if parsed.Scheme != "https" || !strings.EqualFold(parsed.Hostname(), "github.com") || !strings.HasPrefix(parsed.Path, "/asbacklight-justin/workday-island/releases/") {
		return errors.New("更新地址不受信任")
	}
	if a.ctx == nil {
		return errors.New("应用尚未完成启动")
	}
	wailsRuntime.BrowserOpenURL(a.ctx, parsed.String())
	return nil
}

func selectUpdateAsset(release githubRelease, goos, goarch string) *githubAsset {
	suffix := updateAssetSuffix(goos, goarch)
	if suffix == "" {
		return nil
	}
	for index := range release.Assets {
		if strings.HasSuffix(release.Assets[index].Name, suffix) {
			return &release.Assets[index]
		}
	}
	return nil
}

func updateAssetName(version, goos, goarch string) string {
	suffix := updateAssetSuffix(goos, goarch)
	if suffix == "" {
		return ""
	}
	return "Workday-Island-v" + strings.TrimPrefix(version, "v") + "-" + suffix
}

func updateAssetSuffix(goos, goarch string) string {
	switch goos {
	case "darwin":
		return "macOS-universal.dmg"
	case "windows":
		if goarch == "amd64" {
			return "windows-x64-Setup.exe"
		}
	}
	return ""
}

func compareVersions(left, right string) (int, error) {
	parse := func(value string) ([3]int, error) {
		var parsed [3]int
		core := strings.SplitN(strings.TrimPrefix(strings.TrimSpace(value), "v"), "-", 2)[0]
		parts := strings.Split(core, ".")
		if len(parts) != 3 {
			return parsed, fmt.Errorf("%q 不是 major.minor.patch", value)
		}
		for index, part := range parts {
			number, err := strconv.Atoi(part)
			if err != nil || number < 0 {
				return parsed, fmt.Errorf("%q 不是有效版本号", value)
			}
			parsed[index] = number
		}
		return parsed, nil
	}
	a, err := parse(left)
	if err != nil {
		return 0, err
	}
	b, err := parse(right)
	if err != nil {
		return 0, err
	}
	for index := range a {
		if a[index] > b[index] {
			return 1, nil
		}
		if a[index] < b[index] {
			return -1, nil
		}
	}
	return 0, nil
}

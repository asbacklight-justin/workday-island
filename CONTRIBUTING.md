# Contributing to Workday Island

[中文](CONTRIBUTING.zh-CN.md) · [English](CONTRIBUTING.md)

Thanks for helping improve Workday Island. Small, focused changes are easiest to review.

## Before opening an issue

1. Search existing issues and confirm the problem is not already tracked.
2. Reproduce it with the newest release.
3. Include the operating system, CPU architecture, app version, exact steps, expected behaviour, actual behaviour, and relevant screenshots.
4. Remove private todo text, salary values, paths, or other personal data before attaching logs or screenshots.

Security vulnerabilities must be reported privately according to [SECURITY.md](SECURITY.md), not through a public issue.

## Development setup

Requirements: Go 1.23+, Git, and platform build tools. Wails CLI is optional for hot reload.

```bash
git clone https://github.com/asbacklight-justin/workday-island.git
cd workday-island
go mod download
go test ./...
go run .
```

Frontend assets are plain files under `frontend/dist/` and are embedded directly by Go. Keep Chinese and English UI strings in sync whenever text changes.

## Pull request checklist

- Keep the change scoped to one problem or feature.
- Add or update Go tests for business logic.
- Run `gofmt` on changed Go files and `go test ./...`.
- Test both full and compact modes when UI layout changes.
- Check Chinese, English, and system-language modes when text changes.
- Update README, build/privacy documentation, and CHANGELOG when user-visible behaviour changes.
- Do not commit generated installers, app bundles, personal data files, credentials, or signing certificates.

By contributing, you agree that your contribution is licensed under the project's MIT License.

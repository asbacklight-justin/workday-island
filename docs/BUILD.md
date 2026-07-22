# Workday Island build and release guide

[中文](BUILD.zh-CN.md) · [English](BUILD.md)

This document is for contributors and maintainers. End users should install packages from [GitHub Releases](https://github.com/asbacklight-justin/workday-island/releases).

## 1. Prerequisites

General requirements:

- Go 1.23 or newer;
- Git;
- network access for Go Modules;
- matching versions in the root `VERSION` file, `appVersion` in `app.go`, and `productVersion` in `wails.json`.

macOS builds require:

- macOS 12 or newer;
- Xcode Command Line Tools, including `clang`, `lipo`, `codesign`, and `hdiutil`;
- a toolchain capable of compiling CGO for both `arm64` and `x86_64`.

Windows builds require:

- Windows 10/11 x64;
- Inno Setup 6;
- PowerShell;
- `rsrc v0.10.2`, installed automatically by the script through `go install`.

## 2. Test the project

```bash
go mod download
gofmt -w .
go test ./...
```

Before a release, also check full/compact frameless controls, compact drag and size restoration, dark/light/system themes, optional compact todos, Chinese/English switching, foreground todo reminders, focus-completion reminders, weather offline fallback, custom currency symbols, update detection against a test release response, and earnings-card hiding when salary is empty.

## 3. macOS universal DMG

```bash
chmod +x scripts/build-macos.sh scripts/package-macos.sh
./scripts/package-macos.sh
```

The scripts compile `amd64/x86_64` and `arm64` separately, merge them with `lipo`, then create the app bundle, ICNS icon, ad-hoc signature, and DMG. Output:

```text
build/bin/Workday-Island-v0.6.2-macOS-universal.dmg
```

Verify architectures and the signature:

```bash
lipo -info "build/bin/Workday Island.app/Contents/MacOS/Workday Island"
codesign --verify --deep --strict --verbose=2 "build/bin/Workday Island.app"
spctl --assess --type execute --verbose "build/bin/Workday Island.app"
```

The current build uses an ad-hoc signature suitable for open-source testing. Wider distribution should use an Apple Developer ID Application certificate, followed by `notarytool submit` and `stapler staple`.

## 4. Windows x64 Setup

Run in PowerShell:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
./scripts/build-windows-installer.ps1
```

The script:

1. creates a multi-size ICO from `build/appicon.png`;
2. embeds the icon and application manifest in the EXE;
3. produces the Windows GUI executable;
4. packages it with Inno Setup into a bilingual installer with Start Menu integration, an optional desktop shortcut, and an uninstaller.

Output:

```text
build/bin/Workday-Island-v0.6.2-windows-x64-Setup.exe
```

For production distribution, sign both the application EXE and Setup package with the organisation's Authenticode certificate and validate them with `Get-AuthenticodeSignature`.

## 5. Automated releases

`.github/workflows/release.yml` runs for `v*.*.*` tags:

1. a macOS runner builds the universal DMG;
2. a Windows runner builds the x64 Setup package;
3. the release job creates `SHA256SUMS.txt`;
4. GitHub Release is created with bilingual release notes and all assets.

Pre-release checklist:

```bash
git status --short
go test ./...
git tag v0.6.2
git push origin main --tags
```

The tag must match `VERSION`, or the workflow fails. After publication, smoke-test installation, launch, reminders, and uninstall on both Intel/M-series Macs and Windows 10/11.

## 6. User data and upgrades

Upgrades and uninstallers preserve the user configuration file:

- macOS: `~/Library/Application Support/WorkdayIsland/data.json`
- Windows: `%AppData%\WorkdayIsland\data.json`

When model fields change, provide defaults or migration logic for existing JSON. Never silently discard todos or settings.

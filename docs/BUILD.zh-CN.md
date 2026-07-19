# 工位岛构建与发布指南

[中文](BUILD.zh-CN.md) · [English](BUILD.md)

本文面向本地开发者和项目维护者。普通用户应直接从 [Releases](https://github.com/asbacklight-justin/workday-island/releases) 下载安装包。

## 1. 前置条件

通用要求：

- Go 1.23 或更高版本；
- Git；
- 可下载 Go Modules 的网络环境；
- 仓库根目录 `VERSION`、`app.go` 的 `appVersion` 与 `wails.json` 的 `productVersion` 保持一致。

macOS 构建需要：

- macOS 12 或更高版本；
- Xcode Command Line Tools（提供 `clang`、`lipo`、`codesign`、`hdiutil`）；
- 能够为 `arm64` 和 `x86_64` 编译 CGO。

Windows 构建需要：

- Windows 10/11 x64；
- Inno Setup 6；
- PowerShell；
- `rsrc v0.10.2`，脚本会通过 `go install` 自动安装。

## 2. 运行测试

```bash
go mod download
gofmt -w .
go test ./...
```

建议在提交前至少验证：完整模式、精简模式缩放、中文/英文切换、待办提醒置前、专注结束提醒、月薪为空时隐藏收入卡片。

## 3. macOS Universal DMG

```bash
chmod +x scripts/build-macos.sh scripts/package-macos.sh
./scripts/package-macos.sh
```

流程会分别为 `amd64/x86_64` 和 `arm64` 编译，再通过 `lipo` 合并为 Universal Binary，生成 App Bundle、ICNS 图标、临时签名和 DMG。产物：

```text
build/bin/Workday-Island-v0.5.0-macOS-universal.dmg
```

验证架构和签名：

```bash
lipo -info "build/bin/Workday Island.app/Contents/MacOS/Workday Island"
codesign --verify --deep --strict --verbose=2 "build/bin/Workday Island.app"
spctl --assess --type execute --verbose "build/bin/Workday Island.app"
```

当前脚本使用 ad-hoc 签名，适合开源测试分发。面向大规模用户发布时，应使用 Apple Developer ID Application 证书签名，并执行 `notarytool submit` 和 `stapler staple`。

## 4. Windows x64 Setup

在 PowerShell 中执行：

```powershell
Set-ExecutionPolicy -Scope Process Bypass
./scripts/build-windows-installer.ps1
```

脚本会：

1. 从 `build/appicon.png` 生成多尺寸 ICO；
2. 将图标和应用清单嵌入 EXE；
3. 生成 Windows GUI 可执行文件；
4. 使用 Inno Setup 制作带中英文向导、开始菜单入口、可选桌面快捷方式和卸载程序的安装包。

产物：

```text
build/bin/Workday-Island-v0.5.0-windows-x64-Setup.exe
```

正式分发建议在生成 Setup 后使用组织的 Authenticode 证书签名应用 EXE 和安装包，并通过 `Get-AuthenticodeSignature` 验证。

## 5. 自动发布

`.github/workflows/release.yml` 在推送 `v*.*.*` 标签时运行：

1. macOS Runner 生成通用 DMG；
2. Windows Runner 生成 x64 Setup；
3. 汇总安装包并生成 `SHA256SUMS.txt`；
4. 创建 GitHub Release 并附加双语发布说明。

发布前检查：

```bash
git status --short
go test ./...
git tag v0.5.0
git push origin main --tags
```

标签版本必须与 `VERSION` 一致，否则工作流会主动失败。发布完成后，在 Intel/M 系列 Mac 和 Windows 10/11 至少各做一次安装、启动、提醒和卸载冒烟测试。

## 6. 数据与升级

安装包不会在升级或卸载时删除用户配置：

- macOS：`~/Library/Application Support/WorkdayIsland/data.json`
- Windows：`%AppData%\WorkdayIsland\data.json`

修改模型字段时应为旧 JSON 提供默认值或迁移逻辑，不要无提示丢弃用户的待办和设置。

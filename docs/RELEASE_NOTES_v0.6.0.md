# 工位岛 v0.6.0 · Workday Island v0.6.0

## 中文

本版本重点优化 Windows 与精简模式体验：新增浅色主题，完整/精简窗口均不再显示系统标题栏；精简模式可从任意非控件区域拖动、记住调整后的尺寸，并可选择展示未完成待办。设置页新增主题、货币符号和精简待办开关。

天气在短暂断网、服务限流或系统从睡眠恢复时会自动重试；仍无法联网时展示最近一次成功缓存并标注“离线缓存”。Windows 提醒不再弹出空白命令行窗口。应用与安装包图标也已移除白色外底。

“关于”页新增在线检查更新。应用每天最多查询一次 GitHub Releases；发现新版时展示版本与更新说明，并可一键打开当前平台的安装包。此阶段不会静默安装，最终安装仍由用户确认。

当 GitHub 未认证 API 的共享网络额度耗尽时，应用会自动改用公开 Release 页面识别最新版，避免直接显示 HTTP 403。

- **macOS 12+**：`Workday-Island-v0.6.0-macOS-universal.dmg`，同时支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.6.0-windows-x64-Setup.exe`。

安装包尚未使用商业代码签名证书，首次运行时操作系统可能显示安全提示。请确认文件来自本仓库的 GitHub Release，并使用随附的 `SHA256SUMS.txt` 校验。

## English

This release focuses on Windows and compact-mode polish. It adds a light theme and removes the native title bar in both full and compact modes. Compact windows drag from any non-control surface, remember their resized dimensions, and can optionally show pending todos. Preferences now include theme, currency-symbol, and compact-todo controls.

Weather requests retry transient outages and rate limits, then show the last successful local result as an offline cache when necessary. Windows reminders no longer open a blank console window. The application and installer icons now use a transparent outer canvas.

About now includes online update checks. The app queries GitHub Releases at most once per day, shows version details and release notes when an update is available, and opens the current platform's package in one click. This stage never installs silently; the user still confirms installation.

If the shared network's unauthenticated GitHub API quota is exhausted, the app automatically falls back to the public Releases page instead of failing with HTTP 403.

- **macOS 12+**: `Workday-Island-v0.6.0-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.6.0-windows-x64-Setup.exe`.

The packages are not yet signed with commercial code-signing certificates, so the operating system may show a first-launch security prompt. Verify that the download came from this repository's GitHub Release and check it against `SHA256SUMS.txt`.

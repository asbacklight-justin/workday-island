# 工位岛 v0.8.1 · Workday Island v0.8.1

## 中文

本次补丁版本修复“今日英语学习”窗口透明度未真正作用于背景的问题，并统一了 macOS 与 Windows 的透明窗口行为。

- 精简模式透明度现在只作用于英语学习窗口的深色或浅色背景。
- 单词、音标、释义、选项、成绩和操作按钮保持完全清晰，不再跟随窗口整体变淡。
- 修复浅色主题给最外层页面设置实色背景、导致窗口看起来不透明的问题。
- 调整 macOS 原生窗口和 WebView 背景，使桌面内容能够真正透过学习窗口显示。
- Windows 使用透明 WebView 和无背景材质模式，避免系统背景效果覆盖应用透明度。
- 调整透明度时即时更新英语窗口的背景层。
- 新增窗口透明度模式测试，并完成 macOS 高对比背景实机验证。

### 安装包

- **macOS 12+**：`Workday-Island-v0.8.1-macOS-universal.dmg`，支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.8.1-windows-x64-Setup.exe`。
- 使用 `SHA256SUMS.txt` 校验下载文件。

> 当前公开安装包使用临时或未认证签名，首次启动时操作系统可能显示安全提示。请只从本项目 GitHub Release 下载。

## English

This patch fixes the Today English Learning window opacity so that transparency is applied to the background instead of dimming the complete interface, with consistent behaviour on macOS and Windows.

- Compact-mode opacity now affects only the dark or light learning-window background.
- Words, phonetics, meanings, choices, scores, and controls remain fully opaque and readable.
- Fixed a light-theme root background that made the learning window appear opaque.
- Updated the native macOS window and WebView background so desktop content can genuinely show through.
- Windows now uses a transparent WebView without a system backdrop material overriding app opacity.
- Opacity previews update the English background layer immediately.
- Added native-opacity mode tests and verified the macOS result against a high-contrast desktop background.

### Packages

- **macOS 12+**: `Workday-Island-v0.8.1-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.8.1-windows-x64-Setup.exe`.
- Verify downloads with `SHA256SUMS.txt`.

> Public packages currently use ad-hoc or untrusted signing, so the operating system may show a security prompt on first launch. Download only from this project's GitHub Release.

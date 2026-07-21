# 工位岛 v0.6.1 · Workday Island v0.6.1

## 中文

本次版本为精简模式增加真正的系统级窗口透明度，并优化透明度调整体验。

- 新增 30%–100% 精简模式透明度设置，支持 5% 步进。
- macOS 使用原生 `NSWindow` 透明度，Windows 使用分层窗口透明度，桌面内容可以真实透出窗口。
- 拖动设置滑块时立即预览透明效果；保存后在每次进入精简模式时自动恢复。
- 取消设置、点击遮罩或按 Esc 时会还原当前模式的正确透明度，避免预览状态残留。
- 待办或专注提醒触发时临时恢复为完全不透明，停止提醒后自动恢复用户设置。
- 旧版配置会安全迁移，未保存过透明度时默认使用 100%，不会突然变透明。

### 安装包

- **macOS 12+**：`Workday-Island-v0.6.1-macOS-universal.dmg`，支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.6.1-windows-x64-Setup.exe`。
- 使用 `SHA256SUMS.txt` 校验下载文件。

## English

This release adds real operating-system-level opacity to Compact mode and improves the adjustment experience.

- Added a 30%–100% Compact mode opacity setting in 5% steps.
- Uses native `NSWindow` opacity on macOS and layered-window opacity on Windows, allowing the desktop to show through the window.
- Dragging the slider previews opacity immediately; the saved value is restored whenever Compact mode opens.
- Cancelling Preferences, clicking the backdrop, or pressing Esc restores the correct opacity for the current mode.
- Todo and focus alerts temporarily return to full opacity, then restore the saved setting after acknowledgement.
- Existing settings migrate safely: installations without an opacity value default to 100% and never become unexpectedly transparent.

### Packages

- **macOS 12+**: `Workday-Island-v0.6.1-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.6.1-windows-x64-Setup.exe`.
- Verify downloads with `SHA256SUMS.txt`.

# 工位岛 v0.6.2 · Workday Island v0.6.2

## 中文

本次版本重点改善工作日设置、后台常驻提醒和天气准确性。

- 修复浅色主题下工作日已选状态看起来没有回显的问题，并增强旧配置兼容性。
- 点击窗口叉号改为隐藏到系统托盘，不再直接结束应用。
- 隐藏到托盘后，待办提醒和专注结束提醒仍会继续运行并自动恢复窗口。
- macOS 与 Windows 均支持左键托盘图标恢复窗口、右键菜单彻底退出。
- macOS 菜单栏空间不足导致托盘图标被系统遮挡时保留 Dock 入口，点击 Dock 图标即可恢复隐藏窗口。
- 天气城市查询改为对多个候选结果进行排序，优先选择同名的主要城市。
- 保存天气设置后立即绕过短期缓存重新请求。
- 离线天气缓存最多展示三小时，并明确显示缓存时间，避免长期沿用过期状态。
- 对“雷暴代码但没有降水且云量很低”的异常组合进行校正，减少明显错误的雷暴展示。

### 安装包

- **macOS 12+**：`Workday-Island-v0.6.2-macOS-universal.dmg`，支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.6.2-windows-x64-Setup.exe`。
- 使用 `SHA256SUMS.txt` 校验下载文件。

## English

This release improves workday preferences, background reminder continuity, and weather accuracy.

- Fixed selected workdays looking unselected in the light theme and improved compatibility with older settings.
- The window close button now hides Workday Island to the system tray instead of terminating it.
- Todo and focus-completion reminders continue running while hidden and restore the window when triggered.
- macOS and Windows support left-click to restore and a right-click tray menu for an explicit Quit action.
- macOS keeps a Dock fallback when a crowded menu bar obscures the tray item; clicking the Dock icon restores the hidden window.
- Weather geocoding now ranks multiple candidates and prefers the primary city for duplicate names.
- Saving weather settings immediately bypasses the short-lived cache and requests fresh data.
- Offline weather is shown for no more than three hours and includes its cache time, avoiding indefinitely stale conditions.
- Internally inconsistent thunderstorm readings with no precipitation and very low cloud cover are corrected to reduce obvious false alarms.

### Packages

- **macOS 12+**: `Workday-Island-v0.6.2-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.6.2-windows-x64-Setup.exe`.
- Verify downloads with `SHA256SUMS.txt`.

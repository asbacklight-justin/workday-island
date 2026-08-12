# 工位岛 v0.16.8 / Workday Island v0.16.8

本版本聚焦三个已修复的桌面体验问题：Windows 系统托盘提示、小宠动画稳定性，以及 AI 对话的深色主题一致性。

This release focuses on three desktop experience fixes: Windows tray tooltips, pet animation stability, and AI Chat consistency in dark themes.

## 中文

### Windows 系统托盘

- 修复托盘图标鼠标悬浮时说明文字为空的问题。
- 保留原有左键恢复窗口、右键菜单和后台提醒行为。

### 摸鱼小宠

- 修复小宠动作循环中会按固定间隔短暂消失的问题。
- 动画只使用精灵图中有效的连续帧，动作保持自然且稳定。

### AI 深色主题

- 修复普通深色、极光、Plus、Pro、Ultra 深色主题下 AI 页面局部仍为白色的问题。
- 侧栏、会话顶部、欢迎建议卡片、输入区、设置抽屉及相关交互面板均会随当前深色主题使用协调的深色表面和文字对比度。

## English

### Windows system tray

- Fixed the missing hover text for the Windows tray icon.
- Preserved the existing left-click restore, right-click menu, and background-reminder behaviour.

### Fishing Island pets

- Fixed pets briefly disappearing at a fixed interval during animation loops.
- Animation now uses only contiguous valid sprite frames for stable, natural movement.

### AI dark themes

- Fixed white AI Chat surfaces under standard dark, Aurora, Plus, Pro, and Ultra dark themes.
- The sidebar, conversation header, welcome suggestion cards, composer, settings drawer, and related controls now use cohesive dark surfaces with appropriate contrast.

## 下载 / Downloads

- macOS 12+ (Apple Silicon and Intel): `Workday-Island-v0.16.8-macOS-universal.dmg`
- Windows 10/11 x64: `Workday-Island-v0.16.8-windows-x64-Setup.exe`
- File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

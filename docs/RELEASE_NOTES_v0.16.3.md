# 工位岛 v0.16.3 / Workday Island v0.16.3

本版本扩展了实时聊天与摸鱼玩法，并优化完整窗口的可用空间。

This release expands Realtime Chat and the casual-play experience, while giving the regular window more usable room.

## 中文

### 聊天动效表情

- 新增表情面板，内置 60 个原生、轻量的动效 Emoji，点击即可发送。
- 独立发送或接收的 Emoji 会用大号动态气泡呈现，让聊天反馈更直观。
- 表情沿用现有文本消息通道，不需要额外服务端改造。

### 摸鱼岛

- 摸鱼入口和页面统一更名为「摸鱼岛」，包含「钓鱼小岛」和「摸鱼小岛」两个玩法页。
- 钓鱼小岛新增 10 把鱼竿：普通、优秀、精良、史诗、传说各两把；默认装备普通竹竿，不同鱼竿会提升特定钓鱼属性。
- 钓鱼时有低概率获得更高品质鱼竿，已钓到的鱼可在摸鱼小岛中作为不消耗的陪伴鱼，参与安全区时机小游戏。

### 窗口优化

- 完整模式默认窗口调整为 1100 × 700，顶部工具栏和窗口控制按钮更稳定，不易被挤压或截断。

## English

### Animated chat emoji

- A new picker ships with 60 lightweight native animated emoji. Select one to send it immediately.
- A standalone emoji is presented as a larger animated bubble, making the interaction easier to notice.
- Emoji use the existing text-message channel, so no additional server-side protocol is required.

### Slack Island

- The casual-play entry and screen are now called **Slack Island**, with separate **Fishing Island** and **Slack Island** tabs.
- Fishing Island adds ten rods: two each at Normal, Excellent, Fine, Epic, and Legendary quality. A normal bamboo rod is equipped by default, and every rod improves a distinct fishing attribute.
- Higher-quality rods can drop at low rates while fishing. Caught fish can accompany the safe-zone timing mini-game on the Slack Island tab without being consumed.

### Window improvements

- The regular window now defaults to 1100 × 700, leaving reliable room for the header toolbar and window controls.

## 下载 / Downloads

- macOS 12+ (Apple Silicon and Intel): `Workday-Island-v0.16.3-macOS-universal.dmg`
- Windows 10/11 x64: `Workday-Island-v0.16.3-windows-x64-Setup.exe`
- File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

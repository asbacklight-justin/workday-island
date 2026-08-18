# 工位岛 v0.16.10 / Workday Island v0.16.10

本版本优化了教材原文词汇展示、实时聊天时间信息和未登录状态下的聊天隐私。

This release improves textbook vocabulary presentation, realtime-chat timestamps, and signed-out chat privacy.

## 中文

### 教材原文

- 本课词汇卡片现在始终单行展示；超长单词、音标和释义会优雅截断，鼠标悬浮即可查看完整内容。

### 实时聊天

- 两条相邻消息显示出的时间完全一致时，自动隐藏后一条的重复时间，让聊天记录更紧凑。
- 发送状态仍会在需要时保留显示，不会因隐藏时间而丢失投递信息。

### 登录隐私

- 未登录账号时，不再显示本机可能保留的好友、好友申请、聊天历史或未读数量。
- 聊天页面改为统一的登录提示；登录后会正常恢复在线好友和会话数据。

## English

### Textbook reading

- Lesson-vocabulary chips remain single-line. Long words, phonetics, and meanings truncate cleanly; hover to view the complete value.

### Realtime Chat

- When adjacent messages render with exactly the same timestamp, the lower duplicate time is hidden for a cleaner history.
- Delivery state remains visible where applicable, even when the duplicate time is suppressed.

### Signed-out privacy

- Cached friends, friend requests, chat history, and unread counts are no longer shown while signed out.
- The chat view now uses a clear sign-in prompt and restores normal online data after sign-in.

## 下载 / Downloads

- macOS 12+ (Apple Silicon and Intel): `Workday-Island-v0.16.10-macOS-universal.dmg`
- Windows 10/11 x64: `Workday-Island-v0.16.10-windows-x64-Setup.exe`
- File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

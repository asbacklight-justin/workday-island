# 工位岛 v0.7.0 · Workday Island v0.7.0

## 中文

本次版本新增实时聊天与跨设备窗口互动，并保持无需用户名密码的一键上线体验。

- 点击顶部聊天按钮进入独立实时页面，首次上线自动创建匿名设备身份。
- 通过用户 ID 发送文字消息，展示在线送达或离线待送达状态。
- 对方离线时，消息、抖动和闪烁互动会在其下次上线后补发。
- 支持抖动窗口和多颜色闪烁窗口，并可附带最多 120 个字符的提示语。
- 收到互动后自动恢复并置前工位岛，显示发送者和提示语；点击即可停止。
- 新消息会立即定位到最近发信人的会话，修复红点出现但消息页面没有同步展示的问题。
- WebSocket 短暂断开后自动重连；成功上线后重置退避，后续断线重新从 1 秒开始恢复。
- 设备身份使用 Ed25519 签名；macOS 私钥存入钥匙串，Windows 私钥使用当前用户 DPAPI 加密。
- 聊天为可选联网功能，待办、薪资、工作时间和专注记录不会发送到实时服务。

### 安装包

- **macOS 12+**：`Workday-Island-v0.7.0-macOS-universal.dmg`，支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.7.0-windows-x64-Setup.exe`。
- 使用 `SHA256SUMS.txt` 校验下载文件。

> 当前公开安装包使用临时或未认证签名，首次启动时操作系统可能显示安全提示。请只从本项目 GitHub Release 下载。

## English

This release adds realtime chat and cross-device window interactions while keeping a one-click flow with no username or password.

- Open a dedicated realtime page from the chat button; the first connection creates an anonymous device identity automatically.
- Send text by user ID and see whether it was delivered online or queued for an offline peer.
- Messages, shakes, and flashes sent to an offline peer are delivered on their next connection.
- Shake or multicolour-flash the peer's window with an optional prompt of up to 120 characters.
- Incoming interactions restore and raise Workday Island, show the sender and prompt, and stop immediately when clicked.
- New messages select the latest sender immediately, fixing unread badges whose conversation content appeared delayed.
- WebSocket connections recover automatically; successful connections reset backoff so later disconnects retry from one second.
- Device authentication uses Ed25519 signatures, with private keys stored in macOS Keychain or encrypted by Windows DPAPI.
- Chat is optional. Todos, salary, work schedules, and focus records are never sent to the realtime service.

### Packages

- **macOS 12+**: `Workday-Island-v0.7.0-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.7.0-windows-x64-Setup.exe`.
- Verify downloads with `SHA256SUMS.txt`.

> Public packages currently use ad-hoc or untrusted signing, so the operating system may show a security prompt on first launch. Download only from this project's GitHub Release.

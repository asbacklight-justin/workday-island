# 工位岛 v0.9.0 · Workday Island v0.9.0

## 中文

`v0.9.0` 是一次功能版本升级，核心是把实时互动升级为“好友优先”的聊天体验，并新增适合工作间隙快速查看的股市悬浮窗。

### 好友聊天

- 支持用户名密码登录，并保留无需账号的一键匿名设备登录。
- 新增账号注册入口，支持用户名、昵称、密码以及可选邮箱、手机号和邀请码；密码只保留在当前在线会话内存中。
- 新增好友申请、同意/拒绝、好友列表、在线状态与删除好友。
- 聊天页改为左侧好友列表、右侧当前会话，点击好友即可直接聊天。
- 抖一抖、闪一闪和可选提示语整合到当前会话，不再需要反复输入用户 ID。
- 登录成功和断线重连后自动同步好友状态，好友与申请推送使用幂等合并。

![好友优先实时聊天](https://raw.githubusercontent.com/asbacklight-justin/workday-island/v0.9.0/docs/screenshots/zh-chat.png)

### 股市悬浮窗

- 新增独立的小尺寸股市窗口，默认展示上证指数、深证成指和创业板指。
- 支持添加最多 12 个 A 股自选代码，并可随时移除。
- 行情每 5 秒自动刷新；断网时保留最近一次数据并标记状态。
- 复用悬浮窗透明度设置，便于低干扰地放在桌面角落。
- 关闭股市窗口后，完整工作台自动恢复到屏幕中央。
- 顶部入口使用更明显的上涨行情箭头图标。

![股市悬浮窗](https://raw.githubusercontent.com/asbacklight-justin/workday-island/v0.9.0/docs/screenshots/zh-stocks.png)

### 安装包

- **macOS 12+**：`Workday-Island-v0.9.0-macOS-universal.dmg`，支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.9.0-windows-x64-Setup.exe`。
- 使用 `SHA256SUMS.txt` 校验下载文件。

> 当前公开安装包使用临时或未认证签名，首次启动时操作系统可能显示安全提示。请只从本项目 GitHub Release 下载。

## English

`v0.9.0` is a feature release centred on friend-first realtime chat and a compact floating stock ticker for quick, low-distraction market checks.

### Friend-first chat

- Added username/password sign-in while retaining one-click anonymous-device login.
- Added account registration with username, nickname, password, and optional email, phone, and invite code. Passwords remain only in memory for the current online session.
- Added friend requests, accept/reject actions, contacts, online presence, and friend removal.
- Reworked chat into a friend list on the left and the active conversation on the right; selecting a friend opens the conversation immediately.
- Integrated shake, flash, and optional prompt text into the active conversation.
- Friend state refreshes after authentication and reconnects, with idempotent merging for friend and request pushes.

![Friend-first realtime chat](https://raw.githubusercontent.com/asbacklight-justin/workday-island/v0.9.0/docs/screenshots/en-chat.png)

### Floating stock ticker

- Added a compact standalone market window with the SSE Composite, Shenzhen Component, and ChiNext indices by default.
- Supports up to 12 additional watched A-share codes with one-click removal.
- Refreshes every five seconds and retains the latest quotes with an offline-state marker.
- Reuses the floating-window opacity preference for an unobtrusive desktop placement.
- Recentres the full dashboard automatically when the ticker is closed.
- Uses a clearer rising-market arrow for the dashboard entry.

![Floating stock ticker](https://raw.githubusercontent.com/asbacklight-justin/workday-island/v0.9.0/docs/screenshots/en-stocks.png)

### Packages

- **macOS 12+**: `Workday-Island-v0.9.0-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.9.0-windows-x64-Setup.exe`.
- Verify downloads with `SHA256SUMS.txt`.

> Public packages currently use ad-hoc or untrusted signing, so the operating system may show a security prompt on first launch. Download only from this project's GitHub Release.

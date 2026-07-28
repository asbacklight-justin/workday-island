# 工位岛 v0.10.0 · Workday Island v0.10.0

## 中文

`v0.10.0` 把账号、聊天与工作云盘整合成一致的在线体验，同时扩展英语学习并修复 Windows 小窗显示问题。倒计时、待办、提醒、薪资和专注等核心功能仍可完全离线使用。

### 统一账号与工作云盘

- 新增独立账号中心，账号密码登录和注册不再挤在聊天页面中。
- 登录后工作台展示昵称；聊天、好友和工作云盘共享同一会话。
- 退出账号会同时断开实时聊天并清除云盘访问令牌。
- 注册支持用户名、昵称、密码，以及可选邮箱、手机号和邀请码。
- 新增工作云盘：可浏览、搜索和新建目录，并对文件执行上传、下载、重命名、移动与删除。
- 实时展示已用空间、剩余空间、单文件限制和每日上传限制。

### 聊天互动

- 抖一抖与闪一闪现在会作为系统互动消息保留在聊天记录中。
- 收到互动时优先展示发送者昵称，昵称不可用时才显示用户 ID。
- 保留好友优先的左侧联系人、右侧会话布局，以及离线消息补发和自动重连。

### 英语学习

- 将首个模式更名为“单词学习”。
- 新增“例句学习”，展示当前单词对应的英文例句和在线中文翻译。
- 保留英译中、中译英与完整单词拼写练习，以及答案反馈和上一词复习。
- 修复 Windows 上音标、释义和底部边缘可能显示不全的问题。

### 安装包

- **macOS 12+**：`Workday-Island-v0.10.0-macOS-universal.dmg`，同时支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.10.0-windows-x64-Setup.exe`。
- 使用 `SHA256SUMS.txt` 校验下载文件。

> 当前公开安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请只从本项目 GitHub Release 下载。

## English

`v0.10.0` unifies accounts, chat, and Work Cloud into one consistent online experience, expands English practice, and fixes Windows widget clipping. Core features such as countdowns, todos, reminders, earnings, and focus sessions continue to work fully offline.

### Unified account and Work Cloud

- Added a standalone account centre so password sign-in and registration no longer crowd the chat page.
- The dashboard shows the signed-in nickname, while chat, friends, and Work Cloud share one session.
- Signing out disconnects realtime chat and clears the Work Cloud access token together.
- Registration supports username, nickname, password, and optional email, phone, and invite code.
- Added Work Cloud for browsing, searching, and creating folders, plus uploading, downloading, renaming, moving, and deleting files.
- Displays used and remaining storage, per-file limits, and daily upload limits.

### Chat interactions

- Shake and flash actions are now retained in conversation history as interaction messages.
- Incoming interactions prefer the sender nickname and fall back to the user ID only when no nickname is available.
- Keeps the friend-first contact-and-conversation layout, offline delivery, and automatic reconnects.

### English learning

- Renamed the first mode to **Word Study**.
- Added **Example Sentences**, showing an English usage example and its online Chinese translation.
- Retains EN → CN, CN → EN, and full-word spelling, with answer feedback and previous-word review.
- Fixed phonetics, meanings, and the lower edge being clipped in the Windows widget.

### Packages

- **macOS 12+**: `Workday-Island-v0.10.0-macOS-universal.dmg`, supporting both Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.10.0-windows-x64-Setup.exe`.
- Verify downloads with `SHA256SUMS.txt`.

> Public packages are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this project's GitHub Release.

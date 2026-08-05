# 工位岛 v0.16.0 / Workday Island v0.16.0

本版本新增系统通知、意见反馈与三款会员亮色主题，并重点提升云笔记、会员主题切换等交互的可靠性。

This release adds system notifications, feedback, and three bright member themes, with reliability improvements for Cloud Notes, membership-aware theme switching, and other interactions.

## 中文

### 系统通知

- 接入 Backlight 站内信，顶部通知入口实时展示未读数量。
- 通知中心支持通知类型、已读状态筛选与分页浏览。
- 支持单条已读、全部已读、删除通知，以及跳转到关联业务页面。
- 未登录时提供清晰的账号登录引导；登录后定时刷新未读状态。

### 意见反馈

- “关于”页面新增意见反馈入口，无需登录即可提交。
- 支持问题、功能建议、体验反馈和其他意见等类型。
- 自动携带客户端来源、应用版本和系统平台，便于定位问题。
- 补充双语表单、输入长度校验、提交状态、反馈编号、限流及服务端错误提示。
- 不会自动附加待办、薪资、笔记等本地隐私数据。

### 三款会员亮色主题

- Plus：**樱金晨曦 / Sakura Dawn**，使用温暖樱粉与浅金光泽。
- Pro：**冰川晴空 / Glacier Sky**，使用冰蓝、紫晶和清透玻璃质感。
- Ultra：**星钻白曜 / Stellar White Diamond**，使用白钻、冷金和星芒光效。
- 权限遵循会员等级：Plus 解锁 Plus 主题，Pro 解锁 Plus/Pro，Ultra 解锁全部会员主题。
- 三套主题覆盖工作台、账号中心、弹窗、云笔记、AI、聊天、翻译、云盘、英语学习和股市等主要界面。

### 交互优化

- 会员登录或账号等级升级后，如果当前使用普通主题，会自动匹配相同明暗风格的专属会员主题；用户主动选择的会员主题不会被覆盖。
- 修复云笔记编辑中切换页面再返回时，列表摘要覆盖完整正文并导致内容减少的问题。
- 返回云笔记时保留选中笔记、编辑器内容和页面状态；离开页面会立即生成保存快照。
- 保存请求进行期间产生的新编辑会排队再次保存，降低快速切页或连续输入造成内容丢失的风险。
- 优化通知入口、登录状态与主题状态的即时同步反馈。

## English

### System notifications

- Integrated Backlight in-app notifications with a live unread badge in the header.
- Notification Center supports type/read-state filters and pagination.
- Mark individual or all notifications as read, delete notifications, and open related application pages.
- Signed-out users receive a clear Account Centre prompt; unread state refreshes periodically after sign-in.

### Feedback

- Added a Feedback entry to About that works without signing in.
- Supports bug reports, feature requests, experience feedback, and other comments.
- Automatically includes client source, app version, and operating-system platform for diagnostics.
- Includes bilingual forms, length validation, pending state, feedback reference, rate-limit handling, and service-error messages.
- Local private data such as todos, salary, and notes is never attached automatically.

### Three bright member themes

- Plus: **Sakura Dawn**, with warm sakura pink and pale-gold highlights.
- Pro: **Glacier Sky**, with icy blue, amethyst accents, and translucent glass styling.
- Ultra: **Stellar White Diamond**, with white-diamond, cool-gold, and starlight effects.
- Access follows the membership hierarchy: Plus unlocks Plus themes, Pro unlocks Plus and Pro themes, and Ultra unlocks every member theme.
- All three themes cover the dashboard, Account Centre, dialogs, Cloud Notes, AI, chat, translation, Work Cloud, English learning, stocks, and other primary views.

### Interaction improvements

- When a member signs in or an account is upgraded, a regular theme automatically switches to the tier-matched theme with the same light/dark character. A member theme explicitly selected by the user is preserved.
- Fixed Cloud Notes losing edited content after navigating away and back when a list excerpt replaced the complete note body.
- Returning to Cloud Notes now preserves the selected note, editor content, and page state; leaving creates an immediate save snapshot.
- Edits made while a save is in flight are queued for another save, reducing content-loss risk during rapid navigation or continuous typing.
- Improved immediate synchronisation feedback for notifications, sign-in state, and theme state.

## 下载 / Downloads

- macOS 12+（Apple Silicon 与 Intel）：`Workday-Island-v0.16.0-macOS-universal.dmg`
- Windows 10/11 x64：`Workday-Island-v0.16.0-windows-x64-Setup.exe`
- 文件完整性校验 / File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

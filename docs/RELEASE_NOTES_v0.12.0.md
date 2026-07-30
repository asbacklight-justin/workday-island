# 工位岛 v0.12.0 · Workday Island v0.12.0

## 中文

`v0.12.0` 将工位岛从本地桌面助手扩展为统一账号下的轻量工作空间，新增桌面 AI 对话、云笔记和链接分享，同时保留倒计时、待办、提醒、专注、天气、英语学习等本地优先能力。

### 桌面 AI 对话

- 登录统一账号后，可在应用内直接创建、搜索、置顶、归档、重命名和删除 AI 会话。
- 支持服务端授权模型、思考模式、个性化系统提示、Markdown 回答、代码块复制、流式输出与停止生成。
- 展示当前账号的会话、消息与令牌用量；登录失效时引导返回统一账号入口。
- 新增系统托盘 AI 快捷入口，可从后台状态直接恢复到 AI 页面。

### 云笔记

- 新增文件夹与笔记树、搜索、收藏、置顶、移动、回收站、恢复和彻底删除。
- 支持富文本编辑、自动保存、字数统计、历史版本恢复、阅读密码、AI 整理、全能翻译以及 Word/文本导出。
- 云端是正文与修订号的唯一数据源；切换账号或重新打开笔记时重新读取详情，避免本地内容串号。
- 文件夹内置顶笔记始终排在普通笔记之前。
- 修复 macOS/Windows 桌面 WebView 中系统原生输入或确认框可能不可见的问题：新建文件夹、重命名、插入链接、设置阅读密码、笔记信息、删除和版本恢复均改为应用内弹窗。
- 阅读密码状态独立保存；设置、解锁和取消密码后界面会立即同步。

### 链接分享

- 可从云笔记创建快照或实时分享，并配置标题、说明、访问密码、有效期、复制权限和评论权限。
- 新增独立分享管理页面，支持搜索、生命周期筛选、查看、复制、修改、撤销、重新生成和删除链接。
- 展示每日/总分享额度、有效分享数和访问次数。
- 分享管理要求登录统一账号；退出账号时 AI、聊天、云盘、云笔记、分享和翻译会一起退出。

### 安装包

- **macOS 12+**：`Workday-Island-v0.12.0-macOS-universal.dmg`，同时支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.12.0-windows-x64-Setup.exe`。
- `SHA256SUMS.txt` 可用于校验下载文件。

安装包仍未使用商业代码签名证书。请只从本项目 GitHub Release 下载；macOS 首次启动可在 Finder 中右键选择“打开”，Windows 可能显示 SmartScreen 提示。

---

## English

`v0.12.0` expands Workday Island from a local desktop companion into a lightweight signed-in workspace with desktop AI Chat, Cloud Notes, and Link Sharing, while keeping countdowns, todos, reminders, focus sessions, weather, and English practice local-first.

### Desktop AI Chat

- Create, search, pin, archive, rename, and delete AI conversations directly in the desktop app after signing in.
- Supports server-authorised models, thinking mode, a personal system prompt, Markdown rendering, code-block copying, streamed responses, and stop generation.
- Shows account conversation, message, and token usage, with a clear route back to unified sign-in when the session expires.
- Adds an AI shortcut to the system tray so the app can reopen directly into the AI workspace.

### Cloud Notes

- Adds a folder/note tree, search, favourites, pinning, move, recycle bin, restore, and permanent deletion.
- Includes rich-text editing, autosave, word count, version rollback, reading passwords, AI organisation, Universal Translator hand-off, and Word/text export.
- The cloud service remains the source of truth for note bodies and revisions; switching accounts or reopening a note always reloads its detail.
- Pinned notes now always sort before ordinary notes within the same folder.
- Replaces unreliable native WebView prompts with in-app dialogs for folder creation, rename, links, reading passwords, note information, deletion, and version restoration on macOS and Windows.
- Preserves reading-password metadata independently and updates the interface immediately after set, unlock, or removal.

### Link Sharing

- Publish a Cloud Note as a snapshot or live share with title, description, optional access password, validity period, copy policy, and comment policy.
- Adds a dedicated share manager with search, lifecycle filters, open, copy, edit, revoke, regenerate, and delete actions.
- Displays daily/total share quota, active-share counts, and views.
- Share management requires the unified account. Signing out disconnects AI, chat, Work Cloud, Cloud Notes, Link Sharing, and translation together.

### Packages

- **macOS 12+**: `Workday-Island-v0.12.0-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.12.0-windows-x64-Setup.exe`.
- Use `SHA256SUMS.txt` to verify downloads.

The packages are not yet signed with commercial distribution certificates. Download only from this project's GitHub Release. On macOS, right-click and choose **Open** on first launch; Windows may display a SmartScreen prompt.

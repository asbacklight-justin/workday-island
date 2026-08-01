# 工位岛 v0.13.0 · Workday Island v0.13.0

## 中文

`v0.13.0` 重点完善桌面端体验：新增极光主题和全局全屏能力，统一 macOS/Windows 系统托盘行为，提升完整模式可读性，并让账号中心成为在线服务的快捷入口。

### 极光主题与界面可读性

- 设置新增第三套「极光」主题，以深蓝夜空、青绿色与紫色光晕、玻璃卡片为核心视觉，并同步采用原生深色窗口外观。
- 全面提升完整模式中的字号层级：聊天、AI 回答、笔记和翻译正文更适合长时间阅读，说明、表单、状态与时间信息也更加清晰。
- 精简英语学习与股市悬浮窗继续保持紧凑，不因全局字号优化而失去摸鱼小窗体验。
- 顶部全能翻译入口由容易换行的「文A」改为清晰的单字「译」图标。
- 修复云笔记弹窗按钮在部分 WebView 中因继承异常字号而显示成横线的问题。

### 全局全屏

- 新增全局全屏按钮，完整工作台以及聊天、AI、云盘、云笔记、分享、翻译等功能页面均可进入全屏。
- Windows 使用系统原生全屏；macOS 针对无边框 Wails 窗口使用专用全屏实现，并在退出时恢复原窗口尺寸与位置。
- 全屏按钮会同步切换为退出状态，并支持按 `Esc` 返回普通窗口。
- 进入精简英语、股市、最小化或隐藏到托盘前会安全退出全屏，避免窗口状态错乱。

### macOS 与 Windows 系统托盘统一

- Mac 菜单栏新增聊天、英语学习、AI 对话、工作云盘、翻译和股市快捷入口，菜单文字跟随应用语言。
- macOS 点击关闭后会像 Windows 一样隐藏 Dock/任务栏入口，但继续保持托盘、提醒和后台任务运行；从菜单栏图标可恢复窗口，选择退出才会彻底结束应用。
- Mac 菜单栏改用透明背景的单色 Template 图标，保留工位岛屏幕、浮岛与状态灯轮廓，并自动适配深浅菜单栏。
- 抽取跨平台共享的托盘文案和命令路由并补充回归测试，减少两端功能漂移。

### 账号中心快捷入口

- 六项在线服务调整为每行三项、共两行的 `2×3` 布局，服务名称保持单行显示。
- 实时聊天、工作云盘、云笔记、链接分享、全能翻译和 AI 对话卡片均可直接点击进入对应页面。

### 安装包

- **macOS 12+**：`Workday-Island-v0.13.0-macOS-universal.dmg`，同时支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.13.0-windows-x64-Setup.exe`。
- `SHA256SUMS.txt` 可用于校验下载文件。

安装包尚未使用商业代码签名证书。请只从本项目 GitHub Release 下载；macOS 首次启动可在 Finder 中右键选择“打开”，Windows 可能显示 SmartScreen 提示。

---

## English

`v0.13.0` focuses on the desktop experience with a new Aurora theme, app-wide full screen, aligned macOS/Windows tray behaviour, improved full-mode readability, and direct online-service shortcuts in Account Centre.

### Aurora theme and readability

- Adds a third Aurora theme built around a deep-blue night canvas, teal/violet glows, and glassy cards, with a matching native dark-window appearance.
- Improves typography throughout full mode: chat, AI answers, notes, and translations are more comfortable to read, while descriptions, forms, statuses, and timestamps use a clearer hierarchy.
- Compact English practice and the Stocks ticker remain intentionally dense despite the global readability pass.
- Replaces the wrapping `文A` Translator entry with a clear single-character `译` icon.
- Fixes Cloud Notes dialog labels collapsing into a tiny dash when a WebView inherits an invalid font size.

### App-wide full screen

- Adds a global full-screen control for the dashboard and full-page modules including Chat, AI, Work Cloud, Cloud Notes, Sharing, and Translator.
- Windows uses native full screen. macOS uses a dedicated implementation for the frameless Wails window and restores the previous size and position on exit.
- The control changes to an exit-full-screen state and `Esc` returns to the normal window.
- Full screen exits safely before compact English, Stocks, minimize, or hide-to-tray transitions to prevent inconsistent window state.

### Aligned macOS and Windows trays

- Adds Chat, English Learning, AI Chat, Work Cloud, Translator, and Stocks shortcuts to the Mac menu bar, with labels following the selected app language.
- Closing on macOS now hides the Dock/taskbar entry like Windows while reminders, tray access, and background work continue. Restore from the menu bar, or choose Quit to terminate the app.
- Replaces the Mac menu-bar artwork with a transparent monochrome Template icon that preserves the Workday Island screen, island, and status-light silhouette and adapts to light and dark menu bars.
- Centralises cross-platform tray labels and command routing with regression tests to prevent future platform drift.

### Account Centre shortcuts

- Changes the six online services to a two-row, three-column `2×3` grid so service names remain on one line.
- Realtime Chat, Work Cloud, Cloud Notes, Link Sharing, Universal Translator, and AI Chat cards now open their corresponding module directly.

### Packages

- **macOS 12+**: `Workday-Island-v0.13.0-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.13.0-windows-x64-Setup.exe`.
- Use `SHA256SUMS.txt` to verify downloads.

The packages are not yet signed with commercial distribution certificates. Download only from this project's GitHub Release. On macOS, right-click and choose **Open** on first launch; Windows may display a SmartScreen prompt.

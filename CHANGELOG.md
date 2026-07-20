# 更新日志 · Changelog

本项目遵循 [Semantic Versioning](https://semver.org/)；中英文内容保持同步。
This project follows [Semantic Versioning](https://semver.org/); Chinese and English entries are kept in sync.

## [0.6.0] - 2026-07-20

### 中文

- 新增跟随系统、深色与浅色三种主题，并同步原生窗口外观。
- 完整模式改为无原生标题栏，并在精简入口旁增加最小化按钮。
- 精简模式隐藏标题头，可从非控件区域任意拖动，禁止文本误选，并增加最小化与恢复按钮。
- 精简窗口尺寸现在会持续保存，从完整模式再次进入时自动恢复。
- 新增“精简模式展示未完成待办”开关及最多三项的紧凑待办视图。
- 新建待办默认选择当天日期，未填写具体时间时仍可保存为无提醒待办。
- 今日已赚支持自定义货币符号，默认仍为 `¥`。
- Windows 系统通知改用隐藏进程启动，避免提醒时出现空白命令行窗口。
- 天气请求增加超时控制、瞬时故障重试与最近一次成功结果的本地离线回退。
- 应用 PNG/安装包图标移除白色外底，保留透明画布。
- 新增基于 GitHub Releases 的每日更新检查、关于页手动检查、双语更新说明及对应平台安装包入口。
- GitHub 未认证 API 配额耗尽时自动回退到公开 Release 页面，避免检查更新直接返回 HTTP 403。

### English

- Added system, dark, and light appearance modes, including native-window theme synchronisation.
- Made full mode frameless and added a minimize control next to Compact.
- Compact mode now hides the header, drags from any non-control surface, prevents accidental text selection, and exposes minimize/restore controls.
- Compact window dimensions are persisted continuously and restored on the next compact transition.
- Added a setting and compact list for up to three pending todos.
- New todos default to today's date while remaining valid without a reminder time.
- Earned Today now supports a configurable currency symbol, defaulting to `¥`.
- Windows notifications launch in a hidden process so no blank console window appears.
- Weather now uses tighter timeouts, transient-error retries, and a persisted last-known offline fallback.
- Removed the white outer matte from PNG and installer icons while preserving transparency.
- Added daily GitHub Releases checks, manual checks in About, bilingual release details, and a matching platform-package link.
- Added a public Releases-page fallback when GitHub's unauthenticated API quota is exhausted, avoiding HTTP 403 update failures.

## [0.5.0] - 2026-07-19

### 中文

- 新增可持久化的 25、50、90 分钟专注模式，结束时持续提醒休息。
- 精简模式调整为 2×2 布局，支持手动缩放并按比例调整卡片内容。
- 新增天气、今日已赚、下班倒计时和工作日进度。
- 月薪未设置或为零时隐藏“今日已赚”。
- 提醒到点后强制置前、多颜色闪烁并重复播放简短音效，直到确认。
- 修复 macOS 提醒窗口未置前和日期/时间控件混用问题。
- 新增中英文界面、系统语言跟随、关于页、版本号、作者邮箱及应用图标。
- 新增 macOS Apple Silicon + Intel 通用构建与 Windows x64 安装流程。

### English

- Added persisted 25, 50, and 90-minute focus sessions with continuous break reminders.
- Reworked compact mode into a resizable 2×2 layout with proportional card scaling.
- Added weather, earned-today estimate, off-work countdown, and workday progress.
- The earnings card now hides when monthly salary is empty or zero.
- Due alerts now raise the app, flash multiple colours, and repeat a short sound until acknowledged.
- Fixed macOS foreground reminders and the mixed date/time picker behaviour.
- Added Chinese/English UI, system-language detection, About details, version, author email, and app icons.
- Added universal Apple Silicon + Intel macOS builds and a Windows x64 installer workflow.

[0.6.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.6.0
[0.5.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.5.0

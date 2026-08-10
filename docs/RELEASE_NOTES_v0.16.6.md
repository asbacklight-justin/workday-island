# 工位岛 v0.16.6 / Workday Island v0.16.6

本版本扩展英语学习中心，新增会员专享的教材课文与英文书籍阅读，并完善沉浸阅读导航和状态保持。

This release expands English Learning with member-only textbooks and English books, plus a refined immersive reader with reliable navigation and state preservation.

## 中文

### 教材课文

- Plus、Pro、Ultra 会员可选择教材和课程，阅读英文正文、中文译文、本课词汇与关联词库信息。
- 阅读状态采用专用沉浸布局：收起学习中心统计区，缩窄课程目录，将主要窗口空间交给双语正文。
- 切换课程会保持目录滚动位置，不再自动跳回第一课；仅切换教材时重置目录。

### 英文书籍

- 新增英文书架，支持按书名、作者和简介搜索，并可按语言筛选。
- 支持章节目录、四种阅读主题、字号和行距调整，并按登录账号同步章节、段落和阅读进度。
- 正文使用宽阔的沉浸阅读布局，兼顾长文本行宽、翻页操作和小窗口适配。

### 导航与账号状态

- 沉浸阅读顶部同时提供“返回英语学习中心”和“返回工作台”；返回时保留当前教材、课程与阅读进度。
- 修复先进入会员页面、再登录并返回时不自动加载数据的问题；会员身份延迟生效时也会自动补载。
- 登录、退出或切换账号时正确隔离教材与书架缓存，避免空数据或跨账号残留。
- Go 与界面层均限制教材课文和英文书籍至少需要 Plus 会员。

## English

### Textbooks

- Plus, Pro, and Ultra members can select textbooks and lessons, then read English text, Chinese translations, lesson vocabulary, and linked lexicon details.
- A dedicated immersive layout collapses Learning-centre statistics, narrows the lesson catalogue, and gives the bilingual article most of the window.
- Selecting a lesson preserves the catalogue scroll position instead of jumping to Lesson 1; only changing textbooks resets it.

### English Books

- Added an English bookshelf with title, author, and summary search plus language filters.
- Includes chapter navigation, four reader themes, font-size and line-spacing controls, and account-synchronised chapter, paragraph, and progress data.
- Long-form text uses a spacious reader with controlled line width, clear pagination, and responsive narrow-window behaviour.

### Navigation and account state

- Immersive readers now offer both **Back to English Learning** and **Back to Dashboard**, preserving the current textbook, lesson, and reading progress.
- Fixed member content remaining empty after opening it signed out, signing in, and returning. Delayed membership activation now triggers a follow-up load as well.
- Signing in, signing out, or switching accounts isolates textbook and bookshelf caches to prevent stale or cross-account data.
- Both the Go bridge and the interface require at least Plus membership for Textbooks and English Books.

## 下载 / Downloads

- macOS 12+ (Apple Silicon and Intel): `Workday-Island-v0.16.6-macOS-universal.dmg`
- Windows 10/11 x64: `Workday-Island-v0.16.6-windows-x64-Setup.exe`
- File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

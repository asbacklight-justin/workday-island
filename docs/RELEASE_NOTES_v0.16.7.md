# 工位岛 v0.16.7 / Workday Island v0.16.7

本版本为英语学习中心新增会员专享的“词库数据”，并完善阅读器视觉、导航与小窗口适配。

This release adds member-only **Lexicon Data** to English Learning and refines the reader visuals, navigation, and small-window behaviour.

## 中文

### 词库数据

- Plus、Pro、Ultra 会员可按词库及课程浏览词条。
- 每个词条提供单词、音标、词性、中文释义、教材英文例句、中文译文与难度标识。
- 支持按单词或释义搜索；课程目录会保持当前选择，便于连续查阅。
- 客户端使用受保护的会员接口，并在旧服务尚未部署新接口时兼容只读公共接口回退。

### 英语学习交互与视觉

- 英语学习中心顶部统一为三栏布局：左侧为返回英语学习中心与返回工作台，标题居中，精简学习固定在右侧。
- 英文书籍、教材课文与词库数据的沉浸页面可平稳返回学习中心或工作台，并保留当前状态。
- 修复亮色及亮色会员主题下词库文字对比度不足的问题；页面信息、例句和搜索框现在清晰可读。
- 学习标签标题强制单行展示，空间不足时提供横向滚动，避免标题被折成两行或截断。

## English

### Lexicon Data

- Plus, Pro, and Ultra members can browse entries by lexicon and lesson.
- Each entry includes the word, phonetic spelling, part of speech, Chinese definition, textbook English example, Chinese translation, and difficulty marker.
- Search by word or meaning, while the lesson catalogue keeps the current selection for continuous reference.
- The desktop client uses protected membership endpoints and falls back to compatible public read-only endpoints while older services are being upgraded.

### English Learning interaction and visuals

- The English Learning header now uses a consistent three-column layout: Back to English Learning and Back to Dashboard on the left, title centered, Compact Study fixed on the right.
- Immersive English Books, Textbooks, and Lexicon Data pages return smoothly to the learning centre or dashboard while retaining the active state.
- Fixed insufficient Lexicon Data text contrast in light and light member themes; entries, examples, and search controls are now clearly readable.
- Learning tabs are kept on a single line and scroll horizontally when needed, preventing wrapping and clipped titles.

## 下载 / Downloads

- macOS 12+ (Apple Silicon and Intel): `Workday-Island-v0.16.7-macOS-universal.dmg`
- Windows 10/11 x64: `Workday-Island-v0.16.7-windows-x64-Setup.exe`
- File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

# 工位岛 v0.16.1 / Workday Island v0.16.1

本版本新增会员内测“摸鱼小岛”，首个小游戏为兼顾时机、进度、张力和倒计时的轻量钓鱼玩法，并补齐本机鱼获记录、多主题与双语适配。

This release introduces the member-beta Fishing Island, starting with a compact timing-based fishing game that combines accuracy, catch progress, line tension, and an escape timer, plus an on-device catch journal and complete bilingual/theme support.

## 中文

### 摸鱼小岛会员内测

- 顶部新增鱼形入口，可在设置页的“顶部功能入口”区域独立显示或隐藏，默认展示。
- 内测阶段仅 Plus、Pro、Ultra 会员可进入；未登录和普通用户会收到清晰的会员内测提示。
- 摸鱼模块使用独立页面，不干扰工作台、精简模式和其他生产力功能。

### 时机钓鱼小游戏

- 点击“开始钓鱼”后随机出现鱼种和稀有度，并依次经历等待咬钩、收线和结算阶段。
- 收线指针持续移动，需要在高亮目标区内把握点击时机；支持完美、普通和失误三种判定。
- 连续命中会提升捕获进度与连击，失误会增加鱼线张力；进度填满前还需关注鱼的逃脱倒计时。
- 随机鱼池包含多种鱼类与普通、稀有、史诗、传说四档稀有度，让每次短暂摸鱼都有不同结果。
- 支持鼠标点击与空格键操作，并遵循系统“减少动态效果”偏好。

### 本机鱼获图鉴

- 新增累计钓获、最佳连击和最近鱼获记录。
- 鱼获记录仅保存在当前设备的内嵌 WebView 本机存储，不会上传服务器。
- 页面完整适配中文、英文、深色、浅色及各级会员主题。

## English

### Member-beta Fishing Island

- Added a fish-shaped header shortcut. It can be shown or hidden independently in the header-entry settings and is visible by default.
- During beta, entry is limited to Plus, Pro, and Ultra members. Signed-out and regular users receive a clear members-only beta notice.
- Fishing Island uses a dedicated page and does not interfere with the dashboard, Compact Mode, or other productivity features.

### Timing-based fishing mini-game

- Starting a session selects a random species and rarity, then moves through bite waiting, reeling, and result stages.
- A moving reel marker must be stopped inside the highlighted target; results are graded as perfect, good, or missed.
- Accurate streaks build catch progress and combos, while misses increase line tension. The fish must be landed before its escape timer expires.
- The randomized pool spans multiple species and four rarity tiers: common, rare, epic, and legendary.
- Mouse/touch clicking and the Space key are supported, with reduced-motion preferences respected.

### On-device catch journal

- Added total catches, best streak, and recent catch history.
- Catch records remain in the embedded WebView's local storage on the current device and are never uploaded.
- The complete page supports Chinese, English, light, dark, and all member themes.

## 下载 / Downloads

- macOS 12+（Apple Silicon 与 Intel）：`Workday-Island-v0.16.1-macOS-universal.dmg`
- Windows 10/11 x64：`Workday-Island-v0.16.1-windows-x64-Setup.exe`
- 文件完整性校验 / File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

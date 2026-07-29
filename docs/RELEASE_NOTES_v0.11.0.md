# 工位岛 v0.11.0 · Workday Island v0.11.0

## 中文

`v0.11.0` 新增全能翻译，并将英语学习升级为可长期积累的学习中心。倒计时、待办、提醒、薪资和专注等核心功能仍可完全离线使用。

### 全能翻译

- 登录统一账号后即可使用，与聊天、好友和工作云盘共享同一会话。
- 支持自动检测源语言，以及中文、英文、日语、韩语、法语、德语、西班牙语、俄语、葡萄牙语和阿拉伯语互译。
- 展示账号的每日翻译额度、已用量与剩余额度。
- 支持复制译文、搜索历史、删除单条或批量历史，以及导出 Excel。
- 退出统一账号时，翻译、聊天与工作云盘会同步退出。

### 英语学习中心

- 点击 `EN` 后先进入完整学习中心，不再立即打开悬浮学习条。
- 新增“单词本”，跨天保存五种学习模式中实际刷过的单词、音标、释义、例句、词库、学习模式与次数。
- 新增“错题本”，记录英译中、中译英和拼写模式的错词、上次答案、正确答案与累计错误次数。
- 点击“精简学习”后才打开紧凑学习窗，继续支持单词学习、例句学习、英译中、中译英和完整单词拼写。
- 学习数据仅保存在本机，可按单词、释义或例句搜索。

### 体验与兼容性

- 修复 Windows 英语精简窗不跟随透明度的问题；透明度只作用于背景，单词、释义、选项与控件保持清晰。
- Backlight 账号、聊天、翻译、英语和云盘请求统一携带客户端来源与版本标识。
- “关于”新增 Web 端入口，可使用系统默认浏览器打开 `https://admin.asbacklight.cn/`。

### 安装包

- **macOS 12+**：`Workday-Island-v0.11.0-macOS-universal.dmg`，同时支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.11.0-windows-x64-Setup.exe`。
- 使用 `SHA256SUMS.txt` 校验下载文件。

> 当前公开安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请只从本项目 GitHub Release 下载。

## English

`v0.11.0` adds Universal Translator and upgrades English practice into a learning centre that builds a lasting local study history. Core features such as countdowns, todos, reminders, earnings, and focus sessions continue to work fully offline.

### Universal Translator

- Available after signing in to the unified account shared by chat, friends, and Work Cloud.
- Supports automatic source-language detection and translation among Chinese, English, Japanese, Korean, French, German, Spanish, Russian, Portuguese, and Arabic.
- Shows the account's daily quota, used amount, and remaining allowance.
- Supports copying results, searching history, deleting individual or selected entries, and exporting to Excel.
- Signing out disconnects translation, chat, and Work Cloud together.

### English Learning Centre

- Selecting `EN` opens the full learning centre instead of immediately launching the floating study strip.
- Added a cross-day Word Book containing words actually viewed in all five modes, with phonetics, meanings, examples, library, study modes, and view counts.
- Added a Wrong Book for mistakes from EN → CN, CN → EN, and spelling, including the latest answer, correct answer, and accumulated error count.
- The compact study window now opens through **Compact Study** and retains Word Study, Example Sentences, EN → CN, CN → EN, and full-word spelling.
- Study records remain local and can be searched by word, meaning, or example.

### Experience and compatibility

- Fixed Windows compact-English opacity so only the background becomes translucent while words, meanings, choices, and controls stay clear.
- Backlight account, chat, translation, English, and cloud requests now include client-source and client-version identifiers.
- Added a Web App entry to About that opens `https://admin.asbacklight.cn/` in the system default browser.

### Packages

- **macOS 12+**: `Workday-Island-v0.11.0-macOS-universal.dmg`, supporting both Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.11.0-windows-x64-Setup.exe`.
- Verify downloads with `SHA256SUMS.txt`.

> Public packages are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this project's GitHub Release.

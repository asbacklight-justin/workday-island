# 工位岛 v0.16.2 / Workday Island v0.16.2

本版本统一了顶部功能入口的视觉和选中反馈，并将彩色选中效果作为会员体验的一部分；同时把每次需求完成后的 Mac 验收构建固化为项目流程。

This release unifies the visual language and selected feedback of header shortcuts, adds colourful selected states as a member experience, and makes a macOS acceptance build part of the project workflow after every completed change.

## 中文

### 顶部入口统一交互

- AI、实时聊天、股市、摸鱼、工作云盘、云笔记、链接分享、全能翻译、英语学习和通知中心的默认图标统一为中性色。
- 悬停与选中状态使用一致的边框、背景和轻微光晕，不再出现不同入口的颜色风格相互冲突。
- 页面切换会自动更新选中入口，并补充 `aria-current="page"`，提高状态一致性与辅助技术可识别性。

### 会员彩色选中态

- Plus、Pro、Ultra 会员在打开模块时会看到彩色图标、边框和光晕：AI 紫、聊天蓝、股市橙、摸鱼青、云盘天蓝、笔记靛蓝、分享紫、翻译粉紫、英语绿、通知金色。
- 未登录和普通会员保持统一、克制的选中态，不会出现彩色特效。
- 登录、退出和会员等级变化后，入口效果会即时同步。

### 验收构建流程

- 中英文构建指南均新增“每次需求完成后的 Mac 验收包（必做）”。
- 每次完成界面、交互或功能需求后，自动执行前端语法检查、差异检查和 macOS Universal 打包。
- 验收包需要核对 Apple Silicon 与 Intel 双架构，以及 DMG 完整性后再交付。

## English

### Unified header interactions

- The resting icons for AI, Realtime Chat, Stocks, Fishing Island, Work Cloud, Cloud Notes, Link Sharing, Universal Translator, English Learning, and Notification Centre now use one neutral colour.
- Hover and selected states share a consistent border, background, and subtle glow instead of competing visual styles.
- Page transitions automatically update the selected shortcut and add `aria-current="page"` for more reliable state and accessibility feedback.

### Colourful member selected states

- Plus, Pro, and Ultra members see coloured icons, borders, and glows while a module is open: AI purple, chat blue, stocks orange, Fishing Island cyan, cloud sky blue, notes indigo, sharing violet, translation magenta, English green, and notifications gold.
- Signed-out and regular members retain a restrained unified selected state without colourful effects.
- The treatment refreshes immediately when signing in, signing out, or changing membership tier.

### Acceptance-build workflow

- Both build guides now include a required “macOS acceptance package after every change” section.
- Every completed UI, interaction, or feature request runs front-end syntax checks, diff checks, and macOS Universal packaging.
- The resulting package is verified for both Apple Silicon and Intel architectures and DMG integrity before hand-off.

## 下载 / Downloads

- macOS 12+（Apple Silicon 与 Intel）：`Workday-Island-v0.16.2-macOS-universal.dmg`
- Windows 10/11 x64：`Workday-Island-v0.16.2-windows-x64-Setup.exe`
- 文件完整性校验 / File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

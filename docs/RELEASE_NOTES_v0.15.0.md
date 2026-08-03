# 工位岛 v0.15.0 · Workday Island v0.15.0

## 中文

`v0.15.0` 重点优化股市行情体验、桌面窗口控制与 Windows 英语学习显示。

### 股市行情页面

- 股市入口现在默认打开清晰的完整页面，不再进入后立即变成小型悬浮窗。
- 点击页面内“精简”后才切换为原有透明行情小窗，并可从小窗再次展开。
- 重新设计标题、搜索区、行情卡片、操作按钮和底部状态栏，完整适配深色、浅色与极光主题。
- 修复浅色主题被固定深色面板覆盖后出现深底深字、输入框突兀和整体视觉割裂的问题。

### 桌面与账号体验

- 完整模式右上角窗口按钮统一为“最小化、全屏、关闭”的顺序。
- 账号中心的“注册”Tab 改为更明确的“免费注册”。
- 修复 Windows WebView2 中英语学习单词卡片的中文译文因字体行盒差异被纵向裁切、展示不全的问题。

### 安装包

- **macOS 12+**：`Workday-Island-v0.15.0-macOS-universal.dmg`，同时支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.15.0-windows-x64-Setup.exe`。
- 使用 `SHA256SUMS.txt` 校验下载文件。

安装包尚未使用商业代码签名证书。请只从本项目 GitHub Release 下载；macOS 首次启动可在 Finder 中右键选择“打开”，Windows 可能显示 SmartScreen 提示。

---

## English

`v0.15.0` focuses on the Stocks experience, desktop window controls, and English Learning rendering on Windows.

### Stocks page

- Stocks now opens as a clear full-size page instead of immediately entering the small floating ticker.
- The existing transparent ticker appears only after selecting **Compact** and can be expanded again.
- The header, search area, quote cards, controls, and status bar have been redesigned for Dark, Light, and Aurora themes.
- Fixed the hard-coded dark panel that caused dark-on-dark text, a stark input field, and visual inconsistency in Light mode.

### Desktop and account experience

- Reordered the full-mode window controls to Minimize, Full Screen, then Close.
- Renamed the Account Centre registration tab to the clearer **Sign Up Free**.
- Fixed Chinese translations in English Learning word cards being vertically clipped in Windows WebView2 because of different font metrics.

### Packages

- **macOS 12+**: `Workday-Island-v0.15.0-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64**: `Workday-Island-v0.15.0-windows-x64-Setup.exe`.
- Use `SHA256SUMS.txt` to verify downloads.

The packages are not yet signed with commercial distribution certificates. Download only from this project's GitHub Release. On macOS, right-click and choose **Open** on first launch; Windows may display a SmartScreen prompt.

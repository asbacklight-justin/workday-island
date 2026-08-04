# 工位岛 v0.15.1 · Workday Island v0.15.1

## 中文

`v0.15.1` 重点完善账号会员身份、真实头像与三档会员专属主题。

### 会员与账号

- 登录后通过 `/user/info` 获取最新头像、角色编码和角色列表，并在顶部账号入口与账号中心展示真实头像。
- 精确识别 `WORKDAY_ISLAND_PLUS`、`WORKDAY_ISLAND_PRO` 与 `WORKDAY_ISLAND_ULTRA`，多个角色同时存在时使用最高会员等级。
- Plus、Pro、Ultra 分别使用逐级增强的紫金、全光谱极光和黑曜星钻会员视觉；深色、浅色与极光环境均保持清晰。
- 打开账号中心、窗口重新获得焦点以及登录期间的定时刷新会同步最新会员状态，无需退出重登。
- 完整窗口宽度调整为 1024px，确保会员昵称、等级与窗口控件保持单行布局。

### 三档会员主题

- **曜金紫晶 · Plus**：深紫晶玻璃、暖金高光和柔和紫金边框，Plus、Pro、Ultra 可用。
- **全息极光 · Pro**：青蓝紫动态极光、全息渐变边框和更强层次，Pro、Ultra 可用。
- **黑曜星钻 · Ultra**：黑曜玻璃、冰蓝冷金光谱、星钻边框与克制动态效果，仅 Ultra 可用。
- 设置页会锁定当前等级不可用的主题并明确显示所需等级；Go 后端同步验证，防止越级保存。
- 退出账号或会员降级后，高级主题立即回退为系统主题；重新获得对应等级后可恢复使用。
- 三档主题覆盖工作台、设置、聊天、云盘、云笔记、分享、翻译、AI、英语学习和股市页面，并遵循系统“减少动态效果”偏好。

### 下载

- **macOS 12+**：`Workday-Island-v0.15.1-macOS-universal.dmg`，同时支持 Apple Silicon 与 Intel。
- **Windows 10/11 x64**：`Workday-Island-v0.15.1-windows-x64-Setup.exe`。
- 使用 `SHA256SUMS.txt` 校验下载文件。

安装包尚未使用商业代码签名证书。请只从本项目 GitHub Release 下载；macOS 首次启动可在 Finder 中右键选择“打开”，Windows 可能显示 SmartScreen 提示。

---

## English

`v0.15.1` focuses on account membership identity, real profile avatars, and three exclusive member themes.

### Membership and account

- Sign-in now retrieves the latest avatar, role codes, and role list from `/user/info`, showing the real profile image in both the header and Account Centre.
- Exact `WORKDAY_ISLAND_PLUS`, `WORKDAY_ISLAND_PRO`, and `WORKDAY_ISLAND_ULTRA` roles are recognised, with the highest assigned tier taking precedence.
- Plus, Pro, and Ultra receive increasingly expressive violet-gold, full-spectrum aurora, and obsidian-diamond membership treatments with clear contrast across Dark, Light, and Aurora environments.
- Membership refreshes when Account Centre opens, the window regains focus, and periodically while signed in, without requiring another sign-in.
- The regular window is now 1024px wide so the membership name, tier, and window controls remain on one line.

### Three member themes

- **Violet Gilt · Plus:** deep amethyst glass, warm-gold highlights, and a restrained violet-gold edge; available to Plus, Pro, and Ultra.
- **Holographic Aurora · Pro:** animated cyan-blue-violet aurora, holographic borders, and stronger depth; available to Pro and Ultra.
- **Obsidian Diamond · Ultra:** obsidian glass, ice-blue and cool-gold spectrum, diamond edges, and restrained motion; exclusive to Ultra.
- Settings disables themes above the current tier and states the required membership. The Go backend independently validates saves to prevent bypasses.
- Signing out or losing the required tier immediately falls back to the system theme; access returns when the corresponding membership is restored.
- All three themes cover the dashboard, Settings, Chat, Work Cloud, Cloud Notes, Sharing, Translator, AI, English Learning, and Stocks, while respecting reduced-motion preferences.

### Downloads

- **macOS 12+:** `Workday-Island-v0.15.1-macOS-universal.dmg`, supporting Apple Silicon and Intel.
- **Windows 10/11 x64:** `Workday-Island-v0.15.1-windows-x64-Setup.exe`.
- Verify downloads with `SHA256SUMS.txt`.

The packages are not yet signed with commercial distribution certificates. Download only from this project's GitHub Release. On macOS, right-click and choose **Open** on first launch; Windows may display a SmartScreen prompt.

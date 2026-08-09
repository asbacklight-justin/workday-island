# 工位岛 v0.16.5 / Workday Island v0.16.5

本版本完善摸鱼小宠体系，修复头像与顶部入口的稳定性问题。

This release completes the desk-pet system and fixes avatar and header-shortcut reliability issues.

## 中文

### 摸鱼小宠

- 新增四只可切换小宠：布鲁斯、橘小福、月白和披风；每只宠物的成长、精力、亲密度、动作、玩耍充能和睡觉冷却均独立保存在本机。
- 宠物可渲染待机、玩耍、睡觉等精灵帧动作；动作节奏已放缓，并修复了切换帧时偶发短暂消失的问题。
- 喂食会消耗钓鱼小岛的剩余鱼获；玩耍每分钟恢复 1 点充能、最多储存 3 次；睡觉完成后有 10 分钟冷却，避免无限重复操作。

### 账号与稳定性

- `/user/info` 返回的相对头像路径会自动补全 Backlight 服务前缀，支持常见头像字段并提供按用户 ID 的头像地址兜底。
- 修复小宠状态初始化顺序导致的启动异常；顶部 AI、聊天、股市、摸鱼、云盘、笔记、分享、翻译、英语和通知入口恢复正常响应。

## English

### Desk pets

- Added four switchable pets: Bruce, Tangerine, Luna, and Cape. Each pet keeps its own local growth, energy, affinity, animation, play charges, and nap cooldown.
- Pets render idle, play, and nap sprite animations. Animation pacing is slower and frame transitions no longer cause an occasional brief disappearance.
- Feeding consumes remaining Fishing Island catches. Play restores one charge per minute with a maximum of three; naps enter a ten-minute cooldown after completion to prevent unlimited repeated actions.

### Account and stability

- Relative avatar paths from `/user/info` now receive the Backlight service prefix automatically, support common avatar field variants, and fall back to a user-ID avatar endpoint.
- Fixed a pet-state initialization order issue that could stop the app during start-up and make header shortcuts unresponsive. AI, Chat, Stocks, Fishing Island, Work Cloud, Notes, Sharing, Translator, English, and Notifications now respond normally.

## 下载 / Downloads

- macOS 12+ (Apple Silicon and Intel): `Workday-Island-v0.16.5-macOS-universal.dmg`
- Windows 10/11 x64: `Workday-Island-v0.16.5-windows-x64-Setup.exe`
- File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

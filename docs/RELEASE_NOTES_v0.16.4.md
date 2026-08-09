# 工位岛 v0.16.4 / Workday Island v0.16.4

本版本完善会员试用领取闭环，并增强钓鱼小岛的操作反馈。

This release completes the membership-trial claim flow and makes Fishing Island feel more responsive.

## 中文

### 个人中心免费试用

- 每次进入个人中心时，应用会查询当前账号是否有待领取的免费试用资格。
- 符合条件时会展示会员等级、试用天数、有效期与“确认领取”按钮。
- 领取请求由服务端事务处理：锁定邀请、验证邀请归属、待领取状态、有效期、用户和角色启用状态后，原子生成对应天数的会员授权，避免重复领取。
- 领取成功后立即刷新账号资料、会员徽章、主题和会员功能权限。

### 钓鱼小岛动效

- 加入抛竿与落水波纹、咬钩水花、完美/普通命中粒子、失误逃脱和钓获跃出动画。
- 尊重系统“减少动态效果”偏好，避免对需要低动态体验的用户造成干扰。

## English

### Free trials in Account Center

- Every Account Center entry checks whether the signed-in account has a pending free-trial invitation.
- Eligible users see the membership level, trial duration, expiry, and a confirmation button.
- The server handles claims transactionally: it locks the invitation, validates ownership, pending status, expiry, active user and role, then atomically creates the time-limited role grant to prevent duplicate claims.
- A successful claim immediately refreshes account details, membership badges, themes, and feature access.

### Fishing Island effects

- Added cast and landing ripples, bite splashes, perfect/good timing particles, escape feedback, and a catch leap animation.
- Effects respect the system’s reduced-motion preference.

## 下载 / Downloads

- macOS 12+ (Apple Silicon and Intel): `Workday-Island-v0.16.4-macOS-universal.dmg`
- Windows 10/11 x64: `Workday-Island-v0.16.4-windows-x64-Setup.exe`
- File integrity: `SHA256SUMS.txt`

安装包尚未使用商业代码签名证书，首次启动时操作系统可能显示安全提示。请仅从本项目的 GitHub Release 下载，并使用 SHA-256 校验文件。

The installers are not yet signed with commercial code-signing certificates, so the operating system may show a security prompt on first launch. Download only from this repository's GitHub Release and verify the SHA-256 checksums.

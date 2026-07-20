# 为工位岛贡献代码

[中文](CONTRIBUTING.zh-CN.md) · [English](CONTRIBUTING.md)

感谢你帮助改进工位岛。范围清晰、改动集中的提交更容易审核和合并。

## 提交 Issue 前

1. 搜索现有 Issue，确认问题尚未记录。
2. 使用最新版本复现。
3. 提供操作系统、CPU 架构、应用版本、完整复现步骤、预期行为、实际行为和必要截图。
4. 上传日志或截图前，请移除待办内容、薪资、个人路径等隐私信息。

安全漏洞请按 [SECURITY.md](SECURITY.md) 私下报告，不要创建公开 Issue。

## 开发环境

需要 Go 1.23+、Git 和对应平台构建工具。Wails CLI 仅在需要热重载时安装。

```bash
git clone https://github.com/asbacklight-justin/workday-island.git
cd workday-island
go mod download
go test ./...
go run .
```

前端为 `frontend/dist/` 下的原生静态文件，由 Go 直接嵌入。修改界面文案时，请同步维护中文和英文。

## Pull Request 检查项

- 一次 PR 聚焦一个问题或功能。
- 业务逻辑变更应补充或更新 Go 测试。
- 对 Go 文件运行 `gofmt`，并执行 `go test ./...`。
- UI 布局变更需要同时验证完整模式、可缩放精简模式以及深色/浅色主题。
- 文案变更需要检查中文、英文和跟随系统三种语言模式。
- 用户可见行为变化需要同步更新 README、构建/隐私文档及 CHANGELOG。
- 不要提交生成的安装包、App Bundle、个人数据、凭据或签名证书。

提交贡献即表示你同意以本项目的 MIT License 发布该贡献。

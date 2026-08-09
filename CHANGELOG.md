# 更新日志 · Changelog

本项目遵循 [Semantic Versioning](https://semver.org/)；中英文内容保持同步。
This project follows [Semantic Versioning](https://semver.org/); Chinese and English entries are kept in sync.

## [Unreleased]

## [0.16.4] - 2026-08-09

### 新增 / Added

- 个人中心现会在每次进入时查询当前账号的待领取会员试用资格；用户确认后可直接领取。
- 钓鱼小岛新增抛竿、水花、咬钩、命中、鱼儿挣脱和钓获跃出等动态反馈，并尊重系统“减少动态效果”偏好。

### 安全与交互 / Security & UX

- 试用领取仅由服务端以当前登录令牌处理：事务锁定邀请、校验归属/状态/有效期及用户和角色启用状态，并原子写入限时会员授权，防止重复领取。
- 领取成功后立即刷新账号资料、会员徽章、会员主题及功能权限。

## [0.16.3] - 2026-08-08

### 新增 / Added

- 实时聊天新增原生动效表情面板，内置 60 个轻量 Emoji；单个 Emoji 消息会以更醒目的动态气泡呈现。
- 摸鱼模块升级为「摸鱼岛」，提供「钓鱼小岛」与「摸鱼小岛」双 Tab：前者增加 10 把五品质鱼竿、装备属性和低概率掉落，后者可让已钓到的鱼陪伴完成上班摸鱼小游戏。

### 优化 / Improved

- 完整窗口默认尺寸优化为 1100 × 700，确保顶部工具栏及最小化、全屏、关闭按钮在常规桌面尺寸下完整可见。
- 聊天表情与摸鱼进度均保留在本地，不改变现有聊天协议或云端数据结构。

## [0.16.2] - 2026-08-07

### 中文

- 统一顶部功能入口的默认中性色、悬停状态与页面选中态；AI、聊天、股市、摸鱼、云盘、笔记、分享、翻译、英语和通知均使用一致的交互规则。
- 页面切换时会自动同步入口选中状态与 `aria-current`，进入、返回或关闭页面后不再出现高亮遗漏。
- Plus、Pro、Ultra 会员在选中入口时获得按模块区分的彩色图标、边框和光晕；未登录和普通会员继续使用统一、克制的选中样式。
- 构建指南新增强制验收流程：每次完成需求后自动构建 Mac Universal 验收包，并校验双架构与 DMG 完整性。

### English

- Unified neutral resting colours, hover feedback, and selected-page states for every header shortcut: AI, chat, stocks, Fishing Island, Work Cloud, Cloud Notes, sharing, translation, English, and notifications.
- Header selection and `aria-current` now synchronise automatically while opening, returning from, or closing pages, preventing missed highlights.
- Plus, Pro, and Ultra members receive module-specific colourful icon, border, and glow accents for selected shortcuts; signed-out and regular members keep the restrained unified selection style.
- The build guide now requires a macOS Universal acceptance build after every completed change, including Universal-architecture and DMG-integrity checks.

## [0.16.1] - 2026-08-06

### 中文

- 新增会员内测“摸鱼小岛”模块与鱼形顶部入口；非会员点击会提示内测阶段仅会员可测试，Plus、Pro、Ultra 会员可直接进入。
- 首个摸鱼小游戏为时机钓鱼：随机鱼种与稀有度、等待咬钩、移动收线区、完美/普通/失误判定、捕获进度、鱼线张力、逃脱倒计时和连续命中均已实现。
- 新增本机鱼获图鉴、累计钓获与最佳连击；数据仅保存在内嵌 WebView 本机存储，不上传服务器。
- “摸鱼”入口加入设置页顶部功能入口开关，默认展示；页面适配中英文、深浅色与会员主题、键盘空格操作及减少动态效果设置。

### English

- Added the member-beta Fishing Island module and a fish-shaped header shortcut. Non-members see a members-only beta prompt, while Plus, Pro, and Ultra members can enter directly.
- The first Fishing Break mini-game includes random species and rarity, bite waiting, a moving reel zone, perfect/good/miss judgements, catch progress, line tension, an escape timer, and hit streaks.
- Added an on-device catch journal, total catches, and best streak. These records stay in embedded WebView local storage and are never uploaded.
- Fishing Break is configurable in the header-shortcut settings and visible by default, with Chinese/English, light/dark/member-theme, Space-key, and reduced-motion support.

## [0.16.0] - 2026-08-05

### 中文

- Plus、Pro、Ultra 分别新增“樱金晨曦”“冰川晴空”“星钻白曜”三套会员亮色主题；基于完整浅色组件体系设计，并覆盖工作台、弹窗、账号中心、云笔记、AI、聊天、翻译、云盘、英语学习和股市页面。
- 三套亮色主题沿用会员等级权限：Plus 解锁 Plus 亮色，Pro 解锁 Plus/Pro 亮色，Ultra 解锁全部；界面选项、持久化校验、Go 后端权限与系统原生浅色窗口外观保持一致。
- “关于”页新增意见反馈入口，可在无需登录的情况下提交问题、功能建议、体验反馈或其他意见；自动携带应用版本与系统平台，但不会附加待办、薪资或笔记。
- 新增公共反馈原生网络客户端、双语表单、输入长度校验、提交状态、成功编号与服务端错误提示，并为客户端来源/版本请求头和限流响应补充测试。
- 接入 Backlight 站内信：顶部通知入口展示实时未读角标，通知中心支持类型/已读状态筛选、分页、单条已读、全部已读、删除和业务详情跳转；会话未登录时引导到账号中心。
- 修复云笔记编辑中切换到其他页面再返回时，笔记列表摘要覆盖完整正文、造成内容大量减少的问题。返回云笔记时保留原选中笔记、编辑器内容与页面状态；离开时立即快照保存，保存请求期间的新输入会自动排队再次保存。
- 新增会员主题自动适配：会员登录，或已登录普通用户在 `/user/info` 刷新后升级为 Plus、Pro、Ultra 时，若当前不是会员主题，会自动切换到对应等级的专属主题；原浅色/系统浅色使用亮色会员主题，原深色/极光使用深色会员主题。用户已主动选择的会员主题不会被覆盖。

### English

- Added three bright member themes: **Sakura Dawn** for Plus, **Glacier Sky** for Pro, and **Stellar White Diamond** for Ultra. They build on the complete light component system and cover the dashboard, dialogs, Account Centre, Cloud Notes, AI, chat, translation, Work Cloud, English learning, and stocks.
- Bright themes follow the existing hierarchy: Plus unlocks the Plus theme, Pro unlocks Plus and Pro themes, and Ultra unlocks all themes. UI options, persistence validation, Go-side access checks, and the native light window appearance stay aligned.
- Added a Feedback entry to About for sending bug reports, feature suggestions, experience feedback, or other comments without signing in. Reports include the app version and platform but never attach todos, salary, or notes.
- Added a native public-feedback client, bilingual form, input limits, pending state, success reference, service-error handling, and tests for client metadata headers and rate-limit responses.
- Integrated Backlight in-app notifications. The header shows a live unread badge, while Notification Center supports type/read-state filters, pagination, marking one or all as read, deletion, and business-detail links; signed-out sessions are directed to Account Centre.
- Fixed Cloud Notes losing most of an edited note after navigating away and back because a list excerpt replaced the full body. Returning now preserves the selected note, live editor content, and page state; leaving snapshots immediately, and edits made during an in-flight save are queued for a follow-up save.
- Added automatic member-theme matching. When a member signs in, or a signed-in regular account becomes Plus, Pro, or Ultra after a `/user/info` refresh, a non-member theme switches to that tier's exclusive theme. Light/System-Light stays bright, while Dark/Aurora stays dark; an explicitly selected member theme is never overwritten.

## [0.15.1] - 2026-08-04

### 中文

- 账号登录后改用 `/user/info` 刷新头像、角色编码与角色列表；顶部账号入口和账号中心现在会展示真实头像。
- 新增工位岛会员身份视觉：按 `WORKDAY_ISLAND_PLUS`、`WORKDAY_ISLAND_PRO`、`WORKDAY_ISLAND_ULTRA` 精确识别 Plus、Pro、Ultra，并按最高等级展示逐级增强的青蓝、紫金和极光动态徽章；普通用户保持简洁样式。
- 会员徽章完整适配深色、浅色与极光主题，并遵循系统“减少动态效果”设置。
- 强化会员等级颜色与边框区分：Plus 使用电光青蓝多层边框，Pro 使用紫金渐变双辉边框，Ultra 使用动态全光谱极光边框，并同步作用于顶部账号入口、头像外环、会员徽章和账号中心身份区域。
- 提升浅色主题下 Pro 会员徽章的对比度，使用深紫文字、实色紫金边框和更醒目的金色图标，并适当增大徽章字号与高度。
- 完整模式默认窗口宽度统一提升至 1024px，为标题栏预留稳定空间；Ultra 登录后不再单独改变窗口宽度，顶部品牌、账号、精简和置顶等控件禁止收缩换行，既避免大段留白，也确保标题栏始终保持单行布局。
- 修复登录后会员等级变化不能及时显示的问题：打开账号中心、窗口重新获得焦点及登录期间定时刷新时会重新读取 `/user/info`，即时同步会员标识、头像与对应窗口样式，无需退出重登。
- 重新设计会员视觉层级：Plus 继承原 Pro 的紫金流光质感，Pro 升级为原 Ultra 的动态全光谱极光；Ultra 新增顶级黑曜星钻效果，包含钻石切面边框、冷金与冰蓝多层辉光、星芒呼吸和缓慢扫光，并提供协调的浅色“白钻”版本与减少动态效果适配。
- 修复浅色主题下 Ultra 顶部账号入口出现白字叠白底的问题；白钻版本现在使用高对比度深海军蓝昵称、冷金 Ultra 标识与受控扫光，在动画全过程中保持清晰可读。

### English

- Account sign-in now refreshes the avatar, role codes, and role list through `/user/info`; the header account control and Account Centre display the real profile image.
- Added Workday Island membership visuals. Exact `WORKDAY_ISLAND_PLUS`, `WORKDAY_ISLAND_PRO`, and `WORKDAY_ISLAND_ULTRA` roles map to increasingly expressive cyan-blue, violet-gold, and animated aurora badges, with the highest assigned tier taking precedence and regular members staying understated.
- Membership treatments support Dark, Light, and Aurora themes and respect the operating system's reduced-motion preference.
- Strengthened tier differentiation across the header account control, avatar ring, membership badge, and Account Centre identity panel: electric cyan-blue for Plus, violet-gold dual glow for Pro, and an animated full-spectrum aurora border for Ultra.
- Improved the Pro badge contrast in Light mode with dark-violet text, a stronger violet-gold border, a clearer gold icon, and slightly larger badge typography.
- The default regular-window width is now 1024px for every user, providing stable header space without resizing again after an Ultra sign-in. Branding, account, Compact, and Pin controls remain on one line without excessive gaps, shrinking, or wrapping.
- Fixed membership changes not appearing promptly after sign-in. Opening Account Centre, refocusing the window, and a lightweight signed-in interval now refresh `/user/info`, immediately synchronising membership badges, avatars, and tier-specific window styling without requiring another sign-in.
- Redesigned the membership hierarchy: Plus inherits the former Pro violet-gold sheen, Pro receives the former Ultra animated full-spectrum aurora, and Ultra gains a new flagship obsidian-diamond treatment with faceted borders, layered cool-gold and ice-blue glows, breathing starlight, and slow light sweeps, plus a coordinated light-theme “white diamond” variant and reduced-motion support.
- Fixed white Ultra account text blending into the Light-theme header. The white-diamond variant now uses a high-contrast deep-navy name, cool-gold Ultra label, and controlled light sweep that remains legible throughout the animation.

## [0.15.0] - 2026-08-03

### 中文

- 股市入口默认打开清晰的大页面并保持完整窗口尺寸，页面内点击“精简”后才切换为原有透明行情小窗；小窗可再次展开回大页面。
- 重新设计股市完整版的标题、搜索区、行情卡片、操作按钮和状态栏，使其完整适配深色、浅色与极光主题；修复浅色主题下固定深色面板造成的低对比度和视觉割裂。
- 账号中心的注册 Tab 改为更明确的“免费注册”，英文同步为“Sign Up Free”。
- 完整模式右上角窗口按钮统一调整为“最小化、全屏、关闭”的顺序。
- 修复 Windows WebView2 中英语单词卡片的中文译文因字体行盒差异被纵向裁切、展示不全的问题。

### English

- Stocks now opens as a clear full-size page while preserving the regular window size. The existing transparent ticker appears only after selecting Compact and can be expanded again.
- Redesigned the full Stocks page hierarchy across its header, search bar, quote cards, controls, and status area for Dark, Light, and Aurora themes; fixed the hard-coded dark surface that caused poor contrast and visual inconsistency in Light mode.
- Renamed the Account Centre registration tab to the clearer “Sign Up Free”, with matching Chinese copy.
- Reordered the full-mode window controls to Minimize, Full Screen, then Close.
- Fixed Chinese translations in English word cards being vertically clipped in Windows WebView2 because of different font metrics.

## [0.14.0] - 2026-08-02

### 中文

- 设置页顶部新增 8 个工作台快捷入口开关，可分别控制 AI 对话、实时聊天、股市、工作云盘、云笔记、链接分享、全能翻译和英语学习是否显示；默认全部开启，并兼容旧版本地配置。
- 云笔记新建入口新增普通笔记、Markdown 与表格文档三种类型；Markdown 支持源码编辑和安全预览，表格文档使用与 Web 后台一致的 Workbook 格式并支持单元格、公式栏、扩展行列和多工作表编辑。
- 桌面端创建、保存、统计、AI 整理和翻译时会按文档类型处理内容，确保 Markdown 与表格可在桌面端和 Web 端之间继续编辑。

### English

- Added eight shortcut visibility controls at the top of Settings for AI Chat, Realtime Chat, Stocks, Work Cloud, Cloud Notes, Link Sharing, Universal Translator, and English Learning. All are shown by default, including for users upgrading from older local settings.
- Added Rich Text, Markdown, and Spreadsheet choices to Cloud Notes creation. Markdown includes source editing and safe preview, while spreadsheets use the same Workbook format as the Web app with cells, a formula bar, expandable rows/columns, and multiple sheets.
- Desktop creation, autosave, statistics, AI hand-off, and translation now process content by document type so Markdown and spreadsheets remain editable across desktop and Web.

## [0.13.0] - 2026-08-01

### 中文

- 顶部全能翻译入口由容易换行的「文A」改为清晰的单字「译」图标。
- 账号中心的六项在线服务调整为每行三项、共两行的 `2×3` 布局，服务名称保持单行显示；每张卡片均可点击并直接进入对应功能页面。
- 设置新增「极光」主题，以深蓝夜空、青绿色与紫色光晕、玻璃卡片为核心视觉，并同步使用原生深色窗口外观。
- 全面提升完整模式的可读性：聊天、AI 回答、笔记和翻译正文提升到舒适阅读字号，普通说明、表单、按钮、状态及时间信息建立不低于 `10–12px` 的清晰层级；精简英语与股市小窗继续保持紧凑。
- 新增全局全屏按钮，完整工作台及各功能页面均可进入全屏；Mac 针对无边框窗口使用专用全屏实现，Windows 使用系统原生全屏，按钮会切换退出状态并支持 `Esc`。
- Mac 菜单栏改用透明背景的单色 Template 图标，保留工位岛屏幕、浮岛与状态灯轮廓，并自动适配深浅菜单栏。
- 修复云笔记弹窗按钮缺少独立字号时在部分 WebView 中被压缩成横线的问题。
- 统一 macOS 与 Windows 系统托盘：Mac 菜单栏新增聊天、英语学习、AI 对话、工作云盘、翻译和股市快捷入口，菜单文案跟随应用语言，图标改用应用 Logo。
- macOS 点击关闭后会像 Windows 一样移除 Dock/任务栏入口，同时保持托盘、提醒和后台任务运行；左键菜单栏图标恢复窗口，右键菜单可进入模块或彻底退出。
- 抽取跨平台共享的托盘文案与命令路由并补充测试，避免两端功能再次漂移。

### English

- Replaced the wrapping `文A` Translator entry with a clear single-character `译` icon.
- Changed the six Account Centre services to a two-row, three-column `2×3` grid so service names remain on one line; every card is now clickable and opens its corresponding module directly.
- Added an Aurora theme built around a deep-blue night canvas, teal/violet glows, and glassy cards, with matching native dark-window appearance.
- Improved readability throughout full mode: chat, AI answers, notes, and translation content now use comfortable reading sizes, while descriptions, forms, controls, status text, and timestamps follow a clear `10–12px` minimum hierarchy. Compact English and Stocks remain intentionally dense.
- Added a global full-screen control for the dashboard and every full-page module. macOS now uses a dedicated borderless-window implementation, while Windows uses native full screen; both expose a matching exit state and `Esc` support.
- Replaced the macOS menu-bar artwork with a transparent monochrome Template icon that preserves the Workday Island screen, island, and status-light silhouette while adapting automatically to light and dark menu bars.
- Fixed Cloud Notes dialog labels collapsing into a tiny dash in WebViews where the buttons inherited the page's one-pixel root font size.
- Aligned the macOS and Windows system trays. The Mac menu bar now includes Chat, English Learning, AI Chat, Work Cloud, Translator, and Stocks shortcuts, follows the app language, and uses the application logo.
- Closing on macOS now removes the Dock/taskbar entry like Windows while keeping the tray, reminders, and background work alive. Left-click restores the window; right-click opens modules or quits explicitly.
- Centralised cross-platform tray labels and command routing with regression tests to prevent future platform drift.

## [0.12.0] - 2026-07-30

### 中文

- 新增桌面 AI 对话模块，支持统一账号登录、会话搜索/置顶/归档/重命名/删除、模型与思考模式选择、系统提示、Markdown、代码复制、流式回答、停止生成和使用额度。
- 新增云笔记模块，支持文件夹、搜索、收藏、置顶、富文本自动保存、移动、回收站、历史版本、阅读密码、AI/翻译联动及 Word/文本导出。
- 新增链接分享模块，可创建快照或实时笔记分享，配置密码、有效期、复制和评论权限，并在独立页面管理额度、访问次数和分享生命周期。
- 统一账号会话扩展至 AI 对话、聊天、好友、工作云盘、云笔记、链接分享和全能翻译，退出账号时同步退出所有在线模块。
- 修复桌面 WebView 不显示原生输入/确认框导致新建文件夹、阅读密码、笔记信息和删除等操作无响应；相关交互统一改为应用内弹窗。
- 修复文件夹内普通笔记省略 `pinned=false` 后导致排序失效的问题，置顶笔记现在始终排在普通笔记之前。
- 补充云笔记密码状态、分享登录边界、账号隔离与服务端数据源测试，并更新中英文隐私和使用文档。

### English

- Added desktop AI Chat with unified sign-in, conversation search/pin/archive/rename/delete, model and thinking controls, system prompts, Markdown, code copying, streaming, stop generation, and usage quotas.
- Added Cloud Notes with folders, search, favourites, pinning, rich-text autosave, move, recycle bin, versions, reading passwords, AI/translation hand-off, and Word/text export.
- Added Link Sharing for snapshot or live-note publishing with passwords, validity, copy/comment policies, plus a dedicated manager for quotas, views, and lifecycle actions.
- Extended the unified account session across AI Chat, realtime chat, friends, Work Cloud, Cloud Notes, Link Sharing, and Universal Translator, with coordinated sign-out.
- Replaced unreliable native WebView prompts with in-app dialogs, fixing unresponsive folder creation, reading-password, note-information, delete, and related actions.
- Fixed pinned-note ordering when ordinary notes omit `pinned=false`; pinned notes now always appear first within their folder.
- Added tests for note password metadata, sharing authentication boundaries, account isolation, and cloud source-of-truth behaviour, with updated bilingual privacy and usage documentation.

## [0.11.0] - 2026-07-29

### 中文

- 新增“全能翻译”模块，登录统一账号后可使用自动语言检测及中、英、日、韩、法、德、西、俄、葡、阿多语言互译。
- 翻译模块支持每日额度展示、译文复制、历史搜索、单条或批量删除，以及 Excel 导出。
- 英语学习升级为独立学习中心，新增跨天保存的“单词本”和“错题本”；五种模式学过的单词会进入单词本，后三种答题模式的错词会进入错题本。
- 英语精简学习窗改为从学习中心按需打开，并继续支持词库选择、双语例句、即时答案反馈与上一词复习。
- 统一账号会话现在同时服务于聊天、好友、工作云盘和全能翻译；所有 Backlight HTTP 与 WebSocket 请求补充客户端来源及版本请求头。
- 修复 Windows 英语学习精简窗口不跟随悬浮窗透明度：恢复原生 100% 不透明时会移除残留的分层窗口样式，并在英语模式下启用透明 WebView 宿主背景，使透明度只作用于学习背景，文字与控件保持清晰。
- “关于”中新增 Web 端入口，可通过系统默认浏览器打开 `https://admin.asbacklight.cn/`。

### English

- Added Universal Translator for signed-in accounts, with automatic language detection and translation among Chinese, English, Japanese, Korean, French, German, Spanish, Russian, Portuguese, and Arabic.
- Added daily translation quota, result copying, history search, individual or batch deletion, and Excel export.
- Upgraded English practice into a dedicated learning centre with a cross-day Word Book and Wrong Book. Words viewed in all five modes enter the Word Book, while mistakes from the three answer modes enter the Wrong Book.
- Compact English study now opens on demand from the learning centre and keeps word-library selection, bilingual examples, immediate answer feedback, and previous-word review.
- The unified account session now serves chat, friends, Work Cloud, and Universal Translator. All Backlight HTTP and WebSocket requests include client-source and client-version headers.
- Fixed the compact English-learning window ignoring floating-window opacity on Windows. Returning native opacity to 100% now removes the stale layered-window style, while English mode enables a transparent WebView host so opacity affects only the learning background and keeps text and controls crisp.
- Added a Web App entry to About that opens `https://admin.asbacklight.cn/` in the system default browser.

## [0.10.0] - 2026-07-28

### 中文

- 新增独立统一账号入口，登录、注册和退出不再放在聊天页面；隐藏一键登录入口，账号登录后工作台展示昵称。
- 聊天、好友与工作云盘共享同一登录会话；退出账号会同时断开实时聊天并清除云盘令牌。
- 新增工作云盘，支持目录浏览与搜索、新建目录、重命名、移动、删除、文件上传下载和存储配额展示。
- 抖一抖和闪一闪现在会作为系统互动消息写入聊天记录，并优先使用发送者昵称；昵称缺失时才回退到用户 ID。
- 英语学习第一个模式更名为“单词学习”，新增“例句学习”，展示单词对应英文例句及在线中文翻译。
- 修复 Windows 英语悬浮窗高度不足导致音标、释义或底部边缘被裁切的问题，并让窗口根据实际内容尺寸收缩。
- 补充账号、云盘、在线英语和对象存储的数据边界与联网隐私说明。

### English

- Added a standalone unified account centre so sign-in, registration, and sign-out no longer live inside chat; the one-click entry is hidden and the dashboard shows the signed-in nickname.
- Chat, friends, and Work Cloud now share one account session. Signing out disconnects realtime chat and clears the cloud token together.
- Added Work Cloud with folder browsing and search, directory creation, rename, move, delete, file upload/download, and live storage quota.
- Shake and flash actions are now written into conversation history as interaction messages and prefer the sender nickname, falling back to the user ID only when needed.
- Renamed the first English mode to Word Study and added Example Sentences with the source sentence and an online Chinese translation.
- Fixed the Windows English widget clipping phonetics, meanings, or its lower edge, and tightened the window to the measured content size.
- Documented the network and privacy boundaries for accounts, Work Cloud, online English, and direct object-storage transfers.

## [0.9.0] - 2026-07-27

### 中文

- 实时聊天新增用户名密码登录，并保留原有一键匿名设备登录。
- 账号登录区域新增注册入口，复用 Backlight 账号服务，支持用户名、昵称、密码及可选邮箱、手机号和邀请码；注册后自动回填用户名。
- 聊天登录默认使用账号密码，并调整为左侧账号密码、右侧一键登录；已手动选择的登录方式继续保留。
- 工作台最小化与退出按钮移动到顶部操作区最右侧。
- 修复实时消息已推送但聊天页面不更新：缺少频道 ID 时使用发送者 ID 关联会话，并在消息到达时立即切换和重绘对应聊天。
- 新增好友申请、同意/拒绝、好友列表、在线状态、删除好友和好友点击会话。
- 好友管理调整为聊天页内独立标签，添加好友、申请处理和联系人列表不再挤占聊天侧栏。
- 聊天页改为左侧好友列表、右侧会话的好友优先结构，窗口抖动与闪烁操作整合到当前会话。
- 新增股市悬浮小窗，默认关注上证指数、深证成指和创业板指，支持添加 A 股自选、5 秒刷新、断网缓存和悬浮窗透明度。
- 股市小窗进一步压缩为桌面组件尺寸，关闭后完整工作台自动恢复到屏幕中央。
- 认证成功与断线重连后自动同步好友状态，实时推送按申请 ID 和用户 ID 幂等合并。
- 账号密码仅保留于当前在线会话内存，主动下线、认证失败或退出应用后清除。

### English

- Added username/password authentication to realtime chat while retaining one-click anonymous-device login.
- Added account registration beside chat sign-in using the Backlight account service, with username, nickname, password, optional email, phone and invite code, followed by automatic username fill-in.
- Made username/password the default chat authentication choice, placed it on the left of one-click login, and continued remembering explicit user selections.
- Moved the dashboard Minimize and Exit controls to the far right of the top action bar.
- Fixed pushed chat messages not appearing immediately by falling back to the sender when a channel ID is absent and instantly selecting and redrawing the matching conversation.
- Added friend requests, accept/reject actions, friend lists, online presence, friend removal, and click-to-chat.
- Moved friend management into its own chat-page tab so adding friends, handling requests, and browsing contacts no longer crowd the conversation sidebar.
- Reworked chat around a friend-first contact list on the left and conversation on the right, with shake and flash actions integrated into the active conversation.
- Added a compact floating stock ticker with the SSE Composite, Shenzhen Component, and ChiNext defaults, A-share watchlists, five-second refreshes, offline caching, and floating-window opacity.
- Reduced the stock ticker to a tighter desktop-widget size and automatically recentred the restored dashboard when it closes.
- Friend state reloads after authentication and reconnects, with realtime pushes merged idempotently by request and user ID.
- Account passwords stay only in memory for the current online session and are cleared after explicit offline, authentication failure, or application exit.

## [0.8.1] - 2026-07-26

### 中文

- 优化英语学习窗口透明度：透明度仅作用于深浅主题背景，单词、释义、选项、成绩和操作控件保持完全清晰；Windows 与 macOS 行为一致。

### English

- Improved English-learning opacity: only the dark/light background becomes translucent, while words, meanings, choices, scores, and controls remain fully opaque on both Windows and macOS.

## [0.8.0] - 2026-07-25

### 中文

- 新增“今日英语学习”模块，可从主界面一键打开独立的紧凑学习窗口。
- 新增中英学习、英译中四选一、中译英四选一和完整单词拼写四种练习模式。
- 选择或提交答案后立即显示对错，并保留上一词的中英文结果作为复习提示。
- 学习窗口按当前单词和选项内容自动收缩，控制项靠左、最小化靠右，减少多余留白。
- 接入词灵在线词库和游客身份，按批次取词并提交单题练习结果。
- 设置中新增词库选择，默认《新概念英语》第二册，并支持新概念三、四级、六级、雅思及全部公共词库。
- 修复 macOS 应用包图标在 Dock 中可能显示为默认占位图的问题，完善 ICNS 多尺寸资源生成。

### English

- Added the Today English Learning module with a dedicated compact learning window opened from the main dashboard.
- Added four modes: bilingual study, English-to-Chinese multiple choice, Chinese-to-English multiple choice, and full-word spelling.
- Answers now show immediate correct/wrong feedback and keep the previous word with its bilingual result for review.
- The learning window automatically fits the current word and options, keeps controls left-aligned and Minimize on the right, and removes excess whitespace.
- Connected to the Word Spirit online library with one-click guest access, batched word loading, and per-question result submission.
- Added a word-library preference that defaults to New Concept English 2 and also supports NCE 3, CET-4, CET-6, IELTS, and all public words.
- Fixed the macOS app bundle icon occasionally appearing as a generic Dock placeholder by generating a complete multi-size ICNS resource.

## [0.7.0] - 2026-07-23

### 中文

- 新增独立实时聊天页面，通过用户 ID 发送文字消息并显示在线送达或离线待送达状态。
- 新增无用户名密码的一键匿名设备身份；首次生成 Ed25519 密钥，macOS 使用系统钥匙串、Windows 使用 DPAPI 保护私钥。
- 新增抖动与多色闪烁窗口互动，可携带最多 120 个字符的提示语；收到后自动恢复并置前窗口，支持立即停止。
- 支持离线消息、窗口互动补发、接收/已读确认、本地最近消息记录和自动断线重连。
- 修复未读红点出现但页面仍停留在旧用户的问题，新消息会立即定位到最近发信人的会话。
- 修复重连退避在成功上线后未清零的问题，后续短断线重新从 1 秒开始恢复。
- 补充中英文实时聊天指南与隐私说明，明确远程传输、本机数据边界和设备密钥存储方式。

### English

- Added a dedicated realtime chat page for user-ID messaging with online-delivery and queued-offline states.
- Added one-click anonymous device identity without username/password login; the app generates an Ed25519 key and protects it with macOS Keychain or Windows DPAPI.
- Added shake and multicolour-flash window interactions with an optional 120-character prompt; incoming effects restore and raise the window and can be stopped immediately.
- Added offline delivery, received/read acknowledgements, recent local message history, and automatic WebSocket reconnection.
- Fixed unread badges appearing while the page remained on an older peer; new messages now select the latest sender immediately.
- Fixed reconnect backoff remaining cumulative after a successful connection; later transient disconnects restart at a one-second retry.
- Added bilingual realtime-chat and privacy documentation covering remote transfer, local-data boundaries, and device-key storage.

## [0.6.2] - 2026-07-22

### 中文

- 修复浅色主题下工作日已选状态被覆盖、看起来没有回显的问题，并增强旧数据的工作日归一化。
- 点击窗口叉号改为隐藏到系统托盘；隐藏后待办与专注提醒继续运行，左键托盘图标恢复窗口，右键菜单可彻底退出。
- macOS 菜单栏空间不足、托盘图标被系统遮挡时保留 Dock 入口；点击 Dock 图标会自动恢复隐藏窗口。
- 改进天气城市候选排序、设置保存后的强制刷新和异常雷暴校正；离线缓存超过 3 小时后不再继续展示，并显示缓存时间。

### English

- Fixed selected workdays looking unselected in the light theme and hardened workday normalisation for older data.
- The window close button now hides to the system tray while reminders keep running; left-click restores the window and the right-click menu provides the explicit Quit action.
- macOS keeps a Dock fallback when a crowded menu bar obscures the tray item; activating the Dock icon restores the hidden window.
- Improved weather location ranking, forced refresh after settings changes, and inconsistent thunderstorm correction; offline data now expires after three hours and shows its cache time.

## [0.6.1] - 2026-07-21

### 中文

- 精简模式新增 30%–100% 原生窗口透明度设置，Windows 与 macOS 均支持；拖动滑块时实时预览，提醒触发时会临时恢复为完全不透明。

### English

- Added native 30%–100% compact-window opacity on Windows and macOS, with live slider previews and temporary full opacity during active reminders.

## [0.6.0] - 2026-07-20

### 中文

- 新增跟随系统、深色与浅色三种主题，并同步原生窗口外观。
- 完整模式改为无原生标题栏，并在精简入口旁增加最小化按钮。
- 精简模式隐藏标题头，可从非控件区域任意拖动，禁止文本误选，并增加最小化与恢复按钮。
- 精简窗口尺寸现在会持续保存，从完整模式再次进入时自动恢复。
- 新增“精简模式展示未完成待办”开关及最多三项的紧凑待办视图。
- 新建待办默认选择当天日期，未填写具体时间时仍可保存为无提醒待办。
- 今日已赚支持自定义货币符号，默认仍为 `¥`。
- Windows 系统通知改用隐藏进程启动，避免提醒时出现空白命令行窗口。
- 天气请求增加超时控制、瞬时故障重试与最近一次成功结果的本地离线回退。
- 应用 PNG/安装包图标移除白色外底，保留透明画布。
- 新增基于 GitHub Releases 的每日更新检查、关于页手动检查、双语更新说明及对应平台安装包入口。
- GitHub 未认证 API 配额耗尽时自动回退到公开 Release 页面，避免检查更新直接返回 HTTP 403。

### English

- Added system, dark, and light appearance modes, including native-window theme synchronisation.
- Made full mode frameless and added a minimize control next to Compact.
- Compact mode now hides the header, drags from any non-control surface, prevents accidental text selection, and exposes minimize/restore controls.
- Compact window dimensions are persisted continuously and restored on the next compact transition.
- Added a setting and compact list for up to three pending todos.
- New todos default to today's date while remaining valid without a reminder time.
- Earned Today now supports a configurable currency symbol, defaulting to `¥`.
- Windows notifications launch in a hidden process so no blank console window appears.
- Weather now uses tighter timeouts, transient-error retries, and a persisted last-known offline fallback.
- Removed the white outer matte from PNG and installer icons while preserving transparency.
- Added daily GitHub Releases checks, manual checks in About, bilingual release details, and a matching platform-package link.
- Added a public Releases-page fallback when GitHub's unauthenticated API quota is exhausted, avoiding HTTP 403 update failures.

## [0.5.0] - 2026-07-19

### 中文

- 新增可持久化的 25、50、90 分钟专注模式，结束时持续提醒休息。
- 精简模式调整为 2×2 布局，支持手动缩放并按比例调整卡片内容。
- 新增天气、今日已赚、下班倒计时和工作日进度。
- 月薪未设置或为零时隐藏“今日已赚”。
- 提醒到点后强制置前、多颜色闪烁并重复播放简短音效，直到确认。
- 修复 macOS 提醒窗口未置前和日期/时间控件混用问题。
- 新增中英文界面、系统语言跟随、关于页、版本号、作者邮箱及应用图标。
- 新增 macOS Apple Silicon + Intel 通用构建与 Windows x64 安装流程。

### English

- Added persisted 25, 50, and 90-minute focus sessions with continuous break reminders.
- Reworked compact mode into a resizable 2×2 layout with proportional card scaling.
- Added weather, earned-today estimate, off-work countdown, and workday progress.
- The earnings card now hides when monthly salary is empty or zero.
- Due alerts now raise the app, flash multiple colours, and repeat a short sound until acknowledged.
- Fixed macOS foreground reminders and the mixed date/time picker behaviour.
- Added Chinese/English UI, system-language detection, About details, version, author email, and app icons.
- Added universal Apple Silicon + Intel macOS builds and a Windows x64 installer workflow.

[0.16.4]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.16.4
[0.16.3]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.16.3
[0.16.2]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.16.2
[0.16.1]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.16.1
[0.16.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.16.0
[0.15.1]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.15.1
[0.15.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.15.0
[0.14.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.14.0
[0.13.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.13.0
[0.12.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.12.0
[0.11.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.11.0
[0.10.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.10.0
[0.9.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.9.0
[0.8.1]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.8.1
[0.8.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.8.0
[0.7.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.7.0
[0.6.2]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.6.2
[0.6.1]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.6.1
[0.6.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.6.0
[0.5.0]: https://github.com/asbacklight-justin/workday-island/releases/tag/v0.5.0

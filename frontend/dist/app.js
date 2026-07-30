const translations = {
  zh: {
    appName: '工位岛', compact: '精简', expand: '展开', pin: '置顶', settings: '设置', about: '关于', minimize: '最小化', hideToTray: '隐藏到系统托盘', windowControls: '窗口控制',
    overview: '工作日概览', earningEstimate: '根据月薪、月计薪天数和今日工作进度估算', weatherData: '天气数据：Open-Meteo',
    earnedToday: '今日已赚', offworkCountdown: '下班倒计时', todayKicker: 'TODAY', myTodos: '我的待办',
    addTodo: '新建待办', pendingFilter: '待处理', allFilter: '全部', doneFilter: '已完成', nextReminder: '最近提醒',
    noReminder: '暂无提醒', reminderHint: '新建待办时可以指定时间', breakTitle: '专注也要呼吸',
    breakText: '每工作 50 分钟，记得起身活动一下。', testReminder: '测试系统提醒', newTodo: '新建待办',
    editTodo: '编辑待办', todoContent: '待办内容', todoPlaceholder: '比如：下午三点提交周报', reminderAt: '提醒时间',
    optional: '可选', note: '备注', notePlaceholder: '补充一点上下文', cancel: '取消', saveTodo: '保存待办',
    settingsTitle: '工作时间设置', workStart: '上班时间', workEnd: '下班时间', monthlySalary: '月薪',
    localOnly: '仅保存在本机', salaryPlaceholder: '例如 15000', salaryWorkdays: '月计薪天数', weatherCity: '天气城市',
    weatherPlaceholder: '例如：上海、杭州、Shenzhen', workdays: '工作日', language: '界面语言', followSystem: '跟随系统',
    keepOnTop: '窗口保持置顶', keepOnTopDesc: '让倒计时和待办始终触手可及', saveSettings: '保存设置',
    theme: '界面主题', darkTheme: '深色', lightTheme: '浅色', currency: '货币符号', compactTodos: '未完成待办',
    showCompactTodos: '精简模式展示待办', showCompactTodosDesc: '在核心面板下方展示未完成事项', noCompactTodos: '暂无未完成待办',
    compactOpacity: '悬浮窗透明度', compactOpacityDesc: '拖动时实时预览；精简模式、英语学习和股市小窗共用',
    aboutTitle: '关于工位岛', aboutDescription: '一座安静悬浮在桌面的工作小岛。', version: '版本', author: '作者', email: '邮箱', webApp: 'Web 端',
    updates: '应用更新', autoUpdateHint: '每天自动检查一次', updateIdle: '可手动检查 GitHub Releases 中的新版本',
    checkUpdates: '检查更新', checkingUpdates: '正在检查更新…', latestVersion: '已是最新版 v{version}',
    updateAvailable: '发现新版本 v{version}', downloadUpdate: '下载更新', openRelease: '查看发布页',
    updateAsset: '{name} · {size}', updateCheckFailed: '检查更新失败', noReleaseNotes: '本次更新暂无说明。',
    reminderDue: '待办到时间了', clickStop: '点击停止', stopReminder: '停止提醒闪烁', reminderDate: '提醒日期',
    reminderTime: '提醒时间', compactTitle: '切换精简模式', expandTitle: '展开完整面板', pinTitle: '让窗口保持在其他窗口前面',
    pending: '待办', emptyDoneTitle: '还没有已完成事项', emptyDoneText: '完成一个目标，再回来看看',
    emptyPendingTitle: '今天很轻盈', emptyPendingText: '点击「新建待办」记下一件事', noDue: '无提醒',
    restoreTodo: '恢复待办', completeTodo: '完成待办', edit: '编辑', delete: '删除', today: '今天',
    working: '工作中', restDay: '休息日', restWell: '好好休息', waiting: '等待开工', finished: '今日收工', offWork: '已下班',
    dailyLimit: '今日上限 {currency}{amount}', salaryPrompt: '在设置中填写月薪', chooseTime: '请选择具体提醒时间',
    chooseDate: '请选择提醒日期', todoUpdated: '待办已更新', todoAdded: '待办已添加', chooseWorkday: '请至少选择一个工作日',
    settingsSaved: '工作、词库、天气与语言设置已保存', compactOn: '已切换到精简模式', compactOff: '已展开完整面板',
    timeToTodo: '该处理待办啦', weatherUpdating: '天气更新中', currentWeather: '当前天气', weatherUnavailable: '天气暂不可用', weatherCached: '缓存于 {time}',
    notificationTest: '提醒功能测试', notificationSent: '系统提醒已发送', operationFailed: '操作失败',
    focusMode: '专注模式', focusHint: '选择一段不被打扰的时间，结束后提醒你休息。', focusing: '专注中',
    startFocus: '开始专注', stopFocus: '结束专注', focusStarted: '已开始 {minutes} 分钟专注', focusStopped: '本次专注已结束',
    focusEndsAt: '{time} 结束', focusFinished: '专注完成', takeBreak: '专注完成，请休息一下', focusDuration: '专注时长', minuteShort: '分',
    englishSource: '单词词库', englishSourceAll: '全部公共词库', englishSourceNCE2: '新概念英语第二册', englishSourceNCE3: '新概念英语第三册',
    englishSourceCET4: '大学英语四级', englishSourceCET6: '大学英语六级', englishSourceIELTS: '雅思核心词汇',
    stockMarket: '股市', stockWatchlist: '自选行情', stockCodePlaceholder: '股票代码，如 600519', addStock: '添加', stockLoading: '正在刷新行情…',
    stockUpdated: '{time} 更新', stockCached: '缓存于 {time}', stockNoData: '暂无自选股票', stockDisclaimer: '东方财富 · 数据仅供参考', removeStock: '删除自选股', stockAdded: '已添加自选股',
    workCloud: '工作云盘', cloudNotLoggedIn: '未登录', cloudLoginTitle: '登录后使用工作云盘', cloudLoginHint: '工作云盘与实时聊天共享工位岛账号。', goToAccountLogin: '前往账号登录',
    used: '已使用', personalStorage: '个人存储空间', remaining: '剩余', uploadFile: '上传文件', newFolder: '新建目录', cloudIsolationHint: '文件按当前账号独立存储，并与 Backlight 网盘保持一致。',
    searchCurrentFolder: '搜索当前目录', refresh: '刷新', allFiles: '全部文件', recentlyModified: '最近修改优先', folder: '文件夹', file: '文件',
    rename: '重命名', delete: '删除', download: '下载', cloudEmpty: '这个目录还是空的', cloudLoading: '正在读取云盘…', cloudItems: '{count} 项', cloudUploadSuccess: '文件上传成功',
    cloudDownloadSuccess: '文件已保存', cloudFolderCreated: '目录创建成功', cloudRenamed: '重命名成功', cloudDeleted: '删除成功', cloudFolderName: '目录名称', cloudNewName: '新名称',
    cloudCreateFolderTitle: '新建目录', cloudRenameTitle: '重命名', cloudCreate: '创建', cloudSave: '保存', cloudNameRequired: '请输入名称',
    cloudDeleteTitle: '删除项目', cloudDeleteConfirm: '确定删除“{name}”吗？目录必须为空才能删除。', cloudLoginExpired: '登录已过期，请重新登录', unlimited: '不限容量',
    universalTranslator: '全能翻译', translatorPage: '翻译页面', translatorLoginTitle: '登录后使用全能翻译', translatorLoginHint: '翻译额度和历史记录与当前工位岛账号绑定。', textTranslation: '文本翻译', translationHistory: '翻译历史',
    todayTranslationQuota: '今日翻译额度', usedToday: '今日已用', dailyQuota: '今日总额度', remainingToday: '今日剩余', sourceLanguage: '源语言', targetLanguage: '目标语言',
    sourceText: '原文', clear: '清空', translationPlaceholder: '输入要翻译的文本，支持多段落和自动检测源语言', translationQuotaInsufficient: '超过今日剩余额度',
    translationResult: '翻译结果', copyResult: '复制结果', noTranslationResult: '暂无翻译结果', translationPrivacyHint: '文本会发送到 Backlight 翻译服务，并保存到当前账号的翻译历史。',
    startTranslation: '开始翻译', translating: '翻译中…', translationComplete: '翻译完成', translationCopied: '译文已复制', swapLanguages: '交换语言', autoDetectCannotSwap: '自动检测不能直接交换，请先选择具体源语言',
    translationHistorySearch: '搜索原文或译文', search: '搜索', batchDelete: '批量删除', exportExcel: '导出 Excel', selectAll: '全选', languagePair: '语言', time: '时间', operation: '操作',
    translationHistoryLoading: '正在读取翻译历史…', noTranslationHistory: '暂无翻译历史', translationHistoryDeleted: '翻译历史已删除', translationHistoryBatchDeleted: '已删除选中的翻译历史', translationHistoryExported: '翻译历史已导出',
    confirmDeleteTranslation: '确定删除这条翻译历史吗？', confirmBatchDeleteTranslation: '确定删除选中的 {count} 条翻译历史吗？', totalRecords: '共 {count} 条',
    languageAuto: '自动检测', languageZh: '中文', languageEn: '英文', languageJa: '日语', languageKo: '韩语', languageFr: '法语', languageDe: '德语', languageEs: '西班牙语', languageRu: '俄语', languagePt: '葡萄牙语', languageAr: '阿拉伯语',
    account: '账号', accountCenter: '账号中心', accountLogin: '登录', accountLoginTitle: '登录工位岛', accountLoginHint: '一次登录即可使用 AI 对话、实时聊天、好友、工作云盘和全能翻译。', accountSecurityHint: '密码仅用于本次登录，不会保存在本机。', signIn: '登录账号', signingIn: '正在登录…', signedOut: '未登录', accountSignedIn: '已登录', signOutAll: '退出账号', signingOut: '正在退出…', signOutHint: '退出后，AI 对话、实时聊天、工作云盘和全能翻译会同时退出。', loginSuccess: '登录成功', logoutSuccess: '已退出账号', ready: '已就绪', myAccount: '我的账号', chatLoginRequired: '登录账号后即可使用好友和实时聊天。', aiChat: 'AI 对话', aiAvailableTitle: 'AI 对话现已可用', aiAvailableHint: '登录后即可使用 DeepSeek 智能助手',
    realtimeChat: '实时聊天', chat: '实时聊天', backToDashboard: '返回工作台', offline: '已下线', online: '已上线', connecting: '正在连接', authenticating: '正在认证', reconnecting: '正在重连', authFailed: '需要重新连接',
    myRealtimeIdentity: '我的实时身份', copyId: '复制 ID', identityHint: '首次上线会自动创建安全设备身份，私钥仅保存在系统安全存储中。', nickname: '昵称', nicknamePlaceholder: '例如：小明的桌面',
    deviceLogin: '一键登录', passwordLogin: '账号密码', passwordLoginHint: '使用已有账号登录；密码仅用于当前在线会话，不会保存到本机。', accountUsername: '用户名', accountPassword: '密码',
    accountUsernamePlaceholder: '请输入用户名', accountPasswordPlaceholder: '请输入密码', loginOnline: '登录并上线', deviceAuth: '设备登录', passwordAuth: '账号登录',
    noAccountYet: '还没有账号？', registerNow: '注册', registerAccount: '注册工位岛账号', registerAccountHint: '注册后可使用 AI 对话、实时聊天、好友、工作云盘和全能翻译。',
    registerUsernamePlaceholder: '3–20 位字母、数字或下划线', registerNicknamePlaceholder: '2–20 个字符', registerPasswordPlaceholder: '6–20 个字符',
    confirmPassword: '确认密码', confirmPasswordPlaceholder: '再次输入密码', phone: '手机号', emailPlaceholder: 'name@example.com', phonePlaceholder: '中国大陆手机号',
    inviteCode: '邀请码', inviteCodePlaceholder: '有邀请码时填写', inviteHint: '邀请码不必填写；填写后会关联邀请人。',
    registrationPrivacy: '注册资料会提交到 Backlight 账号服务；密码不会保存在本机。', createAccount: '创建账号', registering: '注册中…',
    registrationSuccess: '注册成功，请使用新账号登录', usernameRule: '用户名须为 3–20 位字母、数字或下划线', nicknameRule: '昵称长度须为 2–20 个字符',
    passwordRule: '密码长度须为 6–20 个字符', passwordMismatch: '两次输入的密码不一致', emailInvalid: '邮箱格式不正确', phoneInvalid: '手机号格式不正确',
    myUserId: '我的用户 ID', goOnline: '一键上线', goOffline: '下线', resetIdentity: '重置实时身份', resetConfirm: '重置后会创建新的用户 ID，当前本地聊天记录也会清除。确定继续吗？',
    chatTab: '聊天', friendManagement: '好友管理', friendChats: '好友会话', manageFriends: '管理', chooseFriendHint: '选择一位好友开始聊天。', temporaryChat: '通过用户 ID 临时会话', temporaryChatHint: '未添加好友时，也可以输入用户 ID 发起临时会话。',
    addFriend: '添加好友', friendManagementHint: '使用精确用户名或用户 ID 查找并发送好友申请。', friendAccount: '用户名或用户 ID', requestMessage: '申请留言', friendsRequireOnline: '上线后即可管理好友和处理申请。',
    friends: '好友', refreshFriends: '刷新', friendTargetPlaceholder: '精确用户名或用户 ID', friendRequestMessagePlaceholder: '申请留言（可选）', sendFriendRequest: '发送申请',
    pendingFriendRequests: '收到的申请', friendList: '好友列表', noPendingFriendRequests: '暂无待处理申请', noFriends: '暂无好友', acceptFriend: '同意', rejectFriend: '拒绝',
    removeFriend: '删除好友', removeFriendConfirm: '确定删除好友“{name}”吗？', friendRequestSent: '好友申请已发送', friendRequestReceived: '收到 {name} 的好友申请', friendAccepted: '已添加好友', friendRejected: '已拒绝好友申请', friendRemoved: '好友已删除',
    peerUserId: '对方用户 ID', peerHint: '输入对方分享的用户 ID，即可聊天和发送窗口互动。', effectMessage: '互动提示语（可选）', effectMessagePlaceholder: '窗口互动提示语（可选，例如：起来活动一下啦）', shakeWindow: '抖一抖', flashWindow: '闪一闪',
    conversation: '会话', offlineDeliveryHint: '对方离线时消息会在其下次上线后送达', choosePeer: '从左侧选择好友开始聊天', noMessages: '和 {name} 还没有消息', chatPrivacy: '消息经远程实时服务传输，并保存在本机聊天记录中。',
    chatPlaceholder: '输入消息，Enter 发送，Shift+Enter 换行', send: '发送', idCopied: '用户 ID 已复制', identityReset: '实时身份已重置', connectedRealtime: '实时服务已上线', disconnectedRealtime: '已从实时服务下线',
    invalidPeer: '请输入有效的对方用户 ID', effectSent: '窗口互动已发送', queuedForPeer: '对方当前离线，消息将在其上线后送达', sentOnline: '已在线送达', savedOffline: '已保存待送达',
    incomingShake: '{name} 抖了抖你的窗口', incomingFlash: '{name} 闪了闪你的窗口', stopWindowEffect: '停止窗口互动',
    shakeRecord: '抖一抖', flashRecord: '闪一闪', youSentEffect: '你发送了{effect}', peerSentEffect: '{name}发送了{effect}',
    englishLearning: '偷偷学英语', englishCenterTitle: '英语学习中心', englishNotebook: '单词本', englishWrongBook: '错题本', compactEnglishStudy: '精简学习',
    englishNotebookHint: '五种学习模式中已经刷过的单词都会保存在这里。', englishWrongBookHint: '英译中、中译英和拼写模式答错的单词会自动记录。',
    wordsStudied: '已学单词', wrongWords: '错题单词', totalViews: '累计学习', searchEnglishWord: '搜索单词、释义或例句', allModes: '全部模式',
    seenTimes: '学习 {count} 次', wrongTimes: '答错 {count} 次', lastStudied: '最近学习', lastAnswer: '上次答案', correctAnswerLabel: '正确答案',
    noEnglishWords: '单词本还是空的，点击“精简学习”开始刷词。', noEnglishWrongWords: '还没有错题，继续保持。', filterMode: '学习模式',
    englishStudyMode: '单词学习', englishSentenceMode: '例句学习', englishQuizMode: '英译中 4选1', englishChineseMode: '中译英 4选1', englishSpellingMode: '拼完整单词', englishLoading: '正在取词…',
    englishLoadFailed: '取词失败', retry: '重试', nextWord: '下一个', answerCorrect: '回答正确', answerWrong: '回答错误', previousWord: '上一词',
    englishSpellingPlaceholder: '输入完整英文单词', checkAnswer: '检查', enterSpelling: '请输入完整英文单词', translatingExample: '正在获取中文例句…',
    exampleUnavailable: '暂无英文例句', exampleTranslationUnavailable: '中文释义：{meaning}',
    weekdays: ['一','二','三','四','五','六','日']
  },
  en: {
    appName: 'Workday Island', compact: 'Compact', expand: 'Expand', pin: 'Pin', settings: 'Settings', about: 'About', minimize: 'Minimize', hideToTray: 'Hide to system tray', windowControls: 'Window controls',
    overview: 'Workday overview', earningEstimate: 'Estimated from salary, paid days, and today’s progress', weatherData: 'Weather data: Open-Meteo',
    earnedToday: 'EARNED TODAY', offworkCountdown: 'OFF-WORK COUNTDOWN', todayKicker: 'TODAY', myTodos: 'My Todos',
    addTodo: 'New Todo', pendingFilter: 'Pending', allFilter: 'All', doneFilter: 'Completed', nextReminder: 'Next Reminder',
    noReminder: 'No reminders', reminderHint: 'Set a time when creating a todo', breakTitle: 'Remember to breathe',
    breakText: 'Stand up and move after every 50 minutes of work.', testReminder: 'Test Reminder', newTodo: 'New Todo',
    editTodo: 'Edit Todo', todoContent: 'Todo', todoPlaceholder: 'e.g. Submit the weekly report at 3 PM', reminderAt: 'Reminder',
    optional: 'Optional', note: 'Note', notePlaceholder: 'Add some context', cancel: 'Cancel', saveTodo: 'Save Todo',
    settingsTitle: 'Work Settings', workStart: 'Work starts', workEnd: 'Work ends', monthlySalary: 'Monthly salary',
    localOnly: 'Stored locally', salaryPlaceholder: 'e.g. 15000', salaryWorkdays: 'Paid days / month', weatherCity: 'Weather city',
    weatherPlaceholder: 'e.g. Shanghai, Hangzhou, Shenzhen', workdays: 'Workdays', language: 'Language', followSystem: 'Follow system',
    keepOnTop: 'Keep window on top', keepOnTopDesc: 'Keep your countdown and todos within reach', saveSettings: 'Save Settings',
    theme: 'Theme', darkTheme: 'Dark', lightTheme: 'Light', currency: 'Currency symbol', compactTodos: 'Pending todos',
    showCompactTodos: 'Show todos in compact mode', showCompactTodosDesc: 'Show pending items below the core cards', noCompactTodos: 'No pending todos',
    compactOpacity: 'Floating window opacity', compactOpacityDesc: 'Live preview; shared by compact mode, English learning, and the stock ticker',
    aboutTitle: 'About Workday Island', aboutDescription: 'A quiet little work island floating on your desktop.', version: 'Version', author: 'Author', email: 'Email', webApp: 'Web App',
    updates: 'App updates', autoUpdateHint: 'Checked automatically once a day', updateIdle: 'Check GitHub Releases for a newer version',
    checkUpdates: 'Check for Updates', checkingUpdates: 'Checking for updates…', latestVersion: 'You’re up to date — v{version}',
    updateAvailable: 'Version v{version} is available', downloadUpdate: 'Download Update', openRelease: 'View Release',
    updateAsset: '{name} · {size}', updateCheckFailed: 'Unable to check for updates', noReleaseNotes: 'No release notes were provided.',
    reminderDue: 'A TODO IS DUE', clickStop: 'Click to stop', stopReminder: 'Stop reminder flashing', reminderDate: 'Reminder date',
    reminderTime: 'Reminder time', compactTitle: 'Switch to compact mode', expandTitle: 'Expand the full panel', pinTitle: 'Keep this window above other windows',
    pending: 'todos', emptyDoneTitle: 'Nothing completed yet', emptyDoneText: 'Finish a goal, then come back here',
    emptyPendingTitle: 'A light day so far', emptyPendingText: 'Click “New Todo” to capture something', noDue: 'No reminder',
    restoreTodo: 'Restore todo', completeTodo: 'Complete todo', edit: 'Edit', delete: 'Delete', today: 'Today',
    working: 'Working', restDay: 'Rest day', restWell: 'Enjoy your day', waiting: 'Starts in', finished: 'Finished', offWork: 'Off work',
    dailyLimit: 'Daily limit {currency}{amount}', salaryPrompt: 'Add your monthly salary in Settings', chooseTime: 'Choose a reminder time',
    chooseDate: 'Choose a reminder date', todoUpdated: 'Todo updated', todoAdded: 'Todo added', chooseWorkday: 'Select at least one workday',
    settingsSaved: 'Work, vocabulary, weather, and language settings saved', compactOn: 'Compact mode enabled', compactOff: 'Full panel restored',
    timeToTodo: 'Time to handle this todo', weatherUpdating: 'Updating weather', currentWeather: 'Current weather', weatherUnavailable: 'Weather unavailable', weatherCached: 'Cached at {time}',
    notificationTest: 'Reminder test', notificationSent: 'System reminder sent', operationFailed: 'Operation failed',
    focusMode: 'Focus Mode', focusHint: 'Choose an uninterrupted block. We’ll remind you to rest when it ends.', focusing: 'Focusing',
    startFocus: 'Start Focus', stopFocus: 'End Focus', focusStarted: '{minutes}-minute focus started', focusStopped: 'Focus session ended',
    focusEndsAt: 'Ends at {time}', focusFinished: 'FOCUS COMPLETE', takeBreak: 'Focus complete — take a break', focusDuration: 'Focus duration', minuteShort: 'min',
    englishSource: 'Word library', englishSourceAll: 'All public words', englishSourceNCE2: 'New Concept English 2', englishSourceNCE3: 'New Concept English 3',
    englishSourceCET4: 'CET-4', englishSourceCET6: 'CET-6', englishSourceIELTS: 'IELTS core vocabulary',
    stockMarket: 'Stocks', stockWatchlist: 'Watchlist', stockCodePlaceholder: 'A-share code, e.g. 600519', addStock: 'Add', stockLoading: 'Refreshing quotes…',
    stockUpdated: 'Updated {time}', stockCached: 'Cached at {time}', stockNoData: 'No watched stocks', stockDisclaimer: 'Eastmoney · For reference only', removeStock: 'Remove from watchlist', stockAdded: 'Stock added',
    workCloud: 'Work Cloud', cloudNotLoggedIn: 'Signed out', cloudLoginTitle: 'Sign in to use Work Cloud', cloudLoginHint: 'Work Cloud and realtime chat share your Workday Island account.', goToAccountLogin: 'Go to account login',
    used: 'Used', personalStorage: 'Personal storage', remaining: 'Remaining', uploadFile: 'Upload file', newFolder: 'New folder', cloudIsolationHint: 'Files are isolated by account and stay in sync with your Backlight drive.',
    searchCurrentFolder: 'Search this folder', refresh: 'Refresh', allFiles: 'All files', recentlyModified: 'Recently modified first', folder: 'Folder', file: 'File',
    rename: 'Rename', delete: 'Delete', download: 'Download', cloudEmpty: 'This folder is empty', cloudLoading: 'Loading cloud drive…', cloudItems: '{count} items', cloudUploadSuccess: 'File uploaded',
    cloudDownloadSuccess: 'File saved', cloudFolderCreated: 'Folder created', cloudRenamed: 'Renamed', cloudDeleted: 'Deleted', cloudFolderName: 'Folder name', cloudNewName: 'New name',
    cloudCreateFolderTitle: 'New folder', cloudRenameTitle: 'Rename', cloudCreate: 'Create', cloudSave: 'Save', cloudNameRequired: 'Enter a name',
    cloudDeleteTitle: 'Delete item', cloudDeleteConfirm: 'Delete “{name}”? Folders must be empty before deletion.', cloudLoginExpired: 'Your session expired. Please sign in again.', unlimited: 'Unlimited',
    universalTranslator: 'Universal Translator', translatorPage: 'Translator sections', translatorLoginTitle: 'Sign in to use Universal Translator', translatorLoginHint: 'Translation quota and history belong to your current Workday Island account.', textTranslation: 'Text translation', translationHistory: 'Translation history',
    todayTranslationQuota: 'Today’s translation quota', usedToday: 'Used today', dailyQuota: 'Daily quota', remainingToday: 'Remaining today', sourceLanguage: 'Source language', targetLanguage: 'Target language',
    sourceText: 'Source', clear: 'Clear', translationPlaceholder: 'Enter text to translate. Multiple paragraphs and automatic language detection are supported.', translationQuotaInsufficient: 'Exceeds today’s remaining quota',
    translationResult: 'Translation', copyResult: 'Copy result', noTranslationResult: 'No translation yet', translationPrivacyHint: 'Text is sent to the Backlight translation service and saved in this account’s translation history.',
    startTranslation: 'Translate', translating: 'Translating…', translationComplete: 'Translation complete', translationCopied: 'Translation copied', swapLanguages: 'Swap languages', autoDetectCannotSwap: 'Automatic detection cannot be swapped. Choose a specific source language first.',
    translationHistorySearch: 'Search source or translation', search: 'Search', batchDelete: 'Delete selected', exportExcel: 'Export Excel', selectAll: 'Select all', languagePair: 'Languages', time: 'Time', operation: 'Action',
    translationHistoryLoading: 'Loading translation history…', noTranslationHistory: 'No translation history', translationHistoryDeleted: 'Translation history deleted', translationHistoryBatchDeleted: 'Selected translation history deleted', translationHistoryExported: 'Translation history exported',
    confirmDeleteTranslation: 'Delete this translation history entry?', confirmBatchDeleteTranslation: 'Delete the selected {count} history entries?', totalRecords: '{count} records',
    languageAuto: 'Auto detect', languageZh: 'Chinese', languageEn: 'English', languageJa: 'Japanese', languageKo: 'Korean', languageFr: 'French', languageDe: 'German', languageEs: 'Spanish', languageRu: 'Russian', languagePt: 'Portuguese', languageAr: 'Arabic',
    account: 'Account', accountCenter: 'Account Center', accountLogin: 'Sign In', accountLoginTitle: 'Sign in to Workday Island', accountLoginHint: 'One sign-in unlocks AI Chat, realtime chat, friends, Work Cloud, and Universal Translator.', accountSecurityHint: 'Your password is used only for this session and is not stored locally.', signIn: 'Sign In', signingIn: 'Signing in…', signedOut: 'Signed out', accountSignedIn: 'Signed in', signOutAll: 'Sign Out', signingOut: 'Signing out…', signOutHint: 'Signing out disconnects AI Chat, realtime chat, Work Cloud, and Universal Translator.', loginSuccess: 'Signed in', logoutSuccess: 'Signed out', ready: 'Ready', myAccount: 'My account', chatLoginRequired: 'Sign in to use friends and realtime chat.', aiChat: 'AI Chat', aiAvailableTitle: 'AI Chat is now available', aiAvailableHint: 'Sign in to use the DeepSeek assistant',
    realtimeChat: 'Realtime Chat', chat: 'Realtime chat', backToDashboard: 'Back to dashboard', offline: 'Offline', online: 'Online', connecting: 'Connecting', authenticating: 'Authenticating', reconnecting: 'Reconnecting', authFailed: 'Reconnect required',
    myRealtimeIdentity: 'My realtime identity', copyId: 'Copy ID', identityHint: 'Your first connection creates a secure device identity. Its private key stays in system secure storage.', nickname: 'Nickname', nicknamePlaceholder: 'e.g. Alex’s desktop',
    deviceLogin: 'One-click login', passwordLogin: 'Username & password', passwordLoginHint: 'Sign in with an existing account. Your password is kept only for this online session and is never saved locally.', accountUsername: 'Username', accountPassword: 'Password',
    accountUsernamePlaceholder: 'Enter username', accountPasswordPlaceholder: 'Enter password', loginOnline: 'Sign In & Go Online', deviceAuth: 'Device login', passwordAuth: 'Account login',
    noAccountYet: 'No account yet?', registerNow: 'Register', registerAccount: 'Create a Workday Island account', registerAccountHint: 'Use one account for AI Chat, realtime chat, friends, Work Cloud, and Universal Translator.',
    registerUsernamePlaceholder: '3–20 letters, numbers, or underscores', registerNicknamePlaceholder: '2–20 characters', registerPasswordPlaceholder: '6–20 characters',
    confirmPassword: 'Confirm password', confirmPasswordPlaceholder: 'Enter the password again', phone: 'Phone', emailPlaceholder: 'name@example.com', phonePlaceholder: 'Mainland China mobile number',
    inviteCode: 'Invite code', inviteCodePlaceholder: 'Enter one if you have it', inviteHint: 'The invite code is optional. If supplied, it links your inviter.',
    registrationPrivacy: 'Registration details are sent to the Backlight account service. Your password is not stored locally.', createAccount: 'Create Account', registering: 'Creating…',
    registrationSuccess: 'Account created. Sign in with your new credentials.', usernameRule: 'Username must be 3–20 letters, numbers, or underscores', nicknameRule: 'Nickname must be 2–20 characters',
    passwordRule: 'Password must be 6–20 characters', passwordMismatch: 'The two passwords do not match', emailInvalid: 'Enter a valid email address', phoneInvalid: 'Enter a valid mainland China mobile number',
    myUserId: 'My user ID', goOnline: 'Go Online', goOffline: 'Go Offline', resetIdentity: 'Reset realtime identity', resetConfirm: 'Resetting creates a new user ID and clears local chat history. Continue?',
    chatTab: 'Chat', friendManagement: 'Friends', friendChats: 'Friend chats', manageFriends: 'Manage', chooseFriendHint: 'Choose a friend to start chatting.', temporaryChat: 'Temporary chat by user ID', temporaryChatHint: 'You can still start a temporary chat by entering a user ID.',
    addFriend: 'Add Friend', friendManagementHint: 'Find someone by exact username or user ID and send a friend request.', friendAccount: 'Username or user ID', requestMessage: 'Request message', friendsRequireOnline: 'Go online to manage friends and respond to requests.',
    friends: 'Friends', refreshFriends: 'Refresh', friendTargetPlaceholder: 'Exact username or user ID', friendRequestMessagePlaceholder: 'Request message (optional)', sendFriendRequest: 'Send Request',
    pendingFriendRequests: 'Incoming requests', friendList: 'Friend list', noPendingFriendRequests: 'No pending requests', noFriends: 'No friends yet', acceptFriend: 'Accept', rejectFriend: 'Reject',
    removeFriend: 'Remove friend', removeFriendConfirm: 'Remove “{name}” from your friends?', friendRequestSent: 'Friend request sent', friendRequestReceived: 'Friend request from {name}', friendAccepted: 'Friend added', friendRejected: 'Friend request rejected', friendRemoved: 'Friend removed',
    peerUserId: 'Peer user ID', peerHint: 'Enter the user ID shared by the other person to chat or send a window interaction.', effectMessage: 'Interaction message (optional)', effectMessagePlaceholder: 'Window interaction message (optional)', shakeWindow: 'Shake', flashWindow: 'Flash',
    conversation: 'Conversation', offlineDeliveryHint: 'Offline messages are delivered the next time the other person connects', choosePeer: 'Choose a friend on the left to start chatting', noMessages: 'No messages with {name} yet', chatPrivacy: 'Messages pass through the remote realtime service and are kept in local chat history.',
    chatPlaceholder: 'Type a message. Enter to send; Shift+Enter for a new line', send: 'Send', idCopied: 'User ID copied', identityReset: 'Realtime identity reset', connectedRealtime: 'Realtime service is online', disconnectedRealtime: 'Realtime service is offline',
    invalidPeer: 'Enter a valid peer user ID', effectSent: 'Window interaction sent', queuedForPeer: 'The peer is offline; this will be delivered when they reconnect', sentOnline: 'Delivered online', savedOffline: 'Saved for delivery',
    incomingShake: '{name} shook your window', incomingFlash: '{name} flashed your window', stopWindowEffect: 'Stop window interaction',
    shakeRecord: 'Shake', flashRecord: 'Flash', youSentEffect: 'You sent {effect}', peerSentEffect: '{name} sent {effect}',
    englishLearning: 'Quiet English', englishCenterTitle: 'English Learning', englishNotebook: 'Word Book', englishWrongBook: 'Wrong Answers', compactEnglishStudy: 'Compact Study',
    englishNotebookHint: 'Words viewed in any of the five study modes are collected here.', englishWrongBookHint: 'Wrong answers from EN → CN, CN → EN, and spelling are recorded automatically.',
    wordsStudied: 'Words studied', wrongWords: 'Wrong words', totalViews: 'Total views', searchEnglishWord: 'Search word, meaning, or example', allModes: 'All modes',
    seenTimes: 'Studied {count} times', wrongTimes: '{count} wrong', lastStudied: 'Last studied', lastAnswer: 'Last answer', correctAnswerLabel: 'Correct answer',
    noEnglishWords: 'Your word book is empty. Start with Compact Study.', noEnglishWrongWords: 'No wrong answers yet. Keep it up.', filterMode: 'Study mode',
    englishStudyMode: 'Word study', englishSentenceMode: 'Example sentences', englishQuizMode: 'EN → CN · 4 choices', englishChineseMode: 'CN → EN · 4 choices', englishSpellingMode: 'Spell the word', englishLoading: 'Fetching words…',
    englishLoadFailed: 'Unable to fetch words', retry: 'Retry', nextWord: 'Next word', answerCorrect: 'Correct', answerWrong: 'Wrong', previousWord: 'Previous',
    englishSpellingPlaceholder: 'Type the complete English word', checkAnswer: 'Check', enterSpelling: 'Type the complete English word', translatingExample: 'Fetching the Chinese sentence…',
    exampleUnavailable: 'No example sentence', exampleTranslationUnavailable: 'Meaning: {meaning}',
    weekdays: ['M','T','W','T','F','S','S']
  }
};

const state = {
  todos: [],
  settings: { alwaysOnTop: true, compactMode: false, showCompactTodos: false, compactOpacity: 100, compactWidth: 520, compactHeight: 350, workStart: '09:00', workEnd: '18:00', workdays: [1, 2, 3, 4, 5], monthlySalary: 0, salaryWorkdays: 21.75, currency: '¥', weatherCity: '上海', language: 'system', theme: 'system', englishMode: 'study', englishSource: 'nce2' },
  appInfo: {name: 'Workday Island', version: '0.11.0', author: 'Backlight Studio', email: 'asbacklight@gmail.com'},
  focus: {active: false, durationMinutes: 50, startedAt: null, endsAt: null, completedAt: null},
  weather: null,
  filter: 'pending',
  accountOpen: false,
  accountMode: 'login',
  account: {loggedIn: false, user: null},
  aiChatOpen: false,
  aiChat: {
    conversations: [], messages: [], current: null, keyword: '', archived: false,
    models: [
      {id:'deepseek-v4-flash',name:'DeepSeek V4 Flash',badge:'极速',configured:false,allowed:true,available:false},
      {id:'deepseek-v4-pro',name:'DeepSeek V4 Pro',badge:'深度',configured:false,allowed:true,available:false}
    ],
    usage: {conversation_count:0,message_count:0,today_tokens:0,total_tokens:0},
    usageLoaded: false,
    policy: {allowed_models:[],daily_token_limit:0,total_token_limit:0,daily_used:0,total_used:0,quota_exceeded:false,quota_message:'',source_type:'default',source_name:'系统默认'},
    preferences: {model:'deepseek-v4-flash',thinking_enabled:true,system_prompt:''},
    loadingConversations: false, loadingMessages: false, generating: false, requestId: '', settingsOpen: false
  },
  realtime: {status: 'offline', desiredOnline: false, lastError: '', authMode: 'device', identity: null, messages: [], friends: [], friendRequests: []},
  chatOpen: false,
  chatSection: 'conversation',
  chatUnread: 0,
  latestIncomingPeer: 0,
  stockOpen: false,
  stocks: {quotes: [], updatedAt: null, source: '东方财富', stale: false, error: ''},
  cloudOpen: false,
  cloud: {session: {loggedIn: false, user: null}, quota: {}, items: [], total: 0, page: 1, pageSize: 50, folders: [], keyword: '', busy: false, editorMode: 'create', editorTarget: null, deleteTarget: null},
  translatorOpen: false,
  translator: {tab: 'text', quota: {}, result: '', history: [], total: 0, page: 1, pageSize: 20, keyword: '', busy: false, historyBusy: false, selected: []},
  englishCenterOpen: false,
  englishNotebook: {tab: 'words', words: [], wrongWords: [], keyword: '', mode: 'all', busy: false},
  englishOpen: false,
  english: {mode: 'study', sessionId: 0, questions: [], index: 0, shownAt: 0, busy: false, answered: 0, correct: 0, previous: null}
};

const api = window.go?.main?.App ?? createPreviewAPI();
const hasNativeAPI = Boolean(window.go?.main?.App);
let activeReminderSequence = 0;
let lastReminderSequence = 0;
let reminderSoundTimer = 0;
let reminderAudioContext = null;
let selectedFocusMinutes = 50;
let selectedRealtimePeerMode = ['friend', 'temporary'].includes(localStorage.getItem('workdayIsland.chatPeerMode')) ? localStorage.getItem('workdayIsland.chatPeerMode') : '';
let compactResizeTimer = 0;
let availableUpdate = null;
let englishRecordWrites = Promise.resolve();
let updateCheckResult = null;
let remoteEffectTimer = 0;
let realtimeBusy = false;
let accountBusy = false;
let realtimeRegistrationBusy = false;
const receivedRealtimePushIDs = new Set();
let stockBusy = false;
let stockRefreshTimer = 0;
let englishFitTimer = 0;
let aiSearchTimer = 0;
let aiRenderFrame = 0;
const systemTheme = window.matchMedia?.('(prefers-color-scheme: light)');
const translatorLanguages = [
  {value:'auto', key:'languageAuto'}, {value:'zh', key:'languageZh'}, {value:'en', key:'languageEn'},
  {value:'ja', key:'languageJa'}, {value:'ko', key:'languageKo'}, {value:'fr', key:'languageFr'},
  {value:'de', key:'languageDe'}, {value:'es', key:'languageEs'}, {value:'ru', key:'languageRu'},
  {value:'pt', key:'languagePt'}, {value:'ar', key:'languageAr'}
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

function currentLanguage() {
  if (state.settings.language === 'zh' || state.settings.language === 'en') return state.settings.language;
  return (navigator.languages?.[0] || navigator.language || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function locale() { return currentLanguage() === 'zh' ? 'zh-CN' : 'en-US'; }
function normaliseWorkdays(value) {
  const days = Array.isArray(value) ? value : [];
  const valid = [...new Set(days.map(Number).filter(day => Number.isInteger(day) && day >= 1 && day <= 7))];
  return valid.length ? valid.sort((a, b) => a - b) : [1, 2, 3, 4, 5];
}
function normaliseEnglishMode(value) {
  return ['study', 'sentence', 'quiz', 'chinese', 'spelling'].includes(value) ? value : 'study';
}
function t(key, replacements = {}) {
  let value = translations[currentLanguage()][key] ?? translations.zh[key] ?? key;
  if (typeof value !== 'string') return value;
  Object.entries(replacements).forEach(([name, replacement]) => { value = value.replace(`{${name}}`, replacement); });
  return value;
}

function applyTranslations() {
  const language = currentLanguage();
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = language === 'zh' ? '工位岛 · Workday Island' : 'Workday Island';
  $$('[data-i18n]').forEach(element => { element.textContent = t(element.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(element => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  $('#open-settings').setAttribute('aria-label', t('settings'));
  $('#open-settings').title = t('settings');
  $('#open-about').setAttribute('aria-label', t('about'));
  $('#open-about').title = t('about');
  $('#open-chat').setAttribute('aria-label', t('chat'));
  $('#open-chat').title = t('chat');
  $('#open-stocks').setAttribute('aria-label', t('stockMarket'));
  $('#open-stocks').title = t('stockMarket');
  $('#open-cloud').setAttribute('aria-label', t('workCloud'));
  $('#open-cloud').title = t('workCloud');
  $('#open-translator').setAttribute('aria-label', t('universalTranslator'));
  $('#open-translator').title = t('universalTranslator');
  $('#open-english').setAttribute('aria-label', t('englishLearning'));
  $('#open-english').title = t('englishLearning');
  $('#open-account').setAttribute('aria-label', t('account'));
  $('#open-account').title = t('account');
  ['#minimize-window', '#compact-minimize', '#minimize-english', '#minimize-stocks'].forEach(selector => {
    $(selector).setAttribute('aria-label', t('minimize'));
    $(selector).title = t('minimize');
  });
  $('#compact-expand').setAttribute('aria-label', t('expandTitle'));
  $('#compact-expand').title = t('expandTitle');
  $('#compact-window-controls').setAttribute('aria-label', t('windowControls'));
  $('#compact-todos').setAttribute('aria-label', t('compactTodos'));
  $('#english-page').setAttribute('aria-label', t('englishLearning'));
  $('#stock-page').setAttribute('aria-label', t('stockMarket'));
  $('#cloud-page').setAttribute('aria-label', t('workCloud'));
  $('#translator-page').setAttribute('aria-label', t('universalTranslator'));
  $('#translator-tabs').setAttribute('aria-label', t('translatorPage'));
  $('#account-page').setAttribute('aria-label', t('accountCenter'));
  $('#english-center-page').setAttribute('aria-label', t('englishCenterTitle'));
  $('#english-center-tabs').setAttribute('aria-label', t('englishCenterTitle'));
  $('#english-center-mode').setAttribute('aria-label', t('filterMode'));
  $('#close-english-center').setAttribute('aria-label', t('backToDashboard'));
  $('#close-english-center').title = t('backToDashboard');
  $('#open-english-compact').setAttribute('aria-label', t('compactEnglishStudy'));
  $('#open-english-compact').title = t('compactEnglishStudy');
  $('#close-english').setAttribute('aria-label', t('backToDashboard'));
  $('#close-english').title = t('backToDashboard');
  $('#close-stocks').setAttribute('aria-label', t('backToDashboard'));
  $('#close-stocks').title = t('backToDashboard');
  $('#close-cloud').setAttribute('aria-label', t('backToDashboard'));
  $('#close-cloud').title = t('backToDashboard');
  $('#close-translator').setAttribute('aria-label', t('backToDashboard'));
  $('#close-translator').title = t('backToDashboard');
  $('#swap-translation-languages').setAttribute('aria-label', t('swapLanguages'));
  $('#swap-translation-languages').title = t('swapLanguages');
  $('#close-account').setAttribute('aria-label', t('backToDashboard'));
  $('#close-account').title = t('backToDashboard');
  $('#next-english').setAttribute('aria-label', t('nextWord'));
  $('#next-english').title = t('nextWord');
  $('#close-window').setAttribute('aria-label', t('hideToTray'));
  $('#close-window').title = t('hideToTray');
  $('.pin-control').title = t('pinTitle');
  $('#todo-due-date').setAttribute('aria-label', t('reminderDate'));
  $('#todo-due-time').setAttribute('aria-label', t('reminderTime'));
  $('#reminder-alert').setAttribute('aria-label', t('stopReminder'));
  $('#remote-effect-alert').setAttribute('aria-label', t('stopWindowEffect'));
  $('.focus-presets').setAttribute('aria-label', t('focusDuration'));
  $('.island-grid').setAttribute('aria-label', t('overview'));
  $('.earnings-card').title = t('earningEstimate');
  $('.weather-card').title = t('weatherData');
  $('#app-version-badge').textContent = `v${state.appInfo.version}`;
  $('#about-version').textContent = state.appInfo.version;
  $('#email-author strong').textContent = state.appInfo.email;
  $('#open-web-app').setAttribute('aria-label', `${t('webApp')}: https://admin.asbacklight.cn/`);
  $('#open-web-app').title = 'https://admin.asbacklight.cn/';
  void api.SetTrayLanguage?.(language);
  renderAccountSession();
  renderTranslatorLanguageOptions();
  renderTranslatorSession();
  renderTranslator();
  renderEnglishNotebook();
  renderRealtime();
  renderStocks();
  if (updateCheckResult) renderUpdateInfo(updateCheckResult);
}

async function boot() {
  try {
    const [loaded, appInfo, account] = await Promise.all([
      api.GetState(),
      api.GetAppInfo(),
      api.GetAccountSession()
    ]);
    state.todos = loaded.todos ?? [];
    state.settings = {...state.settings, ...(loaded.settings ?? {})};
    state.focus = {...state.focus, ...(loaded.focus ?? {})};
    state.englishNotebook.words = loaded.englishWords ?? [];
    state.englishNotebook.wrongWords = loaded.englishWrongWords ?? [];
    state.appInfo = {...state.appInfo, ...(appInfo ?? {})};
    state.account = {...state.account, loggedIn: Boolean(account?.loggedIn), user: account?.user || null};
    state.cloud.session = {loggedIn: state.account.loggedIn, user: state.account.user};
    state.realtime = {...state.realtime, ...(account?.realtime ?? {})};
    (state.realtime.messages || []).forEach(message => {
      if (message?.messageId) receivedRealtimePushIDs.add(message.messageId);
    });
    $('#account-username').value = localStorage.getItem('workdayIsland.accountUsername') || '';
    $('#peer-user-id').value = selectedRealtimePeerMode ? (localStorage.getItem('workdayIsland.chatPeer') || '') : '';
    applyTheme();
    applyEnglishBackgroundOpacity();
    bindEvents();
    applyTranslations();
    renderAll();
    setInterval(updateClock, 1000);
    refreshWeather();
    setInterval(refreshWeather, 20 * 60 * 1000);
    checkActiveReminder();
    setInterval(checkActiveReminder, 700);
    checkForUpdates(false);
    window.runtime?.EventsOn?.('reminder:due', payload => {
      const alert = payload?.todo ? payload : {todo: payload, sequence: 0};
      if (alert.sequence) lastReminderSequence = alert.sequence;
      startReminderFlash(alert.todo, alert.sequence, alert.kind || 'todo');
      showToast(`⏰ ${alert.todo.title}`);
      refresh();
    });
    window.runtime?.EventsOn?.('realtime:state', payload => {
      const existingRequestIDs = new Set((state.realtime.friendRequests || []).map(item => item.friendRequestId));
      state.realtime = {...state.realtime, ...(payload ?? {})};
      const identityID = Number(state.realtime.identity?.userId) || 0;
      const incoming = (state.realtime.friendRequests || []).find(item =>
        item.status === 'pending' && Number(item.addressee?.userId) === identityID && !existingRequestIDs.has(item.friendRequestId)
      );
      if (incoming) showToast(`👋 ${t('friendRequestReceived', {name: friendDisplayName(incoming.requester)})}`);
      renderAccountSession();
      renderRealtime();
    });
    window.runtime?.EventsOn?.('realtime:message', message => {
      receiveRealtimeMessage(message);
    });
    window.runtime?.EventsOn?.('realtime:effect', payload => {
      handleRemoteWindowEffect(payload);
    });
    window.runtime?.EventsOn?.('cloud:transfer-progress', renderCloudTransferProgress);
    window.runtime?.EventsOn?.('ai-chat:stream', handleAIChatStreamEvent);
    window.runtime?.EventsOn?.('tray:navigate', navigateFromTray);
  } catch (error) {
    showToast(readError(error), true);
  }
}

function bindEvents() {
  $('#add-todo').addEventListener('click', () => openTodoModal());
  $('#open-settings').addEventListener('click', openSettings);
  $('#open-about').addEventListener('click', () => openModal('about-modal'));
  $('#open-ai-chat').addEventListener('click', openAIChatPage);
  $('#close-ai-chat').addEventListener('click', closeAIChatPage);
  $('#ai-open-login').addEventListener('click', () => { closeAIChatPage(); openAccountPage('login'); });
  $('#ai-new-conversation').addEventListener('click', startNewAIConversation);
  $('#ai-conversation-keyword').addEventListener('input', scheduleAIConversationSearch);
  $('#ai-conversation-tabs').addEventListener('click', switchAIConversationArchive);
  $('#ai-conversation-list').addEventListener('click', handleAIConversationAction);
  $('#ai-conversation-list').addEventListener('dblclick', renameAIConversationFromList);
  $('#ai-model-select').addEventListener('change', changeAIModel);
  $('#ai-thinking-toggle').addEventListener('click', toggleAIThinking);
  $('#open-ai-settings').addEventListener('click', openAISettings);
  $('#close-ai-settings').addEventListener('click', closeAISettings);
  $('#cancel-ai-settings').addEventListener('click', closeAISettings);
  $('#ai-settings-mask').addEventListener('click', closeAISettings);
  $('#save-ai-settings').addEventListener('click', saveAISettings);
  $('#ai-settings-models').addEventListener('click', chooseAISettingsModel);
  $('#ai-welcome-state').addEventListener('click', useAISuggestion);
  $('#ai-composer-input').addEventListener('input', updateAIComposer);
  $('#ai-composer-input').addEventListener('focus', () => $('#ai-composer').classList.add('focused'));
  $('#ai-composer-input').addEventListener('blur', () => $('#ai-composer').classList.remove('focused'));
  $('#ai-composer-input').addEventListener('keydown', handleAIComposerKeydown);
  $('#ai-send-message').addEventListener('click', sendAIMessage);
  $('#ai-stop-generation').addEventListener('click', stopAIGeneration);
  $('#ai-message-list').addEventListener('click', handleAIMessageAction);
  $('#ai-message-list').addEventListener('dblclick', copyAICodeBlock);
  $('#open-chat').addEventListener('click', openChatPage);
  $('#open-account').addEventListener('click', () => openAccountPage('login'));
  $('#close-account').addEventListener('click', closeAccountPage);
  $('#account-mode-tabs').addEventListener('click', changeAccountMode);
  $('#account-login-form').addEventListener('submit', submitAccountLogin);
  $('#account-register-form').addEventListener('submit', submitRealtimeRegistration);
  $('#account-logout').addEventListener('click', logoutAccount);
  $('#chat-open-account').addEventListener('click', () => {
    closeChatPage();
    openAccountPage('login');
  });
  $('#open-cloud').addEventListener('click', openCloudPage);
  $('#close-cloud').addEventListener('click', closeCloudPage);
  $('#cloud-open-login').addEventListener('click', openCloudAccountLogin);
  $('#cloud-upload').addEventListener('click', uploadCloudFile);
  $('#cloud-new-folder').addEventListener('click', openCloudFolderEditor);
  $('#cloud-editor-form').addEventListener('submit', submitCloudEditor);
  $('#cloud-delete-confirm').addEventListener('click', confirmCloudDelete);
  $('#cloud-refresh').addEventListener('click', refreshCloudDisk);
  $('#cloud-search-form').addEventListener('submit', searchCloudDisk);
  $('#cloud-breadcrumbs').addEventListener('click', navigateCloudBreadcrumb);
  $('#cloud-file-list').addEventListener('click', handleCloudFileAction);
  $('#cloud-prev').addEventListener('click', () => changeCloudPage(-1));
  $('#cloud-next').addEventListener('click', () => changeCloudPage(1));
  $('#open-translator').addEventListener('click', openTranslatorPage);
  $('#close-translator').addEventListener('click', closeTranslatorPage);
  $('#translator-open-login').addEventListener('click', openTranslatorAccountLogin);
  $('#translator-tabs').addEventListener('click', changeTranslatorTab);
  $('#refresh-translation-quota').addEventListener('click', refreshTranslationQuota);
  $('#swap-translation-languages').addEventListener('click', swapTranslationLanguages);
  $('#translation-input').addEventListener('input', updateTranslationCharacterCount);
  $('#translation-input').addEventListener('paste', autoTranslatePastedText);
  $('#translation-input').addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      event.preventDefault();
      submitTranslation();
    }
  });
  $('#translation-target').addEventListener('change', renderTranslationResult);
  $('#clear-translation').addEventListener('click', clearTranslation);
  $('#copy-translation').addEventListener('click', copyTranslationResult);
  $('#submit-translation').addEventListener('click', submitTranslation);
  $('#translation-history-search').addEventListener('submit', searchTranslationHistory);
  $('#refresh-translation-history').addEventListener('click', refreshTranslationHistory);
  $('#translation-history-list').addEventListener('click', handleTranslationHistoryAction);
  $('#translation-history-list').addEventListener('change', updateTranslationHistorySelection);
  $('#select-all-translation-history').addEventListener('change', toggleAllTranslationHistory);
  $('#delete-translation-history-batch').addEventListener('click', deleteSelectedTranslationHistory);
  $('#export-translation-history').addEventListener('click', exportTranslationHistory);
  $('#translation-history-prev').addEventListener('click', () => changeTranslationHistoryPage(-1));
  $('#translation-history-next').addEventListener('click', () => changeTranslationHistoryPage(1));
  $('#open-stocks').addEventListener('click', openStockPage);
  $('#close-stocks').addEventListener('click', closeStockPage);
  $('#minimize-stocks').addEventListener('click', minimiseWindow);
  $('#refresh-stocks').addEventListener('click', refreshStocks);
  $('#stock-add-form').addEventListener('submit', addStock);
  $('#stock-list').addEventListener('click', removeStock);
  $('#open-english').addEventListener('click', openEnglishPage);
  $('#close-english-center').addEventListener('click', closeEnglishCenterPage);
  $('#open-english-compact').addEventListener('click', openEnglishCompactPage);
  $('#english-center-tabs').addEventListener('click', changeEnglishNotebookTab);
  $('#english-center-search').addEventListener('input', filterEnglishNotebook);
  $('#english-center-mode').addEventListener('change', filterEnglishNotebook);
  $('#close-english').addEventListener('click', () => closeEnglishCompactPage(true));
  $('#minimize-english').addEventListener('click', minimiseWindow);
  $('#retry-english').addEventListener('click', loadEnglishBatch);
  $('#next-english').addEventListener('click', nextEnglishWord);
  $('#next-english-sentence').addEventListener('click', nextEnglishWord);
  $('#english-mode').addEventListener('change', changeEnglishMode);
  $('#english-options').addEventListener('click', answerEnglishQuestion);
  $('#english-spelling-form').addEventListener('submit', submitEnglishSpelling);
  $('#close-chat').addEventListener('click', closeChatPage);
  $('#chat-section-tabs').addEventListener('click', changeChatSection);
  $('#copy-user-id').addEventListener('click', copyRealtimeUserID);
  $('#friend-request-form').addEventListener('submit', submitFriendRequest);
  $('#refresh-friends').addEventListener('click', refreshRealtimeFriends);
  $('#friend-requests').addEventListener('click', handleFriendRequestAction);
  $('#friend-list').addEventListener('click', handleFriendListAction);
  $('#chat-friend-list').addEventListener('click', handleChatFriendSelection);
  $('#open-friend-management').addEventListener('click', () => {
    state.chatSection = 'friends';
    renderChatSection();
    if (state.realtime.status === 'online') setTimeout(() => $('#friend-target').focus(), 30);
  });
  $('#peer-user-id').addEventListener('input', handlePeerChange);
  $('#send-shake').addEventListener('click', () => sendWindowEffect('shake'));
  $('#send-flash').addEventListener('click', () => sendWindowEffect('flash'));
  $('#chat-form').addEventListener('submit', submitChatMessage);
  $('#chat-input').addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      $('#chat-form').requestSubmit();
    }
  });
  $('#remote-effect-alert').addEventListener('click', stopRemoteWindowEffect);
  $('#email-author').addEventListener('click', () => {
    const url = `mailto:${state.appInfo.email}`;
    if (window.runtime?.BrowserOpenURL) window.runtime.BrowserOpenURL(url); else window.location.href = url;
  });
  $('#open-web-app').addEventListener('click', async () => {
    try {
      await api.OpenWebApp();
    } catch (error) {
      showToast(readError(error), true);
    }
  });
  $('#compact-toggle').addEventListener('click', toggleCompactMode);
  $('#compact-expand').addEventListener('click', toggleCompactMode);
  $('#minimize-window').addEventListener('click', minimiseWindow);
  $('#compact-minimize').addEventListener('click', minimiseWindow);
  $('#close-window').addEventListener('click', hideToTray);
  $('#check-update').addEventListener('click', () => checkForUpdates(true));
  $('#download-update').addEventListener('click', openUpdateDownload);
  $$('.focus-presets button').forEach(button => button.addEventListener('click', () => selectFocusDuration(Number(button.dataset.minutes))));
  $('#start-focus').addEventListener('click', startFocus);
  $('#stop-focus').addEventListener('click', stopFocus);
  $('#reminder-alert').addEventListener('click', stopReminderFlash);
  $('#always-on-top').addEventListener('change', async event => {
    state.settings.alwaysOnTop = event.target.checked;
    await saveSettings();
  });
  $('#quick-test').addEventListener('click', async () => {
    try {
      await api.TestNotification();
      if (!window.runtime) startReminderFlash({title: t('notificationTest')});
      showToast(t('notificationSent'));
    } catch (error) { showToast(readError(error), true); }
  });
  $('#todo-form').addEventListener('submit', submitTodo);
  $('#settings-form').addEventListener('submit', submitSettings);
  $('#compact-opacity').addEventListener('input', previewCompactOpacity);
  $$('.filter').forEach(button => button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    renderTodos();
  }));
  $$('[data-close]').forEach(button => button.addEventListener('click', () => closeModal(button.dataset.close)));
  $$('.modal-backdrop').forEach(modal => modal.addEventListener('mousedown', event => {
    if (event.target === modal) closeModal(modal.id);
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const openModals = $$('.modal-backdrop:not(.hidden)');
      if (openModals.length) {
        openModals.forEach(modal => closeModal(modal.id));
        return;
      }
    }
    if (event.key === 'Escape' && state.accountOpen) { closeAccountPage(); return; }
    if (event.key === 'Escape' && state.aiChat.settingsOpen) { closeAISettings(); return; }
    if (event.key === 'Escape' && state.aiChatOpen) { closeAIChatPage(); return; }
    if (event.key === 'Escape' && state.cloudOpen) { closeCloudPage(); return; }
    if (event.key === 'Escape' && state.translatorOpen) { closeTranslatorPage(); return; }
    if (event.key === 'Escape' && state.stockOpen) { closeStockPage(); return; }
    if (event.key === 'Escape' && state.englishOpen) { closeEnglishCompactPage(true); return; }
    if (event.key === 'Escape' && state.englishCenterOpen) { closeEnglishCenterPage(); return; }
    if (state.englishOpen && ['quiz', 'chinese'].includes(state.english.mode) && /^[1-4]$/.test(event.key)) {
      $('#english-options').querySelector(`[data-option-index="${Number(event.key) - 1}"]`)?.click();
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'n') { event.preventDefault(); openTodoModal(); }
    if (state.aiChatOpen && (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); startNewAIConversation(); }
  });
  $('#todo-list').addEventListener('click', handleTodoAction);
  window.addEventListener('resize', handleWindowResize);
  systemTheme?.addEventListener?.('change', () => { if (state.settings.theme === 'system') applyTheme(); });
}

function handleWindowResize() {
  updateCompactScale();
  if (!state.settings.compactMode || !hasNativeAPI) return;
  window.clearTimeout(compactResizeTimer);
  compactResizeTimer = window.setTimeout(async () => {
    if (!state.settings.compactMode) return;
    state.settings.compactWidth = Math.max(400, Math.min(900, Math.round(window.innerWidth)));
    state.settings.compactHeight = Math.max(270, Math.min(600, Math.round(window.innerHeight)));
    try {
      state.settings = {...state.settings, ...(await api.SaveSettings(state.settings))};
    } catch (_) { /* The next compact exit also persists the native window size. */ }
  }, 450);
}

function minimiseWindow() {
  if (api.MinimiseWindow) api.MinimiseWindow();
  else window.runtime?.WindowMinimise?.();
}

function hideToTray() {
  if (api.HideToTray) api.HideToTray();
  else window.close();
}

async function navigateFromTray(target) {
  $$('.modal-backdrop:not(.hidden)').forEach(modal => closeModal(modal.id));
  closeAISettings();
  if (state.settings.compactMode) {
    try {
      state.settings = {...state.settings, ...(await api.SetCompactMode(false))};
      applyCompactUI();
    } catch (error) {
      showToast(readError(error), true);
    }
  }
  const destinations = {
    chat: openChatPage,
    english: openEnglishPage,
    ai: openAIChatPage,
    cloud: openCloudPage,
    translator: openTranslatorPage,
    stocks: openStockPage
  };
  const openDestination = destinations[String(target || '').toLowerCase()];
  if (openDestination) await openDestination();
}

async function checkForUpdates(force) {
  const status = $('#update-status');
  const checkButton = $('#check-update');
  if (force) {
    status.textContent = t('checkingUpdates');
    checkButton.disabled = true;
  }
  try {
    const info = await api.CheckForUpdates(force);
    if (info?.skipped) return;
    updateCheckResult = info;
    availableUpdate = info?.available ? info : null;
    renderUpdateInfo(info);
    if (info?.available && !force) {
      openModal('about-modal');
      showToast(t('updateAvailable', {version: info.latestVersion}));
    }
  } catch (error) {
    if (force) {
      status.textContent = `${t('updateCheckFailed')}：${readError(error)}`;
      showToast(t('updateCheckFailed'), true);
    }
  } finally {
    if (force) checkButton.disabled = false;
  }
}

function renderUpdateInfo(info) {
  const current = info?.currentVersion || state.appInfo.version;
  const latest = info?.latestVersion || current;
  $('#update-version-chip').textContent = `v${info?.available ? latest : current}`;
  $('#update-status').textContent = info?.available
    ? t('updateAvailable', {version: latest})
    : t('latestVersion', {version: current});
  const details = $('#update-details');
  details.classList.toggle('hidden', !info?.available);
  const downloadButton = $('#download-update');
  downloadButton.classList.toggle('hidden', !info?.available);
  downloadButton.textContent = info?.downloadURL ? t('downloadUpdate') : t('openRelease');
  if (!info?.available) return;
  const notes = String(info.releaseNotes || t('noReleaseNotes'));
  $('#update-notes').textContent = notes.length > 1600 ? `${notes.slice(0, 1600)}…` : notes;
  $('#update-asset').textContent = info.assetName
    ? t('updateAsset', {name: info.assetName, size: formatBytes(info.assetSize)})
    : '';
}

async function openUpdateDownload() {
  const target = availableUpdate?.downloadURL || availableUpdate?.releaseURL;
  if (!target) return;
  try {
    await api.OpenUpdateURL(target);
  } catch (error) {
    showToast(readError(error), true);
  }
}

async function refresh() {
  const loaded = await api.GetState();
  state.todos = loaded.todos ?? [];
  state.settings = {...state.settings, ...(loaded.settings ?? {})};
  state.focus = {...state.focus, ...(loaded.focus ?? {})};
  state.englishNotebook.words = loaded.englishWords ?? [];
  state.englishNotebook.wrongWords = loaded.englishWrongWords ?? [];
  applyTranslations();
  renderAll();
}

function renderAll() {
  $('#always-on-top').checked = state.settings.alwaysOnTop;
  applyEnglishBackgroundOpacity();
  applyCompactUI();
  renderTodos();
  renderCompactTodos();
  renderSummary();
  renderAccountSession();
  renderAIChat();
  renderRealtime();
  updateClock();
}

function renderTodos() {
  $$('.filter').forEach(button => button.classList.toggle('active', button.dataset.filter === state.filter));
  const filtered = sortedTodos().filter(todo => state.filter === 'all' || (state.filter === 'done' ? todo.completed : !todo.completed));
  const list = $('#todo-list');
  if (!filtered.length) {
    const copy = state.filter === 'done' ? [t('emptyDoneTitle'), t('emptyDoneText')] : [t('emptyPendingTitle'), t('emptyPendingText')];
    list.innerHTML = `<div class="empty-list"><div><svg viewBox="0 0 48 48"><path d="M13 8h22a4 4 0 0 1 4 4v27H9V12a4 4 0 0 1 4-4Z"/><path d="M17 5v7M31 5v7M9 17h30M17 25h14M17 31h9"/></svg><strong>${copy[0]}</strong><p>${copy[1]}</p></div></div>`;
    return;
  }
  const now = Date.now();
  list.innerHTML = filtered.map(todo => {
    const due = todo.dueAt ? new Date(todo.dueAt) : null;
    const overdue = due && !todo.completed && due.getTime() < now;
    const dueText = due ? formatDue(due) : t('noDue');
    return `<div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
      <button class="check-btn" data-action="toggle" aria-label="${todo.completed ? t('restoreTodo') : t('completeTodo')}">✓</button>
      <div class="todo-main"><div class="todo-title">${escapeHTML(todo.title)}</div><div class="todo-meta"><span class="${overdue ? 'overdue' : ''}">${due ? '◷ ' : ''}${dueText}</span>${todo.note ? `<span>· ${escapeHTML(todo.note)}</span>` : ''}</div></div>
      <div class="todo-actions"><button class="tiny-btn" data-action="edit">${t('edit')}</button><button class="tiny-btn" data-action="delete">${t('delete')}</button></div>
    </div>`;
  }).join('');
}

function renderCompactTodos() {
  const pending = sortedTodos().filter(todo => !todo.completed);
  $('#compact-todo-count').textContent = pending.length;
  const list = $('#compact-todo-list');
  if (!pending.length) {
    list.innerHTML = `<div class="compact-todo-empty">${t('noCompactTodos')}</div>`;
    return;
  }
  list.innerHTML = pending.slice(0, 3).map(todo => {
    const due = todo.dueAt ? formatDue(new Date(todo.dueAt)) : t('noDue');
    return `<div class="compact-todo-item"><span></span><strong>${escapeHTML(todo.title)}</strong><time>${escapeHTML(due)}</time></div>`;
  }).join('');
}

function renderSummary() {
  const pending = state.todos.filter(todo => !todo.completed);
  $('#pending-count').textContent = pending.length;
  $('#pending-pill').textContent = pending.length;
  const next = pending.filter(item => item.dueAt && new Date(item.dueAt).getTime() >= Date.now()).sort((a,b) => new Date(a.dueAt) - new Date(b.dueAt))[0];
  const container = $('#next-reminder');
  if (!next) {
    container.classList.add('empty');
    container.innerHTML = `<div class="calendar-tile"><span>--</span><strong>--</strong></div><div><strong>${t('noReminder')}</strong><p>${t('reminderHint')}</p></div>`;
  } else {
    const date = new Date(next.dueAt);
    container.classList.remove('empty');
    container.innerHTML = `<div class="calendar-tile"><span>${date.toLocaleDateString(locale(),{month:'short'})}</span><strong>${date.getDate()}</strong></div><div><strong>${escapeHTML(next.title)}</strong><p>${formatDue(date)}</p></div>`;
  }
}

function updateClock() {
  const now = new Date();
  updateEnglishLearning(now.getTime());
  $('#clock').textContent = now.toLocaleTimeString(locale(), {hour:'2-digit', minute:'2-digit', hour12:false});
  $('#ampm').textContent = now.getHours() < 12 ? 'AM' : 'PM';
  const dateText = now.toLocaleDateString(locale(), {month:'long', day:'numeric', weekday:'long'});
  $('#date').textContent = currentLanguage() === 'zh' ? dateText.replace('星期', ' · 星期') : dateText;
  const {workStart, workEnd} = state.settings;
  $('#work-range').textContent = `${workStart} — ${workEnd}`;
  $('#end-badge').textContent = workEnd;
  const day = now.getDay() || 7;
  const isWorkday = state.settings.workdays.includes(day);
  const start = clockOnDate(now, workStart);
  const end = clockOnDate(now, workEnd);
  if (end <= start) end.setDate(end.getDate() + 1);
  let status = t('working'), text = '00:00:00', progress = 0;
  if (!isWorkday) {
    status = t('restDay'); text = t('restWell');
  } else if (now < start) {
    status = t('waiting'); text = formatDuration(start - now);
  } else if (now >= end) {
    status = t('finished'); text = t('offWork'); progress = 100;
  } else {
    progress = Math.max(0, Math.min(100, ((now - start) / (end - start)) * 100));
    text = formatDuration(end - now);
  }
  $('#work-status').textContent = status;
  $('#offwork-time').textContent = text;
  $('#work-progress').style.width = `${progress}%`;
  $('#progress-percent').textContent = `${Math.round(progress)}%`;
  const monthlySalary = Number(state.settings.monthlySalary) || 0;
  const salaryWorkdays = Number(state.settings.salaryWorkdays) || 21.75;
  document.body.classList.toggle('no-salary', monthlySalary <= 0);
  const dailySalary = monthlySalary / salaryWorkdays;
  const earned = isWorkday ? dailySalary * progress / 100 : 0;
  const currency = state.settings.currency || '¥';
  $('#earned-amount').textContent = `${currency}${formatMoney(earned)}`;
  $('#earning-caption').textContent = t('dailyLimit', {currency, amount: formatMoney(dailySalary)});
  renderFocus(now);
}

function selectFocusDuration(minutes) {
  selectedFocusMinutes = minutes;
  $$('.focus-presets button').forEach(button => button.classList.toggle('active', Number(button.dataset.minutes) === minutes));
}

async function startFocus() {
  try {
    state.focus = {...state.focus, ...(await api.StartFocus(selectedFocusMinutes))};
    renderFocus(new Date());
    showToast(t('focusStarted', {minutes: selectedFocusMinutes}));
  } catch (error) { showToast(readError(error), true); }
}

async function stopFocus() {
  try {
    state.focus = {...state.focus, ...(await api.StopFocus())};
    renderFocus(new Date());
    showToast(t('focusStopped'));
  } catch (error) { showToast(readError(error), true); }
}

function renderFocus(now = new Date()) {
  const endsAt = state.focus.endsAt ? new Date(state.focus.endsAt) : null;
  const startedAt = state.focus.startedAt ? new Date(state.focus.startedAt) : null;
  const active = Boolean(state.focus.active && endsAt);
  $('#focus-idle').classList.toggle('hidden', active);
  $('#focus-active').classList.toggle('hidden', !active);
  $('#focus-mini').classList.toggle('active', active);
  $('#compact-focus-mini').classList.toggle('active', active);
  document.body.classList.toggle('focus-running', active);
  if (!active) return;
  const remaining = Math.max(0, endsAt.getTime() - now.getTime());
  const fallbackDuration = Number(state.focus.durationMinutes || 50) * 60000;
  const duration = Math.max(1, endsAt.getTime() - (startedAt?.getTime() || endsAt.getTime() - fallbackDuration));
  const progress = Math.max(0, Math.min(100, (1 - remaining / duration) * 100));
  const value = formatFocusDuration(remaining);
  $('#focus-time').textContent = value;
  $('#focus-mini-time').textContent = value;
  $('#compact-focus-time').textContent = value;
  $('#focus-progress').style.width = `${progress}%`;
  const endTime = endsAt.toLocaleTimeString(locale(), {hour:'2-digit', minute:'2-digit', hour12:false});
  $('#focus-end-time').textContent = t('focusEndsAt', {time: endTime});
}

async function handleTodoAction(event) {
  const button = event.target.closest('[data-action]');
  const row = event.target.closest('.todo-item');
  if (!button || !row) return;
  const todo = state.todos.find(item => item.id === row.dataset.id);
  if (!todo) return;
  try {
    if (button.dataset.action === 'toggle') await api.ToggleTodo(todo.id, !todo.completed);
    if (button.dataset.action === 'delete') await api.DeleteTodo(todo.id);
    if (button.dataset.action === 'edit') { openTodoModal(todo); return; }
    await refresh();
  } catch (error) { showToast(readError(error), true); }
}

function selectedAIModel() {
  const modelID = state.aiChat.current?.model || state.aiChat.preferences.model;
  return state.aiChat.models.find(item => item.id === modelID);
}

function aiThinkingEnabled() {
  return state.aiChat.current?.thinking_enabled ?? state.aiChat.preferences.thinking_enabled;
}

function aiServiceDisabledReason() {
  const selected = selectedAIModel();
  if (selected?.disabled_reason) return selected.disabled_reason;
  if (state.aiChat.policy?.quota_message) return state.aiChat.policy.quota_message;
  return state.aiChat.models.some(item => item.configured) ? '当前策略没有开放可用模型' : '请联系管理员配置 DeepSeek 服务';
}

function aiServiceAvailable() {
  return Boolean(state.account.loggedIn && selectedAIModel()?.available);
}

async function openAIChatPage() {
  if (state.accountOpen) closeAccountPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.stockOpen) await closeStockPage();
  if (state.englishOpen || state.englishCenterOpen) await closeEnglishPage();
  state.aiChatOpen = true;
  document.body.classList.add('ai-chat-open');
  $('#ai-chat-page').classList.remove('hidden');
  $('#open-ai-chat').classList.add('active');
  renderAIChat();
  if (!state.account.loggedIn) return;
  await Promise.allSettled([loadAIModels(), loadAIConversations(), loadAIUsage()]);
  renderAIChat();
  setTimeout(() => $('#ai-composer-input').focus(), 30);
}

function closeAIChatPage() {
  if (state.aiChat.generating && state.aiChat.requestId) stopAIGeneration();
  closeAISettings();
  state.aiChatOpen = false;
  document.body.classList.remove('ai-chat-open');
  $('#ai-chat-page').classList.add('hidden');
  $('#open-ai-chat').classList.remove('active');
}

async function loadAIModels() {
  try {
    const result = await api.GetAIChatModels();
    if (result?.models?.length) state.aiChat.models = result.models;
    state.aiChat.policy = {...state.aiChat.policy, ...(result?.policy || {})};
    if (!state.aiChat.current && !selectedAIModel()?.available) {
      const available = state.aiChat.models.find(item => item.available);
      if (available) state.aiChat.preferences.model = available.id;
    }
  } catch (error) {
    handleAIChatError(error);
  } finally {
    renderAIChatChrome();
  }
}

async function loadAIUsage() {
  try {
    state.aiChat.usage = {...state.aiChat.usage, ...(await api.GetAIChatUsage() || {})};
    state.aiChat.usageLoaded = true;
  } catch (error) {
    if (!readError(error).includes('登录')) console.warn('AI usage unavailable', error);
  } finally {
    renderAIUsage();
  }
}

async function loadAIConversations() {
  state.aiChat.loadingConversations = true;
  renderAIConversationList();
  try {
    const result = await api.ListAIChatConversations(1, 50, state.aiChat.keyword.trim(), state.aiChat.archived);
    state.aiChat.conversations = result?.list || [];
  } catch (error) {
    handleAIChatError(error);
    state.aiChat.conversations = [];
  } finally {
    state.aiChat.loadingConversations = false;
    renderAIConversationList();
  }
}

function scheduleAIConversationSearch(event) {
  state.aiChat.keyword = event.target.value;
  window.clearTimeout(aiSearchTimer);
  aiSearchTimer = window.setTimeout(loadAIConversations, 280);
}

function switchAIConversationArchive(event) {
  const button = event.target.closest('[data-ai-archived]');
  if (!button) return;
  state.aiChat.archived = button.dataset.aiArchived === 'true';
  state.aiChat.current = null;
  state.aiChat.messages = [];
  $$('#ai-conversation-tabs button').forEach(item => item.classList.toggle('active', item === button));
  renderAIChatChrome();
  renderAIMessageList();
  loadAIConversations();
}

function startNewAIConversation() {
  if (state.aiChat.generating) stopAIGeneration();
  state.aiChat.current = null;
  state.aiChat.messages = [];
  $('#ai-composer-input').value = '';
  updateAIComposer();
  renderAIChat();
  setTimeout(() => $('#ai-composer-input').focus(), 30);
}

async function selectAIConversation(item) {
  if (!item || state.aiChat.current?.id === item.id) return;
  if (state.aiChat.generating) stopAIGeneration();
  state.aiChat.current = {...item};
  state.aiChat.loadingMessages = true;
  state.aiChat.messages = [];
  renderAIChat();
  try {
    state.aiChat.messages = await api.ListAIChatMessages(item.id, 200) || [];
  } catch (error) {
    handleAIChatError(error);
  } finally {
    state.aiChat.loadingMessages = false;
    renderAIChat();
    scrollAIChatToBottom(true);
  }
}

async function ensureAIConversation() {
  if (state.aiChat.current) return state.aiChat.current;
  const input = {
    title: '新对话',
    model: state.aiChat.preferences.model,
    thinking_enabled: state.aiChat.preferences.thinking_enabled,
    system_prompt: state.aiChat.preferences.system_prompt
  };
  const conversation = await api.CreateAIChatConversation(input);
  state.aiChat.current = conversation;
  state.aiChat.conversations.unshift(conversation);
  renderAIConversationList();
  renderAIChatChrome();
  return conversation;
}

async function handleAIConversationAction(event) {
  const row = event.target.closest('[data-ai-conversation-id]');
  if (!row) return;
  const item = state.aiChat.conversations.find(value => Number(value.id) === Number(row.dataset.aiConversationId));
  if (!item) return;
  const action = event.target.closest('[data-ai-conversation-action]')?.dataset.aiConversationAction;
  event.preventDefault();
  event.stopPropagation();
  if (!action) return selectAIConversation(item);
  if (action === 'pin') return patchAIConversation(item, {pinned: !item.pinned});
  if (action === 'archive') return patchAIConversation(item, {archived: !item.archived});
  if (action === 'delete') return removeAIConversation(item);
}

function renameAIConversationFromList(event) {
  const row = event.target.closest('[data-ai-conversation-id]');
  if (!row || event.target.closest('[data-ai-conversation-action]')) return;
  const item = state.aiChat.conversations.find(value => Number(value.id) === Number(row.dataset.aiConversationId));
  if (item) renameAIConversation(item);
}

async function renameAIConversation(item) {
  const title = window.prompt('给这段对话起一个清晰的名字', item.title || '新对话');
  if (title === null) return;
  const value = title.trim();
  if (!value || [...value].length > 160) {
    showToast('请输入 1–160 个字符', true);
    return;
  }
  await patchAIConversation(item, {title: value});
}

async function patchAIConversation(item, data) {
  try {
    const updated = await api.UpdateAIChatConversation(item.id, data);
    Object.assign(item, updated || data);
    if (state.aiChat.current?.id === item.id) Object.assign(state.aiChat.current, updated || data);
    if (Object.hasOwn(data, 'archived')) {
      if (state.aiChat.current?.id === item.id) startNewAIConversation();
      await loadAIConversations();
    } else {
      state.aiChat.conversations.sort((a,b) => Number(b.pinned) - Number(a.pinned));
    }
    renderAIChat();
    return updated;
  } catch (error) {
    handleAIChatError(error);
    throw error;
  }
}

async function removeAIConversation(item) {
  if (!window.confirm(`删除“${item.title || '新对话'}”后将无法在界面中恢复，确定继续吗？`)) return;
  try {
    await api.DeleteAIChatConversation(item.id);
    state.aiChat.conversations = state.aiChat.conversations.filter(value => value.id !== item.id);
    if (state.aiChat.current?.id === item.id) startNewAIConversation();
    renderAIConversationList();
    loadAIUsage();
    showToast('对话已删除');
  } catch (error) {
    handleAIChatError(error);
  }
}

async function changeAIModel(event) {
  const model = event.target.value;
  if (state.aiChat.current) {
    try { await patchAIConversation(state.aiChat.current, {model}); } catch (_) { renderAIChatChrome(); }
  } else {
    state.aiChat.preferences.model = model;
    renderAIChatChrome();
  }
}

async function toggleAIThinking() {
  if (state.aiChat.generating) return;
  const value = !aiThinkingEnabled();
  if (state.aiChat.current) {
    try { await patchAIConversation(state.aiChat.current, {thinking_enabled: value}); } catch (_) { /* restored by render */ }
  } else {
    state.aiChat.preferences.thinking_enabled = value;
    renderAIChatChrome();
  }
}

function openAISettings() {
  if (!state.account.loggedIn || state.aiChat.generating) return;
  state.aiChat.settingsOpen = true;
  state.aiChat.settingsDraft = {
    model: state.aiChat.current?.model || state.aiChat.preferences.model,
    thinking_enabled: aiThinkingEnabled(),
    system_prompt: state.aiChat.current?.system_prompt || state.aiChat.preferences.system_prompt
  };
  $('#ai-settings-thinking').checked = state.aiChat.settingsDraft.thinking_enabled;
  $('#ai-system-prompt').value = state.aiChat.settingsDraft.system_prompt;
  renderAISettingsModels();
  $('#ai-settings-mask').classList.remove('hidden');
  $('#ai-settings-drawer').classList.remove('hidden');
}

function closeAISettings() {
  state.aiChat.settingsOpen = false;
  $('#ai-settings-mask')?.classList.add('hidden');
  $('#ai-settings-drawer')?.classList.add('hidden');
}

function renderAISettingsModels() {
  const selected = state.aiChat.settingsDraft?.model || state.aiChat.preferences.model;
  $('#ai-settings-models').innerHTML = state.aiChat.models.map(model => `
    <button type="button" data-ai-settings-model="${escapeHTML(model.id)}" class="${model.id === selected ? 'active' : ''}" ${model.available ? '' : 'disabled'}>
      <span><strong>${escapeHTML(model.name)}</strong><small>${escapeHTML(model.available ? model.description : (model.disabled_reason || '当前不可用'))}</small></span>
      <em>${model.id === selected ? '✓' : escapeHTML(model.badge || '')}</em>
    </button>`).join('');
}

function chooseAISettingsModel(event) {
  const button = event.target.closest('[data-ai-settings-model]');
  if (!button || button.disabled || !state.aiChat.settingsDraft) return;
  state.aiChat.settingsDraft.model = button.dataset.aiSettingsModel;
  renderAISettingsModels();
}

async function saveAISettings() {
  if (!state.aiChat.settingsDraft) return;
  const data = {
    model: state.aiChat.settingsDraft.model,
    thinking_enabled: $('#ai-settings-thinking').checked,
    system_prompt: $('#ai-system-prompt').value
  };
  const button = $('#save-ai-settings');
  button.disabled = true;
  button.textContent = '保存中…';
  try {
    if (state.aiChat.current) await patchAIConversation(state.aiChat.current, data);
    else Object.assign(state.aiChat.preferences, data);
    closeAISettings();
    renderAIChat();
    showToast('对话设置已保存');
  } catch (_) {
    // patchAIConversation has already surfaced the service error.
  } finally {
    button.disabled = false;
    button.textContent = '保存设置';
  }
}

function useAISuggestion(event) {
  const button = event.target.closest('[data-ai-prompt]');
  if (!button || !state.account.loggedIn) return;
  $('#ai-composer-input').value = button.dataset.aiPrompt;
  updateAIComposer();
  $('#ai-composer-input').focus();
}

function updateAIComposer() {
  const input = $('#ai-composer-input');
  input.style.height = 'auto';
  input.style.height = `${Math.min(input.scrollHeight, 94)}px`;
  $('#ai-input-count').textContent = input.value.length > 45000 ? `${input.value.length}/50000` : '';
  renderAIComposer();
}

function handleAIComposerKeydown(event) {
  if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
    event.preventDefault();
    sendAIMessage();
  }
}

function canSendAIMessage() {
  const input = $('#ai-composer-input')?.value || '';
  return aiServiceAvailable() && !state.aiChat.generating && input.trim().length > 0 && input.length <= 50000;
}

async function sendAIMessage() {
  if (!canSendAIMessage()) return;
  const content = $('#ai-composer-input').value.trim();
  let conversation;
  try {
    conversation = await ensureAIConversation();
  } catch (error) {
    handleAIChatError(error);
    return;
  }
  const requestId = globalThis.crypto?.randomUUID?.() || `desktop-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const now = new Date().toISOString();
  const userMessage = {localId:`user-${requestId}`,role:'user',content,status:'completed',create_time:now};
  const assistantMessage = {localId:`assistant-${requestId}`,client_request_id:requestId,role:'assistant',content:'',liveReasoning:'',status:'streaming',model:selectedAIModel()?.id,create_time:now,feedback:0};
  state.aiChat.messages.push(userMessage, assistantMessage);
  state.aiChat.generating = true;
  state.aiChat.requestId = requestId;
  $('#ai-composer-input').value = '';
  updateAIComposer();
  renderAIMessageList();
  renderAIComposer();
  scrollAIChatToBottom(true);

  try {
    const input = {content,client_request_id:requestId,model:selectedAIModel()?.id || state.aiChat.preferences.model,thinking_enabled:aiThinkingEnabled()};
    if (hasNativeAPI) await api.StreamAIChatMessage(conversation.id, input);
    else await simulatePreviewAIStream(requestId);
    if (assistantMessage.status === 'streaming') assistantMessage.status = 'completed';
  } catch (error) {
    if (assistantMessage.status === 'cancelled' || readError(error).toLowerCase().includes('canceled')) {
      assistantMessage.status = 'cancelled';
      assistantMessage.error_message = '生成已停止';
    } else {
      assistantMessage.status = 'failed';
      assistantMessage.error_message = readError(error) || '生成失败，请重试';
      showToast(assistantMessage.error_message, true);
    }
  } finally {
    state.aiChat.generating = false;
    state.aiChat.requestId = '';
    renderAIChat();
    await Promise.allSettled([loadAIConversations(), loadAIUsage(), loadAIModels()]);
  }
}

function stopAIGeneration() {
  const requestId = state.aiChat.requestId;
  if (!requestId) return;
  const assistant = state.aiChat.messages.find(message => message.localId === `assistant-${requestId}` || (message.role === 'assistant' && message.client_request_id === requestId));
  if (assistant) {
    assistant.status = 'cancelled';
    assistant.error_message = '生成已停止';
  }
  if (hasNativeAPI) void api.CancelAIChatStream(requestId);
  renderAIChat();
}

async function simulatePreviewAIStream(requestId) {
  const answer = '这是工位岛 AI 对话的预览响应。真实桌面应用会通过 Go 后端桥接 DeepSeek 流式接口，并保留会话、思考过程与用量记录。';
  handleAIChatStreamEvent({clientRequestId:requestId,event:'meta',payload:{message:{client_request_id:requestId,role:'assistant',status:'streaming',model:'deepseek-v4-flash'}}});
  handleAIChatStreamEvent({clientRequestId:requestId,event:'reasoning',payload:{reasoning:'先确认目标，再给出清晰、可执行的答案。'}});
  for (const chunk of answer.match(/.{1,8}/gu) || []) {
    await new Promise(resolve => setTimeout(resolve, 35));
    handleAIChatStreamEvent({clientRequestId:requestId,event:'delta',payload:{delta:chunk}});
  }
  const assistant = state.aiChat.messages.find(message => message.localId === `assistant-${requestId}`);
  handleAIChatStreamEvent({clientRequestId:requestId,event:'done',payload:{message:{...assistant,id:Date.now(),status:'completed',reasoning_content:assistant?.liveReasoning || '',liveReasoning:undefined}}});
}

function handleAIChatStreamEvent(event) {
  const requestId = event?.clientRequestId;
  if (!requestId || requestId !== state.aiChat.requestId) return;
  const message = state.aiChat.messages.find(item => item.localId === `assistant-${requestId}` || (item.role === 'assistant' && item.client_request_id === requestId));
  if (!message) return;
  const payload = event.payload || {};
  if (event.event === 'meta' && payload.message) {
    const localId = message.localId;
    Object.assign(message, payload.message, {localId,content:'',liveReasoning:''});
  } else if (event.event === 'reasoning') {
    message.liveReasoning = `${message.liveReasoning || ''}${payload.reasoning || ''}`;
  } else if (event.event === 'delta') {
    message.content = `${message.content || ''}${payload.delta || ''}`;
  } else if (event.event === 'done') {
    const localId = message.localId;
    Object.assign(message, payload.message || {}, {localId,liveReasoning:''});
    message.status ||= 'completed';
  } else if (event.event === 'error') {
    message.status = 'failed';
    message.error_message = payload.error || '生成失败，请重试';
  }
  scheduleAIMessageRender();
}

function scheduleAIMessageRender() {
  if (aiRenderFrame) return;
  aiRenderFrame = requestAnimationFrame(() => {
    aiRenderFrame = 0;
    renderAIMessageList();
    scrollAIChatToBottom();
  });
}

function renderAIChat() {
  renderAIAccountState();
  renderAIChatChrome();
  renderAIConversationList();
  renderAIUsage();
  renderAIMessageList();
  renderAIComposer();
}

function renderAIAccountState() {
  const loggedIn = Boolean(state.account.loggedIn);
  $('#ai-login-required').classList.toggle('hidden', loggedIn);
  $('#ai-message-stage').classList.toggle('hidden', !loggedIn);
  $('#ai-composer-zone').classList.toggle('hidden', !loggedIn);
  $('#ai-new-conversation').disabled = !loggedIn;
  $('#ai-conversation-keyword').disabled = !loggedIn;
}

function renderAIChatChrome() {
  const current = state.aiChat.current;
  $('#ai-current-title').textContent = current?.title || '新的对话';
  const modelID = current?.model || state.aiChat.preferences.model;
  const select = $('#ai-model-select');
  select.innerHTML = state.aiChat.models.map(model => `<option value="${escapeHTML(model.id)}" ${model.available ? '' : 'disabled'}>${escapeHTML(model.name)}${model.available ? '' : ' · 不可用'}</option>`).join('');
  select.value = modelID;
  select.disabled = !state.account.loggedIn || state.aiChat.generating;
  const thinking = aiThinkingEnabled();
  $('#ai-thinking-toggle').classList.toggle('active', thinking);
  $('#ai-thinking-toggle').setAttribute('aria-pressed', String(thinking));
  $('#ai-thinking-toggle span').textContent = thinking ? '深度思考' : '快速回答';
  $('#ai-thinking-toggle').disabled = !state.account.loggedIn || state.aiChat.generating;
  $('#open-ai-settings').disabled = !state.account.loggedIn || state.aiChat.generating;
  const status = $('#ai-service-status');
  status.classList.toggle('online', aiServiceAvailable());
  status.querySelector('span').textContent = !state.account.loggedIn ? '登录后连接服务' : aiServiceAvailable() ? `服务在线 · ${state.aiChat.policy.source_name || '系统默认'}` : aiServiceDisabledReason();
  $('#ai-configuration-notice').classList.toggle('hidden', aiServiceAvailable());
  $('#ai-disabled-reason').textContent = aiServiceDisabledReason();
}

function renderAIConversationList() {
  const container = $('#ai-conversation-list');
  if (state.aiChat.loadingConversations) {
    container.innerHTML = `<div class="ai-conversation-loading">${'<i></i>'.repeat(5)}</div>`;
    return;
  }
  if (!state.aiChat.conversations.length) {
    const text = state.aiChat.keyword ? '没有匹配的对话' : state.aiChat.archived ? '暂无归档对话' : '你的新想法会出现在这里';
    container.innerHTML = `<div class="ai-empty-conversations"><span>▣</span><p>${escapeHTML(text)}</p></div>`;
    return;
  }
  container.innerHTML = state.aiChat.conversations.map(item => `
    <article class="ai-conversation-item ${state.aiChat.current?.id === item.id ? 'active' : ''}" data-ai-conversation-id="${item.id}">
      <div class="ai-conversation-icon">◫</div>
      <div class="ai-conversation-copy">
        <div class="ai-conversation-title">${item.pinned ? '<i>★</i>' : ''}${escapeHTML(item.title || '新对话')}</div>
        <div class="ai-conversation-meta">${escapeHTML(aiModelShortName(item.model))} · ${escapeHTML(formatAIRelativeTime(item.last_message_time || item.create_time))}</div>
      </div>
      <div class="ai-conversation-actions">
        <button type="button" data-ai-conversation-action="pin" title="${item.pinned ? '取消置顶' : '置顶'}">${item.pinned ? '☆' : '★'}</button>
        <button type="button" data-ai-conversation-action="archive" title="${item.archived ? '移出归档' : '归档'}">▣</button>
        <button type="button" data-ai-conversation-action="delete" title="删除">×</button>
      </div>
    </article>`).join('');
}

function renderAIUsage() {
  const usage = state.aiChat.usage || {};
  const policy = state.aiChat.policy || {};
  const today = state.aiChat.usageLoaded ? usage.today_tokens : (policy.daily_used ?? usage.today_tokens ?? 0);
  const total = state.aiChat.usageLoaded ? usage.total_tokens : (policy.total_used ?? usage.total_tokens ?? 0);
  $('#ai-usage-today').textContent = `${formatAITokens(today)} / ${formatAIPolicyLimit(policy.daily_token_limit)}`;
  $('#ai-usage-total').textContent = `${usage.conversation_count || 0} 个会话 · 累计 ${formatAITokens(total)} / ${formatAIPolicyLimit(policy.total_token_limit)}`;
  const progress = Number(policy.daily_token_limit) > 0 ? Math.min(100, Number(today) / Number(policy.daily_token_limit) * 100) : 0;
  $('#ai-usage-progress').style.width = `${progress}%`;
}

function renderAIMessageList() {
  const welcome = $('#ai-welcome-state');
  const list = $('#ai-message-list');
  if (state.aiChat.loadingMessages) {
    welcome.classList.add('hidden');
    list.classList.remove('hidden');
    list.innerHTML = '<div class="ai-empty-conversations"><span>✦</span><p>正在载入对话…</p></div>';
    return;
  }
  if (!state.aiChat.messages.length) {
    welcome.classList.remove('hidden');
    list.classList.add('hidden');
    list.innerHTML = '';
    return;
  }
  welcome.classList.add('hidden');
  list.classList.remove('hidden');
  const userInitial = [...(accountDisplayName() || '我')][0]?.toUpperCase() || '我';
  list.innerHTML = state.aiChat.messages.map((message,index) => {
    const assistant = message.role === 'assistant';
    const reasoning = message.reasoning_content || message.liveReasoning || '';
    const status = message.status || 'completed';
    const answer = message.content
      ? formatAIContent(message.content)
      : status === 'streaming' ? '<div class="ai-typing"><i></i><i></i><i></i></div>'
      : `<div class="ai-inline-state ${status === 'failed' ? 'error' : ''}">${escapeHTML(message.error_message || (status === 'cancelled' ? '已停止生成，你可以重新发送。' : ''))}</div>`;
    return `<article class="ai-message-row role-${assistant ? 'assistant' : 'user'} status-${escapeHTML(status)}">
      <div class="ai-message-avatar">${assistant ? '✦' : escapeHTML(userInitial)}</div>
      <div class="ai-message-body">
        <div class="ai-message-author"><strong>${assistant ? escapeHTML(aiModelDisplayName(message.model)) : '你'}</strong><span>${escapeHTML(formatAIMessageTime(message.create_time))}</span>${status === 'streaming' ? '<em><i></i>正在生成</em>' : ''}</div>
        ${reasoning ? `<details class="ai-reasoning-box" ${status === 'streaming' ? 'open' : ''}><summary><span>${status === 'streaming' ? '正在思考…' : '查看思考过程'}</span><small>${[...reasoning].length} 字</small></summary><div>${escapeHTML(reasoning)}</div></details>` : ''}
        ${assistant ? `<div class="ai-answer">${answer}</div>` : `<div class="ai-user-message">${escapeHTML(message.content || '')}</div>`}
        ${assistant && status !== 'streaming' ? `<div class="ai-message-tools">
          <button type="button" data-ai-message-action="copy" data-ai-message-index="${index}" title="复制">▣</button>
          <button type="button" data-ai-message-action="retry" data-ai-message-index="${index}" title="重新生成">↻</button>
          <button type="button" data-ai-message-action="helpful" data-ai-message-index="${index}" class="${Number(message.feedback) === 1 ? 'selected' : ''}" title="有帮助">＋</button>
          <button type="button" data-ai-message-action="unhelpful" data-ai-message-index="${index}" class="${Number(message.feedback) === -1 ? 'selected' : ''}" title="需改进">−</button>
          ${message.completion_tokens ? `<small>${message.completion_tokens} tokens</small>` : ''}
        </div>` : ''}
      </div>
    </article>`;
  }).join('');
}

function renderAIComposer() {
  const input = $('#ai-composer-input');
  const enabled = aiServiceAvailable() && !state.aiChat.generating;
  input.disabled = !enabled;
  input.placeholder = aiServiceAvailable() ? '给 AI 发送消息…' : aiServiceDisabledReason();
  $('#ai-composer').classList.toggle('disabled', !aiServiceAvailable());
  $('#ai-send-message').disabled = !canSendAIMessage();
  $('#ai-send-message').classList.toggle('hidden', state.aiChat.generating);
  $('#ai-stop-generation').classList.toggle('hidden', !state.aiChat.generating);
}

async function handleAIMessageAction(event) {
  const button = event.target.closest('[data-ai-message-action]');
  if (!button) return;
  const index = Number(button.dataset.aiMessageIndex);
  const message = state.aiChat.messages[index];
  if (!message) return;
  const action = button.dataset.aiMessageAction;
  if (action === 'copy') {
    try { await navigator.clipboard.writeText(message.content || ''); showToast('已复制'); } catch (_) { showToast('复制失败，请手动选择', true); }
    return;
  }
  if (action === 'retry') {
    for (let i = index - 1; i >= 0; i--) {
      if (state.aiChat.messages[i].role === 'user') {
        $('#ai-composer-input').value = state.aiChat.messages[i].content;
        updateAIComposer();
        $('#ai-composer-input').focus();
        return;
      }
    }
  }
  if (action === 'helpful' || action === 'unhelpful') {
    if (!Number(message.id)) return;
    const target = action === 'helpful' ? 1 : -1;
    const feedback = Number(message.feedback) === target ? 0 : target;
    try {
      await api.SetAIChatFeedback(message.id, feedback);
      message.feedback = feedback;
      renderAIMessageList();
    } catch (error) { handleAIChatError(error); }
  }
}

async function copyAICodeBlock(event) {
  const pre = event.target.closest('.ai-answer pre');
  if (!pre) return;
  try { await navigator.clipboard.writeText(pre.innerText); showToast('代码已复制'); } catch (_) { /* clipboard can be unavailable */ }
}

function formatAIContent(value) {
  const source = String(value || '');
  const pattern = /```([^\n`]*)\n?([\s\S]*?)```/g;
  let result = '';
  let cursor = 0;
  let match;
  while ((match = pattern.exec(source))) {
    result += formatAIPlainText(source.slice(cursor, match.index));
    const language = match[1].trim();
    result += `<pre title="双击复制"><code${language ? ` data-language="${escapeHTML(language)}"` : ''}>${escapeHTML(match[2].replace(/\n$/, ''))}</code></pre>`;
    cursor = pattern.lastIndex;
  }
  result += formatAIPlainText(source.slice(cursor));
  return result;
}

function formatAIPlainText(value) {
  if (!value) return '';
  const inline = text => escapeHTML(text)
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
  return value.trim().split(/\n{2,}/).map(block => {
    const lines = block.split('\n');
    if (lines.every(line => /^\s*[-*]\s+/.test(line))) {
      return `<ul>${lines.map(line => `<li>${inline(line.replace(/^\s*[-*]\s+/, ''))}</li>`).join('')}</ul>`;
    }
    const heading = lines[0].match(/^\s*(#{1,3})\s+(.+)$/);
    if (heading && lines.length === 1) return `<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`;
    if (lines.every(line => /^\s*>\s?/.test(line))) return `<blockquote>${inline(lines.map(line => line.replace(/^\s*>\s?/, '')).join('\n')).replace(/\n/g,'<br>')}</blockquote>`;
    return `<p>${inline(block).replace(/\n/g,'<br>')}</p>`;
  }).join('');
}

function scrollAIChatToBottom(force = false) {
  const stage = $('#ai-message-stage');
  if (!stage) return;
  const nearBottom = stage.scrollHeight - stage.scrollTop - stage.clientHeight < 120;
  if (force || nearBottom) stage.scrollTo({top:stage.scrollHeight,behavior:force ? 'auto' : 'smooth'});
}

function aiModelDisplayName(id) { return state.aiChat.models.find(item => item.id === id)?.name || 'DeepSeek V4'; }
function aiModelShortName(id) { return String(id || '').includes('pro') ? 'V4 Pro' : 'V4 Flash'; }
function formatAITokens(value = 0) { const number = Number(value) || 0; return number >= 1000000 ? `${(number/1000000).toFixed(1)}M` : number >= 1000 ? `${(number/1000).toFixed(1)}K` : String(number); }
function formatAIPolicyLimit(value) { return Number(value) === 0 ? '不限' : formatAITokens(value); }
function formatAIMessageTime(value) { return value ? new Date(value).toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'}) : ''; }
function formatAIRelativeTime(value) {
  if (!value) return '刚刚';
  const seconds = Math.max(0, (Date.now() - new Date(value).getTime()) / 1000);
  if (seconds < 60) return '刚刚';
  if (seconds < 3600) return `${Math.floor(seconds/60)} 分钟前`;
  if (seconds < 86400) return `${Math.floor(seconds/3600)} 小时前`;
  if (seconds < 604800) return `${Math.floor(seconds/86400)} 天前`;
  return new Date(value).toLocaleDateString('zh-CN',{month:'numeric',day:'numeric'});
}

function handleAIChatError(error) {
  const message = readError(error);
  if (message.includes('登录已过期') || message.includes('请先登录')) {
    state.account = {loggedIn:false,user:null};
    state.cloud.session = {loggedIn:false,user:null};
    renderAccountSession();
    renderAIChat();
  }
  showToast(message, true);
}

function accountDisplayName() {
  return String(state.account?.user?.nickname || state.account?.user?.username || '');
}

function renderAccountSession() {
  const loggedIn = Boolean(state.account?.loggedIn);
  const user = state.account?.user || null;
  const displayName = accountDisplayName();
  const nav = $('#open-account');
  nav.classList.toggle('logged-in', loggedIn);
  $('#account-home-name').textContent = loggedIn ? displayName : t('accountLogin');

  const chip = $('#account-status-chip');
  chip.classList.toggle('logged-in', loggedIn);
  chip.querySelector('b').textContent = loggedIn ? t('accountSignedIn') : t('signedOut');
  $('#account-auth-view').classList.toggle('hidden', loggedIn);
  $('#account-profile-view').classList.toggle('hidden', !loggedIn);

  if (loggedIn) {
    $('#account-profile-avatar').textContent = [...displayName][0]?.toUpperCase() || 'W';
    $('#account-profile-name').textContent = displayName;
    $('#account-profile-username').textContent = user?.username ? `@${user.username}` : '';
    $('#account-chat-status').textContent = realtimeStatusLabel(state.realtime?.status || 'offline');
    $('#account-service-grid').classList.toggle('chat-online', state.realtime?.status === 'online');
  } else {
    const registerMode = state.accountMode === 'register';
    $('#account-login-form').classList.toggle('hidden', registerMode);
    $('#account-register-form').classList.toggle('hidden', !registerMode);
    $$('#account-mode-tabs [data-account-mode]').forEach(button => {
      button.classList.toggle('active', button.dataset.accountMode === state.accountMode);
    });
  }
}

function openAccountPage(mode = 'login') {
  if (state.aiChatOpen) closeAIChatPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.stockOpen) closeStockPage();
  if (state.englishOpen || state.englishCenterOpen) closeEnglishPage();
  state.accountMode = mode === 'register' ? 'register' : 'login';
  state.accountOpen = true;
  document.body.classList.add('account-open');
  $('#account-page').classList.remove('hidden');
  renderAccountSession();
  if (!state.account.loggedIn) {
    setTimeout(() => $(state.accountMode === 'register' ? '#register-username' : '#account-username').focus(), 40);
  }
}

function closeAccountPage() {
  state.accountOpen = false;
  document.body.classList.remove('account-open');
  $('#account-page').classList.add('hidden');
}

function changeAccountMode(event) {
  const button = event.target.closest('[data-account-mode]');
  if (!button || state.account?.loggedIn || accountBusy || realtimeRegistrationBusy) return;
  state.accountMode = button.dataset.accountMode === 'register' ? 'register' : 'login';
  if (state.accountMode === 'register' && !$('#register-username').value) {
    $('#register-username').value = $('#account-username').value.trim();
  }
  renderAccountSession();
  setTimeout(() => $(state.accountMode === 'register' ? '#register-username' : '#account-username').focus(), 30);
}

async function submitAccountLogin(event) {
  event.preventDefault();
  if (accountBusy) return;
  const username = $('#account-username').value.trim();
  const password = $('#account-password').value;
  if (!username || !password) {
    showToast(t('accountUsernamePlaceholder'), true);
    return;
  }
  accountBusy = true;
  const submit = $('#submit-account-login');
  submit.disabled = true;
  submit.querySelector('b').textContent = t('signingIn');
  try {
    const session = await api.LoginAccount(username, password);
    state.account = {loggedIn: Boolean(session?.loggedIn), user: session?.user || null};
    state.cloud.session = {loggedIn: state.account.loggedIn, user: state.account.user};
    state.realtime = {...state.realtime, ...(session?.realtime || {})};
    localStorage.setItem('workdayIsland.accountUsername', username);
    $('#account-password').value = '';
    renderAccountSession();
    renderCloudSession();
    renderTranslatorSession();
    renderAIChat();
    renderRealtime();
    showToast(t('loginSuccess'));
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    accountBusy = false;
    submit.disabled = false;
    submit.querySelector('b').textContent = t('signIn');
  }
}

async function logoutAccount() {
  if (accountBusy) return;
  accountBusy = true;
  const button = $('#account-logout');
  button.disabled = true;
  button.textContent = t('signingOut');
  try {
    const session = await api.LogoutAccount();
    state.account = {loggedIn: false, user: null};
    state.cloud.session = {loggedIn: false, user: null};
    state.cloud.items = [];
    state.cloud.total = 0;
    state.cloud.quota = {};
    state.cloud.folders = [];
    state.translator.quota = {};
    state.translator.result = '';
    state.translator.history = [];
    state.translator.total = 0;
    state.translator.selected = [];
    state.aiChat.conversations = [];
    state.aiChat.messages = [];
    state.aiChat.current = null;
    state.aiChat.usage = {conversation_count:0,message_count:0,today_tokens:0,total_tokens:0};
    state.aiChat.usageLoaded = false;
    state.realtime = {...state.realtime, ...(session?.realtime || {}), identity: null, friends: [], friendRequests: []};
    state.accountMode = 'login';
    renderAccountSession();
    renderCloudSession();
    renderTranslatorSession();
    renderTranslator();
    renderAIChat();
    renderRealtime();
    showToast(t('logoutSuccess'));
    setTimeout(() => $('#account-username').focus(), 40);
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    accountBusy = false;
    button.disabled = false;
    button.textContent = t('signOutAll');
  }
}

function openChatPage() {
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.stockOpen) closeStockPage();
  if (state.englishOpen || state.englishCenterOpen) closeEnglishPage();
  const pendingPeer = Number(state.latestIncomingPeer) || (state.chatUnread > 0 ? latestIncomingChatPeer() : 0);
  if (pendingPeer) {
    setActiveRealtimePeer(pendingPeer, friendByUserID(pendingPeer) ? 'friend' : 'temporary');
    state.chatSection = 'conversation';
  }
  state.chatOpen = true;
  state.chatUnread = 0;
  state.latestIncomingPeer = 0;
  document.body.classList.add('chat-open');
  $('#chat-page').classList.remove('hidden');
  renderRealtime();
  markCurrentConversationRead();
  setTimeout(() => {
    if (currentPeerUserID()) $('#chat-input').focus();
  }, 40);
}

function closeChatPage() {
  state.chatOpen = false;
  document.body.classList.remove('chat-open');
  $('#chat-page').classList.add('hidden');
  renderRealtimeUnread();
}

function changeChatSection(event) {
  const button = event.target.closest('[data-chat-section]');
  if (!button) return;
  state.chatSection = button.dataset.chatSection === 'friends' ? 'friends' : 'conversation';
  renderChatSection();
  if (state.chatSection === 'friends') {
    setTimeout(() => {
      if (state.realtime.status === 'online') $('#friend-target').focus();
    }, 30);
  } else {
    markCurrentConversationRead();
    setTimeout(() => $('#peer-user-id').focus(), 30);
  }
}

function renderChatSection() {
  const friendsActive = state.chatSection === 'friends';
  $('#chat-conversation-view').classList.toggle('hidden', friendsActive);
  $('#friends-view').classList.toggle('hidden', !friendsActive);
  $$('#chat-section-tabs [data-chat-section]').forEach(button => {
    button.classList.toggle('active', button.dataset.chatSection === state.chatSection);
  });
}

async function openCloudPage() {
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.chatOpen) closeChatPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.stockOpen) await closeStockPage();
  if (state.englishOpen || state.englishCenterOpen) await closeEnglishPage();
  state.cloudOpen = true;
  document.body.classList.add('cloud-open');
  $('#cloud-page').classList.remove('hidden');
  try {
    state.cloud.session = await api.GetCloudDiskSession();
  } catch (error) {
    state.cloud.session = {loggedIn: false, user: null};
    showToast(readError(error), true);
  }
  renderCloudSession();
  if (state.cloud.session?.loggedIn) await refreshCloudDisk();
}

function closeCloudPage() {
  state.cloudOpen = false;
  document.body.classList.remove('cloud-open');
  $('#cloud-page').classList.add('hidden');
  $('#cloud-transfer').classList.add('hidden');
  closeModal('cloud-editor-modal');
  closeModal('cloud-delete-modal');
}

function openCloudAccountLogin() {
  closeCloudPage();
  openAccountPage('login');
}

function renderTranslatorLanguageOptions() {
  const source = $('#translation-source');
  const target = $('#translation-target');
  const sourceValue = source.value || 'auto';
  const targetValue = target.value || 'en';
  source.innerHTML = translatorLanguages.map(item => `<option value="${item.value}">${escapeHTML(t(item.key))}</option>`).join('');
  target.innerHTML = translatorLanguages.filter(item => item.value !== 'auto').map(item => `<option value="${item.value}">${escapeHTML(t(item.key))}</option>`).join('');
  source.value = translatorLanguages.some(item => item.value === sourceValue) ? sourceValue : 'auto';
  target.value = translatorLanguages.some(item => item.value === targetValue && item.value !== 'auto') ? targetValue : 'en';
}

function translatorLanguageLabel(value) {
  const item = translatorLanguages.find(language => language.value === value);
  return item ? t(item.key) : String(value || '—').toUpperCase();
}

async function openTranslatorPage() {
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.stockOpen) await closeStockPage();
  if (state.englishOpen || state.englishCenterOpen) await closeEnglishPage();
  state.translatorOpen = true;
  document.body.classList.add('translator-open');
  $('#translator-page').classList.remove('hidden');
  renderTranslatorSession();
  renderTranslator();
  if (state.account.loggedIn) {
    await refreshTranslationQuota();
    if (state.translator.tab === 'history') await refreshTranslationHistory();
    else setTimeout(() => $('#translation-input').focus(), 30);
  }
}

function closeTranslatorPage() {
  state.translatorOpen = false;
  document.body.classList.remove('translator-open');
  $('#translator-page').classList.add('hidden');
}

function openTranslatorAccountLogin() {
  closeTranslatorPage();
  openAccountPage('login');
}

function renderTranslatorSession() {
  const loggedIn = Boolean(state.account?.loggedIn);
  $('#translator-login-required').classList.toggle('hidden', loggedIn);
  $('#translator-workspace').classList.toggle('hidden', !loggedIn);
  const chip = $('#translator-account-chip');
  chip.classList.toggle('logged-in', loggedIn);
  chip.querySelector('b').textContent = loggedIn ? (accountDisplayName() || t('online')) : t('cloudNotLoggedIn');
}

async function changeTranslatorTab(event) {
  const button = event.target.closest('[data-translator-tab]');
  if (!button || !state.account.loggedIn) return;
  state.translator.tab = button.dataset.translatorTab === 'history' ? 'history' : 'text';
  renderTranslator();
  if (state.translator.tab === 'history') await refreshTranslationHistory();
  else setTimeout(() => $('#translation-input').focus(), 30);
}

function renderTranslator() {
  const historyActive = state.translator.tab === 'history';
  $('#translator-text-view').classList.toggle('hidden', historyActive);
  $('#translator-history-view').classList.toggle('hidden', !historyActive);
  $$('#translator-tabs [data-translator-tab]').forEach(button => {
    button.classList.toggle('active', button.dataset.translatorTab === state.translator.tab);
  });
  renderTranslationQuota();
  renderTranslationResult();
  renderTranslationHistory();
  updateTranslationCharacterCount();
}

function formatTranslationCharacters(value) {
  const count = Math.max(0, Number(value) || 0).toLocaleString(locale());
  return currentLanguage() === 'zh' ? `${count} 字符` : `${count} chars`;
}

function renderTranslationQuota() {
  const quota = state.translator.quota || {};
  const loaded = Object.keys(quota).length > 0;
  const unlimited = Boolean(quota.unlimited);
  const limit = Number(quota.daily_char_limit) || 0;
  const used = Number(quota.used_characters) || 0;
  const remaining = Number(quota.remaining_characters) || 0;
  $('#translation-used').textContent = loaded ? formatTranslationCharacters(used) : '—';
  $('#translation-limit').textContent = loaded ? (unlimited ? t('unlimited') : formatTranslationCharacters(limit)) : '—';
  $('#translation-remaining').textContent = loaded ? (unlimited ? t('unlimited') : formatTranslationCharacters(remaining)) : '—';
  const percent = !unlimited && limit > 0 ? Math.min(100, Math.round(used * 100 / limit)) : 0;
  const progress = $('#translation-quota-progress');
  progress.style.width = `${percent}%`;
  progress.classList.toggle('exhausted', Boolean(quota.quota_exceeded) || (!unlimited && loaded && remaining <= 0));
  $('#translation-quota-policy').textContent = quota.source_name || '—';
  updateTranslationCharacterCount();
}

async function refreshTranslationQuota() {
  if (!state.account.loggedIn) return;
  try {
    state.translator.quota = await api.GetTranslationQuota();
    renderTranslationQuota();
  } catch (error) {
    await handleTranslatorError(error);
  }
}

function updateTranslationCharacterCount() {
  const length = [...$('#translation-input').value.trim()].length;
  $('#translation-character-count').textContent = `${length.toLocaleString(locale())} / 4,000`;
  const quota = state.translator.quota || {};
  const insufficient = Boolean(Object.keys(quota).length && !quota.unlimited && length > Number(quota.remaining_characters || 0));
  $('#translation-quota-warning').classList.toggle('hidden', !insufficient);
  $('#submit-translation').disabled = state.translator.busy || !state.account.loggedIn || !length || insufficient || Boolean(quota.quota_exceeded);
}

function swapTranslationLanguages() {
  const source = $('#translation-source');
  const target = $('#translation-target');
  if (source.value === 'auto') {
    showToast(t('autoDetectCannotSwap'), true);
    return;
  }
  const previous = source.value;
  source.value = target.value;
  target.value = previous;
  const input = $('#translation-input').value;
  if (state.translator.result) {
    $('#translation-input').value = state.translator.result;
    state.translator.result = input;
    renderTranslationResult();
    updateTranslationCharacterCount();
  }
}

function clearTranslation() {
  $('#translation-input').value = '';
  state.translator.result = '';
  renderTranslationResult();
  updateTranslationCharacterCount();
  $('#translation-input').focus();
}

function renderTranslationResult() {
  const result = $('#translation-result');
  const translated = String(state.translator.result || '');
  result.classList.toggle('translator-result-empty', !translated);
  result.textContent = translated || t('noTranslationResult');
  $('#copy-translation').disabled = !translated;
  $('#translation-result-language').textContent = translated ? translatorLanguageLabel($('#translation-target').value) : '—';
}

async function submitTranslation() {
  if (!state.account.loggedIn || state.translator.busy) return;
  const text = $('#translation-input').value.trim();
  const source = $('#translation-source').value;
  const target = $('#translation-target').value;
  if (!text) {
    showToast(t('translationPlaceholder'), true);
    return;
  }
  if (source !== 'auto' && source === target) {
    showToast(currentLanguage() === 'zh' ? '源语言与目标语言不能相同' : 'Source and target languages must differ', true);
    return;
  }
  state.translator.busy = true;
  const button = $('#submit-translation');
  button.disabled = true;
  button.querySelector('b').textContent = t('translating');
  try {
    const result = await api.TranslateText(text, source, target);
    state.translator.result = result?.translated || '';
    renderTranslationResult();
    showToast(t('translationComplete'));
    await refreshTranslationQuota();
  } catch (error) {
    await handleTranslatorError(error);
    if (/额度|quota|429/i.test(readError(error))) await refreshTranslationQuota();
  } finally {
    state.translator.busy = false;
    button.querySelector('b').textContent = t('startTranslation');
    updateTranslationCharacterCount();
  }
}

function autoTranslatePastedText() {
  setTimeout(() => {
    const text = $('#translation-input').value.trim();
    if (!text) return;
    if (/[\u4e00-\u9fff]/.test(text)) $('#translation-target').value = 'en';
    else if (/[a-zA-Z]/.test(text)) $('#translation-target').value = 'zh';
    updateTranslationCharacterCount();
    submitTranslation();
  }, 120);
}

async function copyTranslationResult() {
  if (!state.translator.result) return;
  try {
    await navigator.clipboard.writeText(state.translator.result);
    showToast(t('translationCopied'));
  } catch (_) {
    showToast(currentLanguage() === 'zh' ? '复制失败，请手动选择译文' : 'Copy failed. Select the translation manually.', true);
  }
}

async function refreshTranslationHistory() {
  if (!state.account.loggedIn || state.translator.historyBusy) return;
  state.translator.historyBusy = true;
  renderTranslationHistory();
  try {
    const page = await api.ListTranslationHistory(state.translator.page, state.translator.pageSize, state.translator.keyword);
    state.translator.history = page?.list || [];
    state.translator.total = Number(page?.total) || 0;
    state.translator.selected = [];
  } catch (error) {
    await handleTranslatorError(error);
  } finally {
    state.translator.historyBusy = false;
    renderTranslationHistory();
  }
}

function renderTranslationHistory() {
  const list = $('#translation-history-list');
  const items = state.translator.history || [];
  if (state.translator.historyBusy) {
    list.innerHTML = `<div class="translator-history-empty"><span>◌</span><b>${escapeHTML(t('translationHistoryLoading'))}</b></div>`;
  } else if (!items.length) {
    list.innerHTML = `<div class="translator-history-empty"><span>文A</span><b>${escapeHTML(t('noTranslationHistory'))}</b></div>`;
  } else {
    list.innerHTML = items.map(item => {
      const checked = state.translator.selected.includes(Number(item.id)) ? ' checked' : '';
      return `<article class="translator-history-row" data-translation-history-id="${Number(item.id)}">
        <label><input type="checkbox" data-translation-history-select${checked}></label>
        <span class="language-pair">${escapeHTML(translatorLanguageLabel(item.source_lang))} → ${escapeHTML(translatorLanguageLabel(item.target_lang))}</span>
        <p title="${escapeHTML(item.source_text)}">${escapeHTML(item.source_text)}</p>
        <p title="${escapeHTML(item.target_text)}">${escapeHTML(item.target_text)}</p>
        <small>${escapeHTML(formatTranslationDate(item.translate_time || item.create_time))}</small>
        <button type="button" data-translation-history-action="delete">${escapeHTML(t('delete'))}</button>
      </article>`;
    }).join('');
  }
  const pages = Math.max(1, Math.ceil(state.translator.total / state.translator.pageSize));
  $('#translation-history-page').textContent = `${state.translator.page} / ${pages}`;
  $('#translation-history-total').textContent = t('totalRecords', {count: state.translator.total});
  $('#translation-history-prev').disabled = state.translator.page <= 1 || state.translator.historyBusy;
  $('#translation-history-next').disabled = state.translator.page >= pages || state.translator.historyBusy;
  const allSelected = items.length > 0 && items.every(item => state.translator.selected.includes(Number(item.id)));
  $('#select-all-translation-history').checked = allSelected;
  $('#select-all-translation-history').indeterminate = !allSelected && state.translator.selected.length > 0;
  $('#delete-translation-history-batch').disabled = state.translator.selected.length === 0 || state.translator.historyBusy;
}

function formatTranslationDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleString(locale(), {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', hour12:false});
}

function updateTranslationHistorySelection(event) {
  const checkbox = event.target.closest('[data-translation-history-select]');
  if (!checkbox) return;
  const row = checkbox.closest('[data-translation-history-id]');
  const id = Number(row?.dataset.translationHistoryId);
  if (!id) return;
  const selected = new Set(state.translator.selected);
  if (checkbox.checked) selected.add(id); else selected.delete(id);
  state.translator.selected = [...selected];
  renderTranslationHistory();
}

function toggleAllTranslationHistory(event) {
  state.translator.selected = event.target.checked ? state.translator.history.map(item => Number(item.id)).filter(Boolean) : [];
  renderTranslationHistory();
}

async function handleTranslationHistoryAction(event) {
  const button = event.target.closest('[data-translation-history-action="delete"]');
  if (!button) return;
  const id = Number(button.closest('[data-translation-history-id]')?.dataset.translationHistoryId);
  if (!id || !window.confirm(t('confirmDeleteTranslation'))) return;
  try {
    await api.DeleteTranslationHistory(id);
    showToast(t('translationHistoryDeleted'));
    if (state.translator.history.length === 1 && state.translator.page > 1) state.translator.page--;
    await refreshTranslationHistory();
  } catch (error) {
    await handleTranslatorError(error);
  }
}

async function deleteSelectedTranslationHistory() {
  const ids = [...state.translator.selected];
  if (!ids.length || !window.confirm(t('confirmBatchDeleteTranslation', {count: ids.length}))) return;
  try {
    await api.DeleteTranslationHistoryBatch(ids);
    showToast(t('translationHistoryBatchDeleted'));
    if (state.translator.history.length <= ids.length && state.translator.page > 1) state.translator.page--;
    await refreshTranslationHistory();
  } catch (error) {
    await handleTranslatorError(error);
  }
}

async function searchTranslationHistory(event) {
  event.preventDefault();
  state.translator.keyword = $('#translation-history-keyword').value.trim();
  state.translator.page = 1;
  await refreshTranslationHistory();
}

async function changeTranslationHistoryPage(delta) {
  const pages = Math.max(1, Math.ceil(state.translator.total / state.translator.pageSize));
  const next = Math.max(1, Math.min(pages, state.translator.page + delta));
  if (next === state.translator.page) return;
  state.translator.page = next;
  await refreshTranslationHistory();
}

async function exportTranslationHistory() {
  if (!state.account.loggedIn) return;
  const button = $('#export-translation-history');
  button.disabled = true;
  try {
    const result = await api.ExportTranslationHistory(state.translator.keyword);
    if (!result?.cancelled) showToast(t('translationHistoryExported'));
  } catch (error) {
    await handleTranslatorError(error);
  } finally {
    button.disabled = false;
  }
}

async function handleTranslatorError(error) {
  const message = readError(error);
  if (/登录|expired|sign in|unauthorized/i.test(message)) {
    let session = null;
    try { session = await api.LogoutAccount(); } catch {}
    state.account = {loggedIn: false, user: null};
    state.cloud.session = {loggedIn: false, user: null};
    state.realtime = {...state.realtime, ...(session?.realtime || {}), identity: null, friends: [], friendRequests: []};
    renderAccountSession();
    renderCloudSession();
    renderRealtime();
    renderTranslatorSession();
  }
  showToast(message, true);
}

function renderCloudSession() {
  const loggedIn = Boolean(state.cloud.session?.loggedIn);
  $('#cloud-login-required').classList.toggle('hidden', loggedIn);
  $('#cloud-workspace').classList.toggle('hidden', !loggedIn);
  const chip = $('#cloud-account-chip');
  chip.classList.toggle('logged-in', loggedIn);
  const user = state.cloud.session?.user;
  chip.querySelector('b').textContent = loggedIn ? (user?.nickname || user?.username || t('online')) : t('cloudNotLoggedIn');
  if (loggedIn) renderCloudDisk();
}

async function refreshCloudDisk() {
  if (!state.cloud.session?.loggedIn || state.cloud.busy) return;
  state.cloud.busy = true;
  renderCloudDisk();
  try {
    const parentID = Number(state.cloud.folders.at(-1)?.id) || 0;
    const [page, quota] = await Promise.all([
      api.ListCloudDiskItems(parentID, state.cloud.page, state.cloud.pageSize, state.cloud.keyword),
      api.GetCloudDiskQuota()
    ]);
    state.cloud.items = page?.list || [];
    state.cloud.total = Number(page?.total) || 0;
    state.cloud.quota = quota || {};
  } catch (error) {
    const message = readError(error);
    if (/登录|expired|sign in/i.test(message)) {
      let session = null;
      try { session = await api.LogoutAccount(); } catch {}
      state.account = {loggedIn: false, user: null};
      state.cloud.session = {loggedIn: false, user: null};
      state.cloud.items = [];
      state.cloud.total = 0;
      state.realtime = {...state.realtime, ...(session?.realtime || {}), identity: null, friends: [], friendRequests: []};
      renderAccountSession();
      renderRealtime();
      renderCloudSession();
    }
    showToast(message, true);
  } finally {
    state.cloud.busy = false;
    renderCloudDisk();
  }
}

function renderCloudDisk() {
  renderCloudQuota();
  renderCloudBreadcrumbs();
  const list = $('#cloud-file-list');
  const current = state.cloud.folders.at(-1);
  $('#cloud-folder-name').textContent = current?.name || t('allFiles');
  $('#cloud-total').textContent = t('cloudItems', {count: state.cloud.total});
  if (state.cloud.busy) {
    list.innerHTML = `<div class="cloud-loading"><span>◌</span><b>${escapeHTML(t('cloudLoading'))}</b></div>`;
  } else if (!state.cloud.items.length) {
    list.innerHTML = `<div class="cloud-empty"><span>☁</span><b>${escapeHTML(t('cloudEmpty'))}</b></div>`;
  } else {
    list.innerHTML = state.cloud.items.map(item => {
      const folder = Number(item.node_type) === 1;
      const icon = folder
        ? '<svg viewBox="0 0 24 24"><path d="M3 6.5h6l2 2h10v10H3Z"/></svg>'
        : '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5"/></svg>';
      const detail = folder ? t('folder') : `${formatCloudBytes(item.size)} · ${escapeHTML(item.content_type || t('file'))}`;
      return `<article class="cloud-file-row" data-cloud-id="${Number(item.id)}" data-cloud-type="${folder ? 'folder' : 'file'}">
        <span class="cloud-file-icon ${folder ? 'folder' : ''}">${icon}</span>
        <span class="cloud-file-copy"><strong>${escapeHTML(item.name)}</strong><small>${detail}</small></span>
        <time class="cloud-file-time">${escapeHTML(formatCloudDate(item.modify_time || item.create_time))}</time>
        <span class="cloud-file-actions">
          ${folder ? '' : `<button type="button" data-cloud-action="download">${escapeHTML(t('download'))}</button>`}
          <button type="button" data-cloud-action="rename">${escapeHTML(t('rename'))}</button>
          <button type="button" class="danger" data-cloud-action="delete">${escapeHTML(t('delete'))}</button>
        </span>
      </article>`;
    }).join('');
  }
  const pages = Math.max(1, Math.ceil(state.cloud.total / state.cloud.pageSize));
  $('#cloud-pagination').classList.toggle('hidden', pages <= 1);
  $('#cloud-page-number').textContent = `${state.cloud.page} / ${pages}`;
  $('#cloud-prev').disabled = state.cloud.page <= 1;
  $('#cloud-next').disabled = state.cloud.page >= pages;
}

function renderCloudQuota() {
  const quota = state.cloud.quota || {};
  const used = Number(quota.used_bytes) || 0;
  const limit = Number(quota.total_storage_limit) || 0;
  const remaining = Number(quota.storage_remaining);
  const percent = limit > 0 ? Math.min(100, Math.round(used * 100 / limit)) : 0;
  const ring = $('#cloud-storage-percent').parentElement;
  ring.style.setProperty('--cloud-progress', `${percent * 3.6}deg`);
  $('#cloud-storage-percent').textContent = `${percent}%`;
  $('#cloud-used').textContent = formatCloudBytes(used);
  $('#cloud-limit').textContent = limit > 0 ? formatCloudBytes(limit) : t('unlimited');
  $('#cloud-remaining').textContent = remaining >= 0 ? formatCloudBytes(remaining) : t('unlimited');
  $('#cloud-policy').textContent = quota.source_name || (limit === 5 * 1024 ** 3 ? '5GB PRO' : 'CLOUD');
}

function renderCloudBreadcrumbs() {
  $('#cloud-breadcrumbs').innerHTML = [
    `<button type="button" data-cloud-level="-1">⌂ ${escapeHTML(t('allFiles'))}</button>`,
    ...state.cloud.folders.map((folder, index) => `<span>›</span><button type="button" data-cloud-level="${index}">${escapeHTML(folder.name)}</button>`)
  ].join('');
}

function navigateCloudBreadcrumb(event) {
  const button = event.target.closest('[data-cloud-level]');
  if (!button) return;
  const level = Number(button.dataset.cloudLevel);
  state.cloud.folders = level < 0 ? [] : state.cloud.folders.slice(0, level + 1);
  state.cloud.page = 1;
  state.cloud.keyword = '';
  $('#cloud-search').value = '';
  refreshCloudDisk();
}

async function handleCloudFileAction(event) {
  const row = event.target.closest('[data-cloud-id]');
  if (!row || state.cloud.busy) return;
  const item = state.cloud.items.find(entry => Number(entry.id) === Number(row.dataset.cloudId));
  if (!item) return;
  const action = event.target.closest('[data-cloud-action]')?.dataset.cloudAction;
  if (!action) {
    if (row.dataset.cloudType === 'folder') {
      state.cloud.folders.push({id: item.id, name: item.name});
      state.cloud.page = 1;
      state.cloud.keyword = '';
      $('#cloud-search').value = '';
      await refreshCloudDisk();
    } else {
      await downloadCloudFile(item);
    }
    return;
  }
  event.stopPropagation();
  if (action === 'download') await downloadCloudFile(item);
  if (action === 'rename') openCloudRenameEditor(item);
  if (action === 'delete') openCloudDeleteConfirm(item);
}

function openCloudFolderEditor() {
  state.cloud.editorMode = 'create';
  state.cloud.editorTarget = null;
  $('#cloud-editor-title').textContent = t('cloudCreateFolderTitle');
  $('#cloud-editor-label').textContent = t('cloudFolderName');
  $('#cloud-editor-submit').textContent = t('cloudCreate');
  $('#cloud-editor-input').value = '';
  openModal('cloud-editor-modal');
  window.setTimeout(() => $('#cloud-editor-input').focus(), 30);
}

function openCloudRenameEditor(item) {
  state.cloud.editorMode = 'rename';
  state.cloud.editorTarget = item;
  $('#cloud-editor-title').textContent = t('cloudRenameTitle');
  $('#cloud-editor-label').textContent = t('cloudNewName');
  $('#cloud-editor-submit').textContent = t('cloudSave');
  $('#cloud-editor-input').value = item.name;
  openModal('cloud-editor-modal');
  window.setTimeout(() => {
    $('#cloud-editor-input').focus();
    $('#cloud-editor-input').select();
  }, 30);
}

async function submitCloudEditor(event) {
  event.preventDefault();
  const input = $('#cloud-editor-input');
  const submit = $('#cloud-editor-submit');
  const name = input.value.trim();
  if (!name) {
    showToast(t('cloudNameRequired'), true);
    input.focus();
    return;
  }
  if (state.cloud.editorMode === 'rename' && name === state.cloud.editorTarget?.name) {
    closeModal('cloud-editor-modal');
    return;
  }
  submit.disabled = true;
  try {
    if (state.cloud.editorMode === 'rename') {
      await api.RenameCloudDiskItem(Number(state.cloud.editorTarget.id), name);
      showToast(t('cloudRenamed'));
    } else {
      const parentID = Number(state.cloud.folders.at(-1)?.id) || 0;
      await api.CreateCloudDiskFolder(parentID, name);
      showToast(t('cloudFolderCreated'));
    }
    closeModal('cloud-editor-modal');
    await refreshCloudDisk();
  } catch (error) { showToast(readError(error), true); }
  finally { submit.disabled = false; }
}

function openCloudDeleteConfirm(item) {
  state.cloud.deleteTarget = item;
  $('#cloud-delete-message').textContent = t('cloudDeleteConfirm', {name: item.name});
  openModal('cloud-delete-modal');
  window.setTimeout(() => $('#cloud-delete-confirm').focus(), 30);
}

async function confirmCloudDelete() {
  const item = state.cloud.deleteTarget;
  if (!item) return;
  const button = $('#cloud-delete-confirm');
  button.disabled = true;
  try {
    await api.DeleteCloudDiskItem(Number(item.id));
    closeModal('cloud-delete-modal');
    state.cloud.deleteTarget = null;
    showToast(t('cloudDeleted'));
    await refreshCloudDisk();
  } catch (error) { showToast(readError(error), true); }
  finally { button.disabled = false; }
}

async function uploadCloudFile() {
  if (state.cloud.busy) return;
  try {
    const parentID = Number(state.cloud.folders.at(-1)?.id) || 0;
    const result = await api.UploadCloudDiskFile(parentID);
    if (!result?.cancelled) {
      showToast(t('cloudUploadSuccess'));
      await refreshCloudDisk();
    }
  } catch (error) { showToast(readError(error), true); }
  finally { window.setTimeout(() => $('#cloud-transfer').classList.add('hidden'), 700); }
}

async function downloadCloudFile(item) {
  try {
    const result = await api.DownloadCloudDiskFile(Number(item.id), item.name);
    if (!result?.cancelled) showToast(t('cloudDownloadSuccess'));
  } catch (error) { showToast(readError(error), true); }
  finally { window.setTimeout(() => $('#cloud-transfer').classList.add('hidden'), 700); }
}

function searchCloudDisk(event) {
  event.preventDefault();
  state.cloud.keyword = $('#cloud-search').value.trim();
  state.cloud.page = 1;
  refreshCloudDisk();
}

function changeCloudPage(direction) {
  const pages = Math.max(1, Math.ceil(state.cloud.total / state.cloud.pageSize));
  state.cloud.page = Math.max(1, Math.min(pages, state.cloud.page + direction));
  refreshCloudDisk();
}

function renderCloudTransferProgress(payload = {}) {
  if (!state.cloudOpen) return;
  const percent = Math.max(0, Math.min(100, Number(payload.percent) || 0));
  $('#cloud-transfer').classList.remove('hidden');
  $('#cloud-transfer-name').textContent = payload.name || t(payload.direction === 'download' ? 'download' : 'uploadFile');
  $('#cloud-transfer-percent').textContent = `${percent}%`;
  $('#cloud-transfer-bar').style.width = `${percent}%`;
}

async function openStockPage() {
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.englishOpen || state.englishCenterOpen) await closeEnglishPage();
  state.stockOpen = true;
  document.documentElement.classList.add('stock-window');
  document.body.classList.add('stock-open');
  $('#stock-page').classList.remove('hidden');
  try {
    await api.SetStockWindow?.(true);
  } catch (error) {
    showToast(readError(error), true);
  }
  await refreshStocks();
  window.clearInterval(stockRefreshTimer);
  stockRefreshTimer = window.setInterval(refreshStocks, 5000);
}

async function closeStockPage() {
  state.stockOpen = false;
  window.clearInterval(stockRefreshTimer);
  stockRefreshTimer = 0;
  document.documentElement.classList.remove('stock-window');
  document.body.classList.remove('stock-open');
  $('#stock-page').classList.add('hidden');
  try {
    await api.SetStockWindow?.(false);
  } catch (error) {
    showToast(readError(error), true);
  }
}

async function refreshStocks() {
  if (stockBusy || !state.stockOpen) return;
  stockBusy = true;
  $('#refresh-stocks').classList.add('loading');
  try {
    state.stocks = {...state.stocks, ...(await api.GetStockQuotes())};
  } catch (error) {
    state.stocks.error = readError(error);
    state.stocks.stale = true;
  } finally {
    stockBusy = false;
    $('#refresh-stocks').classList.remove('loading');
    renderStocks();
  }
}

async function addStock(event) {
  event.preventDefault();
  if (stockBusy) return;
  const input = $('#stock-code');
  const value = input.value.trim();
  if (!value) return;
  stockBusy = true;
  try {
    state.stocks = {...state.stocks, ...(await api.AddStock(value))};
    input.value = '';
    showToast(t('stockAdded'));
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    stockBusy = false;
    renderStocks();
    input.focus();
  }
}

async function removeStock(event) {
  const button = event.target.closest('[data-stock-symbol]');
  if (!button || stockBusy) return;
  stockBusy = true;
  try {
    state.stocks = {...state.stocks, ...(await api.RemoveStock(button.dataset.stockSymbol))};
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    stockBusy = false;
    renderStocks();
  }
}

function renderStocks() {
  const quotes = state.stocks?.quotes || [];
  const list = $('#stock-list');
  list.innerHTML = quotes.length
    ? quotes.map(quote => {
      const direction = Number(quote.changePercent) > 0 ? 'up' : Number(quote.changePercent) < 0 ? 'down' : '';
      const sign = Number(quote.changePercent) > 0 ? '+' : '';
      return `<article class="stock-row">
        <div class="stock-symbol"><strong>${escapeHTML(quote.name)}</strong><small>${escapeHTML(quote.code)}</small></div>
        <div class="stock-price"><strong>${formatStockNumber(quote.price)}</strong><small>${sign}${formatStockNumber(quote.change)}</small></div>
        <div class="stock-change ${direction}">${sign}${Number(quote.changePercent || 0).toFixed(2)}%</div>
        <button type="button" class="stock-remove" data-stock-symbol="${escapeHTML(quote.symbol)}" title="${escapeHTML(t('removeStock'))}">×</button>
      </article>`;
    }).join('')
    : `<div class="stock-empty">${escapeHTML(t('stockNoData'))}</div>`;
  const status = $('#stock-status');
  const quoteTimes = quotes.map(quote => new Date(quote.updatedAt).getTime()).filter(Number.isFinite);
  const latest = quoteTimes.length ? new Date(Math.max(...quoteTimes)) : new Date(state.stocks?.updatedAt);
  const time = Number.isNaN(latest.getTime()) ? '--:--' : latest.toLocaleTimeString(locale(), {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false});
  status.textContent = state.stocks?.error
    ? t('stockCached', {time})
    : t('stockUpdated', {time});
  status.title = state.stocks?.error || status.textContent;
  status.classList.toggle('error', Boolean(state.stocks?.error));
}

function formatStockNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toLocaleString(locale(), {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '--';
}

async function openEnglishPage() {
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.stockOpen) await closeStockPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.englishOpen) await closeEnglishCompactPage(false);
  if (state.englishCenterOpen) return;
  state.englishCenterOpen = true;
  document.body.classList.add('english-center-open');
  $('#english-center-page').classList.remove('hidden');
  await refreshEnglishNotebook();
}

function closeEnglishCenterPage() {
  state.englishCenterOpen = false;
  document.body.classList.remove('english-center-open');
  $('#english-center-page').classList.add('hidden');
}

async function openEnglishCompactPage() {
  closeEnglishCenterPage();
  state.englishOpen = true;
  state.english.mode = normaliseEnglishMode(state.settings.englishMode);
  state.english.answered = 0;
  state.english.correct = 0;
  state.english.previous = null;
  $('#english-mode').value = state.english.mode;
  document.documentElement.classList.add('english-window');
  document.body.classList.add('english-open');
  applyEnglishBackgroundOpacity();
  $('#english-page').classList.remove('hidden');
  try {
    await api.SetEnglishWindow?.(true);
    await loadEnglishBatch();
  } catch (error) {
    showEnglishError(error);
  }
}

async function closeEnglishCompactPage(returnToCenter = true) {
  state.englishOpen = false;
  state.english.busy = false;
  $('#english-mode').disabled = false;
  document.documentElement.classList.remove('english-window');
  document.body.classList.remove('english-open');
  $('#english-page').classList.add('hidden');
  try {
    await api.SetEnglishWindow?.(false);
  } catch (error) {
    showToast(readError(error), true);
  }
  await englishRecordWrites;
  applyCompactUI();
  if (returnToCenter) {
    state.englishCenterOpen = true;
    document.body.classList.add('english-center-open');
    $('#english-center-page').classList.remove('hidden');
    await refreshEnglishNotebook();
  }
}

async function closeEnglishPage() {
  if (state.englishOpen) await closeEnglishCompactPage(false);
  closeEnglishCenterPage();
}

async function refreshEnglishNotebook() {
  state.englishNotebook.busy = true;
  renderEnglishNotebook();
  try {
    const notebook = await api.GetEnglishNotebook();
    state.englishNotebook.words = Array.isArray(notebook?.words) ? notebook.words : [];
    state.englishNotebook.wrongWords = Array.isArray(notebook?.wrongWords) ? notebook.wrongWords : [];
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    state.englishNotebook.busy = false;
    renderEnglishNotebook();
  }
}

function changeEnglishNotebookTab(event) {
  const button = event.target.closest('[data-english-book-tab]');
  if (!button) return;
  state.englishNotebook.tab = button.dataset.englishBookTab === 'wrong' ? 'wrong' : 'words';
  state.englishNotebook.mode = 'all';
  $('#english-center-mode').value = 'all';
  renderEnglishNotebook();
}

function filterEnglishNotebook() {
  state.englishNotebook.keyword = $('#english-center-search').value.trim().toLowerCase();
  state.englishNotebook.mode = $('#english-center-mode').value || 'all';
  renderEnglishNotebook();
}

function englishModeLabel(mode) {
  return {
    study: t('englishStudyMode'),
    sentence: t('englishSentenceMode'),
    quiz: t('englishQuizMode'),
    chinese: t('englishChineseMode'),
    spelling: t('englishSpellingMode')
  }[mode] || mode;
}

function englishSourceLabel(source) {
  return {
    nce2: t('englishSourceNCE2'),
    nce3: t('englishSourceNCE3'),
    cet4: t('englishSourceCET4'),
    cet6: t('englishSourceCET6'),
    ielts: t('englishSourceIELTS'),
    all: t('englishSourceAll')
  }[source] || source || '—';
}

function renderEnglishNotebook() {
  const notebook = state.englishNotebook;
  const words = Array.isArray(notebook.words) ? notebook.words : [];
  const wrongWords = Array.isArray(notebook.wrongWords) ? notebook.wrongWords : [];
  $('#english-word-count').textContent = words.length.toLocaleString(locale());
  $('#english-wrong-count').textContent = wrongWords.length.toLocaleString(locale());
  $('#english-view-count').textContent = words.reduce((total, item) => total + Math.max(0, Number(item.seenCount) || 0), 0).toLocaleString(locale());
  $('#english-word-tab-count').textContent = words.length.toLocaleString(locale());
  $('#english-wrong-tab-count').textContent = wrongWords.length.toLocaleString(locale());
  $$('#english-center-tabs [data-english-book-tab]').forEach(button => {
    button.classList.toggle('active', button.dataset.englishBookTab === notebook.tab);
  });
  const wrongActive = notebook.tab === 'wrong';
  $('#english-center-description-text').textContent = t(wrongActive ? 'englishWrongBookHint' : 'englishNotebookHint');
  const allowedModes = wrongActive ? new Set(['all', 'quiz', 'chinese', 'spelling']) : new Set(['all', 'study', 'sentence', 'quiz', 'chinese', 'spelling']);
  $$('#english-center-mode option').forEach(option => {
    const allowed = allowedModes.has(option.value);
    option.hidden = !allowed;
    option.disabled = !allowed;
  });
  if (!allowedModes.has(notebook.mode)) {
    notebook.mode = 'all';
    $('#english-center-mode').value = 'all';
  }
  let records = wrongActive ? wrongWords : words;
  const keyword = notebook.keyword;
  records = records.filter(item => {
    const modes = Array.isArray(item.modes) ? item.modes : [];
    if (notebook.mode !== 'all' && !modes.includes(notebook.mode)) return false;
    if (!keyword) return true;
    return [item.word, item.translation, item.phonetic, item.example, item.lastAnswer, item.correctAnswer]
      .some(value => String(value || '').toLowerCase().includes(keyword));
  }).sort((left, right) => {
    const leftTime = new Date(wrongActive ? left.lastWrongAt : left.lastSeenAt).getTime() || 0;
    const rightTime = new Date(wrongActive ? right.lastWrongAt : right.lastSeenAt).getTime() || 0;
    return rightTime - leftTime;
  });
  const list = $('#english-center-list');
  if (notebook.busy) {
    list.innerHTML = `<div class="english-center-empty"><span>◌</span><b>${escapeHTML(t('englishLoading'))}</b></div>`;
    return;
  }
  if (!records.length) {
    list.innerHTML = `<div class="english-center-empty${wrongActive ? ' wrong' : ''}"><span>${wrongActive ? '×' : 'Aa'}</span><b>${escapeHTML(t(wrongActive ? 'noEnglishWrongWords' : 'noEnglishWords'))}</b></div>`;
    return;
  }
  list.innerHTML = records.map(item => renderEnglishBookCard(item, wrongActive)).join('');
}

function renderEnglishBookCard(item, wrong) {
  const modes = (Array.isArray(item.modes) ? item.modes : []).map(mode =>
    `<span class="mode">${escapeHTML(englishModeLabel(mode))}</span>`
  ).join('');
  const timestamp = wrong ? item.lastWrongAt : item.lastSeenAt;
  const count = wrong
    ? t('wrongTimes', {count: Math.max(1, Number(item.wrongCount) || 1)})
    : t('seenTimes', {count: Math.max(1, Number(item.seenCount) || 1)});
  const answers = wrong ? `<div class="english-wrong-answer">
    <p>${escapeHTML(t('lastAnswer'))}<span title="${escapeHTML(item.lastAnswer || '—')}">${escapeHTML(item.lastAnswer || '—')}</span></p>
    <p>${escapeHTML(t('correctAnswerLabel'))}<span title="${escapeHTML(item.correctAnswer || item.translation || '—')}">${escapeHTML(item.correctAnswer || item.translation || '—')}</span></p>
  </div>` : '';
  return `<article class="english-book-card${wrong ? ' wrong' : ''}">
    <div class="english-book-card-head"><div><strong>${escapeHTML(item.word)}</strong><em>${escapeHTML(item.phonetic || '')}</em></div><time>${escapeHTML(formatEnglishRecordDate(timestamp))}</time></div>
    <p class="english-book-meaning" title="${escapeHTML(item.translation)}">${escapeHTML(item.translation)}</p>
    <p class="english-book-example" title="${escapeHTML(item.example || '')}">${escapeHTML(item.example || '—')}</p>
    ${answers}
    <div class="english-book-meta"><div class="english-book-tags">${modes}<span>${escapeHTML(englishSourceLabel(item.source))}</span></div><small>${escapeHTML(count)}</small></div>
  </article>`;
}

function formatEnglishRecordDate(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleString(locale(), {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', hour12:false});
}

async function changeEnglishMode() {
  state.english.mode = normaliseEnglishMode($('#english-mode').value);
  state.english.answered = 0;
  state.english.correct = 0;
  state.english.previous = null;
  state.settings.englishMode = state.english.mode;
  try {
    state.settings = {...state.settings, ...(await api.SaveSettings(state.settings))};
  } catch (_) { /* Learning remains available even if the preference cannot be persisted. */ }
  await loadEnglishBatch();
}

function setEnglishView(view) {
  $('#english-loading').classList.toggle('hidden', view !== 'loading');
  $('#english-error').classList.toggle('hidden', view !== 'error');
  $('#english-study').classList.toggle('hidden', view !== 'study');
  $('#english-study-stage').classList.toggle('hidden', view !== 'study');
  $('#english-sentence').classList.toggle('hidden', view !== 'sentence');
  $('#english-sentence-stage').classList.toggle('hidden', view !== 'sentence');
  $('#english-quiz').classList.toggle('hidden', view !== 'quiz');
  $('#english-options').classList.toggle('hidden', view !== 'quiz');
  $('#english-spelling').classList.toggle('hidden', view !== 'spelling');
  $('#english-spelling-stage').classList.toggle('hidden', view !== 'spelling');
  const exercise = view === 'quiz' || view === 'spelling';
  $('#english-score').classList.toggle('hidden', !exercise);
  if (!exercise) $('#english-previous').classList.add('hidden');
  scheduleEnglishWindowFit();
}

function scheduleEnglishWindowFit() {
  const canFitSize = typeof api.SetEnglishWindowContentSize === 'function';
  const canFitWidth = typeof api.SetEnglishWindowContentWidth === 'function';
  if (!state.englishOpen || !hasNativeAPI || (!canFitSize && !canFitWidth)) return;
  window.clearTimeout(englishFitTimer);
  englishFitTimer = window.setTimeout(async () => {
    if (!state.englishOpen) return;
    const toolbar = $('.english-toolbar');
    const toolbarItems = [...toolbar.children].filter(element => !element.classList.contains('hidden'));
    const toolbarGap = Number.parseFloat(getComputedStyle(toolbar).columnGap) || 0;
    const toolbarWidth = toolbarItems.reduce((total, element) => {
      if (element.classList.contains('english-previous')) return total + Math.min(element.scrollWidth, 190);
      const content = element.classList.contains('english-prompt') ? element.querySelector('strong') : element;
      return total + Math.ceil(Math.max(content?.scrollWidth || 0, element.getBoundingClientRect().width));
    }, Math.max(0, toolbarItems.length - 1) * toolbarGap);

    let stageWidth = 0;
    const options = $$('#english-options .english-option');
    if (options.length && !$('#english-options').classList.contains('hidden')) {
      const optionGap = Number.parseFloat(getComputedStyle($('#english-options')).columnGap) || 0;
      stageWidth = options.reduce((total, option) => total + Math.min(option.scrollWidth + 2, 280), Math.max(0, options.length - 1) * optionGap);
    } else if (!$('#english-study-stage').classList.contains('hidden')) {
      const stage = $('#english-study-stage');
      const gap = Number.parseFloat(getComputedStyle(stage).columnGap) || 0;
      const children = [...stage.children];
      stageWidth = children.reduce((total, element, index) => {
        const limit = index === 1 ? 320 : 160;
        return total + Math.min(Math.max(element.scrollWidth, element.getBoundingClientRect().width), limit);
      }, Math.max(0, children.length - 1) * gap);
    } else if (!$('#english-sentence-stage').classList.contains('hidden')) {
      const stage = $('#english-sentence-stage');
      stageWidth = Math.min(Math.max(stage.scrollWidth, stage.getBoundingClientRect().width), 1180);
    } else if (!$('#english-spelling-stage').classList.contains('hidden')) {
      stageWidth = Math.min($('#english-spelling-mask').scrollWidth, 190) + 310 + 3;
    }
    const width = Math.max(420, Math.min(1200, Math.ceil(Math.max(toolbarWidth, stageWidth) + 14)));
    const height = state.english.mode === 'sentence' ? 112 : 80;
    try {
      if (canFitSize) await api.SetEnglishWindowContentSize(width, height);
      else await api.SetEnglishWindowContentWidth(width);
    } catch (_) { /* Keep learning usable if resizing is unavailable. */ }
  }, 24);
}

async function loadEnglishBatch() {
  if (!state.englishOpen || state.english.busy) return;
  state.english.busy = true;
  $('#english-mode').disabled = true;
  setEnglishView('loading');
  try {
    const batch = await api.StartEnglishLearning(state.english.mode);
    if (!state.englishOpen) return;
    state.english.sessionId = Number(batch?.sessionId) || 0;
    state.english.questions = Array.isArray(batch?.questions) ? batch.questions : [];
    state.english.index = 0;
    state.english.shownAt = Date.now();
    if (!state.english.questions.length) throw new Error(t('englishLoadFailed'));
    renderEnglishQuestion();
  } catch (error) {
    if (state.englishOpen) showEnglishError(error);
  } finally {
    state.english.busy = false;
    $('#english-mode').disabled = false;
  }
}

function showEnglishError(error) {
  setEnglishView('error');
  $('#english-error-text').textContent = readError(error) || t('englishLoadFailed');
}

function currentEnglishQuestion() {
  return state.english.questions[state.english.index] || null;
}

function renderEnglishQuestion() {
  const question = currentEnglishQuestion();
  if (!question) { loadEnglishBatch(); return; }
  state.english.shownAt = Date.now();
  recordEnglishQuestion(question);
  if (state.english.mode === 'study') {
    setEnglishView('study');
    $('#english-word').textContent = question.word;
    $('#english-phonetic').textContent = question.phonetic || '';
    $('#english-translation').textContent = question.translation;
    $('#english-countdown').textContent = '60s';
    return;
  }
  if (state.english.mode === 'sentence') {
    setEnglishView('sentence');
    $('#english-sentence-word').textContent = question.word;
    $('#english-sentence-word').title = question.word;
    const example = String(question.example || '').trim();
    $('#english-example-en').textContent = example || t('exampleUnavailable');
    $('#english-example-en').title = example;
    $('#english-example-cn').textContent = example ? t('translatingExample') : t('exampleTranslationUnavailable', {meaning: question.translation});
    $('#english-example-cn').title = '';
    scheduleEnglishWindowFit();
    if (example) translateEnglishExample(question, example);
    return;
  }
  if (state.english.mode === 'spelling') {
    setEnglishView('spelling');
    renderEnglishPrevious();
    $('#english-spelling-meaning').textContent = question.translation;
    $('#english-spelling-meaning').title = question.translation;
    $('#english-spelling-mask').textContent = maskEnglishWord(question.word);
    const input = $('#english-spelling-input');
    input.value = '';
    input.disabled = false;
    input.classList.remove('correct', 'wrong');
    $('#submit-english-spelling').disabled = false;
    $('#english-score').textContent = `${state.english.correct} / ${state.english.answered}`;
    window.setTimeout(() => { if (state.englishOpen && state.english.mode === 'spelling') input.focus(); }, 20);
    return;
  }
  setEnglishView('quiz');
  const chineseToEnglish = state.english.mode === 'chinese';
  $('#english-quiz-word').textContent = chineseToEnglish ? question.translation : question.word;
  $('#english-quiz-word').title = chineseToEnglish ? question.translation : question.word;
  $('#english-quiz-word').classList.toggle('chinese-prompt', chineseToEnglish);
  renderEnglishPrevious();
  const options = Array.isArray(question.options) ? question.options.slice(0, 4) : [];
  $('#english-options').innerHTML = options.map((option, index) =>
    `<button type="button" class="english-option" data-option-index="${index}" title="${escapeHTML(option)}"><span>${index + 1}</span>${escapeHTML(option)}</button>`
  ).join('');
  $('#english-score').textContent = `${state.english.correct} / ${state.english.answered}`;
}

function recordEnglishQuestion(question) {
  if (!question) return;
  const mode = state.english.mode;
  const record = {...question, source: question.source || state.settings.englishSource};
  englishRecordWrites = englishRecordWrites
    .then(() => api.RecordEnglishWord?.(record, mode))
    .catch(() => {});
}

function recordEnglishWrongAnswer(question, answer, correctAnswer) {
  if (!question || !['quiz', 'chinese', 'spelling'].includes(state.english.mode)) return;
  const mode = state.english.mode;
  const record = {...question, source: question.source || state.settings.englishSource};
  englishRecordWrites = englishRecordWrites
    .then(() => api.RecordEnglishWrong?.(record, mode, answer, correctAnswer || question.correctAnswer || ''))
    .catch(error => showToast(readError(error), true));
}

async function translateEnglishExample(question, example) {
  const index = state.english.index;
  const wordID = Number(question.wordId) || 0;
  try {
    const translated = await api.TranslateEnglishExample(example);
    const current = currentEnglishQuestion();
    if (!state.englishOpen || state.english.mode !== 'sentence' || state.english.index !== index || Number(current?.wordId) !== wordID) return;
    const text = String(translated || '').trim() || t('exampleTranslationUnavailable', {meaning: question.translation});
    $('#english-example-cn').textContent = text;
    $('#english-example-cn').title = text;
    scheduleEnglishWindowFit();
  } catch (_) {
    const current = currentEnglishQuestion();
    if (!state.englishOpen || state.english.mode !== 'sentence' || state.english.index !== index || Number(current?.wordId) !== wordID) return;
    const fallback = t('exampleTranslationUnavailable', {meaning: question.translation});
    $('#english-example-cn').textContent = fallback;
    $('#english-example-cn').title = fallback;
    scheduleEnglishWindowFit();
  }
}

function maskEnglishWord(word) {
  return [...String(word || '')].map(character => /[A-Za-z]/.test(character) ? '_' : character).join(' ');
}

function renderEnglishPrevious() {
  const previous = state.english.previous;
  const element = $('#english-previous');
  element.classList.toggle('hidden', !previous);
  element.classList.toggle('correct', Boolean(previous?.correct));
  element.classList.toggle('wrong', Boolean(previous && !previous.correct));
  if (!previous) return;
  const label = previous.justAnswered
    ? t(previous.correct ? 'answerCorrect' : 'answerWrong')
    : t('previousWord');
  const text = `${label} · ${previous.word} = ${previous.translation}`;
  element.textContent = text;
  element.title = text;
  scheduleEnglishWindowFit();
}

function updateEnglishLearning(now = Date.now()) {
  if (!state.englishOpen || state.english.mode !== 'study' || state.english.busy || !currentEnglishQuestion()) return;
  const elapsed = now - state.english.shownAt;
  const remaining = Math.max(0, Math.ceil((60000 - elapsed) / 1000));
  $('#english-countdown').textContent = `${remaining}s`;
  if (elapsed >= 60000) nextEnglishWord();
}

async function nextEnglishWord() {
  if (!state.englishOpen || state.english.busy) return;
  if (state.english.previous) state.english.previous.justAnswered = false;
  if (state.english.index + 1 >= state.english.questions.length) {
    await loadEnglishBatch();
    return;
  }
  state.english.index += 1;
  renderEnglishQuestion();
}

async function answerEnglishQuestion(event) {
  const button = event.target.closest('.english-option');
  const question = currentEnglishQuestion();
  if (!button || !question || state.english.busy) return;
  state.english.busy = true;
  $('#english-mode').disabled = true;
  const answer = question.options[Number(button.dataset.optionIndex)] || '';
  const buttons = $$('#english-options .english-option');
  buttons.forEach(item => { item.disabled = true; });
  try {
    const result = await api.SubmitEnglishAnswer(state.english.sessionId, Number(question.wordId), answer);
    state.english.answered += 1;
    if (result?.correct) state.english.correct += 1;
    state.english.previous = {
      word: question.word,
      translation: question.translation,
      correct: Boolean(result?.correct),
      justAnswered: true
    };
    const correctAnswer = result?.correctAnswer || question.correctAnswer;
    if (!result?.correct) recordEnglishWrongAnswer(question, answer, correctAnswer);
    buttons.forEach(item => {
      const itemAnswer = question.options[Number(item.dataset.optionIndex)] || '';
      if (itemAnswer === correctAnswer) item.classList.add('correct');
    });
    if (!result?.correct) button.classList.add('wrong');
    renderEnglishPrevious();
    $('#english-score').textContent = `${state.english.correct} / ${state.english.answered}`;
    window.setTimeout(() => {
      state.english.busy = false;
      $('#english-mode').disabled = false;
      if (state.englishOpen) nextEnglishWord();
    }, 1600);
  } catch (error) {
    state.english.busy = false;
    $('#english-mode').disabled = false;
    buttons.forEach(item => { item.disabled = false; });
    showToast(readError(error), true);
  }
}

async function submitEnglishSpelling(event) {
  event.preventDefault();
  const question = currentEnglishQuestion();
  const input = $('#english-spelling-input');
  const answer = input.value.trim();
  if (!question || state.english.busy) return;
  if (!answer) { showToast(t('enterSpelling'), true); input.focus(); return; }
  state.english.busy = true;
  $('#english-mode').disabled = true;
  input.disabled = true;
  $('#submit-english-spelling').disabled = true;
  try {
    const result = await api.SubmitEnglishAnswer(state.english.sessionId, Number(question.wordId), answer);
    state.english.answered += 1;
    if (result?.correct) state.english.correct += 1;
    state.english.previous = {
      word: question.word,
      translation: question.translation,
      correct: Boolean(result?.correct),
      justAnswered: true
    };
    if (!result?.correct) recordEnglishWrongAnswer(question, answer, result?.correctAnswer || question.correctAnswer || question.word);
    input.value = question.word;
    input.classList.add(result?.correct ? 'correct' : 'wrong');
    renderEnglishPrevious();
    $('#english-score').textContent = `${state.english.correct} / ${state.english.answered}`;
    window.setTimeout(() => {
      state.english.busy = false;
      $('#english-mode').disabled = false;
      if (state.englishOpen) nextEnglishWord();
    }, 1600);
  } catch (error) {
    state.english.busy = false;
    $('#english-mode').disabled = false;
    input.disabled = false;
    $('#submit-english-spelling').disabled = false;
    showToast(readError(error), true);
  }
}

function realtimeStatusLabel(status) {
  return {
    online: t('online'),
    connecting: t('connecting'),
    authenticating: t('authenticating'),
    reconnecting: t('reconnecting'),
    auth_failed: t('authFailed'),
    offline: t('offline')
  }[status] || t('offline');
}

function currentPeerUserID() {
  const value = Number($('#peer-user-id').value);
  return Number.isSafeInteger(value) && value > 0 ? value : 0;
}

function setActiveRealtimePeer(peerID, mode = 'friend') {
  peerID = Number(peerID);
  if (!Number.isSafeInteger(peerID) || peerID <= 0) return;
  $('#peer-user-id').value = String(peerID);
  localStorage.setItem('workdayIsland.chatPeer', String(peerID));
  selectedRealtimePeerMode = mode === 'temporary' ? 'temporary' : 'friend';
  localStorage.setItem('workdayIsland.chatPeerMode', selectedRealtimePeerMode);
}

function latestIncomingChatPeer() {
  const incoming = (state.realtime.messages || [])
    .filter(message => !message.outgoing && message.eventType === 'chat.text' && Number(message.peerUserId) > 0)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return Number(incoming[0]?.peerUserId) || 0;
}

function renderRealtime() {
  const realtime = state.realtime || {};
  const status = realtime.status || 'offline';
  const identity = realtime.identity || null;
  const accountUser = state.account?.user || null;
  const displayIdentity = state.account?.loggedIn ? (identity || {
    userId: accountUser?.id,
    username: accountUser?.username,
    displayName: accountUser?.nickname
  }) : null;
  const statusElement = $('#realtime-status');
  statusElement.className = `realtime-status ${status}`;
  statusElement.querySelector('b').textContent = realtimeStatusLabel(status);
  statusElement.title = realtime.lastError || realtimeStatusLabel(status);

  $('#identity-empty').classList.toggle('hidden', Boolean(displayIdentity));
  $('#identity-card').classList.toggle('hidden', !displayIdentity);
  $('#copy-user-id').disabled = !displayIdentity;
  if (displayIdentity) {
    $('#identity-name').textContent = displayIdentity.displayName || t('appName');
    $('#identity-username').textContent = displayIdentity.username || '';
    $('#identity-user-id').textContent = String(displayIdentity.userId || '--');
  }

  const online = status === 'online';
  if (online && !currentPeerUserID() && (realtime.friends || []).length) {
    setActiveRealtimePeer(realtime.friends[0].user.userId);
  }
  const peerID = currentPeerUserID();
  const validPeer = Boolean(peerID && (!identity || peerID !== Number(identity.userId)));
  const peerFriend = friendByUserID(peerID);
  $('#conversation-peer').textContent = validPeer ? (peerFriend ? friendDisplayName(peerFriend.user) : `#${peerID}`) : '—';
  $('#chat-input').disabled = !online || !validPeer || realtimeBusy;
  $('#send-chat').disabled = !online || !validPeer || realtimeBusy;
  $('#send-shake').disabled = !online || !validPeer || realtimeBusy;
  $('#send-flash').disabled = !online || !validPeer || realtimeBusy;
  $('#send-friend-request').disabled = !online || realtimeBusy;
  $('#refresh-friends').disabled = !online || realtimeBusy;
  $('#friend-target').disabled = !online || realtimeBusy;
  $('#friend-request-message').disabled = !online || realtimeBusy;
  $('#friends-offline-notice').classList.toggle('hidden', online);
  renderRealtimeFriends();
  renderChatMessages(peerID);
  renderRealtimeUnread();
  renderChatSection();
}

function validateRealtimeRegistration(input) {
  if (!/^[A-Za-z0-9_]{3,20}$/.test(input.username)) return t('usernameRule');
  const nicknameLength = [...input.nickname].length;
  if (nicknameLength < 2 || nicknameLength > 20) return t('nicknameRule');
  const passwordLength = [...input.password].length;
  if (passwordLength < 6 || passwordLength > 20) return t('passwordRule');
  if (input.password !== input.confirmPassword) return t('passwordMismatch');
  if (input.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return t('emailInvalid');
  if (input.phone && !/^1[3-9]\d{9}$/.test(input.phone)) return t('phoneInvalid');
  return '';
}

async function submitRealtimeRegistration(event) {
  event.preventDefault();
  if (realtimeRegistrationBusy) return;
  const input = {
    username: $('#register-username').value.trim(),
    nickname: $('#register-nickname').value.trim(),
    password: $('#register-password').value,
    confirmPassword: $('#register-confirm-password').value,
    email: $('#register-email').value.trim(),
    phone: $('#register-phone').value.trim(),
    inviteCode: $('#register-invite-code').value.trim()
  };
  const validationError = validateRealtimeRegistration(input);
  if (validationError) {
    showToast(validationError, true);
    return;
  }
  realtimeRegistrationBusy = true;
  const submit = $('#submit-account-register');
  submit.disabled = true;
  submit.textContent = t('registering');
  try {
    const account = await api.RegisterRealtimeAccount(input);
    const username = account?.username || input.username;
    localStorage.setItem('workdayIsland.accountUsername', username);
    $('#account-username').value = username;
    $('#account-password').value = '';
    $('#register-password').value = '';
    $('#register-confirm-password').value = '';
    state.accountMode = 'login';
    renderAccountSession();
    showToast(t('registrationSuccess'));
    setTimeout(() => $('#account-password').focus(), 50);
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    realtimeRegistrationBusy = false;
    submit.disabled = false;
    submit.textContent = t('createAccount');
  }
}

function friendDisplayName(user) {
  return String(user?.displayName || user?.username || `#${user?.userId || '?'}`);
}

function friendByUserID(userID) {
  userID = Number(userID);
  return (state.realtime.friends || []).find(friend => Number(friend?.user?.userId) === userID) || null;
}

function renderRealtimeFriends() {
  const identityID = Number(state.realtime.identity?.userId) || 0;
  const requests = (state.realtime.friendRequests || []).filter(request =>
    request?.status === 'pending' && Number(request?.addressee?.userId) === identityID
  );
  const friends = state.realtime.friends || [];
  $('#friend-request-count').textContent = String(requests.length);
  $('#friend-count').textContent = String(friends.length);
  $('#friend-tab-badge').textContent = String(Math.min(99, requests.length));
  $('#friend-tab-badge').classList.toggle('hidden', requests.length < 1);
  $('#friend-requests').innerHTML = requests.length
    ? requests.map(request => {
      const requester = request.requester || {};
      return `<article class="friend-request-row" data-request-id="${escapeHTML(request.friendRequestId)}">
        <strong>${escapeHTML(friendDisplayName(requester))}</strong>
        <small>@${escapeHTML(requester.username || '')} · #${escapeHTML(requester.userId || '')}</small>
        ${request.message ? `<p>${escapeHTML(request.message)}</p>` : ''}
        <div class="friend-request-actions">
          <button type="button" data-decision="reject">${escapeHTML(t('rejectFriend'))}</button>
          <button type="button" data-decision="accept">${escapeHTML(t('acceptFriend'))}</button>
        </div>
      </article>`;
    }).join('')
    : `<div class="friend-list-empty">${escapeHTML(t('noPendingFriendRequests'))}</div>`;
  $('#friend-list').innerHTML = friends.length
    ? friends.map(friend => {
      const user = friend.user || {};
      return `<article class="friend-row" data-user-id="${escapeHTML(user.userId || '')}" title="${escapeHTML(friendDisplayName(user))}">
        <span class="friend-online-dot ${user.online ? 'online' : ''}"></span>
        <div class="friend-user"><strong>${escapeHTML(friendDisplayName(user))}</strong><small>@${escapeHTML(user.username || '')} · #${escapeHTML(user.userId || '')}</small></div>
        <button type="button" class="friend-remove" data-remove-friend="${escapeHTML(user.userId || '')}" title="${escapeHTML(t('removeFriend'))}">×</button>
      </article>`;
    }).join('')
    : `<div class="friend-list-empty">${escapeHTML(t('noFriends'))}</div>`;
  renderChatFriendList(friends);
}

function renderChatFriendList(friends) {
  const list = $('#chat-friend-list');
  const peerID = currentPeerUserID();
  if (state.realtime.status !== 'online') {
    list.innerHTML = `<div class="chat-friends-empty"><span>◌</span><p>${escapeHTML(t('friendsRequireOnline'))}</p></div>`;
    return;
  }
  if (!friends.length) {
    list.innerHTML = `<div class="chat-friends-empty"><span>👥</span><p>${escapeHTML(t('noFriends'))}</p><button type="button" data-open-friends>${escapeHTML(t('addFriend'))}</button></div>`;
    return;
  }
  list.innerHTML = friends.map(friend => {
    const user = friend.user || {};
    const active = Number(user.userId) === peerID;
    const initial = [...friendDisplayName(user)][0]?.toUpperCase() || '?';
    return `<button type="button" class="chat-friend-row ${active ? 'active' : ''}" data-chat-peer-id="${escapeHTML(user.userId || '')}">
      <span class="chat-friend-avatar">${escapeHTML(initial)}<i class="${user.online ? 'online' : ''}"></i></span>
      <span class="chat-friend-copy"><strong>${escapeHTML(friendDisplayName(user))}</strong><small>${user.online ? escapeHTML(t('online')) : escapeHTML(t('offline'))} · @${escapeHTML(user.username || '')}</small></span>
      <span class="chat-friend-arrow">›</span>
    </button>`;
  }).join('');
}

function renderRealtimeUnread() {
  const badge = $('#chat-unread');
  const identityID = Number(state.realtime.identity?.userId) || 0;
  const pendingFriends = (state.realtime.friendRequests || []).filter(request =>
    request.status === 'pending' && Number(request.addressee?.userId) === identityID
  ).length;
  const unread = state.chatUnread + pendingFriends;
  badge.textContent = String(Math.min(99, unread));
  badge.classList.toggle('hidden', unread < 1);
}

function renderChatMessages(peerID) {
  const list = $('#chat-messages');
  if (!peerID) {
    list.innerHTML = `<div class="chat-empty"><span>💬</span><strong>${escapeHTML(t('choosePeer'))}</strong><p>${escapeHTML(t('chatPrivacy'))}</p></div>`;
    return;
  }
  const messages = (state.realtime.messages || [])
    .filter(message => ['chat.text', 'window.shake', 'window.flash'].includes(message.eventType) && Number(message.peerUserId) === peerID)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  if (!messages.length) {
    const friend = friendByUserID(peerID);
    list.innerHTML = `<div class="chat-empty"><span>✉️</span><strong>${escapeHTML(t('noMessages', {name: friend ? friendDisplayName(friend.user) : `#${peerID}`}))}</strong><p>${escapeHTML(t('chatPrivacy'))}</p></div>`;
    return;
  }
  list.innerHTML = messages.map(message => {
    const created = new Date(message.createdAt);
    const time = Number.isNaN(created.getTime()) ? '' : created.toLocaleTimeString(locale(), {hour: '2-digit', minute: '2-digit', hour12: false});
    const delivery = message.outgoing
      ? `<span class="${Number(message.onlineDeliveries) > 0 ? 'online' : ''}">${escapeHTML(t(Number(message.onlineDeliveries) > 0 ? 'sentOnline' : 'savedOffline'))}</span>`
      : '';
    if (message.eventType === 'window.shake' || message.eventType === 'window.flash') {
      const effect = t(message.eventType === 'window.shake' ? 'shakeRecord' : 'flashRecord');
      const senderName = realtimeMessageSenderName(message);
      const label = message.outgoing
        ? t('youSentEffect', {effect})
        : t('peerSentEffect', {name: senderName, effect});
      const detail = String(message.text || '').trim();
      return `<article class="chat-interaction ${message.outgoing ? 'outgoing' : ''}" data-message-id="${escapeHTML(message.messageId)}">
        <div class="chat-interaction-label"><span>${message.eventType === 'window.shake' ? '〰' : '✦'}</span><b>${escapeHTML(label)}</b>${detail ? `<em>${escapeHTML(detail)}</em>` : ''}</div>
        <div class="chat-message-meta">${escapeHTML(time)}${delivery ? ` · ${delivery}` : ''}</div>
      </article>`;
    }
    return `<article class="chat-message ${message.outgoing ? 'outgoing' : ''}" data-message-id="${escapeHTML(message.messageId)}">
      <div class="chat-bubble">${escapeHTML(message.text)}</div>
      <div class="chat-message-meta">${escapeHTML(time)}${delivery ? ` · ${delivery}` : ''}</div>
    </article>`;
  }).join('');
  requestAnimationFrame(() => { list.scrollTop = list.scrollHeight; });
}

function realtimeMessageSenderName(message) {
  const friend = friendByUserID(Number(message?.senderUserId));
  return String(message?.senderDisplayName || (friend ? friendDisplayName(friend.user) : '') || `#${message?.senderUserId || '?'}`);
}

async function submitFriendRequest(event) {
  event.preventDefault();
  if (realtimeBusy) return;
  const target = $('#friend-target').value.trim();
  if (!target) {
    showToast(t('friendTargetPlaceholder'), true);
    return;
  }
  realtimeBusy = true;
  renderRealtime();
  try {
    await api.CreateRealtimeFriendRequest(target, $('#friend-request-message').value.trim());
    $('#friend-target').value = '';
    $('#friend-request-message').value = '';
    showToast(t('friendRequestSent'));
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    realtimeBusy = false;
    renderRealtime();
  }
}

async function refreshRealtimeFriends() {
  if (realtimeBusy || state.realtime.status !== 'online') return;
  realtimeBusy = true;
  renderRealtime();
  try {
    state.realtime = {...state.realtime, ...(await api.RefreshRealtimeFriends())};
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    realtimeBusy = false;
    renderRealtime();
  }
}

async function handleFriendRequestAction(event) {
  const button = event.target.closest('[data-decision]');
  const row = button?.closest('[data-request-id]');
  if (!button || !row || realtimeBusy) return;
  realtimeBusy = true;
  renderRealtime();
  try {
    const decision = button.dataset.decision;
    await api.RespondRealtimeFriendRequest(row.dataset.requestId, decision);
    state.realtime.friendRequests = (state.realtime.friendRequests || []).filter(request => request.friendRequestId !== row.dataset.requestId);
    showToast(t(decision === 'accept' ? 'friendAccepted' : 'friendRejected'));
    if (decision === 'accept') {
      state.realtime = {...state.realtime, ...(await api.RefreshRealtimeFriends())};
    }
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    realtimeBusy = false;
    renderRealtime();
  }
}

function handleChatFriendSelection(event) {
  if (event.target.closest('[data-open-friends]')) {
    state.chatSection = 'friends';
    renderChatSection();
    setTimeout(() => $('#friend-target').focus(), 30);
    return;
  }
  const row = event.target.closest('[data-chat-peer-id]');
  if (!row) return;
  setActiveRealtimePeer(Number(row.dataset.chatPeerId));
  renderRealtime();
  markCurrentConversationRead();
  setTimeout(() => $('#chat-input').focus(), 20);
}

async function handleFriendListAction(event) {
  const removeButton = event.target.closest('[data-remove-friend]');
  if (removeButton) {
    event.stopPropagation();
    const userID = Number(removeButton.dataset.removeFriend);
    const friend = friendByUserID(userID);
    if (!userID || !window.confirm(t('removeFriendConfirm', {name: friendDisplayName(friend?.user)}))) return;
    realtimeBusy = true;
    renderRealtime();
    try {
      await api.RemoveRealtimeFriend(userID);
      state.realtime.friends = (state.realtime.friends || []).filter(item => Number(item?.user?.userId) !== userID);
      if (currentPeerUserID() === userID) {
        $('#peer-user-id').value = '';
        localStorage.removeItem('workdayIsland.chatPeer');
        localStorage.removeItem('workdayIsland.chatPeerMode');
        selectedRealtimePeerMode = '';
      }
      showToast(t('friendRemoved'));
    } catch (error) {
      showToast(readError(error), true);
    } finally {
      realtimeBusy = false;
      renderRealtime();
    }
    return;
  }
  const row = event.target.closest('[data-user-id]');
  if (!row) return;
  setActiveRealtimePeer(Number(row.dataset.userId));
  state.chatSection = 'conversation';
  renderRealtime();
  markCurrentConversationRead();
  $('#chat-input').focus();
}

async function resetRealtimeIdentity() {
  if (!window.confirm(t('resetConfirm'))) return;
  realtimeBusy = true;
  renderRealtime();
  try {
    state.realtime = {...state.realtime, ...(await api.ResetRealtimeIdentity())};
    state.chatUnread = 0;
    showToast(t('identityReset'));
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    realtimeBusy = false;
    renderRealtime();
  }
}

async function copyRealtimeUserID() {
  const userID = state.realtime.identity?.userId;
  if (!userID) return;
  try {
    if (window.runtime?.ClipboardSetText) await window.runtime.ClipboardSetText(String(userID));
    else await navigator.clipboard.writeText(String(userID));
    showToast(t('idCopied'));
  } catch (error) {
    showToast(readError(error), true);
  }
}

function handlePeerChange() {
  const peerID = currentPeerUserID();
  if (peerID) {
    localStorage.setItem('workdayIsland.chatPeer', String(peerID));
    localStorage.setItem('workdayIsland.chatPeerMode', 'temporary');
    selectedRealtimePeerMode = 'temporary';
  } else {
    localStorage.removeItem('workdayIsland.chatPeer');
    localStorage.removeItem('workdayIsland.chatPeerMode');
    selectedRealtimePeerMode = '';
  }
  renderRealtime();
  markCurrentConversationRead();
}

async function submitChatMessage(event) {
  event.preventDefault();
  const peerID = currentPeerUserID();
  const input = $('#chat-input');
  const text = input.value.trim();
  if (!peerID) { showToast(t('invalidPeer'), true); return; }
  if (!text || realtimeBusy) return;
  realtimeBusy = true;
  renderRealtime();
  try {
    const message = await api.SendRealtimeChat(peerID, text);
    receiveRealtimeMessage(message);
    input.value = '';
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    realtimeBusy = false;
    renderRealtime();
    input.focus();
  }
}

async function sendWindowEffect(effect) {
  const peerID = currentPeerUserID();
  if (!peerID) { showToast(t('invalidPeer'), true); return; }
  if (realtimeBusy) return;
  realtimeBusy = true;
  renderRealtime();
  try {
    const text = $('#effect-message').value.trim();
    const message = await api.SendRealtimeWindowEffect(peerID, effect, text);
    receiveRealtimeMessage(message);
    const delivered = Number(message?.onlineDeliveries) > 0;
    $('#effect-message').value = '';
    showToast(delivered ? t('effectSent') : t('queuedForPeer'));
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    realtimeBusy = false;
    renderRealtime();
  }
}

function receiveRealtimeMessage(message) {
  if (!message?.messageId) return;
  const messages = state.realtime.messages ||= [];
  const incomingPeer = Number(message.peerUserId) || (!message.outgoing ? Number(message.senderUserId) : 0) || 0;
  const normalisedMessage = {...message, peerUserId: incomingPeer};
  const existingIndex = messages.findIndex(item => item.messageId === normalisedMessage.messageId);
  const firstPush = !receivedRealtimePushIDs.has(normalisedMessage.messageId);
  receivedRealtimePushIDs.add(normalisedMessage.messageId);
  if (existingIndex >= 0) {
    messages[existingIndex] = {...messages[existingIndex], ...normalisedMessage};
  } else {
    messages.push(normalisedMessage);
    if (messages.length > 500) messages.splice(0, messages.length - 500);
  }
  if (firstPush && !normalisedMessage.outgoing && normalisedMessage.eventType === 'chat.text') {
    state.latestIncomingPeer = incomingPeer;
    if (state.chatOpen && incomingPeer) {
      setActiveRealtimePeer(incomingPeer, friendByUserID(incomingPeer) ? 'friend' : 'temporary');
      state.chatSection = 'conversation';
      state.chatUnread = 0;
      state.latestIncomingPeer = 0;
      api.MarkRealtimeMessageRead?.(normalisedMessage.messageId).catch(() => {});
    } else {
      state.chatUnread += 1;
    }
    showToast(`💬 ${realtimeMessageSenderName(normalisedMessage)}: ${normalisedMessage.text}`);
  }
  renderRealtime();
}

function markCurrentConversationRead() {
  if (!state.chatOpen) return;
  const peerID = currentPeerUserID();
  if (!peerID) return;
  state.chatUnread = 0;
  (state.realtime.messages || [])
    .filter(message => !message.outgoing && message.eventType === 'chat.text' && Number(message.peerUserId) === peerID)
    .forEach(message => api.MarkRealtimeMessageRead?.(message.messageId).catch(() => {}));
  renderRealtimeUnread();
}

function handleRemoteWindowEffect(payload) {
  const effect = payload?.effect === 'shake' ? 'shake' : 'flash';
  const senderUserID = Number(payload?.senderUserId) || 0;
  const friend = friendByUserID(senderUserID);
  const senderName = String(payload?.senderDisplayName || (friend ? friendDisplayName(friend.user) : '') || `#${senderUserID || '?'}`);
  const text = String(payload?.text || '').trim();
  stopRemoteWindowEffect();
  const alert = $('#remote-effect-alert');
  alert.classList.add('active', effect);
  $('#remote-effect-icon').textContent = effect === 'shake' ? '〰' : '✦';
  $('#remote-effect-title').textContent = t(effect === 'shake' ? 'incomingShake' : 'incomingFlash', {name: senderName});
  $('#remote-effect-message').textContent = text;
  $('#remote-effect-message').classList.toggle('hidden', !text);
  if (effect === 'shake') shakeNativeWindow();
  playReminderChime();
  remoteEffectTimer = window.setTimeout(stopRemoteWindowEffect, 10000);
}

function stopRemoteWindowEffect() {
  window.clearTimeout(remoteEffectTimer);
  remoteEffectTimer = 0;
  $('#remote-effect-alert').classList.remove('active', 'shake', 'flash');
  $('#remote-effect-message').textContent = '';
  $('#remote-effect-message').classList.add('hidden');
  api.RestoreWindowOpacity?.();
}

async function shakeNativeWindow() {
  try {
    if (!window.runtime?.WindowGetPosition || !window.runtime?.WindowSetPosition) return;
    const origin = await window.runtime.WindowGetPosition();
    const offsets = [-18, 18, -15, 15, -12, 12, -9, 9, -6, 6, -3, 3, 0];
    for (const offset of offsets) {
      window.runtime.WindowSetPosition(origin.x + offset, origin.y);
      await new Promise(resolve => setTimeout(resolve, 42));
    }
    window.runtime.WindowSetPosition(origin.x, origin.y);
  } catch (_) { /* The full-window interaction remains visible if native movement is unavailable. */ }
}

function openTodoModal(todo = null) {
  $('#todo-modal-title').textContent = todo ? t('editTodo') : t('newTodo');
  $('#editing-id').value = todo?.id ?? '';
  $('#todo-title').value = todo?.title ?? '';
  $('#todo-note').value = todo?.note ?? '';
  const due = todo?.dueAt ? new Date(todo.dueAt) : null;
  $('#todo-due-date').value = due ? toLocalDate(due) : toLocalDate(new Date());
  $('#todo-due-time').value = due ? toLocalTime(due) : '';
  openModal('todo-modal');
  setTimeout(() => $('#todo-title').focus(), 50);
}

async function submitTodo(event) {
  event.preventDefault();
  const id = $('#editing-id').value;
  const dueDate = $('#todo-due-date').value;
  const dueTime = $('#todo-due-time').value;
  if (!dueDate && dueTime) { showToast(t('chooseDate'), true); return; }
  const localDue = dueDate && dueTime ? `${dueDate}T${dueTime}` : '';
  const input = {title: $('#todo-title').value, note: $('#todo-note').value, dueAt: localDue ? new Date(localDue).toISOString() : ''};
  try {
    if (id) await api.UpdateTodo(id, input); else await api.AddTodo(input);
    closeModal('todo-modal');
    await refresh();
    showToast(id ? t('todoUpdated') : t('todoAdded'));
  } catch (error) { showToast(readError(error), true); }
}

function openSettings() {
  $('#work-start').value = state.settings.workStart;
  $('#work-end').value = state.settings.workEnd;
  $('#monthly-salary').value = state.settings.monthlySalary || '';
  $('#salary-workdays').value = state.settings.salaryWorkdays || 21.75;
  $('#weather-city-input').value = state.settings.weatherCity || '上海';
  $('#language-select').value = state.settings.language || 'system';
  $('#theme-select').value = state.settings.theme || 'system';
  $('#english-source-select').value = state.settings.englishSource || 'nce2';
  $('#currency-symbol').value = state.settings.currency || '¥';
  $('#show-compact-todos').checked = Boolean(state.settings.showCompactTodos);
  $('#compact-opacity').value = normaliseCompactOpacity(state.settings.compactOpacity);
  updateCompactOpacityLabel();
  $('#settings-top').checked = state.settings.alwaysOnTop;
  const selectedWorkdays = new Set(normaliseWorkdays(state.settings.workdays));
  $('#weekday-picker').innerHTML = t('weekdays').map((name, i) => {
    const selected = selectedWorkdays.has(i + 1);
    return `<button type="button" class="weekday ${selected ? 'active' : ''}" data-day="${i+1}" aria-pressed="${selected}"><span>${name}</span></button>`;
  }).join('');
  $$('#weekday-picker .weekday').forEach(button => button.addEventListener('click', () => {
    const selected = !button.classList.contains('active');
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  }));
  openModal('settings-modal');
}

async function submitSettings(event) {
  event.preventDefault();
  const workdays = $$('#weekday-picker .weekday.active').map(button => Number(button.dataset.day));
  if (!workdays.length) { showToast(t('chooseWorkday'), true); return; }
  state.settings = {
    alwaysOnTop: $('#settings-top').checked,
    compactMode: state.settings.compactMode,
    workStart: $('#work-start').value,
    workEnd: $('#work-end').value,
    workdays,
    monthlySalary: Number($('#monthly-salary').value) || 0,
    salaryWorkdays: Number($('#salary-workdays').value) || 21.75,
    currency: $('#currency-symbol').value.trim() || '¥',
    weatherCity: $('#weather-city-input').value.trim() || '上海',
    language: $('#language-select').value,
    theme: $('#theme-select').value,
    englishMode: state.settings.englishMode || 'study',
    englishSource: $('#english-source-select').value || 'nce2',
    showCompactTodos: $('#show-compact-todos').checked,
    compactOpacity: normaliseCompactOpacity($('#compact-opacity').value),
    compactWidth: state.settings.compactWidth || 520,
    compactHeight: state.settings.compactHeight || 350
  };
  try {
    await saveSettings();
    closeModal('settings-modal');
    refreshWeather(true);
    showToast(t('settingsSaved'));
  } catch (error) { showToast(readError(error), true); }
}

async function saveSettings() {
  state.settings = {...state.settings, ...(await api.SaveSettings(state.settings))};
  applyTheme();
  applyTranslations();
  renderAll();
}

async function toggleCompactMode() {
  const compact = !state.settings.compactMode;
  try {
    state.settings = {...state.settings, ...(await api.SetCompactMode(compact))};
    applyCompactUI();
    showToast(compact ? t('compactOn') : t('compactOff'));
  } catch (error) { showToast(readError(error), true); }
}

function applyCompactUI() {
  const compact = Boolean(state.settings.compactMode);
  document.body.classList.toggle('compact', compact);
  document.body.classList.toggle('show-compact-todos', compact && Boolean(state.settings.showCompactTodos));
  updateCompactScale();
  $('#compact-label').textContent = compact ? t('expand') : t('compact');
  $('#compact-toggle').title = compact ? t('expandTitle') : t('compactTitle');
  $('#compact-toggle').setAttribute('aria-label', $('#compact-toggle').title);
}

function normaliseCompactOpacity(value) {
  const percentage = Number(value);
  return Number.isFinite(percentage) ? Math.max(30, Math.min(100, Math.round(percentage / 5) * 5)) : 100;
}

function updateCompactOpacityLabel() {
  $('#compact-opacity-value').textContent = `${normaliseCompactOpacity($('#compact-opacity').value)}%`;
}

function previewCompactOpacity() {
  const percentage = normaliseCompactOpacity($('#compact-opacity').value);
  $('#compact-opacity-value').textContent = `${percentage}%`;
  applyEnglishBackgroundOpacity(percentage);
  api.PreviewWindowOpacity?.(percentage);
}

function applyEnglishBackgroundOpacity(value = state.settings.compactOpacity) {
  const opacity = normaliseCompactOpacity(value) / 100;
  document.documentElement.style.setProperty('--english-background-opacity', opacity.toFixed(2));
}

function applyTheme() {
  const requested = state.settings.theme || 'system';
  const resolved = requested === 'system' ? (systemTheme?.matches ? 'light' : 'dark') : requested;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = resolved === 'light' ? '#edf3fb' : '#0b101b';
  applyEnglishBackgroundOpacity();
}

function updateCompactScale() {
  const rawScale = Math.min(window.innerWidth / 520, window.innerHeight / 350);
  const scale = state.settings.compactMode ? Math.max(0.75, Math.min(1.72, rawScale)) : 1;
  document.documentElement.style.fontSize = `${scale.toFixed(4)}px`;
}

function startReminderFlash(todo, sequence = 0, kind = 'todo') {
  if (sequence) activeReminderSequence = sequence;
  const isFocus = kind === 'focus';
  $('#reminder-alert-kicker').textContent = t(isFocus ? 'focusFinished' : 'reminderDue');
  $('#reminder-alert-title').textContent = todo?.title || t(isFocus ? 'takeBreak' : 'timeToTodo');
  $('#alert-bell').textContent = isFocus ? '☕' : '!';
  $('#reminder-alert').classList.toggle('focus-complete', isFocus);
  $('#reminder-alert').classList.add('active');
  startReminderSound();
}

function stopReminderFlash() {
  $('#reminder-alert').classList.remove('active');
  stopReminderSound();
  if (activeReminderSequence) {
    api.AcknowledgeReminder(activeReminderSequence).catch(() => {});
    activeReminderSequence = 0;
  }
}

function startReminderSound() {
  stopReminderSound();
  playReminderChime();
  reminderSoundTimer = window.setInterval(playReminderChime, 5000);
}

function stopReminderSound() {
  if (reminderSoundTimer) window.clearInterval(reminderSoundTimer);
  reminderSoundTimer = 0;
}

async function playReminderChime() {
  try {
    if (hasNativeAPI && api.PlayReminderSound) {
      await api.PlayReminderSound();
      return;
    }
    reminderAudioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (reminderAudioContext.state === 'suspended') await reminderAudioContext.resume();
    const start = reminderAudioContext.currentTime + 0.02;
    [659.25, 783.99, 987.77].forEach((frequency, index) => {
      const oscillator = reminderAudioContext.createOscillator();
      const gain = reminderAudioContext.createGain();
      const noteStart = start + index * 0.15;
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, noteStart);
      gain.gain.setValueAtTime(0.0001, noteStart);
      gain.gain.exponentialRampToValueAtTime(0.11, noteStart + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + 0.34);
      oscillator.connect(gain).connect(reminderAudioContext.destination);
      oscillator.start(noteStart);
      oscillator.stop(noteStart + 0.36);
    });
  } catch (_) { /* Native notification sound remains available if audio is blocked. */ }
}

async function checkActiveReminder() {
  try {
    const alert = await api.GetActiveReminder();
    if (!alert || alert.sequence === lastReminderSequence) return;
    lastReminderSequence = alert.sequence;
    startReminderFlash(alert.todo, alert.sequence, alert.kind || 'todo');
    showToast(`⏰ ${alert.todo.title}`);
  } catch (_) { /* Polling is only a fallback for missed native events. */ }
}

async function refreshWeather(force = false) {
  const city = state.settings.weatherCity || '上海';
  $('#weather-city').textContent = city;
  if (force) $('#weather-desc').textContent = t('weatherUpdating');
  try {
    const weather = force && api.RefreshWeather ? await api.RefreshWeather(city) : await api.GetWeather(city);
    state.weather = weather;
    $('#weather-icon').textContent = weather.icon || '🌡️';
    $('#weather-temp').textContent = `${Math.round(weather.temperature)}°`;
    const label = weatherLabel(weather.weatherCode) || weather.description || t('currentWeather');
    $('#weather-desc').textContent = weather.stale ? `${label} · ${weatherCacheLabel(weather)}` : label;
    $('#weather-city').textContent = weather.city || city;
    $('.weather-card').title = weather.stale && weather.error ? `${t('weatherData')}\n${weather.error}` : t('weatherData');
  } catch (error) {
    if (isRecentWeather(state.weather)) {
      $('#weather-desc').textContent = `${weatherLabel(state.weather.weatherCode) || state.weather.description || t('currentWeather')} · ${weatherCacheLabel(state.weather)}`;
    } else {
      state.weather = null;
      $('#weather-icon').textContent = '🌡️';
      $('#weather-temp').textContent = '--°';
      $('#weather-desc').textContent = t('weatherUnavailable');
    }
    $('.weather-card').title = `${t('weatherData')}\n${readError(error)}`;
  }
}

function isRecentWeather(weather) {
  if (!weather?.updatedAt) return false;
  const age = Date.now() - new Date(weather.updatedAt).getTime();
  return Number.isFinite(age) && age >= -5 * 60 * 1000 && age <= 3 * 60 * 60 * 1000;
}

function weatherCacheLabel(weather) {
  const updated = new Date(weather?.updatedAt);
  const time = Number.isNaN(updated.getTime()) ? '--:--' : updated.toLocaleTimeString(locale(), {hour:'2-digit', minute:'2-digit', hour12:false});
  return t('weatherCached', {time});
}

function weatherLabel(code) {
  const labels = currentLanguage() === 'zh'
    ? {0:'晴朗',1:'大致晴朗',2:'多云',3:'阴天',45:'有雾',48:'雾凇',51:'小毛毛雨',53:'毛毛雨',55:'大毛毛雨',56:'冻毛毛雨',57:'强冻毛毛雨',61:'小雨',63:'中雨',65:'大雨',66:'冻雨',67:'强冻雨',71:'小雪',73:'中雪',75:'大雪',77:'米雪',80:'小阵雨',81:'阵雨',82:'强阵雨',85:'小阵雪',86:'强阵雪',95:'雷暴',96:'雷暴伴冰雹',99:'强雷暴伴冰雹'}
    : {0:'Clear',1:'Mostly clear',2:'Partly cloudy',3:'Overcast',45:'Foggy',48:'Rime fog',51:'Light drizzle',53:'Drizzle',55:'Heavy drizzle',56:'Freezing drizzle',57:'Heavy freezing drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',66:'Freezing rain',67:'Heavy freezing rain',71:'Light snow',73:'Snow',75:'Heavy snow',77:'Snow grains',80:'Light showers',81:'Showers',82:'Heavy showers',85:'Snow showers',86:'Heavy snow showers',95:'Thunderstorm',96:'Thunderstorm with hail',99:'Heavy thunderstorm with hail'};
  return labels[Number(code)] || '';
}

function openModal(id) { $(`#${id}`).classList.remove('hidden'); }
function closeModal(id) {
  $(`#${id}`).classList.add('hidden');
  if (id === 'cloud-editor-modal') state.cloud.editorTarget = null;
  if (id === 'cloud-delete-modal') state.cloud.deleteTarget = null;
  if (id === 'settings-modal') {
    applyEnglishBackgroundOpacity();
    api.RestoreWindowOpacity?.();
  }
}
function sortedTodos() { return [...state.todos].sort((a,b) => Number(a.completed)-Number(b.completed) || dueValue(a)-dueValue(b) || new Date(b.createdAt)-new Date(a.createdAt)); }
function dueValue(todo) { return todo.dueAt ? new Date(todo.dueAt).getTime() : Number.MAX_SAFE_INTEGER; }
function clockOnDate(date, value) { const [hour, minute] = value.split(':').map(Number); const result = new Date(date); result.setHours(hour, minute, 0, 0); return result; }
function formatDuration(ms) { const seconds = Math.max(0, Math.floor(ms/1000)); return [Math.floor(seconds/3600), Math.floor((seconds%3600)/60), seconds%60].map(value => String(value).padStart(2,'0')).join(':'); }
function formatFocusDuration(ms) { const seconds = Math.max(0, Math.ceil(ms/1000)); return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`; }
function formatMoney(value) { return Number(value || 0).toLocaleString(locale(),{minimumFractionDigits:2,maximumFractionDigits:2}); }
function formatBytes(value) { const bytes = Number(value) || 0; if (!bytes) return '—'; const megabytes = bytes / 1024 / 1024; return `${megabytes.toLocaleString(locale(),{minimumFractionDigits:1,maximumFractionDigits:1})} MB`; }
function formatCloudBytes(value) {
  const bytes = Math.max(0, Number(value) || 0);
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const index = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  const digits = index === 0 ? 0 : (bytes / 1024 ** index >= 100 ? 0 : 1);
  return `${(bytes / 1024 ** index).toLocaleString(locale(), {minimumFractionDigits: digits, maximumFractionDigits: digits})} ${units[index]}`;
}
function formatCloudDate(value) { return value ? new Date(value).toLocaleString(locale(), {month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}) : '—'; }
function formatDue(date) { const today = new Date(); const same = date.toDateString() === today.toDateString(); const time = date.toLocaleTimeString(locale(),{hour:'2-digit',minute:'2-digit',hour12:false}); return same ? `${t('today')} ${time}` : date.toLocaleString(locale(),{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}); }
function toLocalDate(date) { const local = new Date(date.getTime() - date.getTimezoneOffset()*60000); return local.toISOString().slice(0,10); }
function toLocalTime(date) { return `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`; }
function readError(error) { return String(error?.message ?? error ?? t('operationFailed')).replace(/^Error:\s*/, ''); }
function showToast(message, error = false) { const toast = document.createElement('div'); toast.className = `toast ${error ? 'error' : ''}`; toast.textContent = message; $('#toast-region').append(toast); setTimeout(() => toast.remove(), 2800); }

function createPreviewAPI() {
  const now = new Date();
  const sample = [
    {id:'demo-1',title:'整理本周项目进度',note:'同步给团队',dueAt:new Date(now.getTime()+42*60000).toISOString(),completed:false,createdAt:now.toISOString()},
    {id:'demo-2',title:'预约明天下午的会议室',note:'',dueAt:null,completed:false,createdAt:now.toISOString()},
    {id:'demo-3',title:'回复客户邮件',note:'',dueAt:null,completed:true,createdAt:now.toISOString()}
  ];
  const previewEnglishWords = [
    {wordId:1,word:'serendipity',translation:'意外发现美好事物的能力',phonetic:'/ˌserənˈdɪpəti/',example:'Serendipity brought the old friends together again.',source:'nce2',modes:['study','sentence'],seenCount:4,lastSeenAt:new Date(now.getTime()-18*60000).toISOString()},
    {wordId:2,word:'concise',translation:'简明的，简洁的',phonetic:'/kənˈsaɪs/',example:'Keep it concise.',source:'nce2',modes:['quiz','spelling'],seenCount:3,lastSeenAt:new Date(now.getTime()-52*60000).toISOString()},
    {wordId:3,word:'gracious',translation:'亲切的；和蔼的；优雅的',phonetic:'/ˈɡreɪʃəs/',example:'She was gracious to every guest.',source:'nce2',modes:['chinese'],seenCount:2,lastSeenAt:new Date(now.getTime()-86*60000).toISOString()}
  ];
  const previewEnglishWrongWords = [
    {wordId:2,word:'concise',translation:'简明的，简洁的',phonetic:'/kənˈsaɪs/',example:'Keep it concise.',source:'nce2',modes:['quiz','spelling'],wrongCount:2,lastAnswer:'consize',correctAnswer:'concise',lastWrongAt:new Date(now.getTime()-48*60000).toISOString()},
    {wordId:3,word:'gracious',translation:'亲切的；和蔼的；优雅的',phonetic:'/ˈɡreɪʃəs/',example:'She was gracious to every guest.',source:'nce2',modes:['chinese'],wrongCount:1,lastAnswer:'generous',correctAnswer:'gracious',lastWrongAt:new Date(now.getTime()-82*60000).toISOString()}
  ];
  const previewState = {
    todos:sample,
    settings:{...state.settings},
    focus:{...state.focus},
    englishWords:previewEnglishWords,
    englishWrongWords:previewEnglishWrongWords
  };
  const previewRealtime = {status:'offline', desiredOnline:false, authMode:'device', identity:null, messages:[], friends:[], friendRequests:[]};
  const previewStocks = {quotes:[
    {symbol:'1.000001',code:'000001',name:'上证指数',price:3858.25,change:44.05,changePercent:1.15,updatedAt:now.toISOString()},
    {symbol:'0.399001',code:'399001',name:'深证成指',price:14148.73,change:374.05,changePercent:2.72,updatedAt:now.toISOString()},
    {symbol:'0.399006',code:'399006',name:'创业板指',price:3590.79,change:109.92,changePercent:3.16,updatedAt:now.toISOString()}
  ],updatedAt:now.toISOString(),source:'东方财富',stale:false,error:''};
  const previewCloud = {
    session:{loggedIn:false,user:null},
    quota:{used_bytes:186646528,total_storage_limit:5368709120,storage_remaining:5182062592,source_type:'default',source_name:'5GB Pro'},
    items:[
      {id:1,parent_id:0,node_type:1,name:'工作资料',size:0,content_type:'',modify_time:now.toISOString()},
      {id:2,parent_id:0,node_type:2,name:'项目周报.docx',size:486400,content_type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',modify_time:now.toISOString()}
    ]
  };
  const previewTranslation = {
    used: 128,
    limit: 10000,
    history: [
      {id:1,source_text:'今天也要高效工作。',source_lang:'zh',target_text:'Let’s work efficiently today as well.',target_lang:'en',word_count:10,translate_time:now.toISOString()},
      {id:2,source_text:'Keep it concise and clear.',source_lang:'en',target_text:'保持简洁清晰。',target_lang:'zh',word_count:25,translate_time:new Date(now.getTime()-3600000).toISOString()}
    ]
  };
  const previewAI = {
    conversations: [],
    messages: new Map(),
    usage: {conversation_count:0,message_count:0,today_tokens:0,total_tokens:0},
    models: [
      {id:'deepseek-v4-flash',name:'DeepSeek V4 Flash',description:'快速、经济，适合日常问答与内容处理',badge:'极速',configured:true,allowed:true,available:true},
      {id:'deepseek-v4-pro',name:'DeepSeek V4 Pro',description:'更强推理与复杂任务能力',badge:'深度',configured:true,allowed:true,available:true}
    ],
    policy: {allowed_models:['deepseek-v4-flash','deepseek-v4-pro'],daily_token_limit:0,total_token_limit:0,daily_used:0,total_used:0,source_type:'default',source_name:'系统默认',quota_exceeded:false,quota_message:''}
  };
  const previewEnglishQuestionRecord = question => ({
    wordId:Number(question?.wordId) || 0,
    word:String(question?.word || ''),
    translation:String(question?.translation || ''),
    phonetic:String(question?.phonetic || ''),
    example:String(question?.example || ''),
    source:String(question?.source || previewState.settings.englishSource || 'nce2')
  });
  const findPreviewEnglishRecord = (records, question) => records.find(item =>
    (Number(question.wordId) > 0 && Number(item.wordId) === Number(question.wordId)) ||
    item.word.toLowerCase() === question.word.toLowerCase()
  );
  const addPreviewEnglishMode = (record, mode) => {
    record.modes = Array.isArray(record.modes) ? record.modes : [];
    if (!record.modes.includes(mode)) record.modes.push(mode);
  };
  const recordPreviewEnglishWord = (question, mode, increment = true) => {
    const value = previewEnglishQuestionRecord(question);
    if (!value.word) return;
    let record = findPreviewEnglishRecord(previewState.englishWords, value);
    if (!record) {
      record = {...value,modes:[],seenCount:0,lastSeenAt:new Date().toISOString()};
      previewState.englishWords.push(record);
    }
    Object.assign(record, Object.fromEntries(Object.entries(value).filter(([, item]) => item !== '' && item !== 0)));
    addPreviewEnglishMode(record, mode);
    if (increment) record.seenCount = Math.max(0, Number(record.seenCount) || 0) + 1;
    else if (!record.seenCount) record.seenCount = 1;
    record.lastSeenAt = new Date().toISOString();
  };
  return {
    async GetState(){ return structuredClone(previewState); },
    async GetAppInfo(){ return structuredClone(state.appInfo); },
    async GetAccountSession(){ return {loggedIn:previewCloud.session.loggedIn,user:structuredClone(previewCloud.session.user),realtime:structuredClone(previewRealtime)}; },
    async LoginAccount(username,password){ if(!username||!password) throw new Error('请输入用户名和密码'); previewRealtime.authMode='password'; previewRealtime.identity={userId:123,username,displayName:username==='justin'?'Justin':username,authMode:'password'}; previewRealtime.status='online'; previewRealtime.desiredOnline=true; previewRealtime.friends=[{user:{userId:456,username:'lisi',displayName:'李四',online:true},friendsSince:new Date().toISOString()}]; previewCloud.session={loggedIn:true,user:{id:123,username,nickname:previewRealtime.identity.displayName}}; return {loggedIn:true,user:structuredClone(previewCloud.session.user),realtime:structuredClone(previewRealtime)}; },
    async LogoutAccount(){ previewRealtime.status='offline'; previewRealtime.desiredOnline=false; previewRealtime.identity=null; previewRealtime.friends=[]; previewRealtime.friendRequests=[]; previewCloud.session={loggedIn:false,user:null}; return {loggedIn:false,user:null,realtime:structuredClone(previewRealtime)}; },
    async GetAIChatModels(){ if(!previewCloud.session.loggedIn) throw new Error('请先登录工位岛账号'); return {models:structuredClone(previewAI.models),policy:structuredClone(previewAI.policy)}; },
    async GetAIChatUsage(){ if(!previewCloud.session.loggedIn) throw new Error('请先登录工位岛账号'); previewAI.usage.conversation_count=previewAI.conversations.length; previewAI.usage.message_count=[...previewAI.messages.values()].reduce((sum,list)=>sum+list.length,0); return structuredClone(previewAI.usage); },
    async ListAIChatConversations(page,pageSize,keyword,archived){ if(!previewCloud.session.loggedIn) throw new Error('请先登录工位岛账号'); const list=previewAI.conversations.filter(item=>Boolean(item.archived)===Boolean(archived)&&(!keyword||item.title.includes(keyword))); return {total:list.length,list:structuredClone(list),page,pageSize}; },
    async CreateAIChatConversation(input){ if(!previewCloud.session.loggedIn) throw new Error('请先登录工位岛账号'); const createdAt=new Date().toISOString(); const item={id:Date.now(),title:input.title||'新对话',model:input.model||'deepseek-v4-flash',system_prompt:input.system_prompt||'',thinking_enabled:Boolean(input.thinking_enabled),pinned:false,archived:false,message_count:0,total_tokens:0,create_time:createdAt,modify_time:createdAt}; previewAI.conversations.unshift(item); previewAI.messages.set(item.id,[]); return structuredClone(item); },
    async UpdateAIChatConversation(id,input){ const item=previewAI.conversations.find(value=>Number(value.id)===Number(id)); if(!item) throw new Error('会话不存在'); Object.assign(item,input,{modify_time:new Date().toISOString()}); return structuredClone(item); },
    async DeleteAIChatConversation(id){ previewAI.conversations=previewAI.conversations.filter(item=>Number(item.id)!==Number(id)); previewAI.messages.delete(Number(id)); return true; },
    async ListAIChatMessages(id){ return structuredClone(previewAI.messages.get(Number(id))||[]); },
    async SetAIChatFeedback(messageId,feedback){ for(const messages of previewAI.messages.values()){ const message=messages.find(item=>Number(item.id)===Number(messageId)); if(message){message.feedback=feedback;break;} } return true; },
    async StreamAIChatMessage(){ return true; },
    async CancelAIChatStream(){ return true; },
    async GetRealtimeState(){ return structuredClone(previewRealtime); },
    async GetDefaultRealtimeNickname(){ return '我的工位岛'; },
    async ConnectRealtime(nickname){ previewRealtime.authMode='device'; previewRealtime.identity ||= {userId:123,username:'client_demo123',displayName:nickname||'我的工位岛',deviceId:'demo-device',credentialId:'cred_demo',publicKey:'demo',authMode:'device'}; previewRealtime.status='online'; previewRealtime.desiredOnline=true; return structuredClone(previewRealtime); },
    async ConnectRealtimePassword(username,password){ if(!username||!password) throw new Error('请输入用户名和密码'); previewRealtime.authMode='password'; previewRealtime.identity={userId:123,username,displayName:username,authMode:'password'}; previewRealtime.status='online'; previewRealtime.desiredOnline=true; previewRealtime.friends=[{user:{userId:456,username:'lisi',displayName:'李四',online:true},friendsSince:new Date().toISOString()}]; previewCloud.session={loggedIn:true,user:{id:123,username,nickname:username}}; return structuredClone(previewRealtime); },
    async RegisterRealtimeAccount(input){ if(!input?.username) throw new Error('请输入用户名'); return {userId:789,username:input.username,nickname:input.nickname}; },
    async DisconnectRealtime(){ previewRealtime.status='offline'; previewRealtime.desiredOnline=false; if(previewRealtime.authMode==='password') previewRealtime.identity=null; previewRealtime.friends=[]; previewRealtime.friendRequests=[]; return structuredClone(previewRealtime); },
    async ResetRealtimeIdentity(){ previewRealtime.status='offline'; previewRealtime.desiredOnline=false; previewRealtime.identity=null; previewRealtime.messages=[]; return structuredClone(previewRealtime); },
    async SendRealtimeChat(toUserId,text){ const message={messageId:crypto.randomUUID(),channelId:`direct:123:${toUserId}`,senderUserId:123,peerUserId:toUserId,eventType:'chat.text',text,createdAt:new Date().toISOString(),onlineDeliveries:1,outgoing:true}; previewRealtime.messages.push(message); return structuredClone(message); },
    async SendRealtimeWindowEffect(toUserId,effect,text){ return {messageId:crypto.randomUUID(),senderUserId:123,senderDisplayName:'我',peerUserId:toUserId,eventType:`window.${effect}`,text,createdAt:new Date().toISOString(),onlineDeliveries:1,outgoing:true}; },
    async MarkRealtimeMessageRead(){ return true; },
    async CreateRealtimeFriendRequest(){ return {friendRequestId:crypto.randomUUID(),status:'pending'}; },
    async RespondRealtimeFriendRequest(friendRequestId,decision){ previewRealtime.friendRequests=previewRealtime.friendRequests.filter(item=>item.friendRequestId!==friendRequestId); return {friendRequestId,status:decision==='accept'?'accepted':'rejected'}; },
    async RemoveRealtimeFriend(userId){ previewRealtime.friends=previewRealtime.friends.filter(item=>Number(item.user.userId)!==Number(userId)); return true; },
    async RefreshRealtimeFriends(){ return structuredClone(previewRealtime); },
    async GetCloudDiskSession(){ return structuredClone(previewCloud.session); },
    async ListCloudDiskItems(parentId,page,pageSize,keyword){ const list=previewCloud.items.filter(item=>Number(item.parent_id)===Number(parentId)&&(!keyword||item.name.includes(keyword))); return {total:list.length,list:structuredClone(list),page,pageSize}; },
    async GetCloudDiskQuota(){ return structuredClone(previewCloud.quota); },
    async CreateCloudDiskFolder(parentId,name){ const item={id:Date.now(),parent_id:parentId,node_type:1,name,size:0,content_type:'',modify_time:new Date().toISOString()}; previewCloud.items.push(item); return structuredClone(item); },
    async RenameCloudDiskItem(id,name){ const item=previewCloud.items.find(entry=>Number(entry.id)===Number(id)); if(item)item.name=name; return structuredClone(item); },
    async MoveCloudDiskItem(id,parentId){ const item=previewCloud.items.find(entry=>Number(entry.id)===Number(id)); if(item)item.parent_id=parentId; return structuredClone(item); },
    async DeleteCloudDiskItem(id){ previewCloud.items=previewCloud.items.filter(entry=>Number(entry.id)!==Number(id)); return true; },
    async UploadCloudDiskFile(parentId){ const item={id:Date.now(),parent_id:parentId,node_type:2,name:'模拟上传文件.pdf',size:1245184,content_type:'application/pdf',modify_time:new Date().toISOString()}; previewCloud.items.push(item); return {cancelled:false,name:item.name}; },
    async DownloadCloudDiskFile(id,name){ return {cancelled:false,name,path:`/Downloads/${name}`}; },
    async GetTranslationQuota(){ if(!previewCloud.session.loggedIn) throw new Error('请先登录工位岛账号'); return {daily_char_limit:previewTranslation.limit,used_characters:previewTranslation.used,reserved_characters:0,remaining_characters:previewTranslation.limit-previewTranslation.used,unlimited:false,quota_exceeded:false,source_type:'default',source_name:'系统默认'}; },
    async TranslateText(text,source,target){ if(!previewCloud.session.loggedIn) throw new Error('请先登录工位岛账号'); const translated=target==='zh'?'这是一段模拟的中文翻译结果。':'This is a simulated English translation result.'; previewTranslation.used += [...text].length; previewTranslation.history.unshift({id:Date.now(),source_text:text,source_lang:source,target_text:translated,target_lang:target,word_count:[...text].length,translate_time:new Date().toISOString()}); return {translated}; },
    async ListTranslationHistory(page,pageSize,keyword){ if(!previewCloud.session.loggedIn) throw new Error('请先登录工位岛账号'); const filtered=previewTranslation.history.filter(item=>!keyword||item.source_text.includes(keyword)||item.target_text.includes(keyword)); const start=(page-1)*pageSize; return {total:filtered.length,list:structuredClone(filtered.slice(start,start+pageSize)),page,pageSize}; },
    async DeleteTranslationHistory(id){ previewTranslation.history=previewTranslation.history.filter(item=>Number(item.id)!==Number(id)); return true; },
    async DeleteTranslationHistoryBatch(ids){ const selected=new Set(ids.map(Number)); previewTranslation.history=previewTranslation.history.filter(item=>!selected.has(Number(item.id))); return true; },
    async ExportTranslationHistory(){ return {cancelled:false,name:'translate_history.xlsx',path:'/Downloads/translate_history.xlsx'}; },
    async GetStockQuotes(){ previewStocks.updatedAt=new Date().toISOString(); previewStocks.quotes.forEach(item=>item.updatedAt=previewStocks.updatedAt); return structuredClone(previewStocks); },
    async AddStock(code){ previewStocks.quotes.push({symbol:`1.${code}`,code,name:'模拟自选股',price:1888.88,change:-12.34,changePercent:-0.65,updatedAt:new Date().toISOString()}); return structuredClone(previewStocks); },
    async RemoveStock(symbol){ previewStocks.quotes=previewStocks.quotes.filter(item=>item.symbol!==symbol); return structuredClone(previewStocks); },
    async SetStockWindow(){ return true; },
    async AddTodo(input){ previewState.todos.push({id:crypto.randomUUID(),...input,dueAt:input.dueAt||null,completed:false,createdAt:new Date().toISOString()}); },
    async UpdateTodo(id,input){ Object.assign(previewState.todos.find(todo=>todo.id===id),input,{dueAt:input.dueAt||null}); },
    async ToggleTodo(id,value){ previewState.todos.find(todo=>todo.id===id).completed=value; },
    async DeleteTodo(id){ previewState.todos=previewState.todos.filter(todo=>todo.id!==id); },
    async StartFocus(minutes){ const startedAt=new Date(); const endsAt=new Date(startedAt.getTime()+minutes*60000); previewState.focus={active:true,durationMinutes:minutes,startedAt:startedAt.toISOString(),endsAt:endsAt.toISOString(),completedAt:null}; return structuredClone(previewState.focus); },
    async StopFocus(){ previewState.focus={...previewState.focus,active:false,completedAt:null}; return structuredClone(previewState.focus); },
    async SaveSettings(settings){ previewState.settings={...settings}; return structuredClone(settings); },
    async SetCompactMode(compact){ previewState.settings.compactMode=compact; return structuredClone(previewState.settings); },
    async SetEnglishWindow(){ return true; },
    async SetEnglishWindowContentWidth(){ return true; },
    async SetEnglishWindowContentSize(){ return true; },
    async GetEnglishNotebook(){ return {words:structuredClone(previewState.englishWords),wrongWords:structuredClone(previewState.englishWrongWords)}; },
    async RecordEnglishWord(question,mode){ recordPreviewEnglishWord(question,mode,true); return true; },
    async RecordEnglishWrong(question,mode,answer,correctAnswer){
      if (!['quiz','chinese','spelling'].includes(mode)) return true;
      const value = previewEnglishQuestionRecord(question);
      recordPreviewEnglishWord(question,mode,false);
      let record = findPreviewEnglishRecord(previewState.englishWrongWords,value);
      if (!record) {
        record = {...value,modes:[],wrongCount:0,lastAnswer:'',correctAnswer:'',lastWrongAt:new Date().toISOString()};
        previewState.englishWrongWords.push(record);
      }
      Object.assign(record,Object.fromEntries(Object.entries(value).filter(([, item]) => item !== '' && item !== 0)));
      addPreviewEnglishMode(record,mode);
      record.wrongCount = Math.max(0,Number(record.wrongCount) || 0) + 1;
      record.lastAnswer = String(answer || '');
      record.correctAnswer = String(correctAnswer || question?.correctAnswer || '');
      record.lastWrongAt = new Date().toISOString();
      return true;
    },
    async TranslateEnglishExample(text){ return text === 'Keep it concise.' ? '保持简洁。' : '偶然发现美好事物，是生活中的惊喜。'; },
    async StartEnglishLearning(mode){
      const source = [
        {wordId:1,word:'serendipity',translation:'意外发现美好事物的能力',phonetic:'/ˌserənˈdɪpəti/',example:'Serendipity brought the old friends together again.',source:'nce2'},
        {wordId:2,word:'concise',translation:'简明的，简洁的',phonetic:'/kənˈsaɪs/',example:'Keep it concise.',source:'nce2'}
      ];
      const questions = source.map((question, index) => {
        if (mode === 'chinese') return {...question, options:index ? ['vague','concise','expensive','silent'] : ['effort','serendipity','caution','rest'], correctAnswer:question.word};
        if (mode === 'spelling') return {...question, options:[], correctAnswer:question.word};
        const options = index ? ['模糊的','简明的，简洁的','昂贵的','安静的'] : ['意外发现美好事物的能力','持续的努力','谨慎的决定','短暂的休息'];
        return {...question, options, correctAnswer:question.translation};
      });
      return {sessionId:7,mode,questions};
    },
    async SubmitEnglishAnswer(sessionId,wordId,answer){
      const question=[{wordId:1,word:'serendipity',translation:'意外发现美好事物的能力'},{wordId:2,word:'concise',translation:'简明的，简洁的'}].find(item=>item.wordId===wordId);
      const expected = state.english.mode === 'quiz' ? question.translation : question.word;
      return {correct:answer.toLowerCase()===expected.toLowerCase(),correctAnswer:expected};
    },
    async PreviewWindowOpacity(){ return true; },
    async RestoreWindowOpacity(){ return true; },
    async GetWeather(city){ return {queryCity:city,city,temperature:23.6,apparentTemperature:24.1,weatherCode:2,description:'多云',icon:'⛅',updatedAt:new Date().toISOString(),stale:false}; },
    async RefreshWeather(city){ return this.GetWeather(city); },
    async GetActiveReminder(){ return null; },
    async AcknowledgeReminder(){ return true; },
    async PlayReminderSound(){ return true; },
    async TestNotification(){ return true; },
    async MinimiseWindow(){ return true; },
    async QuitApp(){ return true; },
    async CheckForUpdates(force){ return force ? {currentVersion:'0.11.0',latestVersion:'0.11.0',available:false,skipped:false,releaseURL:'https://github.com/asbacklight-justin/workday-island/releases/tag/v0.11.0',downloadURL:'',assetName:'',assetSize:0,digest:'',releaseNotes:'新增英语学习中心与全能翻译，并优化 Windows 悬浮窗透明度。\nEnglish Learning Centre, Universal Translator, and improved Windows widget opacity.'} : {currentVersion:'0.11.0',skipped:true}; },
    async OpenUpdateURL(){ return true; },
    async OpenWebApp(){ return true; }
  };
}

boot();

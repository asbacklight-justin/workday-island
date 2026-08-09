const translations = {
  zh: {
    appName: '工位岛', compact: '精简', expand: '展开', pin: '置顶', settings: '设置', about: '关于', minimize: '最小化', fullscreen: '全屏', exitFullscreen: '退出全屏', hideToTray: '隐藏到系统托盘', windowControls: '窗口控制',
    overview: '工作日概览', earningEstimate: '根据月薪、月计薪天数和今日工作进度估算', weatherData: '天气数据：Open-Meteo',
    earnedToday: '今日已赚', offworkCountdown: '下班倒计时', todayKicker: 'TODAY', myTodos: '我的待办',
    addTodo: '新建待办', pendingFilter: '待处理', allFilter: '全部', doneFilter: '已完成', nextReminder: '最近提醒',
    noReminder: '暂无提醒', reminderHint: '新建待办时可以指定时间', breakTitle: '专注也要呼吸',
    breakText: '每工作 50 分钟，记得起身活动一下。', testReminder: '测试系统提醒', newTodo: '新建待办',
    editTodo: '编辑待办', todoContent: '待办内容', todoPlaceholder: '比如：下午三点提交周报', reminderAt: '提醒时间',
    optional: '可选', note: '备注', notePlaceholder: '补充一点上下文', cancel: '取消', saveTodo: '保存待办',
    settingsTitle: '工作时间设置', headerEntries: '顶部功能入口', headerEntriesDesc: '选择在工作台顶部显示的快捷入口', workStart: '上班时间', workEnd: '下班时间', monthlySalary: '月薪',
    localOnly: '仅保存在本机', salaryPlaceholder: '例如 15000', salaryWorkdays: '月计薪天数', weatherCity: '天气城市',
    weatherPlaceholder: '例如：上海、杭州、Shenzhen', workdays: '工作日', language: '界面语言', followSystem: '跟随系统',
    keepOnTop: '窗口保持置顶', keepOnTopDesc: '让倒计时和待办始终触手可及', saveSettings: '保存设置',
    theme: '界面主题', darkTheme: '深色', lightTheme: '浅色', auroraTheme: '极光', memberDarkThemes: '会员深色主题', memberLightThemes: '会员亮色主题', plusTheme: '曜金紫晶 · Plus', proTheme: '全息极光 · Pro', ultraTheme: '黑曜星钻 · Ultra', plusLightTheme: '樱金晨曦 · Plus', proLightTheme: '冰川晴空 · Pro', ultraLightTheme: '星钻白曜 · Ultra', themeLocked: '需 {membership} 或更高等级', themeAccessHint: '会员主题按当前账号等级解锁', currency: '货币符号', compactTodos: '未完成待办',
    showCompactTodos: '精简模式展示待办', showCompactTodosDesc: '在核心面板下方展示未完成事项', noCompactTodos: '暂无未完成待办',
    compactOpacity: '悬浮窗透明度', compactOpacityDesc: '拖动时实时预览；精简模式、英语学习和股市小窗共用',
    aboutTitle: '关于工位岛', aboutDescription: '一座安静悬浮在桌面的工作小岛。', version: '版本', author: '作者', email: '邮箱', webApp: 'Web 端',
    feedback: '意见反馈', feedbackEntryHint: '告诉我们哪里可以做得更好', feedbackTitle: '提交意见反馈', feedbackDescription: '你的反馈会直接送达 Backlight 团队，无需登录。',
    feedbackType: '反馈类型', feedbackSuggestion: '功能建议', feedbackBug: '问题反馈', feedbackExperience: '体验反馈', feedbackOther: '其他', feedbackContact: '联系方式', feedbackContactPlaceholder: '邮箱或其他联系方式',
    feedbackSubject: '标题', feedbackSubjectPlaceholder: '用一句话概括问题或建议', feedbackContent: '详细内容', feedbackContentPlaceholder: '请描述发生了什么、期望效果或复现步骤',
    feedbackPrivacy: '提交时会发送反馈内容、可选联系方式、应用版本和系统平台，不会附带待办、薪资或笔记。', submitFeedback: '提交反馈', submittingFeedback: '正在提交…', feedbackSubjectRequired: '请填写反馈标题', feedbackContentRequired: '请填写反馈内容', feedbackSubmitted: '反馈已提交，谢谢你的帮助（编号 #{id}）', feedbackSubmittedNoID: '反馈已提交，谢谢你的帮助',
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
    fishing: '摸鱼', fishingTitle: '摸鱼岛', fishingIsland: '钓鱼小岛', slackingIsland: '摸鱼小岛', memberBeta: '会员内测', fishingMembersOnly: '摸鱼功能内测阶段仅会员可测试', fishingJournal: '摸鱼图鉴', fishingJournalHint: '今日也要有点收获', fishCaught: '钓获', bestStreak: '最佳连击', recentCatch: '最近鱼获', fishingRods: '鱼竿装备', fishingRodsHint: '每一根鱼竿只强化一个钓鱼方面', equipFishingRod: '装备鱼竿', rodCollection: '已收集 {owned}/{total} 根', rodDropRates: '优 1% · 精 .35% · 史 .1% · 传 .03%', rodNoBonus: '无额外加成', rodUnlocked: '获得 {rarity} 鱼竿「{name}」！可在装备栏切换', rodAlreadyOwned: '获得了重复鱼竿「{name}」', rodOrdinary: '普通', rodExcellent: '优秀', rodFine: '精良', rodEpic: '史诗', rodLegendary: '传说', slackingTitle: '工位摸鱼计划', slackingHint: '带上一条鱼，在老板视线外完成几次完美偷闲。', slackingCompanion: '选择摸鱼搭子', slackingSafeWindow: '安全空档', slackingProgress: '摸鱼进度', slackingExposure: '老板警觉', startSlacking: '开始摸鱼', slackingNow: '趁现在摸一下', slackingNeedFish: '先在钓鱼小岛钓到一条鱼，再来开启摸鱼计划。', slackingPerfect: '完美偷闲，老板完全没有察觉。', slackingGood: '安全通过，继续保持。', slackingMiss: '动作太明显，老板警觉上升！', slackingSuccess: '摸鱼成功！今天也要保持从容。', slackingCaught: '老板发现了，先认真工作一会儿吧。', slackingTimeout: '安全空档结束，收起你的摸鱼搭子。',
    fishingReady: '湖面很安静', fishingReadyHint: '抛下鱼竿，等一条有缘鱼', startFishing: '开始钓鱼', waitingForFish: '等待鱼儿咬钩…', waitingHint: '保持安静，浮标下沉时准备收线', fishBiting: '鱼儿咬钩了！', fishBitingHint: '游标进入发光区时点击收线', reelNow: '收线', catchProgress: '捕获进度', lineTension: '鱼线张力', spaceShortcut: '空格键',
    fishingGuide: '钓鱼指南', fishingGuideHint: '稳住，别让老板发现', castRod: '抛竿等待', castRodHint: '鱼儿咬钩前不要着急', hitPerfectZone: '命中时机', hitPerfectZoneHint: '游标进入发光区时收线', fillCatchProgress: '填满进度', fillCatchProgressHint: '连续完美命中可快速钓起', fishRarity: '鱼类稀有度', rarityCommon: '常见', rarityRare: '珍稀', rarityEpic: '史诗', rarityLegendary: '传说',
    fishingPerfect: '完美收线！捕获进度大幅提升', fishingGood: '不错的时机，继续稳住', fishingMiss: '时机不对，鱼线张力上升了', fishingCaught: '钓到了！{name} 已收入摸鱼图鉴', fishingEscaped: '{name} 挣脱鱼线逃走了', fishingTimeout: '{name} 耗尽你的耐心后溜走了', noFishingCatch: '还没有鱼获\n去湖边试试手气吧', unknownFish: '未知鱼影', clearFishingLogConfirm: '确定清空本机鱼获记录吗？', fishingLogCleared: '鱼获记录已清空',
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
    account: '账号', accountCenter: '账号中心', accountLogin: '登录', accountLoginTitle: '登录工位岛', accountLoginHint: '一次登录即可使用 AI 对话、实时聊天、好友、工作云盘、云笔记、链接分享和全能翻译。', accountSecurityHint: '密码仅用于本次登录，不会保存在本机。', signIn: '登录账号', signingIn: '正在登录…', signedOut: '未登录', accountSignedIn: '已登录', signOutAll: '退出账号', signingOut: '正在退出…', signOutHint: '退出后，AI 对话、实时聊天、工作云盘、云笔记、链接分享和全能翻译会同时退出。', loginSuccess: '登录成功', logoutSuccess: '已退出账号', ready: '已就绪', myAccount: '我的账号', chatLoginRequired: '登录账号后即可使用好友和实时聊天。', aiChat: 'AI 对话', cloudNotes: '云笔记', linkSharing: '链接分享', aiAvailableTitle: 'AI 对话现已可用', aiAvailableHint: '登录后即可使用 DeepSeek 智能助手', workdayMember: '工位岛用户', workdayPlusMember: '工位岛 Plus 会员', workdayProMember: '工位岛 Pro 会员', workdayUltraMember: '工位岛 Ultra 会员', membershipUpdated: '{membership} 已生效', membershipThemeApplied: '已自动切换为 {membership} 专属主题', trialInvitation: '免费试用资格', trialInvitationHint: '你获得了 {role} 免费试用 {days} 天的资格', trialInvitationExpiry: '请在 {time} 前领取', claimTrial: '确认领取', claimingTrial: '正在领取…', trialClaimConfirm: '确认领取 {role} 的 {days} 天免费试用吗？领取后将立即生效，且不可重复领取。', trialClaimed: '已领取 {role} 免费试用，会员权益现已生效',
    realtimeChat: '实时聊天', chat: '实时聊天', backToDashboard: '返回工作台', offline: '已下线', online: '已上线', connecting: '正在连接', authenticating: '正在认证', reconnecting: '正在重连', authFailed: '需要重新连接',
    myRealtimeIdentity: '我的实时身份', copyId: '复制 ID', identityHint: '首次上线会自动创建安全设备身份，私钥仅保存在系统安全存储中。', nickname: '昵称', nicknamePlaceholder: '例如：小明的桌面',
    deviceLogin: '一键登录', passwordLogin: '账号密码', passwordLoginHint: '使用已有账号登录；密码仅用于当前在线会话，不会保存到本机。', accountUsername: '用户名', accountPassword: '密码',
    accountUsernamePlaceholder: '请输入用户名', accountPasswordPlaceholder: '请输入密码', loginOnline: '登录并上线', deviceAuth: '设备登录', passwordAuth: '账号登录',
    noAccountYet: '还没有账号？', registerNow: '免费注册', registerAccount: '注册工位岛账号', registerAccountHint: '注册后可使用 AI 对话、实时聊天、好友、工作云盘、云笔记、链接分享和全能翻译。',
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
    notificationCenter: '通知中心', notificationCenterHint: '系统消息、业务动态和安全提醒集中在这里。', notificationLoginTitle: '登录后查看站内信', notificationLoginHint: '系统通知与当前工位岛账号关联。',
    allNotifications: '全部通知', allTypes: '全部类型', allStatuses: '全部状态', noticeSystem: '系统通知', noticeBusiness: '业务提醒', noticeSecurity: '安全提醒', noticeAnnouncement: '公告', unread: '未读', read: '已读', markRead: '标为已读', markAllRead: '全部已读',
    notificationCount: '共 {count} 条通知', unreadCount: '{count} 条未读', notificationLoading: '正在读取通知…', noNotifications: '暂无通知', noNotificationsHint: '新的系统消息会出现在这里。', notificationMarkedRead: '通知已读', markedAllRead: '所有通知已标记为已读', notificationDeleted: '通知已删除', deleteNotificationConfirm: '确定删除通知“{title}”吗？',
    previousPage: '上一页', nextPage: '下一页', notificationPageSummary: '第 {page} / {pages} 页', pinnedNotice: '置顶', openNotificationLink: '打开详情',
    weekdays: ['一','二','三','四','五','六','日']
  },
  en: {
    appName: 'Workday Island', compact: 'Compact', expand: 'Expand', pin: 'Pin', settings: 'Settings', about: 'About', minimize: 'Minimize', fullscreen: 'Full Screen', exitFullscreen: 'Exit Full Screen', hideToTray: 'Hide to system tray', windowControls: 'Window controls',
    overview: 'Workday overview', earningEstimate: 'Estimated from salary, paid days, and today’s progress', weatherData: 'Weather data: Open-Meteo',
    earnedToday: 'EARNED TODAY', offworkCountdown: 'OFF-WORK COUNTDOWN', todayKicker: 'TODAY', myTodos: 'My Todos',
    addTodo: 'New Todo', pendingFilter: 'Pending', allFilter: 'All', doneFilter: 'Completed', nextReminder: 'Next Reminder',
    noReminder: 'No reminders', reminderHint: 'Set a time when creating a todo', breakTitle: 'Remember to breathe',
    breakText: 'Stand up and move after every 50 minutes of work.', testReminder: 'Test Reminder', newTodo: 'New Todo',
    editTodo: 'Edit Todo', todoContent: 'Todo', todoPlaceholder: 'e.g. Submit the weekly report at 3 PM', reminderAt: 'Reminder',
    optional: 'Optional', note: 'Note', notePlaceholder: 'Add some context', cancel: 'Cancel', saveTodo: 'Save Todo',
    settingsTitle: 'Work Settings', headerEntries: 'Header shortcuts', headerEntriesDesc: 'Choose which shortcuts appear in the dashboard header', workStart: 'Work starts', workEnd: 'Work ends', monthlySalary: 'Monthly salary',
    localOnly: 'Stored locally', salaryPlaceholder: 'e.g. 15000', salaryWorkdays: 'Paid days / month', weatherCity: 'Weather city',
    weatherPlaceholder: 'e.g. Shanghai, Hangzhou, Shenzhen', workdays: 'Workdays', language: 'Language', followSystem: 'Follow system',
    keepOnTop: 'Keep window on top', keepOnTopDesc: 'Keep your countdown and todos within reach', saveSettings: 'Save Settings',
    theme: 'Theme', darkTheme: 'Dark', lightTheme: 'Light', auroraTheme: 'Aurora', memberDarkThemes: 'Member dark themes', memberLightThemes: 'Member light themes', plusTheme: 'Violet Gilt · Plus', proTheme: 'Holographic Aurora · Pro', ultraTheme: 'Obsidian Diamond · Ultra', plusLightTheme: 'Sakura Dawn · Plus', proLightTheme: 'Glacier Sky · Pro', ultraLightTheme: 'Stellar White Diamond · Ultra', themeLocked: 'Requires {membership} or higher', themeAccessHint: 'Member themes unlock with your current account tier', currency: 'Currency symbol', compactTodos: 'Pending todos',
    showCompactTodos: 'Show todos in compact mode', showCompactTodosDesc: 'Show pending items below the core cards', noCompactTodos: 'No pending todos',
    compactOpacity: 'Floating window opacity', compactOpacityDesc: 'Live preview; shared by compact mode, English learning, and the stock ticker',
    aboutTitle: 'About Workday Island', aboutDescription: 'A quiet little work island floating on your desktop.', version: 'Version', author: 'Author', email: 'Email', webApp: 'Web App',
    feedback: 'Feedback', feedbackEntryHint: 'Tell us what could be better', feedbackTitle: 'Send Feedback', feedbackDescription: 'Your feedback goes directly to the Backlight team. No sign-in is required.',
    feedbackType: 'Type', feedbackSuggestion: 'Feature suggestion', feedbackBug: 'Bug report', feedbackExperience: 'Experience feedback', feedbackOther: 'Other', feedbackContact: 'Contact', feedbackContactPlaceholder: 'Email or another way to reach you',
    feedbackSubject: 'Subject', feedbackSubjectPlaceholder: 'Summarise the issue or idea in one sentence', feedbackContent: 'Details', feedbackContentPlaceholder: 'Describe what happened, the expected result, or steps to reproduce',
    feedbackPrivacy: 'The report sends its content, optional contact, app version, and system platform. Todos, salary, and notes are never attached.', submitFeedback: 'Send Feedback', submittingFeedback: 'Sending…', feedbackSubjectRequired: 'Enter a feedback subject', feedbackContentRequired: 'Enter the feedback details', feedbackSubmitted: 'Feedback sent — thank you (reference #{id})', feedbackSubmittedNoID: 'Feedback sent — thank you',
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
    fishing: 'Fishing Break', fishingTitle: 'Slack Island', fishingIsland: 'Fishing Island', slackingIsland: 'Slack Island', memberBeta: 'Member Beta', fishingMembersOnly: 'Fishing Break is available to members only during beta', fishingJournal: 'Catch Journal', fishingJournalHint: 'A tiny catch makes the day better', fishCaught: 'Caught', bestStreak: 'Best streak', recentCatch: 'Recent catches', fishingRods: 'Rod Loadout', fishingRodsHint: 'Each rod improves one fishing aspect', equipFishingRod: 'Equip rod', rodCollection: '{owned}/{total} rods collected', rodDropRates: 'Ex 1% · Fine .35% · Epic .1% · Leg .03%', rodNoBonus: 'No bonus', rodUnlocked: 'Unlocked a {rarity} rod: {name}. Equip it in your loadout.', rodAlreadyOwned: 'You found a duplicate {name}', rodOrdinary: 'Ordinary', rodExcellent: 'Excellent', rodFine: 'Fine', rodEpic: 'Epic', rodLegendary: 'Legendary', slackingTitle: 'Desk-side Slack Plan', slackingHint: 'Bring a caught fish and use safe windows for a few perfect breaks.', slackingCompanion: 'Choose your fish buddy', slackingSafeWindow: 'Safe window', slackingProgress: 'Slack progress', slackingExposure: 'Boss alert', startSlacking: 'Start slacking', slackingNow: 'Take a quick break', slackingNeedFish: 'Catch a fish in Fishing Island before starting your slack plan.', slackingPerfect: 'Perfect break. Nobody noticed.', slackingGood: 'Safe pass. Keep it subtle.', slackingMiss: 'Too obvious—the boss alert rose!', slackingSuccess: 'Slack success! Stay effortlessly calm.', slackingCaught: 'Busted. Time to look busy for a moment.', slackingTimeout: 'The safe window closed. Hide your fish buddy.',
    fishingReady: 'The lake is quiet', fishingReadyHint: 'Cast the line and wait for your lucky fish', startFishing: 'Start fishing', waitingForFish: 'Waiting for a bite…', waitingHint: 'Stay quiet and get ready when the float sinks', fishBiting: 'A fish is biting!', fishBitingHint: 'Reel when the marker enters the glowing zone', reelNow: 'Reel now', catchProgress: 'Catch progress', lineTension: 'Line tension', spaceShortcut: 'Space',
    fishingGuide: 'Fishing guide', fishingGuideHint: 'Keep calm—and keep it discreet', castRod: 'Cast and wait', castRodHint: 'Do not rush before the fish bites', hitPerfectZone: 'Hit the timing', hitPerfectZoneHint: 'Reel inside the glowing zone', fillCatchProgress: 'Fill the progress', fillCatchProgressHint: 'Perfect streaks land fish faster', fishRarity: 'Fish rarity', rarityCommon: 'Common', rarityRare: 'Rare', rarityEpic: 'Epic', rarityLegendary: 'Legendary',
    fishingPerfect: 'Perfect reel! Catch progress surged', fishingGood: 'Good timing—keep it steady', fishingMiss: 'Bad timing—the line tension increased', fishingCaught: 'Caught! {name} was added to your journal', fishingEscaped: '{name} broke free and escaped', fishingTimeout: '{name} outlasted your patience and slipped away', noFishingCatch: 'No catches yet\nTry your luck by the lake', unknownFish: 'Unknown shadow', clearFishingLogConfirm: 'Clear the local catch journal?', fishingLogCleared: 'Catch journal cleared',
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
    account: 'Account', accountCenter: 'Account Center', accountLogin: 'Sign In', accountLoginTitle: 'Sign in to Workday Island', accountLoginHint: 'One sign-in unlocks AI Chat, realtime chat, friends, Work Cloud, Cloud Notes, Link Sharing, and Universal Translator.', accountSecurityHint: 'Your password is used only for this session and is not stored locally.', signIn: 'Sign In', signingIn: 'Signing in…', signedOut: 'Signed out', accountSignedIn: 'Signed in', signOutAll: 'Sign Out', signingOut: 'Signing out…', signOutHint: 'Signing out disconnects AI Chat, realtime chat, Work Cloud, Cloud Notes, Link Sharing, and Universal Translator.', loginSuccess: 'Signed in', logoutSuccess: 'Signed out', ready: 'Ready', myAccount: 'My account', chatLoginRequired: 'Sign in to use friends and realtime chat.', aiChat: 'AI Chat', cloudNotes: 'Cloud Notes', linkSharing: 'Link Sharing', aiAvailableTitle: 'AI Chat is now available', aiAvailableHint: 'Sign in to use the DeepSeek assistant', workdayMember: 'Workday Island Member', workdayPlusMember: 'Workday Island Plus', workdayProMember: 'Workday Island Pro', workdayUltraMember: 'Workday Island Ultra', membershipUpdated: '{membership} is now active', membershipThemeApplied: 'Switched automatically to the {membership} member theme', trialInvitation: 'Free trial available', trialInvitationHint: 'You have a {days}-day free trial for {role}', trialInvitationExpiry: 'Claim before {time}', claimTrial: 'Claim trial', claimingTrial: 'Claiming…', trialClaimConfirm: 'Claim the {days}-day free trial for {role}? It starts immediately and can only be claimed once.', trialClaimed: '{role} free trial claimed. Your membership is now active.',
    realtimeChat: 'Realtime Chat', chat: 'Realtime chat', backToDashboard: 'Back to dashboard', offline: 'Offline', online: 'Online', connecting: 'Connecting', authenticating: 'Authenticating', reconnecting: 'Reconnecting', authFailed: 'Reconnect required',
    myRealtimeIdentity: 'My realtime identity', copyId: 'Copy ID', identityHint: 'Your first connection creates a secure device identity. Its private key stays in system secure storage.', nickname: 'Nickname', nicknamePlaceholder: 'e.g. Alex’s desktop',
    deviceLogin: 'One-click login', passwordLogin: 'Username & password', passwordLoginHint: 'Sign in with an existing account. Your password is kept only for this online session and is never saved locally.', accountUsername: 'Username', accountPassword: 'Password',
    accountUsernamePlaceholder: 'Enter username', accountPasswordPlaceholder: 'Enter password', loginOnline: 'Sign In & Go Online', deviceAuth: 'Device login', passwordAuth: 'Account login',
    noAccountYet: 'No account yet?', registerNow: 'Sign Up Free', registerAccount: 'Create a Workday Island account', registerAccountHint: 'Use one account for AI Chat, realtime chat, friends, Work Cloud, Cloud Notes, Link Sharing, and Universal Translator.',
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
    notificationCenter: 'Notification Center', notificationCenterHint: 'System messages, business updates, and security alerts in one place.', notificationLoginTitle: 'Sign in to view notifications', notificationLoginHint: 'Notifications are linked to your Workday Island account.',
    allNotifications: 'All notifications', allTypes: 'All types', allStatuses: 'All statuses', noticeSystem: 'System', noticeBusiness: 'Business', noticeSecurity: 'Security', noticeAnnouncement: 'Announcement', unread: 'Unread', read: 'Read', markRead: 'Mark as read', markAllRead: 'Mark all read',
    notificationCount: '{count} notifications', unreadCount: '{count} unread', notificationLoading: 'Loading notifications…', noNotifications: 'No notifications', noNotificationsHint: 'New system messages will appear here.', notificationMarkedRead: 'Notification marked as read', markedAllRead: 'All notifications marked as read', notificationDeleted: 'Notification deleted', deleteNotificationConfirm: 'Delete “{title}”?',
    previousPage: 'Previous', nextPage: 'Next', notificationPageSummary: 'Page {page} / {pages}', pinnedNotice: 'Pinned', openNotificationLink: 'Open details',
    weekdays: ['M','T','W','T','F','S','S']
  }
};

const headerEntryDefinitions = [
  ['ai', '#open-ai-chat'], ['chat', '#open-chat'], ['stocks', '#open-stocks'], ['fishing', '#open-fishing'], ['cloud', '#open-cloud'],
  ['notes', '#open-notes'], ['sharing', '#open-share-management'], ['translator', '#open-translator'], ['english', '#open-english'],
  ['notifications', '#open-notifications']
];

const headerPageEntryDefinitions = [
  ['ai-chat-open', '#open-ai-chat'], ['chat-open', '#open-chat'], ['stock-open', '#open-stocks'], ['fishing-open', '#open-fishing'],
  ['cloud-open', '#open-cloud'], ['notes-open', '#open-notes'], ['share-management-open', '#open-share-management'],
  ['translator-open', '#open-translator'], ['english-center-open', '#open-english'], ['english-open', '#open-english'], ['notification-open', '#open-notifications']
];

const chatEmojiCatalog = [
  ['😀', '开心', 'Happy', 'bounce'], ['😂', '笑哭', 'Laugh', 'laugh'], ['🥳', '庆祝', 'Celebrate', 'party'], ['😍', '喜欢', 'Love', 'heart'], ['😎', '酷', 'Cool', 'sway'],
  ['🤔', '思考', 'Thinking', 'think'], ['😭', '哭哭', 'Crying', 'tear'], ['😤', '加油', 'Keep going', 'puff'], ['😴', '困了', 'Sleepy', 'float'], ['🤯', '震惊', 'Mind blown', 'pop'],
  ['👍', '点赞', 'Thumbs up', 'thumb'], ['👏', '鼓掌', 'Applause', 'clap'], ['🙏', '感谢', 'Thanks', 'bow'], ['💪', '努力', 'Strong', 'flex'], ['❤️', '爱心', 'Heart', 'heart'],
  ['🔥', '火力全开', 'On fire', 'flame'], ['🎉', '撒花', 'Confetti', 'party'], ['✨', '闪耀', 'Sparkle', 'sparkle'], ['👋', '挥手', 'Wave', 'wave'], ['🐟', '摸鱼', 'Fish', 'swim'],
  ['😁', '咧嘴笑', 'Grin', 'bounce'], ['😆', '大笑', 'Big laugh', 'laugh'], ['🙂', '微笑', 'Smile', 'sway'], ['😉', '眨眼', 'Wink', 'think'], ['😌', '安心', 'Relieved', 'float'],
  ['😇', '天使', 'Angel', 'float'], ['🤩', '惊艳', 'Star-struck', 'sparkle'], ['😋', '美味', 'Yum', 'pop'], ['😜', '调皮', 'Playful', 'sway'], ['😳', '脸红', 'Blush', 'pop'],
  ['😅', '尴尬', 'Awkward', 'tear'], ['🥲', '感动', 'Touched', 'tear'], ['😔', '失落', 'Sad', 'float'], ['😡', '生气', 'Angry', 'puff'], ['🤬', '爆炸', 'Furious', 'puff'],
  ['😱', '吓到', 'Shocked', 'pop'], ['🤗', '抱抱', 'Hug', 'heart'], ['🤝', '握手', 'Handshake', 'thumb'], ['🙌', '欢呼', 'Cheers', 'party'], ['🙆', '没问题', 'All good', 'wave'],
  ['👌', '可以', 'OK', 'thumb'], ['✌️', '胜利', 'Victory', 'wave'], ['🤞', '好运', 'Good luck', 'wave'], ['👀', '围观', 'Watching', 'think'], ['🫡', '收到', 'Salute', 'bow'],
  ['🫶', '比心', 'Love hands', 'heart'], ['💯', '满分', 'Perfect', 'pop'], ['🚀', '起飞', 'Rocket', 'float'], ['🎈', '气球', 'Balloon', 'float'], ['🎁', '礼物', 'Gift', 'party'],
  ['☕', '咖啡', 'Coffee', 'sway'], ['🍰', '蛋糕', 'Cake', 'party'], ['🍜', '吃面', 'Noodles', 'sway'], ['🧋', '奶茶', 'Milk tea', 'float'], ['🎵', '音乐', 'Music', 'sway'],
  ['🌈', '彩虹', 'Rainbow', 'sparkle'], ['⭐', '星星', 'Star', 'sparkle'], ['🌙', '晚安', 'Good night', 'float'], ['☀️', '晴天', 'Sunny', 'bounce'], ['🐱', '猫猫', 'Cat', 'wave']
].map(([emoji, zh, en, motion]) => ({emoji, zh, en, motion}));
let chatEmojiPickerOpen = false;

function syncHeaderPageEntryState() {
  headerPageEntryDefinitions.forEach(([pageClass, selector]) => {
    const button = $(selector);
    if (!button) return;
    const active = document.body.classList.contains(pageClass);
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
}

function normaliseHeaderEntries(value) {
  const source = value && typeof value === 'object' ? value : {};
  return Object.fromEntries(headerEntryDefinitions.map(([key]) => [key, Object.prototype.hasOwnProperty.call(source, key) ? Boolean(source[key]) : true]));
}

const state = {
  todos: [],
  settings: { alwaysOnTop: true, compactMode: false, showCompactTodos: false, compactOpacity: 100, compactWidth: 520, compactHeight: 350, workStart: '09:00', workEnd: '18:00', workdays: [1, 2, 3, 4, 5], monthlySalary: 0, salaryWorkdays: 21.75, currency: '¥', weatherCity: '上海', language: 'system', theme: 'system', englishMode: 'study', englishSource: 'nce2', headerEntries: normaliseHeaderEntries() },
  appInfo: {name: 'Workday Island', version: '0.16.4', author: 'Backlight Studio', email: 'asbacklight@gmail.com'},
  focus: {active: false, durationMinutes: 50, startedAt: null, endsAt: null, completedAt: null},
  weather: null,
  filter: 'pending',
  windowFullscreen: false,
  accountOpen: false,
  accountMode: 'login',
  account: {loggedIn: false, user: null},
  notificationOpen: false,
  notifications: {items: [], total: 0, page: 1, pageSize: 15, type: '', readStatus: '', unread: 0, busy: false},
  notesOpen: false,
  notes: {
    nodes: [], selectedId: '', filter: 'all', query: '', expanded: new Set(),
    menuTargetId: '', movingId: '', saving: false, saveQueued: false, loaded: false, creating: false, unlocked: new Set(), fullscreen: false,
    selectionRevision: 0, deleteTargetId: '', deletePermanent: false, passwordMode: 'set',
    createParentId: '', markdownView: 'edit', workbook: null, selectedCell: 'A1'
  },
  shareManagementOpen: false,
  noteShares: {
    items: [], total: 0, page: 1, pageSize: 20, keyword: '', lifecycle: '',
    quota: {}, busy: false, editing: null, result: null
  },
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
  accountTrial: {items: [], loading: false, acceptingID: 0, requestID: 0},
  chatOpen: false,
  chatSection: 'conversation',
  chatUnread: 0,
  latestIncomingPeer: 0,
  stockOpen: false,
  stockCompact: false,
  stocks: {quotes: [], updatedAt: null, source: '东方财富', stale: false, error: ''},
  fishingOpen: false,
  fishing: {tab:'fishing', phase: 'idle', fish: null, progress: 0, tension: 0, streak: 0, marker: 0, targetStart: 40, targetWidth: 20, startedAt: 0, deadline: 0, journal: loadFishingJournal(), slack:{phase:'idle', selectedCatch:0, progress:0, exposure:0, marker:0, targetStart:42, targetWidth:22, startedAt:0, deadline:0, streak:0}},
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
let fullscreenSyncTimer = 0;
let availableUpdate = null;
let englishRecordWrites = Promise.resolve();
let updateCheckResult = null;
let remoteEffectTimer = 0;
let realtimeBusy = false;
let accountBusy = false;
let accountProfileRefreshBusy = false;
let lastAccountProfileRefreshAt = 0;
let realtimeRegistrationBusy = false;
let fishingWaitTimer = 0;
let fishingAnimationFrame = 0;
let fishingFxTimer = 0;
let slackingAnimationFrame = 0;
const receivedRealtimePushIDs = new Set();
let stockBusy = false;
let stockRefreshTimer = 0;
let englishFitTimer = 0;
let aiSearchTimer = 0;
let aiRenderFrame = 0;
let noteSaveTimer = 0;
let noteSavePromise = Promise.resolve();
const pendingNoteSaves = new Map();
let appDialogResolve = null;
let appDialogMode = 'confirm';
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
  $$('[data-i18n-label]').forEach(element => { element.label = t(element.dataset.i18nLabel); });
  $('#open-settings').setAttribute('aria-label', t('settings'));
  $('#open-settings').title = t('settings');
  $('#open-about').setAttribute('aria-label', t('about'));
  $('#open-about').title = t('about');
  $('#open-feedback').setAttribute('aria-label', t('feedback'));
  $('#open-feedback').title = t('feedback');
  renderFullscreenControl();
  $('#open-chat').setAttribute('aria-label', t('chat'));
  $('#open-chat').title = t('chat');
  $('#open-stocks').setAttribute('aria-label', t('stockMarket'));
  $('#open-stocks').title = t('stockMarket');
  $('#open-fishing').setAttribute('aria-label', t('fishing'));
  $('#open-fishing').title = t('fishing');
  $('#open-cloud').setAttribute('aria-label', t('workCloud'));
  $('#open-cloud').title = t('workCloud');
  $('#open-notes').setAttribute('aria-label', currentLanguage() === 'zh' ? '云笔记' : 'Cloud Notes');
  $('#open-notes').title = currentLanguage() === 'zh' ? '云笔记' : 'Cloud Notes';
  $('#open-share-management').setAttribute('aria-label', currentLanguage() === 'zh' ? '分享管理' : 'Share Management');
  $('#open-share-management').title = currentLanguage() === 'zh' ? '分享管理' : 'Share Management';
  $('#open-translator').setAttribute('aria-label', t('universalTranslator'));
  $('#open-translator').title = t('universalTranslator');
  $('#open-english').setAttribute('aria-label', t('englishLearning'));
  $('#open-english').title = t('englishLearning');
  $('#open-notifications').setAttribute('aria-label', t('notificationCenter'));
  $('#notification-page').setAttribute('aria-label', t('notificationCenter'));
  $('#close-notifications').setAttribute('aria-label', t('backToDashboard'));
  $('#close-notifications').title = t('backToDashboard');
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
  $('#fishing-page').setAttribute('aria-label', t('fishingTitle'));
  $('#close-fishing').setAttribute('aria-label', t('backToDashboard'));
  $('#close-fishing').title = t('backToDashboard');
  renderStockCompactControl();
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
  renderFishingJournal();
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
    new MutationObserver(syncHeaderPageEntryState).observe(document.body, {attributes: true, attributeFilter: ['class']});
    syncHeaderPageEntryState();
    applyTranslations();
    renderAll();
    void refreshNotificationUnread();
    void syncWindowFullscreen();
    setInterval(updateClock, 1000);
    refreshWeather();
    setInterval(refreshWeather, 20 * 60 * 1000);
    checkActiveReminder();
    setInterval(checkActiveReminder, 700);
    setInterval(() => void refreshAccountProfile(), 30000);
    setInterval(() => void refreshNotificationUnread(), 45000);
    window.addEventListener('focus', () => void refreshAccountProfile());
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') void refreshAccountProfile();
    });
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
  $('#open-feedback').addEventListener('click', openFeedbackModal);
  $('#feedback-form').addEventListener('submit', submitPublicFeedback);
  $('#feedback-content').addEventListener('input', updateFeedbackCounter);
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
  $('#open-notes').addEventListener('click', openNotesPage);
  $('#open-share-management').addEventListener('click', openShareManagementPage);
  $('#close-share-management').addEventListener('click', closeShareManagementPage);
  $('#share-management-open-login').addEventListener('click', () => {
    closeShareManagementPage();
    openAccountPage('login');
  });
  $('#refresh-note-shares').addEventListener('click', () => loadNoteShares());
  $('#share-management-search').addEventListener('keydown', event => {
    if (event.key !== 'Enter') return;
    state.noteShares.keyword = event.target.value.trim();
    state.noteShares.page = 1;
    loadNoteShares();
  });
  $('#share-management-lifecycle').addEventListener('change', event => {
    state.noteShares.lifecycle = event.target.value;
    state.noteShares.page = 1;
    loadNoteShares();
  });
  $('#share-management-prev').addEventListener('click', () => {
    if (state.noteShares.page > 1) {
      state.noteShares.page -= 1;
      loadNoteShares();
    }
  });
  $('#share-management-next').addEventListener('click', () => {
    const pages = Math.max(1, Math.ceil(state.noteShares.total / state.noteShares.pageSize));
    if (state.noteShares.page < pages) {
      state.noteShares.page += 1;
      loadNoteShares();
    }
  });
  $('#share-management-list').addEventListener('click', handleNoteShareListAction);
  $('#close-note-share-dialog').addEventListener('click', closeNoteShareDialog);
  $('#cancel-note-share').addEventListener('click', closeNoteShareDialog);
  $('#finish-note-share').addEventListener('click', closeNoteShareDialog);
  $('#note-share-dialog').addEventListener('mousedown', event => {
    if (event.target === $('#note-share-dialog')) closeNoteShareDialog();
  });
  $('#note-share-encrypted').addEventListener('change', updateNoteShareFormVisibility);
  $('#note-share-valid-type').addEventListener('change', updateNoteShareFormVisibility);
  $('#note-share-form').addEventListener('submit', submitNoteShareForm);
  $('#copy-note-share-link').addEventListener('click', copyCurrentNoteShareLink);
  $('#open-note-share-link').addEventListener('click', openCurrentNoteShareLink);
  $('#close-notes').addEventListener('click', closeNotesPage);
  $('#notes-open-login').addEventListener('click', () => {
    closeNotesPage();
    openAccountPage('login');
  });
  $('#notes-search-input').addEventListener('input', event => {
    state.notes.query = event.target.value;
    renderNotesTree();
  });
  $('#notes-smart-nav').addEventListener('click', changeNotesFilter);
  $('#create-note').addEventListener('click', () => openNoteCreateMenu());
  $('#create-note-folder').addEventListener('click', () => createNoteNode('folder'));
  $('#notes-empty-create').addEventListener('click', () => openNoteCreateMenu());
  $('#notes-folder-new-note').addEventListener('click', () => openNoteCreateMenu(state.notes.selectedId));
  $('#notes-folder-new-folder').addEventListener('click', () => createNoteNode('folder', state.notes.selectedId));
  $('#note-create-menu').addEventListener('click', event => {
    const button = event.target.closest('[data-note-create-type]');
    if (!button) {
      if (event.target === $('#note-create-menu')) closeNoteCreateMenu();
      return;
    }
    const parentId = state.notes.createParentId;
    closeNoteCreateMenu();
    createNoteNode('note', parentId, button.dataset.noteCreateType);
  });
  $('#close-note-create-menu').addEventListener('click', closeNoteCreateMenu);
  $('#refresh-notes').addEventListener('click', () => loadNotes(true));
  $('#notes-tree').addEventListener('click', handleNotesTreeClick);
  $('#notes-tree').addEventListener('dblclick', handleNotesTreeDoubleClick);
  $('#note-title-input').addEventListener('input', scheduleNoteSave);
  $('#note-content-editor').addEventListener('input', scheduleNoteSave);
  $('#note-markdown-input').addEventListener('input', () => {
    if (state.notes.markdownView === 'preview') renderMarkdownPreview();
    scheduleNoteSave();
  });
  $('.note-markdown-tabs').addEventListener('click', changeMarkdownView);
  $('#note-sheet-grid').addEventListener('focusin', selectSpreadsheetCell);
  $('#note-sheet-grid').addEventListener('input', editSpreadsheetCell);
  $('#note-sheet-formula').addEventListener('input', editSpreadsheetFormula);
  $('#note-sheet-add-row').addEventListener('click', () => resizeSpreadsheet('row'));
  $('#note-sheet-add-column').addEventListener('click', () => resizeSpreadsheet('column'));
  $('#note-sheet-tabs').addEventListener('click', changeSpreadsheetSheet);
  $('#note-format-toolbar').addEventListener('mousedown', event => event.preventDefault());
  $('#note-format-toolbar').addEventListener('click', applyNoteFormat);
  $('#note-pin').addEventListener('click', () => toggleCurrentNoteFlag('pinned'));
  $('#note-favorite').addEventListener('click', () => toggleCurrentNoteFlag('favorite'));
  $('#note-share').addEventListener('click', shareCurrentNote);
  $('#note-ai').addEventListener('click', sendCurrentNoteToAI);
  $('#note-fullscreen').addEventListener('click', toggleNoteFullscreen);
  $('#note-more').addEventListener('click', toggleNoteMoreMenu);
  $('#note-more-menu').addEventListener('click', handleNoteMoreAction);
  $('#note-context-menu').addEventListener('click', handleNoteContextAction);
  $('#unlock-note').addEventListener('click', unlockCurrentNote);
  $('#confirm-note-move').addEventListener('click', confirmNoteMove);
  $('#note-password-form').addEventListener('submit', submitNotePassword);
  $('#remove-note-password').addEventListener('click', removeCurrentNotePassword);
  $('#confirm-note-delete').addEventListener('click', confirmNoteDelete);
  $('#note-history-list').addEventListener('click', restoreNoteHistoryVersion);
  $$('[data-close-note-dialog]').forEach(button => button.addEventListener('click', () => closeNoteDialog(button.dataset.closeNoteDialog)));
  $$('.note-dialog-mask').forEach(mask => mask.addEventListener('mousedown', event => {
    if (event.target === mask) closeNoteDialog(mask.id);
  }));
  $('#open-account').addEventListener('click', () => openAccountPage('login'));
  $('#open-notifications').addEventListener('click', openNotificationPage);
  $('#close-notifications').addEventListener('click', closeNotificationPage);
  $('#notification-open-login').addEventListener('click', () => { closeNotificationPage(); openAccountPage('login'); });
  $('#notification-refresh').addEventListener('click', loadUserNotices);
  $('#notification-read-all').addEventListener('click', markAllNotificationsRead);
  $('#notification-type-filter').addEventListener('change', event => {
    state.notifications.type = event.target.value;
    state.notifications.page = 1;
    loadUserNotices();
  });
  $('#notification-status-filter').addEventListener('change', event => {
    state.notifications.readStatus = event.target.value;
    state.notifications.page = 1;
    loadUserNotices();
  });
  $('#notification-list').addEventListener('click', handleNotificationAction);
  $('#notification-prev').addEventListener('click', () => changeNotificationPage(-1));
  $('#notification-next').addEventListener('click', () => changeNotificationPage(1));
  $('#close-account').addEventListener('click', closeAccountPage);
  $('#account-service-grid').addEventListener('click', openAccountService);
  $('#account-trial-invitations').addEventListener('click', handleAccountTrialAction);
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
  $('#app-dialog-form').addEventListener('submit', submitAppDialog);
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
  $('#compact-stocks').addEventListener('click', toggleStockCompactMode);
  $('#minimize-stocks').addEventListener('click', minimiseWindow);
  $('#refresh-stocks').addEventListener('click', refreshStocks);
  $('#stock-add-form').addEventListener('submit', addStock);
  $('#stock-list').addEventListener('click', removeStock);
  $('#open-fishing').addEventListener('click', openFishingPage);
  $('#close-fishing').addEventListener('click', closeFishingPage);
  $('#fishing-action').addEventListener('click', handleFishingAction);
  $('#clear-fishing-log').addEventListener('click', clearFishingJournal);
  $('#fishing-rod-select').addEventListener('change', equipFishingRod);
  $('#fishing-tabs').addEventListener('click', changeFishingTab);
  $('#slacking-fish-select').addEventListener('change', changeSlackingCompanion);
  $('#slacking-action').addEventListener('click', handleSlackingAction);
  $('.top-actions').addEventListener('click', event => {
    if (state.fishingOpen && !event.target.closest('#open-fishing')) closeFishingPage();
  }, true);
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
  initialiseChatEmojiPicker();
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
  $('#fullscreen-window').addEventListener('click', toggleWindowFullscreen);
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
  document.addEventListener('click', event => {
    if (!event.target.closest('#note-context-menu') && !event.target.closest('.note-tree-more')) closeNoteContextMenu();
    if (!event.target.closest('#note-more-menu') && !event.target.closest('#note-more')) closeNoteMoreMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const openModals = $$('.modal-backdrop:not(.hidden)');
      if (openModals.length) {
        openModals.forEach(modal => closeModal(modal.id));
        return;
      }
      if (!$('#note-share-dialog').classList.contains('hidden')) {
        closeNoteShareDialog();
        return;
      }
    }
    if (event.key === 'Escape' && state.accountOpen) { closeAccountPage(); return; }
    if (event.key === 'Escape' && state.notificationOpen) { closeNotificationPage(); return; }
    if (event.key === 'Escape' && state.shareManagementOpen) { closeShareManagementPage(); return; }
    if (event.key === 'Escape' && state.notes.fullscreen) { toggleNoteFullscreen(); return; }
    if (event.key === 'Escape' && state.windowFullscreen) { event.preventDefault(); void setWindowFullscreen(false); return; }
    if (event.key === 'Escape' && state.notesOpen) { closeNotesPage(); return; }
    if (event.key === 'Escape' && state.aiChat.settingsOpen) { closeAISettings(); return; }
    if (event.key === 'Escape' && state.aiChatOpen) { closeAIChatPage(); return; }
    if (event.key === 'Escape' && state.cloudOpen) { closeCloudPage(); return; }
    if (event.key === 'Escape' && state.translatorOpen) { closeTranslatorPage(); return; }
    if (event.key === 'Escape' && state.fishingOpen) { closeFishingPage(); return; }
    if (event.key === 'Escape' && state.stockOpen) { closeStockPage(); return; }
    if (event.key === 'Escape' && state.englishOpen) { closeEnglishCompactPage(true); return; }
    if (event.key === 'Escape' && state.englishCenterOpen) { closeEnglishCenterPage(); return; }
    if (state.englishOpen && ['quiz', 'chinese'].includes(state.english.mode) && /^[1-4]$/.test(event.key)) {
      $('#english-options').querySelector(`[data-option-index="${Number(event.key) - 1}"]`)?.click();
    }
    if (state.fishingOpen && event.code === 'Space' && !event.repeat && !event.target.closest('input, textarea, select, button')) {
      event.preventDefault();
      if (state.fishing.tab === 'slacking') handleSlackingAction(); else handleFishingAction();
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
  window.clearTimeout(fullscreenSyncTimer);
  fullscreenSyncTimer = window.setTimeout(() => { void syncWindowFullscreen(); }, 650);
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

function renderFullscreenControl() {
  const button = $('#fullscreen-window');
  if (!button) return;
  const label = t(state.windowFullscreen ? 'exitFullscreen' : 'fullscreen');
  button.classList.toggle('active', state.windowFullscreen);
  button.setAttribute('aria-label', label);
  button.title = label;
  document.body.classList.toggle('window-fullscreen', state.windowFullscreen);
}

async function syncWindowFullscreen() {
  if (!hasNativeAPI || !api.IsWindowFullscreen) return;
  try {
    state.windowFullscreen = Boolean(await api.IsWindowFullscreen());
    renderFullscreenControl();
  } catch (_) { /* Keep the optimistic state if the platform cannot report it. */ }
}

async function setWindowFullscreen(fullscreen) {
  if (state.settings.compactMode) return;
  state.windowFullscreen = Boolean(fullscreen);
  renderFullscreenControl();
  try {
    if (api.SetWindowFullscreen) await api.SetWindowFullscreen(state.windowFullscreen);
    else if (state.windowFullscreen) window.runtime?.WindowFullscreen?.();
    else window.runtime?.WindowUnfullscreen?.();
    window.clearTimeout(fullscreenSyncTimer);
    fullscreenSyncTimer = window.setTimeout(() => { void syncWindowFullscreen(); }, 1000);
  } catch (error) {
    state.windowFullscreen = !state.windowFullscreen;
    renderFullscreenControl();
    showToast(readError(error), true);
  }
}

function toggleWindowFullscreen() {
  return setWindowFullscreen(!state.windowFullscreen);
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
  if (state.fishingOpen) closeFishingPage();
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
  applyHeaderEntryVisibility();
  applyEnglishBackgroundOpacity();
  applyCompactUI();
  renderTodos();
  renderCompactTodos();
  renderSummary();
  renderAccountSession();
  renderNotificationSession();
  renderNotificationBadge();
  renderAIChat();
  if (state.notesOpen) renderNotes();
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

async function openNotesPage() {
  if (state.notificationOpen) closeNotificationPage();
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.stockOpen) await closeStockPage();
  if (state.englishOpen || state.englishCenterOpen) await closeEnglishPage();
  state.notesOpen = true;
  document.body.classList.add('notes-open');
  $('#notes-page').classList.remove('hidden');
  $('#open-notes').classList.add('active');
  if (!state.account.loggedIn) {
    renderNotesSession();
    return;
  }
  // Returning from another page must keep the live editor exactly as it was.
  // The list endpoint contains summaries, so reloading it here would replace a
  // complete note body with a shortened excerpt.
  if (!state.notes.loaded) await loadNotes();
}

async function openShareManagementPage() {
  if (state.notificationOpen) closeNotificationPage();
  if (state.notesOpen) closeNotesPage();
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.stockOpen) await closeStockPage();
  if (state.englishOpen || state.englishCenterOpen) await closeEnglishPage();
  state.shareManagementOpen = true;
  document.body.classList.add('share-management-open');
  $('#share-management-page').classList.remove('hidden');
  $('#open-share-management').classList.add('active');
  renderNoteShareSession();
  if (state.account.loggedIn) await loadNoteShares();
}

function closeShareManagementPage() {
  state.shareManagementOpen = false;
  document.body.classList.remove('share-management-open');
  $('#share-management-page').classList.add('hidden');
  $('#open-share-management').classList.remove('active');
  closeNoteShareDialog();
}

function renderNoteShareSession() {
  const loggedIn = Boolean(state.account.loggedIn);
  $('#share-management-login-required').classList.toggle('hidden', loggedIn);
  $('#share-management-content').classList.toggle('hidden', !loggedIn);
  const chip = $('#share-management-account-chip');
  chip.classList.toggle('online', loggedIn);
  chip.querySelector('b').textContent = loggedIn ? (accountDisplayName() || '已登录') : '未登录';
  if (!loggedIn) {
    state.noteShares.items = [];
    state.noteShares.total = 0;
    renderNoteShares();
  }
}

async function loadNoteShares() {
  if (!state.account.loggedIn || state.noteShares.busy) return;
  state.noteShares.busy = true;
  $('#share-management-list').innerHTML = '<div class="share-management-empty">正在从云端加载分享记录…</div>';
  try {
    const page = await api.ListNoteShares(state.noteShares.page, state.noteShares.pageSize, state.noteShares.keyword, state.noteShares.lifecycle);
    let quota = state.noteShares.quota || {};
    try {
      quota = await api.GetNoteShareQuota();
    } catch {
      // Quota is informational. A legacy or temporarily unavailable quota
      // endpoint must not prevent users from managing their cloud shares.
      quota = {unlimited_daily:true,unlimited_total:true,source_name:'额度暂不可用'};
    }
    state.noteShares.items = page?.list || [];
    state.noteShares.total = Number(page?.total || 0);
    state.noteShares.page = Number(page?.page || state.noteShares.page);
    state.noteShares.pageSize = Number(page?.pageSize || state.noteShares.pageSize);
    state.noteShares.quota = quota || {};
    renderNoteShares();
  } catch (error) {
    $('#share-management-list').innerHTML = `<div class="share-management-empty">${escapeHTML(readError(error))}</div>`;
    showToast(readError(error), true);
  } finally {
    state.noteShares.busy = false;
  }
}

const noteShareLifecycleLabels = {
  active: '生效中', draft: '已停用', pending: '待生效', expired: '已过期',
  revoked: '已撤销', source_deleted: '源笔记已删除'
};

function renderNoteShares() {
  const items = state.noteShares.items || [];
  const active = items.filter(item => item.lifecycle_state === 'active').length;
  const views = items.reduce((sum, item) => sum + (Number(item.view_count) || 0), 0);
  const quota = state.noteShares.quota || {};
  $('#share-total-count').textContent = String(state.noteShares.total || 0);
  $('#share-active-count').textContent = String(active);
  $('#share-view-count').textContent = views.toLocaleString(locale());
  $('#share-daily-quota').textContent = `${Number(quota.daily_used || 0)} / ${quota.unlimited_daily ? '不限' : Number(quota.daily_share_limit || 0)}`;
  $('#share-quota-source').textContent = quota.source_name || '系统默认';
  $('#share-management-total').textContent = `共 ${state.noteShares.total || 0} 条`;
  const pages = Math.max(1, Math.ceil((state.noteShares.total || 0) / state.noteShares.pageSize));
  $('#share-management-page-number').textContent = `${state.noteShares.page} / ${pages}`;
  $('#share-management-prev').disabled = state.noteShares.page <= 1;
  $('#share-management-next').disabled = state.noteShares.page >= pages;
  const list = $('#share-management-list');
  if (!items.length) {
    list.innerHTML = '<div class="share-management-empty">暂无符合条件的云笔记分享</div>';
    return;
  }
  list.innerHTML = items.map(item => {
    const lifecycle = item.lifecycle_state || (item.status ? 'active' : 'draft');
    const validText = item.valid_type && item.valid_end_time
      ? `至 ${formatNoteDate(item.valid_end_time)}`
      : '永久有效';
    const policies = [
      item.content_mode === 'live' ? '实时同步' : '创建快照',
      item.is_encrypted ? '密码访问' : '公开访问',
      item.allow_copy ? '允许复制' : '禁止复制',
      item.allow_comment ? `评论 ${item.comment_count || 0}` : '评论关闭'
    ];
    return `<article class="share-row" data-note-share-id="${Number(item.id)}">
      <div class="share-main"><strong>${escapeHTML(item.title || '未命名分享')}</strong><small>${escapeHTML(item.share_code || '')}</small></div>
      <div class="share-policy">${policies.map(value => `<span>${escapeHTML(value)}</span>`).join('')}</div>
      <div class="share-state"><span class="share-lifecycle ${escapeHTML(lifecycle)}">${escapeHTML(noteShareLifecycleLabels[lifecycle] || lifecycle)}</span><small>${escapeHTML(validText)}</small></div>
      <div class="share-views">${Number(item.view_count || 0)}</div>
      <div class="share-actions">
        <button type="button" data-share-action="open">查看</button>
        <button type="button" data-share-action="copy">复制链接</button>
        <button type="button" data-share-action="edit">修改</button>
        ${lifecycle === 'revoked' ? '<button type="button" data-share-action="regenerate">重生成</button>' : '<button type="button" data-share-action="revoke">撤销</button>'}
        <button type="button" class="danger" data-share-action="delete">删除</button>
      </div>
    </article>`;
  }).join('');
}

function noteShareByID(id) {
  return state.noteShares.items.find(item => Number(item.id) === Number(id));
}

async function handleNoteShareListAction(event) {
  const button = event.target.closest('[data-share-action]');
  const row = event.target.closest('[data-note-share-id]');
  if (!button || !row) return;
  const id = Number(row.dataset.noteShareId);
  const share = noteShareByID(id);
  if (!share) return;
  const action = button.dataset.shareAction;
  try {
    if (action === 'open') return openShareURL(share.public_url);
    if (action === 'copy') {
      await copyShareURL(share.public_url);
      return;
    }
    if (action === 'edit') {
      const detail = await api.GetNoteShare(id);
      openNoteShareEditDialog(detail);
      return;
    }
    if (action === 'revoke') {
      if (!await showAppConfirm(`撤销“${share.title}”的分享链接？撤销后链接会立即失效。`, {title:'撤销分享',danger:true})) return;
      await api.RevokeNoteShare(id);
      showToast('分享已撤销');
    }
    if (action === 'regenerate') {
      if (!await showAppConfirm(`重新生成“${share.title}”的分享链接？旧链接会失效。`, {title:'重新生成链接'})) return;
      const updated = await api.RegenerateNoteShare(id);
      await copyShareURL(updated.public_url);
      showToast('新分享链接已生成并复制');
    }
    if (action === 'delete') {
      if (!await showAppConfirm(`删除“${share.title}”的分享记录？`, {title:'删除分享记录',danger:true})) return;
      await api.DeleteNoteShare(id);
      showToast('分享记录已删除');
    }
    await loadNoteShares();
  } catch (error) {
    showToast(readError(error), true);
  }
}

function openShareURL(url) {
  if (!url) return showToast('分享链接不存在', true);
  if (window.runtime?.BrowserOpenURL) window.runtime.BrowserOpenURL(url);
  else window.open(url, '_blank', 'noopener');
}

async function copyShareURL(url) {
  if (!url) throw new Error('分享链接不存在');
  if (window.runtime?.ClipboardSetText) await window.runtime.ClipboardSetText(url);
  else await navigator.clipboard.writeText(url);
}

function toDatetimeLocal(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function fromDatetimeLocal(value) {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : date.toISOString();
}

function resetNoteShareDialog() {
  state.noteShares.editing = null;
  state.noteShares.result = null;
  $('#note-share-form').reset();
  $('#note-share-id').value = '';
  $('#note-share-note-id').value = '';
  $('#note-share-content-mode').value = 'snapshot';
  $('#note-share-status').value = '1';
  $('#note-share-allow-copy').checked = true;
  $('#note-share-show-source').checked = true;
  $('#note-share-show-creator').checked = true;
  $('#note-share-source').value = 'Workday Island';
  $('#note-share-valid-type').value = '0';
  $('#note-share-form').classList.remove('hidden');
  $('#note-share-result').classList.add('hidden');
  updateNoteShareFormVisibility();
}

function openNoteShareCreateDialog(node) {
  resetNoteShareDialog();
  $('#note-share-dialog-title').textContent = '分享设置';
  $('#note-share-note-id').value = node.id;
  $('#note-share-title').value = node.title || '未命名分享';
  $('#note-share-status').closest('label').classList.add('hidden');
  $('#submit-note-share').textContent = '生成分享链接';
  $('#note-share-dialog').classList.remove('hidden');
}

function openNoteShareEditDialog(share) {
  resetNoteShareDialog();
  state.noteShares.editing = share;
  $('#note-share-dialog-title').textContent = '修改分享';
  $('#note-share-id').value = share.id;
  $('#note-share-title').value = share.title || '';
  $('#note-share-description').value = share.description || '';
  $('#note-share-content-mode').value = share.content_mode || 'snapshot';
  $('#note-share-status').value = String(Number(share.status || 0));
  $('#note-share-status').closest('label').classList.remove('hidden');
  $('#note-share-allow-copy').checked = Boolean(share.allow_copy);
  $('#note-share-allow-comment').checked = Boolean(share.allow_comment);
  $('#note-share-encrypted').checked = Boolean(share.is_encrypted);
  $('#note-share-password').value = '';
  $('#note-share-valid-type').value = String(Number(share.valid_type || 0));
  $('#note-share-valid-start').value = toDatetimeLocal(share.valid_start_time);
  $('#note-share-valid-end').value = toDatetimeLocal(share.valid_end_time);
  $('#note-share-source').value = share.source || 'Workday Island';
  $('#note-share-show-source').checked = Boolean(share.show_source);
  $('#note-share-show-creator').checked = Boolean(share.show_creator);
  $('#submit-note-share').textContent = '保存修改';
  updateNoteShareFormVisibility();
  $('#note-share-dialog').classList.remove('hidden');
}

function updateNoteShareFormVisibility() {
  $('#note-share-password-row').classList.toggle('hidden', !$('#note-share-encrypted').checked);
  $('#note-share-valid-range').classList.toggle('hidden', $('#note-share-valid-type').value !== '1');
}

function closeNoteShareDialog() {
  $('#note-share-dialog')?.classList.add('hidden');
  state.noteShares.editing = null;
  state.noteShares.result = null;
}

async function submitNoteShareForm(event) {
  event.preventDefault();
  const editing = state.noteShares.editing;
  const validType = Number($('#note-share-valid-type').value);
  const input = {
    title: $('#note-share-title').value.trim(),
    description: $('#note-share-description').value.trim(),
    contentMode: $('#note-share-content-mode').value,
    allowCopy: $('#note-share-allow-copy').checked,
    allowEdit: Boolean(editing?.allow_edit),
    allowComment: $('#note-share-allow-comment').checked,
    isEncrypted: $('#note-share-encrypted').checked,
    accessPassword: $('#note-share-password').value,
    status: Number($('#note-share-status').value),
    validType,
    validStartTime: validType === 1 ? fromDatetimeLocal($('#note-share-valid-start').value) : '',
    validEndTime: validType === 1 ? fromDatetimeLocal($('#note-share-valid-end').value) : '',
    source: $('#note-share-source').value.trim() || 'Workday Island',
    showSource: $('#note-share-show-source').checked,
    showCreator: $('#note-share-show-creator').checked
  };
  if (!input.title) return showToast('分享标题不能为空', true);
  if (input.isEncrypted && !editing && !input.accessPassword) return showToast('请设置访问密码', true);
  const button = $('#submit-note-share');
  button.disabled = true;
  try {
    if (editing) {
      await api.UpdateNoteShare(Number(editing.id), input);
      closeNoteShareDialog();
      showToast('分享设置已更新');
      if (state.shareManagementOpen) await loadNoteShares();
      return;
    }
    input.noteId = $('#note-share-note-id').value;
    const created = await api.CreateNoteShare(input);
    state.noteShares.result = created;
    $('#note-share-form').classList.add('hidden');
    $('#note-share-result').classList.remove('hidden');
    $('#note-share-result-link').value = created.public_url || '';
    if (state.shareManagementOpen) await loadNoteShares();
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    button.disabled = false;
  }
}

async function copyCurrentNoteShareLink() {
  try {
    await copyShareURL(state.noteShares.result?.public_url || $('#note-share-result-link').value);
    showToast('分享链接已复制');
  } catch (error) {
    showToast(readError(error), true);
  }
}

function openCurrentNoteShareLink() {
  openShareURL(state.noteShares.result?.public_url || $('#note-share-result-link').value);
}

function closeNotesPage() {
  captureCurrentNoteDraft();
  void flushNoteSave();
  state.notesOpen = false;
  state.notes.fullscreen = false;
  document.body.classList.remove('notes-open');
  $('#notes-page').classList.add('hidden');
  $('#notes-page').classList.remove('note-fullscreen');
  $('#open-notes').classList.remove('active');
  closeNoteContextMenu();
  closeNoteMoreMenu();
  $$('.note-dialog-mask:not(.hidden)').forEach(mask => closeNoteDialog(mask.id));
}

async function loadNotes(saveFirst = false) {
  try {
    if (saveFirst) await flushNoteSave();
    const selectedID = state.notes.selectedId;
    const selectedBeforeLoad = noteNodeById(selectedID);
    const loaded = await api.ListNoteNodes() || [];
    // The account service is the only source of truth. Never merge note bodies
    // from a previous in-memory list (which could belong to another account).
    state.notes.nodes = loaded;
    if (selectedID && selectedBeforeLoad?.kind === 'note' && !selectedBeforeLoad.deletedAt) {
      const target = state.notes.nodes.find(node => String(node.id) === String(selectedID));
      try {
        const fresh = await api.GetNoteNode(selectedID);
        if (target && fresh) Object.assign(target, fresh, {
          id:selectedID,
          kind:'note',
          title:fresh.title || target.title || '无标题笔记',
          content:fresh.content || '',
          savedTitle:fresh.title || target.title || '无标题笔记',
          savedContent:fresh.content || ''
        });
      } catch (error) {
        // A list item may contain only an excerpt. If the detail request fails,
        // retain the complete in-memory draft instead of ever rendering that
        // excerpt over the editor.
        if (target) Object.assign(target, selectedBeforeLoad);
        showToast(readError(error), true);
      }
    }
    const selected = noteNodeById(state.notes.selectedId);
    if (!selected || (state.notes.filter === 'trash') !== Boolean(selected.deletedAt)) {
      state.notes.selectedId = '';
    }
    state.notes.loaded = true;
    renderNotes();
  } catch (error) {
    showToast(readError(error), true);
  }
}

function renderNotes() {
  renderNotesSession();
  if (!state.account.loggedIn) return;
  const active = state.notes.nodes.filter(node => !node.deletedAt);
  $('#notes-all-count').textContent = String(active.filter(node => node.kind === 'note').length);
  $('#notes-favorite-count').textContent = String(active.filter(node => node.favorite).length);
  $('#notes-trash-count').textContent = String(state.notes.nodes.filter(node => node.deletedAt).length);
  $('#notes-total-words').textContent = `${active.filter(node => node.kind === 'note').reduce((sum,node) => sum + (Number(node.wordCount) || notePlainTextFromHTML(node.content || '').length), 0).toLocaleString(locale())} 字`;
  $$('#notes-smart-nav [data-notes-filter]').forEach(button => button.classList.toggle('active', button.dataset.notesFilter === state.notes.filter));
  renderNotesTree();
  renderNotesWorkspace();
}

function renderNotesTree() {
  const tree = $('#notes-tree');
  const query = state.notes.query.trim().toLocaleLowerCase();
  const deletedMode = state.notes.filter === 'trash';
  let candidates = state.notes.nodes.filter(node => deletedMode ? Boolean(node.deletedAt) : !node.deletedAt);
  if (state.notes.filter === 'favorite') candidates = candidates.filter(node => node.favorite);
  if (query) {
    candidates = candidates.filter(node => `${node.title} ${node.kind === 'note' ? notePlainTextFromHTML(node.content || '') : ''}`.toLocaleLowerCase().includes(query));
  }
  if (!candidates.length) {
    tree.innerHTML = `<div class="notes-tree-empty">${query ? '没有匹配的内容' : deletedMode ? '回收站是空的' : state.notes.filter === 'favorite' ? '还没有收藏内容' : '还没有笔记，点击上方按钮开始记录'}</div>`;
    return;
  }
  const allowed = new Set(candidates.map(node => node.id));
  const byParent = new Map();
  candidates.forEach(node => {
    const parent = !query && allowed.has(node.parentId) ? node.parentId : '';
    if (!byParent.has(parent)) byParent.set(parent, []);
    byParent.get(parent).push(node);
  });
  const sortNodes = nodes => nodes.sort((a,b) =>
    Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)) ||
    Number(a.kind !== 'folder') - Number(b.kind !== 'folder') ||
    new Date(b.updatedAt) - new Date(a.updatedAt) ||
    String(a.title).localeCompare(String(b.title), locale())
  );
  const renderBranch = (parentId = '', depth = 0) => sortNodes([...(byParent.get(parentId) || [])]).map(node => {
    const children = byParent.get(node.id) || [];
    const expanded = query || state.notes.expanded.has(node.id);
    const toggle = node.kind === 'folder' && children.length
      ? `<button type="button" class="note-tree-toggle" data-note-toggle="${escapeHTML(node.id)}" aria-label="${expanded ? '折叠文件夹' : '展开文件夹'}" title="${expanded ? '折叠文件夹' : '展开文件夹'}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${expanded ? 'm6 9 6 6 6-6' : 'm9 6 6 6-6 6'}"/></svg></button>`
      : '<span class="note-tree-toggle" aria-hidden="true"></span>';
    const icon = node.kind === 'folder'
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6h6l2 2h9v10.5h-17z"/></svg>'
      : node.locked && !state.notes.unlocked.has(node.id)
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V8a5 5 0 0 1 10 0v2"/><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M12 14v3"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h9l3 3V20H6z"/><path d="M15 3.5V7h3M9 11h6M9 15h6"/></svg>';
    const pinnedBadge = node.pinned ? '<i title="已置顶"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M7.5 9.5 12 5l4.5 4.5"/></svg></i>' : '';
    const favoriteBadge = node.favorite ? '<i title="已收藏"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/></svg></i>' : '';
    const typeName = noteTypeLabel(node.contentType);
    const metadata = node.kind === 'folder'
      ? `${children.length} 项`
      : `${typeName} · ${(Number(node.wordCount) || noteContentLength(node)).toLocaleString(locale())} ${node.contentType === 'spreadsheet' ? '格' : '字'} · ${formatNoteRelativeTime(node.updatedAt)}`;
    return `<div class="note-tree-row ${node.kind} ${node.deletedAt ? 'deleted' : ''} ${state.notes.selectedId === node.id ? 'active' : ''}" data-note-node-id="${escapeHTML(node.id)}" style="--note-depth:${Math.min(depth,8)}">
      ${toggle}
      <span class="note-tree-icon">${icon}</span>
      <div class="note-tree-copy"><strong>${escapeHTML(node.title)}${pinnedBadge}${favoriteBadge}</strong><small>${escapeHTML(metadata)}</small></div>
      <button type="button" class="note-tree-more" data-note-menu="${escapeHTML(node.id)}" aria-label="更多操作" title="更多操作"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg></button>
    </div>${node.kind === 'folder' && expanded ? renderBranch(node.id, depth + 1) : ''}`;
  }).join('');
  tree.innerHTML = renderBranch();
}

function noteTypeLabel(contentType) {
  return contentType === 'markdown' ? 'Markdown' : contentType === 'spreadsheet' ? '表格' : '普通笔记';
}

function normalizeNoteContentType(contentType) {
  return ['richtext','markdown','spreadsheet'].includes(contentType) ? contentType : 'richtext';
}

function spreadsheetColumnLabel(index) {
  let value = Number(index) + 1;
  let label = '';
  while (value > 0) {
    value -= 1;
    label = String.fromCharCode(65 + value % 26) + label;
    value = Math.floor(value / 26);
  }
  return label;
}

function createNoteSheet(name = '工作表1') {
  return {id:`sheet_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,name,rowCount:100,colCount:26,cells:{},rowHeights:{},colWidths:{},merges:[],hiddenRows:[],hiddenCols:[],frozenRows:0,frozenCols:0,gridlines:true};
}

function createNoteWorkbook() {
  const sheet = createNoteSheet();
  return {version:1,activeSheetId:sheet.id,sheets:[sheet]};
}

function parseNoteWorkbook(content) {
  try {
    const workbook = typeof content === 'string' ? JSON.parse(content) : content;
    if (!workbook || !Array.isArray(workbook.sheets) || !workbook.sheets.length) return createNoteWorkbook();
    workbook.sheets = workbook.sheets.map((sheet,index) => ({
      ...createNoteSheet(`工作表${index + 1}`), ...sheet,
      cells:sheet?.cells && typeof sheet.cells === 'object' ? sheet.cells : {},
      rowCount:Math.max(20,Math.min(1000,Number(sheet?.rowCount)||100)),
      colCount:Math.max(10,Math.min(200,Number(sheet?.colCount)||26))
    }));
    if (!workbook.sheets.some(sheet => sheet.id === workbook.activeSheetId)) workbook.activeSheetId = workbook.sheets[0].id;
    return workbook;
  } catch { return createNoteWorkbook(); }
}

function activeNoteSheet() {
  const workbook = state.notes.workbook;
  return workbook?.sheets?.find(sheet => sheet.id === workbook.activeSheetId) || workbook?.sheets?.[0] || null;
}

function noteContentLength(node) {
  const type = normalizeNoteContentType(node?.contentType);
  if (type === 'markdown') return String(node?.content || '').trim().length;
  if (type === 'spreadsheet') {
    const workbook = parseNoteWorkbook(node?.content || '');
    return workbook.sheets.reduce((total,sheet) => total + Object.values(sheet.cells || {}).filter(cell => String(cell?.v ?? '').trim()).length,0);
  }
  return notePlainTextFromHTML(node?.content || '').length;
}

function currentNoteContent(node = currentNoteNode()) {
  const type = normalizeNoteContentType(node?.contentType);
  if (type === 'markdown') return $('#note-markdown-input')?.value || '';
  if (type === 'spreadsheet') return JSON.stringify(state.notes.workbook || createNoteWorkbook());
  return $('#note-content-editor')?.innerHTML || '';
}

function currentNotePlainText(node = currentNoteNode()) {
  const type = normalizeNoteContentType(node?.contentType);
  if (type === 'markdown') return $('#note-markdown-input')?.value || '';
  if (type === 'spreadsheet') {
    return (state.notes.workbook?.sheets || []).flatMap(sheet => Object.entries(sheet.cells || {}).filter(([,cell]) => String(cell?.v ?? '').trim()).map(([address,cell]) => `${sheet.name} ${address}: ${cell.v}`)).join('\n');
  }
  return notePlainTextFromHTML($('#note-content-editor')?.innerHTML || node?.content || '');
}

function renderMarkdownInline(text) {
  return escapeHTML(text)
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g,'<em>$1</em>')
    .replace(/~~([^~]+)~~/g,'<s>$1</s>')
    .replace(/\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function renderNoteMarkdown(source) {
  const lines = String(source || '').replace(/\r/g,'').split('\n');
  let html = '', inCode = false, list = '';
  const closeList = () => { if (list) { html += `</${list}>`; list = ''; } };
  for (const line of lines) {
    if (/^```/.test(line)) { closeList(); html += inCode ? '</code></pre>' : '<pre><code>'; inCode = !inCode; continue; }
    if (inCode) { html += `${escapeHTML(line)}\n`; continue; }
    const heading = /^(#{1,6})\s+(.*)$/.exec(line);
    if (heading) { closeList(); const level=heading[1].length; html += `<h${level}>${renderMarkdownInline(heading[2])}</h${level}>`; continue; }
    const task = /^\s*[-*]\s+\[([ xX])]\s+(.*)$/.exec(line);
    if (task) { if (list !== 'ul') { closeList(); html += '<ul class="task-list">'; list='ul'; } html += `<li><input type="checkbox" disabled ${task[1].toLowerCase()==='x'?'checked':''}>${renderMarkdownInline(task[2])}</li>`; continue; }
    const unordered = /^\s*[-*+]\s+(.*)$/.exec(line);
    if (unordered) { if (list !== 'ul') { closeList(); html += '<ul>'; list='ul'; } html += `<li>${renderMarkdownInline(unordered[1])}</li>`; continue; }
    const ordered = /^\s*\d+[.)]\s+(.*)$/.exec(line);
    if (ordered) { if (list !== 'ol') { closeList(); html += '<ol>'; list='ol'; } html += `<li>${renderMarkdownInline(ordered[1])}</li>`; continue; }
    closeList();
    if (/^>\s?/.test(line)) html += `<blockquote>${renderMarkdownInline(line.replace(/^>\s?/,''))}</blockquote>`;
    else if (/^---+$/.test(line.trim())) html += '<hr>';
    else if (line.trim()) html += `<p>${renderMarkdownInline(line)}</p>`;
    else html += '<br>';
  }
  closeList();
  if (inCode) html += '</code></pre>';
  return html;
}

function renderMarkdownPreview() {
  $('#note-markdown-preview').innerHTML = renderNoteMarkdown($('#note-markdown-input').value);
}

function changeMarkdownView(event) {
  const button = event.target.closest('[data-markdown-view]');
  if (!button) return;
  state.notes.markdownView = button.dataset.markdownView;
  $$('.note-markdown-tabs button').forEach(item => item.classList.toggle('active', item === button));
  const preview = state.notes.markdownView === 'preview';
  $('#note-markdown-input').classList.toggle('hidden', preview);
  $('#note-markdown-preview').classList.toggle('hidden', !preview);
  if (preview) renderMarkdownPreview();
}

function renderSpreadsheetEditor() {
  const sheet = activeNoteSheet();
  if (!sheet) return;
  const rows = Math.min(sheet.rowCount,200);
  const cols = Math.min(sheet.colCount,50);
  let head = '<thead><tr><th class="sheet-corner"></th>';
  for (let col=0; col<cols; col++) head += `<th>${spreadsheetColumnLabel(col)}</th>`;
  head += '</tr></thead><tbody>';
  for (let row=0; row<rows; row++) {
    head += `<tr><th>${row + 1}</th>`;
    for (let col=0; col<cols; col++) {
      const address = `${spreadsheetColumnLabel(col)}${row + 1}`;
      const value = sheet.cells?.[address]?.v ?? '';
      head += `<td><input data-sheet-cell="${address}" value="${escapeHTML(String(value))}" spellcheck="false" aria-label="${address}"></td>`;
    }
    head += '</tr>';
  }
  $('#note-sheet-grid').innerHTML = head + '</tbody>';
  $('#note-sheet-tabs').innerHTML = sheetTabsHTML();
  selectSpreadsheetAddress(state.notes.selectedCell || 'A1', false);
}

function sheetTabsHTML() {
  const workbook = state.notes.workbook;
  return (workbook?.sheets || []).map(sheet => `<button type="button" class="${sheet.id===workbook.activeSheetId?'active':''}" data-sheet-id="${escapeHTML(sheet.id)}">${escapeHTML(sheet.name)}</button>`).join('') + '<button type="button" data-sheet-add title="新建工作表">＋</button>';
}

function selectSpreadsheetAddress(address, focus = true) {
  state.notes.selectedCell = address;
  $$('#note-sheet-grid [data-sheet-cell]').forEach(input => input.parentElement.classList.toggle('selected', input.dataset.sheetCell === address));
  const input = $(`#note-sheet-grid [data-sheet-cell="${address}"]`);
  $('#note-sheet-cell-name').textContent = address;
  $('#note-sheet-formula').value = input?.value || '';
  if (focus) input?.focus();
}

function selectSpreadsheetCell(event) {
  const input = event.target.closest('[data-sheet-cell]');
  if (input) selectSpreadsheetAddress(input.dataset.sheetCell, false);
}

function editSpreadsheetCell(event) {
  const input = event.target.closest('[data-sheet-cell]');
  if (!input) return;
  const sheet = activeNoteSheet();
  const address = input.dataset.sheetCell;
  const value = input.value;
  if (value === '') delete sheet.cells[address];
  else sheet.cells[address] = {...(sheet.cells[address] || {}),v:value};
  $('#note-sheet-formula').value = value;
  scheduleNoteSave();
}

function editSpreadsheetFormula(event) {
  const input = $(`#note-sheet-grid [data-sheet-cell="${state.notes.selectedCell}"]`);
  if (!input) return;
  input.value = event.target.value;
  input.dispatchEvent(new Event('input',{bubbles:true}));
}

function resizeSpreadsheet(axis) {
  const sheet = activeNoteSheet();
  if (!sheet) return;
  if (axis === 'row') sheet.rowCount = Math.min(1000,sheet.rowCount + 10);
  else sheet.colCount = Math.min(200,sheet.colCount + 5);
  renderSpreadsheetEditor();
  scheduleNoteSave();
}

function changeSpreadsheetSheet(event) {
  const add = event.target.closest('[data-sheet-add]');
  const button = event.target.closest('[data-sheet-id]');
  if (!add && !button) return;
  if (add) {
    const sheet = createNoteSheet(`工作表${state.notes.workbook.sheets.length + 1}`);
    state.notes.workbook.sheets.push(sheet);
    state.notes.workbook.activeSheetId = sheet.id;
  } else state.notes.workbook.activeSheetId = button.dataset.sheetId;
  state.notes.selectedCell = 'A1';
  renderSpreadsheetEditor();
  scheduleNoteSave();
}

function renderNotesWorkspace() {
  const loggedIn = Boolean(state.account.loggedIn);
  const workspace = $('.notes-workspace');
  const node = loggedIn ? noteNodeById(state.notes.selectedId) : null;
  const folder = node?.kind === 'folder';
  const locked = node?.kind === 'note' && Boolean(node.locked) && !state.notes.unlocked.has(node.id);
  const view = !loggedIn ? 'login' : !node ? 'empty' : folder ? 'folder' : locked ? 'locked' : 'editor';

  // Switch the entire workspace atomically. CSS view selectors override stale
  // `hidden` classes, so an interrupted or out-of-order render cannot leave
  // every workspace panel hidden.
  workspace.dataset.view = view;
  workspace.setAttribute('aria-busy', 'false');
  if (!loggedIn) {
    return;
  }
  if (folder) {
    const children = state.notes.nodes.filter(item => item.parentId === node.id && !item.deletedAt);
    $('#notes-folder-title').textContent = node.title;
    $('#notes-folder-summary').textContent = `${children.filter(item => item.kind === 'note').length} 篇笔记 · ${children.filter(item => item.kind === 'folder').length} 个子文件夹`;
    return;
  }
  if (!node || locked) return;
  if (node.kind !== 'note') node.kind = 'note';
  node.savedTitle ??= node.title || '无标题笔记';
  node.savedContent ??= node.content || '';
  node.contentType = normalizeNoteContentType(node.contentType);
  $('#note-title-input').value = node.title || '无标题笔记';
  $('#note-content-type-badge').textContent = noteTypeLabel(node.contentType);
  $('#notes-editor').dataset.contentType = node.contentType;
  $('#note-format-toolbar').classList.toggle('hidden', node.contentType !== 'richtext');
  $('#note-content-editor').classList.toggle('hidden', node.contentType !== 'richtext');
  $('#note-markdown-editor').classList.toggle('hidden', node.contentType !== 'markdown');
  $('#note-spreadsheet-editor').classList.toggle('hidden', node.contentType !== 'spreadsheet');
  if (node.contentType === 'richtext') $('#note-content-editor').innerHTML = node.content || '';
  if (node.contentType === 'markdown') {
    $('#note-markdown-input').value = node.content || '';
    state.notes.markdownView = 'edit';
    $$('.note-markdown-tabs button').forEach(button => button.classList.toggle('active', button.dataset.markdownView === 'edit'));
    $('#note-markdown-input').classList.remove('hidden');
    $('#note-markdown-preview').classList.add('hidden');
  }
  if (node.contentType === 'spreadsheet') {
    state.notes.workbook = parseNoteWorkbook(node.content);
    state.notes.selectedCell = 'A1';
    renderSpreadsheetEditor();
  }
  $('#note-save-status').textContent = '已保存';
  $('#note-save-status').classList.remove('saving');
  renderCurrentNoteMeta();
}

function renderNotesSession() {
  const loggedIn = Boolean(state.account.loggedIn);
  $('.notes-sidebar').classList.toggle('notes-locked', !loggedIn);
  $('#notes-login-required').classList.toggle('hidden', loggedIn);
  if (!loggedIn) {
    state.notes.nodes = [];
    state.notes.selectedId = '';
    state.notes.loaded = false;
    $('#notes-tree').innerHTML = '<div class="notes-tree-empty">登录后显示你的笔记</div>';
    $('#notes-all-count').textContent = '0';
    $('#notes-favorite-count').textContent = '0';
    $('#notes-trash-count').textContent = '0';
    $('#notes-total-words').textContent = '0 字';
  }
  renderNotesWorkspace();
}

function renderCurrentNoteMeta() {
  const node = currentNoteNode();
  if (!node) return;
  $('#note-pin').classList.toggle('active', Boolean(node.pinned));
  $('#note-favorite').classList.toggle('active', Boolean(node.favorite));
  $('#note-favorite-label').textContent = node.favorite ? '已收藏' : '收藏';
  $('#note-favorite').setAttribute('aria-label', node.favorite ? '取消收藏笔记' : '收藏笔记');
  $('#note-favorite').title = node.favorite ? '取消收藏笔记' : '收藏笔记';
  $('#note-path').textContent = noteNodePath(node);
  $('#note-updated-time').textContent = `更新于 ${formatNoteDate(node.updatedAt)}`;
  updateCurrentNoteWordCount();
}

function updateCurrentNoteWordCount() {
  const node = currentNoteNode();
  if (!node) return;
  const count = node.contentType === 'spreadsheet'
    ? (state.notes.workbook?.sheets || []).reduce((total,sheet) => total + Object.values(sheet.cells || {}).filter(cell => String(cell?.v ?? '').trim()).length,0)
    : currentNotePlainText(node).length;
  $('#note-word-count').textContent = `${count.toLocaleString(locale())} ${node.contentType === 'spreadsheet' ? '个非空单元格' : '字'}`;
}

function changeNotesFilter(event) {
  const button = event.target.closest('[data-notes-filter]');
  if (!button) return;
  state.notes.filter = button.dataset.notesFilter;
  state.notes.selectedId = '';
  renderNotes();
}

async function handleNotesTreeClick(event) {
  const toggle = event.target.closest('[data-note-toggle]');
  if (toggle) {
    event.stopPropagation();
    const id = toggle.dataset.noteToggle;
    if (state.notes.expanded.has(id)) state.notes.expanded.delete(id);
    else state.notes.expanded.add(id);
    renderNotesTree();
    return;
  }
  const menu = event.target.closest('[data-note-menu]');
  if (menu) {
    event.stopPropagation();
    openNoteContextMenu(menu.dataset.noteMenu, menu);
    return;
  }
  const row = event.target.closest('[data-note-node-id]');
  if (row) await selectNoteNode(row.dataset.noteNodeId);
}

function handleNotesTreeDoubleClick(event) {
  const row = event.target.closest('[data-note-node-id]');
  if (row && !event.target.closest('button')) renameNoteNode(row.dataset.noteNodeId);
}

async function selectNoteNode(id) {
  const node = noteNodeById(id);
  if (!node) return;
  const selectionRevision = ++state.notes.selectionRevision;
  if (id !== state.notes.selectedId) void flushNoteSave();
  state.notes.selectedId = id;
  if (node?.kind === 'folder') state.notes.expanded.add(id);
  renderNotesTree();
  renderNotesWorkspace();
  if (node.kind !== 'note' || node.deletedAt) return;
  try {
    // Fetch the detail on every open so the editor always reflects the newest
    // cloud revision and never relies on a locally retained body.
    const fresh = await api.GetNoteNode(id);
    if (selectionRevision !== state.notes.selectionRevision || state.notes.selectedId !== id) return;
    if (!fresh || String(fresh.id) !== String(id)) {
      throw new Error('云笔记详情与当前选择不匹配，请重新打开笔记');
    }
    const target = noteNodeById(id);
    if (!target) return;
    Object.assign(target, fresh, {
      id,
      kind: 'note',
      title: fresh.title || target.title || '无标题笔记',
      content: fresh.content || '',
      savedTitle: fresh.title || target.title || '无标题笔记',
      savedContent: fresh.content || ''
    });
    if (!fresh.locked) state.notes.unlocked.add(id);
    else state.notes.unlocked.delete(id);
    renderNotesTree();
    if (selectionRevision === state.notes.selectionRevision && state.notes.selectedId === id) {
      renderNotesWorkspace();
      if (!fresh.locked) window.requestAnimationFrame(() => $('#note-title-input')?.focus());
    }
  } catch (error) {
    if (selectionRevision !== state.notes.selectionRevision || state.notes.selectedId !== id) return;
    if (node.locked) {
      state.notes.unlocked.delete(id);
      renderNotesWorkspace();
    }
    showToast(readError(error), true);
  }
}

function openNoteCreateMenu(requestedParentId = '') {
  if (!state.account.loggedIn || state.notes.creating) return;
  let parentId = requestedParentId;
  const selected = noteNodeById(state.notes.selectedId);
  if (!parentId && selected) parentId = selected.kind === 'folder' ? selected.id : selected.parentId;
  state.notes.createParentId = state.notes.filter === 'trash' ? '' : (parentId || '');
  $('#note-create-menu').classList.remove('hidden');
  window.requestAnimationFrame(() => $('#note-create-menu [data-note-create-type="richtext"]')?.focus());
}

function closeNoteCreateMenu() {
  $('#note-create-menu').classList.add('hidden');
}

async function createNoteNode(kind, requestedParentId = '', requestedContentType = 'richtext') {
  if (state.notes.creating) return;
  await flushNoteSave();
  let parentId = requestedParentId;
  const selected = noteNodeById(state.notes.selectedId);
  if (!parentId && selected) parentId = selected.kind === 'folder' ? selected.id : selected.parentId;
  if (state.notes.filter === 'trash') parentId = '';
  const contentType = kind === 'note' ? normalizeNoteContentType(requestedContentType) : '';
  const title = kind === 'folder'
    ? await showAppPrompt('文件夹名称', '新建文件夹', {title:'新建文件夹',label:'文件夹名称'})
    : contentType === 'markdown' ? '无标题Markdown' : contentType === 'spreadsheet' ? '无标题表格' : '无标题笔记';
  if (title === null) return;
  const content = contentType === 'spreadsheet' ? JSON.stringify(createNoteWorkbook()) : '';
  state.notes.creating = true;
  const createButtons = ['#create-note','#create-note-folder','#notes-empty-create','#notes-folder-new-note','#notes-folder-new-folder']
    .map(selector => $(selector))
    .filter(Boolean);
  createButtons.forEach(button => { button.disabled = true; });
  try {
    const created = await api.CreateNoteNode({kind,parentId:parentId || '',title,content,contentType});
    if (!created?.id) throw new Error('云端创建成功，但未返回笔记标识，请刷新后重试');
    Object.assign(created, {
      kind: created.kind || kind,
      parentId: created.parentId ?? parentId ?? '',
      title: created.title || title,
      content: created.content || content,
      contentType: kind === 'note' ? normalizeNoteContentType(created.contentType || contentType) : '',
      locked: kind === 'note' ? false : Boolean(created.locked),
      savedTitle: created.title || title,
      savedContent: created.content || ''
    });
    let authoritativeNodes = null;
    try {
      authoritativeNodes = await api.ListNoteNodes();
    } catch {}
    if (Array.isArray(authoritativeNodes) && authoritativeNodes.some(node => node.id === created.id)) {
      state.notes.nodes = authoritativeNodes;
    } else {
      state.notes.nodes = state.notes.nodes.filter(node => node.id !== created.id);
      state.notes.nodes.push(created);
    }
    if (parentId) state.notes.expanded.add(parentId);
    state.notes.filter = 'all';
    state.notes.query = '';
    $('#notes-search-input').value = '';
    state.notes.selectedId = created.id;
    state.notes.selectionRevision += 1;
    if (kind === 'note') state.notes.unlocked.add(created.id);
    renderNotes();
    if (kind === 'note') {
      // Render immediately, then replace the list summary with the
      // authoritative cloud detail. The atomic workspace view keeps the
      // editor visible throughout both phases.
      await selectNoteNode(created.id);
      window.requestAnimationFrame(() => {
        $('#note-title-input')?.focus();
        $('#note-title-input')?.select();
      });
    }
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    state.notes.creating = false;
    createButtons.forEach(button => { button.disabled = false; });
  }
}

function captureCurrentNoteDraft() {
  const node = currentNoteNode();
  if (!node || node.deletedAt || node.locked && !state.notes.unlocked.has(node.id)) return null;
  node.title = $('#note-title-input').value || '无标题笔记';
  node.content = currentNoteContent(node);
  node.updatedAt = new Date().toISOString();
  return node;
}

function scheduleNoteSave() {
  const node = captureCurrentNoteDraft();
  if (!node) return;
  node.localEditRevision = (Number(node.localEditRevision) || 0) + 1;
  $('#note-save-status').textContent = '待保存';
  $('#note-save-status').classList.add('saving');
  updateCurrentNoteWordCount();
  window.clearTimeout(noteSaveTimer);
  noteSaveTimer = window.setTimeout(flushNoteSave, 650);
}

async function flushNoteSave() {
  window.clearTimeout(noteSaveTimer);
  noteSaveTimer = 0;
  const node = captureCurrentNoteDraft();
  if (!node) return noteSavePromise;
  const title = String(node.title || '无标题笔记').trim() || '无标题笔记';
  const content = String(node.content || '');
  if (title === node.savedTitle && content === node.savedContent) return;
  pendingNoteSaves.set(node.id, {
    id:node.id,
    title,
    content,
    contentType:node.contentType || 'richtext',
    revision:node.revision || 0,
    localEditRevision:Number(node.localEditRevision) || 0
  });
  if (state.notes.selectedId === node.id) {
    $('#note-save-status').textContent = '保存中…';
    $('#note-save-status').classList.add('saving');
  }
  if (!state.notes.saving) noteSavePromise = processPendingNoteSaves();
  return noteSavePromise;
}

async function processPendingNoteSaves() {
  state.notes.saving = true;
  try {
    while (pendingNoteSaves.size) {
      const [id, snapshot] = pendingNoteSaves.entries().next().value;
      pendingNoteSaves.delete(id);
      const node = noteNodeById(id);
      if (!node || node.deletedAt) continue;
      try {
        const updated = await api.UpdateNote(id, {
          title:snapshot.title,
          content:snapshot.content,
          contentType:snapshot.contentType,
          revision:snapshot.revision
        });
        const liveTitle = node.title;
        const liveContent = node.content;
        const liveEditRevision = Number(node.localEditRevision) || 0;
        Object.assign(node, updated, {
          locked:false,
          savedTitle:snapshot.title,
          savedContent:snapshot.content
        });
        // A newer keystroke may have landed while the network request was in
        // flight. Keep it locally and queue another save instead of replacing
        // it with the older response.
        if (liveEditRevision > snapshot.localEditRevision) {
          Object.assign(node, {title:liveTitle, content:liveContent, localEditRevision:liveEditRevision});
          pendingNoteSaves.set(id, {
            id,
            title:String(liveTitle || '无标题笔记').trim() || '无标题笔记',
            content:String(liveContent || ''),
            contentType:node.contentType || snapshot.contentType,
            revision:node.revision || snapshot.revision,
            localEditRevision:liveEditRevision
          });
        } else {
          Object.assign(node, {title:snapshot.title, content:snapshot.content});
        }
        if (state.notes.selectedId === id && !pendingNoteSaves.has(id)) {
          $('#note-save-status').textContent = '已保存';
          $('#note-save-status').classList.remove('saving');
          renderCurrentNoteMeta();
        }
        renderNotesTree();
      } catch (error) {
        if (state.notes.selectedId === id) {
          $('#note-save-status').textContent = '保存失败';
          $('#note-save-status').classList.remove('saving');
        }
        showToast(readError(error), true);
      }
    }
  } finally {
    state.notes.saving = false;
  }
}

async function applyNoteFormat(event) {
  const button = event.target.closest('button');
  if (!button || !currentNoteNode() || currentNoteNode().contentType !== 'richtext') return;
  $('#note-content-editor').focus();
  if (button.dataset.noteBlock) {
    document.execCommand('formatBlock', false, button.dataset.noteBlock);
  } else if (button.dataset.noteCommand === 'createLink') {
    const selection = window.getSelection();
    const range = selection?.rangeCount ? selection.getRangeAt(0).cloneRange() : null;
    const url = await showAppPrompt('请输入要插入的链接地址。', 'https://', {title:'插入链接',label:'链接地址'});
    if (url) {
      $('#note-content-editor').focus();
      if (range && selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
      document.execCommand('createLink', false, url);
    }
  } else if (button.dataset.noteCommand) {
    document.execCommand(button.dataset.noteCommand, false, button.dataset.noteValue || null);
  }
  scheduleNoteSave();
}

async function toggleCurrentNoteFlag(flag) {
  const node = currentNoteNode();
  if (!node) return;
  try {
    const value = !Boolean(node[flag]);
    const updated = flag === 'favorite' ? await api.SetNoteFavorite(node.id, value) : await api.SetNotePinned(node.id, value);
    Object.assign(node, updated, {[flag]:value});
    renderCurrentNoteMeta();
    renderNotesTree();
  } catch (error) {
    showToast(readError(error), true);
  }
}

function openNoteContextMenu(id, anchor) {
  const node = noteNodeById(id);
  if (!node) return;
  state.notes.menuTargetId = id;
  const menu = $('#note-context-menu');
  const shell = $('.notes-shell').getBoundingClientRect();
  const rect = anchor.getBoundingClientRect();
  menu.style.left = `${Math.min(shell.width - 151, Math.max(5, rect.right - shell.left - 130))}px`;
  menu.style.top = `${Math.min(shell.height - 205, Math.max(5, rect.bottom - shell.top + 3))}px`;
  menu.querySelector('[data-note-action="restore"]').classList.toggle('hidden', !node.deletedAt);
  menu.querySelector('[data-note-action="deleteForever"]').classList.toggle('hidden', !node.deletedAt);
  ['rename','move','favorite','pin','trash'].forEach(action => menu.querySelector(`[data-note-action="${action}"]`).classList.toggle('hidden', Boolean(node.deletedAt)));
  menu.classList.remove('hidden');
}

function closeNoteContextMenu() {
  $('#note-context-menu')?.classList.add('hidden');
}

async function handleNoteContextAction(event) {
  const action = event.target.closest('[data-note-action]')?.dataset.noteAction;
  const id = state.notes.menuTargetId;
  closeNoteContextMenu();
  if (!action || !id) return;
  if (action === 'rename') return renameNoteNode(id);
  if (action === 'move') return openNoteMoveDialog(id);
  if (action === 'favorite') return toggleNoteNodeFlag(id, 'favorite');
  if (action === 'pin') return toggleNoteNodeFlag(id, 'pinned');
  if (action === 'trash') return trashNoteNode(id);
  if (action === 'restore') return restoreNoteNode(id);
  if (action === 'deleteForever') return deleteNoteNodeForever(id);
}

async function renameNoteNode(id) {
  const node = noteNodeById(id);
  if (!node) return;
  const title = await showAppPrompt(node.kind === 'folder' ? '请输入新的文件夹名称。' : '请输入新的笔记标题。', node.title, {
    title: node.kind === 'folder' ? '重命名文件夹' : '重命名笔记',
    label: node.kind === 'folder' ? '文件夹名称' : '笔记标题'
  });
  if (title === null || !title.trim()) return;
  try {
    const updated = await api.RenameNoteNode(id, title.trim());
    Object.assign(node, updated);
    if (id === state.notes.selectedId && node.kind === 'note') $('#note-title-input').value = node.title;
    renderNotes();
  } catch (error) {
    showToast(readError(error), true);
  }
}

async function toggleNoteNodeFlag(id, flag) {
  const node = noteNodeById(id);
  if (!node) return;
  try {
    const value = !Boolean(node[flag]);
    const updated = flag === 'favorite' ? await api.SetNoteFavorite(id, value) : await api.SetNotePinned(id, value);
    Object.assign(node, updated, {[flag]:value});
    renderNotes();
  } catch (error) {
    showToast(readError(error), true);
  }
}

function trashNoteNode(id) {
  const node = noteNodeById(id);
  if (!node) return;
  state.notes.deleteTargetId = id;
  state.notes.deletePermanent = false;
  $('#note-delete-title').textContent = node.kind === 'folder' ? '删除文件夹' : '删除笔记';
  $('#note-delete-description').textContent = `将“${node.title}”移到回收站？${node.kind === 'folder' ? '文件夹中的内容也会一并移入。' : '之后可以从回收站恢复。'}`;
  $('#confirm-note-delete').textContent = '移到回收站';
  $('#confirm-note-delete').classList.remove('permanent');
  $('#note-delete-dialog').classList.remove('hidden');
}

async function restoreNoteNode(id) {
  try {
    await api.RestoreNoteNode(id);
    await loadNotes();
    showToast('已恢复');
  } catch (error) {
    showToast(readError(error), true);
  }
}

function deleteNoteNodeForever(id) {
  const node = noteNodeById(id);
  if (!node) return;
  state.notes.deleteTargetId = id;
  state.notes.deletePermanent = true;
  $('#note-delete-title').textContent = '彻底删除';
  $('#note-delete-description').textContent = `彻底删除“${node.title}”？此操作无法撤销。`;
  $('#confirm-note-delete').textContent = '彻底删除';
  $('#confirm-note-delete').classList.add('permanent');
  $('#note-delete-dialog').classList.remove('hidden');
}

async function confirmNoteDelete() {
  const id = state.notes.deleteTargetId;
  const permanent = state.notes.deletePermanent;
  if (!id) return;
  $('#confirm-note-delete').disabled = true;
  try {
    if (!permanent) await flushNoteSave();
    if (permanent) await api.DeleteNoteNodeForever(id);
    else await api.TrashNoteNode(id);
    if (state.notes.selectedId === id || isNoteDescendant(state.notes.selectedId, id)) state.notes.selectedId = '';
    closeNoteDialog('note-delete-dialog');
    await loadNotes();
    showToast(permanent ? '已彻底删除' : '已移到回收站');
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    $('#confirm-note-delete').disabled = false;
  }
}

function openNoteMoveDialog(id) {
  const node = noteNodeById(id);
  if (!node) return;
  state.notes.movingId = id;
  const descendants = new Set([id]);
  let changed = true;
  while (changed) {
    changed = false;
    state.notes.nodes.forEach(item => {
      if (!descendants.has(item.id) && descendants.has(item.parentId)) {
        descendants.add(item.id);
        changed = true;
      }
    });
  }
  const folders = state.notes.nodes.filter(item => item.kind === 'folder' && !item.deletedAt && !descendants.has(item.id));
  $('#note-move-target').innerHTML = `<option value="">全部笔记</option>${folders.map(folder => `<option value="${escapeHTML(folder.id)}">${escapeHTML(noteNodePath(folder))}</option>`).join('')}`;
  $('#note-move-target').value = node.parentId || '';
  $('#note-move-dialog').classList.remove('hidden');
}

async function confirmNoteMove() {
  const id = state.notes.movingId;
  if (!id) return;
  try {
    const updated = await api.MoveNoteNode(id, $('#note-move-target').value);
    Object.assign(noteNodeById(id), updated);
    closeNoteDialog('note-move-dialog');
    renderNotes();
    showToast('已移动');
  } catch (error) {
    showToast(readError(error), true);
  }
}

function closeNoteDialog(id) {
  $(`#${id}`)?.classList.add('hidden');
  if (id === 'note-move-dialog') state.notes.movingId = '';
  if (id === 'note-delete-dialog') {
    state.notes.deleteTargetId = '';
    state.notes.deletePermanent = false;
  }
  if (id === 'note-password-dialog') {
    state.notes.passwordMode = 'set';
    $('#note-password-form')?.reset();
  }
}

function unlockCurrentNote() {
  const node = noteNodeById(state.notes.selectedId);
  if (!node?.locked) return;
  openNotePasswordDialog('unlock');
}

function openNotePasswordDialog(mode) {
  const node = currentNoteNode();
  if (!node) return;
  state.notes.passwordMode = mode;
  $('#note-password-form').reset();
  const unlock = mode === 'unlock';
  $('#note-password-dialog-title').textContent = unlock ? '解锁笔记' : '设置阅读密码';
  $('#note-password-description').textContent = unlock ? `请输入“${node.title}”的阅读密码。` : '设置后，下次打开这篇笔记时需要输入密码。';
  $('#note-password-label').textContent = unlock ? '阅读密码' : '新阅读密码';
  $('#note-reading-password').placeholder = unlock ? '请输入阅读密码' : '至少 4 个字符';
  $('#note-reading-password').autocomplete = unlock ? 'current-password' : 'new-password';
  $('#note-password-confirm-row').classList.toggle('hidden', unlock);
  $('#note-reading-password-confirm').required = !unlock;
  $('#remove-note-password').classList.toggle('hidden', unlock || !(node.hasPassword || node.locked));
  $('#save-note-password').textContent = unlock ? '解锁笔记' : '保存密码';
  $('#note-password-dialog').classList.remove('hidden');
  requestAnimationFrame(() => $('#note-reading-password').focus());
}

async function submitNotePassword(event) {
  event.preventDefault();
  const node = currentNoteNode();
  if (!node) return;
  const password = $('#note-reading-password').value;
  const unlock = state.notes.passwordMode === 'unlock';
  if (!unlock) {
    if (password.trim().length < 4) {
      showToast('阅读密码至少需要 4 个字符', true);
      return;
    }
    if (password !== $('#note-reading-password-confirm').value) {
      showToast('两次输入的密码不一致', true);
      return;
    }
  }
  $('#save-note-password').disabled = true;
  try {
    if (unlock) {
      const unlocked = await api.UnlockNote(node.id, password);
      Object.assign(node, unlocked, {hasPassword:true,locked:false,savedTitle:unlocked.title,savedContent:unlocked.content});
    } else {
      await flushNoteSave();
      await api.SetNotePassword(node.id, password);
      Object.assign(node, {hasPassword:true,locked:false});
    }
    state.notes.unlocked.add(node.id);
    closeNoteDialog('note-password-dialog');
    renderNotes();
    showToast(unlock ? '笔记已解锁' : '阅读密码已设置');
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    $('#save-note-password').disabled = false;
  }
}

async function removeCurrentNotePassword() {
  const node = currentNoteNode();
  if (!node) return;
  $('#remove-note-password').disabled = true;
  try {
    await api.SetNotePassword(node.id, '');
    Object.assign(node, {hasPassword:false,locked:false});
    state.notes.unlocked.delete(node.id);
    closeNoteDialog('note-password-dialog');
    renderNotes();
    showToast('阅读密码已取消');
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    $('#remove-note-password').disabled = false;
  }
}

function toggleNoteMoreMenu(event) {
  event.stopPropagation();
  $('#note-more-menu').classList.toggle('hidden');
}

function closeNoteMoreMenu() {
  $('#note-more-menu')?.classList.add('hidden');
}

async function handleNoteMoreAction(event) {
  const action = event.target.closest('[data-note-more-action]')?.dataset.noteMoreAction;
  closeNoteMoreMenu();
  if (!action) return;
  if (action === 'history') return openNoteHistory();
  if (action === 'translate') return translateCurrentNote();
  if (action === 'exportWord') return exportCurrentNote('word');
  if (action === 'exportText') return exportCurrentNote('text');
  if (action === 'password') return setCurrentNotePassword();
  if (action === 'info') return showCurrentNoteInfo();
  if (action === 'trash') return trashNoteNode(state.notes.selectedId);
}

async function openNoteHistory() {
  const node = currentNoteNode();
  if (!node) return;
  try {
    const versions = await api.ListNoteVersions(node.id) || [];
    $('#note-history-list').innerHTML = versions.length ? versions.map(version => `
      <article class="note-history-item">
        <strong>${escapeHTML(formatNoteDate(version.createdAt))}</strong>
        <button type="button" data-note-version-id="${escapeHTML(version.id)}">恢复此版本</button>
        <p>${escapeHTML(notePlainTextFromHTML(version.content || '').slice(0,180) || '空白内容')}</p>
      </article>`).join('') : '<div class="notes-tree-empty">暂无可恢复的历史版本。持续编辑后会自动生成版本快照。</div>';
    $('#note-history-dialog').classList.remove('hidden');
  } catch (error) {
    showToast(readError(error), true);
  }
}

async function restoreNoteHistoryVersion(event) {
  const button = event.target.closest('[data-note-version-id]');
  const node = currentNoteNode();
  if (!button || !node || !await showAppConfirm('恢复此历史版本？当前内容会保留为历史快照。', {title:'恢复历史版本'})) return;
  try {
    const restored = await api.RestoreNoteVersion(node.id, button.dataset.noteVersionId);
    Object.assign(node, restored, {savedTitle:restored.title,savedContent:restored.content});
    closeNoteDialog('note-history-dialog');
    renderNotes();
    showToast('历史版本已恢复');
  } catch (error) {
    showToast(readError(error), true);
  }
}

function setCurrentNotePassword() {
  const node = currentNoteNode();
  if (!node) return;
  openNotePasswordDialog('set');
}

async function exportCurrentNote(format) {
  const node = currentNoteNode();
  if (!node) return;
  await flushNoteSave();
  try {
    const result = await api.ExportNote(node.id, format);
    if (!result?.cancelled) showToast(`笔记已导出：${result?.name || ''}`);
  } catch (error) {
    showToast(readError(error), true);
  }
}

async function shareCurrentNote() {
  const node = currentNoteNode();
  if (!node) return;
  try {
    await flushNoteSave();
    const fresh = await api.GetNoteNode(node.id);
    Object.assign(node, fresh, {savedTitle:fresh.title,savedContent:fresh.content || ''});
    if (fresh.locked) {
      showToast('请先解锁笔记后再分享', true);
      return;
    }
    openNoteShareCreateDialog(fresh);
  } catch (error) {
    showToast(readError(error), true);
  }
}

async function sendCurrentNoteToAI() {
  const node = currentNoteNode();
  if (!node) return;
  const content = currentNotePlainText(node);
  await flushNoteSave();
  closeNotesPage();
  await openAIChatPage();
  $('#ai-composer-input').value = `请帮我整理和优化下面这篇笔记，保留关键信息并给出清晰结构：\n\n标题：${node.title}\n\n${content}`;
  updateAIComposer();
  $('#ai-composer-input').focus();
}

async function translateCurrentNote() {
  const node = currentNoteNode();
  if (!node) return;
  const content = currentNotePlainText(node);
  await flushNoteSave();
  closeNotesPage();
  await openTranslatorPage();
  $('#translation-input').value = content.slice(0, 4000);
  updateTranslationCharacterCount();
  $('#translation-input').focus();
}

function showCurrentNoteInfo() {
  const node = currentNoteNode();
  if (!node) return;
  const words = node.contentType === 'spreadsheet'
    ? (state.notes.workbook?.sheets || []).reduce((total,sheet) => total + Object.values(sheet.cells || {}).filter(cell => String(cell?.v ?? '').trim()).length,0)
    : currentNotePlainText(node).length;
  $('#note-info-title').textContent = node.title;
  $('#note-info-path').textContent = noteNodePath(node);
  $('#note-info-words').textContent = `${words.toLocaleString(locale())}${node.contentType === 'spreadsheet' ? ' 个非空单元格' : ''}`;
  $('#note-info-created').textContent = formatNoteDate(node.createdAt);
  $('#note-info-updated').textContent = formatNoteDate(node.updatedAt);
  $('#note-info-password').textContent = node.hasPassword || node.locked ? '已设置' : '未设置';
  $('#note-info-dialog').classList.remove('hidden');
}

function toggleNoteFullscreen() {
  state.notes.fullscreen = !state.notes.fullscreen;
  $('#notes-page').classList.toggle('note-fullscreen', state.notes.fullscreen);
  $('#note-fullscreen').classList.toggle('active', state.notes.fullscreen);
}

function currentNoteNode() {
  const node = noteNodeById(state.notes.selectedId);
  return node?.kind === 'note' ? node : null;
}

function noteNodeById(id) {
  return state.notes.nodes.find(node => node.id === id);
}

function noteNodePath(node) {
  const parts = [node.title];
  let parent = noteNodeById(node.parentId);
  const seen = new Set();
  while (parent && !seen.has(parent.id)) {
    seen.add(parent.id);
    parts.unshift(parent.title);
    parent = noteNodeById(parent.parentId);
  }
  parts.unshift('全部笔记');
  return parts.join(' / ');
}

function isNoteDescendant(id, ancestorId) {
  let node = noteNodeById(id);
  const seen = new Set();
  while (node && !seen.has(node.id)) {
    if (node.parentId === ancestorId) return true;
    seen.add(node.id);
    node = noteNodeById(node.parentId);
  }
  return false;
}

function notePlainTextFromHTML(content = '') {
  const container = document.createElement('div');
  container.innerHTML = String(content);
  return (container.textContent || '').replace(/\u00a0/g,' ').trim();
}

function formatNoteDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleString(locale(), {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false});
}

function formatNoteRelativeTime(value) {
  const timestamp = new Date(value).getTime();
  if (!Number.isFinite(timestamp)) return '刚刚';
  const delta = Date.now() - timestamp;
  if (delta < 60000) return '刚刚';
  if (delta < 3600000) return `${Math.floor(delta/60000)} 分钟前`;
  if (delta < 86400000) return `${Math.floor(delta/3600000)} 小时前`;
  if (delta < 604800000) return `${Math.floor(delta/86400000)} 天前`;
  return new Date(timestamp).toLocaleDateString(locale(), {month:'2-digit',day:'2-digit'});
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
  if (state.notificationOpen) closeNotificationPage();
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.notesOpen) closeNotesPage();
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
  const title = await showAppPrompt('给这段对话起一个清晰的名字。', item.title || '新对话', {title:'重命名对话',label:'对话名称'});
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
  if (!await showAppConfirm(`删除“${item.title || '新对话'}”后将无法在界面中恢复，确定继续吗？`, {title:'删除对话',danger:true})) return;
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
        <button type="button" data-ai-conversation-action="pin" aria-label="${item.pinned ? '取消置顶' : '置顶'}" title="${item.pinned ? '取消置顶' : '置顶'}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M7.5 9.5 12 5l4.5 4.5"/></svg></button>
        <button type="button" data-ai-conversation-action="archive" aria-label="${item.archived ? '移出归档' : '归档'}" title="${item.archived ? '移出归档' : '归档'}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v13H4zM3 4h18v3H3zM9 11h6"/></svg></button>
        <button type="button" data-ai-conversation-action="delete" aria-label="删除" title="删除"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg></button>
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
          <button type="button" data-ai-message-action="copy" data-ai-message-index="${index}" aria-label="复制" title="复制"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg></button>
          <button type="button" data-ai-message-action="retry" data-ai-message-index="${index}" aria-label="重新生成" title="重新生成"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8a7 7 0 1 0 1 6"/><path d="M19 3v5h-5"/></svg></button>
          <button type="button" data-ai-message-action="helpful" data-ai-message-index="${index}" class="${Number(message.feedback) === 1 ? 'selected' : ''}" aria-label="有帮助" title="有帮助"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 10v10H4V10zM8 18h8.5a2 2 0 0 0 1.9-1.4l1.4-5A2 2 0 0 0 18 9h-4l.7-3.2A2.3 2.3 0 0 0 12.5 3L8 10"/></svg></button>
          <button type="button" data-ai-message-action="unhelpful" data-ai-message-index="${index}" class="${Number(message.feedback) === -1 ? 'selected' : ''}" aria-label="需改进" title="需改进"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 14V4H4v10zM8 6h8.5a2 2 0 0 1 1.9 1.4l1.4 5A2 2 0 0 1 18 15h-4l.7 3.2a2.3 2.3 0 0 1-2.2 2.8L8 14"/></svg></button>
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

function resolveAccountMembership(user) {
  const definitions = {
    member: {rank:0, code:'WORKDAY_ISLAND', labelKey:'workdayMember', icon:'W', nav:''},
    plus: {rank:1, code:'WORKDAY_ISLAND_PLUS', labelKey:'workdayPlusMember', icon:'◆', nav:'PLUS'},
    pro: {rank:2, code:'WORKDAY_ISLAND_PRO', labelKey:'workdayProMember', icon:'✧', nav:'PRO'},
    ultra: {rank:3, code:'WORKDAY_ISLAND_ULTRA', labelKey:'workdayUltraMember', icon:'✦', nav:'ULTRA'}
  };
  const byCode = Object.fromEntries(Object.entries(definitions).map(([tier, value]) => [value.code, tier]));
  let selectedTier = String(user?.membership_tier || user?.membershipTier || '').trim().toLowerCase();
  if (!definitions[selectedTier]) selectedTier = 'member';
  const roleCodes = [];
  const addRole = value => {
    const code = String(typeof value === 'string' ? value : (value?.role_code || value?.roleCode || '')).trim().toUpperCase();
    if (code) roleCodes.push(code);
  };
  (Array.isArray(user?.roles) ? user.roles : []).forEach(addRole);
  addRole(user?.primary_role_code || user?.primaryRoleCode);
  addRole(user?.membership_role_code || user?.membershipRoleCode);
  for (const code of roleCodes) {
    const candidate = byCode[code];
    if (candidate && definitions[candidate].rank > definitions[selectedTier].rank) selectedTier = candidate;
  }
  const selected = definitions[selectedTier];
  return {...selected, tier:selectedTier, label:t(selected.labelKey)};
}

const memberThemeDefinitions = {
  'plus-theme': {rank:1, tier:'plus', labelKey:'plusTheme', membership:'Plus'},
  'pro-theme': {rank:2, tier:'pro', labelKey:'proTheme', membership:'Pro'},
  'ultra-theme': {rank:3, tier:'ultra', labelKey:'ultraTheme', membership:'Ultra'},
  'plus-light': {rank:1, tier:'plus', labelKey:'plusLightTheme', membership:'Plus'},
  'pro-light': {rank:2, tier:'pro', labelKey:'proLightTheme', membership:'Pro'},
  'ultra-light': {rank:3, tier:'ultra', labelKey:'ultraLightTheme', membership:'Ultra'}
};

const automaticMemberThemes = {
  plus: {dark:'plus-theme', light:'plus-light'},
  pro: {dark:'pro-theme', light:'pro-light'},
  ultra: {dark:'ultra-theme', light:'ultra-light'}
};

function currentThemeIsLight() {
  const theme = state.settings.theme || 'system';
  if (theme === 'light') return true;
  if (theme === 'system') return Boolean(systemTheme?.matches);
  return false;
}

async function applyAutomaticMemberTheme(previousMembership, currentMembership) {
  if (!currentMembership || currentMembership.rank < 1 || currentMembership.rank <= (previousMembership?.rank || 0)) return false;
  // A member theme is an explicit choice. Never replace it automatically,
  // even when the account later reaches a higher tier.
  if (memberThemeDefinitions[state.settings.theme]) return false;
  const pair = automaticMemberThemes[currentMembership.tier];
  if (!pair) return false;
  const theme = currentThemeIsLight() ? pair.light : pair.dark;
  try {
    const saved = await api.SaveSettings({...state.settings, theme});
    state.settings = {...state.settings, ...(saved || {}), theme};
    applyTheme();
    renderThemeAccess();
    showToast(t('membershipThemeApplied', {membership:currentMembership.label}));
    return true;
  } catch (error) {
    showToast(readError(error), true);
    return false;
  }
}

function currentMembershipRank() {
  return state.account?.loggedIn ? resolveAccountMembership(state.account.user).rank : 0;
}

function effectiveTheme(theme = state.settings.theme) {
  const requested = theme || 'system';
  const memberTheme = memberThemeDefinitions[requested];
  return memberTheme && currentMembershipRank() < memberTheme.rank ? 'system' : requested;
}

function renderThemeAccess() {
  const select = $('#theme-select');
  if (!select) return;
  const rank = currentMembershipRank();
  Object.entries(memberThemeDefinitions).forEach(([value, definition]) => {
    const option = select.querySelector(`option[value="${value}"]`);
    if (!option) return;
    const locked = rank < definition.rank;
    option.disabled = locked;
    option.textContent = `${t(definition.labelKey)}${locked ? ` · ${t('themeLocked', {membership:definition.membership})}` : ''}`;
  });
  const requested = state.settings.theme || 'system';
  select.value = effectiveTheme(requested);
  $('#theme-access-hint').textContent = t('themeAccessHint');
}

function resolveAccountAvatarURL(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (/^(https?:\/\/|blob:|data:image\/)/i.test(raw)) return raw;
  if (raw.startsWith('//')) return `https:${raw}`;
  if (raw.startsWith('/api/')) return `https://admin.asbacklight.cn${raw}`;
  return `https://admin.asbacklight.cn/api${raw.startsWith('/') ? raw : `/${raw}`}`;
}

function renderAccountAvatar(target, {loggedIn, displayName, avatarURL, guest = false}) {
  if (!target) return;
  const initial = [...String(displayName || 'W')][0]?.toUpperCase() || 'W';
  const resolvedURL = loggedIn ? resolveAccountAvatarURL(avatarURL) : '';
  const renderKey = `${loggedIn ? '1' : '0'}|${initial}|${resolvedURL}|${guest ? '1' : '0'}`;
  if (target.dataset.avatarRenderKey === renderKey) return;
  target.dataset.avatarRenderKey = renderKey;
  target.classList.remove('avatar-loaded');
  target.replaceChildren();

  const fallback = document.createElement('span');
  fallback.className = 'account-avatar-fallback';
  if (loggedIn || !guest) {
    fallback.textContent = initial;
  } else {
    fallback.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></svg>';
  }
  target.append(fallback);

  if (!resolvedURL) return;
  const image = document.createElement('img');
  image.className = 'account-avatar-image';
  image.alt = '';
  image.decoding = 'async';
  image.addEventListener('load', () => target.classList.add('avatar-loaded'), {once:true});
  image.addEventListener('error', () => {
    target.classList.remove('avatar-loaded');
    image.remove();
  }, {once:true});
  image.src = resolvedURL;
  target.append(image);
}

function renderAccountSession() {
  const loggedIn = Boolean(state.account?.loggedIn);
  const user = state.account?.user || null;
  const displayName = accountDisplayName();
  const membership = resolveAccountMembership(user);
  document.documentElement.classList.toggle('member-colourful-entries', loggedIn && membership.rank > 0);
  const nav = $('#open-account');
  nav.classList.toggle('logged-in', loggedIn);
  ['member','plus','pro','ultra'].forEach(tier => nav.classList.toggle(`membership-${tier}`, loggedIn && membership.tier === tier));
  nav.title = loggedIn ? `${displayName} · ${membership.label}` : t('account');
  $('#account-home-name').textContent = loggedIn ? displayName : t('accountLogin');
  renderAccountAvatar($('.account-nav-avatar'), {
    loggedIn,
    displayName,
    avatarURL: user?.avatar_url || user?.avatarUrl,
    guest: true
  });
  const navTier = $('#account-nav-tier');
  navTier.textContent = membership.nav;
  navTier.classList.toggle('hidden', !loggedIn || !membership.nav);

  const chip = $('#account-status-chip');
  chip.classList.toggle('logged-in', loggedIn);
  chip.querySelector('b').textContent = loggedIn ? t('accountSignedIn') : t('signedOut');
  $('#account-auth-view').classList.toggle('hidden', loggedIn);
  $('#account-profile-view').classList.toggle('hidden', !loggedIn);

  if (loggedIn) {
    const profileAvatar = $('#account-profile-avatar');
    ['member','plus','pro','ultra'].forEach(tier => profileAvatar.classList.toggle(`membership-${tier}`, membership.tier === tier));
    renderAccountAvatar(profileAvatar, {
      loggedIn,
      displayName,
      avatarURL: user?.avatar_url || user?.avatarUrl
    });
    $('#account-profile-name').textContent = displayName;
    $('#account-profile-username').textContent = user?.username ? `@${user.username}` : '';
    const membershipBadge = $('#account-membership-badge');
    membershipBadge.className = `account-membership-badge membership-${membership.tier}`;
    membershipBadge.querySelector('span').textContent = membership.icon;
    membershipBadge.querySelector('b').textContent = membership.label;
    membershipBadge.title = String(user?.membership_role_code || user?.membershipRoleCode || membership.code);
    $('#account-profile-view').dataset.membership = membership.tier;
    $('#account-chat-status').textContent = realtimeStatusLabel(state.realtime?.status || 'offline');
    $('#account-service-grid').classList.toggle('chat-online', state.realtime?.status === 'online');
    renderAccountTrialInvitations();
  } else {
    state.accountTrial.items = [];
    state.accountTrial.loading = false;
    $('#account-trial-invitations').classList.add('hidden');
    const registerMode = state.accountMode === 'register';
    $('#account-login-form').classList.toggle('hidden', registerMode);
    $('#account-register-form').classList.toggle('hidden', !registerMode);
    $$('#account-mode-tabs [data-account-mode]').forEach(button => {
      button.classList.toggle('active', button.dataset.accountMode === state.accountMode);
    });
  }
  renderNoteShareSession();
  renderThemeAccess();
  applyTheme();
}

function trialRoleName(invitation) {
  return invitation?.role_name || invitation?.roleName || invitation?.role_code || invitation?.roleCode || t('workdayMember');
}

function formatTrialExpiry(value) {
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return '—';
  return date.toLocaleString(locale(), {month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit', hour12:false});
}

function renderAccountTrialInvitations() {
  const section = $('#account-trial-invitations');
  if (!state.account?.loggedIn) {
    section.classList.add('hidden');
    return;
  }
  const items = Array.isArray(state.accountTrial?.items) ? state.accountTrial.items : [];
  if (!state.accountTrial.loading && !items.length) {
    section.classList.add('hidden');
    section.replaceChildren();
    return;
  }
  section.classList.remove('hidden');
  if (state.accountTrial.loading && !items.length) {
    section.innerHTML = `<div class="account-trial-loading"><span></span>${escapeHTML(t('trialInvitation'))}</div>`;
    return;
  }
  section.innerHTML = items.map(invitation => {
    const id = Number(invitation?.id) || 0;
    const accepting = Number(state.accountTrial.acceptingID) === id;
    const days = Math.max(1, Number(invitation?.trial_days ?? invitation?.trialDays) || 1);
    return `<article class="account-trial-card"><span class="account-trial-icon" aria-hidden="true">✦</span><div><small>${escapeHTML(t('trialInvitation'))}</small><strong>${escapeHTML(t('trialInvitationHint', {role:trialRoleName(invitation), days}))}</strong><em>${escapeHTML(t('trialInvitationExpiry', {time:formatTrialExpiry(invitation?.expires_at ?? invitation?.expiresAt)}))}</em></div><button type="button" data-trial-invitation-id="${id}" ${accepting || !id ? 'disabled' : ''}>${escapeHTML(t(accepting ? 'claimingTrial' : 'claimTrial'))}</button></article>`;
  }).join('');
}

async function loadAccountTrialInvitations() {
  if (!state.account?.loggedIn || typeof api.GetMyMembershipTrialInvitations !== 'function') return;
  const requestID = ++state.accountTrial.requestID;
  state.accountTrial.loading = true;
  renderAccountTrialInvitations();
  try {
    const invitations = await api.GetMyMembershipTrialInvitations();
    if (requestID !== state.accountTrial.requestID || !state.account?.loggedIn) return;
    state.accountTrial.items = (Array.isArray(invitations) ? invitations : []).filter(item => String(item?.status || 'pending').toLowerCase() === 'pending');
  } catch (error) {
    // The eligibility check is optional for the page itself. Avoid an error
    // toast on every page open if the account service is temporarily offline.
    if (requestID === state.accountTrial.requestID) state.accountTrial.items = [];
  } finally {
    if (requestID === state.accountTrial.requestID) {
      state.accountTrial.loading = false;
      renderAccountTrialInvitations();
    }
  }
}

async function handleAccountTrialAction(event) {
  const button = event.target.closest('[data-trial-invitation-id]');
  const invitationID = Number(button?.dataset.trialInvitationId) || 0;
  const invitation = state.accountTrial.items.find(item => Number(item?.id) === invitationID);
  if (!invitation || !invitationID || state.accountTrial.acceptingID) return;
  const days = Math.max(1, Number(invitation?.trial_days ?? invitation?.trialDays) || 1);
  const accepted = await showAppConfirm(t('trialClaimConfirm', {role:trialRoleName(invitation), days}), {title:t('trialInvitation'), confirmText:t('claimTrial')});
  if (!accepted) return;
  state.accountTrial.acceptingID = invitationID;
  renderAccountTrialInvitations();
  try {
    await api.AcceptMembershipTrialInvitation(invitationID);
    state.accountTrial.items = state.accountTrial.items.filter(item => Number(item?.id) !== invitationID);
    const previousMembership = resolveAccountMembership(state.account.user);
    const session = await api.RefreshAccountSession();
    if (session?.loggedIn && session?.user) {
      state.account = {loggedIn:true, user:session.user};
      state.cloud.session = {loggedIn:true, user:session.user};
      if (session.realtime) state.realtime = {...state.realtime, ...session.realtime};
      await applyAutomaticMemberTheme(previousMembership, resolveAccountMembership(session.user));
    }
    renderAccountSession();
    renderCloudSession();
    renderRealtime();
    showToast(t('trialClaimed', {role:trialRoleName(invitation)}));
  } catch (error) {
    showToast(readError(error), true);
    await loadAccountTrialInvitations();
  } finally {
    state.accountTrial.acceptingID = 0;
    renderAccountTrialInvitations();
  }
}

async function refreshAccountProfile(force = false) {
  if (!state.account?.loggedIn || accountBusy || accountProfileRefreshBusy) return;
  const now = Date.now();
  if (!force && now - lastAccountProfileRefreshAt < 15000) return;
  accountProfileRefreshBusy = true;
  try {
    const previousMembership = resolveAccountMembership(state.account.user);
    const session = await api.RefreshAccountSession();
    lastAccountProfileRefreshAt = Date.now();
    if (!session?.loggedIn || !session?.user) return;
    state.account = {loggedIn: true, user: session.user};
    state.cloud.session = {loggedIn: true, user: session.user};
    if (session.realtime) state.realtime = {...state.realtime, ...session.realtime};
    const currentMembership = resolveAccountMembership(session.user);
    await applyAutomaticMemberTheme(previousMembership, currentMembership);
    renderAccountSession();
    renderCloudSession();
    renderRealtime();
    if (currentMembership.tier !== previousMembership.tier) {
      showToast(t('membershipUpdated', {membership: currentMembership.label}));
    }
  } catch (error) {
    // Profile refresh is opportunistic. Existing sessions continue to work
    // during a temporary network interruption and retry on the next trigger.
  } finally {
    accountProfileRefreshBusy = false;
  }
}

function openAccountPage(mode = 'login') {
  if (state.notificationOpen) closeNotificationPage();
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.notesOpen) closeNotesPage();
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
  if (state.account.loggedIn) {
    void refreshAccountProfile(true);
    // An eligibility check is deliberately made on every account-centre entry
    // so a newly created invitation appears without restarting the app.
    void loadAccountTrialInvitations();
  }
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

async function openNotificationPage() {
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.notesOpen) closeNotesPage();
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.stockOpen) await closeStockPage();
  if (state.englishOpen || state.englishCenterOpen) await closeEnglishPage();
  state.notificationOpen = true;
  document.body.classList.add('notification-open');
  $('#notification-page').classList.remove('hidden');
  $('#open-notifications').classList.add('active');
  renderNotificationSession();
  if (state.account.loggedIn) await Promise.allSettled([loadUserNotices(), refreshNotificationUnread()]);
}

function closeNotificationPage() {
  state.notificationOpen = false;
  document.body.classList.remove('notification-open');
  $('#notification-page').classList.add('hidden');
  $('#open-notifications').classList.remove('active');
}

function renderNotificationSession() {
  const loggedIn = Boolean(state.account.loggedIn);
  $('#notification-login-required').classList.toggle('hidden', loggedIn);
  $('#notification-content').classList.toggle('hidden', !loggedIn);
  const chip = $('#notification-status-chip');
  chip.classList.toggle('logged-in', loggedIn);
  chip.querySelector('b').textContent = loggedIn ? t('accountSignedIn') : t('signedOut');
  if (loggedIn) renderNotifications();
}

function renderNotificationBadge() {
  const count = state.account.loggedIn ? Math.max(0, Number(state.notifications.unread) || 0) : 0;
  const badge = $('#notification-unread');
  badge.textContent = count > 99 ? '99+' : String(count);
  badge.classList.toggle('hidden', count < 1);
  $('#open-notifications').title = count ? `${t('notificationCenter')} · ${t('unreadCount', {count})}` : t('notificationCenter');
}

function noticeTypeKey(type) {
  return {SYSTEM:'noticeSystem', BUSINESS:'noticeBusiness', SECURITY:'noticeSecurity', ANNOUNCEMENT:'noticeAnnouncement'}[type] || 'noticeSystem';
}

function noticeTime(notice) {
  const value = notice.publish_time || notice.create_time;
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat(locale(), {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'}).format(date);
}

function renderNotifications() {
  const model = state.notifications;
  $('#notification-summary').textContent = t('notificationCount', {count: model.total});
  $('#notification-type-filter').value = model.type;
  $('#notification-status-filter').value = model.readStatus;
  $('#notification-refresh').disabled = model.busy;
  $('#notification-read-all').disabled = model.busy || model.unread < 1;
  const pages = Math.max(1, Math.ceil(model.total / model.pageSize));
  $('#notification-page-summary').textContent = t('notificationPageSummary', {page: Math.min(model.page, pages), pages});
  $('#notification-prev').disabled = model.busy || model.page <= 1;
  $('#notification-next').disabled = model.busy || model.page >= pages;
  const list = $('#notification-list');
  if (model.busy && !model.items.length) {
    list.innerHTML = `<div class="notification-empty"><span class="spinner"></span><b>${escapeHTML(t('notificationLoading'))}</b></div>`;
    return;
  }
  if (!model.items.length) {
    list.innerHTML = `<div class="notification-empty"><div class="notification-empty-icon">✓</div><b>${escapeHTML(t('noNotifications'))}</b><p>${escapeHTML(t('noNotificationsHint'))}</p></div>`;
    return;
  }
  list.innerHTML = model.items.map(notice => {
    const id = Number(notice.id) || 0;
    const type = String(notice.notice_type || 'SYSTEM').toUpperCase();
    const unread = !notice.is_read;
    const actionURL = String(notice.action_url || '').trim();
    return `<article class="notification-item notice-${type.toLowerCase()} ${unread ? 'unread' : ''}" data-notice-id="${id}">
      <div class="notification-type-icon" aria-hidden="true">${{SYSTEM:'◉',BUSINESS:'◇',SECURITY:'◆',ANNOUNCEMENT:'✦'}[type] || '◉'}</div>
      <div class="notification-item-body">
        <div class="notification-item-meta"><span>${escapeHTML(t(noticeTypeKey(type)))}</span>${Number(notice.is_top) ? `<em>${escapeHTML(t('pinnedNotice'))}</em>` : ''}<time>${escapeHTML(noticeTime(notice))}</time></div>
        <h3>${escapeHTML(notice.title || t(noticeTypeKey(type)))}</h3>
        <p>${escapeHTML(notice.content || '')}</p>
      </div>
      <div class="notification-item-actions">
        ${unread ? `<button type="button" class="ghost-btn" data-notice-action="read" data-notice-id="${id}">${escapeHTML(t('markRead'))}</button>` : ''}
        ${actionURL ? `<button type="button" class="ghost-btn" data-notice-action="open" data-notice-url="${escapeHTML(actionURL)}">${escapeHTML(t('openNotificationLink'))}</button>` : ''}
        <button type="button" class="notification-delete" data-notice-action="delete" data-notice-id="${id}" aria-label="${escapeHTML(t('delete'))}" title="${escapeHTML(t('delete'))}">×</button>
      </div>
    </article>`;
  }).join('');
}

async function refreshNotificationUnread() {
  if (!state.account.loggedIn || !api.GetUserNoticeUnreadCount) {
    state.notifications.unread = 0;
    renderNotificationBadge();
    return;
  }
  try {
    state.notifications.unread = Number(await api.GetUserNoticeUnreadCount()) || 0;
    renderNotificationBadge();
    if (state.notificationOpen) renderNotifications();
  } catch (_) { /* Keep the last known badge during temporary network failures. */ }
}

async function loadUserNotices() {
  if (!state.account.loggedIn || state.notifications.busy) return;
  state.notifications.busy = true;
  renderNotifications();
  try {
    const page = await api.ListUserNotices(state.notifications.page, state.notifications.pageSize, state.notifications.type, state.notifications.readStatus);
    state.notifications.items = Array.isArray(page?.list) ? page.list : [];
    state.notifications.total = Number(page?.total) || 0;
    state.notifications.page = Number(page?.page) || state.notifications.page;
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    state.notifications.busy = false;
    renderNotifications();
  }
}

async function markAllNotificationsRead() {
  if (!state.account.loggedIn || state.notifications.busy || state.notifications.unread < 1) return;
  state.notifications.busy = true;
  renderNotifications();
  try {
    await api.MarkAllUserNoticesRead();
    state.notifications.items = state.notifications.items.map(item => ({...item, is_read:true}));
    state.notifications.unread = 0;
    showToast(t('markedAllRead'));
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    state.notifications.busy = false;
    renderNotificationBadge();
    renderNotifications();
  }
}

async function handleNotificationAction(event) {
  const button = event.target.closest('[data-notice-action]');
  if (!button || state.notifications.busy) return;
  const action = button.dataset.noticeAction;
  const id = Number(button.dataset.noticeId) || 0;
  const notice = state.notifications.items.find(item => Number(item.id) === id);
  if (action === 'open') {
    const value = String(button.dataset.noticeUrl || '').trim();
    const url = /^https:\/\//i.test(value) ? value : (value.startsWith('/') && !value.startsWith('//') ? `https://admin.asbacklight.cn${value}` : '');
    if (url && window.runtime?.BrowserOpenURL) window.runtime.BrowserOpenURL(url);
    else if (url) window.open(url, '_blank', 'noopener');
    return;
  }
  if (!id || !notice) return;
  try {
    if (action === 'read') {
      await api.MarkUserNoticeRead(id);
      notice.is_read = true;
      state.notifications.unread = Math.max(0, state.notifications.unread - 1);
      showToast(t('notificationMarkedRead'));
    } else if (action === 'delete') {
      if (!await showAppConfirm(t('deleteNotificationConfirm', {title: notice.title || t(noticeTypeKey(notice.notice_type))}), {title:t('delete'), danger:true})) return;
      await api.DeleteUserNotice(id);
      state.notifications.items = state.notifications.items.filter(item => Number(item.id) !== id);
      state.notifications.total = Math.max(0, state.notifications.total - 1);
      if (!notice.is_read) state.notifications.unread = Math.max(0, state.notifications.unread - 1);
      showToast(t('notificationDeleted'));
      if (!state.notifications.items.length && state.notifications.page > 1) {
        state.notifications.page -= 1;
        await loadUserNotices();
      }
    }
    renderNotificationBadge();
    renderNotifications();
  } catch (error) {
    showToast(readError(error), true);
  }
}

function changeNotificationPage(offset) {
  const pages = Math.max(1, Math.ceil(state.notifications.total / state.notifications.pageSize));
  const page = Math.max(1, Math.min(pages, state.notifications.page + offset));
  if (page === state.notifications.page) return;
  state.notifications.page = page;
  loadUserNotices();
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
    lastAccountProfileRefreshAt = Date.now();
    state.cloud.session = {loggedIn: state.account.loggedIn, user: state.account.user};
    state.notes.nodes = [];
    state.notes.selectedId = '';
    state.notes.loaded = false;
    pendingNoteSaves.clear();
    state.notes.unlocked.clear();
    state.noteShares.items = [];
    state.noteShares.total = 0;
    state.noteShares.page = 1;
    state.noteShares.quota = {};
    state.realtime = {...state.realtime, ...(session?.realtime || {})};
    await applyAutomaticMemberTheme(resolveAccountMembership(null), resolveAccountMembership(state.account.user));
    localStorage.setItem('workdayIsland.accountUsername', username);
    $('#account-password').value = '';
    renderAccountSession();
    renderCloudSession();
    renderTranslatorSession();
    renderAIChat();
    renderRealtime();
    renderNotificationSession();
    void loadAccountTrialInvitations();
    await refreshNotificationUnread();
    if (state.notificationOpen) await loadUserNotices();
    if (state.shareManagementOpen) await loadNoteShares();
    showToast(t('loginSuccess'));
    // Membership may be granted asynchronously immediately after login.
    // Retry profile loading shortly afterwards without delaying the login UI.
    window.setTimeout(() => void refreshAccountProfile(true), 1500);
    window.setTimeout(() => void refreshAccountProfile(true), 6000);
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
    state.notes.nodes = [];
    state.notes.selectedId = '';
    state.notes.loaded = false;
    pendingNoteSaves.clear();
    state.notes.unlocked.clear();
    state.noteShares.items = [];
    state.noteShares.total = 0;
    state.noteShares.page = 1;
    state.noteShares.quota = {};
    state.notifications = {...state.notifications, items:[], total:0, page:1, unread:0, busy:false};
    state.aiChat.conversations = [];
    state.aiChat.messages = [];
    state.aiChat.current = null;
    state.aiChat.usage = {conversation_count:0,message_count:0,today_tokens:0,total_tokens:0};
    state.aiChat.usageLoaded = false;
    state.realtime = {...state.realtime, ...(session?.realtime || {}), identity: null, friends: [], friendRequests: []};
    state.accountMode = 'login';
    renderNotificationSession();
    renderNotificationBadge();
    renderAccountSession();
    renderCloudSession();
    renderTranslatorSession();
    renderTranslator();
    renderNotesSession();
    renderNoteShareSession();
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
  if (state.notificationOpen) closeNotificationPage();
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.notesOpen) closeNotesPage();
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

function openAccountService(event) {
  const card = event.target.closest('[data-account-service]');
  if (!card) return;
  const destinations = {
    chat: openChatPage,
    cloud: openCloudPage,
    notes: openNotesPage,
    sharing: openShareManagementPage,
    translator: openTranslatorPage,
    ai: openAIChatPage
  };
  const destination = destinations[card.dataset.accountService];
  if (destination) void destination();
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
  if (state.notificationOpen) closeNotificationPage();
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.notesOpen) closeNotesPage();
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
  if (state.notificationOpen) closeNotificationPage();
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.notesOpen) closeNotesPage();
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
  if (!id || !await showAppConfirm(t('confirmDeleteTranslation'), {title:t('delete'),danger:true})) return;
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
  if (!ids.length || !await showAppConfirm(t('confirmBatchDeleteTranslation', {count: ids.length}), {title:t('batchDelete'),danger:true})) return;
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

const fishingFish = [
  {id:'crucian', emoji:'🐟', zh:'小鲫鱼', en:'Crucian Carp', rarity:'common', weight:34, difficulty:1, duration:22, zone:28},
  {id:'carp', emoji:'🐠', zh:'锦鲤', en:'Koi', rarity:'common', weight:25, difficulty:1, duration:21, zone:27},
  {id:'perch', emoji:'🐟', zh:'河鲈', en:'River Perch', rarity:'rare', weight:17, difficulty:2, duration:19, zone:22},
  {id:'salmon', emoji:'🐡', zh:'银鳞鲑', en:'Silver Salmon', rarity:'rare', weight:12, difficulty:2, duration:18, zone:21},
  {id:'moonfish', emoji:'🐠', zh:'月光蝶鱼', en:'Moonlit Butterflyfish', rarity:'epic', weight:7, difficulty:3, duration:16, zone:17},
  {id:'koi-king', emoji:'🐉', zh:'赤焰龙鲤', en:'Crimson Dragon Koi', rarity:'legendary', weight:3, difficulty:4, duration:14, zone:13},
  {id:'star-whale', emoji:'🐋', zh:'星海幼鲸', en:'Starlight Calf', rarity:'legendary', weight:2, difficulty:4, duration:13, zone:12}
];

const fishingRods = [
  {id:'bamboo', emoji:'🎣', zh:'初学者竹竿', en:'Starter Bamboo Rod', rarity:'ordinary', statZh:'无额外加成', statEn:'No bonus', effect:{}},
  {id:'stream', emoji:'🎋', zh:'溪流轻竿', en:'Streamlight Rod', rarity:'ordinary', statZh:'咬钩速度 +7%', statEn:'Bite speed +7%', effect:{biteSpeed:7}},
  {id:'jade', emoji:'🪷', zh:'青釉浮光竿', en:'Jadeglow Rod', rarity:'excellent', statZh:'完美区 +7%', statEn:'Perfect zone +7%', effect:{perfectZone:7}},
  {id:'sail', emoji:'⛵', zh:'云帆轻竿', en:'Cloudsail Rod', rarity:'excellent', statZh:'稀有鱼概率 +12%', statEn:'Rare fish chance +12%', effect:{rareFish:12}},
  {id:'frost', emoji:'❄️', zh:'霜潮钓竿', en:'Frosttide Rod', rarity:'fine', statZh:'捕获进度 +10%', statEn:'Catch progress +10%', effect:{progress:10}},
  {id:'crystal', emoji:'🔮', zh:'绯晶钓竿', en:'Rosecrystal Rod', rarity:'fine', statZh:'张力抵抗 +14%', statEn:'Tension guard +14%', effect:{tensionGuard:14}},
  {id:'galaxy', emoji:'🌌', zh:'星河钓竿', en:'Starglade Rod', rarity:'epic', statZh:'稀有鱼概率 +36%', statEn:'Rare fish chance +36%', effect:{rareFish:36}},
  {id:'tide', emoji:'🌊', zh:'潮汐长竿', en:'Tidemaster Rod', rarity:'epic', statZh:'完美区 +18%', statEn:'Perfect zone +18%', effect:{perfectZone:18}},
  {id:'dragon', emoji:'🐉', zh:'龙鳞神竿', en:'Dragonscale Rod', rarity:'legendary', statZh:'捕获进度 +28%', statEn:'Catch progress +28%', effect:{progress:28}},
  {id:'sky', emoji:'🌠', zh:'天穹星竿', en:'Skyfall Rod', rarity:'legendary', statZh:'稀有鱼概率 +75%', statEn:'Rare fish chance +75%', effect:{rareFish:75}}
];

const fishingRodRarityKeys = {ordinary:'rodOrdinary', excellent:'rodExcellent', fine:'rodFine', epic:'rodEpic', legendary:'rodLegendary'};

function loadFishingJournal() {
  try {
    const value = JSON.parse(localStorage.getItem('workdayIsland.fishingJournal') || '{}');
    const rodIDs = ['bamboo', 'stream', 'jade', 'sail', 'frost', 'crystal', 'galaxy', 'tide', 'dragon', 'sky'];
    const ownedRods = Array.isArray(value.ownedRods) ? value.ownedRods.filter(id => rodIDs.includes(id)) : ['bamboo'];
    if (!ownedRods.includes('bamboo')) ownedRods.unshift('bamboo');
    const equippedRod = rodIDs.includes(value.equippedRod) && ownedRods.includes(value.equippedRod) ? value.equippedRod : 'bamboo';
    return {
      catches: Array.isArray(value.catches) ? value.catches.slice(0, 30) : [],
      totalCaught: Math.max(0, Number(value.totalCaught) || 0),
      bestStreak: Math.max(0, Number(value.bestStreak) || 0),
      ownedRods,
      equippedRod
    };
  } catch (_) {
    return {catches: [], totalCaught: 0, bestStreak: 0, ownedRods:['bamboo'], equippedRod:'bamboo'};
  }
}

function saveFishingJournal() {
  try { localStorage.setItem('workdayIsland.fishingJournal', JSON.stringify(state.fishing.journal)); } catch (_) { /* Local journal is optional. */ }
}

function fishingFishName(fish) {
  return currentLanguage() === 'zh' ? fish?.zh : fish?.en;
}

function fishingRarityLabel(rarity) {
  const key = {common:'rarityCommon', rare:'rarityRare', epic:'rarityEpic', legendary:'rarityLegendary'}[rarity] || 'rarityCommon';
  return t(key);
}

function fishingRodName(rod) {
  return currentLanguage() === 'zh' ? rod?.zh : rod?.en;
}

function fishingRodRarityLabel(rarity) {
  return t(fishingRodRarityKeys[rarity] || 'rodOrdinary');
}

function fishingRodStat(rod) {
  return currentLanguage() === 'zh' ? (rod?.statZh || t('rodNoBonus')) : (rod?.statEn || t('rodNoBonus'));
}

function equippedFishingRod() {
  const journal = state.fishing.journal || {};
  return fishingRods.find(rod => rod.id === journal.equippedRod && journal.ownedRods?.includes(rod.id)) || fishingRods[0];
}

function chooseFishingFish(rod = equippedFishingRod()) {
  const rareBonus = Number(rod.effect?.rareFish) || 0;
  const weightedFish = fishingFish.map(fish => ({...fish, weight:fish.weight * (fish.rarity === 'common' ? 1 : 1 + rareBonus / 100)}));
  const total = weightedFish.reduce((sum, fish) => sum + fish.weight, 0);
  let draw = Math.random() * total;
  return weightedFish.find(fish => (draw -= fish.weight) <= 0) || weightedFish[0];
}

function renderFishingRods() {
  const journal = state.fishing?.journal;
  if (!journal || !$('#fishing-rod-select')) return;
  const rod = equippedFishingRod();
  const owned = new Set(journal.ownedRods || ['bamboo']);
  $('#fishing-equipped-rod-icon').textContent = rod.emoji;
  $('#fishing-equipped-rarity').textContent = fishingRodRarityLabel(rod.rarity);
  $('#fishing-equipped-rarity').className = `fishing-equipped-rarity ${rod.rarity}`;
  $('#fishing-equipped-name').textContent = fishingRodName(rod);
  $('#fishing-equipped-stat').textContent = fishingRodStat(rod);
  const select = $('#fishing-rod-select');
  select.innerHTML = fishingRods.map(item => `<option value="${item.id}" ${owned.has(item.id) ? '' : 'disabled'}>${item.emoji} ${fishingRodName(item)} · ${owned.has(item.id) ? fishingRodRarityLabel(item.rarity) : '🔒'}</option>`).join('');
  select.value = rod.id;
  select.disabled = ['waiting', 'reeling'].includes(state.fishing.phase);
  $('#fishing-rod-progress').textContent = `${t('rodCollection', {owned:owned.size, total:fishingRods.length})} · ${t('rodDropRates')}`;
}

function equipFishingRod(event) {
  const id = event.target.value;
  const journal = state.fishing.journal;
  if (!journal.ownedRods.includes(id) || ['waiting', 'reeling'].includes(state.fishing.phase)) {
    renderFishingRods();
    return;
  }
  journal.equippedRod = id;
  saveFishingJournal();
  renderFishingRods();
  showToast(`${fishingRodName(equippedFishingRod())} · ${fishingRodStat(equippedFishingRod())}`);
}

function tryUnlockFishingRod() {
  const roll = Math.random();
  const rarity = roll < .0003 ? 'legendary' : roll < .0013 ? 'epic' : roll < .0048 ? 'fine' : roll < .0148 ? 'excellent' : roll < .0748 ? 'ordinary' : '';
  if (!rarity) return null;
  const pool = fishingRods.filter(rod => rod.rarity === rarity && !state.fishing.journal.ownedRods.includes(rod.id));
  if (!pool.length) return null;
  const rod = pool[Math.floor(Math.random() * pool.length)];
  state.fishing.journal.ownedRods.push(rod.id);
  return rod;
}

function changeFishingTab(event) {
  const button = event.target.closest('[data-fishing-tab]');
  const tab = button?.dataset.fishingTab;
  if (!tab || tab === state.fishing.tab) return;
  window.clearTimeout(fishingWaitTimer);
  window.cancelAnimationFrame(fishingAnimationFrame);
  window.cancelAnimationFrame(slackingAnimationFrame);
  fishingWaitTimer = 0;
  fishingAnimationFrame = 0;
  slackingAnimationFrame = 0;
  state.fishing.phase = 'idle';
  state.fishing.slack.phase = 'idle';
  state.fishing.tab = tab === 'slacking' ? 'slacking' : 'fishing';
  renderFishingTabs();
}

function renderFishingTabs() {
  const slacking = state.fishing.tab === 'slacking';
  $('#fishing-layout').classList.toggle('slacking-active', slacking);
  $('#fishing-tabs').querySelectorAll('[data-fishing-tab]').forEach(button => button.classList.toggle('active', button.dataset.fishingTab === state.fishing.tab));
  $('.fishing-lake-panel').classList.toggle('hidden', slacking);
  $('#slacking-panel').classList.toggle('hidden', !slacking);
  $('.fishing-guide-panel').classList.toggle('hidden', slacking);
  if (slacking) renderSlackingIdle(); else renderFishingIdle();
}

function slackingCompanion() {
  const catches = state.fishing.journal?.catches || [];
  const index = Math.max(0, Math.min(catches.length - 1, Number(state.fishing.slack.selectedCatch) || 0));
  const caught = catches[index];
  return caught ? {caught, fish:fishingFish.find(item => item.id === caught.fishId) || fishingFish[0], index} : null;
}

function slackingPerk(fish) {
  const perks = {
    common: {zone:4, progress:0, guard:0, zh:'安全空档 +4%', en:'Safe window +4%'},
    rare: {zone:9, progress:0, guard:8, zh:'安全空档 +9%，警觉抵抗 +8%', en:'Safe window +9%, alert guard +8%'},
    epic: {zone:12, progress:15, guard:12, zh:'摸鱼进度 +15%，警觉抵抗 +12%', en:'Slack progress +15%, alert guard +12%'},
    legendary: {zone:18, progress:25, guard:18, zh:'安全空档 +18%，摸鱼进度 +25%', en:'Safe window +18%, slack progress +25%'}
  };
  return perks[fish?.rarity] || perks.common;
}

function renderSlackingCompanion() {
  const select = $('#slacking-fish-select');
  const catches = state.fishing.journal?.catches || [];
  const action = $('#slacking-action');
  if (!catches.length) {
    select.innerHTML = `<option value="">${escapeHTML(t('slackingNeedFish'))}</option>`;
    select.disabled = true;
    action.disabled = true;
    $('#slacking-companion-name').textContent = '—';
    $('#slacking-companion-rarity').textContent = '—';
    $('#slacking-companion-perk').textContent = t('slackingNeedFish');
    $('#slacking-companion-emoji').textContent = '🐟';
    return null;
  }
  const companion = slackingCompanion();
  select.innerHTML = catches.map((caught, index) => {
    const fish = fishingFish.find(item => item.id === caught.fishId) || fishingFish[0];
    return `<option value="${index}">${fish.emoji} ${escapeHTML(fishingFishName(fish))} · ${escapeHTML(fishingRarityLabel(fish.rarity))}</option>`;
  }).join('');
  select.value = String(companion.index);
  select.disabled = state.fishing.slack.phase === 'active';
  const perk = slackingPerk(companion.fish);
  $('#slacking-companion-card').className = `slacking-companion-card ${companion.fish.rarity}`;
  $('#slacking-companion-card > span').textContent = companion.fish.emoji;
  $('#slacking-companion-emoji').textContent = companion.fish.emoji;
  $('#slacking-companion-rarity').textContent = fishingRarityLabel(companion.fish.rarity);
  $('#slacking-companion-name').textContent = fishingFishName(companion.fish);
  $('#slacking-companion-perk').textContent = currentLanguage() === 'zh' ? perk.zh : perk.en;
  action.disabled = false;
  return {companion, perk};
}

function renderSlackingMeters() {
  const game = state.fishing.slack;
  const progress = Math.max(0, Math.min(100, Math.round(game.progress)));
  const exposure = Math.max(0, Math.min(100, Math.round(game.exposure)));
  $('#slacking-progress-bar').style.width = `${progress}%`;
  $('#slacking-progress-value').textContent = `${progress}%`;
  $('#slacking-exposure-bar').style.width = `${exposure}%`;
  $('#slacking-exposure-value').textContent = `${exposure}%`;
}

function renderSlackingIdle() {
  const game = state.fishing.slack;
  game.phase = 'idle';
  game.progress = 0;
  game.exposure = 0;
  game.streak = 0;
  $('#slacking-result').classList.add('hidden');
  $('#slacking-timer').classList.add('hidden');
  $('#slacking-status').textContent = t('slackingHint');
  renderSlackingCompanion();
  renderSlackingMeters();
  $('#slacking-action').querySelector('b').textContent = t('startSlacking');
}

function changeSlackingCompanion(event) {
  if (state.fishing.slack.phase === 'active') return;
  state.fishing.slack.selectedCatch = Number(event.target.value) || 0;
  renderSlackingCompanion();
}

function relocateSlackingWindow(perk) {
  const game = state.fishing.slack;
  const width = Math.min(52, 22 + perk.zone);
  game.targetWidth = width;
  game.targetStart = 5 + Math.random() * (90 - width);
  $('#slacking-safe-zone').style.left = `${game.targetStart}%`;
  $('#slacking-safe-zone').style.width = `${width}%`;
}

function startSlackingRound() {
  const data = renderSlackingCompanion();
  if (!data) { showToast(t('slackingNeedFish'), true); return; }
  const game = state.fishing.slack;
  game.phase = 'active';
  game.progress = 0;
  game.exposure = 0;
  game.streak = 0;
  game.startedAt = performance.now();
  game.deadline = game.startedAt + 18000;
  game.perk = data.perk;
  $('#slacking-status').textContent = t('slackingNow');
  $('#slacking-result').classList.add('hidden');
  $('#slacking-timer').classList.remove('hidden');
  $('#slacking-action').querySelector('b').textContent = t('slackingNow');
  renderSlackingCompanion();
  relocateSlackingWindow(data.perk);
  renderSlackingMeters();
  slackingAnimationFrame = window.requestAnimationFrame(updateSlackingFrame);
}

function updateSlackingFrame(now) {
  const game = state.fishing.slack;
  if (!state.fishingOpen || state.fishing.tab !== 'slacking' || game.phase !== 'active') return;
  const cycle = ((now - game.startedAt) * (58 + game.progress * .16) / 1000) % 200;
  game.marker = cycle <= 100 ? cycle : 200 - cycle;
  $('#slacking-marker').style.left = `${game.marker}%`;
  const remaining = Math.max(0, game.deadline - now);
  $('#slacking-timer').textContent = `${(remaining / 1000).toFixed(1)}s`;
  if (remaining <= 0) { finishSlackingRound(false, 'timeout'); return; }
  slackingAnimationFrame = window.requestAnimationFrame(updateSlackingFrame);
}

function handleSlackingAction() {
  const game = state.fishing.slack;
  if (game.phase !== 'active') { startSlackingRound(); return; }
  const start = game.targetStart;
  const end = start + game.targetWidth;
  const innerStart = start + game.targetWidth * .28;
  const innerEnd = end - game.targetWidth * .28;
  if (game.marker >= innerStart && game.marker <= innerEnd) {
    game.streak += 1;
    game.progress += (28 + Math.min(12, game.streak * 2)) * (1 + game.perk.progress / 100);
    game.exposure = Math.max(0, game.exposure - 12);
    $('#slacking-result').textContent = t('slackingPerfect');
    $('#slacking-result').className = 'slacking-result perfect';
  } else if (game.marker >= start && game.marker <= end) {
    game.streak = 0;
    game.progress += 14 * (1 + game.perk.progress / 100);
    $('#slacking-result').textContent = t('slackingGood');
    $('#slacking-result').className = 'slacking-result';
  } else {
    game.streak = 0;
    game.exposure += 27 * (1 - game.perk.guard / 100);
    $('#slacking-result').textContent = t('slackingMiss');
    $('#slacking-result').className = 'slacking-result danger';
  }
  renderSlackingMeters();
  if (game.progress >= 100) { finishSlackingRound(true); return; }
  if (game.exposure >= 100) { finishSlackingRound(false, 'caught'); return; }
  relocateSlackingWindow(game.perk);
}

function finishSlackingRound(success, reason = 'caught') {
  const game = state.fishing.slack;
  window.cancelAnimationFrame(slackingAnimationFrame);
  slackingAnimationFrame = 0;
  game.phase = success ? 'success' : reason;
  $('#slacking-timer').classList.add('hidden');
  $('#slacking-status').textContent = t(success ? 'slackingSuccess' : reason === 'timeout' ? 'slackingTimeout' : 'slackingCaught');
  $('#slacking-result').textContent = $('#slacking-status').textContent;
  $('#slacking-result').className = `slacking-result ${success ? 'success' : 'danger'}`;
  $('#slacking-action').querySelector('b').textContent = t('startSlacking');
  state.fishing.journal.lastSlackingAt = new Date().toISOString();
  saveFishingJournal();
  renderSlackingCompanion();
}

function renderFishingJournal() {
  const journal = state.fishing?.journal;
  if (!journal || !$('#fishing-catch-list')) return;
  $('#fishing-total-caught').textContent = String(journal.totalCaught || 0);
  $('#fishing-best-streak').textContent = String(journal.bestStreak || 0);
  const list = $('#fishing-catch-list');
  if (!journal.catches.length) {
    list.innerHTML = `<div class="fishing-catch-empty">${escapeHTML(t('noFishingCatch')).replace(/\n/g, '<br>')}</div>`;
    return;
  }
  list.innerHTML = journal.catches.map(caught => {
    const fish = fishingFish.find(item => item.id === caught.fishId) || fishingFish[0];
    const time = new Date(caught.caughtAt || Date.now()).toLocaleTimeString(locale(), {hour:'2-digit', minute:'2-digit'});
    return `<article class="fishing-catch-item"><span>${fish.emoji}</span><div><strong>${escapeHTML(fishingFishName(fish))}</strong><small>${escapeHTML(time)}</small></div><em>${escapeHTML(fishingRarityLabel(fish.rarity))}</em></article>`;
  }).join('');
}

function setFishingAction(labelKey, disabled = false) {
  const button = $('#fishing-action');
  button.disabled = disabled;
  button.querySelector('b').textContent = t(labelKey);
}

function renderFishingMeters() {
  const game = state.fishing;
  const progress = Math.max(0, Math.min(100, Math.round(game.progress)));
  const tension = Math.max(0, Math.min(100, Math.round(game.tension)));
  $('#fishing-progress-bar').style.width = `${progress}%`;
  $('#fishing-progress-value').textContent = `${progress}%`;
  $('#fishing-tension-bar').style.width = `${tension}%`;
  $('#fishing-tension-value').textContent = `${tension}%`;
}

function relocateFishingTarget() {
  const width = Math.min(48, (state.fishing.fish?.zone || 24) + (Number(state.fishing.rod?.effect?.perfectZone) || 0));
  state.fishing.targetWidth = width;
  state.fishing.targetStart = 5 + Math.random() * (90 - width);
  const zone = $('#fishing-perfect-zone');
  zone.style.left = `${state.fishing.targetStart}%`;
  zone.style.width = `${width}%`;
}

function showFishingResult(message, kind = '') {
  const result = $('#fishing-result');
  result.textContent = message;
  result.className = `fishing-result${kind ? ` ${kind}` : ''}`;
}

function playFishingFx(effect, fish = state.fishing.fish) {
  const fx = $('#fishing-fx');
  if (!fx) return;
  window.clearTimeout(fishingFxTimer);
  $('#fishing-catch-emoji').textContent = fish?.emoji || '🐟';
  fx.className = 'fishing-fx';
  // Force a new animation even when the player lands the same timing twice.
  void fx.offsetWidth;
  fx.classList.add(`fx-${effect}`);
  fishingFxTimer = window.setTimeout(() => { fx.className = 'fishing-fx'; }, effect === 'caught' ? 1100 : 620);
}

async function openFishingPage() {
  const membership = resolveAccountMembership(state.account?.user);
  if (!state.account?.loggedIn || membership.rank < 1) {
    showToast(t('fishingMembersOnly'), true);
    return;
  }
  if (state.notificationOpen) closeNotificationPage();
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.notesOpen) closeNotesPage();
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.stockOpen) await closeStockPage();
  if (state.englishOpen || state.englishCenterOpen) await closeEnglishPage();
  state.fishingOpen = true;
  document.body.classList.add('fishing-open');
  $('#fishing-page').classList.remove('hidden');
  $('#open-fishing').classList.add('active');
  renderFishingJournal();
  renderFishingRods();
  renderFishingTabs();
}

function closeFishingPage() {
  if (!state.fishingOpen) return;
  window.clearTimeout(fishingWaitTimer);
  window.cancelAnimationFrame(fishingAnimationFrame);
  window.cancelAnimationFrame(slackingAnimationFrame);
  fishingWaitTimer = 0;
  fishingAnimationFrame = 0;
  slackingAnimationFrame = 0;
  state.fishingOpen = false;
  state.fishing.phase = 'idle';
  state.fishing.slack.phase = 'idle';
  document.body.classList.remove('fishing-open');
  $('#fishing-page').classList.add('hidden');
  $('#open-fishing').classList.remove('active');
}

function renderFishingIdle() {
  const game = state.fishing;
  game.phase = 'idle';
  game.fish = null;
  game.progress = 0;
  game.tension = 0;
  game.streak = 0;
  game.rod = equippedFishingRod();
  $('#fishing-phase-label').textContent = t('fishingReady');
  $('#fishing-status-text').textContent = t('fishingReadyHint');
  $('#fishing-timer').classList.add('hidden');
  $('#fishing-target-card').classList.add('hidden');
  $('#fishing-result').classList.add('hidden');
  $('#fishing-float').className = 'fishing-float';
  $('#fishing-shadow').classList.remove('active');
  $('#fishing-fx').className = 'fishing-fx';
  renderFishingMeters();
  renderFishingRods();
  setFishingAction('startFishing');
}

function startFishingRound() {
  if (!state.fishingOpen) return;
  window.clearTimeout(fishingWaitTimer);
  window.cancelAnimationFrame(fishingAnimationFrame);
  const game = state.fishing;
  game.rod = equippedFishingRod();
  game.phase = 'waiting';
  game.fish = chooseFishingFish(game.rod);
  game.progress = 0;
  game.tension = 0;
  game.streak = 0;
  $('#fishing-phase-label').textContent = t('waitingForFish');
  $('#fishing-status-text').textContent = t('waitingHint');
  $('#fishing-timer').classList.add('hidden');
  $('#fishing-target-card').classList.add('hidden');
  $('#fishing-result').classList.add('hidden');
  $('#fishing-float').className = 'fishing-float waiting';
  $('#fishing-shadow').classList.remove('active');
  playFishingFx('cast', game.fish);
  setFishingAction('waitingForFish', true);
  renderFishingMeters();
  renderFishingRods();
  fishingWaitTimer = window.setTimeout(beginFishingReel, (1600 + Math.random() * 2600) * (1 - (Number(game.rod.effect?.biteSpeed) || 0) / 100));
}

function beginFishingReel() {
  if (!state.fishingOpen || state.fishing.phase !== 'waiting') return;
  const game = state.fishing;
  game.phase = 'reeling';
  game.startedAt = performance.now();
  game.deadline = game.startedAt + game.fish.duration * 1000;
  $('#fishing-phase-label').textContent = t('fishBiting');
  $('#fishing-status-text').textContent = t('fishBitingHint');
  $('#fishing-timer').classList.remove('hidden');
  $('#fishing-target-card').classList.remove('hidden');
  $('#fishing-rarity').textContent = fishingRarityLabel(game.fish.rarity).toUpperCase();
  $('#fishing-rarity').className = game.fish.rarity;
  $('#fishing-fish-name').textContent = fishingFishName(game.fish);
  $('#fishing-fish-hint').textContent = t('fishBitingHint');
  $('#fishing-float').className = 'fishing-float bite';
  $('#fishing-shadow').textContent = game.fish.emoji;
  $('#fishing-shadow').classList.add('active');
  playFishingFx('bite', game.fish);
  relocateFishingTarget();
  renderFishingMeters();
  setFishingAction('reelNow');
  fishingAnimationFrame = window.requestAnimationFrame(updateFishingFrame);
}

function updateFishingFrame(now) {
  if (!state.fishingOpen || state.fishing.phase !== 'reeling') return;
  const game = state.fishing;
  const speed = 64 + game.fish.difficulty * 15 + Math.min(24, game.progress * .12);
  const cycle = ((now - game.startedAt) * speed / 1000) % 200;
  game.marker = cycle <= 100 ? cycle : 200 - cycle;
  $('#fishing-timing-marker').style.left = `${game.marker}%`;
  const remaining = Math.max(0, game.deadline - now);
  $('#fishing-timer').textContent = `${(remaining / 1000).toFixed(1)}s`;
  if (remaining <= 0) {
    finishFishingRound(false, 'timeout');
    return;
  }
  fishingAnimationFrame = window.requestAnimationFrame(updateFishingFrame);
}

function handleFishingAction() {
  if (!state.fishingOpen) return;
  const game = state.fishing;
  if (game.phase === 'idle' || game.phase === 'caught' || game.phase === 'escaped') {
    startFishingRound();
    return;
  }
  if (game.phase !== 'reeling') return;
  const zoneStart = game.targetStart;
  const zoneEnd = zoneStart + game.targetWidth;
  const innerStart = zoneStart + game.targetWidth * .28;
  const innerEnd = zoneEnd - game.targetWidth * .28;
  if (game.marker >= innerStart && game.marker <= innerEnd) {
    game.streak += 1;
    game.progress += (27 + Math.min(12, game.streak * 2)) * (1 + (Number(game.rod?.effect?.progress) || 0) / 100);
    game.tension = Math.max(0, game.tension - 12);
    showFishingResult(t('fishingPerfect'), 'perfect');
    playFishingFx('perfect', game.fish);
  } else if (game.marker >= zoneStart && game.marker <= zoneEnd) {
    game.streak = 0;
    game.progress += 14 * (1 + (Number(game.rod?.effect?.progress) || 0) / 100);
    game.tension = Math.max(0, game.tension - 4);
    showFishingResult(t('fishingGood'));
    playFishingFx('good', game.fish);
  } else {
    game.streak = 0;
    game.progress = Math.max(0, game.progress - 7);
    game.tension += (23 + game.fish.difficulty * 3) * (1 - (Number(game.rod?.effect?.tensionGuard) || 0) / 100);
    showFishingResult(t('fishingMiss'), 'escaped');
    playFishingFx('miss', game.fish);
  }
  renderFishingMeters();
  if (game.progress >= 100) {
    finishFishingRound(true);
    return;
  }
  if (game.tension >= 100) {
    finishFishingRound(false, 'escaped');
    return;
  }
  relocateFishingTarget();
}

function finishFishingRound(caught, reason = 'escaped') {
  const game = state.fishing;
  window.cancelAnimationFrame(fishingAnimationFrame);
  fishingAnimationFrame = 0;
  $('#fishing-timer').classList.add('hidden');
  $('#fishing-target-card').classList.add('hidden');
  $('#fishing-float').className = 'fishing-float';
  $('#fishing-shadow').classList.remove('active');
  if (caught) {
    game.phase = 'caught';
    game.progress = 100;
    game.journal.totalCaught += 1;
    game.journal.bestStreak = Math.max(game.journal.bestStreak, game.streak);
    game.journal.catches.unshift({fishId:game.fish.id, caughtAt:new Date().toISOString(), streak:game.streak});
    game.journal.catches = game.journal.catches.slice(0, 30);
    const rodDrop = tryUnlockFishingRod();
    saveFishingJournal();
    renderFishingJournal();
    renderFishingRods();
    $('#fishing-phase-label').textContent = t('fishingCaught', {name:fishingFishName(game.fish)});
    $('#fishing-status-text').textContent = `${game.fish.emoji} ${fishingFishName(game.fish)} · ${fishingRarityLabel(game.fish.rarity)}`;
    showFishingResult(`${t('fishingCaught', {name:fishingFishName(game.fish)})}${rodDrop ? `\n${t('rodUnlocked', {rarity:fishingRodRarityLabel(rodDrop.rarity), name:fishingRodName(rodDrop)})}` : ''}`, 'caught');
    playFishingFx('caught', game.fish);
  } else {
    game.phase = 'escaped';
    const key = reason === 'timeout' ? 'fishingTimeout' : 'fishingEscaped';
    $('#fishing-phase-label').textContent = t(key, {name:fishingFishName(game.fish)});
    $('#fishing-status-text').textContent = t('fishingReadyHint');
    showFishingResult(t(key, {name:fishingFishName(game.fish)}), 'escaped');
    playFishingFx('escaped', game.fish);
  }
  renderFishingMeters();
  renderFishingRods();
  setFishingAction('startFishing');
}

function clearFishingJournal() {
  if (!state.fishing.journal.catches.length) return;
  if (!window.confirm(t('clearFishingLogConfirm'))) return;
  state.fishing.journal = {...state.fishing.journal, catches:[], totalCaught:0, bestStreak:0};
  saveFishingJournal();
  renderFishingJournal();
  showToast(t('fishingLogCleared'));
}

async function openStockPage() {
  if (state.notificationOpen) closeNotificationPage();
  if (state.windowFullscreen) await setWindowFullscreen(false);
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.notesOpen) closeNotesPage();
  if (state.aiChatOpen) closeAIChatPage();
  if (state.accountOpen) closeAccountPage();
  if (state.chatOpen) closeChatPage();
  if (state.cloudOpen) closeCloudPage();
  if (state.translatorOpen) closeTranslatorPage();
  if (state.englishOpen || state.englishCenterOpen) await closeEnglishPage();
  state.stockOpen = true;
  state.stockCompact = false;
  document.documentElement.classList.remove('stock-window');
  document.body.classList.add('stock-open');
  document.body.classList.remove('stock-compact');
  $('#stock-page').classList.remove('hidden');
  renderStockCompactControl();
  await refreshStocks();
  window.clearInterval(stockRefreshTimer);
  stockRefreshTimer = window.setInterval(refreshStocks, 5000);
}

async function closeStockPage() {
  state.stockOpen = false;
  state.stockCompact = false;
  window.clearInterval(stockRefreshTimer);
  stockRefreshTimer = 0;
  document.documentElement.classList.remove('stock-window');
  document.body.classList.remove('stock-open');
  document.body.classList.remove('stock-compact');
  $('#stock-page').classList.add('hidden');
  try {
    await api.SetStockWindow?.(false);
  } catch (error) {
    showToast(readError(error), true);
  }
}

async function toggleStockCompactMode() {
  if (!state.stockOpen) return;
  if (state.windowFullscreen) await setWindowFullscreen(false);
  const compact = !state.stockCompact;
  state.stockCompact = compact;
  document.documentElement.classList.toggle('stock-window', compact);
  document.body.classList.toggle('stock-compact', compact);
  renderStockCompactControl();
  try {
    await api.SetStockWindow?.(compact);
  } catch (error) {
    state.stockCompact = !compact;
    document.documentElement.classList.toggle('stock-window', state.stockCompact);
    document.body.classList.toggle('stock-compact', state.stockCompact);
    renderStockCompactControl();
    showToast(readError(error), true);
  }
}

function renderStockCompactControl() {
  const button = $('#compact-stocks');
  if (!button) return;
  const key = state.stockCompact ? 'expand' : 'compact';
  button.querySelector('span').textContent = t(key);
  button.setAttribute('aria-label', t(key));
  button.title = t(key);
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
  if (state.notificationOpen) closeNotificationPage();
  if (state.shareManagementOpen) closeShareManagementPage();
  if (state.notesOpen) closeNotesPage();
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
  if (state.windowFullscreen) await setWindowFullscreen(false);
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
  const chatAvailable = online && validPeer && !realtimeBusy;
  $('#chat-input').disabled = !chatAvailable;
  $('#send-chat').disabled = !chatAvailable;
  $('#chat-emoji-toggle').disabled = !chatAvailable;
  if (!chatAvailable) chatEmojiPickerOpen = false;
  $('#chat-emoji-picker').classList.toggle('hidden', !chatEmojiPickerOpen);
  $('#chat-emoji-toggle').setAttribute('aria-expanded', String(chatEmojiPickerOpen));
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
    const emoji = findChatEmoji(message.text);
    return `<article class="chat-message ${message.outgoing ? 'outgoing' : ''} ${emoji ? 'emoji-only' : ''}" data-message-id="${escapeHTML(message.messageId)}">
      <div class="chat-bubble">${emoji ? `<span class="chat-message-emoji emoji-motion-${emoji.motion}" role="img" aria-label="${escapeHTML(locale().startsWith('zh') ? emoji.zh : emoji.en)}">${emoji.emoji}</span>` : escapeHTML(message.text)}</div>
      <div class="chat-message-meta">${escapeHTML(time)}${delivery ? ` · ${delivery}` : ''}</div>
    </article>`;
  }).join('');
  requestAnimationFrame(() => { list.scrollTop = list.scrollHeight; });
}

function initialiseChatEmojiPicker() {
  const grid = $('#chat-emoji-grid');
  grid.innerHTML = chatEmojiCatalog.map(item => `<button type="button" role="listitem" data-chat-emoji="${item.emoji}" class="emoji-motion-${item.motion}" title="${escapeHTML(locale().startsWith('zh') ? item.zh : item.en)}" aria-label="${escapeHTML(locale().startsWith('zh') ? item.zh : item.en)}">${item.emoji}</button>`).join('');
  $('#chat-emoji-toggle').addEventListener('click', () => {
    if ($('#chat-emoji-toggle').disabled) return;
    chatEmojiPickerOpen = !chatEmojiPickerOpen;
    $('#chat-emoji-picker').classList.toggle('hidden', !chatEmojiPickerOpen);
    $('#chat-emoji-toggle').setAttribute('aria-expanded', String(chatEmojiPickerOpen));
  });
  grid.addEventListener('click', event => {
    const button = event.target.closest('[data-chat-emoji]');
    if (!button || button.disabled) return;
    $('#chat-input').value = button.dataset.chatEmoji;
    chatEmojiPickerOpen = false;
    $('#chat-emoji-picker').classList.add('hidden');
    $('#chat-emoji-toggle').setAttribute('aria-expanded', 'false');
    $('#chat-form').requestSubmit();
  });
}

function findChatEmoji(text) {
  const value = String(text || '').trim();
  return chatEmojiCatalog.find(item => item.emoji === value) || null;
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
    if (!userID || !await showAppConfirm(t('removeFriendConfirm', {name: friendDisplayName(friend?.user)}), {title:t('removeFriend'),danger:true})) return;
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
  if (!await showAppConfirm(t('resetConfirm'), {title:t('resetIdentity'),danger:true})) return;
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
	state.settings.headerEntries = normaliseHeaderEntries(state.settings.headerEntries);
	$$('[data-header-entry]').forEach(input => { input.checked = state.settings.headerEntries[input.dataset.headerEntry]; });
  $('#work-start').value = state.settings.workStart;
  $('#work-end').value = state.settings.workEnd;
  $('#monthly-salary').value = state.settings.monthlySalary || '';
  $('#salary-workdays').value = state.settings.salaryWorkdays || 21.75;
  $('#weather-city-input').value = state.settings.weatherCity || '上海';
  $('#language-select').value = state.settings.language || 'system';
  renderThemeAccess();
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
	const headerEntries = Object.fromEntries($$('[data-header-entry]').map(input => [input.dataset.headerEntry, input.checked]));
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
    compactHeight: state.settings.compactHeight || 350,
		headerEntries: normaliseHeaderEntries(headerEntries)
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
    if (compact && state.windowFullscreen) await setWindowFullscreen(false);
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

function applyHeaderEntryVisibility() {
  state.settings.headerEntries = normaliseHeaderEntries(state.settings.headerEntries);
  headerEntryDefinitions.forEach(([key, selector]) => {
    $(selector)?.classList.toggle('header-entry-hidden', !state.settings.headerEntries[key]);
  });
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
  const requested = effectiveTheme();
  const resolved = requested === 'system' ? (systemTheme?.matches ? 'light' : 'dark') : requested;
  const brightMemberTheme = ['plus-light', 'pro-light', 'ultra-light'].includes(resolved) ? resolved : '';
  document.documentElement.dataset.theme = brightMemberTheme ? 'light' : resolved;
  if (brightMemberTheme) document.documentElement.dataset.memberTheme = brightMemberTheme;
  else delete document.documentElement.dataset.memberTheme;
  document.documentElement.style.colorScheme = brightMemberTheme || resolved === 'light' ? 'light' : 'dark';
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = brightMemberTheme === 'plus-light' ? '#fff4f6' : brightMemberTheme === 'pro-light' ? '#eefaff' : brightMemberTheme === 'ultra-light' ? '#f7f9ff' : resolved === 'light' ? '#edf3fb' : resolved === 'aurora' ? '#071723' : resolved === 'plus-theme' ? '#160d24' : resolved === 'pro-theme' ? '#061825' : resolved === 'ultra-theme' ? '#050711' : '#0b101b';
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

function openFeedbackModal() {
  closeModal('about-modal');
  updateFeedbackCounter();
  openModal('feedback-modal');
  requestAnimationFrame(() => $('#feedback-subject').focus());
}

function updateFeedbackCounter() {
  $('#feedback-counter').textContent = `${[...$('#feedback-content').value].length} / 5000`;
}

async function submitPublicFeedback(event) {
  event.preventDefault();
  const title = $('#feedback-subject').value.trim();
  const content = $('#feedback-content').value.trim();
  if (!title) { showToast(t('feedbackSubjectRequired'), true); $('#feedback-subject').focus(); return; }
  if (!content) { showToast(t('feedbackContentRequired'), true); $('#feedback-content').focus(); return; }
  const button = $('#submit-feedback');
  const previousLabel = button.textContent;
  button.disabled = true;
  button.textContent = t('submittingFeedback');
  try {
    const result = await api.SubmitPublicFeedback({
      feedbackType: $('#feedback-type').value,
      title,
      content,
      contact: $('#feedback-contact').value.trim()
    });
    closeModal('feedback-modal');
    $('#feedback-form').reset();
    updateFeedbackCounter();
    showToast(result?.id ? t('feedbackSubmitted', {id: result.id}) : t('feedbackSubmittedNoID'));
  } catch (error) {
    showToast(readError(error), true);
  } finally {
    button.disabled = false;
    button.textContent = previousLabel;
  }
}

function weatherLabel(code) {
  const labels = currentLanguage() === 'zh'
    ? {0:'晴朗',1:'大致晴朗',2:'多云',3:'阴天',45:'有雾',48:'雾凇',51:'小毛毛雨',53:'毛毛雨',55:'大毛毛雨',56:'冻毛毛雨',57:'强冻毛毛雨',61:'小雨',63:'中雨',65:'大雨',66:'冻雨',67:'强冻雨',71:'小雪',73:'中雪',75:'大雪',77:'米雪',80:'小阵雨',81:'阵雨',82:'强阵雨',85:'小阵雪',86:'强阵雪',95:'雷暴',96:'雷暴伴冰雹',99:'强雷暴伴冰雹'}
    : {0:'Clear',1:'Mostly clear',2:'Partly cloudy',3:'Overcast',45:'Foggy',48:'Rime fog',51:'Light drizzle',53:'Drizzle',55:'Heavy drizzle',56:'Freezing drizzle',57:'Heavy freezing drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',66:'Freezing rain',67:'Heavy freezing rain',71:'Light snow',73:'Snow',75:'Heavy snow',77:'Snow grains',80:'Light showers',81:'Showers',82:'Heavy showers',85:'Snow showers',86:'Heavy snow showers',95:'Thunderstorm',96:'Thunderstorm with hail',99:'Heavy thunderstorm with hail'};
  return labels[Number(code)] || '';
}

function openModal(id) { $(`#${id}`).classList.remove('hidden'); }

function showAppConfirm(message, options = {}) {
  return openAppDialog('confirm', message, '', options);
}

function showAppPrompt(message, value = '', options = {}) {
  return openAppDialog('prompt', message, value, options);
}

function openAppDialog(mode, message, value, options) {
  if (appDialogResolve) appDialogResolve(appDialogMode === 'confirm' ? false : null);
  appDialogMode = mode;
  $('#app-dialog-kicker').textContent = mode === 'prompt' ? 'INPUT' : 'CONFIRM';
  $('#app-dialog-title').textContent = options.title || (mode === 'prompt' ? '请输入' : '请确认');
  $('#app-dialog-message').textContent = message || '';
  $('#app-dialog-message').classList.toggle('hidden', !message);
  $('#app-dialog-input-row').classList.toggle('hidden', mode !== 'prompt');
  $('#app-dialog-input-label').textContent = options.label || '请输入内容';
  $('#app-dialog-input').value = value || '';
  $('#app-dialog-submit').textContent = options.confirmText || '确定';
  $('#app-dialog-submit').classList.toggle('danger-primary-btn', Boolean(options.danger));
  $('#app-dialog-modal').classList.remove('hidden');
  if (mode === 'prompt') requestAnimationFrame(() => {
    $('#app-dialog-input').focus();
    $('#app-dialog-input').select();
  });
  else requestAnimationFrame(() => $('#app-dialog-submit').focus());
  return new Promise(resolve => { appDialogResolve = resolve; });
}

function submitAppDialog(event) {
  event.preventDefault();
  const value = appDialogMode === 'prompt' ? $('#app-dialog-input').value : true;
  settleAppDialog(value);
}

function settleAppDialog(value) {
  const resolve = appDialogResolve;
  appDialogResolve = null;
  $('#app-dialog-modal').classList.add('hidden');
  $('#app-dialog-submit').classList.remove('danger-primary-btn');
  resolve?.(value);
}

function closeModal(id) {
  $(`#${id}`).classList.add('hidden');
  if (id === 'app-dialog-modal' && appDialogResolve) settleAppDialog(appDialogMode === 'confirm' ? false : null);
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
  let previewNotes = [
    {id:'folder-work',parentId:'',kind:'folder',title:'工作',content:'',favorite:false,pinned:false,hasPassword:false,locked:false,createdAt:new Date(now.getTime()-18*86400000).toISOString(),updatedAt:now.toISOString()},
    {id:'note-report',parentId:'folder-work',kind:'note',title:'日报-2026年7月',content:'<h1>0702　周四</h1><p><strong>1、开发</strong>，通用报表项目与客户画像规则配置维护；完成接口联调、筛选配置和批量操作。</p><p>2、日常，整理项目文档与会议纪要，持续跟进问题闭环。</p><blockquote>记录每天的进展，也记录下一步要解决的问题。</blockquote><h2>0703　周五</h2><ul><li>完善云笔记编辑体验</li><li>补充自动保存与历史版本</li><li>完成 Windows 构建验证</li></ul>',favorite:true,pinned:true,hasPassword:false,locked:false,createdAt:new Date(now.getTime()-12*86400000).toISOString(),updatedAt:now.toISOString()},
    {id:'note-plan',parentId:'folder-work',kind:'note',title:'下半年产品规划',content:'<h1>目标</h1><p>让工位岛成为安静、可靠、随手可用的桌面工作空间。</p><h2>重点功能</h2><ol><li>AI 对话</li><li>云笔记</li><li>跨端文件与翻译</li></ol>',favorite:false,pinned:false,hasPassword:false,locked:false,createdAt:new Date(now.getTime()-8*86400000).toISOString(),updatedAt:new Date(now.getTime()-2*3600000).toISOString()},
    {id:'folder-study',parentId:'',kind:'folder',title:'学习',content:'',favorite:false,pinned:false,hasPassword:false,locked:false,createdAt:new Date(now.getTime()-7*86400000).toISOString(),updatedAt:new Date(now.getTime()-86400000).toISOString()},
    {id:'note-reading',parentId:'folder-study',kind:'note',title:'本周阅读清单',content:'<p>Keep it concise and clear.</p>',favorite:true,pinned:false,hasPassword:false,locked:false,createdAt:new Date(now.getTime()-4*86400000).toISOString(),updatedAt:new Date(now.getTime()-86400000).toISOString()}
  ];
  const previewNoteVersions = new Map();
  let previewNoteShares = [];
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
  let previewNotifications = [
    {id:1,title:'欢迎使用工位岛',content:'你的系统通知、业务动态和安全提醒会集中显示在这里。',notice_type:'SYSTEM',is_top:1,is_read:false,create_time:now.toISOString(),publish_time:now.toISOString()},
    {id:2,title:'账号安全提醒',content:'请妥善保管账号密码，不要向他人透露登录信息。',notice_type:'SECURITY',is_top:0,is_read:true,create_time:new Date(now.getTime()-3600000).toISOString(),publish_time:new Date(now.getTime()-3600000).toISOString()}
  ];
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
  let previewTrialInvitations = [{id:901,role_id:3,role_name:'工位岛 Plus 会员',role_code:'WORKDAY_ISLAND_PLUS',trial_days:7,status:'pending',expires_at:new Date(now.getTime()+3*86400000).toISOString(),remark:'欢迎体验会员功能'}];
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
    async LoginAccount(username,password){ if(!username||!password) throw new Error('请输入用户名和密码'); if(previewCloud.session.user?.username!==username)previewNoteShares=[]; previewRealtime.authMode='password'; previewRealtime.identity={userId:123,username,displayName:username==='justin'?'Justin':username,authMode:'password'}; previewRealtime.status='online'; previewRealtime.desiredOnline=true; previewRealtime.friends=[{user:{userId:456,username:'lisi',displayName:'李四',online:true},friendsSince:new Date().toISOString()}]; previewCloud.session={loggedIn:true,user:{id:123,username,nickname:previewRealtime.identity.displayName,membership_tier:'plus',roles:[{role_code:'WORKDAY_ISLAND_PLUS'}],avatar_url:'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x2=%221%22 y2=%221%22%3E%3Cstop stop-color=%22%236fe1c5%22/%3E%3Cstop offset=%221%22 stop-color=%22%2376aef5%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22100%22 height=%22100%22 rx=%2230%22 fill=%22url(%23g)%22/%3E%3Ccircle cx=%2250%22 cy=%2238%22 r=%2218%22 fill=%22%23fff%22 fill-opacity=%22.92%22/%3E%3Cpath d=%22M18 92c4-22 16-32 32-32s28 10 32 32%22 fill=%22%23fff%22 fill-opacity=%22.92%22/%3E%3C/svg%3E'}}; return {loggedIn:true,user:structuredClone(previewCloud.session.user),realtime:structuredClone(previewRealtime)}; },
    async LogoutAccount(){ previewRealtime.status='offline'; previewRealtime.desiredOnline=false; previewRealtime.identity=null; previewRealtime.friends=[]; previewRealtime.friendRequests=[]; previewCloud.session={loggedIn:false,user:null}; return {loggedIn:false,user:null,realtime:structuredClone(previewRealtime)}; },
    async GetMyMembershipTrialInvitations(){ if(!previewCloud.session.loggedIn) throw new Error('请先登录工位岛账号'); return structuredClone(previewTrialInvitations.filter(item=>item.status==='pending')); },
    async AcceptMembershipTrialInvitation(id){ const invitation=previewTrialInvitations.find(item=>Number(item.id)===Number(id)&&item.status==='pending'); if(!invitation) throw new Error('试用资格已失效或已领取'); invitation.status='accepted'; if(previewCloud.session.user){ previewCloud.session.user.membership_tier='plus'; previewCloud.session.user.roles=[{role_code:'WORKDAY_ISLAND_PLUS',role_name:'工位岛 Plus 会员'}]; } return {id:Date.now(),role_id:invitation.role_id,status:'active'}; },
    async ListUserNotices(page,pageSize,noticeType,readStatus){ if(!previewCloud.session.loggedIn)throw new Error('请先登录工位岛账号'); const filtered=previewNotifications.filter(item=>(!noticeType||item.notice_type===noticeType)&&(!readStatus||(readStatus==='READ'?item.is_read:!item.is_read))); const start=(page-1)*pageSize; return {total:filtered.length,list:structuredClone(filtered.slice(start,start+pageSize)),page,pageSize}; },
    async GetUserNoticeUnreadCount(){ if(!previewCloud.session.loggedIn)throw new Error('请先登录工位岛账号'); return previewNotifications.filter(item=>!item.is_read).length; },
    async MarkUserNoticeRead(id){ const item=previewNotifications.find(value=>Number(value.id)===Number(id)); if(item)item.is_read=true; return true; },
    async MarkAllUserNoticesRead(){ previewNotifications.forEach(item=>item.is_read=true); return true; },
    async DeleteUserNotice(id){ previewNotifications=previewNotifications.filter(item=>Number(item.id)!==Number(id)); return true; },
    async ListNoteNodes(){ return structuredClone(previewNotes); },
    async GetNoteNode(id){ const node=previewNotes.find(item=>item.id===id); if(!node)throw new Error('笔记不存在'); return structuredClone(node); },
    async CreateNoteNode(input){ const timestamp=new Date().toISOString(); const node={id:crypto.randomUUID(),parentId:input.parentId||'',kind:input.kind,title:input.title||(input.kind==='folder'?'新建文件夹':'无标题笔记'),content:input.content||'',contentType:input.kind==='note'?(input.contentType||'richtext'):'',favorite:false,pinned:false,hasPassword:false,locked:false,createdAt:timestamp,updatedAt:timestamp}; previewNotes.push(node); return structuredClone(node); },
    async UpdateNote(id,input){ const node=previewNotes.find(item=>item.id===id); if(!node)throw new Error('笔记不存在'); const versions=previewNoteVersions.get(id)||[]; if(node.content&&node.content!==input.content&&!versions.length)versions.push({id:crypto.randomUUID(),noteId:id,title:node.title,content:node.content,createdAt:new Date().toISOString()}); previewNoteVersions.set(id,versions); Object.assign(node,input,{updatedAt:new Date().toISOString()}); return structuredClone(node); },
    async RenameNoteNode(id,title){ const node=previewNotes.find(item=>item.id===id); if(!node)throw new Error('内容不存在'); node.title=title; node.updatedAt=new Date().toISOString(); return structuredClone(node); },
    async MoveNoteNode(id,parentId){ const node=previewNotes.find(item=>item.id===id); if(!node)throw new Error('内容不存在'); node.parentId=parentId||''; node.updatedAt=new Date().toISOString(); return structuredClone(node); },
    async SetNoteFavorite(id,value){ const node=previewNotes.find(item=>item.id===id); node.favorite=value; return structuredClone(node); },
    async SetNotePinned(id,value){ const node=previewNotes.find(item=>item.id===id); node.pinned=value; return structuredClone(node); },
    async TrashNoteNode(id){ const ids=new Set([id]); let changed=true; while(changed){changed=false;previewNotes.forEach(node=>{if(!ids.has(node.id)&&ids.has(node.parentId)){ids.add(node.id);changed=true;}});} const deletedAt=new Date().toISOString(); previewNotes.forEach(node=>{if(ids.has(node.id))node.deletedAt=deletedAt;}); return true; },
    async RestoreNoteNode(id){ const ids=new Set([id]); let changed=true; while(changed){changed=false;previewNotes.forEach(node=>{if(!ids.has(node.id)&&ids.has(node.parentId)){ids.add(node.id);changed=true;}});} previewNotes.forEach(node=>{if(ids.has(node.id))delete node.deletedAt;}); return true; },
    async DeleteNoteNodeForever(id){ const ids=new Set([id]); let changed=true; while(changed){changed=false;previewNotes.forEach(node=>{if(!ids.has(node.id)&&ids.has(node.parentId)){ids.add(node.id);changed=true;}});} previewNotes=previewNotes.filter(node=>!ids.has(node.id)); return true; },
    async ListNoteVersions(id){ return structuredClone(previewNoteVersions.get(id)||[]); },
    async RestoreNoteVersion(id,versionId){ const node=previewNotes.find(item=>item.id===id); const version=(previewNoteVersions.get(id)||[]).find(item=>item.id===versionId); if(!node||!version)throw new Error('历史版本不存在'); Object.assign(node,{title:version.title,content:version.content,updatedAt:new Date().toISOString()}); return structuredClone(node); },
    async SetNotePassword(id,password){ const node=previewNotes.find(item=>item.id===id); if(!node)throw new Error('笔记不存在'); node.hasPassword=Boolean(password); node.locked=false; return true; },
    async UnlockNote(id){ const node=previewNotes.find(item=>item.id===id); if(!node)throw new Error('笔记不存在'); return structuredClone({...node,hasPassword:true,locked:false}); },
    async ExportNote(id,format){ const node=previewNotes.find(item=>item.id===id); return {cancelled:false,name:`${node?.title||'笔记'}.${format==='word'?'doc':'txt'}`,path:'/Downloads'}; },
    async GetNoteShareQuota(){ if(!previewCloud.session.loggedIn)throw new Error('请先登录工位岛账号'); return {daily_share_limit:20,total_share_limit:200,daily_used:previewNoteShares.length,total_used:previewNoteShares.length,daily_remaining:Math.max(0,20-previewNoteShares.length),total_remaining:Math.max(0,200-previewNoteShares.length),source_type:'default',source_name:'系统默认',quota_exceeded:false,quota_message:'',unlimited_daily:false,unlimited_total:false}; },
    async CreateNoteShare(input){ if(!previewCloud.session.loggedIn)throw new Error('请先登录工位岛账号'); const timestamp=new Date().toISOString(); const id=Date.now(); const item={id,share_code:`preview-${id}`,share_uri:`/share/public/preview-${id}`,public_url:`https://admin.asbacklight.cn/share/preview-${id}`,title:input.title,description:input.description||'',content_mode:input.contentMode||'snapshot',allow_copy:Boolean(input.allowCopy),allow_edit:false,allow_comment:Boolean(input.allowComment),comment_count:0,is_encrypted:Boolean(input.isEncrypted),status:1,valid_type:Number(input.validType)||0,valid_start_time:input.validStartTime||null,valid_end_time:input.validEndTime||null,share_time:timestamp,source:input.source||'Workday Island',show_source:Boolean(input.showSource),show_creator:Boolean(input.showCreator),ref_type:'note',ref_id:input.noteId,view_count:0,lifecycle_state:'active',create_time:timestamp,modify_time:timestamp}; previewNoteShares.unshift(item); return structuredClone(item); },
    async ListNoteShares(page,pageSize,keyword,lifecycle){ if(!previewCloud.session.loggedIn)throw new Error('请先登录工位岛账号'); const filtered=previewNoteShares.filter(item=>(!keyword||item.title.includes(keyword)||item.share_code.includes(keyword))&&(!lifecycle||item.lifecycle_state===lifecycle)); const offset=Math.max(0,(page-1)*pageSize); return {total:filtered.length,list:structuredClone(filtered.slice(offset,offset+pageSize)),page,pageSize}; },
    async GetNoteShare(id){ const item=previewNoteShares.find(value=>Number(value.id)===Number(id)); if(!item)throw new Error('分享记录不存在'); return structuredClone(item); },
    async UpdateNoteShare(id,input){ const item=previewNoteShares.find(value=>Number(value.id)===Number(id)); if(!item)throw new Error('分享记录不存在'); Object.assign(item,{title:input.title,description:input.description||'',content_mode:input.contentMode,allow_copy:Boolean(input.allowCopy),allow_edit:Boolean(input.allowEdit),allow_comment:Boolean(input.allowComment),is_encrypted:Boolean(input.isEncrypted),status:Number(input.status),valid_type:Number(input.validType),valid_start_time:input.validStartTime||null,valid_end_time:input.validEndTime||null,source:input.source,show_source:Boolean(input.showSource),show_creator:Boolean(input.showCreator),lifecycle_state:Number(input.status)===1?'active':'draft',modify_time:new Date().toISOString()}); return structuredClone(item); },
    async RevokeNoteShare(id){ const item=previewNoteShares.find(value=>Number(value.id)===Number(id)); if(!item)throw new Error('分享记录不存在'); Object.assign(item,{status:0,lifecycle_state:'revoked',revoked_at:new Date().toISOString(),modify_time:new Date().toISOString()}); return structuredClone(item); },
    async RegenerateNoteShare(id){ const item=previewNoteShares.find(value=>Number(value.id)===Number(id)); if(!item)throw new Error('分享记录不存在'); item.share_code=`preview-${Date.now()}`; item.share_uri=`/share/public/${item.share_code}`; item.public_url=`https://admin.asbacklight.cn/share/${item.share_code}`; Object.assign(item,{status:1,lifecycle_state:'active',revoked_at:null,modify_time:new Date().toISOString()}); return structuredClone(item); },
    async DeleteNoteShare(id){ previewNoteShares=previewNoteShares.filter(value=>Number(value.id)!==Number(id)); return true; },
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
    async RefreshAccountSession(){ return {loggedIn:previewCloud.session.loggedIn,user:structuredClone(previewCloud.session.user),realtime:structuredClone(previewRealtime)}; },
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
    async SetWindowFullscreen(fullscreen){ state.windowFullscreen=Boolean(fullscreen); return state.windowFullscreen; },
    async IsWindowFullscreen(){ return Boolean(state.windowFullscreen); },
    async QuitApp(){ return true; },
    async CheckForUpdates(force){ return force ? {currentVersion:'0.16.4',latestVersion:'0.16.4',available:false,skipped:false,releaseURL:'https://github.com/asbacklight-justin/workday-island/releases/tag/v0.16.4',downloadURL:'',assetName:'',assetSize:0,digest:'',releaseNotes:'新增个人中心免费试用领取，并优化钓鱼小岛的抛竿、咬钩、命中与收获动效。\nAdded one-time trial claiming in Account Center and richer Fishing Island cast, bite, timing, and catch effects.'} : {currentVersion:'0.16.4',skipped:true}; },
    async OpenUpdateURL(){ return true; },
    async OpenWebApp(){ return true; },
    async SubmitPublicFeedback(){ return {id:1001}; }
  };
}

boot();

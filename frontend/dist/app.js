const translations = {
  zh: {
    appName: '工位岛', compact: '精简', expand: '展开', pin: '置顶', settings: '设置', about: '关于', minimize: '最小化', closeApp: '关闭应用', windowControls: '窗口控制',
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
    compactOpacity: '精简模式透明度', compactOpacityDesc: '拖动时实时预览；保存后仅在精简模式生效',
    aboutTitle: '关于工位岛', aboutDescription: '一座安静悬浮在桌面的工作小岛。', version: '版本', author: '作者', email: '邮箱',
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
    settingsSaved: '工作、天气与语言设置已保存', compactOn: '已切换到精简模式', compactOff: '已展开完整面板',
    timeToTodo: '该处理待办啦', weatherUpdating: '天气更新中', currentWeather: '当前天气', weatherUnavailable: '天气暂不可用', weatherCached: '离线缓存',
    notificationTest: '提醒功能测试', notificationSent: '系统提醒已发送', operationFailed: '操作失败',
    focusMode: '专注模式', focusHint: '选择一段不被打扰的时间，结束后提醒你休息。', focusing: '专注中',
    startFocus: '开始专注', stopFocus: '结束专注', focusStarted: '已开始 {minutes} 分钟专注', focusStopped: '本次专注已结束',
    focusEndsAt: '{time} 结束', focusFinished: '专注完成', takeBreak: '专注完成，请休息一下', focusDuration: '专注时长', minuteShort: '分',
    weekdays: ['一','二','三','四','五','六','日']
  },
  en: {
    appName: 'Workday Island', compact: 'Compact', expand: 'Expand', pin: 'Pin', settings: 'Settings', about: 'About', minimize: 'Minimize', closeApp: 'Quit', windowControls: 'Window controls',
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
    compactOpacity: 'Compact mode opacity', compactOpacityDesc: 'Drag to preview live; after saving, it only affects compact mode',
    aboutTitle: 'About Workday Island', aboutDescription: 'A quiet little work island floating on your desktop.', version: 'Version', author: 'Author', email: 'Email',
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
    settingsSaved: 'Work, weather, and language settings saved', compactOn: 'Compact mode enabled', compactOff: 'Full panel restored',
    timeToTodo: 'Time to handle this todo', weatherUpdating: 'Updating weather', currentWeather: 'Current weather', weatherUnavailable: 'Weather unavailable', weatherCached: 'Offline cache',
    notificationTest: 'Reminder test', notificationSent: 'System reminder sent', operationFailed: 'Operation failed',
    focusMode: 'Focus Mode', focusHint: 'Choose an uninterrupted block. We’ll remind you to rest when it ends.', focusing: 'Focusing',
    startFocus: 'Start Focus', stopFocus: 'End Focus', focusStarted: '{minutes}-minute focus started', focusStopped: 'Focus session ended',
    focusEndsAt: 'Ends at {time}', focusFinished: 'FOCUS COMPLETE', takeBreak: 'Focus complete — take a break', focusDuration: 'Focus duration', minuteShort: 'min',
    weekdays: ['M','T','W','T','F','S','S']
  }
};

const state = {
  todos: [],
  settings: { alwaysOnTop: true, compactMode: false, showCompactTodos: false, compactOpacity: 100, compactWidth: 520, compactHeight: 350, workStart: '09:00', workEnd: '18:00', workdays: [1, 2, 3, 4, 5], monthlySalary: 0, salaryWorkdays: 21.75, currency: '¥', weatherCity: '上海', language: 'system', theme: 'system' },
  appInfo: {name: 'Workday Island', version: '0.6.1', author: 'Backlight Studio', email: 'asbacklight@gmail.com'},
  focus: {active: false, durationMinutes: 50, startedAt: null, endsAt: null, completedAt: null},
  weather: null,
  filter: 'pending'
};

const api = window.go?.main?.App ?? createPreviewAPI();
const hasNativeAPI = Boolean(window.go?.main?.App);
let activeReminderSequence = 0;
let lastReminderSequence = 0;
let reminderSoundTimer = 0;
let reminderAudioContext = null;
let selectedFocusMinutes = 50;
let compactResizeTimer = 0;
let availableUpdate = null;
let updateCheckResult = null;
const systemTheme = window.matchMedia?.('(prefers-color-scheme: light)');

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

function currentLanguage() {
  if (state.settings.language === 'zh' || state.settings.language === 'en') return state.settings.language;
  return (navigator.languages?.[0] || navigator.language || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function locale() { return currentLanguage() === 'zh' ? 'zh-CN' : 'en-US'; }
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
  ['#minimize-window', '#compact-minimize'].forEach(selector => {
    $(selector).setAttribute('aria-label', t('minimize'));
    $(selector).title = t('minimize');
  });
  $('#compact-expand').setAttribute('aria-label', t('expandTitle'));
  $('#compact-expand').title = t('expandTitle');
  $('#compact-window-controls').setAttribute('aria-label', t('windowControls'));
  $('#compact-todos').setAttribute('aria-label', t('compactTodos'));
  $('#close-window').setAttribute('aria-label', t('closeApp'));
  $('#close-window').title = t('closeApp');
  $('.pin-control').title = t('pinTitle');
  $('#todo-due-date').setAttribute('aria-label', t('reminderDate'));
  $('#todo-due-time').setAttribute('aria-label', t('reminderTime'));
  $('#reminder-alert').setAttribute('aria-label', t('stopReminder'));
  $('.focus-presets').setAttribute('aria-label', t('focusDuration'));
  $('.island-grid').setAttribute('aria-label', t('overview'));
  $('.earnings-card').title = t('earningEstimate');
  $('.weather-card').title = t('weatherData');
  $('#app-version-badge').textContent = `v${state.appInfo.version}`;
  $('#about-version').textContent = state.appInfo.version;
  $('#email-author strong').textContent = state.appInfo.email;
  if (updateCheckResult) renderUpdateInfo(updateCheckResult);
}

async function boot() {
  try {
    const [loaded, appInfo] = await Promise.all([api.GetState(), api.GetAppInfo()]);
    state.todos = loaded.todos ?? [];
    state.settings = {...state.settings, ...(loaded.settings ?? {})};
    state.focus = {...state.focus, ...(loaded.focus ?? {})};
    state.appInfo = {...state.appInfo, ...(appInfo ?? {})};
    applyTheme();
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
  } catch (error) {
    showToast(readError(error), true);
  }
}

function bindEvents() {
  $('#add-todo').addEventListener('click', () => openTodoModal());
  $('#open-settings').addEventListener('click', openSettings);
  $('#open-about').addEventListener('click', () => openModal('about-modal'));
  $('#email-author').addEventListener('click', () => {
    const url = `mailto:${state.appInfo.email}`;
    if (window.runtime?.BrowserOpenURL) window.runtime.BrowserOpenURL(url); else window.location.href = url;
  });
  $('#compact-toggle').addEventListener('click', toggleCompactMode);
  $('#compact-expand').addEventListener('click', toggleCompactMode);
  $('#minimize-window').addEventListener('click', minimiseWindow);
  $('#compact-minimize').addEventListener('click', minimiseWindow);
  $('#close-window').addEventListener('click', quitApp);
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
    if (event.key === 'Escape') $$('.modal-backdrop:not(.hidden)').forEach(modal => closeModal(modal.id));
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'n') { event.preventDefault(); openTodoModal(); }
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

function quitApp() {
  if (api.QuitApp) api.QuitApp();
  else window.close();
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
  applyTranslations();
  renderAll();
}

function renderAll() {
  $('#always-on-top').checked = state.settings.alwaysOnTop;
  applyCompactUI();
  renderTodos();
  renderCompactTodos();
  renderSummary();
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
  $('#currency-symbol').value = state.settings.currency || '¥';
  $('#show-compact-todos').checked = Boolean(state.settings.showCompactTodos);
  $('#compact-opacity').value = normaliseCompactOpacity(state.settings.compactOpacity);
  updateCompactOpacityLabel();
  $('#settings-top').checked = state.settings.alwaysOnTop;
  $('#weekday-picker').innerHTML = t('weekdays').map((name, i) => `<button type="button" class="weekday ${state.settings.workdays.includes(i+1) ? 'active' : ''}" data-day="${i+1}">${name}</button>`).join('');
  $$('.weekday').forEach(button => button.addEventListener('click', () => button.classList.toggle('active')));
  openModal('settings-modal');
}

async function submitSettings(event) {
  event.preventDefault();
  const workdays = $$('.weekday.active').map(button => Number(button.dataset.day));
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
  api.PreviewWindowOpacity?.(percentage);
}

function applyTheme() {
  const requested = state.settings.theme || 'system';
  const resolved = requested === 'system' ? (systemTheme?.matches ? 'light' : 'dark') : requested;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = resolved === 'light' ? '#edf3fb' : '#0b101b';
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
    const weather = await api.GetWeather(city);
    state.weather = weather;
    $('#weather-icon').textContent = weather.icon || '🌡️';
    $('#weather-temp').textContent = `${Math.round(weather.temperature)}°`;
    const label = weatherLabel(weather.weatherCode) || weather.description || t('currentWeather');
    $('#weather-desc').textContent = weather.stale ? `${label} · ${t('weatherCached')}` : label;
    $('#weather-city').textContent = weather.city || city;
    $('.weather-card').title = weather.stale && weather.error ? `${t('weatherData')}\n${weather.error}` : t('weatherData');
  } catch (error) {
    if (state.weather) {
      $('#weather-desc').textContent = `${weatherLabel(state.weather.weatherCode) || state.weather.description || t('currentWeather')} · ${t('weatherCached')}`;
    } else {
      $('#weather-icon').textContent = '🌡️';
      $('#weather-temp').textContent = '--°';
      $('#weather-desc').textContent = t('weatherUnavailable');
    }
    $('.weather-card').title = `${t('weatherData')}\n${readError(error)}`;
  }
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
  if (id === 'settings-modal') api.RestoreWindowOpacity?.();
}
function sortedTodos() { return [...state.todos].sort((a,b) => Number(a.completed)-Number(b.completed) || dueValue(a)-dueValue(b) || new Date(b.createdAt)-new Date(a.createdAt)); }
function dueValue(todo) { return todo.dueAt ? new Date(todo.dueAt).getTime() : Number.MAX_SAFE_INTEGER; }
function clockOnDate(date, value) { const [hour, minute] = value.split(':').map(Number); const result = new Date(date); result.setHours(hour, minute, 0, 0); return result; }
function formatDuration(ms) { const seconds = Math.max(0, Math.floor(ms/1000)); return [Math.floor(seconds/3600), Math.floor((seconds%3600)/60), seconds%60].map(value => String(value).padStart(2,'0')).join(':'); }
function formatFocusDuration(ms) { const seconds = Math.max(0, Math.ceil(ms/1000)); return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`; }
function formatMoney(value) { return Number(value || 0).toLocaleString(locale(),{minimumFractionDigits:2,maximumFractionDigits:2}); }
function formatBytes(value) { const bytes = Number(value) || 0; if (!bytes) return '—'; const megabytes = bytes / 1024 / 1024; return `${megabytes.toLocaleString(locale(),{minimumFractionDigits:1,maximumFractionDigits:1})} MB`; }
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
  const previewState = {todos:sample, settings:{...state.settings}, focus:{...state.focus}};
  return {
    async GetState(){ return structuredClone(previewState); },
    async GetAppInfo(){ return structuredClone(state.appInfo); },
    async AddTodo(input){ previewState.todos.push({id:crypto.randomUUID(),...input,dueAt:input.dueAt||null,completed:false,createdAt:new Date().toISOString()}); },
    async UpdateTodo(id,input){ Object.assign(previewState.todos.find(todo=>todo.id===id),input,{dueAt:input.dueAt||null}); },
    async ToggleTodo(id,value){ previewState.todos.find(todo=>todo.id===id).completed=value; },
    async DeleteTodo(id){ previewState.todos=previewState.todos.filter(todo=>todo.id!==id); },
    async StartFocus(minutes){ const startedAt=new Date(); const endsAt=new Date(startedAt.getTime()+minutes*60000); previewState.focus={active:true,durationMinutes:minutes,startedAt:startedAt.toISOString(),endsAt:endsAt.toISOString(),completedAt:null}; return structuredClone(previewState.focus); },
    async StopFocus(){ previewState.focus={...previewState.focus,active:false,completedAt:null}; return structuredClone(previewState.focus); },
    async SaveSettings(settings){ previewState.settings={...settings}; return structuredClone(settings); },
    async SetCompactMode(compact){ previewState.settings.compactMode=compact; return structuredClone(previewState.settings); },
    async PreviewWindowOpacity(){ return true; },
    async RestoreWindowOpacity(){ return true; },
    async GetWeather(city){ return {queryCity:city,city,temperature:23.6,apparentTemperature:24.1,weatherCode:2,description:'多云',icon:'⛅',updatedAt:new Date().toISOString(),stale:false}; },
    async GetActiveReminder(){ return null; },
    async AcknowledgeReminder(){ return true; },
    async PlayReminderSound(){ return true; },
    async TestNotification(){ return true; },
    async MinimiseWindow(){ return true; },
    async QuitApp(){ return true; },
    async CheckForUpdates(force){ return force ? {currentVersion:'0.6.1',latestVersion:'0.6.2',available:true,skipped:false,releaseURL:'https://github.com/asbacklight-justin/workday-island/releases/tag/v0.6.2',downloadURL:'https://github.com/asbacklight-justin/workday-island/releases/download/v0.6.2/Workday-Island-v0.6.2-macOS-universal.dmg',assetName:'Workday-Island-v0.6.2-macOS-universal.dmg',assetSize:18432000,digest:'sha256:demo',releaseNotes:'新增功能与体验优化。\nNew features and experience improvements.'} : {currentVersion:'0.6.1',skipped:true}; },
    async OpenUpdateURL(){ return true; }
  };
}

boot();

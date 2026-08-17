package main

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"sync/atomic"
	"time"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

const appVersion = "0.16.10"

const (
	defaultFullWindowWidth = 1100
	fullWindowHeight       = 700
)

type App struct {
	ctx          context.Context
	store        *Store
	cancel       context.CancelFunc
	startupMu    sync.Mutex
	alertSeq     atomic.Uint64
	alertMu      sync.RWMutex
	activeAlert  *ReminderAlert
	weatherMu    sync.Mutex
	weatherCache weatherCache
	httpClient   *http.Client
	realtime     *RealtimeClient
	cloudDisk    *CloudDiskClient
	aiChat       *AIChatClient
	translator   *TranslationClient
	english      *EnglishClient
	englishMode  atomic.Bool
	stockMode    atomic.Bool
	stockMu      sync.Mutex
	stockCache   StockSnapshot
}

func NewApp() *App {
	configDir, err := os.UserConfigDir()
	if err != nil {
		configDir = "."
	}
	app := &App{
		store: NewStore(filepath.Join(configDir, "WorkdayIsland", "data.json")),
		httpClient: &http.Client{
			Timeout: 15 * time.Second,
			Transport: &http.Transport{
				Proxy:                 http.ProxyFromEnvironment,
				DialContext:           (&net.Dialer{Timeout: 5 * time.Second, KeepAlive: 30 * time.Second}).DialContext,
				TLSHandshakeTimeout:   5 * time.Second,
				ResponseHeaderTimeout: 7 * time.Second,
				IdleConnTimeout:       60 * time.Second,
			},
		},
	}
	app.realtime = NewRealtimeClient(app)
	app.cloudDisk = NewCloudDiskClient(app, cloudDiskAPIBaseURL)
	app.aiChat = NewAIChatClient(app, app.cloudDisk, cloudDiskAPIBaseURL)
	app.translator = NewTranslationClient(app.cloudDisk)
	app.english = NewEnglishClient(app.httpClient, englishAPIBaseURL)
	return app
}

func (a *App) startup(ctx context.Context) {
	a.startupMu.Lock()
	defer a.startupMu.Unlock()
	a.ctx = ctx
	_ = a.store.Load()
	state := a.store.Snapshot()
	runtime.WindowSetAlwaysOnTop(ctx, state.Settings.AlwaysOnTop)
	a.applyNativeTheme(state.Settings.Theme)
	a.applyWindowMode(state.Settings.CompactMode)
	a.applyWindowOpacity()
	schedulerCtx, cancel := context.WithCancel(ctx)
	a.cancel = cancel
	go a.runScheduler(schedulerCtx)
	startTray(a)
}

func (a *App) shutdown(context.Context) {
	stopTray()
	if a.realtime != nil {
		a.realtime.Shutdown()
	}
	if a.aiChat != nil {
		a.aiChat.Shutdown()
	}
	if a.cancel != nil {
		a.cancel()
	}
}

func (a *App) GetState() State {
	state := a.store.Snapshot()
	// Cloud notes are fetched directly from the account service and are never
	// included in the local application state.
	state.NoteNodes = []NoteNode{}
	state.NoteVersions = []NoteVersion{}
	return state
}

func (a *App) GetAppInfo() AppInfo {
	return AppInfo{
		Name:        "Workday Island",
		Version:     appVersion,
		Author:      "Backlight Studio",
		Email:       "asbacklight@gmail.com",
		Description: "A quiet desktop island for workday focus.",
	}
}

func (a *App) AddTodo(input TodoInput) (Todo, error) {
	return a.store.Add(input)
}

func (a *App) UpdateTodo(id string, input TodoInput) (Todo, error) {
	return a.store.Update(id, input)
}

func (a *App) ToggleTodo(id string, completed bool) error {
	return a.store.Toggle(id, completed)
}

func (a *App) DeleteTodo(id string) error {
	return a.store.Delete(id)
}

func (a *App) StartFocus(minutes int) (FocusSession, error) {
	return a.store.StartFocus(minutes, time.Now())
}

func (a *App) StopFocus() (FocusSession, error) {
	return a.store.StopFocus()
}

func (a *App) SaveSettings(settings Settings) (Settings, error) {
	previous := a.store.Snapshot().Settings
	if requiredRank := requiredMembershipRankForTheme(settings.Theme); requiredRank > a.accountMembershipRank() {
		return previous, fmt.Errorf("该主题需要%s或更高等级会员", membershipNameForRank(requiredRank))
	}
	saved, err := a.store.SaveSettings(settings)
	if err == nil && a.ctx != nil {
		runtime.WindowSetAlwaysOnTop(a.ctx, saved.AlwaysOnTop)
		a.applyNativeTheme(saved.Theme)
		if previous.CompactMode != saved.CompactMode {
			a.applyWindowMode(saved.CompactMode)
		}
		a.applyWindowOpacity()
	}
	return saved, err
}

func requiredMembershipRankForTheme(theme string) int {
	switch theme {
	case "plus-theme", "plus-light":
		return 1
	case "pro-theme", "pro-light":
		return 2
	case "ultra-theme", "ultra-light":
		return 3
	default:
		return 0
	}
}

func membershipNameForRank(rank int) string {
	switch rank {
	case 1:
		return "Plus"
	case 2:
		return "Pro"
	case 3:
		return "Ultra"
	default:
		return "普通"
	}
}

func (a *App) accountMembershipRank() int {
	session := a.cloudDisk.Session()
	if !session.LoggedIn || session.User == nil {
		return 0
	}
	switch strings.ToLower(strings.TrimSpace(session.User.MembershipTier)) {
	case "plus":
		return 1
	case "pro":
		return 2
	case "ultra":
		return 3
	default:
		return 0
	}
}

func (a *App) SetCompactMode(compact bool) (Settings, error) {
	settings := a.store.Snapshot().Settings
	if settings.CompactMode && !compact && a.ctx != nil {
		width, height := runtime.WindowGetSize(a.ctx)
		settings.CompactWidth = width
		settings.CompactHeight = height
	}
	settings.CompactMode = compact
	saved, err := a.store.SaveSettings(settings)
	if err == nil {
		a.applyWindowMode(compact)
		a.applyWindowOpacity()
	}
	return saved, err
}

func (a *App) PreviewWindowOpacity(percent int) {
	if percent < 30 {
		percent = 30
	}
	if percent > 100 {
		percent = 100
	}
	if a.englishMode.Load() {
		// English learning renders transparency in the web background so that
		// words, meanings and controls remain fully opaque and readable.
		setWindowOpacity(1)
		return
	}
	setWindowOpacity(float64(percent) / 100)
}

func (a *App) RestoreWindowOpacity() {
	a.applyWindowOpacity()
}

func (a *App) MinimiseWindow() {
	if a.ctx != nil {
		if isPlatformWindowFullscreen(a.ctx) {
			setPlatformWindowFullscreen(a.ctx, false)
		}
		runtime.WindowMinimise(a.ctx)
	}
}

// SetWindowFullscreen enters or leaves platform fullscreen mode. macOS uses a
// dedicated frameless implementation because its native fullscreen transition
// ignores borderless Wails windows; Windows uses the native Wails transition.
func (a *App) SetWindowFullscreen(fullscreen bool) bool {
	if a.ctx == nil {
		return false
	}
	return setPlatformWindowFullscreen(a.ctx, fullscreen)
}

func (a *App) IsWindowFullscreen() bool {
	return a.ctx != nil && isPlatformWindowFullscreen(a.ctx)
}

// HideToTray keeps the process and scheduler alive while removing the main
// window from the desktop. The tray menu is the intentional exit path.
func (a *App) HideToTray() {
	if a.ctx == nil {
		return
	}
	if isPlatformWindowFullscreen(a.ctx) {
		setPlatformWindowFullscreen(a.ctx, false)
	}
	runtime.WindowHide(a.ctx)
	setTrayWindowHidden(true)
}

// ShowFromTray restores a hidden or minimised window.
func (a *App) ShowFromTray() {
	if a.ctx == nil {
		return
	}
	setTrayWindowHidden(false)
	runtime.WindowShow(a.ctx)
	runtime.WindowUnminimise(a.ctx)
	a.applyWindowOpacity()
	bringAppToFront()
}

// SetTrayLanguage keeps the native tray labels aligned with the language that
// the frontend actually resolved, including the "follow system" setting.
func (a *App) SetTrayLanguage(language string) {
	setTrayLanguage(language)
}

func (a *App) showPageFromTray(page string) {
	a.ShowFromTray()
	if a.ctx != nil {
		runtime.EventsEmit(a.ctx, "tray:navigate", page)
	}
}

func (a *App) QuitApp() {
	if a.ctx != nil {
		runtime.Quit(a.ctx)
	}
}

func (a *App) GetRealtimeState() RealtimeSnapshot {
	return a.realtime.Snapshot()
}

func (a *App) GetDefaultRealtimeNickname() string {
	return defaultRealtimeNickname()
}

func (a *App) ConnectRealtime(nickname string) (RealtimeSnapshot, error) {
	return a.realtime.Connect(nickname)
}

func (a *App) ConnectRealtimePassword(username, password string) (RealtimeSnapshot, error) {
	session, err := a.LoginAccount(username, password)
	return session.Realtime, err
}

func (a *App) GetAccountSession() AccountSession {
	return a.accountSession()
}

// RefreshAccountSession reloads the current profile so role and membership
// changes made while the desktop app is open become visible without signing in
// again. The shared token remains the single source of authentication.
func (a *App) RefreshAccountSession() (AccountSession, error) {
	session := a.accountSession()
	if !session.LoggedIn {
		return session, nil
	}
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	if err := a.cloudDisk.RefreshProfile(ctx); err != nil {
		return a.accountSession(), err
	}
	return a.accountSession(), nil
}

// GetMyMembershipTrialInvitations is intentionally scoped to the signed-in
// account. The backend obtains the recipient from the JWT rather than trusting
// a user ID supplied by the desktop UI.
func (a *App) GetMyMembershipTrialInvitations() ([]MembershipTrialInvitation, error) {
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	return a.cloudDisk.ListMyMembershipTrialInvitations(ctx)
}

// AcceptMembershipTrialInvitation accepts a recipient-bound trial offer. The
// remote service locks the invitation in a transaction, validates it, writes a
// time-bounded role grant, and marks the invitation accepted atomically.
func (a *App) AcceptMembershipTrialInvitation(invitationID uint64) (MembershipRoleGrantResult, error) {
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	return a.cloudDisk.AcceptMembershipTrialInvitation(ctx, invitationID)
}

func (a *App) LoginAccount(username, password string) (AccountSession, error) {
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	cloudSession, err := a.cloudDisk.Login(ctx, username, password)
	if err != nil {
		return a.accountSession(), err
	}
	if a.realtime.Snapshot().DesiredOnline {
		a.realtime.Disconnect()
	}
	realtime, err := a.realtime.ConnectPassword(username, password)
	if err != nil {
		a.cloudDisk.Logout()
		return a.accountSession(), err
	}
	return AccountSession{
		LoggedIn: cloudSession.LoggedIn,
		User:     cloudSession.User,
		Realtime: realtime,
	}, nil
}

func (a *App) LogoutAccount() AccountSession {
	realtime := a.realtime.Disconnect()
	a.cloudDisk.Logout()
	return AccountSession{Realtime: realtime}
}

func (a *App) accountSession() AccountSession {
	cloudSession := a.cloudDisk.Session()
	return AccountSession{
		LoggedIn: cloudSession.LoggedIn,
		User:     cloudSession.User,
		Realtime: a.realtime.Snapshot(),
	}
}

func (a *App) DisconnectRealtime() RealtimeSnapshot {
	return a.realtime.Disconnect()
}

func (a *App) ResetRealtimeIdentity() (RealtimeSnapshot, error) {
	return a.realtime.ResetIdentity()
}

func (a *App) SendRealtimeChat(toUserID int64, text string) (RealtimeMessage, error) {
	return a.realtime.SendChat(toUserID, text)
}

func (a *App) SendRealtimeWindowEffect(toUserID int64, effect, text string) (RealtimeMessage, error) {
	return a.realtime.SendWindowCommand(toUserID, effect, text)
}

func (a *App) MarkRealtimeMessageRead(messageID string) error {
	return a.realtime.AckRead(messageID)
}

func (a *App) CreateRealtimeFriendRequest(target, message string) (RealtimeFriendRequest, error) {
	return a.realtime.CreateFriendRequest(target, message)
}

func (a *App) RespondRealtimeFriendRequest(friendRequestID, decision string) (RealtimeFriendRequest, error) {
	return a.realtime.RespondFriendRequest(friendRequestID, decision)
}

func (a *App) RemoveRealtimeFriend(friendUserID int64) error {
	return a.realtime.RemoveFriend(friendUserID)
}

func (a *App) RefreshRealtimeFriends() (RealtimeSnapshot, error) {
	return a.realtime.RefreshFriends()
}

func (a *App) GetCloudDiskSession() CloudDiskSession {
	return a.cloudDisk.Session()
}

func (a *App) ListCloudDiskItems(parentID uint64, page, pageSize int, keyword string) (CloudDiskPage, error) {
	return a.cloudDisk.List(context.Background(), parentID, page, pageSize, keyword)
}

func (a *App) GetCloudDiskQuota() (CloudDiskQuota, error) {
	return a.cloudDisk.Quota(context.Background())
}

func (a *App) CreateCloudDiskFolder(parentID uint64, name string) (CloudDiskNode, error) {
	return a.cloudDisk.CreateFolder(context.Background(), parentID, name)
}

func (a *App) RenameCloudDiskItem(id uint64, name string) (CloudDiskNode, error) {
	return a.cloudDisk.Update(context.Background(), id, &name, nil)
}

func (a *App) MoveCloudDiskItem(id, parentID uint64) (CloudDiskNode, error) {
	return a.cloudDisk.Update(context.Background(), id, nil, &parentID)
}

func (a *App) DeleteCloudDiskItem(id uint64) error {
	return a.cloudDisk.Delete(context.Background(), id)
}

func (a *App) UploadCloudDiskFile(parentID uint64) (CloudDiskTransfer, error) {
	return a.cloudDisk.UploadSelected(parentID)
}

func (a *App) DownloadCloudDiskFile(id uint64, name string) (CloudDiskTransfer, error) {
	return a.cloudDisk.DownloadSelected(id, name)
}

func (a *App) TranslateText(text, source, target string) (TranslationResult, error) {
	return a.translator.Translate(context.Background(), text, source, target)
}

func (a *App) GetTranslationQuota() (TranslationQuota, error) {
	return a.translator.Quota(context.Background())
}

func (a *App) ListTranslationHistory(page, pageSize int, keyword string) (TranslationHistoryPage, error) {
	return a.translator.History(context.Background(), page, pageSize, keyword)
}

func (a *App) DeleteTranslationHistory(id uint64) error {
	return a.translator.DeleteHistory(context.Background(), id)
}

func (a *App) DeleteTranslationHistoryBatch(ids []uint64) error {
	return a.translator.DeleteHistoryBatch(context.Background(), ids)
}

func (a *App) ExportTranslationHistory(keyword string) (CloudDiskTransfer, error) {
	return a.translator.ExportSelected(keyword)
}

func (a *App) StartEnglishLearning(mode string) (EnglishStudyBatch, error) {
	return a.english.Start(mode, a.store.Snapshot().Settings.EnglishSource)
}

func (a *App) SubmitEnglishAnswer(sessionID, wordID uint64, answer string) (EnglishAnswerResult, error) {
	return a.english.SubmitAnswer(sessionID, wordID, answer)
}

func (a *App) TranslateEnglishExample(text string) (string, error) {
	return a.english.TranslateExample(text)
}

func (a *App) GetEnglishNotebook() EnglishNotebook {
	return a.store.EnglishNotebook()
}

// ListEnglishTextbooks returns the active textbook catalogue for signed-in
// Plus, Pro, and Ultra members. The remote service repeats this role check;
// keeping it here makes the Wails API safe even if the WebView is modified.
func (a *App) ListEnglishTextbooks() (EnglishTextbookList, error) {
	if a.accountMembershipRank() < 1 {
		return EnglishTextbookList{}, ErrEnglishTextbookPlusRequired
	}
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	return a.cloudDisk.ListEnglishTextbooks(ctx)
}

func (a *App) ListEnglishTextbookLessons(code string) (EnglishTextbookLessons, error) {
	if a.accountMembershipRank() < 1 {
		return EnglishTextbookLessons{}, ErrEnglishTextbookPlusRequired
	}
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	return a.cloudDisk.ListEnglishTextbookLessons(ctx, code)
}

func (a *App) GetEnglishTextbookLesson(code string, lessonNo int) (EnglishTextbookLessonDetail, error) {
	if a.accountMembershipRank() < 1 {
		return EnglishTextbookLessonDetail{}, ErrEnglishTextbookPlusRequired
	}
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	return a.cloudDisk.GetEnglishTextbookLesson(ctx, code, lessonNo)
}

// ListEnglishLexicons exposes the read-only word-data catalogue to Plus and
// higher membership tiers. It intentionally shares the same account session
// and access boundary as textbooks and immersive books.
func (a *App) ListEnglishLexicons() (EnglishLexiconList, error) {
	if a.accountMembershipRank() < 1 {
		return EnglishLexiconList{}, ErrEnglishLexiconPlusRequired
	}
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	return a.cloudDisk.ListEnglishLexicons(ctx)
}

func (a *App) ListEnglishLexiconLessons(code string) (EnglishLexiconLessons, error) {
	if a.accountMembershipRank() < 1 {
		return EnglishLexiconLessons{}, ErrEnglishLexiconPlusRequired
	}
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	return a.cloudDisk.ListEnglishLexiconLessons(ctx, code)
}

func (a *App) GetEnglishLexiconLesson(code string, lessonNo int) (EnglishLexiconLessonDetail, error) {
	if a.accountMembershipRank() < 1 {
		return EnglishLexiconLessonDetail{}, ErrEnglishLexiconPlusRequired
	}
	ctx := a.ctx
	if ctx == nil {
		ctx = context.Background()
	}
	return a.cloudDisk.GetEnglishLexiconLesson(ctx, code, lessonNo)
}

func (a *App) englishLibraryContext() (context.Context, error) {
	if a.accountMembershipRank() < 1 {
		return nil, ErrEnglishLibraryPlusRequired
	}
	if a.ctx != nil {
		return a.ctx, nil
	}
	return context.Background(), nil
}

func (a *App) ListEnglishBooks(keyword, language string) (EnglishBookList, error) {
	ctx, err := a.englishLibraryContext()
	if err != nil {
		return EnglishBookList{}, err
	}
	return a.cloudDisk.ListEnglishBooks(ctx, keyword, language)
}

func (a *App) OpenEnglishBook(bookID uint64) (EnglishBook, error) {
	ctx, err := a.englishLibraryContext()
	if err != nil {
		return EnglishBook{}, err
	}
	return a.cloudDisk.GetEnglishBook(ctx, bookID)
}

func (a *App) ListEnglishBookChapters(bookID uint64) ([]EnglishBookChapter, error) {
	ctx, err := a.englishLibraryContext()
	if err != nil {
		return nil, err
	}
	return a.cloudDisk.ListEnglishBookChapters(ctx, bookID)
}

func (a *App) ListEnglishBookParagraphs(chapterID uint64, page, pageSize int) (EnglishBookParagraphPage, error) {
	ctx, err := a.englishLibraryContext()
	if err != nil {
		return EnglishBookParagraphPage{}, err
	}
	return a.cloudDisk.ListEnglishBookParagraphs(ctx, chapterID, page, pageSize)
}

func (a *App) GetEnglishBookProgress(bookID uint64) (EnglishBookProgress, error) {
	ctx, err := a.englishLibraryContext()
	if err != nil {
		return EnglishBookProgress{}, err
	}
	return a.cloudDisk.GetEnglishBookProgress(ctx, bookID)
}

func (a *App) SaveEnglishBookProgress(bookID, chapterID uint64, paragraphNo int, progressPercent float64) error {
	ctx, err := a.englishLibraryContext()
	if err != nil {
		return err
	}
	return a.cloudDisk.SaveEnglishBookProgress(ctx, bookID, EnglishBookProgressUpdate{
		ChapterID: chapterID, ParagraphNo: paragraphNo, ProgressPercent: progressPercent,
	})
}

func (a *App) RecordEnglishWord(question EnglishQuestion, mode string) error {
	if strings.TrimSpace(question.Source) == "" {
		question.Source = a.store.Snapshot().Settings.EnglishSource
	}
	return a.store.RecordEnglishWord(question, mode, time.Now())
}

func (a *App) RecordEnglishWrong(question EnglishQuestion, mode, answer, correctAnswer string) error {
	if strings.TrimSpace(question.Source) == "" {
		question.Source = a.store.Snapshot().Settings.EnglishSource
	}
	return a.store.RecordEnglishWrong(question, mode, answer, correctAnswer, time.Now())
}

func (a *App) SetEnglishWindow(active bool) {
	a.englishMode.Store(active)
	if a.ctx == nil {
		return
	}
	setWindowBackgroundTransparent(active)
	if active {
		runtime.WindowSetMinSize(a.ctx, 420, 80)
		runtime.WindowSetMaxSize(a.ctx, 1200, 128)
		runtime.WindowSetSize(a.ctx, 720, 80)
	} else {
		a.applyWindowMode(a.store.Snapshot().Settings.CompactMode)
	}
	a.applyWindowOpacity()
}

func (a *App) SetStockWindow(active bool) {
	a.stockMode.Store(active)
	if a.ctx == nil {
		return
	}
	setWindowBackgroundTransparent(active)
	if active {
		runtime.WindowSetMinSize(a.ctx, 300, 220)
		runtime.WindowSetMaxSize(a.ctx, 460, 500)
		runtime.WindowSetSize(a.ctx, 330, 245)
		runtime.WindowSetAlwaysOnTop(a.ctx, true)
	} else {
		a.applyWindowMode(a.store.Snapshot().Settings.CompactMode)
		runtime.WindowCenter(a.ctx)
		runtime.WindowSetAlwaysOnTop(a.ctx, a.store.Snapshot().Settings.AlwaysOnTop)
	}
	a.applyWindowOpacity()
}

func (a *App) SetEnglishWindowContentWidth(width int) {
	a.SetEnglishWindowContentSize(width, 80)
}

func (a *App) SetEnglishWindowContentSize(width, height int) {
	if a.ctx == nil || !a.englishMode.Load() {
		return
	}
	if width < 420 {
		width = 420
	}
	if width > 1200 {
		width = 1200
	}
	if height < 80 {
		height = 80
	}
	if height > 128 {
		height = 128
	}
	runtime.WindowSetSize(a.ctx, width, height)
}

func (a *App) TestNotification() error {
	todo := Todo{ID: "notification-test", Title: "提醒功能测试", Note: "窗口置前与多色提醒工作正常"}
	a.triggerReminder(todo)
	go func() {
		_ = sendNotification("工位岛提醒", "提醒功能工作正常，别忘了给自己留一点休息时间。")
	}()
	return nil
}

func (a *App) PlayReminderSound() {
	playReminderSound()
}

func (a *App) GetActiveReminder() *ReminderAlert {
	a.alertMu.RLock()
	alert := a.activeAlert
	a.alertMu.RUnlock()
	if alert == nil {
		return nil
	}
	copyAlert := *alert
	return &copyAlert
}

func (a *App) AcknowledgeReminder(sequence uint64) {
	a.alertMu.Lock()
	if a.activeAlert != nil && a.activeAlert.Sequence == sequence {
		a.activeAlert = nil
	}
	a.alertMu.Unlock()
	a.alertSeq.Add(1)
	if a.ctx != nil && !a.store.Snapshot().Settings.AlwaysOnTop {
		runtime.WindowSetAlwaysOnTop(a.ctx, false)
	}
	a.applyWindowOpacity()
}

func (a *App) DataPath() string {
	return a.store.path
}

func (a *App) runScheduler(ctx context.Context) {
	check := func() {
		now := time.Now()
		due, err := a.store.Due(now)
		if err == nil {
			for _, todo := range due {
				body := todo.Title
				if todo.Note != "" {
					body = fmt.Sprintf("%s\n%s", todo.Title, todo.Note)
				}
				a.triggerReminder(todo)
				go func(message string) { _ = sendNotification("待办到时间了", message) }(body)
			}
		}
		focus, err := a.store.FocusDue(now)
		if err == nil && focus != nil {
			title := "专注完成，请休息一下"
			body := "起身活动、喝点水，让眼睛和肩颈放松一下。"
			if a.store.Snapshot().Settings.Language == "en" {
				title = "Focus complete — take a break"
				body = "Stand up, drink some water, and rest your eyes and shoulders."
			}
			a.triggerAlert(Todo{ID: "focus-complete", Title: title, Note: body}, "focus")
			go func() { _ = sendNotification(title, body) }()
		}
	}
	check()
	ticker := time.NewTicker(5 * time.Second)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			check()
		}
	}
}

func (a *App) applyWindowMode(compact bool) {
	if a.ctx == nil {
		return
	}
	if compact {
		settings := a.store.Snapshot().Settings
		runtime.WindowSetMinSize(a.ctx, 400, 270)
		runtime.WindowSetMaxSize(a.ctx, 900, 600)
		runtime.WindowSetSize(a.ctx, settings.CompactWidth, settings.CompactHeight)
		return
	}
	width := defaultFullWindowWidth
	runtime.WindowSetMaxSize(a.ctx, width, fullWindowHeight)
	runtime.WindowSetMinSize(a.ctx, width, fullWindowHeight)
	runtime.WindowSetSize(a.ctx, width, fullWindowHeight)
}

func (a *App) applyNativeTheme(theme string) {
	if a.ctx == nil {
		return
	}
	switch theme {
	case "light", "plus-light", "pro-light", "ultra-light":
		runtime.WindowSetLightTheme(a.ctx)
	case "dark", "plus-theme", "pro-theme", "ultra-theme":
		runtime.WindowSetDarkTheme(a.ctx)
	case "aurora":
		runtime.WindowSetDarkTheme(a.ctx)
	default:
		runtime.WindowSetSystemDefaultTheme(a.ctx)
	}
}

func (a *App) applyWindowOpacity() {
	settings := a.store.Snapshot().Settings
	setWindowOpacity(windowOpacityForMode(settings, a.englishMode.Load(), a.stockMode.Load()))
}

func windowOpacityForMode(settings Settings, englishMode, stockMode bool) float64 {
	if englishMode || (!settings.CompactMode && !stockMode) {
		return 1
	}
	opacity := float64(settings.CompactOpacity) / 100
	if opacity < 0.3 {
		return 0.3
	}
	if opacity > 1 {
		return 1
	}
	return opacity
}

func (a *App) triggerReminder(todo Todo) {
	a.triggerAlert(todo, "todo")
}

func (a *App) triggerAlert(todo Todo, kind string) {
	sequence := a.alertSeq.Add(1)
	now := time.Now()
	alert := &ReminderAlert{Sequence: sequence, Kind: kind, Todo: todo, TriggeredAt: now}
	a.alertMu.Lock()
	a.activeAlert = alert
	a.alertMu.Unlock()
	if a.ctx == nil {
		return
	}
	setTrayWindowHidden(false)
	runtime.WindowShow(a.ctx)
	runtime.WindowUnminimise(a.ctx)
	setWindowOpacity(1)
	runtime.WindowSetAlwaysOnTop(a.ctx, true)
	bringAppToFront()
	runtime.EventsEmit(a.ctx, "reminder:due", alert)
}

func (a *App) showRealtimeEffect(effect string, senderUserID int64, senderDisplayName, text string) {
	if a.ctx == nil {
		return
	}
	setTrayWindowHidden(false)
	runtime.WindowShow(a.ctx)
	runtime.WindowUnminimise(a.ctx)
	setWindowOpacity(1)
	bringAppToFront()
	runtime.EventsEmit(a.ctx, "realtime:effect", map[string]any{
		"effect":            effect,
		"senderUserId":      senderUserID,
		"senderDisplayName": senderDisplayName,
		"text":              text,
		"timestamp":         time.Now().UnixMilli(),
	})
}

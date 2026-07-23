package main

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"os"
	"path/filepath"
	"sync"
	"sync/atomic"
	"time"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

const appVersion = "0.7.0"

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
	if a.cancel != nil {
		a.cancel()
	}
}

func (a *App) GetState() State {
	return a.store.Snapshot()
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
	setWindowOpacity(float64(percent) / 100)
}

func (a *App) RestoreWindowOpacity() {
	a.applyWindowOpacity()
}

func (a *App) MinimiseWindow() {
	if a.ctx != nil {
		runtime.WindowMinimise(a.ctx)
	}
}

// HideToTray keeps the process and scheduler alive while removing the main
// window from the desktop. The tray menu is the intentional exit path.
func (a *App) HideToTray() {
	if a.ctx == nil {
		return
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
	runtime.WindowSetMaxSize(a.ctx, 940, 650)
	runtime.WindowSetMinSize(a.ctx, 940, 650)
	runtime.WindowSetSize(a.ctx, 940, 650)
}

func (a *App) applyNativeTheme(theme string) {
	if a.ctx == nil {
		return
	}
	switch theme {
	case "light":
		runtime.WindowSetLightTheme(a.ctx)
	case "dark":
		runtime.WindowSetDarkTheme(a.ctx)
	default:
		runtime.WindowSetSystemDefaultTheme(a.ctx)
	}
}

func (a *App) applyWindowOpacity() {
	opacity := 1.0
	settings := a.store.Snapshot().Settings
	if settings.CompactMode {
		opacity = float64(settings.CompactOpacity) / 100
	}
	setWindowOpacity(opacity)
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

func (a *App) showRealtimeEffect(effect string, senderUserID int64, text string) {
	if a.ctx == nil {
		return
	}
	setTrayWindowHidden(false)
	runtime.WindowShow(a.ctx)
	runtime.WindowUnminimise(a.ctx)
	setWindowOpacity(1)
	bringAppToFront()
	runtime.EventsEmit(a.ctx, "realtime:effect", map[string]any{
		"effect":       effect,
		"senderUserId": senderUserID,
		"text":         text,
		"timestamp":    time.Now().UnixMilli(),
	})
}

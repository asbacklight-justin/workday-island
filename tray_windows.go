//go:build windows

package main

import (
	"os"
	gorruntime "runtime"
	"sync"
	"syscall"
	"unsafe"

	"golang.org/x/sys/windows"
)

const (
	trayWMApp          = 0x8000
	trayCallback       = trayWMApp + 42
	trayWMClose        = 0x0010
	trayWMDestroy      = 0x0002
	trayWMNull         = 0x0000
	trayWMContextMenu  = 0x007B
	trayWMLButtonUp    = 0x0202
	trayWMLButtonDbl   = 0x0203
	trayWMRButtonUp    = 0x0205
	trayNIMAdd         = 0x00000000
	trayNIMDelete      = 0x00000002
	trayNIMSetVersion  = 0x00000004
	trayNIFMessage     = 0x00000001
	trayNIFIcon        = 0x00000002
	trayNIFTip         = 0x00000004
	trayIconVersion    = 4
	trayMFString       = 0x00000000
	trayMFSeparator    = 0x00000800
	trayTPMRightButton = 0x0002
	trayTPMReturnCmd   = 0x0100
	trayShowCommand    = 1001
	trayQuitCommand    = 1002
	trayIDIApplication = 32512
)

type trayPoint struct {
	X int32
	Y int32
}

type trayMessage struct {
	HWnd    windows.Handle
	Message uint32
	WParam  uintptr
	LParam  uintptr
	Time    uint32
	Point   trayPoint
}

type trayWindowClass struct {
	CbSize      uint32
	Style       uint32
	WindowProc  uintptr
	ClassExtra  int32
	WindowExtra int32
	Instance    windows.Handle
	Icon        windows.Handle
	Cursor      windows.Handle
	Background  windows.Handle
	MenuName    *uint16
	ClassName   *uint16
	SmallIcon   windows.Handle
}

type trayNotifyIconData struct {
	CbSize          uint32
	Window          windows.Handle
	ID              uint32
	Flags           uint32
	CallbackMessage uint32
	Icon            windows.Handle
	Tip             [128]uint16
	State           uint32
	StateMask       uint32
	Info            [256]uint16
	Version         uint32
	InfoTitle       [64]uint16
	InfoFlags       uint32
	GUID            windows.GUID
	BalloonIcon     windows.Handle
}

var (
	trayUser32                = windows.NewLazySystemDLL("user32.dll")
	trayShell32               = windows.NewLazySystemDLL("shell32.dll")
	trayKernel32              = windows.NewLazySystemDLL("kernel32.dll")
	trayRegisterClassEx       = trayUser32.NewProc("RegisterClassExW")
	trayCreateWindowEx        = trayUser32.NewProc("CreateWindowExW")
	trayDefWindowProc         = trayUser32.NewProc("DefWindowProcW")
	trayDestroyWindow         = trayUser32.NewProc("DestroyWindow")
	trayGetMessage            = trayUser32.NewProc("GetMessageW")
	trayTranslateMessage      = trayUser32.NewProc("TranslateMessage")
	trayDispatchMessage       = trayUser32.NewProc("DispatchMessageW")
	trayPostQuitMessage       = trayUser32.NewProc("PostQuitMessage")
	trayPostMessage           = trayUser32.NewProc("PostMessageW")
	trayCreatePopupMenu       = trayUser32.NewProc("CreatePopupMenu")
	trayAppendMenu            = trayUser32.NewProc("AppendMenuW")
	trayDestroyMenu           = trayUser32.NewProc("DestroyMenu")
	trayTrackPopupMenu        = trayUser32.NewProc("TrackPopupMenu")
	trayGetCursorPos          = trayUser32.NewProc("GetCursorPos")
	traySetForegroundWindow   = trayUser32.NewProc("SetForegroundWindow")
	trayLoadIcon              = trayUser32.NewProc("LoadIconW")
	trayDestroyIcon           = trayUser32.NewProc("DestroyIcon")
	trayRegisterWindowMessage = trayUser32.NewProc("RegisterWindowMessageW")
	trayShellNotifyIcon       = trayShell32.NewProc("Shell_NotifyIconW")
	trayExtractIcon           = trayShell32.NewProc("ExtractIconExW")
	trayGetModuleHandle       = trayKernel32.NewProc("GetModuleHandleW")
	trayWindowProcPointer     = syscall.NewCallback(trayWindowProcedure)
	trayWindowsMu             sync.RWMutex
	trayWindowsApp            *App
	trayWindowsWindow         windows.Handle
	trayWindowsIcon           windows.Handle
	trayWindowsIconOwned      bool
	trayWindowsNotifyData     trayNotifyIconData
	trayTaskbarCreatedMessage uint32
)

func startTray(app *App) {
	trayWindowsMu.Lock()
	if trayWindowsApp != nil {
		trayWindowsMu.Unlock()
		return
	}
	trayWindowsApp = app
	trayWindowsMu.Unlock()
	go runTrayMessageLoop()
}

func stopTray() {
	trayWindowsMu.RLock()
	window := trayWindowsWindow
	trayWindowsMu.RUnlock()
	if window != 0 {
		trayPostMessage.Call(uintptr(window), trayWMClose, 0, 0)
	}
}

func setTrayWindowHidden(_ bool) {}

func runTrayMessageLoop() {
	gorruntime.LockOSThread()
	defer gorruntime.UnlockOSThread()

	className, _ := windows.UTF16PtrFromString("WorkdayIslandTrayWindow")
	windowName, _ := windows.UTF16PtrFromString("Workday Island Tray")
	module, _, _ := trayGetModuleHandle.Call(0)
	windowClass := trayWindowClass{
		CbSize:     uint32(unsafe.Sizeof(trayWindowClass{})),
		WindowProc: trayWindowProcPointer,
		Instance:   windows.Handle(module),
		ClassName:  className,
	}
	trayRegisterClassEx.Call(uintptr(unsafe.Pointer(&windowClass)))
	messageOnlyWindow := ^uintptr(2)
	windowValue, _, _ := trayCreateWindowEx.Call(
		0,
		uintptr(unsafe.Pointer(className)),
		uintptr(unsafe.Pointer(windowName)),
		0, 0, 0, 0, 0,
		messageOnlyWindow, 0, module, 0,
	)
	if windowValue == 0 {
		clearWindowsTrayState()
		return
	}
	window := windows.Handle(windowValue)
	icon, owned := loadTrayIcon()
	tip, _ := windows.UTF16FromString("工位岛 · Workday Island")
	notifyData := trayNotifyIconData{
		CbSize:          uint32(unsafe.Sizeof(trayNotifyIconData{})),
		Window:          window,
		ID:              1,
		Flags:           trayNIFMessage | trayNIFIcon | trayNIFTip,
		CallbackMessage: trayCallback,
		Icon:            icon,
	}
	copy(notifyData.Tip[:], tip)
	trayWindowsMu.Lock()
	trayWindowsWindow = window
	trayWindowsIcon = icon
	trayWindowsIconOwned = owned
	trayWindowsNotifyData = notifyData
	trayWindowsMu.Unlock()
	addWindowsTrayIcon()
	taskbarCreatedName, _ := windows.UTF16PtrFromString("TaskbarCreated")
	registered, _, _ := trayRegisterWindowMessage.Call(uintptr(unsafe.Pointer(taskbarCreatedName)))
	trayTaskbarCreatedMessage = uint32(registered)

	var message trayMessage
	for {
		result, _, _ := trayGetMessage.Call(uintptr(unsafe.Pointer(&message)), 0, 0, 0)
		if int32(result) <= 0 {
			break
		}
		trayTranslateMessage.Call(uintptr(unsafe.Pointer(&message)))
		trayDispatchMessage.Call(uintptr(unsafe.Pointer(&message)))
	}
	clearWindowsTrayState()
}

func trayWindowProcedure(window windows.Handle, message uint32, wParam, lParam uintptr) uintptr {
	if trayTaskbarCreatedMessage != 0 && message == trayTaskbarCreatedMessage {
		addWindowsTrayIcon()
		return 0
	}
	switch message {
	case trayCallback:
		event := uint32(lParam & 0xffff)
		switch event {
		case trayWMLButtonUp, trayWMLButtonDbl:
			if app := currentWindowsTrayApp(); app != nil {
				app.ShowFromTray()
			}
		case trayWMRButtonUp, trayWMContextMenu:
			showWindowsTrayMenu(window)
		}
		return 0
	case trayWMClose:
		trayDestroyWindow.Call(uintptr(window))
		return 0
	case trayWMDestroy:
		removeWindowsTrayIcon()
		trayPostQuitMessage.Call(0)
		return 0
	}
	result, _, _ := trayDefWindowProc.Call(uintptr(window), uintptr(message), wParam, lParam)
	return result
}

func currentWindowsTrayApp() *App {
	trayWindowsMu.RLock()
	defer trayWindowsMu.RUnlock()
	return trayWindowsApp
}

func showWindowsTrayMenu(window windows.Handle) {
	menu, _, _ := trayCreatePopupMenu.Call()
	if menu == 0 {
		return
	}
	defer trayDestroyMenu.Call(menu)
	showText, _ := windows.UTF16PtrFromString("显示工位岛 / Show Workday Island")
	quitText, _ := windows.UTF16PtrFromString("退出 / Quit")
	trayAppendMenu.Call(menu, trayMFString, trayShowCommand, uintptr(unsafe.Pointer(showText)))
	trayAppendMenu.Call(menu, trayMFSeparator, 0, 0)
	trayAppendMenu.Call(menu, trayMFString, trayQuitCommand, uintptr(unsafe.Pointer(quitText)))

	var point trayPoint
	trayGetCursorPos.Call(uintptr(unsafe.Pointer(&point)))
	traySetForegroundWindow.Call(uintptr(window))
	command, _, _ := trayTrackPopupMenu.Call(
		menu,
		trayTPMRightButton|trayTPMReturnCmd,
		uintptr(point.X), uintptr(point.Y),
		0, uintptr(window), 0,
	)
	trayPostMessage.Call(uintptr(window), trayWMNull, 0, 0)
	app := currentWindowsTrayApp()
	if app == nil {
		return
	}
	switch command {
	case trayShowCommand:
		app.ShowFromTray()
	case trayQuitCommand:
		app.QuitApp()
	}
}

func addWindowsTrayIcon() {
	trayWindowsMu.Lock()
	defer trayWindowsMu.Unlock()
	if trayWindowsNotifyData.Window == 0 {
		return
	}
	trayWindowsNotifyData.Version = 0
	trayShellNotifyIcon.Call(trayNIMAdd, uintptr(unsafe.Pointer(&trayWindowsNotifyData)))
	trayWindowsNotifyData.Version = trayIconVersion
	trayShellNotifyIcon.Call(trayNIMSetVersion, uintptr(unsafe.Pointer(&trayWindowsNotifyData)))
}

func removeWindowsTrayIcon() {
	trayWindowsMu.Lock()
	defer trayWindowsMu.Unlock()
	if trayWindowsNotifyData.Window != 0 {
		trayShellNotifyIcon.Call(trayNIMDelete, uintptr(unsafe.Pointer(&trayWindowsNotifyData)))
	}
	if trayWindowsIconOwned && trayWindowsIcon != 0 {
		trayDestroyIcon.Call(uintptr(trayWindowsIcon))
	}
	trayWindowsIcon = 0
	trayWindowsIconOwned = false
	trayWindowsNotifyData = trayNotifyIconData{}
}

func loadTrayIcon() (windows.Handle, bool) {
	executable, err := os.Executable()
	if err == nil {
		path, pathErr := windows.UTF16PtrFromString(executable)
		if pathErr == nil {
			var largeIcon, smallIcon windows.Handle
			count, _, _ := trayExtractIcon.Call(
				uintptr(unsafe.Pointer(path)), 0,
				uintptr(unsafe.Pointer(&largeIcon)), uintptr(unsafe.Pointer(&smallIcon)), 1,
			)
			if count > 0 {
				if smallIcon != 0 {
					if largeIcon != 0 {
						trayDestroyIcon.Call(uintptr(largeIcon))
					}
					return smallIcon, true
				}
				if largeIcon != 0 {
					return largeIcon, true
				}
			}
		}
	}
	icon, _, _ := trayLoadIcon.Call(0, trayIDIApplication)
	return windows.Handle(icon), false
}

func clearWindowsTrayState() {
	trayWindowsMu.Lock()
	trayWindowsWindow = 0
	trayWindowsApp = nil
	trayWindowsMu.Unlock()
}

//go:build windows

package main

import (
	"sync"
	"unsafe"

	"golang.org/x/sys/windows"
)

const (
	gclpHbrBackground = -10
	nullBrush         = 5
	rdwInvalidate     = 0x0001
	rdwErase          = 0x0004
	rdwAllChildren    = 0x0080
	rdwFrame          = 0x0400
)

type windowsMargins struct {
	Left, Right, Top, Bottom int32
}

var (
	gdi32                          = windows.NewLazySystemDLL("gdi32.dll")
	dwmapi                         = windows.NewLazySystemDLL("dwmapi.dll")
	procGetClassLongPtrW           = user32.NewProc("GetClassLongPtrW")
	procSetClassLongPtrW           = user32.NewProc("SetClassLongPtrW")
	procRedrawWindow               = user32.NewProc("RedrawWindow")
	procGetStockObject             = gdi32.NewProc("GetStockObject")
	procDwmExtendFrameIntoClient   = dwmapi.NewProc("DwmExtendFrameIntoClientArea")
	windowsBackgroundMu            sync.Mutex
	windowsOriginalBackgroundBrush uintptr
)

func setWindowBackgroundTransparent(transparent bool) {
	forEachWailsWindow(func(hwnd uintptr) {
		windowsBackgroundMu.Lock()
		defer windowsBackgroundMu.Unlock()

		index := int32(gclpHbrBackground)
		if windowsOriginalBackgroundBrush == 0 {
			windowsOriginalBackgroundBrush, _, _ = procGetClassLongPtrW.Call(hwnd, uintptr(index))
		}

		if transparent {
			nullBackgroundBrush, _, _ := procGetStockObject.Call(nullBrush)
			procSetClassLongPtrW.Call(hwnd, uintptr(index), nullBackgroundBrush)
			margins := windowsMargins{Left: -1, Right: -1, Top: -1, Bottom: -1}
			procDwmExtendFrameIntoClient.Call(hwnd, uintptr(unsafe.Pointer(&margins)))
		} else {
			if windowsOriginalBackgroundBrush != 0 {
				procSetClassLongPtrW.Call(hwnd, uintptr(index), windowsOriginalBackgroundBrush)
			}
			margins := windowsMargins{}
			procDwmExtendFrameIntoClient.Call(hwnd, uintptr(unsafe.Pointer(&margins)))
		}

		refreshWindowsWindowStyle(hwnd)
		const redrawFlags = rdwInvalidate | rdwErase | rdwAllChildren | rdwFrame
		procRedrawWindow.Call(hwnd, 0, 0, redrawFlags)
	})
}

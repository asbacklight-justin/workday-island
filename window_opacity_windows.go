//go:build windows

package main

import (
	"os"
	"syscall"
	"unsafe"

	"golang.org/x/sys/windows"
)

const (
	gwlExStyle      = -20
	wsExLayered     = 0x00080000
	lwaAlpha        = 0x00000002
	swpNoSize       = 0x0001
	swpNoMove       = 0x0002
	swpNoZOrder     = 0x0004
	swpNoActivate   = 0x0010
	swpFrameChanged = 0x0020
)

var (
	user32                         = windows.NewLazySystemDLL("user32.dll")
	procEnumWindows                = user32.NewProc("EnumWindows")
	procGetWindowThreadProcessID   = user32.NewProc("GetWindowThreadProcessId")
	procGetClassNameW              = user32.NewProc("GetClassNameW")
	procGetWindowLongPtrW          = user32.NewProc("GetWindowLongPtrW")
	procSetWindowLongPtrW          = user32.NewProc("SetWindowLongPtrW")
	procSetLayeredWindowAttributes = user32.NewProc("SetLayeredWindowAttributes")
	procSetWindowPos               = user32.NewProc("SetWindowPos")
)

func setWindowOpacity(opacity float64) {
	if opacity < 0.3 {
		opacity = 0.3
	}
	if opacity > 1 {
		opacity = 1
	}
	alpha := byte(opacity*255 + 0.5)
	forEachWailsWindow(func(hwnd uintptr) {
		index := int32(gwlExStyle)
		style, _, _ := procGetWindowLongPtrW.Call(hwnd, uintptr(index))

		if alpha == 255 {
			// A layered HWND with alpha 255 still leaves an opaque host surface
			// behind WebView2. English learning keeps its text fully opaque and
			// renders opacity only in the web background, so remove the layered
			// style completely when native opacity returns to 100%.
			if style&wsExLayered != 0 {
				procSetWindowLongPtrW.Call(hwnd, uintptr(index), style & ^uintptr(wsExLayered))
				refreshWindowsWindowStyle(hwnd)
			}
			return
		}

		if style&wsExLayered == 0 {
			procSetWindowLongPtrW.Call(hwnd, uintptr(index), style|wsExLayered)
			refreshWindowsWindowStyle(hwnd)
		}
		procSetLayeredWindowAttributes.Call(hwnd, 0, uintptr(alpha), lwaAlpha)
	})
}

func forEachWailsWindow(visit func(hwnd uintptr)) {
	processID := uint32(os.Getpid())
	callback := syscall.NewCallback(func(hwnd uintptr, _ uintptr) uintptr {
		var owner uint32
		procGetWindowThreadProcessID.Call(hwnd, uintptr(unsafe.Pointer(&owner)))
		if owner != processID || windowClassName(hwnd) != "wailsWindow" {
			return 1
		}
		visit(hwnd)
		return 1
	})
	procEnumWindows.Call(callback, 0)
}

func refreshWindowsWindowStyle(hwnd uintptr) {
	const flags = swpNoSize | swpNoMove | swpNoZOrder | swpNoActivate | swpFrameChanged
	procSetWindowPos.Call(hwnd, 0, 0, 0, 0, 0, flags)
}

func windowClassName(hwnd uintptr) string {
	buffer := make([]uint16, 64)
	length, _, _ := procGetClassNameW.Call(hwnd, uintptr(unsafe.Pointer(&buffer[0])), uintptr(len(buffer)))
	return windows.UTF16ToString(buffer[:length])
}

//go:build windows

package main

import (
	"os"
	"syscall"
	"unsafe"

	"golang.org/x/sys/windows"
)

const (
	gwlExStyle  = -20
	wsExLayered = 0x00080000
	lwaAlpha    = 0x00000002
)

var (
	user32                         = windows.NewLazySystemDLL("user32.dll")
	procEnumWindows                = user32.NewProc("EnumWindows")
	procGetWindowThreadProcessID   = user32.NewProc("GetWindowThreadProcessId")
	procGetClassNameW              = user32.NewProc("GetClassNameW")
	procGetWindowLongPtrW          = user32.NewProc("GetWindowLongPtrW")
	procSetWindowLongPtrW          = user32.NewProc("SetWindowLongPtrW")
	procSetLayeredWindowAttributes = user32.NewProc("SetLayeredWindowAttributes")
)

func setWindowOpacity(opacity float64) {
	if opacity < 0.3 {
		opacity = 0.3
	}
	if opacity > 1 {
		opacity = 1
	}
	alpha := byte(opacity*255 + 0.5)
	processID := uint32(os.Getpid())
	callback := syscall.NewCallback(func(hwnd uintptr, _ uintptr) uintptr {
		var owner uint32
		procGetWindowThreadProcessID.Call(hwnd, uintptr(unsafe.Pointer(&owner)))
		if owner != processID || windowClassName(hwnd) != "wailsWindow" {
			return 1
		}
		index := int32(gwlExStyle)
		style, _, _ := procGetWindowLongPtrW.Call(hwnd, uintptr(index))
		if style&wsExLayered == 0 {
			procSetWindowLongPtrW.Call(hwnd, uintptr(index), style|wsExLayered)
		}
		procSetLayeredWindowAttributes.Call(hwnd, 0, uintptr(alpha), lwaAlpha)
		return 0
	})
	procEnumWindows.Call(callback, 0)
}

func windowClassName(hwnd uintptr) string {
	buffer := make([]uint16, 64)
	length, _, _ := procGetClassNameW.Call(hwnd, uintptr(unsafe.Pointer(&buffer[0])), uintptr(len(buffer)))
	return windows.UTF16ToString(buffer[:length])
}

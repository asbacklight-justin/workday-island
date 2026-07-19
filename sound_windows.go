//go:build windows

package main

import "golang.org/x/sys/windows"

var messageBeep = windows.NewLazySystemDLL("user32.dll").NewProc("MessageBeep")

func playReminderSound() {
	_, _, _ = messageBeep.Call(0x00000040)
}

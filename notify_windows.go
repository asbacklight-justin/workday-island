//go:build windows

package main

import (
	"fmt"
	"os/exec"
	"strings"
	"syscall"
)

func sendNotification(title, body string) error {
	escape := func(value string) string { return strings.ReplaceAll(value, "'", "''") }
	script := fmt.Sprintf(`Add-Type -AssemblyName System.Windows.Forms; $n=New-Object System.Windows.Forms.NotifyIcon; $n.Icon=[System.Drawing.SystemIcons]::Information; $n.BalloonTipTitle='%s'; $n.BalloonTipText='%s'; $n.Visible=$true; $n.ShowBalloonTip(5000); Start-Sleep -Seconds 6; $n.Dispose()`, escape(title), escape(body))
	command := exec.Command("powershell.exe", "-NoLogo", "-NoProfile", "-NonInteractive", "-WindowStyle", "Hidden", "-Command", script)
	command.SysProcAttr = &syscall.SysProcAttr{HideWindow: true, CreationFlags: 0x08000000}
	if output, err := command.CombinedOutput(); err != nil {
		return fmt.Errorf("发送系统通知失败: %s", strings.TrimSpace(string(output)))
	}
	return nil
}

//go:build windows

package main

import (
	"fmt"
	"os/exec"
	"strings"
)

func sendNotification(title, body string) error {
	escape := func(value string) string { return strings.ReplaceAll(value, "'", "''") }
	script := fmt.Sprintf(`Add-Type -AssemblyName System.Windows.Forms; $n=New-Object System.Windows.Forms.NotifyIcon; $n.Icon=[System.Drawing.SystemIcons]::Information; $n.BalloonTipTitle='%s'; $n.BalloonTipText='%s'; $n.Visible=$true; $n.ShowBalloonTip(5000); Start-Sleep -Seconds 6; $n.Dispose()`, escape(title), escape(body))
	if output, err := exec.Command("powershell", "-NoProfile", "-NonInteractive", "-Command", script).CombinedOutput(); err != nil {
		return fmt.Errorf("发送系统通知失败: %s", strings.TrimSpace(string(output)))
	}
	return nil
}

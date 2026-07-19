//go:build darwin

package main

import (
	"fmt"
	"os/exec"
	"strings"
)

func sendNotification(title, body string) error {
	script := `on run argv
display notification (item 2 of argv) with title (item 1 of argv) sound name "Glass"
end run`
	if output, err := exec.Command("/usr/bin/osascript", "-e", script, title, body).CombinedOutput(); err != nil {
		return fmt.Errorf("发送系统通知失败: %s", strings.TrimSpace(string(output)))
	}
	return nil
}

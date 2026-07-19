//go:build darwin

package main

import "os/exec"

func playReminderSound() {
	go func() {
		_ = exec.Command("/usr/bin/afplay", "-v", "0.35", "/System/Library/Sounds/Glass.aiff").Run()
	}()
}

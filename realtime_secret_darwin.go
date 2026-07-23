//go:build darwin

package main

import (
	"encoding/base64"
	"fmt"
	"os/exec"
	"strings"
)

const realtimeKeychainService = "com.backlight.workday-island.realtime"

func saveRealtimePrivateKey(deviceID string, privateKey []byte) error {
	value := base64.StdEncoding.EncodeToString(privateKey)
	command := exec.Command("/usr/bin/security", "add-generic-password",
		"-a", deviceID, "-s", realtimeKeychainService, "-w", value, "-U")
	if output, err := command.CombinedOutput(); err != nil {
		return fmt.Errorf("保存设备私钥到钥匙串失败: %s", strings.TrimSpace(string(output)))
	}
	return nil
}

func loadRealtimePrivateKey(deviceID string) ([]byte, error) {
	command := exec.Command("/usr/bin/security", "find-generic-password",
		"-a", deviceID, "-s", realtimeKeychainService, "-w")
	output, err := command.Output()
	if err != nil {
		return nil, fmt.Errorf("读取设备私钥失败")
	}
	privateKey, err := base64.StdEncoding.DecodeString(strings.TrimSpace(string(output)))
	if err != nil {
		return nil, fmt.Errorf("设备私钥格式无效")
	}
	return privateKey, nil
}

func deleteRealtimePrivateKey(deviceID string) error {
	command := exec.Command("/usr/bin/security", "delete-generic-password",
		"-a", deviceID, "-s", realtimeKeychainService)
	if output, err := command.CombinedOutput(); err != nil {
		text := strings.TrimSpace(string(output))
		if strings.Contains(text, "could not be found") {
			return nil
		}
		return fmt.Errorf("删除设备私钥失败: %s", text)
	}
	return nil
}

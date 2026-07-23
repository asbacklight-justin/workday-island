package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

func realtimeSecretPath(deviceID string) (string, error) {
	deviceID = strings.TrimSpace(deviceID)
	if deviceID == "" || strings.ContainsAny(deviceID, `/\`) {
		return "", fmt.Errorf("无效的设备标识")
	}
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "", fmt.Errorf("读取系统配置目录失败: %w", err)
	}
	return filepath.Join(configDir, "WorkdayIsland", "realtime-"+deviceID+".key"), nil
}

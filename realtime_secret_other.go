//go:build !darwin && !windows

package main

import (
	"encoding/base64"
	"fmt"
	"os"
	"path/filepath"
)

func saveRealtimePrivateKey(deviceID string, privateKey []byte) error {
	path, err := realtimeSecretPath(deviceID)
	if err != nil {
		return err
	}
	if err := os.MkdirAll(filepath.Dir(path), 0o700); err != nil {
		return fmt.Errorf("创建设备密钥目录失败: %w", err)
	}
	value := []byte(base64.StdEncoding.EncodeToString(privateKey))
	if err := os.WriteFile(path, value, 0o600); err != nil {
		return fmt.Errorf("保存设备私钥失败: %w", err)
	}
	return nil
}

func loadRealtimePrivateKey(deviceID string) ([]byte, error) {
	path, err := realtimeSecretPath(deviceID)
	if err != nil {
		return nil, err
	}
	value, err := os.ReadFile(path)
	if err != nil {
		return nil, fmt.Errorf("读取设备私钥失败: %w", err)
	}
	privateKey, err := base64.StdEncoding.DecodeString(string(value))
	if err != nil {
		return nil, fmt.Errorf("设备私钥格式无效")
	}
	return privateKey, nil
}

func deleteRealtimePrivateKey(deviceID string) error {
	path, err := realtimeSecretPath(deviceID)
	if err != nil {
		return err
	}
	if err := os.Remove(path); err != nil && !os.IsNotExist(err) {
		return fmt.Errorf("删除设备私钥失败: %w", err)
	}
	return nil
}

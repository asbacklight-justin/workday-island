//go:build windows

package main

import (
	"fmt"
	"os"
	"path/filepath"
	"unsafe"

	"golang.org/x/sys/windows"
)

const cryptProtectUIForbidden = 0x1

type realtimeDataBlob struct {
	size uint32
	data *byte
}

var (
	crypt32DLL         = windows.NewLazySystemDLL("crypt32.dll")
	kernel32DLL        = windows.NewLazySystemDLL("kernel32.dll")
	cryptProtectData   = crypt32DLL.NewProc("CryptProtectData")
	cryptUnprotectData = crypt32DLL.NewProc("CryptUnprotectData")
	localFree          = kernel32DLL.NewProc("LocalFree")
)

func saveRealtimePrivateKey(deviceID string, privateKey []byte) error {
	encrypted, err := protectRealtimeSecret(privateKey)
	if err != nil {
		return err
	}
	path, err := realtimeSecretPath(deviceID)
	if err != nil {
		return err
	}
	if err := os.MkdirAll(filepath.Dir(path), 0o700); err != nil {
		return fmt.Errorf("创建设备密钥目录失败: %w", err)
	}
	if err := os.WriteFile(path, encrypted, 0o600); err != nil {
		return fmt.Errorf("保存加密设备私钥失败: %w", err)
	}
	return nil
}

func loadRealtimePrivateKey(deviceID string) ([]byte, error) {
	path, err := realtimeSecretPath(deviceID)
	if err != nil {
		return nil, err
	}
	encrypted, err := os.ReadFile(path)
	if err != nil {
		return nil, fmt.Errorf("读取加密设备私钥失败: %w", err)
	}
	return unprotectRealtimeSecret(encrypted)
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

func protectRealtimeSecret(value []byte) ([]byte, error) {
	if len(value) == 0 {
		return nil, fmt.Errorf("设备私钥为空")
	}
	input := realtimeDataBlob{size: uint32(len(value)), data: &value[0]}
	var output realtimeDataBlob
	result, _, callErr := cryptProtectData.Call(
		uintptr(unsafe.Pointer(&input)), 0, 0, 0, 0,
		cryptProtectUIForbidden, uintptr(unsafe.Pointer(&output)),
	)
	if result == 0 {
		return nil, fmt.Errorf("Windows DPAPI 加密失败: %w", callErr)
	}
	defer localFree.Call(uintptr(unsafe.Pointer(output.data)))
	return append([]byte(nil), unsafe.Slice(output.data, output.size)...), nil
}

func unprotectRealtimeSecret(value []byte) ([]byte, error) {
	if len(value) == 0 {
		return nil, fmt.Errorf("加密设备私钥为空")
	}
	input := realtimeDataBlob{size: uint32(len(value)), data: &value[0]}
	var output realtimeDataBlob
	result, _, callErr := cryptUnprotectData.Call(
		uintptr(unsafe.Pointer(&input)), 0, 0, 0, 0,
		cryptProtectUIForbidden, uintptr(unsafe.Pointer(&output)),
	)
	if result == 0 {
		return nil, fmt.Errorf("Windows DPAPI 解密失败: %w", callErr)
	}
	defer localFree.Call(uintptr(unsafe.Pointer(output.data)))
	return append([]byte(nil), unsafe.Slice(output.data, output.size)...), nil
}

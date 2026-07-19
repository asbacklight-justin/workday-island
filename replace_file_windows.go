//go:build windows

package main

import (
	"errors"
	"os"
)

func replaceFile(source, target string) error {
	if err := os.Remove(target); err != nil && !errors.Is(err, os.ErrNotExist) {
		return err
	}
	return os.Rename(source, target)
}

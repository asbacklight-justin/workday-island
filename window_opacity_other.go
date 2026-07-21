//go:build (!darwin || !cgo) && !windows

package main

func setWindowOpacity(float64) {}

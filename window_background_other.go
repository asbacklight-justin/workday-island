//go:build (!darwin && !windows) || (darwin && !cgo)

package main

func setWindowBackgroundTransparent(bool) {}

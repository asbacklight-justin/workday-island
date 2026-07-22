//go:build (!darwin && !windows) || (darwin && !cgo)

package main

func startTray(_ *App)           {}
func stopTray()                  {}
func setTrayWindowHidden(_ bool) {}

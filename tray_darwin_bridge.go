//go:build darwin

package main

/*
#include <stdint.h>
*/
import "C"

import (
	"sync"

	wailsruntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

var (
	trayDarwinMu  sync.RWMutex
	trayDarwinApp *App
)

func setDarwinTrayApp(app *App) {
	trayDarwinMu.Lock()
	trayDarwinApp = app
	trayDarwinMu.Unlock()
}

//export WorkdayIslandTrayNavigate
func WorkdayIslandTrayNavigate(command C.int) {
	page, ok := trayPageForCommand(int(command))
	if !ok {
		return
	}
	trayDarwinMu.RLock()
	app := trayDarwinApp
	trayDarwinMu.RUnlock()
	if app != nil && app.ctx != nil {
		wailsruntime.EventsEmit(app.ctx, "tray:navigate", page)
	}
}

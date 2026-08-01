//go:build (!darwin && !windows) || (darwin && !cgo)

package main

import (
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func setPlatformWindowFullscreen(ctx context.Context, fullscreen bool) bool {
	if fullscreen {
		runtime.WindowFullscreen(ctx)
	} else {
		runtime.WindowUnfullscreen(ctx)
	}
	return fullscreen
}

func isPlatformWindowFullscreen(ctx context.Context) bool {
	return runtime.WindowIsFullscreen(ctx)
}

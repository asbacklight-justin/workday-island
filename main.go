package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
	windowsoptions "github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	app := NewApp()
	err := wails.Run(&options.App{
		Title:         "工位岛 · Workday Island",
		Width:         1024,
		Height:        650,
		MinWidth:      400,
		MinHeight:     270,
		MaxWidth:      1024,
		MaxHeight:     650,
		DisableResize: false,
		Frameless:     true,
		AlwaysOnTop:   true,
		AssetServer:   &assetserver.Options{Assets: assets},
		BackgroundColour: &options.RGBA{
			R: 11, G: 16, B: 27, A: 0,
		},
		OnStartup:  app.startup,
		OnShutdown: app.shutdown,
		Bind:       []interface{}{app},
		Mac: &mac.Options{
			WebviewIsTransparent: true,
			WindowIsTranslucent:  false,
			DisableZoom:          true,
		},
		Windows: &windowsoptions.Options{
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
			BackdropType:         windowsoptions.None,
			DisablePinchZoom:     true,
		},
		SingleInstanceLock: &options.SingleInstanceLock{
			UniqueId: "com.backlight.workday-island",
		},
	})
	if err != nil {
		println("Error:", err.Error())
	}
}

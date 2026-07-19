package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	app := NewApp()
	err := wails.Run(&options.App{
		Title:         "工位岛 · Workday Island",
		Width:         940,
		Height:        650,
		MinWidth:      400,
		MinHeight:     270,
		MaxWidth:      940,
		MaxHeight:     650,
		DisableResize: false,
		AlwaysOnTop:   true,
		AssetServer:   &assetserver.Options{Assets: assets},
		BackgroundColour: &options.RGBA{
			R: 11, G: 16, B: 27, A: 1,
		},
		OnStartup:  app.startup,
		OnShutdown: app.shutdown,
		Bind:       []interface{}{app},
		Mac: &mac.Options{
			TitleBar:             mac.TitleBarHiddenInset(),
			Appearance:           mac.NSAppearanceNameDarkAqua,
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
			DisableZoom:          true,
		},
		SingleInstanceLock: &options.SingleInstanceLock{
			UniqueId: "com.backlight.workday-island",
		},
	})
	if err != nil {
		println("Error:", err.Error())
	}
}

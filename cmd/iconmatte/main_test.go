package main

import (
	"image/png"
	"os"
	"testing"
)

func TestPackagedIconHasTransparentCanvas(t *testing.T) {
	file, err := os.Open("../../build/appicon.png")
	if err != nil {
		t.Fatal(err)
	}
	defer file.Close()
	icon, err := png.Decode(file)
	if err != nil {
		t.Fatal(err)
	}
	bounds := icon.Bounds()
	_, _, _, cornerAlpha := icon.At(bounds.Min.X, bounds.Min.Y).RGBA()
	_, _, _, centreAlpha := icon.At(bounds.Min.X+bounds.Dx()/2, bounds.Min.Y+bounds.Dy()/2).RGBA()
	if cornerAlpha != 0 {
		t.Fatalf("outer icon canvas should be transparent, alpha=%d", cornerAlpha)
	}
	if centreAlpha == 0 {
		t.Fatal("icon artwork should remain opaque in the centre")
	}
}

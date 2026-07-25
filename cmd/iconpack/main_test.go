package main

import (
	"encoding/binary"
	"image"
	"image/color"
	"os"
	"testing"
)

func TestEncodeICNSIncludesStandardRepresentations(t *testing.T) {
	output, err := os.CreateTemp(t.TempDir(), "icon-*.icns")
	if err != nil {
		t.Fatal(err)
	}
	source := image.NewNRGBA(image.Rect(0, 0, 1024, 1024))
	for y := 0; y < 1024; y++ {
		for x := 0; x < 1024; x++ {
			source.SetNRGBA(x, y, color.NRGBA{R: 40, G: 180, B: 210, A: 255})
		}
	}
	if err := encodeICNS(output, source); err != nil {
		t.Fatal(err)
	}
	if err := output.Close(); err != nil {
		t.Fatal(err)
	}
	data, err := os.ReadFile(output.Name())
	if err != nil {
		t.Fatal(err)
	}
	if string(data[:4]) != "icns" {
		t.Fatalf("unexpected ICNS magic %q", data[:4])
	}
	if got := binary.BigEndian.Uint32(data[4:8]); got != uint32(len(data)) {
		t.Fatalf("container size = %d, want %d", got, len(data))
	}

	found := make(map[string]bool)
	for offset := 8; offset < len(data); {
		id := string(data[offset : offset+4])
		chunkSize := int(binary.BigEndian.Uint32(data[offset+4 : offset+8]))
		found[id] = true
		offset += chunkSize
	}
	for _, id := range []string{"ic10", "ic09", "ic14", "ic08", "ic13", "ic07", "ic12", "icp5", "ic11", "icp4"} {
		if !found[id] {
			t.Errorf("missing ICNS representation %s", id)
		}
	}
}

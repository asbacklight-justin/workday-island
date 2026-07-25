package main

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"image"
	"image/png"
	"os"
	"path/filepath"
	"strings"

	"github.com/nfnt/resize"
)

func main() {
	if len(os.Args) != 3 {
		fmt.Fprintln(os.Stderr, "usage: iconpack input.png output.icns|output.ico")
		os.Exit(2)
	}
	input, err := os.Open(os.Args[1])
	if err != nil {
		panic(err)
	}
	defer input.Close()
	img, _, err := image.Decode(input)
	if err != nil {
		panic(err)
	}
	output, err := os.Create(os.Args[2])
	if err != nil {
		panic(err)
	}
	defer output.Close()
	ext := strings.ToLower(filepath.Ext(os.Args[2]))
	if ext == ".icns" {
		err = encodeICNS(output, img)
	} else if ext == ".ico" {
		err = encodeICO(output, img)
	} else {
		err = fmt.Errorf("unsupported output format %q (use .icns or .ico)", ext)
	}
	if err != nil {
		panic(err)
	}
}

type icnsImage struct {
	id   string
	size uint
}

// encodeICNS writes every standard and Retina representation used by macOS.
// Keeping the 16, 32, 128, 256, 512, and 1024 pixel entries prevents Finder
// and Dock from falling back to the generic application icon.
func encodeICNS(output *os.File, source image.Image) error {
	representations := []icnsImage{
		{id: "ic10", size: 1024},
		{id: "ic09", size: 512},
		{id: "ic14", size: 512},
		{id: "ic08", size: 256},
		{id: "ic13", size: 256},
		{id: "ic07", size: 128},
		{id: "ic12", size: 64},
		{id: "icp5", size: 32},
		{id: "ic11", size: 32},
		{id: "icp4", size: 16},
	}
	encodedBySize := make(map[uint][]byte)
	totalSize := uint32(8)
	for _, representation := range representations {
		if _, ok := encodedBySize[representation.size]; !ok {
			resized := resize.Resize(representation.size, representation.size, source, resize.Lanczos3)
			var encoded bytes.Buffer
			if err := png.Encode(&encoded, resized); err != nil {
				return err
			}
			encodedBySize[representation.size] = encoded.Bytes()
		}
		totalSize += uint32(8 + len(encodedBySize[representation.size]))
	}

	if _, err := output.Write([]byte("icns")); err != nil {
		return err
	}
	if err := binary.Write(output, binary.BigEndian, totalSize); err != nil {
		return err
	}
	for _, representation := range representations {
		data := encodedBySize[representation.size]
		if _, err := output.Write([]byte(representation.id)); err != nil {
			return err
		}
		if err := binary.Write(output, binary.BigEndian, uint32(8+len(data))); err != nil {
			return err
		}
		if _, err := output.Write(data); err != nil {
			return err
		}
	}
	return nil
}

type icoImage struct {
	width uint8
	data  []byte
}

func encodeICO(output *os.File, source image.Image) error {
	sizes := []uint{16, 32, 48, 256}
	images := make([]icoImage, 0, len(sizes))
	for _, size := range sizes {
		resized := resize.Resize(size, size, source, resize.Lanczos3)
		var encoded bytes.Buffer
		if err := png.Encode(&encoded, resized); err != nil {
			return err
		}
		width := uint8(size)
		if size == 256 {
			width = 0
		}
		images = append(images, icoImage{width: width, data: encoded.Bytes()})
	}

	if err := binary.Write(output, binary.LittleEndian, uint16(0)); err != nil {
		return err
	}
	if err := binary.Write(output, binary.LittleEndian, uint16(1)); err != nil {
		return err
	}
	if err := binary.Write(output, binary.LittleEndian, uint16(len(images))); err != nil {
		return err
	}

	offset := uint32(6 + len(images)*16)
	for _, icon := range images {
		entry := []byte{icon.width, icon.width, 0, 0}
		if _, err := output.Write(entry); err != nil {
			return err
		}
		for _, value := range []any{uint16(1), uint16(32), uint32(len(icon.data)), offset} {
			if err := binary.Write(output, binary.LittleEndian, value); err != nil {
				return err
			}
		}
		offset += uint32(len(icon.data))
	}
	for _, icon := range images {
		if _, err := output.Write(icon.data); err != nil {
			return err
		}
	}
	return nil
}

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

	"github.com/jackmordaunt/icns"
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
		err = icns.Encode(output, img)
	} else if ext == ".ico" {
		err = encodeICO(output, img)
	} else {
		err = fmt.Errorf("unsupported output format %q (use .icns or .ico)", ext)
	}
	if err != nil {
		panic(err)
	}
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

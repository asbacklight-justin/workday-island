package main

import (
	"fmt"
	"image"
	"image/color"
	"image/png"
	"math"
	"os"
)

// iconmatte removes only near-white pixels connected to the canvas edge.
// Keeping the flood fill edge-connected protects bright details inside an icon.
func main() {
	if len(os.Args) != 3 {
		fmt.Fprintln(os.Stderr, "usage: iconmatte input.png output.png")
		os.Exit(2)
	}
	input, err := os.Open(os.Args[1])
	if err != nil {
		panic(err)
	}
	source, err := png.Decode(input)
	_ = input.Close()
	if err != nil {
		panic(err)
	}
	bounds := source.Bounds()
	result := image.NewNRGBA(bounds)
	for y := bounds.Min.Y; y < bounds.Max.Y; y++ {
		for x := bounds.Min.X; x < bounds.Max.X; x++ {
			result.Set(x, y, source.At(x, y))
		}
	}

	type point struct{ x, y int }
	queue := make([]point, 0, 2*(bounds.Dx()+bounds.Dy()))
	for x := bounds.Min.X; x < bounds.Max.X; x++ {
		queue = append(queue, point{x, bounds.Min.Y}, point{x, bounds.Max.Y - 1})
	}
	for y := bounds.Min.Y + 1; y < bounds.Max.Y-1; y++ {
		queue = append(queue, point{bounds.Min.X, y}, point{bounds.Max.X - 1, y})
	}
	visited := make([]bool, bounds.Dx()*bounds.Dy())
	const fadeDistance = 150.0
	for len(queue) > 0 {
		current := queue[0]
		queue = queue[1:]
		if current.x < bounds.Min.X || current.x >= bounds.Max.X || current.y < bounds.Min.Y || current.y >= bounds.Max.Y {
			continue
		}
		index := (current.y-bounds.Min.Y)*bounds.Dx() + current.x - bounds.Min.X
		if visited[index] {
			continue
		}
		visited[index] = true
		pixel := color.NRGBAModel.Convert(result.At(current.x, current.y)).(color.NRGBA)
		distance := whiteDistance(pixel)
		if distance > fadeDistance {
			continue
		}
		alpha := uint8(float64(pixel.A) * distance / fadeDistance)
		result.SetNRGBA(current.x, current.y, color.NRGBA{R: pixel.R, G: pixel.G, B: pixel.B, A: alpha})
		queue = append(queue, point{current.x - 1, current.y}, point{current.x + 1, current.y}, point{current.x, current.y - 1}, point{current.x, current.y + 1})
	}

	output, err := os.Create(os.Args[2])
	if err != nil {
		panic(err)
	}
	if err := png.Encode(output, result); err != nil {
		_ = output.Close()
		panic(err)
	}
	if err := output.Close(); err != nil {
		panic(err)
	}
}

func whiteDistance(pixel color.NRGBA) float64 {
	dr := float64(255 - pixel.R)
	dg := float64(255 - pixel.G)
	db := float64(255 - pixel.B)
	return math.Sqrt(dr*dr + dg*dg + db*db)
}

package main

import "testing"

func TestWindowOpacityForMode(t *testing.T) {
	tests := []struct {
		name        string
		settings    Settings
		englishMode bool
		stockMode   bool
		want        float64
	}{
		{
			name:        "english keeps native content opaque",
			settings:    Settings{CompactMode: true, CompactOpacity: 30},
			englishMode: true,
			want:        1,
		},
		{
			name:      "stock window inherits configured opacity",
			settings:  Settings{CompactOpacity: 55},
			stockMode: true,
			want:      0.55,
		},
		{
			name:     "compact uses configured opacity",
			settings: Settings{CompactMode: true, CompactOpacity: 65},
			want:     0.65,
		},
		{
			name:     "full mode stays opaque",
			settings: Settings{CompactMode: false, CompactOpacity: 30},
			want:     1,
		},
		{
			name:     "compact opacity is clamped low",
			settings: Settings{CompactMode: true, CompactOpacity: 0},
			want:     0.3,
		},
		{
			name:     "compact opacity is clamped high",
			settings: Settings{CompactMode: true, CompactOpacity: 150},
			want:     1,
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			if got := windowOpacityForMode(test.settings, test.englishMode, test.stockMode); got != test.want {
				t.Fatalf("windowOpacityForMode() = %v, want %v", got, test.want)
			}
		})
	}
}

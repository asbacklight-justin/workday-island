package main

import "testing"

func TestDescribeWeather(t *testing.T) {
	tests := []struct {
		code int
		want string
	}{
		{0, "晴"},
		{2, "多云"},
		{45, "有雾"},
		{63, "有雨"},
		{75, "有雪"},
		{95, "雷暴"},
	}
	for _, test := range tests {
		got, icon := describeWeather(test.code)
		if got != test.want || icon == "" {
			t.Fatalf("describeWeather(%d) = %q, %q", test.code, got, icon)
		}
	}
}

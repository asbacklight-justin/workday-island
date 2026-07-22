package main

import (
	"context"
	"io"
	"net/http"
	"path/filepath"
	"strings"
	"sync/atomic"
	"testing"
	"time"
)

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

func TestWeatherRequestRetriesServerErrors(t *testing.T) {
	var attempts atomic.Int32
	client := &http.Client{Transport: roundTripFunc(func(request *http.Request) (*http.Response, error) {
		if attempts.Add(1) < 3 {
			return testResponse(request, http.StatusServiceUnavailable, "temporary"), nil
		}
		return testResponse(request, http.StatusOK, `{"ok":true}`), nil
	})}
	app := NewApp()
	app.httpClient = client
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()
	var result struct {
		Ok bool `json:"ok"`
	}
	if err := app.getJSON(ctx, "https://weather.test", &result); err != nil {
		t.Fatal(err)
	}
	if !result.Ok || attempts.Load() != 3 {
		t.Fatalf("result=%#v attempts=%d", result, attempts.Load())
	}
}

func TestWeatherFallsBackToPersistedCache(t *testing.T) {
	oldEndpoint := geocodingEndpoint
	defer func() { geocodingEndpoint = oldEndpoint }()
	geocodingEndpoint = "https://weather.test/geocode"
	app := NewApp()
	app.store = NewStore(filepath.Join(t.TempDir(), "data.json"))
	app.httpClient = &http.Client{Transport: roundTripFunc(func(request *http.Request) (*http.Response, error) {
		return testResponse(request, http.StatusServiceUnavailable, "offline"), nil
	})}
	if err := app.store.SaveWeather(Weather{QueryCity: "上海", City: "上海", Temperature: 26, WeatherCode: 2, UpdatedAt: time.Now()}); err != nil {
		t.Fatal(err)
	}
	weather, err := app.GetWeather("上海")
	if err != nil {
		t.Fatal(err)
	}
	if !weather.Stale || weather.Temperature != 26 || weather.Error == "" {
		t.Fatalf("unexpected fallback: %#v", weather)
	}
}

func TestWeatherRejectsExpiredPersistedCache(t *testing.T) {
	oldEndpoint := geocodingEndpoint
	defer func() { geocodingEndpoint = oldEndpoint }()
	geocodingEndpoint = "https://weather.test/geocode"
	app := NewApp()
	app.store = NewStore(filepath.Join(t.TempDir(), "data.json"))
	app.httpClient = &http.Client{Transport: roundTripFunc(func(request *http.Request) (*http.Response, error) {
		return testResponse(request, http.StatusServiceUnavailable, "offline"), nil
	})}
	if err := app.store.SaveWeather(Weather{QueryCity: "上海", City: "上海", Temperature: 26, WeatherCode: 95, UpdatedAt: time.Now().Add(-4 * time.Hour)}); err != nil {
		t.Fatal(err)
	}
	if _, err := app.GetWeather("上海"); err == nil {
		t.Fatal("expected expired weather cache to be rejected")
	}
}

func TestBestWeatherLocationPrefersPrimaryCity(t *testing.T) {
	locations := []weatherLocation{
		{Name: "上海", FeatureCode: "PPL", Population: 1200, Admin1: "浙江"},
		{Name: "上海", FeatureCode: "PPLA", Population: 24_874_500, Admin1: "上海市"},
	}
	got := bestWeatherLocation("上海", locations)
	if got.Admin1 != "上海市" {
		t.Fatalf("selected wrong location: %#v", got)
	}
}

func TestThunderstormSanityCheck(t *testing.T) {
	if got := normaliseObservedWeatherCode(95, 0, 8); got != 0 {
		t.Fatalf("clear, dry thunderstorm should be corrected to clear; got %d", got)
	}
	if got := normaliseObservedWeatherCode(95, 0.4, 8); got != 95 {
		t.Fatalf("wet thunderstorm should be retained; got %d", got)
	}
}

type roundTripFunc func(*http.Request) (*http.Response, error)

func (function roundTripFunc) RoundTrip(request *http.Request) (*http.Response, error) {
	return function(request)
}

func testResponse(request *http.Request, status int, body string) *http.Response {
	return &http.Response{
		StatusCode: status,
		Status:     http.StatusText(status),
		Body:       io.NopCloser(strings.NewReader(body)),
		Header:     make(http.Header),
		Request:    request,
	}
}

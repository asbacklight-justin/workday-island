package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"
)

const (
	geocodingEndpoint = "https://geocoding-api.open-meteo.com/v1/search"
	forecastEndpoint  = "https://api.open-meteo.com/v1/forecast"
)

type weatherCache struct {
	city      string
	weather   Weather
	expiresAt time.Time
}

func (a *App) GetWeather(city string) (Weather, error) {
	city = strings.TrimSpace(city)
	if city == "" {
		city = a.store.Snapshot().Settings.WeatherCity
	}
	if city == "" {
		return Weather{}, errors.New("请先在设置中填写天气城市")
	}

	a.weatherMu.Lock()
	if strings.EqualFold(a.weatherCache.city, city) && time.Now().Before(a.weatherCache.expiresAt) {
		cached := a.weatherCache.weather
		a.weatherMu.Unlock()
		return cached, nil
	}
	a.weatherMu.Unlock()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	location, err := a.lookupCity(ctx, city)
	if err != nil {
		return Weather{}, err
	}
	weather, err := a.fetchWeather(ctx, location)
	if err != nil {
		return Weather{}, err
	}
	a.weatherMu.Lock()
	a.weatherCache = weatherCache{city: city, weather: weather, expiresAt: time.Now().Add(20 * time.Minute)}
	a.weatherMu.Unlock()
	return weather, nil
}

type weatherLocation struct {
	Name      string  `json:"name"`
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
}

func (a *App) lookupCity(ctx context.Context, city string) (weatherLocation, error) {
	query := url.Values{"name": {city}, "count": {"1"}, "language": {"zh"}, "format": {"json"}}
	var response struct {
		Results []weatherLocation `json:"results"`
	}
	if err := a.getJSON(ctx, geocodingEndpoint+"?"+query.Encode(), &response); err != nil {
		return weatherLocation{}, fmt.Errorf("查询城市失败: %w", err)
	}
	if len(response.Results) == 0 {
		return weatherLocation{}, fmt.Errorf("没有找到城市“%s”", city)
	}
	return response.Results[0], nil
}

func (a *App) fetchWeather(ctx context.Context, location weatherLocation) (Weather, error) {
	query := url.Values{
		"latitude":      {strconv.FormatFloat(location.Latitude, 'f', 6, 64)},
		"longitude":     {strconv.FormatFloat(location.Longitude, 'f', 6, 64)},
		"current":       {"temperature_2m,apparent_temperature,weather_code"},
		"timezone":      {"auto"},
		"forecast_days": {"1"},
	}
	var response struct {
		Current struct {
			Temperature         float64 `json:"temperature_2m"`
			ApparentTemperature float64 `json:"apparent_temperature"`
			WeatherCode         int     `json:"weather_code"`
		} `json:"current"`
	}
	if err := a.getJSON(ctx, forecastEndpoint+"?"+query.Encode(), &response); err != nil {
		return Weather{}, fmt.Errorf("获取天气失败: %w", err)
	}
	description, icon := describeWeather(response.Current.WeatherCode)
	return Weather{
		City:                location.Name,
		Temperature:         response.Current.Temperature,
		ApparentTemperature: response.Current.ApparentTemperature,
		WeatherCode:         response.Current.WeatherCode,
		Description:         description,
		Icon:                icon,
		UpdatedAt:           time.Now(),
	}, nil
}

func (a *App) getJSON(ctx context.Context, target string, result interface{}) error {
	request, err := http.NewRequestWithContext(ctx, http.MethodGet, target, nil)
	if err != nil {
		return err
	}
	request.Header.Set("User-Agent", "Workday-Island/0.3")
	response, err := a.httpClient.Do(request)
	if err != nil {
		return err
	}
	defer response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		return fmt.Errorf("天气服务返回 HTTP %d", response.StatusCode)
	}
	return json.NewDecoder(io.LimitReader(response.Body, 1<<20)).Decode(result)
}

func describeWeather(code int) (string, string) {
	switch {
	case code == 0:
		return "晴", "☀️"
	case code == 1:
		return "大致晴朗", "🌤️"
	case code == 2:
		return "多云", "⛅"
	case code == 3:
		return "阴", "☁️"
	case code == 45 || code == 48:
		return "有雾", "🌫️"
	case code >= 51 && code <= 57:
		return "毛毛雨", "🌦️"
	case code >= 61 && code <= 67:
		return "有雨", "🌧️"
	case code >= 71 && code <= 77:
		return "有雪", "🌨️"
	case code >= 80 && code <= 82:
		return "阵雨", "🌦️"
	case code >= 85 && code <= 86:
		return "阵雪", "🌨️"
	case code >= 95:
		return "雷暴", "⛈️"
	default:
		return "天气变化中", "🌡️"
	}
}

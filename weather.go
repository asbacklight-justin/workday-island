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

var (
	geocodingEndpoint = "https://geocoding-api.open-meteo.com/v1/search"
	forecastEndpoint  = "https://api.open-meteo.com/v1/forecast"
)

const (
	weatherMemoryCacheTTL  = 20 * time.Minute
	weatherFallbackMaxAge  = 3 * time.Hour
	weatherClockFutureSkew = 5 * time.Minute
)

type weatherCache struct {
	city      string
	weather   Weather
	expiresAt time.Time
}

func (a *App) GetWeather(city string) (Weather, error) {
	return a.getWeather(city, false)
}

// RefreshWeather bypasses the short-lived in-memory cache. It is used after a
// settings change so the user immediately sees a fresh location and reading.
func (a *App) RefreshWeather(city string) (Weather, error) {
	return a.getWeather(city, true)
}

func (a *App) getWeather(city string, force bool) (Weather, error) {
	city = strings.TrimSpace(city)
	if city == "" {
		city = a.store.Snapshot().Settings.WeatherCity
	}
	if city == "" {
		return Weather{}, errors.New("请先在设置中填写天气城市")
	}

	a.weatherMu.Lock()
	if !force && strings.EqualFold(a.weatherCache.city, city) && time.Now().Before(a.weatherCache.expiresAt) {
		cached := a.weatherCache.weather
		a.weatherMu.Unlock()
		return cached, nil
	}
	a.weatherMu.Unlock()

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()
	location, err := a.lookupCity(ctx, city)
	if err != nil {
		return a.weatherFallback(city, err)
	}
	weather, err := a.fetchWeather(ctx, location)
	if err != nil {
		return a.weatherFallback(city, err)
	}
	weather.QueryCity = city
	a.weatherMu.Lock()
	a.weatherCache = weatherCache{city: city, weather: weather, expiresAt: time.Now().Add(weatherMemoryCacheTTL)}
	a.weatherMu.Unlock()
	_ = a.store.SaveWeather(weather)
	return weather, nil
}

func (a *App) weatherFallback(city string, cause error) (Weather, error) {
	now := time.Now()
	a.weatherMu.Lock()
	if strings.EqualFold(a.weatherCache.city, city) && weatherFallbackIsFresh(a.weatherCache.weather, now) {
		cached := a.weatherCache.weather
		a.weatherMu.Unlock()
		cached.Stale = true
		cached.Error = cause.Error()
		return cached, nil
	}
	a.weatherMu.Unlock()
	if cached, ok := a.store.CachedWeather(city); ok && weatherFallbackIsFresh(cached, now) {
		cached.Stale = true
		cached.Error = cause.Error()
		return cached, nil
	}
	return Weather{}, cause
}

type weatherLocation struct {
	Name        string  `json:"name"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	FeatureCode string  `json:"feature_code"`
	CountryCode string  `json:"country_code"`
	Admin1      string  `json:"admin1"`
	Timezone    string  `json:"timezone"`
	Population  int64   `json:"population"`
}

func (a *App) lookupCity(ctx context.Context, city string) (weatherLocation, error) {
	query := url.Values{"name": {city}, "count": {"10"}, "language": {"zh"}, "format": {"json"}}
	var response struct {
		Results []weatherLocation `json:"results"`
	}
	if err := a.getJSON(ctx, geocodingEndpoint+"?"+query.Encode(), &response); err != nil {
		return weatherLocation{}, fmt.Errorf("查询城市失败: %w", err)
	}
	if len(response.Results) == 0 {
		return weatherLocation{}, fmt.Errorf("没有找到城市“%s”", city)
	}
	return bestWeatherLocation(city, response.Results), nil
}

func (a *App) fetchWeather(ctx context.Context, location weatherLocation) (Weather, error) {
	query := url.Values{
		"latitude":      {strconv.FormatFloat(location.Latitude, 'f', 6, 64)},
		"longitude":     {strconv.FormatFloat(location.Longitude, 'f', 6, 64)},
		"current":       {"temperature_2m,apparent_temperature,weather_code,precipitation,cloud_cover"},
		"timezone":      {locationTimezone(location)},
		"forecast_days": {"1"},
	}
	var response struct {
		Current struct {
			Temperature         float64 `json:"temperature_2m"`
			ApparentTemperature float64 `json:"apparent_temperature"`
			WeatherCode         int     `json:"weather_code"`
			Precipitation       float64 `json:"precipitation"`
			CloudCover          float64 `json:"cloud_cover"`
		} `json:"current"`
	}
	if err := a.getJSON(ctx, forecastEndpoint+"?"+query.Encode(), &response); err != nil {
		return Weather{}, fmt.Errorf("获取天气失败: %w", err)
	}
	weatherCode := normaliseObservedWeatherCode(response.Current.WeatherCode, response.Current.Precipitation, response.Current.CloudCover)
	description, icon := describeWeather(weatherCode)
	return Weather{
		City:                location.Name,
		Temperature:         response.Current.Temperature,
		ApparentTemperature: response.Current.ApparentTemperature,
		WeatherCode:         weatherCode,
		Description:         description,
		Icon:                icon,
		UpdatedAt:           time.Now(),
	}, nil
}

func weatherFallbackIsFresh(weather Weather, now time.Time) bool {
	if weather.UpdatedAt.IsZero() || weather.UpdatedAt.After(now.Add(weatherClockFutureSkew)) {
		return false
	}
	return now.Sub(weather.UpdatedAt) <= weatherFallbackMaxAge
}

func locationTimezone(location weatherLocation) string {
	if strings.TrimSpace(location.Timezone) == "" {
		return "auto"
	}
	return location.Timezone
}

func bestWeatherLocation(query string, locations []weatherLocation) weatherLocation {
	best := locations[0]
	bestScore := weatherLocationScore(query, best)
	for _, location := range locations[1:] {
		score := weatherLocationScore(query, location)
		if score > bestScore {
			best = location
			bestScore = score
		}
	}
	return best
}

func weatherLocationScore(query string, location weatherLocation) int64 {
	wanted := canonicalCityName(query)
	candidate := canonicalCityName(location.Name)
	score := int64(0)
	if candidate == wanted {
		score += 100_000
	} else if strings.Contains(candidate, wanted) || strings.Contains(wanted, candidate) {
		score += 20_000
	}
	switch location.FeatureCode {
	case "PPLC":
		score += 10_000
	case "PPLA":
		score += 8_000
	case "PPLA2", "PPLA3", "PPLA4":
		score += 4_000
	}
	populationScore := location.Population / 10_000
	if populationScore > 5_000 {
		populationScore = 5_000
	}
	return score + populationScore
}

func canonicalCityName(value string) string {
	value = strings.ToLower(strings.TrimSpace(value))
	value = strings.ReplaceAll(value, " ", "")
	value = strings.TrimSuffix(value, "市")
	return value
}

// Open-Meteo's weather code is model-derived. A thunderstorm code paired with
// no precipitation and low cloud cover is internally inconsistent and caused
// conspicuous false alarms in the compact card, so fall back to cloud cover.
func normaliseObservedWeatherCode(code int, precipitation, cloudCover float64) int {
	if code < 95 || precipitation > 0.05 {
		return code
	}
	switch {
	case cloudCover < 20:
		return 0
	case cloudCover < 50:
		return 1
	case cloudCover < 85:
		return 2
	default:
		return 3
	}
}

func (a *App) getJSON(ctx context.Context, target string, result interface{}) error {
	var lastErr error
	for attempt := 0; attempt < 3; attempt++ {
		request, err := http.NewRequestWithContext(ctx, http.MethodGet, target, nil)
		if err != nil {
			return err
		}
		request.Header.Set("User-Agent", "Workday-Island/0.6")
		request.Header.Set("Accept", "application/json")
		response, err := a.httpClient.Do(request)
		if err == nil {
			if response.StatusCode >= 200 && response.StatusCode < 300 {
				decodeErr := json.NewDecoder(io.LimitReader(response.Body, 1<<20)).Decode(result)
				response.Body.Close()
				return decodeErr
			}
			lastErr = fmt.Errorf("天气服务返回 HTTP %d", response.StatusCode)
			retryable := response.StatusCode == http.StatusTooManyRequests || response.StatusCode >= 500
			response.Body.Close()
			if !retryable {
				return lastErr
			}
		} else {
			lastErr = err
		}
		if attempt < 2 {
			delay := time.Duration(250+attempt*350) * time.Millisecond
			timer := time.NewTimer(delay)
			select {
			case <-ctx.Done():
				timer.Stop()
				return ctx.Err()
			case <-timer.C:
			}
		}
	}
	return lastErr
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

package main

import (
	"crypto/rand"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"sync"
	"time"
)

type Store struct {
	mu    sync.RWMutex
	path  string
	state State
}

func NewStore(path string) *Store {
	return &Store{path: path, state: State{Settings: defaultSettings(), Todos: []Todo{}}}
}

func defaultSettings() Settings {
	return Settings{
		AlwaysOnTop: true, CompactOpacity: 100, CompactWidth: 520, CompactHeight: 350,
		WorkStart: "09:00", WorkEnd: "18:00", Workdays: []int{1, 2, 3, 4, 5},
		SalaryWorkdays: 21.75, Currency: "¥", WeatherCity: "上海", Language: "system", Theme: "system",
	}
}

func (s *Store) Load() error {
	s.mu.Lock()
	defer s.mu.Unlock()
	data, err := os.ReadFile(s.path)
	if errors.Is(err, os.ErrNotExist) {
		return nil
	}
	if err != nil {
		return fmt.Errorf("读取本地数据失败: %w", err)
	}
	var state State
	if err := json.Unmarshal(data, &state); err != nil {
		return fmt.Errorf("解析本地数据失败: %w", err)
	}
	state.Settings = normaliseSettings(state.Settings)
	if state.Focus.Active && (state.Focus.StartedAt == nil || state.Focus.EndsAt == nil || state.Focus.DurationMinutes < 1 || state.Focus.DurationMinutes > 180) {
		state.Focus.Active = false
	}
	if state.Todos == nil {
		state.Todos = []Todo{}
	}
	s.state = state
	return nil
}

func (s *Store) Snapshot() State {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return cloneState(s.state)
}

func (s *Store) Add(input TodoInput) (Todo, error) {
	title := strings.TrimSpace(input.Title)
	if title == "" {
		return Todo{}, errors.New("待办内容不能为空")
	}
	if len([]rune(title)) > 120 {
		return Todo{}, errors.New("待办内容不能超过 120 个字符")
	}
	dueAt, err := parseDueAt(input.DueAt)
	if err != nil {
		return Todo{}, err
	}
	now := time.Now()
	todo := Todo{ID: newID(), Title: title, Note: strings.TrimSpace(input.Note), DueAt: dueAt, CreatedAt: now, UpdatedAt: now}
	s.mu.Lock()
	s.state.Todos = append(s.state.Todos, todo)
	err = s.saveLocked()
	s.mu.Unlock()
	return todo, err
}

func (s *Store) Update(id string, input TodoInput) (Todo, error) {
	title := strings.TrimSpace(input.Title)
	if title == "" {
		return Todo{}, errors.New("待办内容不能为空")
	}
	dueAt, err := parseDueAt(input.DueAt)
	if err != nil {
		return Todo{}, err
	}
	s.mu.Lock()
	defer s.mu.Unlock()
	for i := range s.state.Todos {
		if s.state.Todos[i].ID != id {
			continue
		}
		oldDue := s.state.Todos[i].DueAt
		s.state.Todos[i].Title = title
		s.state.Todos[i].Note = strings.TrimSpace(input.Note)
		s.state.Todos[i].DueAt = dueAt
		s.state.Todos[i].UpdatedAt = time.Now()
		if !sameTime(oldDue, dueAt) {
			s.state.Todos[i].NotifiedAt = nil
		}
		err := s.saveLocked()
		return s.state.Todos[i], err
	}
	return Todo{}, errors.New("待办不存在")
}

func (s *Store) Toggle(id string, completed bool) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	for i := range s.state.Todos {
		if s.state.Todos[i].ID == id {
			s.state.Todos[i].Completed = completed
			s.state.Todos[i].UpdatedAt = time.Now()
			return s.saveLocked()
		}
	}
	return errors.New("待办不存在")
}

func (s *Store) Delete(id string) error {
	s.mu.Lock()
	defer s.mu.Unlock()
	for i := range s.state.Todos {
		if s.state.Todos[i].ID == id {
			s.state.Todos = append(s.state.Todos[:i], s.state.Todos[i+1:]...)
			return s.saveLocked()
		}
	}
	return errors.New("待办不存在")
}

func (s *Store) SaveSettings(settings Settings) (Settings, error) {
	settings = normaliseSettings(settings)
	s.mu.Lock()
	s.state.Settings = settings
	err := s.saveLocked()
	s.mu.Unlock()
	return settings, err
}

func (s *Store) SaveWeather(weather Weather) error {
	weather.Stale = false
	weather.Error = ""
	s.mu.Lock()
	s.state.LastWeather = &weather
	err := s.saveLocked()
	s.mu.Unlock()
	return err
}

func (s *Store) CachedWeather(city string) (Weather, bool) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	if s.state.LastWeather == nil {
		return Weather{}, false
	}
	lookup := s.state.LastWeather.QueryCity
	if lookup == "" {
		lookup = s.state.LastWeather.City
	}
	if !strings.EqualFold(strings.TrimSpace(lookup), strings.TrimSpace(city)) {
		return Weather{}, false
	}
	return *s.state.LastWeather, true
}

func (s *Store) LastUpdateCheck() *time.Time {
	s.mu.RLock()
	defer s.mu.RUnlock()
	if s.state.LastUpdateCheckAt == nil {
		return nil
	}
	value := *s.state.LastUpdateCheckAt
	return &value
}

func (s *Store) MarkUpdateChecked(at time.Time) error {
	s.mu.Lock()
	s.state.LastUpdateCheckAt = &at
	err := s.saveLocked()
	s.mu.Unlock()
	return err
}

func (s *Store) StartFocus(minutes int, now time.Time) (FocusSession, error) {
	if minutes < 1 || minutes > 180 {
		return FocusSession{}, errors.New("专注时长需要在 1 到 180 分钟之间")
	}
	s.mu.Lock()
	defer s.mu.Unlock()
	if s.state.Focus.Active {
		return FocusSession{}, errors.New("已有正在进行的专注")
	}
	endsAt := now.Add(time.Duration(minutes) * time.Minute)
	s.state.Focus = FocusSession{Active: true, DurationMinutes: minutes, StartedAt: &now, EndsAt: &endsAt}
	return s.state.Focus, s.saveLocked()
}

func (s *Store) StopFocus() (FocusSession, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.state.Focus.Active = false
	s.state.Focus.CompletedAt = nil
	return s.state.Focus, s.saveLocked()
}

func (s *Store) FocusDue(now time.Time) (*FocusSession, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	if !s.state.Focus.Active || s.state.Focus.EndsAt == nil || s.state.Focus.EndsAt.After(now) {
		return nil, nil
	}
	completed := s.state.Focus
	completedAt := now
	s.state.Focus.Active = false
	s.state.Focus.CompletedAt = &completedAt
	if err := s.saveLocked(); err != nil {
		return nil, err
	}
	return &completed, nil
}

func (s *Store) Due(now time.Time) ([]Todo, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	var due []Todo
	for i := range s.state.Todos {
		todo := &s.state.Todos[i]
		if todo.Completed || todo.DueAt == nil || todo.NotifiedAt != nil || todo.DueAt.After(now) {
			continue
		}
		notifiedAt := now
		todo.NotifiedAt = &notifiedAt
		due = append(due, *todo)
	}
	if len(due) > 0 {
		return due, s.saveLocked()
	}
	return due, nil
}

func (s *Store) saveLocked() error {
	if err := os.MkdirAll(filepath.Dir(s.path), 0o700); err != nil {
		return fmt.Errorf("创建数据目录失败: %w", err)
	}
	data, err := json.MarshalIndent(s.state, "", "  ")
	if err != nil {
		return err
	}
	tmp := s.path + ".tmp"
	if err := os.WriteFile(tmp, data, 0o600); err != nil {
		return fmt.Errorf("保存本地数据失败: %w", err)
	}
	if err := replaceFile(tmp, s.path); err != nil {
		return fmt.Errorf("提交本地数据失败: %w", err)
	}
	return nil
}

func normaliseSettings(settings Settings) Settings {
	if !validClock(settings.WorkStart) {
		settings.WorkStart = "09:00"
	}
	if !validClock(settings.WorkEnd) {
		settings.WorkEnd = "18:00"
	}
	if settings.MonthlySalary < 0 {
		settings.MonthlySalary = 0
	}
	if settings.SalaryWorkdays <= 0 || settings.SalaryWorkdays > 31 {
		settings.SalaryWorkdays = 21.75
	}
	settings.Currency = strings.TrimSpace(settings.Currency)
	if settings.Currency == "" {
		settings.Currency = "¥"
	}
	if len([]rune(settings.Currency)) > 8 {
		settings.Currency = string([]rune(settings.Currency)[:8])
	}
	if settings.CompactWidth < 400 || settings.CompactWidth > 900 {
		settings.CompactWidth = 520
	}
	if settings.CompactHeight < 270 || settings.CompactHeight > 600 {
		settings.CompactHeight = 350
	}
	if settings.CompactOpacity < 30 || settings.CompactOpacity > 100 {
		settings.CompactOpacity = 100
	}
	settings.WeatherCity = strings.TrimSpace(settings.WeatherCity)
	if settings.WeatherCity == "" {
		settings.WeatherCity = "上海"
	}
	if len([]rune(settings.WeatherCity)) > 60 {
		settings.WeatherCity = string([]rune(settings.WeatherCity)[:60])
	}
	if settings.Language != "zh" && settings.Language != "en" && settings.Language != "system" {
		settings.Language = "system"
	}
	if settings.Theme != "light" && settings.Theme != "dark" && settings.Theme != "system" {
		settings.Theme = "system"
	}
	seen := map[int]bool{}
	var workdays []int
	for _, day := range settings.Workdays {
		if day >= 1 && day <= 7 && !seen[day] {
			seen[day] = true
			workdays = append(workdays, day)
		}
	}
	if len(workdays) == 0 {
		workdays = []int{1, 2, 3, 4, 5}
	}
	sort.Ints(workdays)
	settings.Workdays = workdays
	return settings
}

func validClock(value string) bool {
	_, err := time.Parse("15:04", value)
	return err == nil
}

func parseDueAt(value string) (*time.Time, error) {
	if strings.TrimSpace(value) == "" {
		return nil, nil
	}
	parsed, err := time.Parse(time.RFC3339, value)
	if err != nil {
		return nil, errors.New("提醒时间格式不正确")
	}
	return &parsed, nil
}

func sameTime(a, b *time.Time) bool {
	if a == nil || b == nil {
		return a == nil && b == nil
	}
	return a.Equal(*b)
}

func newID() string {
	buf := make([]byte, 8)
	if _, err := rand.Read(buf); err == nil {
		return hex.EncodeToString(buf)
	}
	return fmt.Sprintf("%x", time.Now().UnixNano())
}

func cloneState(state State) State {
	copyState := state
	copyState.Todos = append([]Todo(nil), state.Todos...)
	copyState.Settings.Workdays = append([]int(nil), state.Settings.Workdays...)
	if state.Focus.StartedAt != nil {
		value := *state.Focus.StartedAt
		copyState.Focus.StartedAt = &value
	}
	if state.Focus.EndsAt != nil {
		value := *state.Focus.EndsAt
		copyState.Focus.EndsAt = &value
	}
	if state.Focus.CompletedAt != nil {
		value := *state.Focus.CompletedAt
		copyState.Focus.CompletedAt = &value
	}
	if state.LastWeather != nil {
		value := *state.LastWeather
		copyState.LastWeather = &value
	}
	if state.LastUpdateCheckAt != nil {
		value := *state.LastUpdateCheckAt
		copyState.LastUpdateCheckAt = &value
	}
	return copyState
}

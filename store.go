package main

import (
	"bytes"
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
	return &Store{path: path, state: State{Settings: defaultSettings(), Todos: []Todo{}, StockWatchlist: defaultStockWatchlist()}}
}

func defaultSettings() Settings {
	return Settings{
		AlwaysOnTop: true, CompactOpacity: 100, CompactWidth: 520, CompactHeight: 350,
		WorkStart: "09:00", WorkEnd: "18:00", Workdays: []int{1, 2, 3, 4, 5},
		SalaryWorkdays: 21.75, Currency: "¥", WeatherCity: "上海", Language: "system", Theme: "system",
		EnglishMode: "study", EnglishSource: "nce2",
		HeaderEntries: defaultHeaderEntries(),
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
	hadLegacyLocalNotes := bytes.Contains(data, []byte(`"noteNodes"`)) || bytes.Contains(data, []byte(`"noteVersions"`))
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
	// Legacy desktop builds stored note bodies here. Cloud notes now use the
	// server as the only source of truth, so discard any old local note data.
	state.NoteNodes = []NoteNode{}
	state.NoteVersions = []NoteVersion{}
	if state.RealtimeMessages == nil {
		state.RealtimeMessages = []RealtimeMessage{}
	}
	if state.EnglishWords == nil {
		state.EnglishWords = []EnglishWordRecord{}
	}
	if state.EnglishWrongWords == nil {
		state.EnglishWrongWords = []EnglishWrongRecord{}
	}
	if state.StockWatchlist == nil {
		state.StockWatchlist = defaultStockWatchlist()
	} else {
		state.StockWatchlist = normaliseStockWatchlist(state.StockWatchlist)
	}
	s.state = state
	if hadLegacyLocalNotes {
		// Scrub note bodies left by older desktop builds immediately. Waiting
		// for another settings/todo write would leave cloud-note data on disk.
		return s.saveLocked()
	}
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

func (s *Store) SaveStockWatchlist(symbols []string) ([]string, error) {
	symbols = normaliseStockWatchlist(symbols)
	s.mu.Lock()
	s.state.StockWatchlist = append([]string(nil), symbols...)
	err := s.saveLocked()
	s.mu.Unlock()
	return symbols, err
}

func (s *Store) EnglishNotebook() EnglishNotebook {
	s.mu.RLock()
	defer s.mu.RUnlock()
	return EnglishNotebook{
		Words:      cloneEnglishWords(s.state.EnglishWords),
		WrongWords: cloneEnglishWrongWords(s.state.EnglishWrongWords),
	}
}

func (s *Store) RecordEnglishWord(question EnglishQuestion, mode string, at time.Time) error {
	question, mode, err := normaliseEnglishRecord(question, mode)
	if err != nil {
		return err
	}
	s.mu.Lock()
	upsertEnglishWord(&s.state.EnglishWords, question, mode, at, true)
	trimEnglishWords(&s.state.EnglishWords, 3000)
	err = s.saveLocked()
	s.mu.Unlock()
	return err
}

func (s *Store) RecordEnglishWrong(question EnglishQuestion, mode, answer, correctAnswer string, at time.Time) error {
	question, mode, err := normaliseEnglishRecord(question, mode)
	if err != nil {
		return err
	}
	if mode != "quiz" && mode != "chinese" && mode != "spelling" {
		return errors.New("当前学习模式不记录错题")
	}
	answer = strings.TrimSpace(answer)
	correctAnswer = strings.TrimSpace(correctAnswer)
	if correctAnswer == "" {
		correctAnswer = strings.TrimSpace(question.CorrectAnswer)
	}
	s.mu.Lock()
	upsertEnglishWord(&s.state.EnglishWords, question, mode, at, false)
	index := findEnglishWrongRecord(s.state.EnglishWrongWords, question)
	if index < 0 {
		s.state.EnglishWrongWords = append(s.state.EnglishWrongWords, EnglishWrongRecord{
			WordID: question.WordID, Word: question.Word, Translation: question.Translation,
			Phonetic: question.Phonetic, Example: question.Example, Source: question.Source,
			Modes: []string{mode}, WrongCount: 1, LastAnswer: answer,
			CorrectAnswer: correctAnswer, LastWrongAt: at,
		})
	} else {
		record := &s.state.EnglishWrongWords[index]
		mergeEnglishWrongRecord(record, question)
		record.Modes = appendEnglishMode(record.Modes, mode)
		record.WrongCount++
		record.LastAnswer = answer
		record.CorrectAnswer = correctAnswer
		record.LastWrongAt = at
	}
	trimEnglishWords(&s.state.EnglishWords, 3000)
	trimEnglishWrongWords(&s.state.EnglishWrongWords, 1500)
	err = s.saveLocked()
	s.mu.Unlock()
	return err
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

func (s *Store) SaveRealtimeIdentity(identity RealtimeIdentity) error {
	s.mu.Lock()
	value := identity
	s.state.RealtimeIdentity = &value
	err := s.saveLocked()
	s.mu.Unlock()
	return err
}

func (s *Store) ClearRealtimeIdentity() error {
	s.mu.Lock()
	s.state.RealtimeIdentity = nil
	s.state.RealtimeMessages = []RealtimeMessage{}
	err := s.saveLocked()
	s.mu.Unlock()
	return err
}

func (s *Store) AddRealtimeMessage(message RealtimeMessage) (bool, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	for i := range s.state.RealtimeMessages {
		if s.state.RealtimeMessages[i].MessageID == message.MessageID {
			return false, nil
		}
	}
	s.state.RealtimeMessages = append(s.state.RealtimeMessages, message)
	if len(s.state.RealtimeMessages) > 500 {
		s.state.RealtimeMessages = append([]RealtimeMessage(nil), s.state.RealtimeMessages[len(s.state.RealtimeMessages)-500:]...)
	}
	return true, s.saveLocked()
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
	settings.HeaderEntries = normaliseHeaderEntries(settings.HeaderEntries)
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
	if settings.Theme != "light" && settings.Theme != "dark" && settings.Theme != "aurora" && settings.Theme != "plus-theme" && settings.Theme != "pro-theme" && settings.Theme != "ultra-theme" && settings.Theme != "system" {
		settings.Theme = "system"
	}
	if settings.EnglishMode != "study" && settings.EnglishMode != "sentence" && settings.EnglishMode != "quiz" && settings.EnglishMode != "chinese" && settings.EnglishMode != "spelling" {
		settings.EnglishMode = "study"
	}
	if !validEnglishSource(settings.EnglishSource) {
		settings.EnglishSource = "nce2"
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

var headerEntryKeys = []string{"ai", "chat", "stocks", "cloud", "notes", "sharing", "translator", "english"}

func defaultHeaderEntries() map[string]bool {
	entries := make(map[string]bool, len(headerEntryKeys))
	for _, key := range headerEntryKeys {
		entries[key] = true
	}
	return entries
}

func normaliseHeaderEntries(entries map[string]bool) map[string]bool {
	normalised := defaultHeaderEntries()
	for _, key := range headerEntryKeys {
		if visible, ok := entries[key]; ok {
			normalised[key] = visible
		}
	}
	return normalised
}

func validEnglishSource(source string) bool {
	switch source {
	case "all", "nce2", "nce3", "cet4", "cet6", "ielts":
		return true
	default:
		return false
	}
}

func normaliseEnglishRecord(question EnglishQuestion, mode string) (EnglishQuestion, string, error) {
	mode = strings.TrimSpace(mode)
	switch mode {
	case "study", "sentence", "quiz", "chinese", "spelling":
	default:
		return EnglishQuestion{}, "", errors.New("英语学习模式无效")
	}
	question.Word = strings.TrimSpace(question.Word)
	question.Translation = strings.TrimSpace(question.Translation)
	question.Phonetic = strings.TrimSpace(question.Phonetic)
	question.Example = strings.TrimSpace(question.Example)
	question.Source = strings.TrimSpace(question.Source)
	question.CorrectAnswer = strings.TrimSpace(question.CorrectAnswer)
	if question.Word == "" || question.Translation == "" {
		return EnglishQuestion{}, "", errors.New("单词或释义为空")
	}
	if len([]rune(question.Word)) > 100 || len([]rune(question.Translation)) > 500 ||
		len([]rune(question.Phonetic)) > 160 || len([]rune(question.Example)) > 1000 {
		return EnglishQuestion{}, "", errors.New("单词信息长度异常")
	}
	return question, mode, nil
}

func findEnglishWordRecord(records []EnglishWordRecord, question EnglishQuestion) int {
	for index := range records {
		if question.WordID > 0 && records[index].WordID == question.WordID {
			return index
		}
		if strings.EqualFold(strings.TrimSpace(records[index].Word), question.Word) {
			return index
		}
	}
	return -1
}

func findEnglishWrongRecord(records []EnglishWrongRecord, question EnglishQuestion) int {
	for index := range records {
		if question.WordID > 0 && records[index].WordID == question.WordID {
			return index
		}
		if strings.EqualFold(strings.TrimSpace(records[index].Word), question.Word) {
			return index
		}
	}
	return -1
}

func upsertEnglishWord(records *[]EnglishWordRecord, question EnglishQuestion, mode string, at time.Time, increment bool) {
	index := findEnglishWordRecord(*records, question)
	if index < 0 {
		*records = append(*records, EnglishWordRecord{
			WordID: question.WordID, Word: question.Word, Translation: question.Translation,
			Phonetic: question.Phonetic, Example: question.Example, Source: question.Source,
			Modes: []string{mode}, SeenCount: 1, LastSeenAt: at,
		})
		return
	}
	record := &(*records)[index]
	mergeEnglishWordRecord(record, question)
	record.Modes = appendEnglishMode(record.Modes, mode)
	if increment {
		record.SeenCount++
		record.LastSeenAt = at
	}
}

func mergeEnglishWordRecord(record *EnglishWordRecord, question EnglishQuestion) {
	if question.WordID > 0 {
		record.WordID = question.WordID
	}
	record.Word = firstNonEmpty(question.Word, record.Word)
	record.Translation = firstNonEmpty(question.Translation, record.Translation)
	record.Phonetic = firstNonEmpty(question.Phonetic, record.Phonetic)
	record.Example = firstNonEmpty(question.Example, record.Example)
	record.Source = firstNonEmpty(question.Source, record.Source)
}

func mergeEnglishWrongRecord(record *EnglishWrongRecord, question EnglishQuestion) {
	if question.WordID > 0 {
		record.WordID = question.WordID
	}
	record.Word = firstNonEmpty(question.Word, record.Word)
	record.Translation = firstNonEmpty(question.Translation, record.Translation)
	record.Phonetic = firstNonEmpty(question.Phonetic, record.Phonetic)
	record.Example = firstNonEmpty(question.Example, record.Example)
	record.Source = firstNonEmpty(question.Source, record.Source)
}

func appendEnglishMode(modes []string, mode string) []string {
	for _, existing := range modes {
		if existing == mode {
			return modes
		}
	}
	return append(modes, mode)
}

func trimEnglishWords(records *[]EnglishWordRecord, limit int) {
	if len(*records) <= limit {
		return
	}
	sort.Slice(*records, func(i, j int) bool { return (*records)[i].LastSeenAt.After((*records)[j].LastSeenAt) })
	*records = append([]EnglishWordRecord(nil), (*records)[:limit]...)
}

func trimEnglishWrongWords(records *[]EnglishWrongRecord, limit int) {
	if len(*records) <= limit {
		return
	}
	sort.Slice(*records, func(i, j int) bool { return (*records)[i].LastWrongAt.After((*records)[j].LastWrongAt) })
	*records = append([]EnglishWrongRecord(nil), (*records)[:limit]...)
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
	copyState.NoteNodes = cloneNoteNodes(state.NoteNodes, false)
	copyState.NoteVersions = append([]NoteVersion(nil), state.NoteVersions...)
	copyState.Settings.Workdays = append([]int(nil), state.Settings.Workdays...)
	copyState.Settings.HeaderEntries = normaliseHeaderEntries(state.Settings.HeaderEntries)
	copyState.StockWatchlist = append([]string(nil), state.StockWatchlist...)
	copyState.EnglishWords = cloneEnglishWords(state.EnglishWords)
	copyState.EnglishWrongWords = cloneEnglishWrongWords(state.EnglishWrongWords)
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
	if state.RealtimeIdentity != nil {
		value := *state.RealtimeIdentity
		copyState.RealtimeIdentity = &value
	}
	copyState.RealtimeMessages = append([]RealtimeMessage(nil), state.RealtimeMessages...)
	return copyState
}

func cloneEnglishWords(records []EnglishWordRecord) []EnglishWordRecord {
	result := append([]EnglishWordRecord(nil), records...)
	for index := range result {
		result[index].Modes = append([]string(nil), result[index].Modes...)
	}
	return result
}

func cloneEnglishWrongWords(records []EnglishWrongRecord) []EnglishWrongRecord {
	result := append([]EnglishWrongRecord(nil), records...)
	for index := range result {
		result[index].Modes = append([]string(nil), result[index].Modes...)
	}
	return result
}

package main

import (
	"path/filepath"
	"testing"
	"time"
)

func TestStorePersistsTodoAndSettings(t *testing.T) {
	path := filepath.Join(t.TempDir(), "data.json")
	store := NewStore(path)
	due := time.Now().Add(time.Hour).Truncate(time.Second)
	todo, err := store.Add(TodoInput{Title: "提交周报", DueAt: due.Format(time.RFC3339)})
	if err != nil {
		t.Fatal(err)
	}
	if todo.ID == "" || todo.DueAt == nil {
		t.Fatalf("unexpected todo: %#v", todo)
	}
	_, err = store.SaveSettings(Settings{
		AlwaysOnTop: false, CompactMode: true, ShowCompactTodos: true,
		CompactOpacity: 65, CompactWidth: 688, CompactHeight: 422, WorkStart: "08:30", WorkEnd: "17:45",
		Workdays: []int{1, 2, 3, 4, 5}, Theme: "light", Currency: "$",
		HeaderEntries: map[string]bool{"chat": false, "stocks": false},
	})
	if err != nil {
		t.Fatal(err)
	}
	reloaded := NewStore(path)
	if err := reloaded.Load(); err != nil {
		t.Fatal(err)
	}
	state := reloaded.Snapshot()
	if len(state.Todos) != 1 || state.Settings.WorkEnd != "17:45" || !state.Settings.CompactMode {
		t.Fatalf("state not persisted: %#v", state)
	}
	if !state.Settings.ShowCompactTodos || state.Settings.CompactOpacity != 65 || state.Settings.CompactWidth != 688 || state.Settings.CompactHeight != 422 || state.Settings.Theme != "light" || state.Settings.Currency != "$" {
		t.Fatalf("new preferences not persisted: %#v", state.Settings)
	}
	if state.Settings.HeaderEntries["chat"] || state.Settings.HeaderEntries["stocks"] || !state.Settings.HeaderEntries["ai"] || !state.Settings.HeaderEntries["english"] {
		t.Fatalf("header entry preferences not persisted or completed: %#v", state.Settings.HeaderEntries)
	}
}

func TestDueOnlyNotifiesOnce(t *testing.T) {
	store := NewStore(filepath.Join(t.TempDir(), "data.json"))
	due := time.Now().Add(-time.Minute)
	_, err := store.Add(TodoInput{Title: "喝水", DueAt: due.Format(time.RFC3339)})
	if err != nil {
		t.Fatal(err)
	}
	first, err := store.Due(time.Now())
	if err != nil || len(first) != 1 {
		t.Fatalf("first due check = %v, %v", first, err)
	}
	second, err := store.Due(time.Now().Add(time.Minute))
	if err != nil || len(second) != 0 {
		t.Fatalf("second due check = %v, %v", second, err)
	}
}

func TestFocusSessionPersistsAndCompletesOnce(t *testing.T) {
	path := filepath.Join(t.TempDir(), "data.json")
	store := NewStore(path)
	startedAt := time.Now().Truncate(time.Second)
	focus, err := store.StartFocus(25, startedAt)
	if err != nil || !focus.Active || focus.EndsAt == nil {
		t.Fatalf("start focus = %#v, %v", focus, err)
	}
	reloaded := NewStore(path)
	if err := reloaded.Load(); err != nil {
		t.Fatal(err)
	}
	if !reloaded.Snapshot().Focus.Active {
		t.Fatal("active focus was not persisted")
	}
	first, err := reloaded.FocusDue(startedAt.Add(26 * time.Minute))
	if err != nil || first == nil {
		t.Fatalf("first focus due = %#v, %v", first, err)
	}
	second, err := reloaded.FocusDue(startedAt.Add(27 * time.Minute))
	if err != nil || second != nil {
		t.Fatalf("second focus due = %#v, %v", second, err)
	}
}

func TestInvalidSettingsFallBack(t *testing.T) {
	settings := normaliseSettings(Settings{WorkStart: "bad", WorkEnd: "25:00", Workdays: []int{9}})
	if settings.WorkStart != "09:00" || settings.WorkEnd != "18:00" || len(settings.Workdays) != 5 || settings.SalaryWorkdays != 21.75 || settings.WeatherCity != "上海" || settings.Language != "system" || settings.Theme != "system" || settings.Currency != "¥" || settings.CompactOpacity != 100 || settings.CompactWidth != 520 || settings.CompactHeight != 350 || settings.EnglishSource != "nce2" {
		t.Fatalf("unexpected defaults: %#v", settings)
	}
	if got := normaliseSettings(Settings{CompactOpacity: 55, Workdays: []int{1}}).CompactOpacity; got != 55 {
		t.Fatalf("compact opacity was not preserved: %d", got)
	}
	if got := normaliseSettings(Settings{Language: "en", Workdays: []int{1}}).Language; got != "en" {
		t.Fatalf("language selection was not preserved: %q", got)
	}
	if got := normaliseSettings(Settings{Theme: "aurora", Workdays: []int{1}}).Theme; got != "aurora" {
		t.Fatalf("aurora theme was not preserved: %q", got)
	}
	for _, source := range []string{"all", "nce2", "nce3", "cet4", "cet6", "ielts"} {
		if got := normaliseSettings(Settings{EnglishSource: source, Workdays: []int{1}}).EnglishSource; got != source {
			t.Fatalf("English source %q was not preserved: %q", source, got)
		}
	}
	if got := normaliseSettings(Settings{EnglishMode: "sentence", Workdays: []int{1}}).EnglishMode; got != "sentence" {
		t.Fatalf("sentence learning mode was not preserved: %q", got)
	}
	entries := normaliseSettings(Settings{Workdays: []int{1}, HeaderEntries: map[string]bool{"notes": false}}).HeaderEntries
	if entries["notes"] || !entries["ai"] || !entries["chat"] || !entries["english"] || len(entries) != 8 {
		t.Fatalf("header entry defaults were not normalised: %#v", entries)
	}
}

func TestWeatherCachePersistsWithoutTransientError(t *testing.T) {
	path := filepath.Join(t.TempDir(), "data.json")
	store := NewStore(path)
	weather := Weather{QueryCity: "上海", City: "上海", Temperature: 27, UpdatedAt: time.Now(), Stale: true, Error: "temporary"}
	if err := store.SaveWeather(weather); err != nil {
		t.Fatal(err)
	}
	reloaded := NewStore(path)
	if err := reloaded.Load(); err != nil {
		t.Fatal(err)
	}
	cached, ok := reloaded.CachedWeather("上海")
	if !ok || cached.Temperature != 27 || cached.Stale || cached.Error != "" {
		t.Fatalf("unexpected cached weather: %#v, %v", cached, ok)
	}
}

func TestUpdateCheckTimePersists(t *testing.T) {
	path := filepath.Join(t.TempDir(), "data.json")
	store := NewStore(path)
	checkedAt := time.Now().Truncate(time.Second)
	if err := store.MarkUpdateChecked(checkedAt); err != nil {
		t.Fatal(err)
	}
	reloaded := NewStore(path)
	if err := reloaded.Load(); err != nil {
		t.Fatal(err)
	}
	last := reloaded.LastUpdateCheck()
	if last == nil || !last.Equal(checkedAt) {
		t.Fatalf("update check time not persisted: %#v", last)
	}
}

func TestEnglishNotebookPersistsModesAndWrongAnswers(t *testing.T) {
	path := filepath.Join(t.TempDir(), "data.json")
	store := NewStore(path)
	question := EnglishQuestion{
		WordID: 7, Word: "concise", Translation: "简明的，简洁的",
		Phonetic: "/kənˈsaɪs/", Example: "Keep it concise.", Source: "nce2",
	}
	firstSeen := time.Now().Add(-time.Minute).Truncate(time.Second)
	if err := store.RecordEnglishWord(question, "study", firstSeen); err != nil {
		t.Fatal(err)
	}
	for index, mode := range []string{"sentence", "quiz", "chinese", "spelling"} {
		if err := store.RecordEnglishWord(question, mode, firstSeen.Add(time.Duration(index+1)*time.Second)); err != nil {
			t.Fatal(err)
		}
	}
	if err := store.RecordEnglishWrong(question, "quiz", "模糊的", "简明的，简洁的", firstSeen.Add(6*time.Second)); err != nil {
		t.Fatal(err)
	}
	if err := store.RecordEnglishWrong(question, "spelling", "consize", "concise", firstSeen.Add(7*time.Second)); err != nil {
		t.Fatal(err)
	}

	reloaded := NewStore(path)
	if err := reloaded.Load(); err != nil {
		t.Fatal(err)
	}
	notebook := reloaded.EnglishNotebook()
	if len(notebook.Words) != 1 || notebook.Words[0].SeenCount != 5 {
		t.Fatalf("unexpected word notebook: %#v", notebook.Words)
	}
	if got := notebook.Words[0].Modes; len(got) != 5 ||
		got[0] != "study" || got[1] != "sentence" || got[2] != "quiz" || got[3] != "chinese" || got[4] != "spelling" {
		t.Fatalf("unexpected word modes: %v", got)
	}
	if len(notebook.WrongWords) != 1 || notebook.WrongWords[0].WrongCount != 2 ||
		notebook.WrongWords[0].LastAnswer != "consize" || notebook.WrongWords[0].CorrectAnswer != "concise" {
		t.Fatalf("unexpected wrong notebook: %#v", notebook.WrongWords)
	}
}

func TestEnglishWrongNotebookOnlyAcceptsExerciseModes(t *testing.T) {
	store := NewStore(filepath.Join(t.TempDir(), "data.json"))
	question := EnglishQuestion{WordID: 1, Word: "hello", Translation: "你好"}
	if err := store.RecordEnglishWrong(question, "study", "", "", time.Now()); err == nil {
		t.Fatal("study mode should not create a wrong-book record")
	}
	if notebook := store.EnglishNotebook(); len(notebook.WrongWords) != 0 {
		t.Fatalf("wrong-book changed after invalid mode: %#v", notebook.WrongWords)
	}
}

func TestReminderAlertCanBePolledAndAcknowledged(t *testing.T) {
	app := NewApp()
	app.triggerReminder(Todo{ID: "todo-1", Title: "到点提醒"})
	alert := app.GetActiveReminder()
	if alert == nil || alert.Todo.Title != "到点提醒" || alert.Sequence == 0 || alert.Kind != "todo" {
		t.Fatalf("unexpected alert: %#v", alert)
	}
	app.AcknowledgeReminder(alert.Sequence)
	if got := app.GetActiveReminder(); got != nil {
		t.Fatalf("alert was not acknowledged: %#v", got)
	}
	app.triggerAlert(Todo{ID: "focus-complete", Title: "休息一下"}, "focus")
	if got := app.GetActiveReminder(); got == nil || got.Kind != "focus" {
		t.Fatalf("focus alert kind was not preserved: %#v", got)
	}
}

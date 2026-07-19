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
	_, err = store.SaveSettings(Settings{AlwaysOnTop: false, CompactMode: true, WorkStart: "08:30", WorkEnd: "17:45", Workdays: []int{1, 2, 3, 4, 5}})
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
	if settings.WorkStart != "09:00" || settings.WorkEnd != "18:00" || len(settings.Workdays) != 5 || settings.SalaryWorkdays != 21.75 || settings.WeatherCity != "上海" || settings.Language != "system" {
		t.Fatalf("unexpected defaults: %#v", settings)
	}
	if got := normaliseSettings(Settings{Language: "en", Workdays: []int{1}}).Language; got != "en" {
		t.Fatalf("language selection was not preserved: %q", got)
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

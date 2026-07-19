package main

import "time"

type Todo struct {
	ID         string     `json:"id"`
	Title      string     `json:"title"`
	Note       string     `json:"note,omitempty"`
	DueAt      *time.Time `json:"dueAt,omitempty"`
	Completed  bool       `json:"completed"`
	CreatedAt  time.Time  `json:"createdAt"`
	UpdatedAt  time.Time  `json:"updatedAt"`
	NotifiedAt *time.Time `json:"notifiedAt,omitempty"`
}

type Settings struct {
	AlwaysOnTop    bool    `json:"alwaysOnTop"`
	CompactMode    bool    `json:"compactMode"`
	WorkStart      string  `json:"workStart"`
	WorkEnd        string  `json:"workEnd"`
	Workdays       []int   `json:"workdays"`
	MonthlySalary  float64 `json:"monthlySalary"`
	SalaryWorkdays float64 `json:"salaryWorkdays"`
	WeatherCity    string  `json:"weatherCity"`
	Language       string  `json:"language"`
}

type State struct {
	Todos    []Todo       `json:"todos"`
	Settings Settings     `json:"settings"`
	Focus    FocusSession `json:"focus"`
}

type FocusSession struct {
	Active          bool       `json:"active"`
	DurationMinutes int        `json:"durationMinutes"`
	StartedAt       *time.Time `json:"startedAt,omitempty"`
	EndsAt          *time.Time `json:"endsAt,omitempty"`
	CompletedAt     *time.Time `json:"completedAt,omitempty"`
}

type TodoInput struct {
	Title string `json:"title"`
	Note  string `json:"note"`
	DueAt string `json:"dueAt"`
}

type ReminderAlert struct {
	Sequence    uint64    `json:"sequence"`
	Kind        string    `json:"kind"`
	Todo        Todo      `json:"todo"`
	TriggeredAt time.Time `json:"triggeredAt"`
}

type Weather struct {
	City                string    `json:"city"`
	Temperature         float64   `json:"temperature"`
	ApparentTemperature float64   `json:"apparentTemperature"`
	WeatherCode         int       `json:"weatherCode"`
	Description         string    `json:"description"`
	Icon                string    `json:"icon"`
	UpdatedAt           time.Time `json:"updatedAt"`
}

type AppInfo struct {
	Name        string `json:"name"`
	Version     string `json:"version"`
	Author      string `json:"author"`
	Email       string `json:"email"`
	Description string `json:"description"`
}

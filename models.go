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
	AlwaysOnTop      bool    `json:"alwaysOnTop"`
	CompactMode      bool    `json:"compactMode"`
	ShowCompactTodos bool    `json:"showCompactTodos"`
	CompactOpacity   int     `json:"compactOpacity"`
	CompactWidth     int     `json:"compactWidth"`
	CompactHeight    int     `json:"compactHeight"`
	WorkStart        string  `json:"workStart"`
	WorkEnd          string  `json:"workEnd"`
	Workdays         []int   `json:"workdays"`
	MonthlySalary    float64 `json:"monthlySalary"`
	SalaryWorkdays   float64 `json:"salaryWorkdays"`
	Currency         string  `json:"currency"`
	WeatherCity      string  `json:"weatherCity"`
	Language         string  `json:"language"`
	Theme            string  `json:"theme"`
}

type State struct {
	Todos             []Todo            `json:"todos"`
	Settings          Settings          `json:"settings"`
	Focus             FocusSession      `json:"focus"`
	LastWeather       *Weather          `json:"lastWeather,omitempty"`
	LastUpdateCheckAt *time.Time        `json:"lastUpdateCheckAt,omitempty"`
	RealtimeIdentity  *RealtimeIdentity `json:"realtimeIdentity,omitempty"`
	RealtimeMessages  []RealtimeMessage `json:"realtimeMessages,omitempty"`
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
	QueryCity           string    `json:"queryCity,omitempty"`
	City                string    `json:"city"`
	Temperature         float64   `json:"temperature"`
	ApparentTemperature float64   `json:"apparentTemperature"`
	WeatherCode         int       `json:"weatherCode"`
	Description         string    `json:"description"`
	Icon                string    `json:"icon"`
	UpdatedAt           time.Time `json:"updatedAt"`
	Stale               bool      `json:"stale,omitempty"`
	Error               string    `json:"error,omitempty"`
}

type AppInfo struct {
	Name        string `json:"name"`
	Version     string `json:"version"`
	Author      string `json:"author"`
	Email       string `json:"email"`
	Description string `json:"description"`
}

type UpdateInfo struct {
	CurrentVersion string    `json:"currentVersion"`
	LatestVersion  string    `json:"latestVersion"`
	Available      bool      `json:"available"`
	Skipped        bool      `json:"skipped"`
	ReleaseURL     string    `json:"releaseURL"`
	DownloadURL    string    `json:"downloadURL,omitempty"`
	AssetName      string    `json:"assetName,omitempty"`
	AssetSize      int64     `json:"assetSize,omitempty"`
	Digest         string    `json:"digest,omitempty"`
	ReleaseNotes   string    `json:"releaseNotes,omitempty"`
	PublishedAt    time.Time `json:"publishedAt,omitempty"`
}

type RealtimeIdentity struct {
	UserID       int64  `json:"userId"`
	Username     string `json:"username"`
	DisplayName  string `json:"displayName"`
	DeviceID     string `json:"deviceId"`
	CredentialID string `json:"credentialId"`
	PublicKey    string `json:"publicKey"`
}

type RealtimeMessage struct {
	MessageID        string    `json:"messageId"`
	ChannelID        string    `json:"channelId,omitempty"`
	SenderUserID     int64     `json:"senderUserId"`
	PeerUserID       int64     `json:"peerUserId"`
	EventType        string    `json:"eventType"`
	Text             string    `json:"text,omitempty"`
	CreatedAt        time.Time `json:"createdAt"`
	OnlineDeliveries int       `json:"onlineDeliveries,omitempty"`
	Outgoing         bool      `json:"outgoing"`
}

type RealtimeSnapshot struct {
	Status        string            `json:"status"`
	DesiredOnline bool              `json:"desiredOnline"`
	LastError     string            `json:"lastError,omitempty"`
	Identity      *RealtimeIdentity `json:"identity,omitempty"`
	Messages      []RealtimeMessage `json:"messages"`
}

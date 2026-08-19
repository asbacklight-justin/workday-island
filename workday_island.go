package main

import (
	"context"
	"encoding/json"
	"strings"
)

// WorkdayIslandClient reuses the single Workday account JWT managed by the
// cloud-disk client. Game state therefore follows the same sign-in/sign-out
// lifecycle as chat, notes and cloud storage.
type WorkdayIslandClient struct{ account *CloudDiskClient }

func NewWorkdayIslandClient(account *CloudDiskClient) *WorkdayIslandClient {
	return &WorkdayIslandClient{account: account}
}

type WorkdayIslandProfile struct {
	Level          uint   `json:"level"`
	Experience     uint   `json:"experience"`
	NextExperience uint   `json:"next_experience"`
	SlackCoins     uint   `json:"slack_coins"`
	TotalCaught    uint   `json:"total_caught"`
	BestStreak     uint   `json:"best_streak"`
	EquippedRodID  string `json:"equipped_rod_id"`
	LegacyMigrated bool   `json:"legacy_migrated"`
}

type WorkdayIslandInventoryItem struct {
	FishID       string `json:"fish_id"`
	Quantity     uint   `json:"quantity"`
	LastCaughtAt string `json:"last_caught_at"`
}

type WorkdayIslandState struct {
	Profile           WorkdayIslandProfile         `json:"profile"`
	Inventory         []WorkdayIslandInventoryItem `json:"inventory"`
	DiscoveredFishIDs []string                     `json:"discovered_fish_ids"`
	OwnedRodIDs       []string                     `json:"owned_rod_ids"`
	PetState          json.RawMessage              `json:"pet_state,omitempty"`
	FarmState         json.RawMessage              `json:"farm_state,omitempty"`
}

type WorkdayIslandCatchResult struct {
	State       WorkdayIslandState `json:"state"`
	Experience  uint               `json:"experience_gained"`
	SlackCoins  uint               `json:"slack_coins_gained"`
	UnlockedRod string             `json:"unlocked_rod"`
}

type WorkdayIslandLegacyState struct {
	FishIDs       []string        `json:"fish_ids"`
	DiscoveredIDs []string        `json:"discovered_fish_ids"`
	OwnedRodIDs   []string        `json:"owned_rod_ids"`
	EquippedRodID string          `json:"equipped_rod_id"`
	PetState      json.RawMessage `json:"pet_state,omitempty"`
	FarmState     json.RawMessage `json:"farm_state,omitempty"`
}

type WorkdayIslandAuxiliaryState struct {
	PetState  json.RawMessage `json:"pet_state"`
	FarmState json.RawMessage `json:"farm_state"`
}

func (client *WorkdayIslandClient) GetState(ctx context.Context) (WorkdayIslandState, error) {
	var state WorkdayIslandState
	err := client.account.requestAccountJSON(ctx, "GET", "/workday-island/state", nil, &state, "摸鱼岛")
	return state, err
}

func (client *WorkdayIslandClient) MigrateLegacy(ctx context.Context, legacy WorkdayIslandLegacyState) (WorkdayIslandState, error) {
	var state WorkdayIslandState
	err := client.account.requestAccountJSON(ctx, "POST", "/workday-island/legacy-migration", legacy, &state, "摸鱼岛")
	return state, err
}

func (client *WorkdayIslandClient) Catch(ctx context.Context, fishID string, streak uint) (WorkdayIslandCatchResult, error) {
	var result WorkdayIslandCatchResult
	err := client.account.requestAccountJSON(ctx, "POST", "/workday-island/catches", map[string]any{"fish_id": strings.TrimSpace(fishID), "streak": streak}, &result, "摸鱼岛")
	return result, err
}

func (client *WorkdayIslandClient) ConsumeFish(ctx context.Context, fishID string) (WorkdayIslandState, error) {
	var state WorkdayIslandState
	err := client.account.requestAccountJSON(ctx, "POST", "/workday-island/inventory/consume", map[string]any{"fish_id": strings.TrimSpace(fishID)}, &state, "摸鱼岛")
	return state, err
}

func (client *WorkdayIslandClient) EquipRod(ctx context.Context, rodID string) (WorkdayIslandState, error) {
	var state WorkdayIslandState
	err := client.account.requestAccountJSON(ctx, "PUT", "/workday-island/rods/equipped", map[string]any{"rod_id": strings.TrimSpace(rodID)}, &state, "摸鱼岛")
	return state, err
}

func (client *WorkdayIslandClient) SaveAuxiliaryState(ctx context.Context, input WorkdayIslandAuxiliaryState) (WorkdayIslandState, error) {
	var state WorkdayIslandState
	err := client.account.requestAccountJSON(ctx, "PUT", "/workday-island/state/auxiliary", input, &state, "摸鱼岛")
	return state, err
}

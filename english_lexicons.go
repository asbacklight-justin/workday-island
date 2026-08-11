package main

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"strings"
)

// ErrEnglishLexiconPlusRequired keeps the desktop word-data catalogue aligned
// with the membership boundary used by textbooks and immersive books.
var ErrEnglishLexiconPlusRequired = errors.New("词库数据仅限 Plus、Pro 或 Ultra 会员使用")

type EnglishLexicon struct {
	Code         string `json:"code"`
	Name         string `json:"name"`
	Edition      string `json:"edition"`
	Level        int8   `json:"level"`
	TotalLessons int    `json:"total_lessons"`
	TotalEntries int    `json:"total_entries"`
}

type EnglishLexiconLesson struct {
	LessonNo   int    `json:"lesson_no"`
	Title      string `json:"title"`
	SortNo     int    `json:"sort_no"`
	EntryCount int    `json:"entry_count"`
}

type EnglishLexiconEntry struct {
	ID             uint64 `json:"id"`
	SortNo         int    `json:"sort_no"`
	Word           string `json:"word"`
	NormalizedWord string `json:"normalized_word"`
	Phonetic       string `json:"phonetic"`
	PartOfSpeech   string `json:"part_of_speech"`
	MeaningCN      string `json:"meaning_cn"`
	ExampleEN      string `json:"example_en"`
	ExampleCN      string `json:"example_cn"`
	Difficulty     int8   `json:"difficulty"`
}

type EnglishLexiconList struct {
	List  []EnglishLexicon `json:"list"`
	Total int              `json:"total"`
}

type EnglishLexiconLessons struct {
	Lexicon EnglishLexicon         `json:"lexicon"`
	Lessons []EnglishLexiconLesson `json:"lessons"`
}

type EnglishLexiconLessonDetail struct {
	Lexicon EnglishLexicon        `json:"lexicon"`
	Lesson  EnglishLexiconLesson  `json:"lesson"`
	Entries []EnglishLexiconEntry `json:"entries"`
}

func (client *CloudDiskClient) ListEnglishLexicons(ctx context.Context) (EnglishLexiconList, error) {
	var result EnglishLexiconList
	err := client.requestAccountJSON(ctx, http.MethodGet, "/english-lexicons", nil, &result, "词库数据服务")
	if unavailableEnglishLexiconEndpoint(err) {
		err = client.requestAccountJSON(ctx, http.MethodGet, "/public/eng-lexicons", nil, &result, "词库数据服务")
	}
	if result.List == nil {
		result.List = []EnglishLexicon{}
	}
	return result, err
}

func (client *CloudDiskClient) ListEnglishLexiconLessons(ctx context.Context, code string) (EnglishLexiconLessons, error) {
	code = strings.TrimSpace(code)
	if code == "" {
		return EnglishLexiconLessons{}, errors.New("词库编码不能为空")
	}
	var result EnglishLexiconLessons
	path := fmt.Sprintf("/english-lexicons/%s/lessons", code)
	err := client.requestAccountJSON(ctx, http.MethodGet, path, nil, &result, "词库数据服务")
	if unavailableEnglishLexiconEndpoint(err) {
		err = client.requestAccountJSON(ctx, http.MethodGet, fmt.Sprintf("/public/eng-lexicons/%s/lessons", code), nil, &result, "词库数据服务")
	}
	if result.Lessons == nil {
		result.Lessons = []EnglishLexiconLesson{}
	}
	return result, err
}

func (client *CloudDiskClient) GetEnglishLexiconLesson(ctx context.Context, code string, lessonNo int) (EnglishLexiconLessonDetail, error) {
	code = strings.TrimSpace(code)
	if code == "" || lessonNo < 1 {
		return EnglishLexiconLessonDetail{}, errors.New("词库课程无效")
	}
	var result EnglishLexiconLessonDetail
	path := fmt.Sprintf("/english-lexicons/%s/lessons/%d", code, lessonNo)
	err := client.requestAccountJSON(ctx, http.MethodGet, path, nil, &result, "词库数据服务")
	if unavailableEnglishLexiconEndpoint(err) {
		err = client.requestAccountJSON(ctx, http.MethodGet, fmt.Sprintf("/public/eng-lexicons/%s/lessons/%d", code, lessonNo), nil, &result, "词库数据服务")
	}
	if result.Entries == nil {
		result.Entries = []EnglishLexiconEntry{}
	}
	return result, err
}

func unavailableEnglishLexiconEndpoint(err error) bool {
	if err == nil {
		return false
	}
	message := strings.ToLower(strings.TrimSpace(err.Error()))
	return strings.Contains(message, "http 404") || strings.Contains(message, "not found") || message == "404 page not found"
}

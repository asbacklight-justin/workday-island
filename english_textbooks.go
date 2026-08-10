package main

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"strings"
)

// ErrEnglishTextbookPlusRequired is returned before any remote request when
// the account is not a Plus (or higher) member.
var ErrEnglishTextbookPlusRequired = errors.New("教材课文仅限 Plus、Pro 或 Ultra 会员使用")

type EnglishTextbook struct {
	Code            string `json:"code"`
	TitleEN         string `json:"title_en"`
	TitleCN         string `json:"title_cn"`
	Edition         string `json:"edition"`
	Language        string `json:"language"`
	TotalLessons    int    `json:"total_lessons"`
	TotalParagraphs int    `json:"total_paragraphs"`
	TotalWords      int    `json:"total_words"`
	SourceType      string `json:"source_type"`
	CopyrightNotice string `json:"copyright_notice"`
}

type EnglishTextbookLesson struct {
	LessonNo       int    `json:"lesson_no"`
	TitleEN        string `json:"title_en"`
	TitleCN        string `json:"title_cn"`
	SummaryCN      string `json:"summary_cn"`
	WordCount      int    `json:"word_count"`
	ParagraphCount int    `json:"paragraph_count"`
	SortNo         int    `json:"sort_no"`
	LinkedLexicon  bool   `json:"linked_lexicon"`
}

type EnglishTextbookParagraph struct {
	ParagraphNo   int    `json:"paragraph_no"`
	ContentEN     string `json:"content_en"`
	ContentCN     string `json:"content_cn"`
	WordCount     int    `json:"word_count"`
	SentenceCount int    `json:"sentence_count"`
	SortNo        int    `json:"sort_no"`
}

type EnglishTextbookEntry struct {
	SortNo       int    `json:"sort_no"`
	Word         string `json:"word"`
	Phonetic     string `json:"phonetic"`
	PartOfSpeech string `json:"part_of_speech"`
	MeaningCN    string `json:"meaning_cn"`
	ExampleEN    string `json:"example_en"`
	ExampleCN    string `json:"example_cn"`
	Difficulty   int8   `json:"difficulty"`
}

type EnglishTextbookList struct {
	List  []EnglishTextbook `json:"list"`
	Total int               `json:"total"`
}

type EnglishTextbookLessons struct {
	Book    EnglishTextbook         `json:"book"`
	Lessons []EnglishTextbookLesson `json:"lessons"`
}

type EnglishTextbookLessonDetail struct {
	Book       EnglishTextbook            `json:"book"`
	Lesson     EnglishTextbookLesson      `json:"lesson"`
	Paragraphs []EnglishTextbookParagraph `json:"paragraphs"`
	Entries    []EnglishTextbookEntry     `json:"entries"`
}

func (client *CloudDiskClient) ListEnglishTextbooks(ctx context.Context) (EnglishTextbookList, error) {
	var result EnglishTextbookList
	err := client.requestAccountJSON(ctx, http.MethodGet, "/english-textbooks", nil, &result, "教材课文服务")
	if result.List == nil {
		result.List = []EnglishTextbook{}
	}
	return result, err
}

func (client *CloudDiskClient) ListEnglishTextbookLessons(ctx context.Context, code string) (EnglishTextbookLessons, error) {
	code = strings.ToLower(strings.TrimSpace(code))
	if code == "" {
		return EnglishTextbookLessons{}, errors.New("教材编码不能为空")
	}
	var result EnglishTextbookLessons
	err := client.requestAccountJSON(ctx, http.MethodGet, "/english-textbooks/"+code+"/lessons", nil, &result, "教材课文服务")
	if result.Lessons == nil {
		result.Lessons = []EnglishTextbookLesson{}
	}
	return result, err
}

func (client *CloudDiskClient) GetEnglishTextbookLesson(ctx context.Context, code string, lessonNo int) (EnglishTextbookLessonDetail, error) {
	code = strings.ToLower(strings.TrimSpace(code))
	if code == "" || lessonNo < 1 {
		return EnglishTextbookLessonDetail{}, errors.New("教材课次无效")
	}
	var result EnglishTextbookLessonDetail
	path := fmt.Sprintf("/english-textbooks/%s/lessons/%d", code, lessonNo)
	err := client.requestAccountJSON(ctx, http.MethodGet, path, nil, &result, "教材课文服务")
	if result.Paragraphs == nil {
		result.Paragraphs = []EnglishTextbookParagraph{}
	}
	if result.Entries == nil {
		result.Entries = []EnglishTextbookEntry{}
	}
	return result, err
}

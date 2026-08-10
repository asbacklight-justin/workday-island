package main

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"net/url"
	"strings"
	"time"
)

var ErrEnglishLibraryPlusRequired = errors.New("英文书籍仅限 Plus、Pro 或 Ultra 会员使用")

type EnglishBook struct {
	ID            uint64    `json:"id"`
	Title         string    `json:"title"`
	Author        *string   `json:"author"`
	Summary       *string   `json:"summary"`
	Language      *string   `json:"language"`
	TotalChapters int       `json:"total_chapters"`
	Status        int8      `json:"status"`
	Progress      float64   `json:"progress"`
	CreateTime    time.Time `json:"create_time"`
}

type EnglishBookList struct {
	List     []EnglishBook `json:"list"`
	Total    int64         `json:"total"`
	Page     int           `json:"page"`
	PageSize int           `json:"pageSize"`
}

type EnglishBookChapter struct {
	ID        uint64  `json:"id"`
	BookID    uint64  `json:"book_id"`
	ChapterNo int     `json:"chapter_no"`
	Title     *string `json:"title"`
	WordCount int     `json:"word_count"`
}

type EnglishBookParagraph struct {
	ID            uint64 `json:"id"`
	BookID        uint64 `json:"book_id"`
	ChapterID     uint64 `json:"chapter_id"`
	ParagraphNo   int    `json:"paragraph_no"`
	Content       string `json:"content"`
	WordCount     int    `json:"word_count"`
	SentenceCount int    `json:"sentence_count"`
}

type EnglishBookParagraphPage struct {
	List     []EnglishBookParagraph `json:"list"`
	Total    int64                  `json:"total"`
	Page     int                    `json:"page"`
	PageSize int                    `json:"pageSize"`
}

type EnglishBookProgress struct {
	ID              uint64   `json:"id"`
	UserID          uint64   `json:"user_id"`
	BookID          uint64   `json:"book_id"`
	ChapterID       *uint64  `json:"chapter_id"`
	ParagraphNo     *int     `json:"paragraph_no"`
	ProgressPercent *float64 `json:"progress_percent"`
}

type EnglishBookProgressUpdate struct {
	ChapterID       uint64  `json:"chapter_id"`
	ParagraphNo     int     `json:"paragraph_no"`
	ProgressPercent float64 `json:"progress_percent"`
}

func (client *CloudDiskClient) ListEnglishBooks(ctx context.Context, keyword, language string) (EnglishBookList, error) {
	query := url.Values{"page": {"1"}, "pageSize": {"100"}, "status": {"1"}}
	if keyword = strings.TrimSpace(keyword); keyword != "" {
		query.Set("keyword", keyword)
	}
	if language = strings.TrimSpace(language); language != "" && language != "all" {
		query.Set("language", language)
	}
	var result EnglishBookList
	err := client.requestAccountJSON(ctx, http.MethodGet, "/english-library/books?"+query.Encode(), nil, &result, "英文书籍服务")
	if unavailableEnglishLibraryEndpoint(err) {
		err = client.requestAccountJSON(ctx, http.MethodGet, "/book?"+query.Encode(), nil, &result, "英文书籍服务")
	}
	if result.List == nil {
		result.List = []EnglishBook{}
	}
	return result, err
}

func (client *CloudDiskClient) GetEnglishBook(ctx context.Context, bookID uint64) (EnglishBook, error) {
	if bookID == 0 {
		return EnglishBook{}, errors.New("书籍编号无效")
	}
	var result EnglishBook
	err := client.requestAccountJSON(ctx, http.MethodGet, fmt.Sprintf("/english-library/books/%d", bookID), nil, &result, "英文书籍服务")
	if unavailableEnglishLibraryEndpoint(err) {
		err = client.requestAccountJSON(ctx, http.MethodGet, fmt.Sprintf("/book/%d", bookID), nil, &result, "英文书籍服务")
	}
	return result, err
}

func (client *CloudDiskClient) ListEnglishBookChapters(ctx context.Context, bookID uint64) ([]EnglishBookChapter, error) {
	if bookID == 0 {
		return nil, errors.New("书籍编号无效")
	}
	var result []EnglishBookChapter
	err := client.requestAccountJSON(ctx, http.MethodGet, fmt.Sprintf("/english-library/chapters?book_id=%d", bookID), nil, &result, "英文书籍服务")
	if unavailableEnglishLibraryEndpoint(err) {
		err = client.requestAccountJSON(ctx, http.MethodGet, fmt.Sprintf("/book/chapters?book_id=%d", bookID), nil, &result, "英文书籍服务")
	}
	if result == nil {
		result = []EnglishBookChapter{}
	}
	return result, err
}

func (client *CloudDiskClient) ListEnglishBookParagraphs(ctx context.Context, chapterID uint64, page, pageSize int) (EnglishBookParagraphPage, error) {
	if chapterID == 0 {
		return EnglishBookParagraphPage{}, errors.New("章节编号无效")
	}
	if page < 1 {
		page = 1
	}
	if pageSize < 1 || pageSize > 100 {
		pageSize = 20
	}
	path := fmt.Sprintf("/english-library/paragraphs?chapter_id=%d&page=%d&pageSize=%d", chapterID, page, pageSize)
	var result EnglishBookParagraphPage
	err := client.requestAccountJSON(ctx, http.MethodGet, path, nil, &result, "英文书籍服务")
	if unavailableEnglishLibraryEndpoint(err) {
		legacyPath := fmt.Sprintf("/book/paragraphs?chapter_id=%d&page=%d&pageSize=%d", chapterID, page, pageSize)
		err = client.requestAccountJSON(ctx, http.MethodGet, legacyPath, nil, &result, "英文书籍服务")
	}
	if result.List == nil {
		result.List = []EnglishBookParagraph{}
	}
	return result, err
}

func (client *CloudDiskClient) GetEnglishBookProgress(ctx context.Context, bookID uint64) (EnglishBookProgress, error) {
	var result EnglishBookProgress
	err := client.requestAccountJSON(ctx, http.MethodGet, fmt.Sprintf("/english-library/progress/%d", bookID), nil, &result, "英文书籍服务")
	if unavailableEnglishLibraryEndpoint(err) {
		err = client.requestAccountJSON(ctx, http.MethodGet, fmt.Sprintf("/book/progress/%d", bookID), nil, &result, "英文书籍服务")
	}
	return result, err
}

func (client *CloudDiskClient) SaveEnglishBookProgress(ctx context.Context, bookID uint64, update EnglishBookProgressUpdate) error {
	err := client.requestAccountJSON(ctx, http.MethodPut, fmt.Sprintf("/english-library/progress/%d", bookID), update, nil, "英文书籍服务")
	if unavailableEnglishLibraryEndpoint(err) {
		return client.requestAccountJSON(ctx, http.MethodPut, fmt.Sprintf("/book/progress/%d", bookID), update, nil, "英文书籍服务")
	}
	return err
}

// During a rolling deployment, older servers only expose the authenticated
// /book reader routes. Fall back solely for a missing endpoint; authorization
// and membership errors are intentionally never bypassed.
func unavailableEnglishLibraryEndpoint(err error) bool {
	if err == nil {
		return false
	}
	message := strings.ToLower(strings.TrimSpace(err.Error()))
	return strings.Contains(message, "http 404") || strings.Contains(message, "not found") || message == "404 page not found"
}

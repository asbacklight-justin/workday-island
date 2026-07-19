//go:build !darwin && !windows

package main

func sendNotification(string, string) error { return nil }

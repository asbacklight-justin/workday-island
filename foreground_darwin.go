//go:build darwin && cgo

package main

/*
#cgo CFLAGS: -x objective-c
#cgo LDFLAGS: -framework AppKit
#include <AppKit/AppKit.h>
#include <dispatch/dispatch.h>

static void activate_workday_island_on_main(void *unused) {
    [NSApp activateIgnoringOtherApps:YES];
    for (NSWindow *window in [NSApp windows]) {
        [window makeKeyAndOrderFront:nil];
        [window orderFrontRegardless];
    }
}

static void activate_workday_island(void) {
    dispatch_async_f(dispatch_get_main_queue(), NULL, activate_workday_island_on_main);
}
*/
import "C"

func bringAppToFront() {
	C.activate_workday_island()
}

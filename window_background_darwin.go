//go:build darwin && cgo

package main

/*
#cgo CFLAGS: -x objective-c
#cgo LDFLAGS: -framework AppKit
#include <AppKit/AppKit.h>
#include <dispatch/dispatch.h>
#include <stdbool.h>
#include <stdlib.h>

typedef struct {
    bool transparent;
} WorkdayBackgroundRequest;

static void set_workday_island_background_on_main(void *raw) {
    WorkdayBackgroundRequest *request = (WorkdayBackgroundRequest *)raw;
    bool transparent = request->transparent;
    free(request);

    for (NSWindow *window in [NSApp windows]) {
        [window setOpaque:NO];
        [window setBackgroundColor:[NSColor clearColor]];
        NSView *contentView = [window contentView];
        [contentView setWantsLayer:YES];
        [[contentView layer] setBackgroundColor:[[NSColor clearColor] CGColor]];

        NSArray *views = [[[contentView subviews] copy] autorelease];
        for (NSView *view in views) {
            if ([view isKindOfClass:[NSVisualEffectView class]]) {
                [view removeFromSuperview];
                continue;
            }
            if ([view respondsToSelector:@selector(setValue:forKey:)]) {
                @try {
                    [view setValue:[NSNumber numberWithBool:NO] forKey:@"drawsBackground"];
                } @catch (NSException *exception) {
                    // Only WKWebView implements drawsBackground.
                }
            }
        }
    }
}

static void set_workday_island_background_transparent(bool transparent) {
    WorkdayBackgroundRequest *request = malloc(sizeof(WorkdayBackgroundRequest));
    request->transparent = transparent;
    dispatch_async_f(dispatch_get_main_queue(), request, set_workday_island_background_on_main);
}
*/
import "C"

func setWindowBackgroundTransparent(transparent bool) {
	C.set_workday_island_background_transparent(C.bool(transparent))
}

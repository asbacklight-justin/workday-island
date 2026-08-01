//go:build darwin

package main

/*
#cgo CFLAGS: -x objective-c
#cgo LDFLAGS: -framework Cocoa
#import <Cocoa/Cocoa.h>

static BOOL workdayFullscreenActive = NO;
static NSRect workdayFullscreenPreviousFrame;
static NSSize workdayFullscreenPreviousMinSize;
static NSSize workdayFullscreenPreviousMaxSize;
static BOOL workdayFullscreenPreviousMovable = YES;

static NSWindow *workday_island_main_window(void) {
    NSWindow *keyWindow = [NSApp keyWindow];
    if (keyWindow != nil && ![keyWindow isKindOfClass:[NSPanel class]]) {
        return keyWindow;
    }
    for (NSWindow *window in [NSApp windows]) {
        if (![window isKindOfClass:[NSPanel class]] && window.contentView != nil) {
            return window;
        }
    }
    return nil;
}

static void set_workday_island_fullscreen_on_main_thread(BOOL fullscreen) {
    NSWindow *window = workday_island_main_window();
    if (window == nil || fullscreen == workdayFullscreenActive) {
        return;
    }
    if (fullscreen) {
        NSScreen *screen = window.screen ?: [NSScreen mainScreen];
        if (screen == nil) {
            return;
        }
        workdayFullscreenPreviousFrame = window.frame;
        workdayFullscreenPreviousMinSize = window.contentMinSize;
        workdayFullscreenPreviousMaxSize = window.contentMaxSize;
        workdayFullscreenPreviousMovable = window.movable;
        window.contentMinSize = NSMakeSize(1, 1);
        window.contentMaxSize = NSMakeSize(CGFLOAT_MAX, CGFLOAT_MAX);
        window.movable = NO;
        [NSApp setPresentationOptions:(NSApplicationPresentationAutoHideDock |
                                       NSApplicationPresentationAutoHideMenuBar)];
        [window setFrame:screen.frame display:YES animate:YES];
        [window makeKeyAndOrderFront:nil];
        [NSApp activateIgnoringOtherApps:YES];
        workdayFullscreenActive = YES;
        return;
    }

    [NSApp setPresentationOptions:NSApplicationPresentationDefault];
    window.movable = workdayFullscreenPreviousMovable;
    window.contentMinSize = workdayFullscreenPreviousMinSize;
    window.contentMaxSize = workdayFullscreenPreviousMaxSize;
    [window setFrame:workdayFullscreenPreviousFrame display:YES animate:YES];
    [window makeKeyAndOrderFront:nil];
    workdayFullscreenActive = NO;
}

static int set_workday_island_fullscreen(int fullscreen) {
    BOOL desired = fullscreen != 0;
    if ([NSThread isMainThread]) {
        set_workday_island_fullscreen_on_main_thread(desired);
    } else {
        dispatch_sync(dispatch_get_main_queue(), ^{
            set_workday_island_fullscreen_on_main_thread(desired);
        });
    }
    return workdayFullscreenActive ? 1 : 0;
}

static int is_workday_island_fullscreen(void) {
    __block BOOL active = NO;
    if ([NSThread isMainThread]) {
        active = workdayFullscreenActive;
    } else {
        dispatch_sync(dispatch_get_main_queue(), ^{
            active = workdayFullscreenActive;
        });
    }
    return active ? 1 : 0;
}
*/
import "C"

import "context"

func setPlatformWindowFullscreen(_ context.Context, fullscreen bool) bool {
	value := C.int(0)
	if fullscreen {
		value = 1
	}
	return C.set_workday_island_fullscreen(value) != 0
}

func isPlatformWindowFullscreen(_ context.Context) bool {
	return C.is_workday_island_fullscreen() != 0
}

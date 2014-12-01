---
layout: ts2-doc
title: TotalSpaces2 Defaults settings
subtitle: Defaults settings
---

This is a list of the user accessible defaults settings that you can adjust using the 'defaults' command line program in Terminal.app.

## <a id="faster-transitions"></a>Transition speed

<code>defaults write com.binaryage.TotalSpaces2 transitionSpeed -float 115</code>

The normal preferences slider goes to 110, but 130 is the hard limit; do not set it higher - anyway you won't even see the transitions at that speed. 

Note that there is a small built in delay after you press the hotkey that is unavoidable with transitions - they take a little time to set up.

## <a id="longer-notifications"></a>Notification graphic period

<code>defaults write com.binaryage.TotalSpaces2 notificationDuration -float 1.0</code>

The notification graphic remains on the screen for this period, unless the transition was triggered by hotkeys in which case it stays on screen for as long as you hold the modifier keys down.

The value is in seconds, and should be between 0.25 and 3.0. The default value is 0.85.

## <a id="mouse-edge-timings"></a>Mouse-at-edge switch timing

These adjust the dwell and repeat period for triggering [space changes by bringing your mouse to the edge of the screen](/mouse-edges2).

<code>defaults write com.binaryage.TotalSpaces2 sideSwitchDelay -float 1.5</code>

The range is 0.1 - 20.0, the default is 1.1 seconds. This setting also affects how quickly you can drag windows from desktop to desktop.

<code>defaults write com.binaryage.TotalSpaces2 sideSwitchDelayWithModkeys -float 0.5</code>

The range is 0.01 - 20.0, the default is 0.3 seconds.

<code>defaults write com.binaryage.TotalSpaces2 sideSwitchRepeatDelay -float 1.2</code>

The range is 0.5 - 3.5, the default is 1.0 seconds.

## <a id="place-window-as-dropped"></a>Window positioning when dragging windows in the overview grid

Normally windows stay where you drop them in the overview grid, but pressing the ALT (option) key whilst dragging will cause the windows to retain their original position, so will be positioned as they were in the space the window came from.

You can swap this behaviour so that keeping the position is the default, and pressing the ALT key will allow the to be dropped in an exact position.

<code>defaults write com.binaryage.TotalSpaces2 placeWindowsAsDroppedByDefault -bool NO</code>

## <a id="right-modkeys-only"></a>Use only right side modkeys when changing space

If you are using key combinations such as ALT with the arrow keys to change space, it can be useful to differentiate between the keys on each side of the keyboard so that the left side ones can be used for the usual functions, and the right side ones for changing space.

Turning this setting on means TotalSpaces2 will only recognise space change hotkeys if the modifier keys on the right side of the keyboard are used.

<code>defaults write com.binaryage.TotalSpaces2 rightSideDirectionModifierKeysOnly -bool YES</code>

## <a id="lower-memory-usage"></a>Less caching/lower memory usage

In some isolated cases we found that the caching that makes the overview grid faster to bring up was causing Mail.app to slow down unacceptably. In order to work around the problem in these cases, there is a command line setting to turn off this caching. It is not recommended unless you have this problem, it will slow down the performance of the overview grid.

<code>defaults write com.binaryage.TotalSpaces2 lowerMemoryUsage -bool YES</code>

## <a id="menu-bar-icon-color"></a>Menu bar icon color

<code>defaults write com.binaryage.TotalSpaces2 menuBarIconColor "094be5"</code>

The color is in RGB hex, same as used in HTML/CSS markup. Only the dark background can be changed; the color of the number and the cross are fixed. The default value is 444444.

The setting is cached for a period - after you have set this setting you will need to move around your grid a few times for it to take effect.

## <a id="active-screen-switching"></a>Use active screen for switching

<code>defaults write com.binaryage.TotalSpaces2 useActiveScreenForSwitching -bool YES</code>

When using multiple monitors, TotalSpaces2 will normally choose which display to switch for hotkey or swipe activations by checking the location of the mouse. So the screen containing the mouse will be the one to switch. This setting uses instead the active screen, so the one containing the active menu bar will be the one to switch.

## <a id="grid-icons-off"></a>Turn icons off in the overview grid

<code>defaults write com.binaryage.TotalSpaces2 hideSpaceIcons -bool YES</code>

Normally TotalSpaces2 will display icons for full screen apps when showing the overview grid so you can easily see which app is where. This setting hides those icons.

&raquo; Next [**FAQ**](/faq2)
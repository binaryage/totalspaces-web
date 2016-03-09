---
layout: ts2-doc
title: TotalSpaces2 Questions
subtitle: Questions and answers
---

0. [What systems will TotalSpaces run on?](#system-requirements)
0. [Where is TotalSpaces?](#finding-totalspaces)
0. [Help, I can't see the menu bar icon!](#menubar-icon)
0. [How can I get rid of the Dashboard?](#no-dashboard)
0. [How can I make a particular app stay on a particular desktop in the grid?](#app-assignments)
0. [How can I uninstall TotalSpaces?](#uninstall)
0. [Why are there no diagonal transitions?](#diagonal-transitions)
0. [How can I make the transitions even faster than the slider allows?](#faster-transitions)
0. [How can I make the notification graphic stay on the screen longer?](#longer-notifications)
0. [How can I adjust the mouse-at-edge switch timing?](#mouse-edge-timings)
0. [How can I change window positioning when dragging windows in the overview grid](#place-window-as-dropped)

## <a id="system-requirements"></a>What systems will TotalSpaces2 run on?

TotalSpaces2 is tested on **OSX Mavericks 10.9** and **OSX Yosemite 10.10** and should work on any mac that can run these operating systems. We also try to add support for new versions as soon as the betas are available.

## <a id="finding-totalspaces"></a>Where is TotalSpaces2?

TotalSpaces2 runs without an icon in the Dock, but instead an icon like this should appear in your menu bar.

<img src="/images/menubar-icon.png">

## <a id="menubar-icon"></a>Help, I can't see the menu bar icon!

There is an option to hide the menu bar icon, and perhaps this is turned on for some reason. In order to re-show the menu bar icon, double click on TotalSpaces2 in your Applications folder (as if to launch the app). This should tell the app to show the menu bar icon again.

## <a id="no-dashboard"></a>How can I get rid of the Dashboard?

The dashboard can be removed from your grid by unchecking "Show dashboard as a space" in Mission Control preferences, or setting Dashboard to "Off" (in Yosemite).

<img src="/images/show-dashboard-as-a-space.png">

## <a id="app-assignments"></a>How can I make a particular app stay on a particular desktop in the grid?

You can now do this from the [Apps preferences](/apps2)

## <a id="uninstall"></a>How can I uninstall TotalSpaces2?

Use [the uninstaller](http://downloads.binaryage.com/TotalSpaces2Uninstaller.zip).

TotalSpaces2 is a normal app that can be dragged to the Trash, except for one additional file that must be removed from /Library/ScriptingAdditions.

The uninstaller will remove this file along with the app itself, as well as restarting Dock so that no trace of TotalSpaces2 remains running in the system.

Note: TotalSpaces2 is built on top of Mission Control. Underneath TotalSpaces2, the desktops are normal OSX desktops. The uninstaller will not remove any desktops you have created whilst running TotalSpaces2, you must adjust your desktops how you like them in Mission Control once you have uninstalled TotalSpaces2.
**TotalSpaces does not make any changes whatsoever to the system software or to OSX - once you have uninstalled it the system will be running only the original OSX software.**

Final note: If you wish to be super-clean you can also remove the preferences files in ~/Library/Preferences/com.binaryage.TotalSpaces2.plist and ~/Library/Preferences/com.binaryage.totalspacescrashwatcher.plist

## <a id="diagonal-transitions"></a>Why are there no diagonal transitions?

As we have rewritten the system transitions for TotalSpaces2, it may be that we can support diagonal transitions for some of the animations in the future.

## <a id="faster-transitions"></a>How can I make the transitions even faster than the slider allows?

Use this command at the command line:

<code>defaults write com.binaryage.TotalSpaces2 transitionSpeed -float 115</code>

then restart TotalSpaces2.

The normal preferences slider goes to 110, but 130 is the hard limit; do not set it higher - anyway you won't even see the transitions at that speed. 

Note that there is a small built in delay after you press the hotkey that is unavoidable with transitions - they take a little time to set up.

## <a id="longer-notifications"></a>How can I make the notification graphic stay on the screen longer?

You can use this command at the command line:

<code>defaults write com.binaryage.TotalSpaces2 notificationDuration -float 1.0</code>

then restart TotalSpaces2. 

The value is in seconds, and should be between 0.25 and 3.0. The default value is 0.85.

## <a id="mouse-edge-timings"></a>How can I adjust the mouse-at-edge switch timing?

You can adjust the dwell and repeat period for triggering [space changes by bringing your mouse to the edge of the screen](/mouse-edges2).

Here are the settings:

<code>defaults write com.binaryage.TotalSpaces2 sideSwitchDelay -float 1.5</code>

The range is 0.1 - 20.0, the default is 1.1 seconds. This setting also affects how quickly you can drag windows from desktop to desktop.

<code>defaults write com.binaryage.TotalSpaces2 sideSwitchDelayWithModkeys -float 0.5</code>

The range is 0.01 - 20.0, the default is 0.3 seconds.

<code>defaults write com.binaryage.TotalSpaces2 sideSwitchRepeatDelay -float 1.2</code>

The range is 0.5 - 3.5, the default is 1.0 seconds.

Don't forget to restart TotalSpaces2 after you have changed these settings.

## <a id="place-window-as-dropped"></a>How can I change window positioning when dragging windows in the overview grid

Normally windows stay where you drop them in the overview grid, but pressing the ALT (option) key whilst dragging will cause the windows to retain their original position, so will be positioned as they were in the space the window came from.

You can swap this behaviour so that keeping the position is the default, and pressing the ALT key will allow the to be dropped in an exact position by using this commend, then restarting TotalSpaces.

<code>defaults write com.binaryage.TotalSpaces2 placeWindowsAsDroppedByDefault -bool NO</code>

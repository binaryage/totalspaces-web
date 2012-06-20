---
layout: ts-doc
title: TotalSpaces Questions
subtitle: Questions I think you might ask
---

## Why is there black blocking on the screen when you change desktop?

This is because OSX is not quick enough at redrawing the screen windows and desktop.

When you change space, in order to do the animation correctly, we freeze the screen, ask OSX to change space instantly, then proceed with our animation. If OSX is not done by the time we start the animation then black areas will appear briefly.

We can solve this by making the delay longer, but this will make changing the desktop slower You can also of course turn animations off altogether in the preferences.

Ultimately we hope to solve the problem by getting an internal notification from the system as to when the new desktop is ready so we can avoid black blocking altogether.

## How can I make a particular app stay on a particular desktop in the grid?

You can now do this from the new [Apps preferences](/apps)

## How can I make a particular appear on all desktops in the grid?

Control-click on the app in the dock, then choose Options and Assign to All Desktops.

## How can I uninstall TotalSpaces?

Use [the uninstaller](http://downloads.binaryage.com/UninstallTotalSpaces.app.zip).

TotalSpaces is a normal app that can be dragged to the Trash, except for one additional file that must be removed from /Library/ScriptingAdditions.

The uninstaller will remove this file along with the app itself, as well as restarting Dock so that no trace of TotalSpaces remains in the system.

## Help, I can't see the menu bar icon!

There is an option to hide the menu bar icon, and perhaps this is turned on for some reason. In order to re-show the menu bar icon, double click on TotalSpaces in your Applications folder (as if to launch the app). This should tell the app to show the menu bar icon again.

## Why are there no diagonal transitions?

In Lion, the core graphics routines we are using do not support diagonal transitions for both diagonal axes. However, we may experiment with making our own transitions in future.

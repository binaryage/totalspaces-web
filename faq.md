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

You can do this via the control-click, or right-click / double finger click menu from the Dock.

When bring this menu up and choose Options, you can then assign the app to This desktop.

So navigate to the desktop you want the app to occupy, then choose This desktop from the menu.

In the future we hope to add management of which apps are fixed to which desktops inside TotalSpaces, but until then you can use this method.
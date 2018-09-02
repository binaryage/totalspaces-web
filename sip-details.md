---
layout: ts2-doc
title: What is System Integrity Protection?
subtitle: What is System Integrity Protection?
---

Find [instructions for installing TotalSpaces2 here.](/sipsettings)

TotalSpaces2 versions 2.3.5 and above (for OSX 10.11 El Capitan and later) cannot be installed on a normally configured machine due to System Integrity Protection (SIP), a new security feature introduced in El Capitan. It must be disabled.

__In macOS versions up to 10.13 High Sierra, you can turn System Integrity Protection back on after you have installed TotalSpaces2 if you wish. This does not apply to 10.14 Mojave and later.__

Here is some information about [what System Integrity Protection is, and what it means to turn it off](https://en.wikipedia.org/wiki/System_Integrity_Protection). Technical details are well covered in [the El Capitan review on Ars Technica](http://arstechnica.com/apple/2015/09/os-x-10-11-el-capitan-the-ars-technica-review/8). Apple also provide [some information here](https://developer.apple.com/library/prerelease/mac/documentation/Security/Conceptual/System_Integrity_Protection_Guide/Introduction/Introduction.html). 

If you decide to modify the setting, you will be able to install TotalSpaces2. Just to be clear...

<div class="license-desk exclamation">
Your machine may be less secure when System Integrity Protection is not running. It is entirely your decision to modify or temporarily modify the settings.
</div>

## Technical details

TotalSpaces2 works by changing the way the Dock program handles spaces. macOS does not provide any other way to control spaces, this is the only way the functionality of TotalSpaces2 can be achieved.

In order to change some features inside Dock, we use a technique called _code injection_. This means we add some additional code to the Dock program whilst it is running to do what we need. This is relatively safe - in fact we do not change any part of macOS on the disk. You only have to quit TotalSpaces2, and the Dock program will restart and everything will be as if TotalSpaces2 was never running.

However, in El Capitan and later the macOS developers added a feature that disallows this kind of modification _even if you have administrator access_. It will also disallow other kinds of modifications (such as replacing parts of the system on disk).

In order for TotalSpaces2 to be installed, this new feature must be disabled. When you disable SIP and run TotalSpaces2, it installs its plugin component in the location `/System/Library/ScriptingAdditions`. This component usually does not change between TotalSpaces2 versions, and even when you turn SIP back on it will continue to allow TotalSpaces2 to load.

## Uninstallation and SIP

To remove TotalSpaces2 from your system, run the uninstaller found on the [latest dmg download of TotalSpaces2(/changes-beta). 

Note that if you have SIP turned on, then the uninstaller will not be able to remove the file in `/System/Library/ScriptingAdditions`. This is not harmful (it won't ever be loaded if you do not run TotalSpaces2), but to be totally clean you should disable SIP and either manually remove it, or run the uninstaller again.

## Upgrading from earlier versions

If you are upgrading your machine to macOS 10.14 Mojave and have SIP turned on, TotalSpaces2 will warn you about not being able to load, and you should [follow the instructions here.](/installing-mojave)

## Further information

You can find some further information [in our original blog post](http://blog.binaryage.com/el-capitan-update).

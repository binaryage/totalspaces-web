---
layout: ts2-doc
title: Running TotalSpaces2 on El Capitan or Sierra
subtitle: How to run TotalSpaces2 on El Capitan or Sierra
---

TotalSpaces2 [versions 2.3.5 and above](/changes-beta) have support for OSX 10.11 El Capitan and macOS 10.12 Sierra, but cannot be installed on a normally configured machine due to System Integrity Protection (SIP), a new security feature in El Capitan.

This article will tell you how to configure your machine to allow installation by modifying the SIP setting.

__Starting with version 2.5.3 of TotalSpaces2, you can turn System Integrity Protection back on after you have installed TotalSpaces2 if you wish.__

Here is some information about [what System Integrity Protection is, and what it means to turn it off](https://en.wikipedia.org/wiki/System_Integrity_Protection). Technical details are well covered in [the El Capitan review on Ars Technica](http://arstechnica.com/apple/2015/09/os-x-10-11-el-capitan-the-ars-technica-review/8). Apple also provide [some information here](https://developer.apple.com/library/prerelease/mac/documentation/Security/Conceptual/System_Integrity_Protection_Guide/Introduction/Introduction.html). 

If you decide to modify the setting under El Capitan/Sierra, you will be able to install TotalSpaces2. Just to be clear...

<div class="license-desk exclamation">
Your machine may be less secure when System Integrity Protection is not running. It is entirely your decision to modify or temporarily modify the settings.
</div>

## How to install TotalSpaces2 by turning off System Integrity Protection

We now recommend turning off SIP to install TotalSpaces2, and to turn it back on again after it has been installed.

You must boot into the Recovery OS. You do this by restarting your machine, and holding&nbsp;&nbsp; <img src="/images/cmd-r.png" title="cmd-r"> &nbsp;&nbsp;until the Apple logo appears.

Then select Terminal from the Utilities menu. It looks like this:

<img src="/shared/img/recovery-utilities-terminal.png">

In the window that opens, type
<code>csrutil disable</code>
and press return. This turns off System Integrity Protection so that TotalSpaces2 can be installed.

<img src="/images/csrutil-disable.jpg">

Reboot your machine and you may install and run the [latest version of TotalSpaces2](/changes-beta).

Once TotalSpaces2 is installed and you have run it for the first time (so it has a chance to install its plugin component), then you may turn SIP back on.

To do this, reboot and hold&nbsp;&nbsp; <img src="/images/cmd-r.png" title="cmd-r"> &nbsp;&nbsp;until the Apple logo appears once more. Go to Utilities->Terminal and type
<code>csrutil enable</code>
and press return. Reboot, and you are done.

## Technical details

TotalSpaces2 works by changing the way the Dock program handles spaces. macOS does not provide any other way to control spaces, this is the only way the functionality of TotalSpaces2 can be achieved.

In order to change some features inside Dock, we use a technique called _code injection_. This means we add some additional code to the Dock program whilst it is running to do what we need. This is relatively safe - in fact we do not change any part of macOS on the disk. You only have to quit TotalSpaces2, and the Dock program will restart and everything will be as if TotalSpaces2 was never running.

However, in El Capitan and later the macOS developers added a feature that disallows this kind of modification _even if you have administrator access_. It will also disallow other kinds of modifications (such as replacing parts of the system on disk).

In order for TotalSpaces2 to be installed, this new feature must be disabled. When you disable SIP and run TotalSpaces2, it installs its plugin component in the location `/System/Library/ScriptingAdditions`. This component usually does not change between TotalSpaces2 versions, and even when you turn SIP back on it will continue to allow TotalSpaces2 to load.

## Uninstallation and SIP

To remove TotalSpaces2 from your system, run the uninstaller found on the [latest dmg download of TotalSpaces2(/changes-beta). 

Note that if you have SIP turned on, then the uninstaller will not be able to remove the file in `/System/Library/ScriptingAdditions`. This is not harmful (it won't ever be loaded if you do not run TotalSpaces2), but to be totally clean you should disable SIP and either manually remove it, or run the uninstaller again.

## Upgrading from earlier versions

If you had an installation of TotalSpaces2 using the partially disabled SIP setting that we earlier recommended (`csrutil enable --without-debug`), then you can still upgrade to versions 2.5.3 and above without changing your SIP settings. Everything will continue to work.

However, if you wish to run with SIP enabled, first disable SIP completely as described above, reboot and then install and run TotalSpaces2 2.5.3 or above. After this version of TotalSpaces2 has been run with SIP completely disabled, then you should be able to fully re-enable SIP.

## Further information

You can find some further information [in our original blog post](http://blog.binaryage.com/el-capitan-update).


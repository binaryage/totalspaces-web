---
layout: ts2-doc
title: Running TotalSpaces2 on El Capitan
subtitle: How to run TotalSpaces2 on El Capitan
---

TotalSpaces2 [versions 2.3.5 and above](/changes-beta) have support for OSX 10.11 El Capitan, but cannot run on a normally configured machine due to system integrity protection, a new security feature in El Capitan.

This article will tell you how to configure your machine without the new setting, so that you can run TotalSpaces2.

Before you do this, it is important to get informed about [what System Integrity Protection is, and what it means to turn it off](https://en.wikipedia.org/wiki/System_Integrity_Protection). __We are not encouraging you to turn it off; indeed your machine may be less secure with it off. It is entirely your decision__.

If you decide to turn if off, you will be able to install and run TotalSpaces2 normally.

## How to turn off System Integrity Protection

You must boot into the Recovery OS. You do this by restarting your machine, and holding&nbsp;&nbsp; <img src="/images/cmd-r.png" title="cmd-r"> &nbsp;&nbsp;until the Apple logo appears.

Then select Terminal from the Utilities menu. It looks like this:

<img src="/images/recovery-1.png">

In the window that opens, type
<code>csrutil disable</code>
and press return.

<img src="/images/recovery-2.png">

Reboot your machine and you may install the [latest version of TotalSpaces2](/changes-beta).

## Technical details

TotalSpaces2 works by changing the way the Dock program handles spaces. OSX does not provide any other way to control spaces, this is the only way the functionality of TotalSpaces2 can be achieved.

In order to change some features inside Dock, we use a technique called _code injection_. This means we add some additional code to the Dock program whilst it is running to do what we need. This is safe - in fact we do not change any part of OSX on the disk. You only have to quit TotalSpaces2, and the Dock program will restart and everything will be as if TotalSpaces2 was never running.

However, in El Capitan the OSX developers added a feature that disallows this kind of modification _even if you have administrator access_. It also disallows other kinds of modifications (such as replacing parts of the system on disk).

In order for TotalSpaces2 to work, this new feature must be disabled. And __we don't recommend you do this unless you know what you are doing.__

You can find some further information [in our blog](http://blog.binaryage.com/el-capitan-update/).


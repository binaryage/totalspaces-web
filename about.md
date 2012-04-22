---
layout: tf-doc
title: About TotalFinder
subtitle: About TotalFinder
---

## TotalFinder is just a better Finder

<img src="/images/showcase/thumb-showcase-dual-mode.png" style="float:right; width:360px; margin-left: 20px; position: relative; top: -24px">

TotalFinder works like the original Finder but adds [tabs](/tabs), [dual panel](/dual-mode), [folders on top](/folders-on-top) and other [useful features](/tweaks).

My goal is to improve Finder in areas where it is lacking but keep the overall design which is good in my opinion.

TotalFinder works in OSX 10.6 (Snow Leopard). [Some features](/lion) are also available in OSX 10.7 (Lion).

## TotalFinder is a plugin for Finder

TotalFinder is an add-on which gets loaded into the Finder when you launch `TotalFinder.app`. It does not modify your Finder files on the disk.  It modifies the current instance of Finder running in memory. It works similar to [SIMBL plugins](http://www.culater.net/software/SIMBL/SIMBL.php) which you may know from [other programs](http://code.google.com/p/simbl/wiki/SIMBLPlugins). However, TotalFinder is a standalone application and is not dependent on SIMBL and should work reliably alongside other SIMBL applications.

## System updates from Apple

Due to the nature of how TotalFinder works, there is a small risk that TotalFinder might break with future Finder updates. I use TotalFinder myself on a daily basis so I am able to spot any potential problems very quickly. So far, Finder updates have introduced just minor cosmetic changes. I am also a member of Apple's Developer Program and have access to pre-release versions of system updates. I am committed to keeping TotalFinder compatible with Apple's updates. 

Please remember that if you ever experience any problem whatsoever, it is extremely easy to [uninstall TotalFinder](/uninstallation) and return to the Apple's basic Finder. And if you have any issues, please visit [our forums](http://support.binaryage.com) or you can [email me directly](mailto:antonin@binaryage.com).

## How to restart Finder

You can go to the Terminal.app and type: 
   
    killall Finder 
    
This will restart Finder with an unaltered state. That means TotalFinder will not load automatically next time. To open TotalFinder again, launch TotalFinder.app in /Applications.
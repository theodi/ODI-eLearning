cordova-plugin-xapkreader (Agamemnus/Flyingsoft Games edition)
================================================================

Table of Contents
------------------
[Purpose](#purpose) <br/>
[Donations?](#donations) <br/>
[Tips](#tips) <br/>
[Downloading and Initial Install](#downloading-and-initial-install) <br/>
[Completing Installation](#completing-installation) <br/>
[Usage](#usage) <br/>
[OBB Files](#obb-files) <br/>
[License](#license) <br/>

#Purpose

Google Play limits APK file sizes to 50 megabytes. Google implemented APK expansion files as the current solution. This plugin allows you to more easily implement APK expansion files in Cordova, automating most of the things.


#Donations

Yes, I put this near the top, so you, dear reader, wouldn't miss it. Perhaps you'd like to donate some money to my gittip account? https://www.gittip.com/agamemnus/ I also have a Paypal account: *agamemnus at flyingsoftgames dot com*.

Or... maybe try my first game on Google Play, and perhaps buy some gems:
<br/>
https://play.google.com/store/apps/details?id=com.flyingsoft.safari.jigsaw.free


#Tips

* You can test your expansion files by adding them to Android/obb/package.name/, as described here:  http://developer.android.com/google/play/expansion-files.html#Testing

* If you **manually rename** the main or patch file when testing, the .obb (zip) file <--> URI mappings will break because the plugin won't run and remap every time you open the app. If you reinstall, the device will rename the files.

* As expected, contents in the patch file overwrite contents in the main file. If you need to update a small some file without making the user download let's say a gigabyte of data, you'd want to update the patch file, and store the rest of the data in the main file.

* ~~Unfortunately, you can't see the version number of your expansion files when you upload them to Google Play. The version number Google Play assigns will be equal to the version of the APK itself at the time that you upload the main/patch expansion file version.~~ FORTUNATELY, in this plugin, it's not a problem, as you don't have to set the version number at all.

* If you upload a new main or patch APK expansion file to Google Play, the old main or patch file will be deleted when Google Play updates the user's device. Theoretically.

* ***When you upload an APK for the first time to Google Play, there will be no dialog to attach an expansion file. You will only see it on the second and subsequent times.***

* When you upload a new APK version, don't forget to check that your APK expansions are actually included. If you don't see them as included in the pop-up, they aren't -- sometimes Google Play will clear that information, so you have to select the APK expansion from the dropdown again. (that you already uploaded, assuming you uploaded one.)

* Uninstalling the plugin will not remove the provider tag in AndroidManifest.xml, or any "config_munge" values in android.json.


#Downloading and Initial Install

NOTICE: APK expansion files (e.g.: audio files), as of 10/10/2014, cannot be run in conjunction with the Cordova Media plugin. Please see [media_plugin_workaround.txt](https://github.com/agamemnus/cordova-plugin-xapkreader/blob/gh-pages/media_plugin_workaround.txt) for more details.

Normally:

```
cordova plugin add https://github.com/agamemnus/cordova-plugin-xapkreader.git#cordova-5.3.1
````

With plugman:

````
plugman install --platform android --project . --plugin https://github.com/agamemnus/cordova-plugin-xapkreader.git#cordova-5.3.1
````


#Completing Installation

 To complete installation:
 
 1) (INFO) Make sure your .obb zip file(s) is/are a STORE, and not compressed.
 
 2) (INFO) Make sure that ``/platforms/android/ant-build/`` and ``/platforms/android/ant-gen/`` are deleted so that the plugin generates the necessary files when you build your APK.
 
 3) (INFO) The android SDK ``play_apk_expansion`` and ``play_licensing`` libraries are needed for this plugin, but they are already supplied, included, and configured in this plugin in the plugin's android-sdk directory.
 
 4) You must specify an [expansion authority URI](http://developer.android.com/guide/topics/manifest/provider-element.html#auth) (to reference files [see Usage](#usage), and to avoid conflicting provider problems) and your application's Google Play public license key. This information is stored in ``/plugins/android.json``, which then modifies ``/platform/android/res/values/xapkreader.xml``.
 
 4b) (INFO) the expansion authority URI is a public resource accessible by any other Android program. You can specify what you want to name it. It **NOT** the project or package name! Make sure to make the expansion authority URI unique enough to avoid collisions. You may want to use a URI like "com.myprojectname.expansion" to make sure it is unique.

 4c) In android.json, look for and modify ``com.test.expansion`` and ``YOUR_GOOGLE_PLAY_LICENSE_KEY`` in this text:
 ````
  "res/values/xapkreader.xml": {
                "parents": {
                    "/*": [
                        {
                            "xml": "<string name=\"xapk_expansion_authority\">com.test.expansion</string>",
                            "count": 1
                        },
                        {
                            "xml": "<string name=\"xapk_google_play_public_key\">YOUR_GOOGLE_PLAY_LICENSE_KEY</string>",
                            "count": 1
                        }
 ````
 
 4d) If you deleted ``/platforms/android/ant-build`` and ``/platforms/android/ant-gen``, android.json will then append to the values in ``/platform/android/res/values/xapkreader.xml``:
````
 xapk_expansion_authority    : the expansion authority URI for the content provider. (eg: com.test.expansion)
 xapk_application_public_key : your application's Google Play public key.
 xapk_main_version           : your file's main version. OPTIONAL. Set to 0 to check the expansion directory for the first matched file starting with "main".
 xapk_patch_version          : your file's patch version. OPTIONAL. Set to 0 to check the expansion directory for the first matched file starting with "patch".
 xapk_main_file_size         : your main version's file size. OPTIONAL. Set to 0 to skip the check.
 xapk_patch_file_size        : your patch version's file size. OPTIONAL. Set to 0 to skip the check.
````

5) Importantly, for Cordova 5 and above, there is a  whitelist plugin by default. As of 9/22/2015, it will interfere with correct functioning of expansion files and some other types of files. (``cdvfile://`` and ``content://``) Currently, there are three ways of dealing with the issue:

a) Download and install my own whitelist with a tentative patch: https://github.com/agamemnus/cordova-plugin-whitelist.

b) Add a meta tag to your index.html file (and perhaps other html files?): ``<meta http-equiv="Content-Security-Policy" content="* * 'self' default-src 'unsafe-inline' 'unsafe-eval' http://* https://* data: cdvfile://* content://*;">``

c) Add the following to ``[root]/config.xml``:
````
    <allow-navigation href="*://*/*"/>
    <allow-intent href="*" />
    <access origin="*" />
    <access origin="content:///*" />
    <access origin="cdvfile:///*" />
````

#Usage

 Access your files via the content provider's expansion authority URI. E.G.:
 
 ``<img src="content://com.test.expansion/myfile.png">``

#OBB files

Make sure your OBB is a STORE and uses the latest zip methods. I use 7zip, which shows "version 20" in the file properties. Some zip programs may generate zips that, when uploaded, to the Google Play Developer Console, come back as corrupt OBBs.

#License (for any non-Android SDK parts...)

The MIT License (MIT)

Copyright (c) 2014-2015 Michael Romanovsky

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

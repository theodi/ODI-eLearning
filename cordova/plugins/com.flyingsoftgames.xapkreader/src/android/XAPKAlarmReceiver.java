package com.flyingsoftgames.xapkreader;

import com.google.android.vending.expansion.downloader.DownloaderClientMarshaller;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager.NameNotFoundException;

public class XAPKAlarmReceiver extends BroadcastReceiver {
 @Override public void onReceive (Context context, Intent intent) {
  try {
   DownloaderClientMarshaller.startDownloadServiceIfRequired(context, intent, XAPKDownloaderService.class);
  } catch (NameNotFoundException e) {
   e.printStackTrace();
  }
 }
}

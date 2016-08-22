package com.flyingsoftgames.xapkreader;

import android.content.Context;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.app.PendingIntent;
import android.app.ProgressDialog;
import android.content.Intent;
import android.content.pm.PackageManager.NameNotFoundException;
import android.os.Bundle;
import android.os.Messenger;
import android.content.pm.Signature;
import android.content.pm.PackageManager;
import android.content.pm.PackageInfo;

// <Workaround for Cordova/Crosswalk flickering status bar bug./>
import android.view.WindowManager;
// <Workaround for Cordova/Crosswalk flickering status bar bug./>
import android.util.Log;

import com.google.android.vending.expansion.downloader.DownloadProgressInfo;
import com.google.android.vending.expansion.downloader.DownloaderClientMarshaller;
import com.google.android.vending.expansion.downloader.DownloaderServiceMarshaller;
import com.google.android.vending.expansion.downloader.Helpers;
import com.google.android.vending.expansion.downloader.IDownloaderClient;
import com.google.android.vending.expansion.downloader.IDownloaderService;
import com.google.android.vending.expansion.downloader.IStub;

import java.io.File;
import java.io.ByteArrayInputStream;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.security.cert.CertificateFactory;

public class XAPKDownloaderActivity extends Activity implements IDownloaderClient {
 private IStub mDownloaderClientStub;
 private IDownloaderService mRemoteService;
 private ProgressDialog mProgressDialog;
 private static final String LOG_TAG = "XAPKDownloader";
 private Bundle xmlData;
 private int[] versionList = new int[2];
 private long[] fileSizeList = new long[2];
 
 // <Workaround for Cordova/Crosswalk flickering status bar bug./>
 public static Activity cordovaActivity = null;
 // <Workaround for Cordova/Crosswalk flickering status bar bug./>
 
 // The file may have been delivered by Google Play --- let's make sure it exists and it's the size we expect.
 static public boolean validateFile (Context ctx, String fileName, long fileSize, boolean checkFileSize) {
  File fileForNewFile = new File(Helpers.generateSaveFileName(ctx, fileName));
  if (!fileForNewFile.exists()) return false;
  if ((checkFileSize == true) && (fileForNewFile.length() != fileSize)) return false;
  return true;
 }
 
 // Determine whether we know if all the expansion files were delivered.
 boolean allExpansionFilesKnownAsDelivered (int[] versionList, long[] fileSizeList) {
  for (int i = 0; i < 2; i++) {
   // If the version number is 0, we don't know if all expansion files were delivered, so return value should .
   if (versionList[i] == 0) return false;
   String fileName = Helpers.getExpansionAPKFileName(this, (i == 0), versionList[i]);
   // If the file doesn't exist or has the wrong file size, consider the files to be undelivered.
   if (!validateFile(this, fileName, fileSizeList[i], (fileSizeList[i] != 0))) {
    Log.e (LOG_TAG, "ExpansionAPKFile doesn't exist or has a wrong size (" + fileName + ").");
    return false;
   }
  }
  return true;
 }
 
 @Override public void onCreate (Bundle savedInstanceState) {
  
  // <Workaround for Cordova/Crosswalk flickering status bar bug./>
  cordovaActivity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN);
  cordovaActivity.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
  // <Workaround for Cordova/Crosswalk flickering status bar bug./>
  
  super.onCreate (savedInstanceState);
  xmlData = getIntent().getExtras(); // savedInstanceState;
  versionList[0] = this.getIntent().getIntExtra ("xapk_main_version" , 0);
  versionList[1] = this.getIntent().getIntExtra ("xapk_patch_version" , 0);
  fileSizeList[0] = this.getIntent().getLongExtra("xapk_main_file_size" , 0L);
  fileSizeList[1] = this.getIntent().getLongExtra("xapk_patch_file_size", 0L);
  
  // Check if both expansion files are already available and downloaded before going any further.
  if (allExpansionFilesKnownAsDelivered(versionList, fileSizeList)) {Log.v (LOG_TAG, "Files are already present."); finish (); return;} 
  
  // Download the expansion file(s).
  try {
   Intent launchIntent = this.getIntent ();
   
   // Build an Intent to start this activity from the Notification.
   Intent notifierIntent = new Intent (XAPKDownloaderActivity.this, XAPKDownloaderActivity.this.getClass());
   notifierIntent.setFlags (Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
   notifierIntent.setAction (launchIntent.getAction());
   
   if (launchIntent.getCategories() != null) {
    for (String category : launchIntent.getCategories()) {
     notifierIntent.addCategory (category);
    }
   }
   
   PendingIntent pendingIntent = PendingIntent.getActivity (this, 0, notifierIntent, PendingIntent.FLAG_UPDATE_CURRENT);
   
   // We can't attempt downloading the files with a debug signature.
   if (signatureIsDebug(this)) {Log.v (LOG_TAG, "Using debug signature: no download is possible."); finish (); return;}
   
   // Start the download service, if required.
   Log.v (LOG_TAG, "Starting the download service.");
   int startResult = DownloaderClientMarshaller.startDownloadServiceIfRequired (this, pendingIntent, XAPKDownloaderService.class);
   
   if (startResult == DownloaderClientMarshaller.NO_DOWNLOAD_REQUIRED) {Log.v (LOG_TAG, "No download required."); finish (); return;}
   
   // If download has started, initialize activity to show progress.
   Log.v (LOG_TAG, "Initializing activity to show progress.");
   // Instantiate a member instance of IStub.
   mDownloaderClientStub = DownloaderClientMarshaller.CreateStub (this, XAPKDownloaderService.class);
   // Shows download progress.
   mProgressDialog = new ProgressDialog (XAPKDownloaderActivity.this);
   mProgressDialog.setProgressStyle (ProgressDialog.STYLE_HORIZONTAL);
   mProgressDialog.setMessage (xmlData.getString("xapk_text_downloading_assets", ""));
   mProgressDialog.setCancelable (false);
   mProgressDialog.show ();
   return;
   
  } catch (NameNotFoundException e) {
   Log.e (LOG_TAG, "Cannot find own package! MAYDAY!");
   e.printStackTrace ();
  } catch (Exception e) {
   Log.e (LOG_TAG, e.getMessage());
   e.printStackTrace ();
  }
  
  // Finish the activity.
  finish ();
 }
 
 // Connect the stub to our service on start.
 @Override protected void onStart () {
  if (null != mDownloaderClientStub) mDownloaderClientStub.connect (this);
  super.onStart ();
 }
 
 // Connect the stub from our service on resume.
 @Override protected void onResume () {
  if (null != mDownloaderClientStub) mDownloaderClientStub.connect (this);
  super.onResume ();
 }
 
 // Disconnect the stub from our service on stop.
 @Override protected void onStop () {
  if (null != mDownloaderClientStub) mDownloaderClientStub.disconnect (this);
  super.onStop ();
 }
 
 @Override public void onServiceConnected (Messenger m) {
  mRemoteService = DownloaderServiceMarshaller.CreateProxy (m);
  mRemoteService.onClientUpdated (mDownloaderClientStub.getMessenger());
 }
 
 @Override public void onDownloadProgress (DownloadProgressInfo progress) {
  long percents = progress.mOverallProgress * 100 / progress.mOverallTotal;
  Log.v (LOG_TAG, "DownloadProgress: " + Long.toString(percents) + "%");
  mProgressDialog.setProgress((int) percents);
 }

 @Override public void onDownloadStateChanged (int newState) {
  Log.v (LOG_TAG, "DownloadStateChanged: " + getString(Helpers.getDownloaderStringResourceIDFromState(newState)) + ".");
  
  if (
   (newState == STATE_IDLE) ||
   (newState == STATE_FETCHING_URL) ||
   (newState == STATE_CONNECTING) ||
   (newState == STATE_DOWNLOADING) ||
   (newState == STATE_PAUSED_NETWORK_UNAVAILABLE) ||
   (newState == STATE_PAUSED_BY_REQUEST) ||
   (newState == STATE_PAUSED_WIFI_DISABLED_NEED_CELLULAR_PERMISSION) ||
   (newState == STATE_PAUSED_NEED_CELLULAR_PERMISSION) ||
   (newState == STATE_PAUSED_ROAMING)
  ) {Log.v (LOG_TAG, "Downloading..."); return;}
  
  if (newState == STATE_COMPLETED) {
   mProgressDialog.setMessage (xmlData.getString("xapk_text_preparing_assets", ""));
   
   // Dismiss progress dialog.
   mProgressDialog.dismiss ();
   
   // If something wrong happened with the download, send a soft log error.
   allExpansionFilesKnownAsDelivered (versionList, fileSizeList);
   
   // Finish the activity.
   finish ();
   return;
  }
  
  // All other states.
  Builder alert = new AlertDialog.Builder (this);
  alert.setTitle (xmlData.getString("xapk_text_error", ""));
  alert.setMessage (xmlData.getString("xapk_text_download_failed", ""));
  alert.setNeutralButton (xmlData.getString("xapk_text_close", ""), null);
  alert.show ();
 }
 
 
 // Find out if we're in a debug or release build.
 // Debug builds can't get downloads from Google Play. We need to know that before starting DownloaderClientMarshaller.
 // Thanks to Omar Rehman: http://stackoverflow.com/a/11535593/1136569.
 private static final String DEBUG_DN = "CN=Android Debug";
 private boolean signatureIsDebug (Context ctx) {
  boolean isDebug = false;
  try {
   PackageInfo pinfo = ctx.getPackageManager().getPackageInfo(ctx.getPackageName(),PackageManager.GET_SIGNATURES);
   Signature signatures[] = pinfo.signatures;
    CertificateFactory cf = CertificateFactory.getInstance("X.509");
    for (int i = 0; i < signatures.length; i++) {
     ByteArrayInputStream stream = new ByteArrayInputStream(signatures[i].toByteArray());
     X509Certificate cert = (X509Certificate) cf.generateCertificate(stream);       
     isDebug = cert.getSubjectX500Principal().toString().contains(DEBUG_DN);
     if (isDebug) break;
    }
   }
   catch (NameNotFoundException e) {
    // The "isDebug" variable will remain false.
  }
  catch (CertificateException e) {
   // The "isDebug" variable will remain false.
  }
  return isDebug;
 }
}

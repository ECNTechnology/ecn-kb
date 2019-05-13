---
title: PBX Articles
date: 2019-04-11T05:32:12.066Z
---
Use the menu on the left hand side of the screen to select the user guide for your device.

## ECN Management Portal

Use the ECN Portal to setup your individual emails, set passwords, configure email forwarding & auto-replies.

### Logging into the PBX Management Portal

To log into the management portal navigate to <https://my.ecn.net.au> and enter your Username & Password.

<img style="width: auto; height: auto;" src="/images/screen-shot-2019-04-15-at-2.49.17-pm.png">

Note that you can click '**Register**' on the right hand side if you do not already have an account and you can recover your password with the '**Having trouble signing in**' button.

<img style="width: 1100px; height: auto;" src="/images/pbx-logging-in-1.png">

Once logged in, you'll see a selection of options based on your users permissions.

::: tip TIP!
Click '**_My Account_**' to modify your account information.
:::

Click '**_My Services_**' to view your services.

<img style="width: 1100px; height: auto;" src="/images/pbx-logging-in-2.png">

Expand the '**_Voice_**' list and select the PBX you wish to manage.

### Hosted PBX Dashboard

The Hosted PBX Dashboard can be used by management to easily view statistics and pull reports on the PBX.
<https://dashboard.ecn.net.au>

## Call Diversions

Call diversions can be enabled in a number of ways, the easiest of which is to enable '_**Call Forward All**_' on the inbound route.

<img style="width: auto; height: auto;" src="/images/pbx_homepage_1.png">

Select '**_Call Routing_**' from the PBX homepage.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-3.png">

Find the number for which you wish to enable call forwarding on and then click '_**view/edit**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callforward-1.png">

Scroll down until you see the '_**Enable Forward All**_' option.

Make sure that it is ticked and note down the '_**Allocated Dial Code**_'

**To Enable Call Forwarding:** Dial the allocated dial code, followed by the destination.

**To Disable Call Forwarding:** Dial the allocated dial code, and after the tone, hangup.

## Call Recordings

Call recordings can be enabled for inbound calls (per call route), outbound calls (per extensions), or both.

### Enabling Call Recordings

To turn on call recordings for a call route, you must first enable the call recording functionality on your PBX.

<img style="width: 1100px; height: auto;" src="/images/pbx-callrecordings-1.png">

Hover over '_**Addons**_' and select '_**Configure Addons**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-2.png">

Scroll down until you see '_**Enable Call Recording Plugin**_'.

Note that you will have to agree to the disclaimer before you can enable the plugin.

Scroll to the bottom of the page and click '_**Save**_' to save your changes.

You will now be taken back to the PBX homepage and can now turn on recordings for either inbound calls, outbound calls, or both as per your needs.

#### Enabling Call Recordings for inbound calls

To enable call recordings for an inbound route, select '_**Call Routing**_' from the PBX homepage.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-3.png">

Find the number for which you wish to enable call recordings and then click '_**view/edit**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-4.png">

Click the checkbox to '_**Enable Call Recording**_' for all **inbound calls**.

Scroll down to the bottome of the page and click '_**Save**_' to save your changes.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-6.png">

Click '_**Return to Service**_' to go back to the PBX homepage.

#### Enabling Call Recordings for outbound calls

To enable call recordings for outbound calls, select '_**Offices & Users**_' from the PBX homepage.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-7.png">

Select the extension you wish to modify.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-8.png">

Scroll to the bottom of the page to the "_**Security and Other Features**_' section and use the checkbox to enable call recording as shown.

Click '_**Save & Close**_

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

### Accessing Call Recordings

There are two ways to access your call recordings.

* FTP
* Hosted PBX Dashboard

#### Hosted PBX Dashboard

Log into the [Hosted PBX Dashboard ](https://dashboard.ecn.net.au) with the same username / password you use for the management portal. - If you do not have this, contact your administrator.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-9.png">

Once logged in to the dashboard, expand the '_**Reports**_' section on the left hand menu and select '_**Call Recordings**_'.

<img style="width: 1100px; height: auto;" src="/images/pbx-callrecordings-10.png">

Here you can filter your call recordings via date, and even search by number.

Click '_**Play**_' or '_**Download**_' to listen to your recordings.

#### FTP

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-11.png">

From the PBX homepage, hover over "_**Addons**_' and select '_**Call Recordings**_'.

On the following screen you will be able to set your login credentials for FTP access.

## Call Recording Encryption

To comply with data protection regulations and to provide enhanced security, myCloudPBX provides the option to encrypt call recordings with a user provided public key.

### Generating a Public/Private key pair.

To enable call recording encryption you will first need to generate a Public/Private key pair.

To create a Public/Private key-pair we recommend using OpenSSL

**Windows users**

Download OpenSSL for Windows (<https://wiki.openssl.org/index.php/Binaries>)

To run the commands below, go to the OpenSSL32 directory on your PC, and change to the /bin directory

::: tip 

You may need to open the command prompt with admin privileges (**run as administrator**) and you will need to restart your computer before generating a certificate.

:::

**Mac users**

OpenSSL comes shipped with Mac OS X version 10.6.2 onwards. 

You can use Terminal to run OpenSSL (Open _Applications_ > _Utilities_ > _Terminal_ or search for ‘_terminal_’ using the search bar in the top right hand corner of your screen) run the commands below.

::: tip 

You may need to run each OpenSSL command lines with elevated privileges.
– add _sudo_ before each command as needed.

:::

**Using OpenSSL**

The basics command line steps to generate a private and public key using OpenSSL are as follows:

```
openssl req -newkey rsa:2048 -nodes -keyout myprivatekey.pem -x509 -days 1825 -out mypublickey.pem
```

::: danger WARNING!
STORE YOUR PRIVATE KEY IN A SAFE, SECURE LOCATION. IF THE PRIVATE KEY IS LOST, ENCRYPTED FILES CAN NOT BE DECRYPTED
:::

### Enabling Call Recording Encryption.

To enable call recording encryption you will first need to log into the https://my.ecn.net.au Portal.

Once logged in, click on '_**My Services**_' and then expand the '_**Voice**_' section.

Select the PBX you wish to enable call recording encryption.

Hover over '_**Addons**_' and click '_**Configure Addons**_'.

Enable the call recording encryption and paste a copy of your _**PUBLIC KEY**_.

Click '_**Save**_'

Recorded calls will now have a “.enc” suffix to identify call recorded with a user provided public key. 

### Decrypting Call Recordings

To decrypt call recordings, use the following command. (Adjust for your filename..)

```
openssl smime -decrypt -binary -in RECORDING_NAME.mp3.enc -inform DER -out RECORDING_NAME.mp3 -inkey myprivatekey.pem
```

## Conference Calls

::: tip 
Coming Soon! 
:::

## Holidays

This guide will help you configure a Holiday Condition for your PBX.

<img style="width: auto; height: auto;" src="/images/pbx_homepage_1.png">

From the PBX Homepage select '_**Holidays**_'.

<img style="width: auto; height: auto;" src="/images/pbx-holidays-1.png">

If you want to edit an existing condition, you can click '**_View/Edit_**' on that, otherwise click '**_Add Condition_**'.

<img style="width: auto; height: auto;" src="/images/pbx-holidays-2.png">

Give the holiday condition a **Name**. (This is for your reference later).

Add in as many dates that your office will be **closed**.

::: warning
**Note:** The office will be closed for the **entire day and night** selected.
:::

At the bottom of the screen you can choose what will happen on any given holiday.

In this instance we're going onto an '_**Announcement**_' called Voicemail.

Click '_**Save**_' when you're finished making changes.

You will now need to assign the holiday condition to an inbound route.

Click '_**Return to Service**_' to go back to the PBX homepage and select '_**Call Routing**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-3.png">

Find the number for which you wish to enable the holiday and then click '_**view/edit**_'.

<img style="width: auto; height: auto;" src="/images/pbx-holidays-3.png">

Scroll down to the page and check '**_Enable Holiday_**'.

Choose from the drop down list the holiday condition you wish to enable.

Scroll down the page and click '**_Save_**' when you are finished.


<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

## Personal Voicemail

::: tip
Coming Soon!
:::

## Virtual FAX

### Allowed Senders

::: tip 
Coming Soon! 
:::

### Virtual FAX Call Routing

::: tip 
Coming Soon! 
:::
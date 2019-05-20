---
title: myCloudPBX Articles
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

## Blacklisting Numbers

In the event you wish to block a number from calling you, add it to the myCloudPBX Blacklist.

From the PBX homepage, click '_**Blacklist**_'. <img style="width: 50px; height: auto;" src="/images/pbx-blacklist-icon.png">

Click '**_Add Blacklist_**'.

Add the phone number, and click '**_Save_**'.

You will never receive a call from this number again.

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

There are two ways to access the myCloudPBX conference bridge.

* A dedicated inbound number.
* A virtual extension. (internal use speed dial).

::: tip
**Note:** Each inbound call on your conference line will count toward you PBX channel count. If you are unsure how many channels you have available, contact your administrator.
:::

**Creating an dedicated inbound conference number**

- - -

From the PBX homepage, select '_**Call Routing**_.

<img style="width: auto; height: auto;" src="/images/pbx-conference-1.png">

If you are modifying an existing an existing call route, click '_**view/edit**_' next to the number you wish to modify, otherwise click '_**Add Call Route**_'.

<img style="width: auto; height: auto;" src="/images/pbx-conference-2.png">

When creating a call route for a Conference line, you will need to fill in the following information:

**Timezone:** This will be used to ensure correct timestamps.

**Phone Number:** This is the inbound number you will be using.

**Call Alert Name:** This is mostly for your reference.

**Optional Step:**
<img style="width: auto; height: auto;" src="/images/pbx-conference-3.png">
If you wish to enable a passcode, check '**_Caller Passcode_**' and enter in a **Passcode**.

<img style="width: auto; height: auto;" src="/images/pbx-conference-4.png">

The last thing you'll need to configure is the '_**Activity**_':

* **Activity Type:** Conference (Basic)
* **Activity:** Choose a conference room number

Click '_**Save**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

**Creating a virtual extension**

- - -

Creating a virtual extension directly to the conference room will allow you to reduce the number of channels in use during your conference.

To begin, select '_**Virtual Extensions**_' <img style="width: 50px; height: auto;" src="/images/pbx-virtualextensions-icon.png"> from the PBX homepage, then click '**_Add Virtual Extension_**'.

<img style="width: auto; height: auto;" src="/images/pbx-conference-5.png">

Enter the following information:

* **Name:** This is for your reference.
* **Extension Number:** This is the 3 or 4 digit speed dial number.
* **Activity Type:** Conference Basic
* **Activity:** Select a conference room number.

Click '_**Save**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

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

Each extension has the option to have personal voicemail enabled. This voicemail will only plan if an extension is **_directly dialled_** (not part of a ring group).

### Accessing Voicemail

To access the Voicemail system, dial **777** from your phone, or press the **_Voicemail Button_** on your handset if it has one.

The voicemail system will then prompt you to enter your **_PIN_** followed by the **\#** key.

Once authenticated to the voicemail system, you will be able to follow the prompts to record your personal voicemail messages, and listen to voicemails left for you.

### Enable Voicemail on Extension

To configure voicemail on an extension, click on the <img style="width: 50px; height: auto;" src="/images/pbx-officeandusers-icon.png"> icon from the PBX homepage.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-7.png">

Select the extension you wish to modify.

<img style="width: auto; height: auto;" src="/images/pbx-voicemail-1.png">

Scroll down until you reach the '**_Voicemail_**' section.

Here you can set the following information:

* **Voicemail PIN:** This is the PIN you will enter to access the voicemail system.
* **Send Messages to my Mailbox:** When selected, the voicemail will be emailed to the address nominated.
* **Delete messages after emailing them:** When selected emails will no longer be retrievable from your handset and will be only accessed via email.

Scroll down the page and click '**_Save_**' when you are finished.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

## Virtual Extensions (Speed Dials)

To begin, select '_**Virtual Extensions**_' <img style="width: 50px; height: auto;" src="/images/pbx-virtualextensions-icon.png"> from the PBX homepage, then click '**_Add Virtual Extension_**'.

<img style="width: 50%; height: auto;" src="/images/pbx-conference-5.png">

Enter the following information:

* **Name:** This is for your reference.
* **Extension Number:** This is the 3 or 4 digit speed dial number.
* **Activity Type:** Here you can choose from a variety of options;
* * External phone number.
* * Conference Room.
* * Ring group.
* * Voicemail.
* **Activity:** Depending on your 'activity type' you will need to fill  this in as needed.

Click '_**Save**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

## Virtual FAX

There are three steps to configuring Virtual FAX.

* Enabling the Virtual FAX Plugin
* Enabling outbound Virtual senders.
* Configuring a number for inbound Virtual FAX.

### Enable Virtual FAX

- - -

Virtual FAX allows you to have a FAX number with all the convenience of email without needing a traditional FAX machine.

To configure virtual FAX you will first need to enable the virtual FAX plugin for your PBX.

<img style="width: 1100px; height: auto;" src="/images/pbx-callrecordings-1.png">

Hover over '_**Addons**_' and select '_**Configure Addons**_'.

<img style="width: 800px; height: auto;" src="/images/pbx-fax-1.png">

In order to enable Virtual FAX, you will need to read and agree to the disclaimer shown.

Once you have clicked '_**I Agree**_', you will be able to click '_**Enable Virtual FAX Plugin**_' at the top.

Scroll down to the bottom of the page and click '_**Save**_' when finished.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

### Allowed Senders

- - -

In order to _**send**_ virtual FAX, your email address must be added to the '_**allowed senders**_' list.

This allows you to specify who can send FAX on behalf of your company as well as the caller ID to be used for each user.

<img style="width: 200px; height: auto;" src="/images/pbx-fax-2.png">

From the PBX homepage, hover over '_**Addons**_' and select '_**Virtual FAX**_'.

<img style="width: auto; height: auto;" src="/images/pbx-fax-3.png">

On this page you can click '**_Add Virtual FAX Sender_**' and also see a list of existing authorised email addresses.

Click '**_Return to Service_**' when finished.

### Virtual FAX Inbound

To enable inbound virtual FAX you will need to click on '**_Call Routing_**' from the PBX Homepage.

<img style="width: auto; height: auto;" src="/images/pbx-fax-4.png">

If you are modifying an existing an existing call route, click '_**view/edit**_' next to the number you wish to modify, otherwise click '_**Add Call Route**_'.

<img style="width: auto; height: auto;" src="/images/pbx-fax-5.png">

When creating a call route for Virtual FAX, you will need to fill in the following information:

* **Timezone:** This will be used to ensure correct timestamps.
* **Phone Number:** This is the inbound number you will be using.
* **Call Alert Name:** This is mostly for your reference.

<img style="width: auto; height: auto;" src="/images/pbx-fax-6.png">

Scroll down the page until you get to the section titled '_**Enable Virtual FAX**_'.

Check the option, and enter the email address that will receive the email containing the FAX message.

Once done, scroll to the bottom, and click '_**Save**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.
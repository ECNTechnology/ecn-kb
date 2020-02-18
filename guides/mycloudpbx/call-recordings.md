---
title: Call Recordings
date: 2019-06-16T05:34:33.518Z
---
# Call Recordings
----

Call recordings can be enabled for inbound calls (per call route), outbound calls (per extensions), or both.

## Enabling Call Recordings

To turn on call recordings for a call route, you must first enable the call recording functionality on your PBX.

<img style="width: 1100px; height: auto;" src="/images/pbx-callrecordings-1.png">

Hover over '**_Addons_**' and select '**_Configure Addons_**'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-2.png">

Scroll down until you see '**_Enable Call Recording Plugin_**'.

Note that you will have to agree to the disclaimer before you can enable the plugin.

Scroll to the bottom of the page and click '**_Save_**' to save your changes.

You will now be taken back to the PBX homepage and can now turn on recordings for either inbound calls, outbound calls, or both as per your needs.

### Enabling Call Recordings for inbound calls

To enable call recordings for an inbound route, select '**_Call Routing_**' from the PBX homepage.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-3.png">

Find the number for which you wish to enable call recordings and then click '**_view/edit_**'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-4.png">

Click the checkbox to '**_Enable Call Recording_**' for all **inbound calls**.

Scroll down to the bottome of the page and click '**_Save_**' to save your changes.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '**_Apply_**' to your PBX.

Click '**_Apply PBX Changes_**'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-6.png">

Click '**_Return to Service_**' to go back to the PBX homepage.

### Enabling Call Recordings for outbound calls

To enable call recordings for outbound calls, select '**_Offices & Users_**' from the PBX homepage.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-7.png">

Select the extension you wish to modify.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-8.png">

Scroll to the bottom of the page to the "**_Security and Other Features_**' section and use the checkbox to enable call recording as shown.

Click '**_Save & Close_**

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '**_Apply_**' to your PBX.

Click '**_Apply PBX Changes_**'.

## Accessing Call Recordings

There are two ways to access your call recordings.

* FTP
* Hosted PBX Dashboard

### Hosted PBX Dashboard

Log into the [Hosted PBX Dashboard ](https://dashboard.ecn.net.au) with the same username / password you use for the management portal. - If you do not have this, contact your administrator.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-9.png">

Once logged in to the dashboard, expand the '**_Reports_**' section on the left hand menu and select '**_Call Recordings_**'.

<img style="width: 1100px; height: auto;" src="/images/pbx-callrecordings-10.png">

Here you can filter your call recordings via date, and even search by number.

Click '**_Play_**' or '**_Download_**' to listen to your recordings.

### FTP

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-11.png">

From the PBX homepage, hover over "**_Addons_**' and select '**_Call Recordings_**'.

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

Once logged in, click on '**_My Services_**' and then expand the '**_Voice_**' section.

Select the PBX you wish to enable call recording encryption.

Hover over '**_Addons_**' and click '**_Configure Addons_**'.

Enable the call recording encryption and paste a copy of your **_PUBLIC KEY_**.

Click '**_Save_**'

Recorded calls will now have a “.enc” suffix to identify call recorded with a user provided public key. 

### Decrypting Call Recordings

To decrypt call recordings, use the following command. (Adjust for your filename..)

```
openssl smime -decrypt -binary -in RECORDING_NAME.mp3.enc -inform DER -out RECORDING_NAME.mp3 -inkey myprivatekey.pem
```

---
title: Device Configuration
date: 2019-07-03T23:53:06.420Z
---
# Device Configuration

This page contains ad-hoc device configuration information.

# Grandstream HT802

# Logging into the HT802s management portal

#### Find the IP Address of the HT802

* Plug an analog phone into the FX1 Port
* Dial \*\** (triple star).
* Select option 02 at the prompt.

The devices IP Address will be now read back to you.

Enter the IP Address into your web browser.

![](/images/grandstream_ht802_loginscreen.png)

If this is a new HT802, Grandstream set the default credentials to:

* **Username:** admin
* **Password:** admin

Click '**_Login_**‘

# Security Settings

#### Reset Admin, User, and Viewer passwords.

Click on the '**_Basic_**‘ tab.

![](/images/gramdstrea_ht802_passwordreset1.png)

It is strongly recommended that you reset the above passwords immediately.

Click on the '**_Admin_**‘ tab.

![](/images/grandstream_ht802_passwordreset2.png)

It is strongly recommended that you reset the above password immediately.

::: Warning
Not resetting the above passwords can lead to toll fraud and very high bills.
:::

#### Disable HTTP access

Click on the '**_Basic_**' tab.

* Set '_**Web Access Mode**_‘ to HTTPS only.
* Set '_**Disable SSH**_' to 'Yes'.

# Network Settings

Click on the '_**Basic**_‘ tab.

You can configure your needed network settings on this page.

Click '_**Apply**_‘ when finished.

You will need to reboot the device for your changes to apply correctly.

# SIP Configuration

Click on the '_**FXS PORT1**_’ tab.

* Set ‘_**Account Active**_’ to 'Yes‘.
* Set '_**Primary SIP Server**_’ to the PBX domain. (EG: pinetree.mycloudpbx.com.au)
* Set '_**SIP Transport**_‘ to 'TCP’.
* Set '_**NAT Traversal**_‘ to 'Keep-Alive’.
* Set '_**SIP User ID**_‘ to the ’Extension Number’.
* Set '_**Authenticate ID**_‘ to the 'Extension Number’.
* Set '_**Authenticate Password**_‘ to the 'Extension Password’.
* Set '_**Register Expiration**_‘ to '1’. (minutes)
* Set '_**Reregister before Expiration**_‘ to '15’. (seconds)
* Set '_**Enable SIP OPTIONS Keep Alive**_‘ to 'YES’.
* Set the ’'_**Preferred Vocoder**_‘ order as follows.

![](/images/grandstream_codecs.png)

---
title: Device Configuration
date: 2019-07-03T23:53:06.420Z
---
# Device Configuration

## Grandstream HT802

### Logging into the HT802s management portal

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

Click '_**Login**_‘

### Security Settings

#### Reset Admin, User, and Viewer passwords.

Click on the '_**Basic**_‘ tab.

![](/images/gramdstrea_ht802_passwordreset1.png)

It is strongly recommended that you reset the above passwords immediately.

Click on the '_**Admin**_‘ tab.

![](/images/grandstream_ht802_passwordreset2.png)

It is strongly recommended that you reset the above password immediately.

::: Warning
Not resetting the above passwords can lead to toll fraud and very high bills.
:::

#### Disable HTTP access

Click on the '_**Basic**_' tab.

* Set '**_Web Access Mode_**‘ to HTTPS only.
* Set '**_Disable SSH_**' to 'Yes'.

### Network Settings

Click on the '**_Basic_**‘ tab.

You can configure your needed network settings on this page.

Click '**_Apply_**‘ when finished.

You will need to reboot the device for your changes to apply correctly.

### SIP Configuration

Click on the '**_FXS PORT1_**’ tab.

* Set ‘**_Account Active_**’ to 'Yes‘.
* Set '**_Primary SIP Server_**’ to the PBX domain. (EG: pinetree.mycloudpbx.com.au)
* Set '**_SIP Transport_**‘ to 'TCP’.
* Set '**_NAT Traversal_**‘ to 'Keep-Alive’.
* Set '**_SIP User ID_**‘ to the ’Extension Number’.
* Set '**_Authenticate ID_**‘ to the 'Extension Number’.
* Set '**_Authenticate Password_**‘ to the 'Extension Password’.
* Set '**_Register Expiration_**‘ to '1’. (minutes)
* Set '**_Reregister before Expiration_**‘ to '15’. (seconds)
* Set '**_Enable SIP OPTIONS Keep Alive_**‘ to 'YES’.
* Set the ’'**_Preferred Vocoder_**‘ order as follows.

![](/images/grandstream_codecs.png)

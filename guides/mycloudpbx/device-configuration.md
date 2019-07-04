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

Click '**_Login_**‘

### Security Settings

#### Reset Admin, User, and Viewer passwords.

Click on the '**_Basic_**‘ tab.

![](/images/gramdstrea_ht802_passwordreset1.png)

It is strongly recommended that you reset the above passwords immediately.

Click on the '**_Advanced Settings_**‘ tab.

![](/images/grandstream_ht802_passwordreset2.png)

It is strongly recommended that you reset the above password immediately.

::: Warning
Not resetting the above passwords can lead to toll fraud and very high bills.
:::


Click '_**Apply**_‘ when finished.

#### Disable HTTP access

Click on the '**_Basic_**' tab.

* Set the 'Web Access Mode‘ to HTTPS only.
* Set '_**Disable SSH**_' to 'Yes'.

Click '_**Apply**_‘ when finished.

### Network Settings

Click on the '_**Basic**_‘ tab.

You can configure your needed network settings on this page.

Click '_**Apply**_‘ when finished.

You will need to reboot the device for your changes to apply correctly.

### Advanced Settings

Click on the '**_Advanced Settings_**’ tab.

* Set '**_3CX Auto Provision_**' to 'NO‘

* Set '**_Disable Direct IP Call_**' to 'YES‘

* Set '**_NTP Server_**' to '0.au.pool.ntp.org‘

Click '_**Apply**_‘ when finished.


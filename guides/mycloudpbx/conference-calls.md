---
title: Conference Calls
date: 2019-06-16T05:36:46.888Z
---
# **Conference Calls**

- - -

There are two ways to access the myCloudPBX conference bridge.

* A dedicated inbound number.
* A virtual extension. (internal use speed dial).

::: tip
**Note:** Each inbound call on your conference line will count toward you PBX channel count. If you are unsure how many channels you have available, contact your administrator.
:::

## Creating an dedicated inbound conference number

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

## Creating a virtual extension

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

---
title: Day/Night Conditions
date: 2019-07-15T08:25:49.224Z
---


# Day / Night Conditions

A '**Day / Night**' condition allows you to leverage myCloudPBX to automate your office hours. Simply specify your office hours, set your '**Day**' and '**Night**' actions and you're done.

## Overview

From the myCloudPBX homepage, click '**Day/Night**'. <img style="width: 50px; height: auto;" src="/images/daynight_logo.png">

![](/images/daynigh_mainpage.png)

On this page you will see an overview of each configured Day/Night Condition:

* **Name:** This is for your reference.
* **Day:** This is the actions myCloudPBX will take during the hours you designate as 'Day'.
* **Night:** This is the actions myCloudPBX will take during the hours you designate as 'Night'.
* **Toggle:** Dial this code from your handset to manually toggle the condition from 'day' to 'night' and back.

## Configuration

Click '**Add Condition**'.

![](/images/daynight_1.png)

::: tip
**Note:** If you are modifying an existing condition you will see the status of the condition in RED at the top of the page. 

You can click the '**Change to**' button to toggle the condition from within the myCloudPBX screen.

You can also dial the '**Allocated Dial Code**' shown a bit lower from a handset to toggle manually.
:::

First you will need to assign the condition a **Name**. It is highly recommended that you name this something meaningul.

Take note of the **Allocated Dial Code** for later.

If you wish to allow myCloudPBX to manage your office hours (recommended) click '**Automatically detect Day/Night mode depending on my office hours**'.

Set your timezone.

Use the date / time picker to set your office hours as shown above.

![](/images/daynight_2.png)

Again you will see the above the star code that has been allocated.

![](/images/daynight_3.png)

Finally, you will be asked to configure the your '**day**' and your '**night**' activies.

For both Day and Night, configure the following:

* **Activity Type:** 

* **Next Activity Type:** Choose from the following options:

  - **External Phone Number:** Landline or mobile number, etc.

  - **Advanced Day/Night Control:** Useful to manage your office hours.

  - **Conference:** A fully functional conference bridge.

  - **Extension:** Send the call directly to a specific extension.

  - **Ring Group:** Send the call to a group of phones.

  - **Voicemail:** Send the call to voicemail.

  - **Hangup**

* **Next Activity:** Choose from the available options pre-configured.

When finished, Click '**Save**'.

This will save the changes, however you will also need to apply these changes to put them into affect immediately.

![](/images/pbx-apply-viewchanges.png)

Finally, you will need to click '**_Apply Changes_**'.

Once the changes have finished applying (The yellow bar will be gone) your changes are now live.


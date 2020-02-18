---
title: 'Campaign Type: Blaster'
date: 2019-06-20T00:13:13.519Z
---
# Campaign Type: Blaster

A '**Blaster Campaign**' is a fully automated outbound campaign with no user agents involved. 

This campaign will make outbound calls and play an automated message.



### Call Flow

<img style="width: auto; height: auto;" src="/images/blaster_amd_disabled.png">

**Call flow**

**1.** Outbound call is placed.

**2.** Call is answered.

**3.** Automated Message is played (Cloud Dial beep detection continues to run).

**4.** If at any time a beep is detected, Cloud Dial will begin to play the automated message from the start.

**5.** Once the message has been played to completion, Cloud Dial will hangup.





### Create a Blaster Campaign

<img style="width: auto; height: auto;" src="/images/clouddial-blaster-1.png">

From the '**New Campaign**' menu, select '**New Blaster Campaign**'.

<img style="width: auto; height: auto;" src="/images/clouddial-blaster-2.png">

Add in the following information:

* **Campaign Name:** This is for your reference. (Your Agents will see this when they join campaigns).

* **Country:** Choose your country.

* **Dialling Prefix:** This will be your caller ID for your outbound calls.

* **Redial Attempts:** This determines how many times Cloud Dial will dial the number before giving up.

* **Virtual Agents#:** This is the number of outbound calls you want to make simultaneously. 

* **Select Contacts:** Use the '**Select**' button to upload your Cloud Dial campaign data.

Click '**Next**' to move onto the next step.

<img style="width: auto; height: auto;" src="/images/clouddial-blaster-3.png">

Use the '**Field Mapping**' page to map your custom fields in your uploaded contacts into Cloud Dial.

Click '**Next**' to move onto the next step.

<img style="width: auto; height: auto;" src="/images/clouddial-blaster-4.png">

Here you will upload your sound file that will be played on all calls.

::: warning
This file **must** be _**.wav**_ format.
:::

Click '**Select**' to locate and upload your file, and click '**Save**' when complete.

Click '**Next**' to move onto the next step.

<img style="width: auto; height: auto;" src="/images/clouddial-blaster-5.png">

Enable AMD at your discretion and click '**Finish**' when you are done.

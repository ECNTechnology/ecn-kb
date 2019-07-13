---
title: Offices & Users
date: 2019-07-13T01:11:25.989Z
---
# Office & Users

An office is a logical grouping of extensions. This group has it's own **areacode**, **timezone**, **outbound** **caller ID**, and [**music on hold**](https://kb.ecn.net.au/guides/mycloudpbx/music-on-hold.html).

## Create or Modify an Office

From the myCloudPBX homepage, click '**Offices & Users**'. <img style="width: 50px; height: auto;" src="/images/offices_and_users1.png"> 

<img style="width: auto; height: auto;" src="/images/offices_and_users2.png"> 

On this screen you can quickly see the relevant information about each '**office**':

* **Default Phone:** This is the default outbound caller ID that each extension part of this office will use. (Unless otherwise specified).
* **Hold Music:** This is the hold music that will be played in the even you place someone on hold. (**Note:** This is specific to **outbound** calls only.) [Click here for more information about Music on Hold](https://kb.ecn.net.au/guides/mycloudpbx/music-on-hold.html).
* **Default Area Code:** This is the default area code that will be used when an extension part of this office does not specify one when making a call.
* **Timezone:** This affects the clock shown on the handsets.

You can click the '**Add Office**' button to create another Office or modify the Office by clicking the <img style="width: 25px; height: auto;" src="/images/offices_and_users_cog.png"> button.

<img style="width: auto; height: auto;" src="/images/offices_and_users3.png">

## Create or Modify an Extension

![](/images/offices_and_users4.png)

Select the office you wish to view / edit by clicking on the blue bar with the name of the office.

Here you can see each extension that has been added, along with their extension number.

* To **Add** a new extension, click the green <img style="width: 25px; height: auto;" src="/images/offices_and_users_add.png"> button.
* To **Delete** an extesion, click the <img style="width: 25px; height: auto;" src="/images/offices_and_users_del.png"> button.
* To **Modify** an extension, click on the '**Extension Name**'.

When configuring an extension there are a lot of options available, however the minimum settings needed are contained with the '**General**' section.

### General Settings

![](/images/edit_extension_general.png)

Assign the extension a 3 **OR** 4 digit extension number and a '**Name**'.

You can use the password provied, or press <img style="width: 25px; height: auto;" src="/images/exit_extension_refresh.png"> button.

By default the '**Extension Ring Time**' is set to 40, however you can adjust this in increments of 5 seconds to a total of 60. 

::: tip
**Note:** The '**Extension Ring Time**' configured here is only relevant when the extension is dialled **directly** and not part of a group of other phones.
:::

Select the '**Office**' to assign this user to.

Next you can either use the office default for your '**Outbound Phone Number**' or you can specify a different number.

Specify the '**Pickup Group**' you wish to place the extension in. (Place all your users in the same pickup group so that you can retrieve a call ringing on another user's phone)

Make sure that you leave '**This extension is behind a firewall**' remains enabled.

### Autoprovision

Allows myCloudPBX to automatically generates the handset configuration for your phones.

::: tip
More Information Coming Soon!
:::

### Enable Direct Dialling

Enable '**Direct Dialling**' to configure a direct line for this extension.

### Personal Voicemail

![](/images/edit_extension_voicemail.png)

Here you can set your '**Voicemail PIN**', or press <img style="width: 25px; height: auto;" src="/images/exit_extension_refresh.png"> button to reset.

You can also click '**Send messages to my mailbox**' and myCloudPBX will email you a copy of the voicemail recording (in .wav format).

Optionally you can click '**Delete messages after emailing them**'. This will disable the red voicemail indicator light on your handset.

### Callback Feature

This feature allows you to receive a callback from an internal extension when the user you are calling is busy.

If you are already on a call and someone attempts to call you, myCloudPBX will greet them with the following options.

* Leave a voicemail.
* Register a callback.

Should they choose to register a callback request, the next time both of your phones are available, they will both ring and you will be talking to each other.

::: tip
**Note:** This feature is only available for internal calls.
:::

### Smart Calling

![](/images/edit_extension_smartcalling.png)

Smart calling allows you to automatically forward calls to your mobile & your extension simultaneously.

You can specify the timeout in increments of 5 seconds all the way to 60 seconds.

You can also specify the '**Smart Call Type**':

* **Sequential:** Will ring your handset, before ringing your mobile. (Both phones will not ring at the same time).

* **Parallel:** Will ring both your handset & your mobile at the same time.

* **Parallel Delayed:** Will ring your handset first, and then continue to ring on the handset and your mobile phone.


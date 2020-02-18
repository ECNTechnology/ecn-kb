---
title: Business SIP
date: 2019-04-15T04:56:03.485Z
---
## Logging into the management portal

To log into the [**Management Portal**](https://my.ecn.net.au) head to https://my.ecn.net.au and enter your Username & Password.

Note that you can click '**Register**' on the right hand side if you do not already have an account and you can recover your password with the '**Having trouble signing in**' button.

![login screen](/images/screen-shot-2019-04-15-at-2.49.17-pm.png)

Once logged in, click '**My Services**' and select your Business SIP service from under the '**Voice**' menu.

## Direct or Trunk Mode?

There are a few fundamental differences between **Direct Mode** and **Trunk Mode**.

**Direct Mode** is designed for a **_single endpoint_** such as an Analog Telephone Adapter (_ATA_) or an IP Phone.

**Trunk Mode** is designed to be used with a PBX system, either hardware based such as an NEC SL1100 or a software based solution, such as FusionPBX.
With trunk mode, you will handle options such as voicemail and other intelligent routing on your PBX system.

`If you are unsure which option to select, call 1300 790 111 to talk to one of our friendly staff.`

## Initial Setup

When you log into the [**ECN Portal**](https://my.ecn.net.au) you will need to configure your _Region_ and _Operating Mode_.
::: warning
Image needs to go here ones Business SIP has been updated!.
:::

### SIP Server

Choose the SIP Server that has closest represents your location.

::: tip Pro Tip:
Ping each server to find the one with the best response time!
:::

### Operating Mode

Choose **Direct Mode** for a single endpoint solution, or **Trunk Mode** if you have your own PBX infrastructure.

## Configuring Direct Mode

Direct mode has a lot of features built in for your convenience and you can see a lot of information from the direct mode configuration page such as your '**outbound caller ID**', '**divert options**' and '**call strategy**', etc..

![direct mode screen](/images/business_sip_direct_mode1.png)

### SIP Devices

Here you will be able to **_Add_**, **_Edit_** and **_Delete_** SIP devices from your configuration.

These are your individual endpoints. (ATA's or IP Phones).

![sip devices configuration section](/images/business_sip_direct_sip_devices.png)

From this screen you can see the current _**Auth ID**_ (_This is the "username" for the service_)

You cannot see the _**Password**_ for security reasons, however you can click the '_**Reset**_' button to reset a forgotten password.

- - -

Select '_**Add New Device**_' to add a new endpoint or click '**Edit**' to modify existing.

![adding new endpoint](/images/business_sip_direct_new_device.png)

On this screen you will be prompted to configure the following:

**SIP Device Settings**

* **Device Name:** This is for your reference.
* **Authentication ID:** This is the '**_username_**' for the service.
* **Password:** This is the **ONLY** time your password will be visible to you, please pay attention here. (This will not be visible if you edit these settings later).
* **Default Outbound Caller ID:** This is the outbound caller ID that will be used unless otherwise specified by your endpoint.

**Enabled Call Types**

* Here you will choose the types of calls that are allowed. Local, National, Mobile, etc..

When you have finished making changes, click '**_Save_**'.

### Phone Number Configuration

Here you will be able to configure the call routing for individual numbers. You can **_add_**, **_edit_**, and **_remove_** routing as well as see a quick overview of existing configuration.

![phone number configuration screen](/images/business_sip_direct_phone_numbers.png)

For more information on an existing number, click '**_Edit_**' or click '**Add New Number**' to create a new one.

![number configuration page](/images/business_sip_direct_number_configuration2.png)

On this screen you will be prompted to configure the following:

**SIP Device Settings**

* **Phone Number:** This is the **_inbound number_** to be configured.
* **SIP Device:** This is the **_endpoint_** to receive the inbound call.

**Divert When**

* Never.
* No Answer - Calls will be diverted if not answered after 60 seconds.
* All Calls - All calls will be diverted.
* All Devices Offline - If your '_**endpoint**_' is offline the call will be diverted.

**Divert Option**

* Send to voicemail.
* Send to external number.

::: tip Pro Tip:
When using 'all devices offline', add in your IT departments email address and they will automatically be notified in the event there is an issue.
:::

### **Voicemail**

Voicemail messages can be retrieved by dialling **777** from your handset, or if enabled voicemail will be emailed to an address of your choice.\*\*

From the ['Phone Number Configuration'](#phone-number-configuration) screen, select '_**Send To Voicemail**_' from the divert options to enable voicemail.

Set your '_**Voicemail PIN**_' - You will need this PIN when you need to access voicemail.

You can also configure your voicemail to go to your email address by ticking the '_**Send messages to my mailbox**_' option and adding your email address in the field below.

Click '_**Save**_' to apply your changes.

## Configuring Trunk Mode

Trunk mode has a lot of features built in for your convenience and you can see a lot of information from the trunk mode configuration page such as your default 'outbound caller ID' (used in the event you do not send a valid one), as well as your divert preferences and phone number configuration.

![trunk mode configuration page](/images/business_sip__trunk_mode.png)

### SIP Devices

Here you will be able to **_Add_**, **_Edit_** and **_Delete_** SIP devices from your configuration.

These are your Endpoints. (Hardware or Software based PBX).

![trunk mode settings](/images/business_sip_trunk_mode1.png)

From this screen you can see the current _**Auth ID**_ (_This is the "username" for the service_)

The _**Password**_ is hidden for security reasons, however you can click the '_**Reset**_' button to reset a forgotten password.

You can also see the '_**Outbound Caller ID**_' that will be used in the event that you do not set a caller ID in your outbound calls.

- - -

Select '_**Add New Device**_' to add a new endpoint, or click '**Edit**' to modify existing.

![add new trunk mode device](/images/business_sip_trunk_new_device1.png)

On this screen you will be prompted to configure the following:

**SIP Device Settings**

* **Device Name:** This is for your reference.
* **Authentication ID:** This is the '**_username_**' for the service.
* **Password:** This is the **ONLY** time your password will be visible to you, please pay attention here. (This will not be visible if you edit these settings later).
* **Default Outbound Caller ID:** This is the outbound caller ID that will be used in the event your PBX sends an invalid caller ID.

**Enabled Call Types**

* Here you will choose the types of calls that are allowed. Local, National, Mobile, etc..

When you have finished making changes, click '**_Save_**'.

### Phone Number Configuration

Here you will be able to configure the call routing for individual numbers. You can add, edit, and remove routing as well as see a quick overview of existing configuration.

![trunk mode number configuration](/images/business_sip_trunk_number_configuration1.png)

For more information on an existing number, click '**Edit**' or click **'Add New Number**' to create a new one.

![trunk mode number configuration](/images/business_sip_trunk_number_configuration2.png)

On this screen you will be prompted to configure the following:

**SIP Device Settings** 

* **Phone Number:** This is the inbound number to be configured.
* **SIP Device:** This is the endpoint to receive the inbound call.

**Divert When**

* Never - No diversion enabled.
* No Answer - Calls will be diverted to the number specified if the call is not answered after 60 seconds.
* All Calls - All calls will be diverted to the number specified.
* All Devices Offline - If your 'endpoint' is offline the call will be diverted.

::: tip Pro Tip:
When using 'all devices offline', add in your IT departments email address and they will automatically be notified in the event there is an issue.
:::

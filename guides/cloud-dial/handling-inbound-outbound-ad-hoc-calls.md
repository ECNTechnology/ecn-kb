---
title: Handling Inbound & Outbound Ad-hoc Calls
date: 2019-08-07T02:27:52.736Z
---
# Ad-hoc Outbound Dialling

## Description

The Ad-hoc Outbound Dialling feature allows you to make a call that is not on any campaign list.

## Outbound Manual Dialling

When an Agent logs into Cloud Dial they will be greeted with the following screen.

Click '**Manual Dial**' to call a number that's not part of an Active Campaign.

<img style="width: auto; height: auto;" src="/images/manual_dialling_1.png">
 
On this page there is two ways to dial:

* You can use the search functionality to search all of your current campaigns for a number to dial.
* You can also simply enter the number directly and click '**Call**'.

::: tip
You can select any number assigned to Cloud Dial to be used as the '**From Number**'.
:::

Click '**Call**' to dial the number.

<img style="width: auto; height: auto;" src="/images/manual_dialling_2.png">

While on the call you will see the familiar call screen and will be able to perform the following actions:

* Stop / Start Call Recordings.
* Mask Recordings (This mutes the recording so that you can take credit card payments off the record for compliance).

Click '**End Call**' when finished.

<img style="width: auto; height: auto;" src="/images/manual_dialling_3.png">

## Inbound calls not part of an active campaign

Inbound calls that are not part of an active campaign will now ring through to Agents based on the skills based routing.

For information on how to configure skills based routing, [click here](https://kb.ecn.net.au/guides/cloud-dial/skills-based-call-routing.html).

Each inbound call will be routed as follows.

* If the destination number is not part of a running campaign the call will be treated as an ad-hoc call and any free agents will see a popup with the inbound call. Skills based routing will also apply if configured.

* If the destination number is part of a running campaign, it will be routed to agents that are part of that campaign. Skills based routing will also apply if configured.

* If the destination number is part of multiple running campaigns, it will be routed to agents that are part of either campaign and they will have the choice of which campaign to assign the inbound call to when answering the call.

**Inbound Call Popup:**

![](/images/manual_dialling_4.png)

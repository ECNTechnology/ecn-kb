---
title: Skills Based Call Routing
date: 2019-06-20T00:26:03.261Z
---
# Skills Based Call Routing

Skills Based Call Routing, allows Cloud Dial to intelligently route calls to Agents based on their skillset.

## Enable Skills Based Call Routing Globally

To enable this you must first enable '**Tags for Campaigns & Users**' so that we can assign skills as needed.

<img style="width: auto; height: auto;" src="/images/clouddial-customagent-1.png">

From the '**Settings**' menu on the left hand side, click '**Preferences**'.

This will open the Preferences window.

<img style="width: auto; height: auto;" src="/images/clouddial-skills-1.png">

Make sure that '**Enable tags for campaigns & users**' is set to '**Yes**'.

Now we can add tags to our phone numbers. 

## Assign Tags to Phone Numbers

Click on '**Phone Numbers**' on the horizontal menu at the top of the screen.

This page shows you all of the numbers allocated to Cloud Dial and you can enable / disable them from here.

::: tip
**Pro Tip:** If your number does not show on this list, click the '**Update**' button in the top right hand corner.
:::

Once you have found the number you wish to assign skill tags, click '**Assign Tags**' on the right hand side.

<img style="width: auto; height: auto;" src="/images/clouddial-skills-2.png">

Add as many tags as you need separated by semi-colons.

Click '**Save**' when complete.

Now we can add Tags to our Agents.

## Assign Tags to Agents

<img style="width: auto; height: auto;" src="/images/clouddial-customagent-1.png">

From the '**Settings**' menu on the left hand side, click '**Manage Users**'.

Click '**Edit**' next to the Agent you wish to modify.

<img style="width: auto; height: auto;" src="/images/clouddial-skills-3.png">

Add as many tags as you need separated by semi-colons.

Click '**Save**' when complete.

Now you can configure your inbound campaign to use skills based routing.

## Adding Tags to New Campaign

Create an '**Advanced Campaign**' as normal.

<img style="width: auto; height: auto;" src="/images/clouddial-skills-4.png">

You will now be able to assign your tags to your campaigns on the '**Direction**' tab.

When an inbound call is placed, the call will be routed only to agents who have the skills to take the call.

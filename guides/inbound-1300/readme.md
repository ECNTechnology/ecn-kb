---
title: Inbound 1300 Guides
date: 2019-04-16T09:15:16.967Z
---
An Inbound 1300 service allows customers to call your business from anywhere in Australia by dialling a single, national 1300 or 1800 number.

Your 1300 number can be configured with a number of options. 

* **Divert Function:** Divert to landline / mobile.
* **State Based Routing:** Calls can be routed differently based on the location of the caller.
* **Time of Day Based Routing:** Calls can be routed differently based on the time of the call.

This guide will show you how to configure your service.

## Logging into the Management Portal

To log into the Management Portal head to <https://my.ecn.net.au> and enter your Username & Password.

Note that you can click '**Register**' on the right hand side if you do not already have an account and you can recover your password with the 'Having trouble signing in' button.

![](/images/screen-shot-2019-04-15-at-2.49.17-pm.png)

## Initial Configuration

Once logged in, click '**My Services**' and select your Inbound 1300 service from under the '**Voice**' menu.

The first time you edit your service you will be greeted with the following screens.

<img style="width: auto; height: auto;" src="/images/inbound1300-2.png">

The '**Friendly Name**' is for your reference, enter your preferred name and click '**Save**'.

The '**Service Name**' is the ECN name for the service, you will need this if you ever need to log a fault.

## Default Answer Point

<img style="width: auto; height: auto;" src="/images/inbound1300-3.png">

::: tip
An '**Answer Point**' is the Full National Number that will ring when your 1300 number is dialled.
:::

Click '**Configure**' to add a '_default answer point_'. This will be used in the event there is not a specific answer point specified below.

<img style="width: auto; height: auto;" src="/images/inbound1300-6.png">

On this screen you can specify your '**Default Answer Point**'.

You can also enable '**Time of day call routing**'.

When enabled, calls will be sent to a different number outside of your specified hours.

Click '**Save**' when you are finished.

## State Answer Points

<img style="width: auto; height: auto;" src="/images/inbound1300-4.png">

Here you can edit the answer point for individual regions.

Select a region to get started.

<img style="width: auto; height: auto;" src="/images/inbound1300-7.png">

On this screen you can specify the '**Answer Point**' for this region.

You can also enable '**Time of day call routing**' for this specific region.

When enabled, calls will be sent to a different number outside of your specified hours.

Click '**Save**' when you are finished.

## Area Answer Points

<img style="width: auto; height: auto;" src="/images/inbound1300-5.png">

Here you can add custom answer points based on the source location down to specific regions. 

For example, you can set **Queensland** in the '**_state based routing_**', and in area based routing you can drill down to calls from '**Brisbane**' from both mobiles or landline source numbers.

Click '**Add**' to add an '**area answer point**'.

<img style="width: auto; height: auto;" src="/images/inbound1300-8.png">

Add the following information:

* **Source:** Choose from landline or mobile.
* **Region:** Choose from the list of regions.
* **Timezone:** Select the timezone of the answer point. (This is needed for time of day based routing).
* **Answer Point:** This is the Full National Number that will ring.

Click '**Save**' when complete.

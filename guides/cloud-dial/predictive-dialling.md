---
title: Predictive Dialling
date: 2019-07-12T03:09:06.942Z
---
# Predictive Dialling

Predictive dialling automatically adjusts the '**Power Factor**' based on your preferences.

## Configuration

<img style="width: auto; height: auto;" src="/images/clouddial-customagent-1.png">

From the '**Settings**' menu on the left hand side, click '**Preferences**'.

From the '**Preferences**' menu choose '**Dialler Settings**'

<img style="width: auto; height: auto;" src="/images/predictivedialling1.png">

Enter the following settings:

* **Maximum Wait Time (sec):** This is the maximum time you want for an agent to wait for a call.
* **Calls Drop Percentage (%):** This is the maximum percentage of '**NoAgentDetected**' calls you are prepared to accept.
* **Tuning Strategy:** This affects how frequently the power factor will be adjusted. 
  Choose from;
  * Generous
  * Moderate
  * Agressive

## Enable on Campaign

![](/images/predictivedialling2.png)

When you create a campaign as per normal, instead of setting a specific Power Factor, tick '**Enable Predictive Dialling**'.

Start the campaign as per normal.

![](/images/predictivedialling3.png)

Note that the Power Factor now says '**Predictive**'.

## Troubleshooting

If you need to disable predictive dialling mid campaign, you can do this from the '**Campaign Management**' screen.

Click '**Actions**' on the campaign, and click '**Edit**'.

Untick '**Enable Predictive Dialling**' and press '**Next**' until you get to the end.


---
title: Predictive Dialling
date: 2019-07-12T03:09:06.942Z
---
# Predictive Dialing

## Introduction


Until now Cloud Dial call center administrators needed to set a power factor for each campaign.

The Power Factor was an important setting that controlled how many calls Cloud Dial makes based on the number of waiting (idle) agents.  For example, a Power Factor of 2.0x means that if there were 10 idle agents, Cloud Dial would attempt to dial 20 calls.

The challenge for Call Center administrators has always been determining the correct power factor for each campaign.  A campaign with significant bad phone number data may mean a very high power factor is needed to keep Agents busy on calls, but a campaign run with high-quality call data would likely mean the opposite, a low Power Factor closer to 1:1 (calls to agents).

This is why we have developed Predictive Dialing.

Predictive Dialing replaces the need to set a specific Power Factor on a campaign, rather by enabling Predictive Dialing Cloud Dial will automatically determine and adjust the required number of calls made to meet the needs of the call center, keeping agents busy and minimizing No Agent situations, when more calls were made then available agents.

The Cloud Dial Predictive Dialing uses Machine Learning to continually review and make adjustments to the calls made and tunes the Dialler to meet your defined objective for Agent Wait Times and Call Drops due to No Agents available.

We have developed three modes of Predictive Dialling, Generous, Moderate and Greedy.   These modes allow the Call Center administrator to set the "mood" of the machine learning system - a Greedy setting means that Cloud Dial will more aggressively attempt to tune the calls being made, whilst a Generous mode will allow more time to collect information on effective the dialler is performing.

We recommend greedy only where data quality is consistent (such as customer loyalty campaigns) and moderate to generous when data is unpredictable (such as debt collection).


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


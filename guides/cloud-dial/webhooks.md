---
title: Webhooks
date: 2019-07-12T04:48:53.407Z
---
# Webhooks

## Call Result Webhook

The Call Result Webhook sends the results of each call to a URL of your choosing.

::: tip
**Note:** You will need to have full administrative permissions to enable this feature.
:::

### **Configuration**

![](/images/clouddial-customagent-1.png)

From the '**Settings**' menu, click '**Preferences**'.

From the preferences menu, click '**WebHook**'.

<img style="width: auto; height: auto;" src="/images/callresultwebhook1.png">


Click '**Enable Web Hook**' to enable the feature and enter the following information:

* **URL:** The URL of your server. (CloudDial will send the results to this address).
* **User Name:** The Username we will send with the webhook POST.
* **Password:** The Password we will send with the webhook POST.

::: tip
CloudDial will send the username & password in the POST to your server.
:::

Click '**Save**' when finished.

Now that the webhook has been enabled, you can enable the feature on your campaigns.

### Creating a Webhook-Enabled Campaign

![](/images/callresultwebhook2.png)

When you create the campaign as per normal, you will now see the option to '**Enable WebHook**' on the 'Additional Settings' tab.

Once the CloudDial campaign is running you will see the following icon next to the campaign. <img style="width: auto; height: auto;" src="/images/callresultwebhookicon.png">

<img style="width: 1100px; height: auto;" src="/images/callresultwebhookrunning.png">

On the **'Campaign Management**' screen you will now be able to see the status of your new campaign.



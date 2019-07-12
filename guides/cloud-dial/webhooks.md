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

 **Configuration** 

![](/images/clouddial-customagent-1.png)

From the '**Settings**' menu, click '**Preferences**'.

From the preferences menu, click '**WebHook**'.

![](/images/callresultwebhook1.png)

Click '**Enable Web Hook**' to enable the feature and enter the following information:

* **URL:** The URL of your server. (CloudDial will send the results to this address).
* **User Name:** The Username we will send with the webhook POST.
* **Password:** The Password we will send with the webhook POST.
::: tip
CloudDial will combine the username & password and encode into base64 before sending that output in the POST to your server.
:::

Now that the webhook has been enabled, you can enable the feature on your campaigns.



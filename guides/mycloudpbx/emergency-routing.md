---
title: Emergency Routing
date: 2019-06-18T02:58:59.798Z
---
# Emergency Routing and Failover
----

myCloudPBX Emergency Routing provides automatic routing of a call to an alternate activity in the event that all selected extensions are not online. This feature can provide automatic failover in the event of an on-site issue (such as a power outage or Internet issue).

Note that you may choose between 1 and 3 extensions, however all selected extensions must be offline for the emergency activity to be used.

This alternate activity can be anything you like, such as a custom voicemail message or even a mobile number.

# Configure Emergency Routing
----

This guide assumes you are already logged into the myCloudPBX Management Portal and have selected your PBX.

The first thing you are going to do is select '_**Call Routing**_' from the PBX homepage.

![](/images/pbx-callrecordings-3.png)

Click '**_View/Edit_**' on the number you wish to modify.

![](/images/pbx-failover-1.png)

Scroll down until you reach the '_**Emergency Routing**_' section and tick the option on.

Here you will need to select the extensions you wish to 'monitor'. (You should select the main phones that ring for this number).

Next, select the '_**Emergency Activity Type**_'.

This will most likely be either 'Announcement' (for voicemail) or 'External Phone Number'.

Finally, select the '_**Emergency Activity**_'.

When you are finished, scoll down to the bottom of the page and click '_**Save**_'.


![](/images/pbx-apply-viewchanges.png)

Finally, you will need to click '**_Apply Changes_**'.

Once the changes have finished applying (The yellow bar will be gone), you can dial your number and test the failover works as expected.

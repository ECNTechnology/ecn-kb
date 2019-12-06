---
title: Dashboard
date: 2019-12-05T06:25:00.676Z
---
# myCloudPBX Dashboard

## What's on your myCloudPBX Dashboard?

The Dashboard displays critical information about your myCloudPBX system, providing granular reporting data for a real-time or historical view of the activities within your phone system. 

Drill down into user performance and call reports for valuable insight into resolution times, response rates and optimal service times.

## Feedback

**Are there any reports or charts you would like to see?**

Let us know!

Simply click the feedback bubble and send us your valued feedback. This will assist us in making improvements to the Dashboard and reporting.

![](/images/feedback.gif)

## Dashboard Widgets

The Dashboard drills down into user performance and call reports, giving valuable insight into resolution times, response rates and optimal service times.

![](/images/dashboard_widgets.png)

### Create a new Dashboard

From the left hand menu, click the <img style="width: 25px; height: auto;" src="/images/dashboard_homeicon.png"> '**Home**' button.

![](/images/dashboard_actionaddbutton.png)

On the top right hand corner click the '**Action**' button, then click '**Add**'.

![](/images/dashboard_addnew.png)

Name your new Dashboard and click the <img style="width: 50px; height: auto;" src="/images/dashboard_submitbutton.png"> button.

### Adding Widgets

To add widgets to the Dashboard, click the <img style="width: 50px; height: auto;" src="/images/dashboard_plusbutton.png"> button.

![](/images/dashboard_widgetlist.png)

When you select a widget, you may be asked to choose some additional settings. Do so, then click the <img style="width: 50px; height: auto;" src="/images/dashboard_submitbutton.png"> button.

### Unique URL for Wallboards

You can also generate a unique URL for each specific Dashboard, allowing you to keep a close eye on your statistics.

![](/images/dashboard_uniqueurl.png)

On the top right hand corner click the '**Action**' button, then click '**unique URL**'.

Copy the URL that is provided and open it on any web browser.

## Call Reports

### Inbound Calls

The '**Inbound Calls**' report shows the total number of incoming calls received by the phone system, filtered by the phone number & time period selected.

* Select any time period with a maximum of 7 days between them.
* Choose any phone number, or all phone numbers.
* Click the '**Feedback**' button to provide feedback or feature requests.

Click <img style="width: 100px; height: auto;" src="/images/dashboard_inbound_calls_csv.png"> to download a copy in CSV format.

![](/images/dashboard_inbound_calls.png)

### Abandoned Calls

The '**Abandoned Calls**' report displays the total number of inbound calls where no user spoke to the caller and it did not go to Voicemail.

* Select any time period with a maximum of 7 days between them.
* Tick the checkbox if you wish to include calls that went to voicemail.
* Click the '**Feedback**' button to provide feedback or feature requests.

Click <img style="width: 100px; height: auto;" src="/images/dashboard_inbound_calls_csv.png"> to download a copy in CSV format.

![](/images/dashboard_abandoned_calls.png)

### Outbound Calls

The '**Outbound Calls**' report displays the total number of outgoing calls - categorised into Local, National, Mobile, International, and 13/Misc calls. 

Report results can be filtered by simply clicking on the Call Type labels in the legend.

* Select any time period with a maximum of 7 days between them.
* Report can be filtered by clicking on the labels in the legend on the right hand side.
* Hover over the bar graph to see the exact number of calls.
* Click the '**Feedback**' button to provide feedback or feature requests.

Click <img style="width: 100px; height: auto;" src="/images/dashboard_inbound_calls_csv.png"> to download a copy in CSV format.

![](/images/dashboard_outbound_calls.png)

### Time to Answer

The '**Time to Answer**' report displays the average time taken for a call to be answered by a user.

* Select any time period with a maximum of 7 days between them.
* Choose a phone number / numbers from the drop down menu.
* Click the '**Feedback**' button to provide feedback or feature requests.

Click <img style="width: 100px; height: auto;" src="/images/dashboard_inbound_calls_csv.png"> to download a copy in CSV format.

### Account Code

#### Background information about Account Codes

Account codes are used to attribute calls to either a user or group of users. 
Alternatively, account codes can be used to attribute calls made to your customers. 

When a call is made, you can enter the account code as part of the phone number. 
The code will show up in the CDR (Call Detail Recording) with call length, number dialled etc. 
The CDR record is written when you terminate the call.

This functionality would typically be used by anyone who bills specifically for their time, eg: lawyers.

#### Usage

The '**Account Code**' report takes each call with account codes  and assigns them a dollar value.

* Specify the start & end date ranges.
* Assign the following values to each of the call types:
  * **Unit:** Choose from 1 second, 30 seconds, or 1 minute increments.
  * **Cost:** Enter the cost (per unit) in cents.
  * **Minimum:** Enter the minimum call cost, in cents.
  * **Flagfall:** Enter the flagfall rate here. (This is the cost that is applied once the call is connected.

Click <img style="width: 100px; height: auto;" src="/images/dashboard_savebutton.png"> to save your settings.

* Choose from Excel or PDF format, then download either the '**Summary**' or '**Detailed**' report.

![](/images/dashboard_account_code.png)

### Call Recordings

The '**Call Recordings**' page allows you to play or download recorded calls. Calls can be searched by the calling number (origin), or the called number (target).

* Select the start & end dates.
* Enter a number to search (if required)

Click <img style="width: 50px; height: auto;" src="/images/dashboard_callrecordings_getcalls.png"> 

Once the data has loaded, you will be able to see the following information about each call:

* **Origin:** This is the source number.
* **Target:** This is the destination number.
* **Duration (sec):** Duration of the call, measured in seconds.
* **Call Date:** Date / Timestamp of the call.
* **Download:** Click here to download a copy of the call recording.
* **Play:** Click here to play the recording.

![](/images/dashboard_callrecordings.png)

## User Reports

### Active Users

The '**Active Users**' report shows the total time users spent on calls. 
Reports are filtered by the direction of the call, the office, and time period selected.

* Select any time period with a maximum of 7 days between them.
* Select your '**Call Direction**':
  * All
  * Internal (This will only display calls made internally.
  * Inbound (This will only display **_inbound calls_**. (calls that you answered).
  * Outbound (This will only display **_outbound calls_** (calls that you made).  
* Select the '**office**', or simply select '_all offices_'.
* Click the '**Feedback**' button to provide feedback or feature requests.

::: tip

 **TIP:** You can also choose between a **bar graph** and a **pie chart** by clicking the button in the top right hand corner of the graph.

:::

![](/images/dashboard_active_users.png)

![](/images/dashboard_active_users_pie.png)

### Total Call Count

The '**Total Call Count**' report shows the total number of calls each user made or received, filtered by the office and time period selected.

* Select any time period with a maximum of 7 days between them.
* Select your '**Call Direction**':
  * All
  * Internal (This will only display calls made internally.
  * Inbound (This will only display **_inbound calls_**. (calls that you answered).
  * Outbound (This will only display **_outbound calls_** (calls that you made).  
* Select the '**office**', or simply select '_all offices_'.
* Click the '**Feedback**' button to provide feedback or feature requests.

![](/images/dashboard_total_call_count.png)

### Average Call Duration

The '**Average Call Duration**' report displays the average time each user spent on a call. Reports are filtered by the direction of the call, the office, and the time period selected.

* Select any time period with a maximum of 7 days between them.
* Select your '**Call Direction**':
  * All
  * Internal (This will only display calls made internally.
  * Inbound (This will only display **_inbound calls_**. (calls that you answered).
  * Outbound (This will only display **_outbound calls_** (calls that you made).  
* Select the '**office**', or simply select '_all offices_'.
* Click the '**Feedback**' button to provide feedback or feature requests.

::: tip

 **TIP:** You can also choose between a **bar graph** and a **pie chart** by clicking the button in the top right hand corner of the graph.

:::

![](/images/dashboard_average_call_duration.png)

![](/images/dashboard_average_call_duration_pie.png)

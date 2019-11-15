---
title: Virtual FAX
date: 2019-06-16T05:54:38.243Z
---
## **Configuring Virtual FAX**

There are three steps to configuring Virtual FAX.

* Enabling the Virtual FAX Plugin
* Enabling outbound Virtual senders.
* Configuring a number for inbound Virtual FAX.

### Enable Virtual FAX

Virtual FAX allows you to have a FAX number with all the convenience of email without needing a traditional FAX machine.

To configure virtual FAX you will first need to enable the virtual FAX plugin for your PBX.

<img style="width: 1100px; height: auto;" src="/images/pbx-callrecordings-1.png">

Hover over '_**Addons**_' and select '_**Configure Addons**_'.

<img style="width: 800px; height: auto;" src="/images/pbx-fax-1.png">

In order to enable Virtual FAX, you will need to read and agree to the disclaimer shown.

Once you have clicked '_**I Agree**_', you will be able to click '_**Enable Virtual FAX Plugin**_' at the top.

Scroll down to the bottom of the page and click '_**Save**_' when finished.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

### Configure Allowed Senders

In order to _**send**_ virtual FAX, your email address must be added to the '_**allowed senders**_' list.

This allows you to specify who can send FAX on behalf of your company as well as the caller ID to be used for each user.

<img style="width: 200px; height: auto;" src="/images/pbx-fax-2.png">

From the PBX homepage, hover over '_**Addons**_' and select '_**Virtual FAX**_'.

<img style="width: auto; height: auto;" src="/images/pbx-fax-3.png">

On this page you can click '**_Add Virtual FAX Sender_**' and also see a list of existing authorised email addresses.

Click '**_Return to Service_**' when finished.

### Virtual FAX Inbound Route

To enable inbound virtual FAX you will need to click on '**_Call Routing_**' from the PBX Homepage.

<img style="width: auto; height: auto;" src="/images/pbx-fax-4.png">

If you are modifying an existing an existing call route, click '_**view/edit**_' next to the number you wish to modify, otherwise click '_**Add Call Route**_'.

<img style="width: auto; height: auto;" src="/images/pbx-fax-5.png">

When creating a call route for Virtual FAX, you will need to fill in the following information:

* **Timezone:** This will be used to ensure correct timestamps.
* **Phone Number:** This is the inbound number you will be using.
* **Call Alert Name:** This is mostly for your reference.

<img style="width: auto; height: auto;" src="/images/pbx-fax-6.png">

Scroll down the page until you get to the section titled '_**Enable Virtual FAX**_'.

Check the option, and enter the email address that will receive the email containing the FAX message.

Once done, scroll to the bottom, and click '_**Save**_'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '_**Apply**_' to your PBX.

Click '_**Apply PBX Changes**_'.

## Virtual FAX Troubleshooting

### Disclaimer

The Virtual Fax add-on is an advanced feature providing the facility to send and receive a fax electronically and have it sent/delivered by email to a nominated Email address. 

The Virtual Fax feature is provided on an as-is basis without warranty or expectation of usability. As the Virtual Fax feature operates over a Voice Over IP network there may be certain circumstances where fax receive fails. 

When this occurs there is no Ability for us to correct, recover or improve the facility. No notification of failure will be forwarded nor do we provide any logging or remedy for such Events. 

## **Failure Notices**

Anytime you send a FAX you will receive a receipt to indicate if the FAX was successful or not.
Each receipt will contain the reason for the failure as well as the message header of the sent FAX.

### Sending Rejected - Invalid Number

- - -

<img style="width: auto; height: auto;" src="/images/failed_fax_invalidnumber.png">

The above failure receipt indicates that the email sent by the user did not contain a valid FAX number.

**TIPS:**

* The number must be 10 digits long.
* The number can not contain any spaces or special characters.

### Sending Rejected - No PDF attached

- - -

<img style="width: auto; height: auto;" src="/images/failed_fax_nopdf.png">

The above failure receipt indicates that the email sent by the user did not contain a valid PDF attachment.

 **TIPS:**

* Ensure that the email contains a valid PDF attachment.
* Try sending the email from a different email client.

### Sending Rejected - Invalid User

- - -

![](/images/fax_failed_user1.png)

The above failure receipt indicates that the sending email address has not been authorised to send faxes.

**TIPS:**

* If you are an administrator, [click here ](https://kb.ecn.net.au/guides/mycloudpbx/virtual-fax.html#configure-allowed-senders) to learn how to add Virtual FAX Senders.
* Contact your administrator to arrange access.

### Transmission Failed

- - -

<img style="width: auto; height: auto;" src="/images/failed_fax_genericfail.png">

The above failure receipt indicates that the outbound FAX failed after myCloudPBX attempted to send it 5 times.

**Common causes of FAX failure:**

* The FAX number is incorrect.
* The FAX number is unreachable and does not answer the call from myCloudPBX.
* The receiving FAX machine is attempting to use a high speed transmission mode that is not compatible with myCloudPBX.
* The receiving FAX machine is using Error Correction Mode (**ECM**). 
  **TIPS:**
* Confirm with the owner of the indended recipient that the number is correct.
* Give the number a ring from a mobile and confirm that the number is actually a FAX machine. (In this example the number is not a real FAX number, which is why it failed).
* If possible, have the receiving FAX machine set their transmission speed for both send & receive to **9600bps**.
* If possoble, have the receiving FAX machine disable Error Correction Mode (**ECM**).

**More about Error Correction Mode (ECM):**

When there is noise or poor call quality on the FAX call, parts of the transmission may become corrupted or lost in transit.

ECM looks at the data received and will request a re-transmission of the corrupted data until it receives an error free copy of the data. 

When a line is particularly bad, these retransmissions can drastically increase the length of the call, and in the worst case can lead to a failure with a _Communication Error_ being reported by receiving FAX machine.

By disabling ECM, we can increase the chances of the receiving FAX machine accepting the transmission even if some of the data is not perfect due to the interference.

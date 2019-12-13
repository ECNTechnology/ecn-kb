---
title: Virtual FAX
date: 2019-06-16T05:54:38.243Z
---
## **Configuring Virtual Fax**

There are three steps to configuring Virtual Fax.

* Enabling the Virtual Fax Plugin
* Enabling outbound Virtual senders.
* Configuring a number for inbound Virtual Fax.

### Enable Virtual Fax

Virtual Fax allows you to have a fax number with all the convenience of email without needing a traditional FAX machine.

To configure Virtual Fax you will first need to enable the virtual Fax plugin for your PBX.

<img style="width: 1100px; height: auto;" src="/images/pbx-callrecordings-1.png">

Hover over '**_Addons_**' and select '**_Configure Addons_**'.

<img style="width: 800px; height: auto;" src="/images/pbx-fax-1.png">

In order to enable Virtual Fax, you will need to read and agree to the disclaimer shown.

Once you have clicked '**_I Agree_**', you will be able to click '**_Enable Virtual Fax Plugin_**' at the top.

Scroll down to the bottom of the page and click '**_Save_**' when finished.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '**_Apply_**' to your PBX.

Click '**_Apply PBX Changes_**'.

### Configure Allowed Senders

In order to **_send_** Virtual Fax, your email address must be added to the '**_allowed senders_**' list.

This allows you to specify who can send Fax on behalf of your company as well as the caller ID to be used for each user.

<img style="width: 200px; height: auto;" src="/images/pbx-fax-2.png">

From the PBX homepage, hover over '**_Addons_**' and select '**_Virtual Fax_**'.

<img style="width: auto; height: auto;" src="/images/pbx-fax-3.png">

On this page you can click '_**Add Virtual Fax Sender**_' and also see a list of existing authorised email addresses.

Click '_**Return to Service**_' when finished.

### Virtual Fax Inbound Route

To enable inbound Virtual Fax you will need to click on '_**Call Routing**_' from the PBX Homepage.

<img style="width: auto; height: auto;" src="/images/pbx-fax-4.png">

If you are modifying an existing an existing call route, click '**_view/edit_**' next to the number you wish to modify, otherwise click '**_Add Call Route_**'.

<img style="width: auto; height: auto;" src="/images/pbx-fax-5.png">

When creating a call route for Virtual Fax, you will need to fill in the following information:

* **Timezone:** This will be used to ensure correct timestamps.
* **Phone Number:** This is the inbound number you will be using.
* **Call Alert Name:** This is mostly for your reference.

<img style="width: auto; height: auto;" src="/images/pbx-fax-6.png">

Scroll down the page until you get to the section titled '**_Enable Virtual Fax_**'.

Check the option, and enter the email address that will receive the email containing the fax message.

Once done, scroll to the bottom, and click '**_Save_**'.

<img style="width: auto; height: auto;" src="/images/pbx-callrecordings-5.png">

Your changes are now ready to '**_Apply_**' to your PBX.

Click '**_Apply PBX Changes_**'.

## Virtual Fax Troubleshooting

### Disclaimer

The Virtual Fax add-on is an advanced feature providing the facility to send and receive a fax electronically and have it sent/delivered by email to a nominated Email address.

The Virtual Fax feature is provided on an “as-is” basis without warranty or expectation of usability. As the Virtual Fax feature operates over a Voice Over IP network there may be certain circumstances where a fax fails.

When connection issues occur there is no ability for us to correct, recover or improve the facility. No notification of failure will be forwarded nor do we provide any logging or remedy for such events.

The planned release date for the new Enterprise-Grade Virtual Fax service is Q2 - 2020, which will include enhanced functionality and support.



## **Failure Notices**

Anytime you send a fax you will receive a receipt to indicate if the fax was successful or not. 

If a failure occurs the receipt will contain the reason for the failure as well as the message header of the sent fax.

The following are the possible failure notices that could occur.

### Sending Rejected - Invalid Number

- - -

<img style="width: auto; height: auto;" src="/images/failed_fax_invalidnumber.png">

The '\*\*invalid number\*\*' receipt indicates that the email sent by the user did not contain a valid fax number.

**TIPS:**

* The number must be 10 digits long.
* The number can not contain any spaces or special characters.


_The Virtual Fax feature is provided on an “as-is” basis without warranty or expectation of usability. As the Virtual Fax feature operates over a Voice Over IP network there may be certain circumstances where a fax fails. When this occurs there is no ability for us to correct, recover or improve the facility._

::: tip
The planned release date for the new Enterprise-Grade Virtual Fax service is Q2 - 2020, which will include enhanced functionality and support.
:::

### Sending Rejected - No PDF attached

- - -

<img style="width: auto; height: auto;" src="/images/failed_fax_nopdf.png">

The above failure receipt indicates that the email sent by the user did not contain a valid PDF attachment.

 **TIPS:**

* Ensure that the email contains a valid PDF attachment.
* Confirm a PDF is attached and retry.
* Try sending the email from a different email client.
* The PDF filename can not contain any spaces or special characters.

::: tip
_The Virtual Fax feature is provided on an as-is basis without warranty or expectation of usability. As the Virtual Fax feature operates over a Voice Over IP network there may be certain circumstances where fax receive fails. When this occurs there is no Ability for us to correct, recover or improve the facility._
:::

### Sending Rejected - Invalid User

- - -

![](/images/fax_failed_user1.png)

The above failure receipt indicates that the sending email address has not been authorised to send faxes.

**TIPS:**

* If you are an administrator, [click here ](https://kb.ecn.net.au/guides/mycloudpbx/virtual-fax.html#configure-allowed-senders) to learn how to add Virtual Fax Senders.
* Contact your administrator to arrange access.

::: tip
_The Virtual Fax feature is provided on an as-is basis without warranty or expectation of usability. As the Virtual Fax feature operates over a Voice Over IP network there may be certain circumstances where fax receive fails. When this occurs there is no Ability for us to correct, recover or improve the facility._
:::

### Transmission Failed

- - -

<img style="width: auto; height: auto;" src="/images/failed_fax_genericfail.png">

The above failure receipt indicates that the outbound fax failed after myCloudPBX attempted to send it 5 times.

**Common causes of fax failure:**

* The fax number is incorrect.
* The fax number is unreachable and does not answer the call from myCloudPBX.
* The receiving fax machine is attempting to use a high speed transmission mode that is not compatible with myCloudPBX.
* The receiving fax machine is using Error Correction Mode (**ECM**). 

**TIPS:**

* Confirm with the intended recipient that the number is correct.
* Give the number a ring from a mobile and confirm that the number is actually a fax machine. (In this example the number is not a real fax number, which is why it failed).
* If possible, have the receiving fax machine set their transmission speed for both send & receive to **9600bps**.
* If possible, have the receiving fax machine disable Error Correction Mode (**ECM**).
* Try again in 5 minutes.

::: tip
_The Virtual Fax feature is provided on an as-is basis without warranty or expectation of usability. As the Virtual Fax feature operates over a Voice Over IP network there may be certain circumstances where fax receive fails. When this occurs there is no Ability for us to correct, recover or improve the facility._
:::
**More about Error Correction Mode (ECM):**

When there is noise or poor call quality on the fax call, parts of the transmission may become corrupted or lost in transit.

ECM looks at the data received and will request a re-transmission of the corrupted data until it receives an error free copy of the data. 

When a line is particularly bad, these retransmissions can drastically increase the length of the call, and in the worst case can lead to a failure with a _Communication Error_ being reported by receiving fax machine.

By disabling ECM, we can increase the chances of the receiving fax machine accepting the transmission even if some of the data is not perfect due to the interference.

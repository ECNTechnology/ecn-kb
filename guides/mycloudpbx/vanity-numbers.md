---
title: Vanity Numbers
date: 2019-07-23T01:39:47.582Z
---
# Vanity Numbers

## Vanity Number Feature Overview

#### What are Vanity Numbers?

Vanity numbers give customers the ability to use different numbers for outbound call presentation. 

#### Why are Vanity numbers used?

When customers migrate from a traditional PBX to the cloud-hosted myCloudPBX platform, they often face the problem of numbers still being hosted on their traditional PBX during the migration process, or, a traditional telephone service such as ISDN or PSTN, or numbers that are not yet ready to be migrated to myCloudPBX. 

Using the Vanity Number feature allows customers to use numbers on their traditional PBX but commence configuring the service, offices, and users all prior to migrating (porting) those numbers to myCloudPBX. 

#### How are they used?

When a call is made the receiver sees the caller’s number as a number that may have been migrated yet, but already displays as though it is.

You can Add an existing phone number to your myCloudPBX service that isn't "**hosted**" on myCloudPBX, and use it to make calls, associate that number as the default outbound number on an office, and link that number to an extension as the outbound caller ID number when making calls.

#### Benefits of Vanity Numbers?

No waiting -  Customers don’t have to wait until they have migrated their numbers to the new system, but can present their numbers as though they have already been processed, even though the migration process is still taking place.

## Configuration

To add a vanity number, click '**Manage my phone number**' in the '**Overview**' section below the centreline of the myCloudPBX homepage.

![](/images/pbx_ringtones_1.png)

#### Phone Numbers Screen

![](/images/vanity1.png)

On this page you can see a list of your existing numbers and their status and have the following options.

* **Add New Number:** To order a new number click <img style="width: auto; height: 25px;" src="/images/vanity_addnumber.png"> 
* **Add Vanity Number:** To add a vanity number to the PBX click <img style="width: auto; height: 25px;" src="/images/vanity_add_vanity.png"> 
* **Verify:** To verify ownership of a vanity number click <img style="width: auto; height: 25px;" src="/images/vanity_verify.png"> 
* **Remove:** To remove a vanity number from the PBX click <img style="width: auto; height: 25px;" src="/images/vanity_remove.png"> 

Each number will be in one of four status types:

* **Vanity:** This is a Vanity number. This can be used for **outbound** calls only.

* **Active:** This is an Active number. This can be used for **inbound** and **outbound** calls.

* **Porting:** This is a number that will be ported to myCloudPBX. Once porting has completed you will be able to configure inbound call routing.

* **Waiting Verification:** This is a vanity number that has yet to be verified.


The '**Block Size**' can be one of two options:

* A **Block Size** of 1 represents a single number.
* A **Block Size** of 100 represents a 100 number block.

Click <img style="width: auto; height: 25px;" src="/images/vanity_add_vanity.png">

<img style="width: 500px; height: auto;" src="/images/vanity2.png">

Enter the following information:

* From the dropdown field, select the country that represents your number.
* Enter the phone number you wish to use as a Vanity Number.

Click '**Save**'.

You will now be taken back to the main '**Phone Numbers**' screen.

<img style="width: 600px; height: auto;" src="/images/vanity_verifynumberscreen.png">

In order to use the number, you will need to verify ownership of the number.

Find the number and click <img style="width: auto; height: 25px;" src="/images/vanity_verify.png"> to begin the verification process. 

<img style="width: 500px; height: auto;" src="/images/vanity3.png">

On this window you will be able to verify ownership of the number.

Click '**Initiate Call**'.

myCloudPBX will call the number and ready out a verification code.

Enter the verification code into the field and click '**Complete Verification**'.

The number has now been added as a vanity number on the PBX and can now be configured for outbound caller ID in the PBX.

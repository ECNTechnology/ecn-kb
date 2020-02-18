---
title: Network Requirements
date: 2019-07-09T09:45:17.071Z
---
# myCloudPBX Hosted Voice Network Requirements

The following document outlines the requirements of the myCloudPBX Hosted Voice platform. 

It is highly recommended that your network environment meets or exceeds the below requirements in all areas listed. 

Unexpected issues may arise if your network environment is not compatible with the below requirements. 

# Customer Environment Requirements

<table class="editorDemoTable" style="vertical-align: top; border-style: none;" border="black">
<thead>
<tr>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 140px; text-align: center;"><b>Customer Environment Requirements</b></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 600px; text-align: center;"><b>Description</b></td>
</tr>
</thead>
<tbody>
<tr>
<td style="min-width: 140px; width: 140px;"><span style="font-weight: 400;"><b>IP Routing and hardware</b></span></td>
<td style="width: 600px;">
<p><span style="font-weight: 400;">&nbsp;</span><span style="font-weight: 400;">Connection to an NBN 25M speed tier or </span><b>better </b><span style="font-weight: 400;">(Ethernet or Fibre highly recommended) Internet connection.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Available bandwidth of 100 Kbps </span><b>per concurrent call </b><span style="font-weight: 400;">(both download and upload). </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">A Netcomm NL1901ACV or Netcomm NF18ACV or </span><b>better </b><span style="font-weight: 400;">for </span><b>4</b><span style="font-weight: 400;"> or </span><b>fewer </b><span style="font-weight: 400;">concurrent users. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Business/Enterprise class gateway/firewall (example: Cisco 800 or greater/Cisco Meraki/Cyberoam/etc</span><span style="font-weight: 400;">)</span><span style="font-weight: 400;"> or </span><b>better </b><span style="font-weight: 400;">for </span><b>5</b><span style="font-weight: 400;"> or </span><b>more </b><span style="font-weight: 400;">concurrent users.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">SIP ALG protocol </span><b>must </b><span style="font-weight: 400;">be </span><b>disabled.</b><b><br /></b><b><br /></b><b>QoS enabled</b><span style="font-weight: 400;"> to provide high priority to Hosted Voice traffic to/from the myCloudPBX Hosted Voice server ranges on the following IP subnets: 203.201.155.0/24, 203.22.70.0/24, 27.127.227.0/24, 27.127.233.0/24 (any packet inspection should also be disabled)</span><span style="font-weight: 400;"><br /><b><br />Full IP connectivity</b><span> to the myCloudPBX Hosted Voice registration servers on the following ranges &ndash; 203.201.155.0 /24, 27.127.227.0/24, 27.127.233.0/24 (any packet inspection should also be disabled).<br /><br /></span></span></p>
<b>Full IP connectivity</b><span style="font-weight: 400;"><span style="font-weight: 400;"> to the myCloudPBX Hosted Voice provisioning servers on the following range &ndash; 203.22.70.0 /24 (any packet inspection should also be disabled).<br /><br /></span></span>
<b>Full IP connectivity</b><span style="font-weight: 400;"><span style="font-weight: 400;"> to the myCloudPBX Softphone registration servers on the following range - 203.201.157.0 /24 (any packet inspection should also be disabled).<br /><br /></span></span>
<p><span style="font-weight: 400;">A static public IP address that has been added to the Firewall Rules management section in the myCloudPBX portal. This is the public IP address used by the myCloudPBX Hosted Voice phones.</span></p>
</td>
</tr>
<tr>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 140px;"><b>LAN Environment</b></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 600px;">
<p><span style="font-weight: 400;">Cabling (</span><b>Category 5e</b><span style="font-weight: 400;"> cable or better between compatible PoE network switch and handset).</span></p>
<p><span><br />Connectivity to a switch (with uplink for Internet access) via a RJ-45 port using </span><b>Category 5e </b><span>or better cabling.</span></p>Power over Ethernet (PoE) allowing for a draw of 2.4 – 10.5 W per phone OR; individual power pack and general power outlet (GPO) per phone.

DHCP server with available IP addresses in a subnet with Internet connectivity.

DHCP Server providing option 66 and option 160 if auto-provisioning is to be used.

A single VLAN for both data and phones OR; a voice VLAN and data VLAN both with Internet connectivity.

IP connectivity between PC’s and phones.

LAN switches that are able to cope with a high count of Packets Per Second (50 to 100 packets per call per user). 

</td>
</tr>
</tbody>
</table>

</br>

# Firewall Rules

The following firewall configurations are required for myCloudPBX Hosted Voice phones to successfully register to the myCloudPBX Hosted Voice registration servers and successfully receive/initiate inbound and outbound calls:


<table border="1" style="height: 190px; width: 100%; border-collapse: collapse; border-style: none;">
<tbody>
<tr style="height: 21px;">
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><strong>Firewall Ports</strong></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><strong>Network Protocol</strong></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><strong>Application Protocol</strong></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><strong>Description</strong></td>
</tr>
<tr style="height: 21px;">
<td style="width: 25%; height: 21px;">5060</td>
<td style="width: 25%; height: 21px;">UDP &amp; TCP</td>
<td style="width: 25%; height: 21px;">SIP UAS</td>
<td style="width: 25%; height: 21px;">Used for SIP signalling (Standard SIP Port, for default Internal Profile)</td>
</tr>
<tr style="height: 21px;">
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;">16384 - 32768</td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;">UDP</td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;">RTP / RTCP multimedia streaming</td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;">Used for audio/video data in SIP and other protocols.</td>
</tr>
</tbody>
</table>

# Auto Provisioning

Phones on the myClouedPBX Hosted Voice platform can be enabled for auto-provisioning. 

The following DHCP options will be required for auto-provisioning to work correctly:


<table border="1" style="height: 190px; width: 100%; border-collapse: collapse; border-style: none;">
<tbody>
<tr style="height: 21px;">
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><b>DHCP Option</b></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><b>Value</b></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><b>Support Phones</b></td>
</tr>
<tr style="height: 21px;">
<td style="width: 25%; height: 21px;">66</td>
<td style="width: 25%; height: 21px;"><span style="font-weight: 400;">ps.mycloudpbx.com.au</span></td>
<td style="width: 25%; height: 21px;">Cisco, Linksys &amp; Yealink</td>
</tr>
<tr style="height: 21px;">
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;">
<p>160</p>
</td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><span style="font-weight: 400;">ps.mycloudpbx.com.au</span></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;">Polycom</td>
</tr>
</tbody>
</table>
<p><br /></p>
<p></p>
<p></p>

Additionally, for the phones to successfully download their configuration files, it is required that the following protocols be enabled for inbound and outbound communication:
</br> </br>

<table border="1" style="height: 240px; width: 100%; border-collapse: collapse; border-style: none;">
<tbody>
<tr style="height: 21px;">
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><b>Protocol</b></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;"><b>Support Phones</b></td>
</tr>
<tr style="height: 21px;">
<td style="width: 25%; height: 21px;">TFTP</td>
<td style="width: 25%; height: 21px;">Cisco, Linksys &amp; Yealink</td>
</tr>
<tr style="height: 21px;">
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;">
<p>HTTP</p>
</td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 25%; height: 21px;">Cisco, Linksys &amp; Yealink</td>
</tr>
<tr style="height: 21px;">
<td style="width: 25%; height: 21px;">
<p>FTP</p>
</td>
<td style="width: 25%; height: 21px;">Polycom</td>
</tr>
</tbody>
</table>
<p><br /><br /></p>
<p></p>

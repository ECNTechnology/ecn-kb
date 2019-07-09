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
<td style="background-color: rgba(29, 119, 209, 0.1); width: 514px; text-align: center;"><b>Description</b></td>
</tr>
</thead>
<tbody>
<tr>
<td style="min-width: 140px; width: 140px;"><span style="font-weight: 400;"><b>IP Routing and hardware</b></span></td>
<td style="width: 514px;">
<p><span style="font-weight: 400;">&nbsp;</span><span style="font-weight: 400;">Connection to an NBN 25M speed tier or </span><b>better </b><span style="font-weight: 400;">(Ethernet or Fibre highly recommended) Internet connection.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Available bandwidth of 100 Kbps </span><b>per concurrent call </b><span style="font-weight: 400;">(both download and upload). </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">A Netcomm NL1901ACV or Netcomm NF18ACV or </span><b>better </b><span style="font-weight: 400;">for </span><b>4</b><span style="font-weight: 400;"> or </span><b>fewer </b><span style="font-weight: 400;">concurrent users. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Business/Enterprise class gateway/firewall (example: Cisco 800 or greater/Cisco Meraki/Cyberoam/etc</span><span style="font-weight: 400;">)</span><span style="font-weight: 400;"> or </span><b>better </b><span style="font-weight: 400;">for </span><b>5</b><span style="font-weight: 400;"> or </span><b>more </b><span style="font-weight: 400;">concurrent users.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">SIP ALG protocol </span><b>must </b><span style="font-weight: 400;">be </span><b>disabled.</b><b><br /></b><b><br /></b><b>QoS enabled</b><span style="font-weight: 400;"> to provide high priority to Hosted Voice traffic to/from the ECN Hosted Voice server ranges on the following IP subnets: 203.201.155.0/24, 203.22.70.0/24, 27.127.227.0/24, 27.127.233.0/24 (any packet inspection should also be disabled)</span><span style="font-weight: 400;"><br /><b><br />Full IP connectivity</b><span> to ECN Hosted Voice registration servers on the following ranges &ndash; 203.201.155.0 /24, 27.127.227.0/24, 27.127.233.0/24 (any packet inspection should also be disabled).<br /><br /></span></span></p>
<b>Full IP connectivity</b><span style="font-weight: 400;"><span style="font-weight: 400;"> to ECN Hosted Voice provisioning servers on the following range &ndash; 203.22.70.0 /24 (any packet inspection should also be disabled).<br /><br /></span></span>
<p><span style="font-weight: 400;">A static public IP address that has been added to the Firewall Rules management section in the MyECN portal. This is the public IP address used by ECN Hosted Voice phones.</span></p>
</td>
</tr>
<tr>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 140px;"><b>LAN Environment</b></td>
<td style="background-color: rgba(29, 119, 209, 0.1); width: 514px;">
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Cabling (</span><b>Category 5e</b><span style="font-weight: 400;"> cable or better between compatible PoE network switch and handset).</span></p>
<p><span><br />Connectivity to a switch (with uplink for Internet access) via a RJ-45 port using </span><b>Category 5e </b><span>or better cabling.</span></p>
</td>
</tr>
</tbody>
</table>

# Firewall Rules

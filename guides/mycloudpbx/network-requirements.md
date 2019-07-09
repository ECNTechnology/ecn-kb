---
title: Network Requirements
date: 2019-07-09T09:45:17.071Z
---
# myCloudPBX Hosted Voice Network Requirements

The following document outlines the requirements of the myCloudPBX Hosted Voice platform. 

It is highly recommended that your network environment meets or exceeds the below requirements in all areas listed. 

Unexpected issues may arise if your network environment is not compatible with the below requirements. 

# Customer Environment Requirements

<table style="height: 400px; width: 796px; border-color: black; margin-left: auto; margin-right: auto;" border="black">
<tbody>
<tr>
<td style="width: 114px; text-align: left;"><strong>Customer Environment Requirements</strong></td>
<td style="width: 468px; text-align: left;"><strong>&nbsp; &nbsp; &nbsp;Description</strong></td>
</tr>
<tr>
<td style="width: 114px;"><strong>IP Routing</strong></td>
<td style="width: 468px; text-align: left;">
<div class="page" title="Page 1">
<div class="section">
<div class="layoutArea">
<div class="column">
<p>Connection​ ​to​ ​an​ ​ADSL2​ ​(or​ ​better,​ ​Ethernet​ ​recommended) Internet​ ​connection.</p>
<p>​​​​​​Full​ ​IP​ ​connectivity​ ​to​ ​ECN​ ​Hosted​ ​Voice​ ​registration​ ​servers​ ​on the​ ​following​ ​range​ ​&ndash;​ ​203.201.155.0​ ​/24</p>
<p>​​​​​​Full​ ​IP​ ​connectivity​ ​to​ ​ECN​ ​Hosted​ ​Voice​ ​provisioning​ ​servers​ ​on the​ ​following​ ​range​ ​&ndash;​ ​203.22.70.0​ ​/24</p>
<p>​​​​​​A​ ​static​ ​public​ ​IP​ ​address​ ​that​ ​has​ ​been​ ​added​ ​to​ ​the​ ​Firewall Rules​ ​management​ ​section​ ​in​ ​the​ ​MyECN​ ​portal.​ ​This​ ​is​ ​the public​ ​IP​ ​address​ ​used​ ​by​ ​ECN​ ​Hosted​ ​Voice​ ​phones.</p>
</div>
</div>
</div>
</div>
</td>
</tr>
<tr>
<td style="width: 114px;"><strong>LAN Environment</strong></td>
<td style="width: 468px; text-align: left;">
<div class="page" title="Page 1">
<div class="section">
<div class="layoutArea">
<div class="column">
<p>Cabling​ ​(Category​ ​5​ ​cable​ ​or​ ​better​ ​between​ ​compatible​ ​network switch​ ​and​ ​handset).</p>
<p>​​​​​​Connectivity​ ​to​ ​a​ ​switch​ ​(with​ ​uplink​ ​for​ ​Internet​ ​access)​ ​via​ ​a RJ-45​ ​port​ ​using​ ​Category​ ​5​ ​or​ ​better​ ​cabling.</p>
<p>​​​​​​Power​ ​over​ ​Ethernet​ ​(PoE)​ ​allowing​ ​for​ ​a​ ​draw​ ​of​ ​2.4​ ​&ndash;​ ​10.5​ ​W per​ ​phone​ ​OR;​ ​individual​ ​power​ ​pack​ ​and​ ​general​ ​power​ ​outlet (GPO)​ ​per​ ​phone.</p>
<p>​​​​​​DHCP​ ​server​ ​with​ ​available​ ​IP​ ​addresses​ ​in​ ​a​ ​subnet​ ​with Internet​ ​connectivity.</p>
<p>​​​​​​DHCP​ ​Server​ ​providing​ ​option​ ​66​ ​and​ ​option​ ​160​ ​if auto-provisioning​ ​is​ ​to​ ​be​ ​used.</p>
<div class="page" title="Page 2">
<div class="section">
<div class="layoutArea">
<div class="column">
<p>​​​​​​A​ ​single​ ​VLAN​ ​for​ ​both​ ​data​ ​and​ ​phones​ ​OR;​ ​a​ ​voice​ ​VLAN​ ​and data​ ​VLAN​ ​both​ ​with​ ​Internet​ ​connectivity.</p>
<p>​​​​​​IP​ ​connectivity​ ​between​ ​PC&rsquo;s​ ​and​ ​phones.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</td>
</tr>
</tbody>
</table>

# Firewall Rules

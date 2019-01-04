---
id: c43_f18w6
title: "Normalizations"
---

## Questions
1. The Public Safety office at Millennium College maintains a list of parking tickets issued to vehicles parked illegally on the campus.
Following table shows a portion of this list for the fall semester. (Attribute names are abbreviated to conserve space)

![Exercise 1](assets/cscc43/cscc43_week6_ex1.png "Table 1")

**a.** Convert this table to a relation in first normal form by entering appropriate data in the table. What are the determinants in this relation?\
**b.** Draw a dependency diagram that shows all functional dependencies in the relation, based on the sample data shown.\
**c.** Give an example of one or more anomalies that can result in using this relation.\
**d.** Develop a set of relations in third normal form. Include a new column with the heading Violation in the appropriate table to explain the reason for each ticket. Values in this column are: expired parking meter (ticket code 1), no parking permit (ticket code 2), and handi-cap violation (ticket code 3)\

2. The following attributes form a relation that includes information about individual computers, their vendors, software packages running on the computers, computer users, and user authorizations.
Users are authorized to use a specific software package on a specific computer during a specific time frame (characterized with attributes **UserAuthorizationStarts** and **UserAuthorizationEnds** and secured with **UserAuthorizationPassword**).
Software is licensed to be used on specific computers (potentially multiple software packages at the same time) until an expiration time (SoftwareLicensePrice) at a specific price. Computers are sold by vendors, and each vendor has a support person with an ID, name, and phone extension.Each individual computer has a specific purchase price. The attributes are as follows:

**ComputerSerialNbr, VendorID, VendorName, VendorPhone, VendorSupportID, VendorSupportName, VendorSupportExtension, SoftwareID, SoftwareName, SoftwareVendor, SoftwareLicenseExpires, SoftwareLicensePrice, UserID, UserName, UserAuthorizationStarts, UserAuthorizationEnds, UserAuthorizationPassword, PurchasePrice**

Based on this information,\
**a.** Identify the functional dependencies between the attributes.\
**b.** Identify the reasons why this relation is not in 3NF.\
**c.** Present theattributes organized so that the resulting relations are in 3NF.

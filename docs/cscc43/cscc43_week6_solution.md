---
id: c43_f18w6s
title: "Normalizations - Solutions"
---

## Solutions
Note that these are **sample** solutions and may be different
depending on your interpretation of the problem.

### Question 1
**a.**

> St ID, Lic No + St Lic, Ticket #

**b.**

> St ID -> LName, FName, PhoneNo, St Lic, Lic No\
> St Lic + Lic No -> St ID, LName, FName, PhoneNo\
> Ticket # -> Date, Code, Fine

**c.**

> Update Anomaly - If Thomas changed his name, update many rows\
> Addition Anomaly - If you add a student, you need to assign ticket as well\
> Deletion Anomaly - If you delete a ticket, you delete the person as well

**d.**

> Student(**St ID**, LName, FName, PhoneNo)\
> StudentCar(***St ID***, **LicNo**, **St Lic**)\
> Ticket(Date, Code, Fine, **Ticket #**, ***St ID***, ***Lic No***, ***St Lic***)

### Question 2
**a.**

> SoftwareID -> SoftwareName, SoftwareVendor, SoftwareLicenseExpires, SoftwareLicensePrice\
> ComputerSerialNbr, VendorID -> PurchasePrice\
> ComputerSerialNbr, UserID, SoftwareID -> UserAuthorizationStarts, UserAuthorizationEnds, UserAuthorizationPassword\
> UserID -> UserNameVendorID -> VendorName, VendorPhone\
> VendorSupportID -> VendorSupportName, VendorSupportExtension

**b.** because of partial functional and transitive dependencies such as:

> UserAuthorizationStarts can be determined by ComputerSerialNbr, UserID,SoftwareID, while UserID itself determines Username (i.e partial dependency)\
> VendorID determines VendorSupportID, which itself determines VendorSupportName etc. (transitive dependency)\
> See if you can find more examples of partial and transitive dependencies.

**c.**

> SOFTWARE PACKAGE (**SoftwareID**, SoftwareName, SoftwareVendor, SoftwareLicenseExpires, SoftwareLicensePrice)\
> COMPUTER (**ComputerSerialNbr**, ***VendorID***, PurchasePrice)\
> LICENSE (***ComputerSerialNbr***, ***UserID***, ***SoftwareID***, UserAuthorizationStarts, UserAuthorizationEnds, UserAuthorizationPassword)\
> USER (**UserID**, UserName)\
> VENDOR (**VendorID**, VendorName, VendorPhone)\
> SUPPORT PERSON (**VendorSupportID**, VendorSupportName, VendorSupportExtension, *VendorID*)\
> If SUPPORT PERSON and VENDOR has one to one relationship, and both side is mandatory we can merge these two tables

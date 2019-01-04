---
id: c43_f18w5s
title: "ERD to Shorthand Conversions - Solution"
---

## Introduction

Note that these are **sample** solutions and may be different
depending on your interpretation of the problem.

## Solutions
### Question 1
TEAM (**TeamID**, TeamName, TeamManager)\
DRIVER (**DriverID**, DriverAge, DriverName, *TeamID*)\
FINISH (***RC ID***, ***DriverID***, Position, Result)\
RACE (**RaceID**, RaceTitle, RaceLocation, RaceDate)\
RACECOMPONENT (**RC ID**, RC Type, *RaceID*)\
PARTICIPATION(***RaceID***, ***DriverID***, ***TeamID***, PointsEarned)

### Question 2
STUDENT (**student id**, student name, student address, *seat no*)

> Note: When implmenenting 1:1 relationships you can include primary keys
> from either entity in their corresponding one, but you'll need to specify
> uniqueness (i.e., student id and seat no make a unique record together but)
> seat no is not part of the primary key

COURSE (**course number**, **course name**, ***instructor no***)\
STUDENT COURSE (***student id***, ***course name***, ***course number***)\
INSTRUCTOR (**instructor no**, instructor name, instructor faculty)\
SEAT (**seat no**, seat position)\
CLASS (***course name***, ***section number***, num registered, class date time, *course number*)\
SECTION (**section number**, *professor id*)\
PROFESSOR (**professor id**, professor name, professor faculty)

### Question 3
MENU (**MenuID**, MenuDescription, MenuType)\
EVENT (**EventID**, EventDate, EventLocation, EventTime, MenuID)\
WORK SCHEDULE (***EventID***, ***EmpID***, StartTime, EndTime, Position)\
STAFF(**EmpID**, Name, Salary, *SupervisorID*)\
SKILLS (***EmpID***, **Skill**)\
DISH(**DishID**, DishName, PrepTime)\
INGREDIENTS (**DishID**, **Ingredients**)\
DISH MENU(***MenuID***, ***DishID***)

### Question 4
EDITOR (**EditorID**, EditorLName, EditorFName, EditorInstitution)\
BOOK (**BookNbr**, BookISBN, BookTitle, BookPrice, *Volume*)\
EDITOR BOOK (***EditorID***, ***BookNbr***, EditorOrder)\
WHOLESALER (**CustID**, CustName)\
ORDER (**OrderID**, OrderDate, OrderDeliveryDate, *CustID*)\
ORDER LINE (**OrderlineNbr**, OLPrice, OLDiscount, OLQuantity, *BookNbr*, *OrderID*)\
AUTHOR (**AuthorID**, AuthLastName, AuthFirstName, AuthMiddleName, AuthPhone, AuthEmail)\
EXPERTISE (***AuthorID***, **AuthExpertise**)\
CHAPTER (**ChapterID**, ChapterNumber, ChapterTitle)\
AUTHOR ASSIGNMENT (***AuthorID***, ***ChapterID***, AuthorPosition, IsLeadAuthor, IsContractAuthor)\
BOOK CHAPTER (***BookNbr***, ***ChapterID***)

---
id: c43_f18w3
title: "Cinema Database"
---

You are about to design a database for a cinema. By interviewing employees, investigating the documents and observing the communication of the staff in the cinema we found the following facts:

Every day, six different movies are shown in the six available theatres. When a new movie is purchased, John (an employee) has the duty of recording movie information including the name of the movie, director, screenplay writer, main female and male actor, genre, etc. Then John passes this information to Rose (another employee), who is responsible to do some research and add some information to what John had already recorded. Her research is about the previous movies that the main actors have played, the previous movies that the director has directed, the awards that each have received among other things.

Later, when the showtime for each movie finishes, Margaret (another employee) is responsible to collect some data that later will be used for evaluation of the movie. This data includes the number of the tickets (adult, child, senior, premium, regular, etc) that were sold, the number of customers that have bought the ticket more than once, showtimes that were more popular, etc.

Your job is to make a group of two and:
1. Recognize entities.
2. Extract business rules based on the following pattern:
    ```
    <entity> <minimum cardinality> <relationship> <maximum cardinality> <entity>
    ```
3. Think about the attributes and the type of each attribute that each entity may require.
4. Name 3 different reports (queries) that can be extracted from the data.

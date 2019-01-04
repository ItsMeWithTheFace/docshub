---
id: c43_f18w12
title: "Prepared SQL Statements"
---

## Introduction
You may have learned about SQL Injection attacks, a common exploit a user could perform to gain access
to your database. The main reason this happens is due to the lack of sanitizing user inputs. If you
build your query insecurely (i.e., concatenating inputs) then you're making your application
vulnerable to these types of attacks

## Mitigation
To mitigate SQL Injections, you need to sanitize your inputs. There are multiple means to approach this,
but the method relevant to your project is through [Prepared SQL Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-prepared-statements.html).

## Prepared Statements Syntax (Java)
```java
import java.sql.*;

public class PreparedStatementExample
{
  public static void main(String[] args)
  {
    try
    {
      // create a mysql database connection
      // ...

      // the mysql insert statement
      String query = "INSERT INTO users (first_name, last_name, date_created, is_admin, num_points)"
        + " VALUES (?, ?, ?, ?, ?)";

      // set the parameters
      PreparedStatement preparedStmt = conn.prepareStatement(query);
      preparedStmt.setString (1, "Barney");
      preparedStmt.setString (2, "Rubble");
      preparedStmt.setDate   (3, startDate);
      preparedStmt.setBoolean(4, false);
      preparedStmt.setInt    (5, 5000);

      // execute the preparedstatement
      preparedStmt.execute();
      
      conn.close();
    }
    catch (Exception e)
    {
      System.err.println("Got an exception!");
      System.err.println(e.getMessage());
    }
  }
}

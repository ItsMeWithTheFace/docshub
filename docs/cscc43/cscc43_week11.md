---
id: c43_f18w11
title: "Functions, Procedures, Triggers and Embedded SQL"
---

## Functions
- Perform routine actions in SQL like a normal function
- Returns one value
- Can be embedded into normal SQL

### Syntax
```sql
DELIMITER $$
CREATE FUNCTION count_countries ()
    RETURNS INT DETERMINISTIC
    BEGIN
        DECLARE num INT;
        SET num = (SELECT count(*) FROM world.country);
        RETURN num;
    END$$
DELIMITER ;

-- Then you call them like so
SELECT count_countries();
```

## Procedures
- Also performs routine actions in SQL
- Able to return multiple values
- Cannot be embedded into normal SQL

### Syntax
```sql
DELIMITER $$
CREATE PROCEDURE count_countries (OUT num_countries INT)
    BEGIN
        SELECT count(*) INTO num_countries FROM world.country;
    END$$
DELIMITER ;

-- You call these like so
CALL count_countries(@result);
SELECT @result;
```

## Triggers
- Perform miniscule tasks
- Useful for controlling data on insertion/deletion/updates

### Syntax
```sql
CREATE TRIGGER set_to_asia BEFORE INSERT ON country
    FOR EACH ROW
        SET new.continent = 'asia'; -- you can set the new row's values
```

## Embedded SQL
Embedded SQL refers to the hard-coded SQL statements that you write in a back-end program (i.e., a Java or Python program) as they are *embedded* into the code.

Here is an example demonstrating how to connect to a MySQL database using Java:
```java
import java.sql.*;

public class Main {
    public static void main(String[] args) {
        String username = "user";
        String password = "pass";
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/world", username, password);
            Statement stmt = con.createStatement(); // hard-coded sql
            ResultSet rs=stmt.executeQuery("select * from country");
            while(rs.next())
                System.out.println(rs.getString(1) + " " + rs.getString(2));
            con.close();  // always include this afterwards
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
```

It's important to close your connection after running a SQL command since you'll have lingering connections that will block future processes from running.

## Questions
1. Write a procedure that returns the name of the cities that starts with 'SH' and insert it into a table called *special_cities*. Call the procedure and see the result.
2. Copy table *city* into a table called *_city*. Then write a trigger to remove a city from *special_cities* where it is removed from *_city*.

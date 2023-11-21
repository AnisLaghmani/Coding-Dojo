--SQL queries
/*
CRUD:=question=everything we can do ever with dat create read update delete
*/

--CREATE
--Mysql command : INSERT
--syntax INSERT INTO table_name (column_1,column_2) VALUES (val_1,val_2);
INSERT INTO users(first_name, last_name, email) VALUES ('John',"DOE","J@d.com");

--insert one user!
--insert many
INSERT INTO
    users(first_name, last_name, email)
VALUES
    ('John', "DOEE", "J@de.com"),
('Jane', "haze", "J@de.com"),
('black', "widow", "mrvl@def.com");

--READ
--mysql command: Select
--syntax:SELECT  (column_1,column_2)FROM table_name WHERE conditions;
SELECT first_name,last_name FROM USERS;
SELECT * FROM USERS;

--with condition
SELECT * FROM users WHERE id=3;
SELECT * FROM users WHERE first_name="John";
SELECT * FROM users WHERE first_name LIKE "b%"; ---start with b
SELECT * FROM users WHERE first_name LIKE "%k";  ---end with k
SELECT * FROM users WHERE first_name LIKE "%l%";---contains l
----order
----first name asc
SELECT * FROM users Order BY first_name;
--order by first name desc
SELECT * FROM users Order BY first_name DESC;
SELECT * FROM users Order BY id DESC LIMIT 2; --select the 2 first value
-------------------------------------------------
SELECT * FROM users WHERE id>2; --users that have id more than 2

--UPDATE
--Mysql command : UPDATE 
--syntax : UPDATE table_name SET column_1=new_value_1,column_2=new_value_2
--Update One user
UPDATE users SET first_name="George", last_name="taylor" WHERE id=10;

--safe mode
SET SQL_SAFE_UPDATES=0 --disable
SET SQL_SAFE_UPDATES=1 --enable



----DELETE
---My sql Command: DELETE
----Syntax: DELETE FROM table_name WHERE condition;
--delete one user 
DELETE FROM users WHERE id=3;


--SQL Functions
SELECT CONCAT_WS("-",first_name,last_name) FROM users;
SELECT CONCAT_WS("-",first_name,last_name) as "full name" ,email FROM users;

SELECT COUNT(id) as "number of users" FROM users;





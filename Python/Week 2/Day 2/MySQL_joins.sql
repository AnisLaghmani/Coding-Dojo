--insert into one to one
INSERT INTO adresses(users_id,street,city,code) VALUES (2,"Street number one","Cali","54331");

--
INSERT INTO
items(title,price,quantity)
values 
("laptop",1000,2),
("laptop",1000,2),
("smartphone",599.900,100),
("camera",550,200),
("tablet",299,25),
("headphone",30.90,75);

--one to many
INSERT INTO orders (user_id,amount) VALUES (1,2100.0),(2,1470),(1,1200);

--join
SELECT * FROM users JOIN orders ON users.id=orders.user_id;

SELECT * FROM users LEFT JOIN orders ON users.id=orders.user_id;

---insert many to many 
INSERT INTO ordered_items(order_id,item_id,quantity) 
VALUES
(1,1,"1"),
(1,2,"1"),
(1,4,"1"),
(2,5,"3"),
(2,6,"1"),
(2,4,"1"),
(3,4,"1"),
(3,5,"1");


SELECT * FROM books_schema.users;
INSERT INTO users (first_name, last_name) VALUES ("jane","amsden"),("emily","dickson"),("theodore","dostoevsky"),("william","shapiro"),("lao","xiu");
INSERT INTO books (title) VALUES ("CSHARP"),("JAVA"),("Python"),("PHP"),("Ruby");
SELECT * FROM books_schema.books;
UPDATE books SET title="C#" WHERE id=1 ;
UPDATE users SET first_name="Bill" WHERE id=4 ;
INSERT INTO favorites (user_id,book_id) VALUES (1,1),(1,2);
SELECT * FROM books_schema.favorites;
INSERT INTO favorites (user_id,book_id) VALUES (2,1),(2,2),(2,3);
INSERT INTO favorites (user_id,book_id) VALUES (3,1),(3,2),(3,3),(3,4);
INSERT INTO favorites (user_id,book_id) VALUES (4,1),(4,2),(4,3),(4,4),(4,5);
SELECT * FROM books_schema.favorites;
SELECT * FROM users LEFT JOIN favorites ON users.id=favorites.user_id WHERE book_id=3;
DELETE FROM favorites  WHERE book_id=3 LIMIT 1;
INSERT INTO favorites (user_id,book_id) VALUES (5,2);
SELECT * FROM books LEFT JOIN favorites ON books.id=favorites.book_id WHERE user_id=3;
SELECT * FROM users LEFT JOIN favorites ON users.id=favorites.user_id WHERE book_id=5;








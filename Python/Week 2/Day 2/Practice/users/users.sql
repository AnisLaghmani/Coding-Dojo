SELECT * FROM users_schema.users;
INSERT INTO 
users (first_name, last_name, email) 
VALUES 
('khaireddine', "sougui", "ks@de.com"),
('aléla', "mohsni", "alamoh@de.com"),
('anis', "lagh", "anislagh@def.com");
SELECT * FROM users;
SELECT * FROM users WHERE email="ks@de.com";
SELECT * FROM users WHERE id=3;
UPDATE users SET last_name="PANCAKES" WHERE id=3;
DELETE FROM users WHERE id=2;
SELECT * FROM users Order BY first_name;
SELECT * FROM users Order BY first_name DESC;

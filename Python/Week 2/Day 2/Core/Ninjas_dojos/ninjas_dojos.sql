SELECT * FROM dojos;
INSERT INTO dojos(name) VALUES ('cali_dojo'),('africa_dojo'),('seatle_dojo');
SELECT * FROM dojos;
DELETE FROM dojos WHERE id=1;
DELETE FROM dojos WHERE id=2;
DELETE FROM dojos WHERE id=3;
SELECT * FROM dojos;
INSERT INTO dojos(name) VALUES ('cali_dojo'),('africa_dojo'),('seatle_dojo');
SELECT * FROM dojos;
INSERT INTO ninjas(first_name,last_name,age,dojo_id) VALUES ('anis',"lagh",29,4),('khaireddine',"sougui",24,4),('ala',"mohsni",25,4);
INSERT INTO ninjas(first_name,last_name,age,dojo_id) VALUES ('sameh',"khazri",26,5),('tasnim',"balti",19,5),('rayen',"khmiri",25,5);
INSERT INTO ninjas(first_name,last_name,age,dojo_id) VALUES ('jassem',"guasssssss",20,6),('souleim',"tazarka",28,6),('anis',"rouis",25,6);
SELECT * FROM ninjas;
SELECT * FROM ninjas WHERE dojo_id=4;
SELECT * FROM ninjas WHERE dojo_id=6;
SELECT * FROM ninjas WHERE id=9;
SELECT * FROM ninjas JOIN dojos ON dojo_id=dojos.id WHERE ninjas.id=6;
SELECT * FROM ninjas JOIN dojos ON dojo_id=dojos.id;


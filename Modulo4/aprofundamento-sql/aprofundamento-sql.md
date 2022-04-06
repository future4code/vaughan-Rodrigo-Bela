-------**1**
**A**
O comendao ira eliminar a coluna salary da tabela.
**B**
O comando ira alterar o nome da coluna gender para sex e tipar como VARCHAR(255)
**C**
O comando dará erro pois acima o nome da tabela gender foi alterado ja. Mas o mesmo alteraria o numero de caracteres par um bem maior.
**D**
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
--------**2**
**A**
UPDATE Actor
SET name = "Carla Dias"
WHERE id = "003";

UPDATE Actor
SET birth_date = "1999-11-05"
WHERE id = "003";
**B**
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
**C**
UPDATE Actor
SET name = "Paola Oliveira",
birth_date = "2020-02-10",
salary = 800000,
gender = "FEmale"
WHERE id = "005";
**D**
Error Code: 1146. Table 'vaughan-21712652-rodrigo-bela.Actor2' doesn't exist

Ocorre um erro pois a tabela não é encontrada .
---------**3**
**A**
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
**B**
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
---------**4**
**A**
SELECT MAX(salary) FROM Actor
**B**
SELECT MIN(salary) FROM Actor WHERE gender = "female"
**C**
SELECT COUNT(*) FROM Actor WHERE gender = "female"
**D**
SELECT SUM(salary) FROM Actor
---------**5**
**A**
O script seleciona todos os generos da tabela ator, e ordenando por actor, ou seja ele ordenará por ordem alfabética.
**B**
SELECT id, name FROM Actor
ORDER BY name DESC;
**C**
SELECT * FROM Actor
ORDER BY salary;
**D**
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
**E**
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
---------**6**
**A**
ALTER TABLE Movie ADD playing_limit_date DATE;
**B**
ALTER TABLE Movie CHANGE rating rating FLOAT;
**C**
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
**D**
DELETE FROM Movie WHERE id = "001"
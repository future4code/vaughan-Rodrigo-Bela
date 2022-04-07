**Exercício 1**
**A**
O Varchar é ideal para caracteres variáveis, pode ser letras, simbolos e até numeros desde que sejam strings.
O date é ideal para pegar e armazenar corretamente informações de datas no formarto AAAA/MM/DD.
E o Float para o salário, pois é o ideal para representar um número não inteiro em uma tabela.

**B**
O comando SHOW DATABESES me mostrou o banco de dados no qual estamos trabalhando, conforme abaixo:

information_schema
vaughan-21712652-rodrigo-bela

Já o comando SHOW TABLES me mostrou a tabela Actor na qual eu tinha criado.

Tables_in_vaughan-21712652-rodrigo-bela
Actor
**C**
O BD me mostro a tabela completa com os tipos de dados inclusive a quantidade de caracteres permitodos:
id	varchar(255)	NO	PRI	
name	varchar(255)	NO		
salary	float	NO		
birth_date	date	NO		
gender	varchar(6)	NO		

**Exercício 2**
**A**
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
**B**
Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'

O codigo de erro explica que não ´podemos duplicar o ID pois é uma PK.

**C**
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1

Para resolver é preciso retirar data e sexo do preenchimento da query, ou acrescentar no parametro.

**D**
Código de erro: 1364. O campo 'nome' não tem um valor padrão.

Pelo que entendi o campo nome não pode ser vazio, portanto para crair a tabela é necessário definir um nome.

**E**
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

O campo data esta entrando como Number, quando na verdade deveria estrar como uma string que se adequa para data.

**F**

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "022", 
  "Margareth Menezes",
  300000,
  "1949-10-08", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "105", 
  "Gloria Pires",
  719333.33,
  "1999-03-26", 
  "female"
);
**Exercício 3**
**A**
SELECT * from Actor WHERE gender = "male";
**B**
SELECT salary from Actor WHERE name = "Tony Ramos";
**C**
SELECT * from Actor WHERE gender = "invalid";

Não retornou nada pois não ha nenhum que esteja com o dado "Invalid"
**D**
SELECT id, name, salary from Actor WHERE salary <= "500000";
**E**
Error Code: 1054. Unknown column 'nome' in 'field list'
Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'

A palavra deve ser "name" e não "nome", pois nome não existe na tabela

Forma correta: SELECT id, name from Actor WHERE id = "002"

**Exercício 4**
**A**
Neste caso a query pede que venha tudo onde contenha conteúdo antes da letra "A" e também a letra "J", após que alem disso
traga todo o conteúdo onde o salário é maior que 300000.
**B**
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 35000000;
**C**
SELECT * FROM Actor
WHERE name LIKE "%g%" OR "%G%";
**D**
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR "%G%") OR (name LIKE "%a%" OR "%A%") AND (salary >= 35000000 AND <= 90000000);

**Exercício 5**

**Exercício 6**

**Exercício 7**

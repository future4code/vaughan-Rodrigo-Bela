**1**
**A**
 Explique o que é uma chave estrangeira

**B**
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

**C**
Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

**D**
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

**E**
Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
**2**
**A**
Explique, com as suas palavras, essa tabela

**B**
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)

**C**
Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
**D**
Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query


**3**
**A**

Explique, com suas palavras, a query acima. O que é o operador ON?
**B**
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
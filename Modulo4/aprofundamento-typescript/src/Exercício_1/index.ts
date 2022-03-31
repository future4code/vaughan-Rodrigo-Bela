const minhaString : string = "Casa";
type Ambos = number | string
const meuNumero : Ambos = 10

/*
Exercicio 1.
A. É apresentado um etto e a mensagen "O tipo 'number' não pode ser atribuído ao tipo 'string'."

B. Usando a propriedade Type e Apelido de tipos é possivel criar um tipo que aceite 2 ou mais tipos diferentes.

C. */
// type Pessoa = number | string

type Pessoa = {
    nome : string,
    idade : number,
    corFavorita : string,
}

const Objeto1 : Pessoa = {
    nome : 'Rodrigo',
    idade : 29,
    corFavorita : 'Ciano',
};

const Objeto2 : Pessoa = {
    nome : 'Gabriella',
    idade : 28,
    corFavorita : 'Rosa',
};

const Objeto3 : Pessoa = {
    nome : 'Raimundo',
    idade : 60,
    corFavorita : 'Verde',
};

const Objeto4 : Pessoa = {
    nome : 'Margarida',
    idade : 65,
    corFavorita : 'Amarelo',
};

/*
D.
*/

enum Arco_iris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    INDIGO = "Índigo",
    VIOLETA = "Violeta",
}

const Objeto5 : Pessoa = {
    nome : 'Fulano',
    idade : 120,
    corFavorita : Arco_iris.AZUL,
};

const Objeto6 : Pessoa = {
    nome : 'Beltrano',
    idade : 890,
    corFavorita : Arco_iris.INDIGO,
};

console.table(Objeto6)
console.table(Objeto5)

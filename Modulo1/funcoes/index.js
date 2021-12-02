/*
Exercícios de interpretação de código
1.
A.
O codigo trará no console o resultado 10
e posteriormente o resultado 50, pois a Função
pede para que seja multiplicado por 5 o valor recebido.
B.
Caso fosse retirado os console.log o console aprecceria
erro pois não foi passaos parametros para calculo.

2.
A.
Com esta função o texto que entrar é transformado para caixa baixa,
ou letra minuscula, e na sequencia verifica se no texto possui
a palavra cenoura, caso possua ele trará a frase juntamente com um booleano.

B.
eu gosto de cenoura (true)
cenoura é bom pra vista (true)
cenouras crescem na terra (false)

 */
//-------------------------------------------------------------------------
/*
Exercícios de escrita de código
*/
//1.
//A

const infoRodrigo = () => { return ("Eu sou Rodrigo, tenho 29 anos, moro em São Paulo e sou estudante") };
console.log (infoRodrigo());

//B

const nome = (prompt ("Ola, meu informe seu nome!"));
const idade = Number (prompt("Ola, meu informe sua idade!"));
const endereco = (prompt ("Ola, meu informe seu endereço!"));
const profissao = (prompt ("Ola, meu informe sua profissão!"));

const infoUsuario = () =>
{return `Eu sou, ${nome}, tenho ${idade} anos, moro em ${endereco} e sou, ${profissao}`}
console.log (infoUsuario())


// //${nome}, ${idade}, ${endereco}, ${profissao}

// //2.
// //A.

const soma = (num1, num2) => {return num1 + num2};

console.log (soma(2, 5))

// //B

const boolea = (num1, num2) => {return num1 >= num2};

console.log (`o primeiro numero é maior ou igual ao seundo? ${boolea(7, 6)}`)
// //C
const booleaPar = (num1) => {return num1 % 2 == 0 };

console.log (`Par é True impar é False ${booleaPar(4)}`)
// //D

const mensagem = (mensa) => {return mensa.length};

console.log (mensagem("Boa tarde Galera da Labenu"));

// // 3. Fazendo

const nu1 = Number(prompt("Insira um numero"));
const nu2 = Number(prompt("Insira outro numero"));

const soma = (nu1, nu2) => {return nu1 + nu2
`A subtração deles é :${numeros1 - numeros2}`
`A multiplicação deles é :${numeros1 * numeros2}`
`A divisão deles é :${numeros1 / numeros2}`

}

console.log (`A Soma deles é: ${soma}`)


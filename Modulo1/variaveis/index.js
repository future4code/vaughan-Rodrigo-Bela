/*
1. O resultado é  (10, 10 e 5) pois a ultima como pode ser alterada recebeu o valor de 5 antes da solicitação
let a = 10;
let b = 10;
console.log(b);
b = 5;
console.log(a, b);

2. O resultado seria (10, 10 e 10) pois a declaração no final acabou igualando pelo resultado da variavel "a"
let a = 10;
let b = 20;
c = a;
b = c;
a = b;
console.log(a, b, c);

3. O programa calcula o valor medio por hora em que o usuário recebe.
Colocaria as variávei de acordo como segue abaixo.

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?");
let valorDia = prompt("Quanto você recebe por dia?");
alert (`Voce recebe ${valorDia/horasTrabalhadas} por hora`);

let nomeQualquer = undefined prompt ("Digite sua Idade!");
let idadeQualquer = prompt ("Digite sua Idade!");
const idadeEmNumero = Number (idade);
console.log ()
*/

//let nomeQualquer = prompt ("Digite seu nome!");
//let idadeQualquer = prompt ("Digite sua idade");

//console.log ("Seu nome é: ", typeof nomeQualquer);
//console.log ("Sua idade é: ", typeof idadeQualquer);

/*

1.
a) ok
b) ok
c) Apareceu como undefined para ambos.
d) Basicamente ainda não tinha sido colocado algum valor para definição.
e)ok
f) Apareceu String Number pois agora a informação.
g) ok


//console.log ("Olá", nomeQualquer, "você tem", idadeQualquer, "anos")

2.
a) Ok
b) ok



let tempo = prompt ("Esta chovendo na sua cidade neste momento?");
let cidade = prompt ("Na sua cidade costuma chover bastante?");
let guarda = prompt ("Caso chova, você esta com um guarda-chuva?");

console.log ("Esta chovendo na sua cidade neste momento?", tempo);
console.log ("Na sua cidade costuma chover bastante?", cidade);
console.log ("Caso chova, você esta com um guarda-chuva?", guarda);

3.

VARIAVEL COPO A = SUCO
VARIAVEL COPO B = COCA

//     INVERTER

CRIAR COPO C QUE É = VAZIO

*/
//________________________________________________________________
/*
VARIAVEL COPO C = SUCO
VARIAVEL COPO A = VAZIO
VARIAVEL COPO B = COCA
VARIAVEL COPO A = COCA
VARIAVEL COPO B = VAZIO
VARIAVEL COPO B = SUCO
VARIAVEL COPO C = VAZIO

*/
//________________________________________________________________
//console.log ("O novo valor de A é", 25)
//console.log ("O novo valor de A é", 10)

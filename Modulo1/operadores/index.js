// 1. Acredito que aparecerá desta forma:

// A) Falso
// B) Falso
// C) Verdadeiro
// D) Verdadeiro - Booleano

// 2. A principio ele precisará converter a saída do valor para Number,
// pois automaticamente da forma que esta o Java-Script considerará os valores como String.

// 3. Deve fica pelo menos da seguinte forma:

// let primeiroNumero = Number (prompt("Digite um numero!"));
// let segundoNumero = Number (prompt("Digite outro numero!"));

// const soma = primeiroNumero + segundoNumero;

// console.log(soma);


//Exercícios de escrita de código
             1
const idadeUsuario = Number (prompt ("Qual a sua Idade? "));
const idadeAmigos = Number (prompt ("Qual a idade do seu melhor amigo ou amiga? "));
let resultado = idadeUsuario > idadeAmigos;
let diferenca = idadeAmigos - idadeUsuario;

console.log (" Sua idade é maior do que a do seu(a) amigo(a)? ", resultado );
console.log (" A diferença de idade entre voces é de ", diferenca);

//           
//           2
const numPar = Number (prompt ("Insira aqui um numero PAR "));
const restoDaDiv = numPar % 2;
console.log ("O resto da divisão de ", numPar, "é de", restoDaDiv);

// // Pelo que notei nunca ha um resto alem de zero em numeros pares.//

// // Caso o usuario digite numero Impar o sistema soma, e traz o Resto no Console.
             3

//
const idadeAno = Number (prompt ("Em que ano voce nasceu? "));
const idademes = Number (prompt ("Em que mês você nasceu? "));
const idadedia = Number (prompt ("Em que dia você nasceu? "));
const idadehora = Number (prompt ("Que hora você nasceu? "));

console.log ("Voce nasceu no Ano de ", idadeAno, "no mês de ", idademes, "no dia ", idadedia, "por volta das ", idadehora, "horas");
            4

const num1 = Number (prompt (" Digite o primeiro numero!"));
const num2 = Number (prompt(" Digite o segundo numero!"));

let maior = num1 > num2;
let igual = num1 === num2;
let divi = (num1 % num2) === 2;
let divi2 = (num2 % num1) === 2;


console.log ("O primeiro numero é maior que segundo?", maior);
console.log ("O primeiro numero é igual ao segundo?", igual);
console.log ("O primeiro numero é divisível pelo segundo?", divi);
console.log ("O segundo numero é divisível pelo primeiro?", divi2);

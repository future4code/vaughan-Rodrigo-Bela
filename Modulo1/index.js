// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.


//Acredito que aparecerá da seguinte maneira:

// undefined

// Null

//11

//3

// 19

//9

// 2. Leia o código abaixo com atenção.


//Resposta é: SUBI NUM ÔNIBUS EM MIRROCOS 27
// pois ha somente uma letra "A" para ser substirtuida,
// todas ficarão em maiusculas e ao final o length trará a quantidade de letras pois é uma String

 //  \/ Exercícios de escrita de código
 
 const nomeUs = (prompt ("Ola, por favor insira seu nome!"));
 const nomeEmail = (prompt ("Legal, agora me informa seu melhor E-mail!"));

 console.log (`O e-mail ${nomeEmail} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUs}!`);

const comidasFavoritas = ["Macarrão", "HotDog", "Baião de 2", "Feijoada", "Strogonoff"];
// //A//
console.log (comidasFavoritas);
// //B//
console.log (`Essas são as minhas comidas preferidas:`);
console.log (`Gosto de ${comidasFavoritas[0]}`);
console.log (`Gosto de ${comidasFavoritas[1]}`);
console.log (`Gosto de ${comidasFavoritas[2]}`);
console.log (`Gosto de ${comidasFavoritas[3]}`);
console.log (`Gosto de ${comidasFavoritas[4]}`);
// //C//
const comidaDoUs = (prompt("Qual a sua comida preferida?"));
//${comidasFavoritas.splice(1, 1)}
console.log (`Legal, então nossa lista fica assim: `);

console.log (`Gosto de ${comidasFavoritas[0]}`);
console.log (`Você gosta de ${comidaDoUs}`);
console.log (`Gosto de ${comidasFavoritas[2]}`);
console.log (`Gosto de ${comidasFavoritas[3]}`);
console.log (`Gosto de ${comidasFavoritas[4]}`);
//  3 . Faça um programa, seguindo os passos:
//A//
const listaDeTarefas = [];
//B//
const tar1 = (prompt ("Me fale uma tarefa que você precisa completar hoje"));
const tar2 = (prompt ("Me fale outra tarefa que você precisa completar"));
const tar3 = (prompt ("Me diga mais uma, prometo é a altima"));
//C//
listaDeTarefas.push(tar1);
listaDeTarefas.push(tar2);
listaDeTarefas.push(tar3);
console.log (listaDeTarefas);
//D//
const tarR = Number(prompt ("Qual dessas tarefas você ja realizou até o momento? Responda 0, 1 ou 2"));
//E//
const retirado = listaDeTarefas.splice(tarR, 1);
alert (`Ok Agora só falta você Fazer:  ${listaDeTarefas}`);
//F//

//Desafio//
//1 //
const frase = (prompt("Escreva uma frase, não muito grande Ok"));
const arrayVazio = frase.split(" ");

console.log (arrayVazio);
//2//

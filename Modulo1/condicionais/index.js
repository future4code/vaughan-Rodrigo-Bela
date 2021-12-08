// Exercícios de interpretação de código
//1.
/*
A. O codigo basicamente pede para o usuário digitar um valor, logo após digitado ele converte para numero,
   usando outra variável. ele testa se na divisão do numero por 2 haverá algum resto,
   e se caso for 0 ele  retorna a mensagem "passou no teste", caso contrário ele retorna
   "Não passou no teste".
B. Ele retorna que passou para numeros divisiveis por 2. Usando %.
C. Para numeros numeros onde a divisão por 2 deixa restos, e ele seja diferente de zero, usando ===.

2.
A. O codigo serve basicamente para que de acordo com a fruta que o usuário escolher, seja esttipulado um valor diferente,
usando o Switch para esta tomada de decisão.
B. A mensagem será: "O preço da fruta Maçã é R$2.25".
C Creio que não iria aconter nada alem de mostrar o valor da Pêra, pois se trata do ultimo break e de qualquer
forma o programa iria parar, daria problemas se o codigo continuasse com outras frutas.

3. 
A. A primeira linha cria uma variável de nome numero, onde ha um prompt pedindo para o usuário digitar um numero,
e assim ja o convertendo para number.
B. O programa mostrara no console do navegador a mensagem de que o numero passou no teste pois o numero é maior que "0",
caso fosse o numero -10 o programa daria um erro pois não ha a condição "Else".
C. Sim, o ultimo console traria um erro pois não é possivel imprimir o conteúdo de "mensagem", pois ela esta dentro da função,
e não existe uma variavel com este nome no escopo de de fora. Escopo global usa as variaveis de fora, escopo local somente no ambiente em que foi criada.
*/

// Exercícios de escrita de código

//1. 


const seuNome = Number (prompt("Qual a sua idade?"));
if (seuNome >= 18) {

    console.log("Ok você esta apto para dirigir, ja possui a idade mínima.")
} else {
    console.log("Infelismente você ainda é de menor, e não pode digirir");
}

// 2. 

const periodo = (prompt("Qual período você estuda M (Matutino), V (Vespertino) ou N (Noturno)"));
    
    const diminui = () => {
    
       const cxBaixa = periodo.toLowerCase() 
            
    return cxBaixa
 }

 const informacao = (diminui(periodo));
 

    if (informacao == "m") {
        console.log ("Bom Dia =)");
        
    }
    if (informacao == "v") {
        console.log ("Boa Tarde =)");
        
    }
    if (informacao == "n") {
        console.log ("Boa noite =)"); 
        
    }
    if (informacao != "m" || "v" || "n") {
        console.log ("A letra ou valor digitado não corresponde ao solicitado, por favor digite somente M, V, ou N!")
    }
     

// 3.


const periodoS = (prompt("Novamente, Qual período você estuda M (Matutino), V (Vespertino) ou N (Noturno)"));
        
var seuHorario = "";

const diminui = () => {
    
const cxBaixa = periodoS.toLowerCase() 
            
            return cxBaixa
        }

const informacao2 = (diminui(periodoS));
        
switch (informacao2) {

case "m": seuHorario = "Bom Dia =)";
    break;

case "v": seuHorario = "Boa Tarde =)";
    break;

case "n": seuHorario = "Boa Noite =)"; 
    break;
        
default: 
console.log ("A letra ou valor digitado não corresponde ao solicitado, por favor digite somente M, V, ou N!");
    break;
}
console.log (`Olá Aluno(a), tenha um(a) ${seuHorario}!`)
console.log (`A letra digitada foi: ${informacao2}.`)

// 4.

const generoFilme = prompt("Me diga o Genero do Filme que você gostaria de assistir!");

const valorIngresso = Number(prompt("Qual o valor do Ingresso para este filme?"));

    if (generoFilme === "fantasia") {console.log ("Legal, gosto deste Genero de filme");}
    else if (generoFilme !== "fantasia") {console.log ("Este genero não me agrada :(");}


    if (valorIngresso < 15) {console.log ("O valor do Ingresso esta ate OK.");}
    else if (valorIngresso >= 15) {console.log ("Poxa esta muito caro, estou sem grana tbm :(");}


const vcVai = () => {

    if (generoFilme === "fantasia" && valorIngresso < 15) {console.log ("Legal esta bom, Bora assistir sim.")}
    else if (generoFilme !== "fantasia" || valorIngresso >= 15) {console.log ("Desculpa não vai rolar, deixa pra proxima.")}

}
const resultado = (vcVai(generoFilme, valorIngresso));
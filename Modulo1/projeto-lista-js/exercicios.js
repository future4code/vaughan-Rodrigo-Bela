// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
 return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
const altura = Number(prompt("Insira um numero"));
const largura = Number(prompt("Insira outro numero"));
function calculaAreaRetangulo() {
  
 return altura * largura;

}
console.log (calculaAreaRetangulo());

// EXERCÍCIO 02

const anoAtual = Number(prompt('Em que ano estamos?'));
const anoNasc = Number(prompt('Em que ano você nasceu?'));
function imprimeIdade() {

 return anoAtual - anoNasc;

}
console.log (imprimeIdade(2021, 1992));

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 return peso / (altura * altura)

}
console.log (calculaIMC(85, 1.8));


// EXERCÍCIO 04
const nome = (prompt ("Ola, meu informe seu nome!"));
const idade = Number (prompt("Ola, meu informe sua idade!"));
const eMail = (prompt ("Ola, meu informe seu E-mail"));
function imprimeInformacoesUsuario() {

  return `Meu nome é, ${nome}, tenho ${idade} anos, e o meu email é ${eMail}`
};

console.log (imprimeInformacoesUsuario());

// EXERCÍCIO 05

const cor1 = prompt('Me informe uma de suas cores favoritas!');
const cor2 = prompt('Me informe outra cor que você gosta muito!');
const cor3 = prompt('Me informe mais uma, prometo que é a ultima!');

function imprimeTresCoresFavoritas() {
  
  arraay = [cor1, cor2, cor3];
  return arraay
}

console.log (imprimeTresCoresFavoritas([]));



// EXERCÍCIO 06

const frase = ('Ola, esta frase é somente para teste');
function retornaStringEmMaiuscula() {
  const fraseEmMaiu = frase.toUpperCase()
return fraseEmMaiu
}
console.log (retornaStringEmMaiuscula(frase));


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

//EXERCÍCIO 09
function retornaPrimeiroElemento() {
  const ca2 = 'sofa';
  const me2 = 'geladeira';
  const ba2 = 'guarda-roupas';
  aAArrey = [ca2, me2, ba2];
  return aAArrey

}
console.log(retornaPrimeiroElemento()[0]);

// EXERCÍCIO 10


function retornaUltimoElemento() {
  const ca1 = 'cama';
  const me1 = 'mesa';
  const ba1 = 'banho';
  aArrey = [ca1, me1, ba1];
  return aArrey
}

console.log(retornaUltimoElemento()[2]);


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
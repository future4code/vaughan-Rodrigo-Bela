/*
A. Passamos os parametros para a propriedade process.argv.
*/

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

const nome = process.argv[2];
const idade = process.argv[3];

const frase = `Olá, ${nome}! Você tem ${idade} anos.`;

if (nome && idade) {
  console.log("\033[1;33m", frase);
} else if (nome || idade) {
  console.log("\033[31mEsperava 2 parâmetros só recebi um.");
} else {
  console.log("\033[31mEsperava 2 parâmetros recebi nenhum.");
}

const novaIdade = Number(idade) + 7;

const novaFrase = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`;

if (nome && idade) {
  console.log("\033[1;33m", novaFrase);
} else if (nome || idade) {
  console.log("\033[31mEsperava 2 parâmetros só recebi um.");
} else {
  console.log("\033[31mEsperava 2 parâmetros recebi nenhum.");
}

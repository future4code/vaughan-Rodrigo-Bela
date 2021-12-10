// Exercícios de interpretação de código
/*
1. A. Acredito que como não foi passado nenhum paramentro especifico,
o console ira mostrar o proprio objeto, ou o conteúdo do objeto em arrey, apenas converter.



2. A. O console imprimira todos os itens nome, ou seja, Amanda Rangel, Laís Petra, Letícia Chijo, em formato de Array.

3. A. O console ira mostrar todos os apelidos que seja diferente de Chijo, por exemplo, ['Mandi', 'Laura'] em formato Array.

*/
// Exercícios de interpretação de código

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
//--  A.
const nomeDogs = pets.map((pets, nome) => { 
   return pets.nome
})
console.log (nomeDogs);
//--  B.

const soSalsicha = pets.filter((pets, nome, raca) => {
   return pets.raca === "Salsicha"
})
const nomeDoSalsicha = soSalsicha.map((pets, raca) => {
   return pets.nome
})
console.log (nomeDoSalsicha);

// -- C.

const selecaoDaRaca = pets.filter((pets, nome) => pets.raca === "Poodle")
const mensagem = selecaoDaRaca.map(() => {
return `Olá, Você ganhou um cupom de desconto de 10% para tosar o/a ${selecaoDaRaca}!`;
});

console.log(mensagem);

// -- 2
// -- A.

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeDosProdutos = produtos.map((produtos, nome) => {
   return produtos.nome
})
console.log (nomeDosProdutos);

// -- B.

const novoArreyProdutos = produtos.map(produtos => {
 return { nome: produtos.nome,
   preco: produtos.preco *0.95.toFixed(2)
 } 
 });
 console.log (novoArreyProdutos);

// -- C.

const apenasBebidas = produtos.filter(produtos => {
return produtos.categoria ==="Bebidas"
       
})

console.log (apenasBebidas)

// -- D.

const apenasYpe = produtos.filter(produtos => {
   return produtos.nome

})

console.log (apenasYpe.includes('Ypê'));
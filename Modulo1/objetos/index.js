/* Exercícios de interpretação de código.

//1. 
O codigo chama a posição 0 do objeto "Filme", no caso (Matheus Nachtergaele)
e trará o terceiro indice da String elenco, após ele chama o objeto "TransmissoesHoje" e o sub-objeto da posição 2.
//2.
A. 
Trará o resultado dos 3 objetos. da seguinte forma:
nome: Juca - idade: 3 raca: SRD
nome: Juba - idade: 3 raca: SRD
nome: Jubo - idade: 3 raca: SRD
B.
Os tres pontos basicamente fazem uma copia do objeto anterior, porém sem alterar as propriedades do original.
//3.

Acredito que o codigo trará 2 erros pois não foi referenciado o objeto corretanete para o resultado no console.log,
e aparentemente a função não aplica nada para ser usada.
Ele trouxe o false pois conseguiu retirar do objeto o resultado, portanto funcionando parcialmente, e não encontrou o tópico
altura dentro deste objeto, portanto ficou em branco.
*/
//--------------------------------------------------------------------------------------------------------------------------

// Exercícios de escrita de código.
//1.
const nomeApelido = {

    nome: 'Rodrigo',
    apelidos: ['Digo', 'Diguinho', 'Rodriguinho']
    }
const frase = (nomeApelido) => {
return `Olá, eu sou ${nomeApelido.nome} mas pode me chamar de ${nomeApelido.apelidos[0]}, ${nomeApelido.apelidos[1]} ou até ${nomeApelido.apelidos[2]}.`
}
 console.log (frase(nomeApelido));
const novaLista = {
    ...nomeApelido,
    apelidos: ['Digão', 'Dj', 'Capoeira']
}
console.log (frase(novaLista));

//2.

const obj1 = {

    nome: 'Rodrigo Brito',
    idade: 29,
    profissao: 'Desenvolvedor Web'
}

const obj2 = {

    nome: 'Raimundo Aparecido Brito Bela',
    idade: 59,
    profissao: 'Pedreiro'
}

const infoNoArray = (obj1, obj2) => { return [obj1.nome, obj1.nome.length, obj1.idade, obj1.profissao, obj1.profissao.length]

}

console.log (infoNoArray(obj1));
console.log (infoNoArray(obj2));
//3.

const carrinho = []

const obj3 = {

    nome: 'Morango',
    disponibilidade: true,
}
const obj4 = {

    nome: 'Melancia',
    disponibilidade: true,
}
const obj5 = {

    nome: 'Pera-Asiática',
    disponibilidade: true,
}

const func = (fruta) => {
    return  carrinho
}

console.log (carrinho(obj3))
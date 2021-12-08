//console.log ("Ola boa tarde")
/*
Exercícios de interpretação de código
    1.
O codigo trara a sequencia de numeros enquanto o resultado for < menor do que 5.
    2.
A. O codigo mostrara no console após avaliar todo o array os numeros maiores que 18, e imprimira tods.
B. O for of acredito que não seria sulficiente, pois ele analisa todo o Arrey de modo geral, seria necessário usar somente o for junto ao Array.

    3.
Precisei visualizar no Pyton Tutor pois não absorvi a logica por tras do codigo, basocamente enquanto o valor de quantidadeAtual for menor que
quntidadeTotal ele acreescenta um asteristico e considera + 1 no valor quantidadeAtual, assim apresentando ao final **** asteristicos e 4 em quantidadeTotal
e 4 em quantidadeAtual, encerrando por ai.

*/
//Exercícios de escrita de código
//1.
// A. B. C.


    const bichinhos = Number(prompt("Quantos animais de estimação você tem hoje?"));
    const array = []
            if (bichinhos === 0) {console.log ("Que pena! Mas você pode adotar um pet!");}
            else if (bichinhos !== 0) { 
                for(let i = 1; i <= bichinhos; i++){
                    array.push(prompt("Quais os nomes deles?"))
                        }
                }
                console.log ([array])
//
//2.
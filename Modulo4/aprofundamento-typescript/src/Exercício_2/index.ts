/*
Exercicio 2.
A. É feito a entrada de um numero, após este numero é ordenado e somado um para o numeno de acosdo com as posições, após é retirado as estatiscticas
com o maior gerado da lista, o menor, e o numero medio entre eles.
*/

function obterEstatisticas(numeros : number) {

    const numerosOrdenados : any = numeros.sort(
        (a : number, b : number ) => a - b
    )

    let soma : number = 0

    for (let num of numeros ) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
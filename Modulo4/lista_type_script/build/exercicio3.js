var GENERO;
(function (GENERO) {
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["TERROR"] = "terror";
    GENERO["ROMANCE"] = "romance";
})(GENERO || (GENERO = {}));
function catalogaFilme(nome, ano, genero, pontuacao) {
    const filme = {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
        pontuacao: pontuacao,
    };
    return filme;
}
console.log(catalogaFilme("As Branquelas", 2004, GENERO.COMEDIA, 70));
//# sourceMappingURL=exercicio3.js.map
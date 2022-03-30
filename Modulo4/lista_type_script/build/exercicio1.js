const nome = process.argv[2];
const data = process.argv[3];
function mostraFrase(nome, data) {
    const novaData = data.split("/");
    const texto = `Olá, me chamo ${nome}, nasci no dia ${novaData[0]} do mês de ${novaData[1]} do ano de ${novaData[2]}`;
    return texto;
}
console.log(mostraFrase(nome, data));
//# sourceMappingURL=exercicio1.js.map
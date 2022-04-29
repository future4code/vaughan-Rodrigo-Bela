enum GENERO {

    COMEDIA = "comédia",
    ACAO = "ação",
    DRAMA = "drama",
    TERROR = "terror",
    ROMANCE = "romance",
    

  }
  
  function catalogaFilme(nome: string, ano: number, genero: GENERO, pontuacao?: number) : object {
    const filme = {
      nome: nome,
      anoLancamento: ano,
      genero: genero,
      pontuacao: pontuacao,
    };
    return filme;
  }
  
  console.log(catalogaFilme("As Branquelas", 2004, GENERO.COMEDIA, 70));
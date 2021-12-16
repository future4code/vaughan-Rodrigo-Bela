```

const acrescimo = 0.30;
const valorComum = 1.00;

function calculaPrecoTotal(quantidade) {

  if(quantidade>=12) {quantidade = (valorComum * quantidade)};
  if(quantidade<12) {quantidade = (valorComum + acrescimo) * quantidade};
  
return quantidade;

}

calculaPrecoTotal();

 

```
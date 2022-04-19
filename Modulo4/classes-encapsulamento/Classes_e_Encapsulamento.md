**Exercício 1**

**A**
Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?

**B**
Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

**C**
Como conseguimos ter acesso às propriedades privadas de uma classe?

**Exercício 2**

class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }
}

**Exercício 3**,

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

}
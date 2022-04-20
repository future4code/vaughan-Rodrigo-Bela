**Herança**

**Exercício 1**
a) Seria possível imprimir a senha (password) atrelada a essa instância?
b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
**Exercício 2**
a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
**Exercício 3**
a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
**Exercício 4**
Método introduceYourself

class User {
	// demais implementações

	public interoduceYourself(): string {
	   return "Olá, bom dia!"
	}
}

Chamando o método através da classe filha

const customer = new Customer(...) // passa os parâmetros corretos
customer.introduceYourself()
**Exercício 5**

class User {
	// demais implementações

	public interoduceYourself(): string {
			return `Olá, sou ${this.name}. Bom dia!`;
	}
}

**Polimorfismo**

**Exercício 1**
a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?

const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}
**Exercício 2**
a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?

b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
**Exercício 3**
1) O que precisaríamos fazer para conseguir efetivamente criar uma instância da classe Place? (última pergunta do exercício anterior)

2) Por que a Place não é uma interface?

3) Por que a classe Place é uma Classe Abstrata?
**Exercício 4**
a) Que métodos e propriedades essa classe possui? Por quê?

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}
**Exercício 5**
a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*

b) *Quais as diferenças dessa classe com a `ResidentialClient`?*

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}

**Exercício 6**

a) *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*

b) *Que interface a `IndustrialClient` implementa? Por quê?*

c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*

class IndustrialClinet extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, // tanto faz ser string ou number
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
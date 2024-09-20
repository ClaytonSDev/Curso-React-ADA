console.log("Olá Mundo!");

interface IPessoa {
  nome: string;
  idade: number;
  altura: number;
  peso: number

}

//Classe: abstração
//Definindo a abstração de uma pessoa
class Pessoa implements IPessoa {
  //atributo: caracteristicas (variaveis)
  nome: string;
  idade: number;
  altura: number;
  peso: number;
  private _cpf:string;


  //métodos: ação (funções)

  //método construtor
  constructor({ nome, idade, altura, peso, _cpf }: { nome: string; idade: number; altura: number; peso: number; _cpf: string; }) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this._cpf = _cpf;

  }
  acordada() {
    console.log("Assistindo filme...")
  }

  dormir() {
    console.log("Dormindo...")
  }

  //accessor: getter
  get cpf() {
    return this._cpf;
  }

  // accessor: setter
  set cpf(newcpf: string) {
    if (newcpf.length !== 14) {
      throw new Error("CPF lenth is incorrect!");
    }
    this._cpf = newcpf;
 
  }

}

class Professor extends Pessoa {
  codigo: string;

  constructor(nome: string, idade: number, altura: number, peso: number, _cpf: string, codigo: string) {
    super({nome, idade, altura,peso, _cpf});
    this.codigo = codigo;
  }
  
  ensinar() {
    console.log("Ensinando...");
  }
}

const pessoa1 = new Pessoa({ nome: "Clayton", idade: 44, altura: 1.83, peso: 103, _cpf: "123.456.789-00" });
const pessoa2 = new Pessoa({ nome: "Nivea", idade: 41, altura: 1.63, peso: 115, _cpf: "321.123.231-00" });
const pessoa3 = new Pessoa({ nome: "Ana Clara", idade: 18, altura: 1.66, peso: 78, _cpf: "455.755.887-00" });

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);

console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.altura);
console.log(pessoa1.peso);
console.log(pessoa1.cpf);


console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log(pessoa2.altura);
console.log(pessoa2.peso);

console.log(pessoa2.dormir());

console.log(pessoa3.nome);
console.log(pessoa3.idade);
console.log(pessoa3.altura);
console.log(pessoa3.peso);
console.log(pessoa3.cpf);

console.log(pessoa3.acordada());

pessoa1.cpf = "100.000.000.00";
console.log(pessoa1.cpf);
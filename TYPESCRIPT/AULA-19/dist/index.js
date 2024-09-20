"use strict";
console.log("Olá Mundo!");
//Classe: abstração
//Definindo a abstração de uma pessoa
class Pessoa {
    //métodos: ação (funções)
    //método construtor
    constructor(nome, idade, altura, peso, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this._cpf = cpf;
    }
    acordada() {
        console.log("Assistindo filme...");
    }
    dormir() {
        console.log("Dormindo...");
    }
    //accessor: getter
    get cpf() {
        return this._cpf;
    }
    // accessor: setter
    set cpf(newcpf) {
        if (newcpf.length !== 14) {
            throw new Error("CPF lenth is incorrect!");
        }
        this._cpf = newcpf;
    }
}
class Professor {
}
const pessoa1 = new Pessoa("Clayton", 44, 1.83, 103, "123.456.789-00");
const pessoa2 = new Pessoa("Nivea", 41, 1.63, 115, "321.123.231-00");
const pessoa3 = new Pessoa("Ana Clara", 18, 1.66, 78, "455.755.887-00");
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

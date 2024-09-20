let numero = 20;

const pi = 3.1415;

let nome: string = "Clayton";

let correta: boolean;

let resultado = numero * pi;

const numeros: number[] = [1,2,3,4,5];


// const nomeDoUsuario = prompt("Qual é o seu nome?");

// console.log(nomeDoUsuario?.toUpperCase());

const idades: number[] = [];
idades.push(23)
idades.push(38)
idades.push(12)
idades.push(49)
idades.push(16)

const menoresDeIdade = idades.filter(idade => idade < 18);

console.log(menoresDeIdade);
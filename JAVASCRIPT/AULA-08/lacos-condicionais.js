const prompt = require('readline-sync');

// //let saldo = Number(prompt.question("Qual eh o seu saldo? "));

// //while (saldo < 0) {
// //  saldo = Number(
//  //   prompt.question("Saldo inválido! Por favor, informe novamente: ")
//  // );

// //console.log(saldo);


// let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));

// let somaDasNotas = 0;

// while (notaDoAluno >= 0) {
//   somaDasNotas = somaDasNotas + notaDoAluno


//   notaDoAluno = Number(prompt.question("Informe a próxima nota: "));
// }

// console.log(somaDasNotas);

const numeroAleatorio = parseInt(Math.random() * 10);

let numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "))

console.log(numeroAleatorio);

while (numeroAleatorio !== numeroDoUsuario) {
  console.log("Você errou o número! Tente novamente...")
  numeroDoUsuario = Number(prompt.question("Informe um número entre 0 e 10: "))
}

console.log("Parabéns! Você acertou! O Número era", numeroAleatorio);
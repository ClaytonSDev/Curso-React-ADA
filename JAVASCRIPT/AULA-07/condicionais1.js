const prompt = require('readline-sync')

const idade = Number (prompt.question('Qual eh a sua idade? '))

const ehMaiorDeIdade = idade >= 18;

//Estrutura condicional: if/else

if(ehMaiorDeIdade){
  console.log('Você eh maior de idade!');
} else {
  console.log('Você eh menor de idade!')
}

const mediaDoAluno = 7.8;

if (mediaDoAluno >= 7) {
  console.log('Aprovado');
  console.log('Parabens')
} else if (mediaDoAluno >= 5) {
  console.log('Prova final');
} else {
  console.log('Reprovado');
}

const idadePessoa = 16;
const temCnh = true;

if (idadePessoa >= 18 && temCnh) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você NÂO pode dirigir!");
}
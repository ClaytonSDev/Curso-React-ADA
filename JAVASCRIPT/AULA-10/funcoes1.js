
function saudacao(nomeDoEstudante, curso = "Front-end em React") {

  return `Olá, ${nomeDoEstudante}! Seja bem-vindo(o) ao curso de ${curso}!`;
}

const mensagemDaSaudacao = saudacao("Clayton", "Front-end em React");

console.log(mensagemDaSaudacao);

// * Exemplo 2

console.clear();

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);

console.clear();

//-------------------------------------
// FUNÇOES ANÔNIMAS


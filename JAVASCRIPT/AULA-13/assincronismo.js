const { Console } = require('console');
const fs = require('fs')

// * 1. Callbacks

console.log("ANTES DA FUNÇÃO DE LER O ARQUIVO...");

fs.readFile("AULA-13/arquivo.txt", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
  } else {
    console.log(String(conteudoDoArquivo));
  }
});

console.log("DEPOIS DA FUNÇÃO DE LER O ARQUIVO...");
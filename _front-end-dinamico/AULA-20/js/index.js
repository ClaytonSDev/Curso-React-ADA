// Selecionar elementos HTML da nossa pagina utilizando o document


// 1. Pelo nome da tag
const todosP = document.getElementsByTagName('p');

console.log(todosP);

// 2. Pelo nome da classe
const todosClassesParagragrafo = document.getElementsByClassName('paragrafo');

console.log(todosClassesParagragrafo);

// 3. Pelo name da tag
const emailInput = document.getElementsByName('email');

console.log(emailInput);

// 4. Pelo id da tag

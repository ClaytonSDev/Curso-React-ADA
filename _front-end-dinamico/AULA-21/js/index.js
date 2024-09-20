const botaoAumentar = document.querySelector('#aumentar-botao');
const botaoDiminuir = document.querySelector('#diminuir-botao');

const contadorElemento = document.querySelector("#contador");

const input = document.querySelector("#input");

botaoAumentar.addEventListener('click', (event) => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual + 1;

  botaoAumentar.classList.add('btn');
  botaoDiminuir.classList.remove('btn');
  
});

botaoDiminuir.addEventListener('click', (event) => {
  const valorAtual = Number(contadorElemento.textContent);

  contadorElemento.textContent = valorAtual - 1;
  botaoDiminuir.classList.add('btn');
  botaoAumentar.classList.remove('btn');

});

input.addEventListener('input', () => {
  console.log(input.value);

})

//Adicionando estilos inline no elemento contador

contadorElemento.style.color = "red";
contadorElemento.style.padding = "0 2rem";
contadorElemento.style.border = "1px solid #aaa";
contadorElemento.style.width = "150px";

// Manipular classes com JavaScript

//console.log(botaoDiminuir.classList);

//botaoAumentar.classList.add('btn');
//botaoDiminuir.classList.remove('btn');

const themeButton = document.querySelector("#theme");

let darkTheme;

// Definindo uma função que será executada ao carregar o conteúdo da pagina/janela
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem('isDarkTheme');

  const darkTheme = isDarkThemeStorage === "true";
  const body = document.querySelector('body');

  if (darkTheme) {body.style.backgroundColor = "black";
  body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";

  }
};


themeButton.addEventListener('click', () => {
  darkTheme = !darkTheme;

  localStorage.setItem("isDarktheme", darkTheme);

  const body = document.querySelector('body');

  if (darkTheme) {body.style.backgroundColor = "black";
  body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";

  }
});
// HIGH ORDER FUNCTIONS

// * 1. FUNÇÃO QUE RETORNA OUTRA FUNÇÃO COMO PARAMETRO

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá, ${studentName}! Seja bem-vinda(o) ao curso de ${courseName}`
    );
  };
}

const displayWelcometoFrontEndCourse = welcome("Front-end em React");
const displayWelcometoBackEndCourse = welcome("Back-end em Node.Js");

displayWelcometoFrontEndCourse("Clayton Sales");

console.clear();

// * 2. FUNÇÃO QUE RECEBE OUTRA FUNÇÃO COMO PARAMETRO

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);

const retorno = calcular(10, 5, dividir);

console.log(retorno);

// calculo

const resultado = calcular(10, 5, (num1, num2) => num1 *num2 + 2* num1 * num2);

console.log(resultado);

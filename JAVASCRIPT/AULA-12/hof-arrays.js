// array.prototype.every(): verificar se todos os elementos de um array segue uma determinada
//                          condição retornada pela função.

const numeros = [40, 34, 67, 89, 23, 10];

const todosPositivos = numeros.every((elemento) => elemento > 30);

console.log(todosPositivos);



// array.prototype.some(): verificar se todos os elementos de um array segue uma determinada
//                          condição retornada pela função.
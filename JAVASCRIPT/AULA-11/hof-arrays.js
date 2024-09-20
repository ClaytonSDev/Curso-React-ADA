// FUNÇOES DE ALTA ORDEM DE ARRAYS

// 1. Array.prototype.forEach()

const numeros = [40, 34, 67, 89, 23, 10];

numeros.forEach((item, index, arrayCompleto) => {
  console.log(index, item, arrayCompleto);
});

// 2. Array.prototype.find(): util para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero === 10;
});

console.log(encontrado);
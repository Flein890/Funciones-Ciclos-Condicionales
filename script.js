// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

//1

// const parimpar = (numero) => {
//   if (numero % 2 === 0) {
//     console.log(`El numero ${numero} es par`);
//   } else {
//     console.log(`El numero ${numero} es impar`);
//   }
// };

// parimpar(prompt("Ingrese un numero"));

//2

// function mayorMenor(numero1, numero2) {
//   if (numero1 > numero2) {
//     console.log(`El numero ${numero1} es mayor a ${numero2}`);
//   } else if (numero2 > numero1) {
//     console.log(`El numero ${numero2} es mayor a ${numero1}`);
//   } else {
//     console.log("Los numeros ingresados son iguales");
//   }
// }

// mayorMenor(3, 7);

//3

// const multiplo5 = (numero) => {
//   if (numero % 5 === 0) {
//     console.log(`${numero} es multiplo de 5`);
//   } else {
//     console.log("El numero ingresado no es multiplo de 5");
//   }
// };

// multiplo5(1);

//4

// function contador(numero) {
//   for (let i = 1; i <= numero; i++) {
//     console.log(`${i}`);
//   }
// }

// contador(prompt("Ingrese un numero"));

//5

// const palabraNumero = (string, numero) => {
//   for (let i = 0; i < numero; i++) {
//     console.log(string);
//   }
// };

// palabraNumero("Hola papu", 5);

//6

// const devuelveArray = (parametroarray) => {
//   for (let i = 0; i < parametroarray.length; i++) {
//     console.log(parametroarray[i]);
//   }
// };

// let miArray = ["Pompeya", "Messi es cierto que", "Camellonaldo", "Pep"];

// devuelveArray(miArray);

//7

// const devuelveArray = (parametroarray) => {
//   for (let i = 0; i < parametroarray.length; i++) {
//     if (i === 4) {
//       continue;
//     }
//     console.log(parametroarray[i]);
//   }
// };

// let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// devuelveArray(miArray);

//8

// function multiplicar(NumeroAMultiplicarPor, miArray) {
//   for (let i = 0; i < miArray.length; i++) {
//     console.log(miArray[i] * NumeroAMultiplicarPor);
//   }
// }

// let miArray = [5, 20, 2.3, 4, 5, 6, 7, 8, 9, 10];

// multiplicar(2, miArray);

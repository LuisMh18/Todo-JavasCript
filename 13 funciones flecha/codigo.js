"use strict";

//Funciones flecha
// - funciones compactas y el uso de this
// -  si solo hay una expresión, la retorna
const saludar = () => "¿Hola como estás"
const saludar2 = () => "¿Hola que hay de nuevo?";

let resultado = saludar();
let resultado2 = saludar2();

console.log(resultado);
console.log(resultado2);

// - Parentesis opcionales ante un solo parametro (sin parametros se requiere parentesis)
const saludar3 = texto => texto;
let resultado3 = saludar3("Este es otro saludo");

console.log(resultado3);

// - No son adecuadas para ser usadas como métodos y no pueden ser usadas como constructores

// - This contextual (No tienen propio this, sino que tomal el de la función que lo envuelve)

// - Funciones recursivas (Recursividad) - la Recursividad es cuando una función se llama así misma

// - Clausuras (o cierres)

// - Parametros por defecto (validación antigua vs actual)

// - Parametros rest (...param), siempre debe de ser el último parametro, la función lo recibe como un array
console.log("- Parametros rest (...param), siempre debe de ser el último parametro, la función lo recibe como un array");

const pruebaNum = (texto, ...num) => {
	console.log(num);
	console.log(num[0]);
	for(let indice in num){
		console.log(num[indice]);
	}
	console.log(texto);
};

pruebaNum("cadena de texto", 5,8,9,12);


const pruebaDos = (...cadena) => {
	console.log(cadena);
	console.log(cadena[0]);
	for(let indice in cadena){
		console.log(cadena[indice]);
	}
};

pruebaDos("hola","Luis",912, "no sé");


// - Operador Spread (spread operator)
console.log("- Operador Spread (spread operator)");

let arrPrueba = ["valor 1", "valor 2", "valor 3", "valor 4"];
console.log("normal");
console.log(arrPrueba);//normal
console.log("con el parametro spread");
 console.log(...arrPrueba); //con el parametro spread

// - añadir arrays a otros arrays
console.log("añadir arrays a otros arrays");
let arr1 = ["Dato 1", "Dato 2", "Dato 3", "Dato 4"];
let arr2 = ["Pera", "Uva", "Banana", "Mango"];
arr1.push(...arr2);
console.log(arr1);

//   - concatenar arrays
console.log("concatenar arrays");
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//   . como argumento rest
const sumar = (num1, num2) => {
	console.log(num1);
	console.log(num2);
	console.log(num1 + num2);
}

let arrOtro = [3,6];

sumar(...arrOtro);
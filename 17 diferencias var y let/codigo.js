"use strict";
/*


let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión 
donde se está usando.a diferencia de la palabra clave var la cual define una variable global o local 
en una función sin importar el ámbito del bloque. 


*/

console.log(`let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión 
donde se está usando.a diferencia de la palabra clave var la cual define una variable global o local 
en una función sin importar el ámbito del bloque. `);


//ejemplo --

var a = 11;
var b = 45;
var c = 8;
let d = 1;
let e = 44;

console.log("antes del if");
console.log("var a: ", a);
console.log("var b: ", b);
console.log("var c: ", c);
console.log("let d: ", d);
console.log("let e: ", e);

if(a === 11){
  var a = 67;
  let b = 90;
  c = 33;
  d = 12
  let e = 23;
  console.log("dentro del if");
  console.log("a: ", a);
  console.log("b: ", b);
  console.log("c: ", c);
  console.log("d: ", d);
  console.log("e: ", e);
}

console.log("fuera del if");
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);
console.log("d: ", d);
console.log("e: ", e);




/**Otro ejemplo : --------- */
console.log("Otro ejemplo : ---------");
var num1 = 33;
let num2 = 62;
console.log("var num1: ", num1);
console.log("let num2: ", num2);

if(num1 = 33){
  console.log("dentro del if");
  var num1 = 18;
  let num2 = 31;
  console.log("var num1: ", num1);
  console.log("let num2: ", num2);
}

console.log("fuera del if");

console.log("var num1: ", num1);
  console.log("let num2: ", num2);


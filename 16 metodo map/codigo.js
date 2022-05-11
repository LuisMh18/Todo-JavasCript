"use strict";
/*

 Cuando tenemos que trabajar con Arreglos en JavaScript, hay varias opciones disponibles con los cuales podemos iterar, 
 transformar o manipular nuestros arreglos. En esta ocasión vamos a hablar de cómo funciona "Array.prototype.map()"
 este método que podemos usar en los arreglos en JavaScript.

 El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.


¿Pero qué significa esto puesto en la practica? El método map() nos permite devolver un nuevo arreglo de datos partiendo de un arreglo, 
dicho así, no mutamos los datos del arreglo original, ahora tenemos un nuevo arreglo con los valores resultantes.

Pongamos un problema y solucionemos con el método map().
Tenemos una lista de productos que comprara un usuario y queremos obtener solamente los nombres de los productos a comprar.

Para entender un poco más el ejemplo vamos a resolverlo sin el método map(), para ello utilizaremos el método for().


*/

const products = [
    { id: "1", name: "shirt", category: "clothing" },
    { id: "2", name: "Sports Tennis", category: "accessories" },
    { id: "3", name: "Casual shoes", category: "footwear" },
    { id: "4", name: "skirt", category: "clothing" },
    { id: "5", name: "tie", category: "clothing" }
]

let nameOfProducts = [];

for (let i = 0; i < products.length; i++) {
    nameOfProducts.push(products[i].name);
}

console.log(nameOfProducts); // ["shirt","Sports Tennis","Casual shoes","skirt","tie"]
console.log("-------");

/*
 
 Ahora resolvamos el problema con el método map()
 map() recibe como parámetro una función la cual recibe 3 parámetros, el elemento actual, indice del elemento actual y el 
 arreglo original.

 arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });

*/


let nameOfProducts1 = products.map((value, index, array) => {
    // Cómo solo queremos los nombres, retornamos "name".
    return value.name;
});

console.log(nameOfProducts1); // ["shirt", "Sports Tennis", "Casual shoes", "skirt", "tie"]

console.log("-------");

//si solo vas a retorna un valor se puede simplificar más
let nameOfProducts2 = products.map((value, index, array) => value.name);

console.log(nameOfProducts2); // ["shirt", "Sports Tennis", "Casual shoes", "skirt", "tie"]

console.log("-------");



//si queremos retornar más de un valor 
let nameOfProducts3 = products.map((value, index, array) => {
    return {
        id:value.id,
        name:value.name
    }
});

console.log(nameOfProducts3);

console.log("-------");

// y puedes crear las condiciones que sean necesarias con le metodo filter o usar otros metodos de arrays como ya vimos anteriormente en metodos de arrays
let nameOfProducts4 = products.map((value, index, array) => {
    return {
          id:value.id,
          name:value.name
      };
    
}).filter(value => value.id > 3);

console.log(nameOfProducts4);

console.log("-------");

/*
  Y así se pueden crear todas las condiciones necesarias, ejemplo
  var result = tasks.reduce(function (accumulator, current) {
      return accumulator.concat(current);
  }).map(function (task) {
      return (task.duration / 60);
  }).filter(function (duration) {
      return duration >= 2;
  }).map(function (duration) {
      return duration * 25;
  }).reduce(function (accumulator, current) {
      return [(+accumulator) + (+current)];
  }).map(function (dollar_amount) {
      return '$' + dollar_amount.toFixed(2);
  })[0];
*/


console.log("----Otro ejemplo----");
//Otro ejemplo ---------
console.log("----Si queremos pasar el mismo objeto y solo agregar nuevos valores o modificar algunos----");
const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];


//Aaqui con el parametro rest (...) estamos pasando el valor del objeto y permitirnos agregar más campos, si no le pasamos los ... nos va agregar otro objeto en el mismo objeto
const newOrdersV2 = orders
.map((value) => {
  return {
    ...value,
    descripcion:"Esta es una descripción",
  };
})


console.log(newOrdersV2);
console.log('-'.repeat(50)); //para repetir 50 veces la linea en consola


console.log("----Si queremos modoficar un valor y devolver el mismo objeto----");
//devolvemos el mismo objeto pero convertimos el valor del campo total a un string y así podemos hacer las condiones necesarias
//esto sería muy util si le queremos dar formato a una fecha o algo así
const newOrdersV3 = orders
.map((value) => {
  return {
    ...value,
    total: value.total.toString() 
  };
})


console.log(newOrdersV3);
console.log('-'.repeat(50)); //para repetir 50 veces la linea en consola



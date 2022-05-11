"use strict";

console.log("Object Literar Enhacement");

const banda = 'Metallica';
const genero = 'Heavi metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

console.log("Forma anterior");

/*
const metallica = {
  banda:banda,
  genero:genero,
  canciones:canciones,
}

console.log(metallica);*/

console.log("Forma nueva");
const metallica = {banda, genero, canciones};
console.log(metallica);

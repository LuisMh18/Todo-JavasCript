"use strict";

const aprendiendoJS = {
  version:{
    nueva:'ES6',
    anterior:'ES5'
  },
  frameworksLibrerias: ['React', 'VueJS', 'AngularJs']
}

console.log(aprendiendoJS);

//Destructuring versión anterior
console.log("forma de hacerlo en la versión anterior");
/*let version = aprendiendoJS.version.nueva;
console.log("version");
console.log(version);
let frameworksLibrerias = aprendiendoJS.frameworksLibrerias[1];
console.log("frameworksLibrerias");
console.log(frameworksLibrerias);*/

//Destructuring forma nueva
console.log("forma nueva");
/*
 * lo que se pone entre {} son las variables que se crean, pero en si no son
 * los valores del objeto, el objeto es el que va despues del = es decir de
 * dónde lo vamos a extraer (el objeto)
 * pero se le tiene que pasar el mismo nombre que sea de las propiedades del
 * objeto porque Destructuring tiene que saber a dónde ir
*/
let {version, frameworksLibrerias} = aprendiendoJS;
console.log("version");
console.log(version);
console.log("frameworksLibrerias");
console.log(frameworksLibrerias);

//ejemplo para acceder a las propiedades
let {nueva} = aprendiendoJS.version;
console.log("nueva");
console.log(nueva);
let {anterior} = aprendiendoJS.version;
console.log("anterior");
console.log(anterior);
/*let {frameworksLibrerias} = aprendiendoJS;
console.log("frameworksLibrerias");
console.log(frameworksLibrerias[0]);*/
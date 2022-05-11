//Modo Estricto "use strict"
// - convierte errores de JavaScript en excepciones
// - obliga al programador a escribir código de forma correcta
// - Mejorando la optimización de los errores y consigue mejores tiempos de ejecución
// - Evita la sintaxis usadas en posteriores a ES6
// - No permite que el programador realize una "mala sintaxis"
/*Tenemos dos dormas de usar el modos estricto, en las funciones y en el scope global*/
/* - Tipos de errores que no se pueden usar con el modos estricto
 * - Variables declaradas
 * - Modificar propiedades (defineproperty y writeable)
 * - Agregar propiedades
 * - No se puede agregar propiedades a un String
 * - No existen las multiples variables en una función
 * - Delete en objetos o variables
 * - Las palabeas reservadas no pueden ser usadas como variables
 * - Cambia el this
 * - Número Octales con una "o" adelante y no existe with
 * - Arguments y Eval no pusen ser variables
*/

"use strict"; //scope global


//nombre = "Luis"; //esto marca error en el modo estricto porque la variable no esta declarada
let nombre = "Luis";

console.log(nombre);
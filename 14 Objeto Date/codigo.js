"use strict";

//Objeto Date

const fecha = new Date();
console.log(fecha);

// - getDate()
console.log(fecha.getDate()); //devuelve el día

// - getDay()
console.log(fecha.getDay()); //devuelve el indice del día de la semana
/*
  * Domingo -> 0
  * Lunes -> 1
  * Martes -> 2
  * Miercoles -> 3
  * Jueves -> 4
  * Viernes -> 5
  * Sabado -> 6
*/

// - getMonth()
console.log(fecha.getMonth());//devuelve el indice del més en el que estamos, igual se empieza en el 0

// - getYear()
console.log(fecha.getYear()); //devuelve el año actual menos 1900
// 2021 - 1900 = 121
console.log(fecha.getYear()+1900);
// - getHours()
console.log(fecha.getHours()); //devuelve la hora

// - getMinutes()
console.log(fecha.getMinutes()); //devuelve los minutos

// - getSeconds()
console.log(fecha.getSeconds()); //devuelve los segundos




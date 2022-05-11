"use strict";

//localStorage y sessionStorage

// - diferencias 
  /* - sessionStorage -> mientras esta la sesión(la sesión actual), si actualizamos la pagina o cerramos la pagina la información se pierde
   * - localStorage -> almacenamiento local
  */
// - setItem()
localStorage.setItem("nombre", "Luis");
sessionStorage.setItem("nombreOtro", "Ángel");
// - getItem()
console.log(localStorage.getItem("nombre"));
console.log(sessionStorage.getItem("nombreOtro"));
// - removeItem()
/*setTimeout(()=> {
  localStorage.removeItem("nombre");
  sessionStorage.removeItem("nombreOtro");
  console.log(localStorage.getItem("nombre"));
  console.log(sessionStorage.getItem("nombreOtro"));
}, 2000);*/
// - clear() - limpia todo
//sessionStorage.clear();
//localStorage.clear();
setTimeout(()=> {
  sessionStorage.clear();
  localStorage.clear();
  console.log(localStorage.getItem("nombre"));
  console.log(sessionStorage.getItem("nombreOtro"));
}, 2000);




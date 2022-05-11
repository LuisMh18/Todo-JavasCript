console.log("Eventos");

//Funciona pero no es la forma correcta
document.querySelector(".button").onclick = () => {
    alert("También me aprestaste");
};

//la forma correcta es agregarle un evento a la clase

//dee sta forma no acepta funciones flecha ni parametros
/*el primer parametro es el evento y el segundo es la función*/
document.querySelector(".button2").addEventListener("click", saludar);

function saludar(){
    alert("Este es un saludo");
}


//Forma correcta
console.log("Forma correcta");
document.querySelector(".button3").addEventListener("click", () => {
    alert("Boton que escucha un evento de la forma correcta");
});


console.log("Otro ejemplo");
const button4 = document.querySelector(".button4");

button4.addEventListener("click", (event) => {
    alert("Boton que escucha un evento de la forma correcta 2");
    console.log("obtener el elemento, se hace mediante el objeto event, se le puede pasar cualquier nombre como parametro no tiene que ser afuerzas event");
    //así se obtiene el elemnto
    console.log(event.target);
    console.log("para ver todas sus proiedades solo es con event");
    console.log(event);
    //console.log(button4.value);
    console.log(event.target.value);
    //console.log(button4.getAttribute("data-id"));
    console.log(event.target.getAttribute("data-id"));
    console.log(event.target.className);
    console.log(event.target.textContent);
});

//Remover evento - solo se puede de la siguiente forma
const button5 = document.querySelector(".button5");

button5.addEventListener("click", saludar2);

function saludar2(){
    alert("saludar2 y se remueve el evento");
    button5.removeEventListener("click", saludar2);
}

console.log("Eventos del Mouse");
console.log(" *click - ocurre con un click");
console.log(" *dbclick - ocurre con doble click");
console.log(" *mouseover - ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos");
console.log(" *mouseout - ocurre cuando se muele el puntero duera de un elemento o de sus hijos secundarios");
console.log("--- Otros ---");
console.log(" *contextmenu - ocurre con un click en el botón derecho en un elemento para abrir un menú contextual");
console.log(" *mouseenter - ocurre cuando el puntero se mueve sobre un elemento");
console.log(" *mouseleave - ocurre cuando el puntero se mueve fuera de un elemento");
console.log(" *mousedown - ocurre cuando un usuario apreta un botón del mouse sobre un elemento");
console.log(" *mouseup - ocurre cuando un usuario suelta un botón del mouse sobre un elemento");
console.log(" *mousemove - ocurre cuando el puntero se mueve mientras está sobre un elemento");

console.log("Eventos de la interfaz");
console.log(" *error - ocurre cuando sucede un error durante la carga de un archivo multimedia");
console.log(" *load - ocurre cuando un objeto se ha cargado");
console.log(" *beforeunload - ocurre antes de que el documento esté a punto de descargarse");
console.log(" *unload - ocurre una vez que se ha descargado una página");
console.log(" *resize - ocurre cuando se cambia el tamaño de la vista del documento");
console.log(" *scroll - ocurre cuando se desplaza la barra de desplazamiento de un elemento");
console.log(" *select - ocurre después de que el usuario selecciona algún texto de <input> o <textarea>");



console.log("Timers (Temporizadores)");
console.log(" *setTimeout()");

setTimeout(()=>{
    console.log("Hola");
}, 2000);

//otra forma pasando una función
const saludo = ()=>{
    console.log("Como estás?");
};

setTimeout(saludo, 3000);

console.log(" *clearTimeout()");
clearTimeout(saludo);

console.log(" *setInterval()");
//para el interval es igual ----
const interval = setInterval(()=>{
    console.log("Otro saludo que se ejecuta cada dos segundos");
}, 2000);

console.log(" *clearInterval()");
clearInterval(interval); //limpiar interval


const interval2 = setInterval(()=>{
    console.log("Otro saludo que se ejecuta cada segundo");
}, 1000);

console.log(" *clearInterval()");
setTimeout(()=>{
    clearInterval(interval2); //limpiar interval despues de 5 segundos
}, 5000);


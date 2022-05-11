console.log("Document - Metodos de selección de elementos");

console.log(" - document.getElementById() - selecciona un elemento por ID");
var parrafo = document.getElementById("parrafo");
console.log(parrafo);

console.log(" - document.getElementsByTagName() - selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada");
var lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
console.log(" - querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores");
var parrafo2 = document.querySelector(".parrafo2");
console.log(parrafo2);

console.log("El document.getElementById() es más óptimo cuando se trata de seleccionar por ID");
var parrafo3 = document.querySelector("#parrafo3");
console.log(parrafo3);

console.log(" - querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado de selectores");
var lista = document.querySelectorAll(".lista");
console.log(lista);
console.log(lista[0]);


console.log("Metodos para definir, obtener y eliminar atributos");
console.log("setAttribute() - Modifica el valor de un atributo");
var inputNumber  = document.querySelector(".input").setAttribute("type", "number");
//así le dejarimos al atributo sin valor
//var inputNumber  = document.querySelector(".input").setAttribute("type", "");
console.log("getAttribute() - Obtiene el valor de un atributo");
var valordelAtributo  = document.querySelector(".input").getAttribute("type");
console.log(valordelAtributo);
console.log("removeAttribute() - Remueve el valor de un atributo");
var removerAtributo  = document.querySelector(".input").removeAttribute("type");
console.log(removerAtributo);


console.log("Atributos globales");
console.log(" - class - lista de clases del elemento separadas por espacios");
console.log(" - contentEditable - indica si el elemento puede ser modificable por el usuario (bool)");
var textoeditable = document.getElementById("tituloeditable").setAttribute("contentEditable", true);
var textonoeditable = document.getElementById("titulonoeditable").setAttribute("contentEditable", false);
console.log(" - dir - indica la direccionalidad del texto");
console.log(" - hidden - indica si el elemento aún no es, o ya no es, relevante");
document.getElementById("botonOculto").setAttribute("hidden", true);
//la única forma de mostrar el botón es eliminado el atributo suponiendo que tiene la propiedad hidden
document.getElementById("botonVisible").removeAttribute("hidden");
console.log(" - id - define un identificador único");
console.log(" - style - contiene declaraciones de estilo css para ser aplicadas al elemento");
console.log(" - tabindex - indica si el elemento puede obtener un focus de input");
console.log(" - title - contiene un texto con información relacionada al elemento al que pertenece.");
document.querySelector(".enlacecontitulo").setAttribute("title", "Este enlace tiene un titulo");


console.log("Atributos de Inputs");
console.log(" - className");
var inputNormal = document.querySelector(".input-normal").className;
console.log(inputNormal);
console.log(" - value");
var inputNormal2 = document.querySelector(".input-normal2").value;
console.log(inputNormal2);
console.log(" - type");
document.querySelector(".input-normal3").type = "number";
console.log(" - accept");
document.querySelector(".input-normal4").accept = "image/png";
console.log(" - form");
console.log(" - minlength");
console.log(" - placeholder");
console.log(" - required");



console.log("Atributo Style");
console.log(" - usos y ejemplos");
console.log(" - propiedades Camel Case");
document.querySelector(".textoMoidicar").style.color = "red";
document.querySelector(".textoMoidicar").style.background = "#48e";
document.querySelector(".textoMoidicar").style.fontSize = "40px";

console.log("Clases, classList y Metodos de classList");
console.log(" - Definición y usos");
console.log(" - add() - añade una clase");
document.querySelector(".textoModificar").classList.add("colorAmarilo");
console.log(" - remove() - remueve una clase");
document.querySelector(".textoModificar").classList.remove("grande");
console.log(" - item() - devuelve la clase del indice especificado");
console.log(document.querySelector(".textoModificar").classList.item(1));
console.log(" - contains() - verifica si ese elemento posee o no, la clase especificada, devuelve true si la tiene y false si no la tiene");
console.log(document.querySelector(".textoModificar").classList.contains("colorAmarilo"));
console.log(document.querySelector(".textoModificar").classList.contains("grande"));
console.log(" - toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina");
document.querySelector(".textoModificar").classList.toggle("grande");
/*
 * tiene un parametro opcional, true y false
 * si le pasamos true siempre la av agregar - document.querySelector(".textoModificar").classList.toggle("grande", true);
 * si le pasamos false siempre la va eliminar - document.querySelector(".textoModificar").classList.toggle("grande", false);
*/
console.log(" - replace() - reemplaza una clase por otra");
document.querySelector(".textoModificar").classList.replace("grande", "masGrande");


console.log("Obtención y modificación de elementos");
console.log(" - textContent - devuelve el texto de cualquier nodo.");
var otroTexto = document.querySelector(".otroTexto");
var resultado = otroTexto.textContent;
console.log(resultado);
console.log(" - innerHTML - devuelve el contenido html de un elemento.");
var resultado2 = otroTexto.innerHTML;
console.log(resultado2);
console.log(" - outerHTML - devuelve el código HTML completo del elemento.");
var resultado3 = otroTexto.outerHTML;
console.log(resultado3);

console.log("Creación de elementos");
console.log(" - createElements()");
console.log(" - createTextNode()");
console.log(" - createDocumentFragment()");


let tituloContenedor = "Titulo del contenedor :v";
let subtituloContenedor = "SubtituloContenedor del contenedor";
let textoContenedor = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
document.getElementById("contenedor").innerHTML = `
	<h1>${tituloContenedor}</h1>	
    <h2>${subtituloContenedor}</h2>  
	<p>${textoContenedor}</p>
`;


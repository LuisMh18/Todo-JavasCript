console.log("Promesas");
console.log(" - Concepto: Una Promise es un objeto que representa la terminación o el fracaso de una operación asíncrona.");


console.log(" - Ejemplos y solución al problema de los callbacks");

let nombre = "Pedro";

const promesa = new Promise((resolve, reject) =>{
    if(nombre !== "Pedro") reject("Lo siento, el nombre no es pedro");
    else resolve(nombre);
});

console.log(promesa);

//then es un metodo que tienen las promesas que nos accede al valor que tiene resolve
promesa.then((resultado) => {
    console.log(resultado);
}).catch((e) => { //cacha el error si es que existe
    console.log(e);
});
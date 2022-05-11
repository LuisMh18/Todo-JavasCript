console.log("Callbacks");
console.log(" - Concepto (Function in function) - Es una función dentro de otra función");
console.log(" - Ejemplos");

function prueba(cb){
    cb("Luis");
}

prueba((nombre) => {
    console.log(nombre);
});

console.log(" - Problemas de los callbacks");
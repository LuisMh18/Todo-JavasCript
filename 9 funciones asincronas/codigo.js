console.log("Funciones asíncronas (Operador Async)");
console.log("Las funciones asíncronas trabajan en tiempo real, las promesas también son asíncronas");
console.log("Es decir esperan a recibir la información y cuando la reciben ejecutan esta opción");
console.log(" - Usos");

const objeto = {
    propiedad1:"Valor1",
    propiedad2:"Valor2",
    propiedad3:"Valor3",
    propiedad4:"Valor4",
}


//Forma de hacerlo con promesas ----

const obtenerInformacion = () => {
    //console.log(objeto);
    return new Promise((resolve, reyect) => {
        setTimeout(() =>{
            resolve(objeto);
        }, 3000);
    });
};


obtenerInformacion().then(resultado =>{
    console.log(resultado);
});

console.log(" - Operador Await");

//Forma de hacerlo con async - await
const mostrarResultado = async () => {
    resultado = await obtenerInformacion();
    console.log(resultado);
};

mostrarResultado();

console.log(" - Await básicamente accede al valor que retorna la promesa");

console.log("otro ejemplo --- ");
const obtenerInformacion2 = (text) => {
    //console.log(objeto);
    return new Promise((resolve, reyect) => {
        setTimeout(() =>{
            resolve(text);
        }, 3000);
    });
};

const mostrarResultado2 = async () => {
    data1 = await obtenerInformacion2("1: Luis"); //hasta que no termine este pasa al siguiente
    console.log(data1);
    data2 = await obtenerInformacion2("2: Gaby");//hasta que no termine este pasa al siguiente y así con todos, para que se ejecute el siguiente tiene que terminar el que se esta ejecutando actual
    console.log(data2);
    data3 = await obtenerInformacion2("3: Diana");
    console.log(data3);
    data3 = await obtenerInformacion2("4: Vianney");
    console.log(data3);
    data3 = await obtenerInformacion2("5: Jesus");
    console.log(data3);
};

mostrarResultado2();
"use strict";

let funcion2 = () =>{
    return "Hola";
};

let sumar = (num1, num2, num3) =>{
    let resultado = parseInt(num1) + parseInt(num2) + parseInt(num3);
    return resultado;
};


let obtenerFruta = (fruta) =>{
    let frutaMensaje = "";
    switch (fruta) {
      case 'Naranjas':
        frutaMensaje = `La fruta preferida de Luis son los ${fruta}`;
        break;
      case 'Manzanas':
        frutaMensaje = `La fruta preferida de Luis son los ${fruta}`;
        break;
      case 'Platanos':
        frutaMensaje = `La fruta preferida de Luis son los ${fruta}`;
        break;
      case 'Cerezas':
        frutaMensaje = `La fruta preferida de Luis son los ${fruta}`;
        break;
      case 'Papayas':
        frutaMensaje = `La fruta preferida de Luis son los ${fruta}`;
        break;
      default:
        console.log('No se encunetra la fruta preferida de Luis ');
    }

    return frutaMensaje;
};


let armarPlantillaYretornarArray = () =>{

    let data = {};

    data["error"] = false;
    data["msj"] = "Todo salio bien";


    let objeto = [
            {
                id:1,
                nombre:"Luis",
                edad:28,
                comentario: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            },{
                id:2,
                nombre:"Gaby",
                edad:19,
                comentario: "Lorem scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            },{
                id:3,
                nombre:"Vianney",
                edad:20,
                comentario: "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            },{
                id:4,
                nombre:"Pedro",
                edad:33,
                comentario: "An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            },{
                id:5,
                nombre:"Ángel",
                edad:28,
                comentario: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            },{
                id:6,
                nombre:"Gerardo",
                edad:39,
                comentario: "Lorem scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            },{
                id:7,
                nombre:"Azul",
                edad:20,
                comentario: "1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            },
            {
                id:8,
                nombre:"Juan",
                edad:37,
                comentario: "An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            },
    ];

    let obtenerIds = [];
    let plantilla = "";

    for(let value in objeto){
        //console.log("indice: ", value);
        //console.log("propiedad: ", objeto[value]);
        let nombre = objeto[value].nombre;
        let edad = objeto[value].edad;
        let comentario = objeto[value].comentario;
        plantilla += `<div class="div">
                        <h1>Nombre: ${nombre}</h1>
                        <h2>Edad: ${edad}</h2>
                        <h1>Comentarios: ${comentario}</h1>
        </div><br>`;
        obtenerIds.push(objeto[value].id)
    }

    data["plantilla"] = plantilla;
    data["ids"] = obtenerIds;

    return data;
};




let funcion1 = () =>{
    console.log("Función 1 que llama a otras funciones");
    let hola = funcion2();
    console.log(hola);
    console.log("Código que se ejecuta despues de la función 2");
    let suma = sumar(4,56,12);
    console.log("la suma es: ", suma);
    console.log("Código que se ejecuta despues de la función 3");
    let obtenerFrutaPreferida = obtenerFruta("Platanos");
    console.log("la fruta preferida de Luis es: ", obtenerFrutaPreferida);
    console.log("Código que se ejecuta despues de la función 4");
    let datos = armarPlantillaYretornarArray();
    console.log("datos");
    console.log(datos);
    console.log("Mensaje: ",datos.msj);
    console.log("Error: ",datos.error);
    console.log("Ids: ",datos.ids);
    document.querySelector(".contenedor").innerHTML = datos.plantilla;
    console.log("Código que se ejecuta despues de la función 5");
    datos.ids.forEach(value => console.log("id: ", value));
};

funcion1();



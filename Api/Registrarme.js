import {post,ValidarNombre} from "./Metodos/Registrarse/index.js" //Se importa el metodo post del archivo barril

const formu = document.querySelector(".registrarme") //Se selecciona el formulario 
const nombre = document.querySelector("#nombre") //Se selecciona el input con el id nombre 
const componente = document.querySelector(".componente") //Se selecciona el div que tiene los labels y inputs


formu.addEventListener("submit", (e) =>   post(e,formu)) //Se le añade el evento al formulario que cuando se envie se ejecute la funcion 


//Se realiza las validaciones con el evento keypress que es un evento que funciona cuando se presiona una tecla que produce un caracter imprimible 
formu.addEventListener("keypress",(e) => ValidarNombre(e,nombre,componente)) 



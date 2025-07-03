import {post} from "./Metodos/Registrarse/index.js" //Se importa el metodo post del archivo barril

const formu = document.querySelector(".registrarme") //Se selecciona el formulario 

formu.addEventListener("submit", (e) =>   post(e,formu)) //Se le añade el evento al formulario que cuando se envie se ejecute la funcion 




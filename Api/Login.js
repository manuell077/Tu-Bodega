import {post} from "./Metodos/Login/index.js" //Se importa del metodo post

const formu = document.querySelector(".login"); //Se seleccionana el formulario 



formu.addEventListener("submit",(e) => post(e,formu)) //Le agregamos un evento que cuando se envie ejecute una funcion 
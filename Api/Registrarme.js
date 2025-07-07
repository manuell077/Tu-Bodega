import {post,ValidarVacios} from "./Metodos/Registrarse/index.js" //Se importa el metodo post del archivo barril

const formu = document.querySelector(".registrarme") //Se selecciona el formulario 
const nombre = document.querySelector("#nombre") //Se selecciona el input con el id nombre 
const password = document.querySelector("#contrasena") //Se selecciona el input con el id de contraseña
const Repeatpassword = document.querySelector("#repetirContrasena") //Se selecciona el input con el id de Repetir contraseña
const correo =  document.querySelector("#correoElectronico") //Se selecciona el input con el id de correo
const telefono = document.querySelector("#telefono") //Se selecciona el input con el id del telefono
const cedula = document.querySelector("#cedula") //Se selecciona el input con el id de la cedula
const direccion = document.querySelector("#direccion") //Se selecciona el input con el id de la cedula

formu.addEventListener("submit", (e) =>   post(e,formu)) //Se le añade el evento al formulario que cuando se envie se ejecute la funcion 


//Se realiza las validaciones con el evento keyup que es un evento que se activa cuando el usuario suelta una tecla 

//Validaciones para saber si los campos estan vacios 
nombre.addEventListener("keyup",ValidarVacios) 



//Evento de desenfoque que es cuando se quite el foco de este campo entonces borre el mensaje de error
// nombre.addEventListener("blur",EliminarErrores)


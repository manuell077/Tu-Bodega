import {post,Validar, ValidarLetras,ValidarEspacios, ValidarPassword, ValidarRepeticion, ValidarCorreo, ValidarNumeros, ValidarDireccion} from "./Metodos/Registrarse/index.js" //Se importa el metodo post del archivo barril

const formu = document.querySelector(".registrarme") //Se selecciona el formulario 
const nombre = document.querySelector("#nombre") //Se selecciona el input con el id nombre 
const password = document.querySelector("#contrasena") //Se selecciona el input con el id de contraseña
const Repeatpassword = document.querySelector("#repetirContrasena") //Se selecciona el input con el id de Repetir contraseña
const correo =  document.querySelector("#correoElectronico") //Se selecciona el input con el id de correo
const telefono = document.querySelector("#telefono") //Se selecciona el input con el id del telefono
const cedula = document.querySelector("#cedula") //Se selecciona el input con el id de la cedula
const direccion = document.querySelector("#direccion") //Se selecciona el input con el id de la cedula




nombre.addEventListener("keyup",(e)=>{
    ValidarLetras(nombre)
    ValidarEspacios(nombre)
})

password.addEventListener("keyup",(e)=>{
    ValidarPassword(password)
    ValidarEspacios(password)
})

Repeatpassword.addEventListener("keyup",(e)=>{
    ValidarRepeticion(Repeatpassword,password)
    ValidarEspacios(Repeatpassword)
})


correo.addEventListener("keyup",(e)=>{
    ValidarCorreo(correo)
    ValidarEspacios(correo)
})

telefono.addEventListener("keyup",(e)=>{
    ValidarNumeros(telefono)
    ValidarEspacios(telefono)
})

cedula.addEventListener("keyup",(e)=>{
    ValidarNumeros(cedula)
    ValidarEspacios(cedula)
})

direccion.addEventListener("keyup",(e)=>{
    ValidarDireccion(direccion)
    ValidarEspacios(direccion)
})



formu.addEventListener("submit", (e) =>  {
            
    Validar(e)

}) 





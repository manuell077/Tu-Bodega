import {post} from "./Metodos/Registrarse/index.js" //Se importa el metodo post del archivo barril
import {ValidarRegistro, ValidarLetras,ValidarEspacios, ValidarPassword, ValidarRepeticion, ValidarCorreo, ValidarNumeros, ValidarDireccion,ValidarCedula} from "./Metodos/Validacion/index.js"

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
    ValidarRepeticion(Repeatpassword,password.value)
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
    ValidarCedula(cedula)
    ValidarEspacios(cedula)
})

direccion.addEventListener("keyup",(e)=>{
    ValidarDireccion(direccion)
    ValidarEspacios(direccion)
})



formu.addEventListener("submit", (e) =>  {
            
  let objeto =   ValidarRegistro(e)
    
  if(objeto != false){
    objeto["fkRol"] = 2 

    post(e,objeto)

  }else{
    alert("❌Tienes que completar todos los campos correctamente")
  }
  

}) 





import {post} from "./Metodos/Login/index.js" //Se importa del metodo post

import {ValidarEspacios,ValidarCedula,ValidarPassword, ValidarLogin} from "./Metodos/Validacion/index.js"

const formu = document.querySelector(".login"); //Se seleccionana el formulario 
const cedula = document.querySelector("#cedula")
const password = document.querySelector("#password")

cedula.addEventListener("keyup",(e)=>{ 
    ValidarEspacios(cedula)
    ValidarCedula(cedula)
})
password.addEventListener("keyup",(e)=>{ 
    ValidarEspacios(password)
    ValidarPassword(password)
})

formu.addEventListener("submit",(e)=>{

    let obejto = ValidarLogin(e)

    if(obejto != false ){
      
        post(e,data)
    }else{
         alert("❌Completa los campos correctamente")
    }
})




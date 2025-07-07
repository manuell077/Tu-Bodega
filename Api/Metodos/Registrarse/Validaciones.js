export function ValidarNombre(e,input,div) {
        
      if(!input.value){ //Si no tiene ningun valor se crea un mensaje de error 
        
        let error = document.createElement("span") 
        error.classList.add("mensajeError")
        error.textContent = "El campo nombre debe  completarse" 
        div.insertAdjacentElement("afterend",error)  //Se inserta debajo del input
        div.classList.add("componente--sinMargin")

        
        
        
      }
      



}
export function ValidarVacios(e) {
        
      if(!e.target.value.trim()){ //Si no tiene ningun valor se crea un mensaje de error 
        
        
        
        let error = document.createElement("span") 
        error.classList.add("mensajeError")
        error.textContent = `El campo ${e.target.name} debe  completarse` 
        e.target.insertAdjacentElement("afterend",error)  //Se inserta debajo del input 
      }else{
        if(e.target.nextSibling){
          e.target.nextSibling.remove()
        }
      }
}






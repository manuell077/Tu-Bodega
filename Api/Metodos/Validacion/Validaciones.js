export function ValidarRegistro(e) {
         
    let data = {};
    e.preventDefault();

    const campos = [...e.target].filter((elemento) =>{
          
          return elemento.hasAttribute('required')
    })
    let password = ""
    campos.forEach(campo =>{
        
        
        switch(campo.name){
          
          case "nombre":
            
          if(campo.value){
           if(ValidarLetras(campo)){
             let nombreCampo = campo.getAttribute('name')
             data[nombreCampo] = campo.value
             
           }
          }
           break;

          case "password":
            if(campo.value){
               if(ValidarPassword(campo)){
                let nombreCampo = campo.getAttribute('name')
                data[nombreCampo] = campo.value
                password = campo.value;
                
               }
            }
          break;

          case "repeatPassword":
            if(campo.value){
               
               if(ValidarRepeticion(campo,password)){
                let nombreCampo = campo.getAttribute('name')
                data[nombreCampo] = campo.value
                
               }
            }
          break;

          case "correo_electronico":
            if(campo.value){
               if(ValidarCorreo(campo)){
                let nombreCampo = campo.getAttribute('name')
                data[nombreCampo] = campo.value
               
               }
            }

            break;

            case "telefono":
            if(campo.value){
               if(ValidarNumeros(campo)){
                let nombreCampo = campo.getAttribute('name')
                data[nombreCampo] = campo.value
                
               }
            }
                          
            break;

            case "cedula":
           
            if(campo.value){
               if(ValidarCedula(campo)){
                let nombreCampo = campo.getAttribute('name')
                data[nombreCampo] = campo.value
                
               }
            }
            break;

            case "direccion":

            if(campo.value){
               if(ValidarDireccion(campo)){
                let nombreCampo = campo.getAttribute('name')
                data[nombreCampo] = campo.value
                
               }
            }
            break;
        }
    })
    const cantidadObjeto = Object.keys(data).length
    const cantidadCampos =  ContarCampos(e.target)
    

  if(cantidadCampos === cantidadObjeto){  
    delete  data["repeatPassword"]
  return data;
  }else{
    return false
    
  }
}

export function ValidarEspacios(elemento){
  if(!elemento.value){
       if(elemento.nextSibling){
          elemento.nextSibling.remove()
       }
        let error = document.createElement("span") 
        error.classList.add("mensajeError")
        error.textContent = `⛔Este campo debe completarse` 
        elemento.insertAdjacentElement("afterend",error)  //Se inserta debajo del input
        return false
      }else{
        return true
      }
}

export function ValidarLetras(elemento){
     
    const letras = /^[a-zA-Z]+$/ 
    if(!letras.test(elemento.value)){ 
        if(elemento.nextSibling){
        elemento.nextSibling.remove()
        }
        let error = document.createElement("span") 
        error.classList.add("mensajeError","mensajeError--nombre")
        error.textContent = "❌El campo nombre debe tener solo letras" 
        elemento.insertAdjacentElement("afterend",error)  //Se inserta debajo del input  
        return false;
    }else{ 
       
      if(elemento.nextSibling){
        elemento.nextSibling.remove()
      }
      return true;
    }
}

export function ValidarPassword(elemento){
     
     const password = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/

     if(!password.test(elemento.value)){
         
        if(elemento.nextSibling){
           
          elemento.nextSibling.remove()
        }  
        let error = document.createElement("span") 
        error.classList.add("mensajeError","mensajeError--password")
        error.textContent = "❌El campo contraseña debe tener 6 caracteres al menos una letra  y un numero" 
        elemento.insertAdjacentElement("afterend",error)  //Se inserta debajo del input       
         return false;
     }else{
         
      if(elemento.nextSibling){
        elemento.nextSibling.remove()
      }
      return true;
     }
}

export function ValidarRepeticion(elemento,password){
         

        if(elemento.value != password){
        if(elemento.nextSibling){
           
          elemento.nextSibling.remove()
        }
        let error = document.createElement("span") 
        error.classList.add("mensajeError","mensajeError--Repeatpassword")
        error.textContent = "❌Las contraseñas no coinciden" 
        elemento.insertAdjacentElement("afterend",error)  //Se inserta debajo del input 
        return false
      }else{
        
      if(elemento.nextSibling){
        elemento.nextSibling.remove()
      }

      return true;
      }

}

export function ValidarCorreo(elemento){
     
  const correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if(!correo.test(elemento.value)){
     if(elemento.nextSibling){
           
          elemento.nextSibling.remove()
        }

        let error = document.createElement("span") 
        error.classList.add("mensajeError","mensajeError--correo")
        error.textContent = "❌Ingresa un correo valido" 
        elemento.insertAdjacentElement("afterend",error) 

    return false;

  }else{
     
    if(elemento.nextSibling){
        elemento.nextSibling.remove()
    }
    return true;

  }

}

export function ValidarCedula(elemento){
    
  const numero = /^[0-9]{7,12}$/


  if(!numero.test(elemento.value)){
        if(elemento.nextSibling){
           
          elemento.nextSibling.remove()
        }
        
        let error = document.createElement("span") 
        error.classList.add("mensajeError","mensajeError--telefono")
        error.textContent = "❌Ingresa una cedula valida" 
        elemento.insertAdjacentElement("afterend",error)
   
        return false
  }else{
     
    if(elemento.nextSibling){
      elemento.nextSibling.remove()
    }
    return true

  }
   
}
export function ValidarNumeros(elemento){
    
  const numero = /^[0-9]{10}$/


  if(!numero.test(elemento.value)){
        if(elemento.nextSibling){
           
          elemento.nextSibling.remove()
        }
        
        let error = document.createElement("span") 
        error.classList.add("mensajeError","mensajeError--telefono")
        error.textContent = "❌Ingresa un telefono valido" 
        elemento.insertAdjacentElement("afterend",error)
   
        return false
  }else{
     
    if(elemento.nextSibling){
      elemento.nextSibling.remove()
    }
    return true

  }
   

}


export function ValidarDireccion(elemento){

  const direccion = /^[\w\s#\-]+$/
  
  if(!direccion.test(elemento.value)){
      
     if(elemento.nextSibling){
           
          elemento.nextSibling.remove()
    }
        let error = document.createElement("span") 
        error.classList.add("mensajeError","mensajeError--direccion")
        error.textContent = "❌Ingresa una direccion valida" 
        elemento.insertAdjacentElement("afterend",error)
    
        return false
  }else{
    if(elemento.nextSibling){
      elemento.nextSibling.remove()
    }
   
    return true
  }

}

export  function ContarCampos(formulario){

  

   const camposRequeridos= [...formulario].filter((campo)=>{
    
    if(campo.hasAttribute('required'))return campo
   })

  
   return camposRequeridos.length

  

}


export function ValidarLogin(e){

    let data = {};
    e.preventDefault();

    const campos = [...e.target].filter((elemento) =>{
          
          return elemento.hasAttribute('required')
    })
    
    campos.forEach(campo=>{
          
      switch(campo.name){

          case "cedula":
             if(!campo.value){
               if(ValidarCedula(campo)){
                 let nombreCampo = campo.getAttribute('name')
                 data[nombreCampo] = campo.value
               }
            }
            break;
            case "password":
             
            if(!campo.value){
               if(ValidarPassword(campo)){
                 let nombreCampo = campo.getAttribute('name')
                 data[nombreCampo] = campo.value
               }
            }
            break;
      }

    })

    const cantidadObjeto = Object.keys(data).length
    const cantidadCampos =  ContarCampos(e.target)
    

    if(cantidadCampos === cantidadObjeto){  
    
    return data;
   }else{
    return false

  }
}




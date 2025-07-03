export function post(event,formu){ //Recibe como parametros el evento y el formulario

    event.preventDefault() //Evitara que se envie el formulario 
    
    let data = { //Se crea el objeto para despues mandarlo como json 
           "cedula": formu.cedula.value,
           "nombre": formu.nombre.value,
           "direccion": formu.direccion.value,
           "telefono":formu.telefono.value,
           "correo_electronico": formu.correo_electronico.value

    }

        fetch(`http://localhost:8080/Tu_Bodega/api/tramitante`, { //Se realiza el fetch 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data) //Se serializa en un json 

    }).then(res => {
          res.text();
          if(res.ok){ alert("Se ha realizado el registro correctamente")}else{alert("Ha ocurrido un error")}
        }).then(texto =>console.log(texto)).catch(err => console.error("Error:", err)); //Se  resuelve si el servidor trae una respuesta de tipo texto y despues se imprime lo que se obtiene por consola

}
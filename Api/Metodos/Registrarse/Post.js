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

    }).then(res => res.text().then(texto=>{ //Se convierte en texto la respuesta que nos trae el servidor y al ser una promesa la resolvemos con then 
      if (res.ok) {
        alert("✅ Se ha realizado el registro correctamente"); //Si el servidor trae una respuesta de tipo "ok"
    } else {
        alert("❌ Ha ocurrido un error: " + texto); //Si devuelve cualquier otra respuesta como lo es error 500 o 404 entonces tirara un alert de error 
    }

    })).catch(err =>{
        console.log(err) //En caso de que en el fetch suceda un error 
    })
          

}
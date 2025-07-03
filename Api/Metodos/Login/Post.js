export function post(event,formu){ //Recibe como parametros el evento y el formulario

    event.preventDefault() //Evitara que se envie el formulario 
    
    let data = { //Se crea el objeto para despues mandarlo como json 
           "idUsuarios":1,
           "cedula":formu.cedula.value,
           "password":formu.password.value,
           "fkRol": 1

    }

        fetch(`http://localhost:8080/Tu_Bodega/api/usuario/login`, { //Se realiza el fetch 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data) //Se serializa en un json 

    }).then(res => {  if(res.ok){ alert("Bienvenido al sistema")}else{ alert("El usuario no se encuentra registrado en el sistema")}} //Se realiza la validacion si la respuesta que trae el servidor es "ok" entonces el usuario existe de caso contrario el usuario no existe en el sistema
    ).then(texto =>console.log(texto)).catch(err => console.error("Error:", err)); //Se  resuelve si el servidor trae una respuesta de tipo texto y despues se imprime lo que se obtiene por consola 
  
}
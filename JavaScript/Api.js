export const Ingresar = (e,formu) =>{
      e.preventDefault();
    const datos ={
            cedula:Number( formu.cedula.value),
            nombre: formu.nombre.value,
            direccion: formu.direccion.value,
            telefono:Number(formu.telefono.value),
            correo_electronico: formu.correoElectronico.value
           
           
        
    }
    
    console.log(datos)

      fetch("http://localhost:8080/Tu_Bodega/api/tramitante", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  })
    .then(res => res.text())
    .then(data => {
      console.log("Respuesta:", data);
    })
    .catch(err => {
      console.error("Error en el fetch:", err);
    });




}
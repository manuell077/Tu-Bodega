export const Ingresar = (e,formu) =>{
      e.preventDefault();
    const datos ={
            cedula: formu.cedula.value,
            nombre: formu.nombre.value,
            direccion: formu.direccion.value,
            telefono: formu.telefono.value,
            correo_electronico: formu.correo_electronico.value,
            rol: formu.rol.value
           
        
    }
    
      fetch("http://localhost:8080/Tu_Bodega/api/tramitante", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  })
    .then(res => res.json())
    .then(data => {
      console.log("Respuesta:", data);
    })
    .catch(err => {
      console.error("Error en el fetch:", err);
    });




}
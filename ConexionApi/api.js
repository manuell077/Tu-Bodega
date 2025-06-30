export const Post = (event,formu)=>{
    
    event.preventDefault();
   
    
    const data = {
        nombre: formu.usuario.value,
        password: formu.password.value,
        direccion: formu.direccion.value,
        telefono: formu.telefono.value,
        correo_electronico: formu.correoElectronico.value,
        cedula: formu.cedula.value,
    }
    
    Object.values(data).forEach(Clave =>{
        console.log(Clave)
    })


    fetch("http://localhost:8080/Tu_Bodega/api/tramitante", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)

    }).then(res => res.text()).then(json =>console.log("Enviado con exito",json)).catch(err => console.error("Error:", err));


}
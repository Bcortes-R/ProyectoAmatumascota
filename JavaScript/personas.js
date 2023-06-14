function mostrarPersonas () {
    let personas = [ ]
    let localPersonas = localStorage.getItem("personas")
    if(localPersonas){
        personas = JSON.parse(localPersonas)
    }

    const tablaPersonas = document.getElementById("tabla-personas")
    const cuerpoTabla = tablaPersonas.getElementsByTagName("tbody")[0]
    personas.forEach(persona => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombrePersona = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell( )

        celdaNombrePersona.textContent = persona.nombre
        celdaApellido.textContent = persona.apellido
        celdaCorreo.textContent = persona.email
        celdaEdad.textContent = persona.edad
        celdaCedula.textContent = persona.ced
        celdaEspecialidad.textContent = persona.especialidad
    });
   
}

mostrarPersonas()
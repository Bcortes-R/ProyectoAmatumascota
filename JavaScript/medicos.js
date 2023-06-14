function mostrarMedicos() {
  var medicos = [];
  var localMedicos = localStorage.getItem("medicos");

  if (localMedicos) {
    medicos = JSON.parse(localMedicos);
  }

  var tablaMedicos = document.getElementById("tabla-medicos");
  var cuerpoTabla = tablaMedicos.getElementsByTagName("tbody")[0];
  medicos.forEach(function (medico) {
    var fila = cuerpoTabla.insertRow();
    var celdaNombreMedico = fila.insertCell();
    var celdaApellido = fila.insertCell();
    var celdaCedula = fila.insertCell();
    var celdatelefono = fila.insertCell();
    var celdaConsultorio = fila.insertCell();
    var celdaCorreo = fila.insertCell();
    var celdaEspecialidad = fila.insertCell();
    celdaNombreMedico.textContent = medico.nombre;
    celdaApellido.textContent = medico.apellido;
    celdaCedula.textContent = medico.cedula;
    celdatelefono.textContent = medico.telefono;
    celdaConsultorio.textContent = medico.consul;
    celdaCorreo.textContent = medico.correo;
    celdaEspecialidad.textContent = medico.especialidad;
  });
}

mostrarMedicos();

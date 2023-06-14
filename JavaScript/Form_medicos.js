  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const cedula = document.getElementById("cedula");
  const tel = document.getElementById("telefono");
  const consul = document.getElementById("consultorio");
  const correo = document.getElementById("correo");
  const especialidad = document.getElementById("especialidad");
  const formulario = document.getElementById("form");



// Asignar funcion al boton submit

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // creacio de objeto para guardar la información del formulario

  const medico = {
    nombre: nombre.value,
    apellido: apellido.value,
    cedula: cedula.value,
    telefono: tel.value,
    consul: consul.value,
    correo: correo.value,
    especialidad: especialidad.value,
  };
  let medicos = [];
  let localMedicos = localStorage.getItem("medicos");
  if (localMedicos) {
    medicos = JSON.parse(localMedicos);
  }
  medicos.push(medico);
  localStorage.setItem("medicos", JSON.stringify(medicos));
  formulario.reset();
  alert("Usuario registrado exitosamente");

  const user = JSON.parse(localStorage.getItem("login_success")) || false;
  if (!user) {
    window.location.href = "login.html";
  }
  
});



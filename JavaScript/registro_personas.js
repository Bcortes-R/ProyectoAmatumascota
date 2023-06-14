const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const ced = document.getElementById("ced");
const especialidad = document.getElementById("especialidad");
const formulario = document.getElementById("form");

// Asignar funcion al boton submit

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // creacio de objeto para guardar la información del formulario

  const persona = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    edad: edad.value,
    ced: ced.value,
    especialidad: especialidad.value,
  };
  let personas = [];
  let localPersonas = localStorage.getItem("personas");
  if (localPersonas) {
    personas = JSON.parse(localPersonas);
  }
  personas.push(persona);
  localStorage.setItem("personas", JSON.stringify(personas));
  formulario.reset();
  alert("Usted se a registrado exitosamente");

  const user = JSON.parse(localStorage.getItem("login_success")) || false;
  if (!user) {
    window.location.href = "login.html";
  }
  
});

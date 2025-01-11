/*modificar el ejercicio anterior para que 
al pulsar el botón, el nombre introducido se 
muestre como título h1 en un contenedor div que 
se hará visible, ocultando el div donde está el 
formulario. 
El contenedor donde se muestra el nombre, tendrá 
además un botón para regresar al formulario.*/

// Seleccionar los elementos necesarios
const formulario = document.querySelector("#formulario");
const mensajeDiv = document.querySelector("#mensaje");
const regresoDiv = document.querySelector("#regreso");
const saludo = document.querySelector("#saludo");
const btnRegresar = document.querySelector("#regresar");
const formularioBienvenida = document.querySelector("#formulario-bienvenida");

// Agregar un evento para manejar el envío del formulario
formularioBienvenida.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se recargue

  // Obtener el valor del campo de nombre
  const nombre = document.querySelector("#nombre").value;

  // Mostrar el mensaje en el contenedor div y ocultar el formulario
  saludo.textContent = `Hola, ${nombre}!`;
  formulario.style.display = "none"; // Ocultar el formulario
  mensajeDiv.style.display = "block"; // Mostrar el contenedor de saludo
  regresoDiv.style.display = "block"; // Mostrar el botón para regresar al formulario
});

// Agregar un evento para regresar al formulario
btnRegresar.addEventListener("click", () => {
  formulario.style.display = "block"; // Mostrar el formulario
  mensajeDiv.style.display = "none"; // Ocultar el saludo
  regresoDiv.style.display = "none"; // Ocultar el botón para regresar
});

/*crear un pequeño formulario HTML con 
los siguientes elementos:
❖ Un título.
❖ Un campo para introducir el nombre.
❖ Un contenedor div sin contenido.
❖ Un botón de enviar.
❖ Al pulsar el botón, aparecerá en el contenedor div
el valor “Hola, ” y el nombre introducido en el 
campo de texto. */

// Seleccionar los elementos necesarios
const formulario = document.querySelector("#formulario");
const mensajeDiv = document.querySelector("#mensaje");

// Agregar un evento para manejar el envío del formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se recargue

  // Obtener el valor del campo de nombre
  const nombre = document.querySelector("#nombre").value;

  // Mostrar el mensaje en el contenedor div
  mensajeDiv.textContent = `Hola, ${nombre}!`;
});

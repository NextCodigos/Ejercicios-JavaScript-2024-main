/*crear un pequeño formulario HTML 
con los siguientes elementos:
❖ Un título.
❖ Un campo para introducir un número.
❖ Un botón de enviar.
❖ Al pulsar el botón, se mostrará una alerta con el 
valor del número introducido, incrementado en 
una unidad.*/

// Seleccionar el formulario
const formulario = document.querySelector("#formulario");

// Agregar un evento para manejar el envío del formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se recargue

  // Obtener el valor del número introducido
  const numero = parseInt(document.querySelector("#numero").value);

  // Incrementar el número en 1
  const numeroIncrementado = numero + 1;

  // Mostrar la alerta con el número incrementado
  alert(`El número incrementado es: ${numeroIncrementado}`);
});

/*Al pulsar el botón del ejercicio anterior, 
hacer que cambie el contenido HTML del 
documento y muestre, en negrita y cursiva, el texto 
botón pulsado*/

document.querySelector("button").addEventListener("click", mostrarMensajes);
// Ejemplo 1: Creamos con createElement:
// function mostrarMensajes() {
//   const mensaje = document.createElement("p");
//   mensaje.textContent = "Botón pulsado";
//   mensaje.style.fontWeight = "bold";
//   mensaje.style.fontStyle = "italic";
//   document.body.appendChild(mensaje);
// }
// Ejemplo 2: Seleccionamos body:
// function mostrarMensajes() {
//   const mensaje = document.querySelector("body");
//   mensaje.innerHTML = "<b><i>Botón pulsado</i></b>";
// }
// Ejemplo 3: Seleccionamos el button:
function mostrarMensajes() {
  const mensaje = document.querySelector("button");
  mensaje.innerHTML = "<b><i>Botón pulsado</i></b>";
}

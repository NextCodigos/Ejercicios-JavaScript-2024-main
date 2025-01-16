/*Modificar la última tarea para realizarla 
mediante una función llamada mostrarMensajes
contenida en un fichero js externo.*/

document.querySelector("button").addEventListener("click", mostrarMensajes);

function mostrarMensajes() {
  alert("hola");
  console.log("hola log");
  console.info("hola info");
  console.error("hola error");
}

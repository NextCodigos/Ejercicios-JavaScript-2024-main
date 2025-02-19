/*crear un documento HTML con dos 
contenedores div.
❖ Cada contenedor tendrá un título y un botón. 
❖ Por defecto, el primer div estará visible y el 
segundo oculto. 
❖ Al pulsar el botón del primer div, se ocultará este 
contenedor y mostrará el segundo. 
❖ Al pulsar el botón del segundo div, se realizará el 
proceso inverso. */

// Seleccionamos los contenedores y los botones
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const botonDiv1 = document.getElementById("botonDiv1");
const botonDiv2 = document.getElementById("botonDiv2");

// Función para mostrar un div
function mostrar(div) {
  div.style.display = "block";
}

// Función para ocultar un div
function ocultar(div) {
  div.style.display = "none";
}

// Evento para mostrar el segundo div y ocultar el primero
botonDiv1.addEventListener("click", () => {
  ocultar(div1);
  mostrar(div2);
});

// Evento para mostrar el primer div y ocultar el segundo
botonDiv2.addEventListener("click", () => {
  ocultar(div2);
  mostrar(div1);
});

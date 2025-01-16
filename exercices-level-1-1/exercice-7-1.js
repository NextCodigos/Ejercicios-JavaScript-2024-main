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

// Mostrar el segundo div y ocultar el primero
botonDiv1.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "block";
});

// Mostrar el primer div y ocultar el segundo
botonDiv2.addEventListener("click", () => {
  div2.style.display = "none";
  div1.style.display = "block";
});

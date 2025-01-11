/*crear un documento HTML con dos 
contenedores div.
❖ Cada contenedor tendrá un título y un botón. 
❖ Por defecto, el primer div estará visible y el 
segundo oculto. 
❖ Al pulsar el botón del primer div, se ocultará este 
contenedor y mostrará el segundo. 
❖ Al pulsar el botón del segundo div, se realizará el 
proceso inverso. */

// Seleccionar los contenedores y botones
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

// Función para mostrar el segundo contenedor y ocultar el primero
btn1.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "block";
});

// Función para mostrar el primer contenedor y ocultar el segundo
btn2.addEventListener("click", () => {
  div1.style.display = "block";
  div2.style.display = "none";
});

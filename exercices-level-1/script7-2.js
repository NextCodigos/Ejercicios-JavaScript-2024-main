// Seleccionar los contenedores y botones
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

// Función para mostrar el segundo contenedor y ocultar el primero
btn1.addEventListener("click", () => {
  div1.style.visibility = "hidden"; // Ocultar el primer contenedor
  div2.style.visibility = "visible"; // Mostrar el segundo contenedor
});

// Función para mostrar el primer contenedor y ocultar el segundo
btn2.addEventListener("click", () => {
  div1.style.visibility = "visible"; // Mostrar el primer contenedor
  div2.style.visibility = "hidden"; // Ocultar el segundo contenedor
});

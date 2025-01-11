/*Modificar la última tarea para realizarla 
mediante una función llamada mostrarMensajes
contenida en un fichero js externo.*/

// document.querySelector("#boton1").addEventListener("click", function () {
//   console.log("Este es un mensage de log");
//   console.log("Este es un mensage de informacion");
//   console.log("Este es un mensage de error");
// });

function mostrarMensajes() {
  document.querySelector("#boton1").addEventListener("click", function () {
    console.log("Este es un mensage de log");
    console.log("Este es un mensage de informacion");
    console.log("Este es un mensage de error");
    alert("Hello World");

  });
}

// mostrarMensajes();

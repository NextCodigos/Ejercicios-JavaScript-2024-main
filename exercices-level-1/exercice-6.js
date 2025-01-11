/*Añadir un nuevo botón al ejercicio 
anterior, que al pulsarlo cambie la imagen. */

function mostrarMensajes() {
  // Seleccionar el contenedor donde se inyectará la imagen
  const contenedor = document.querySelector("#contenedor");

  // Crear un elemento de imagen
  const img = document.createElement("img");

  // Establecer atributos de la imagen inicial
  img.src = "https://via.placeholder.com/100"; // Imagen inicial (100x100 píxeles)
  img.alt = "Imagen inicial";
  img.width = 100;
  img.height = 100;

  // Vaciar el contenedor antes de añadir la nueva imagen
  contenedor.innerHTML = "";

  // Añadir la imagen al contenedor
  contenedor.appendChild(img);
}

function cambiarImagen() {
  // Seleccionar la imagen dentro del contenedor
  const img = document.querySelector("#contenedor img");

  // Cambiar la fuente de la imagen si existe
  if (img) {
    img.src = "https://via.placeholder.com/150"; // Nueva imagen (150x150 píxeles)
    img.alt = "Nueva imagen";
  } else {
    console.warn("No hay ninguna imagen para cambiar.");
  }
}

/*Al pulsar el botón del ejercicio anterior, 
inyectar en un contenedor div (localizado justo 
antes del botón), una imagen pequeña*/

function mostrarMensajes() {
  // Seleccionar el contenedor donde se inyectará la imagen
  const contenedor = document.querySelector("#contenedor");

  // Crear un elemento de imagen
  const img = document.createElement("img");

  // Establecer atributos de la imagen (ruta, tamaño, etc.)
  img.src = "https://via.placeholder.com/100"; // URL de una imagen pequeña (100x100 píxeles)
  img.alt = "Imagen pequeña";
  img.width = 100;
  img.height = 100;

  // Vaciar el contenedor antes de añadir la nueva imagen
  contenedor.innerHTML = "";

  // Añadir la imagen al contenedor
  contenedor.appendChild(img);
}

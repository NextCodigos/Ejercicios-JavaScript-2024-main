document.querySelector("#mostrar").addEventListener("click", mostrarMensajes);

function mostrarMensajes() {
  const mensaje = document.querySelector("#mostrar");
  mensaje.outerHTML = `
    <div>
      <img src="https://picsum.photos/200/300" width="200" height="300" alt="Imagen inicial">
    </div>
    <div>
      <b><i>Botón pulsado</i></b>
      <button id="cambiar">Cambiar imagen</button>
    </div>
  `;

  // Asignar evento al botón de "Cambiar imagen"
  document.querySelector("#cambiar").addEventListener("click", cambiarImagen);
}

function cambiarImagen() {
  const img = document.querySelector("img");
  img.src = "https://picsum.photos/200/301"; // Cambiamos el tamaño para forzar una nueva imagen
  img.alt = "Nueva imagen";
}

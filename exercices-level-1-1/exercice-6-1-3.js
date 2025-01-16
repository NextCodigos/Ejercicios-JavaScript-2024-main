document.querySelector("#mostrar").addEventListener("click", mostrarMensajes);

function mostrarMensajes() {
  const mensaje = document.querySelector("#mostrar");
  mensaje.outerHTML = `
    <div>
      <img src="Img/rey_leogivildo.png" width="200" height="300" alt="Imagen inicial">
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
  img.src = "Img/rey_incognito.png";
  img.alt = "Nueva imagen";
}

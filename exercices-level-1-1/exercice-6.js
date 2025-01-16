document.querySelector("#mostrar").addEventListener("click", mostrarMensajes);

function mostrarMensajes() {
  const mensaje = document.querySelector("#mostrar");
  mensaje.outerHTML = `
    <div>
      <img src="./img/rey_leogivildo.png" width="200" height="300" alt="Imagen inicial">
    </div>
    <div>
      <b><i>Botón pulsado</i></b>
      <button id="cambiar">Cambiar imagen</button>
    </div>
  `;

  // Asignar evento al botón de "Cambiar imagen"
  document.querySelector("#cambiar").addEventListener("click", alternarImagen);
}

// Bandera para controlar la imagen actual
let mostrarPrimeraImagen = false;

function alternarImagen() {
  const img = document.querySelector("img");

  if (mostrarPrimeraImagen) {
    // Mostrar la primera imagen
    img.src = "./img/rey_leogivildo.png";
    img.alt = "Imagen inicial";
  } else {
    // Mostrar la segunda imagen
    img.src = "./img/rey_incognito.png";
    img.alt = "Nueva imagen";
  }

  // Alternar el estado de la bandera
  mostrarPrimeraImagen = !mostrarPrimeraImagen;
}

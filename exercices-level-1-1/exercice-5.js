/*Al pulsar el botón del ejercicio anterior, 
inyectar en un contenedor div (localizado justo 
antes del botón), una imagen pequeña*/

document.querySelector("button").addEventListener("click", mostrarMensajes);

// Ejemplo 3: Seleccionamos el button:
function mostrarMensajes() {
  const mensaje = document.querySelector("button");
  mensaje.innerHTML = `
  <div>
    <img src="https://picsum.photos/200/300" width="100" height="100">
  </div>
  <div>
  <b><i>Botón pulsado</i></b>
  </div>
  `;
}

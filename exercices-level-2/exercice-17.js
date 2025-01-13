/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertirCadena(cadena) {
    // Crear una variable para almacenar la cadena invertida
    let cadenaInvertida = "";
    // Iterar sobre la cadena desde el último carácter hasta el primero
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}

// Prueba del programa
const texto = "Hola mundo";
const resultado = invertirCadena(texto);
console.log(resultado); // Salida: "odnum aloH"

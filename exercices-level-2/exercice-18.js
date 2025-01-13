/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function contarPalabras(texto) {
    const recuento = {}; // Objeto para almacenar el recuento de palabras
    let palabra = "";    // Variable temporal para construir palabras

    // Convertir todo el texto a minúsculas para evitar diferencias de caso
    texto = texto.toLowerCase();

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];

        // Verificar si el carácter es una letra o un número
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            palabra += char; // Construir la palabra
        } else if (palabra !== "") {
            // Si encontramos un delimitador (espacio, puntuación), procesamos la palabra
            recuento[palabra] = (recuento[palabra] || 0) + 1;
            palabra = ""; // Reiniciar la palabra temporal
        }
    }

    // Procesar la última palabra si existe
    if (palabra !== "") {
        recuento[palabra] = (recuento[palabra] || 0) + 1;
    }

    return recuento;
}

// Prueba del programa
const texto = "Hola, hola. ¿Qué tal? Hola mundo, mundo!";
const resultado = contarPalabras(texto);
console.log(resultado);
// Salida esperada: { hola: 3, qué: 1, tal: 1, mundo: 2 }

/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function decimalABinario(numero) {
    let binario = ""; // Cadena para almacenar el resultado en binario

    // Manejar el caso especial de 0
    if (numero === 0) {
        return "0";
    }

    // Realizar la conversión
    while (numero > 0) {
        const residuo = numero % 2; // Obtener el residuo al dividir entre 2
        binario = residuo + binario; // Agregar el residuo al principio de la cadena
        numero = Math.floor(numero / 2); // Dividir el número entre 2 (parte entera)
    }

    return binario;
}

// Prueba del programa
const numeroDecimal = 42;
const resultado = decimalABinario(numeroDecimal);
console.log(`El número ${numeroDecimal} en binario es: ${resultado}`);
// Salida esperada: "El número 42 en binario es: 101010"

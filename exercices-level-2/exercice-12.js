/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function sonAnagramas(palabra1, palabra2) {
  // Convertir las palabras a minúsculas para ignorar mayúsculas y minúsculas
  palabra1 = palabra1.toLowerCase();
  palabra2 = palabra2.toLowerCase();

  // Si las palabras son iguales, no son anagramas
  if (palabra1 === palabra2) {
    return false;
  }

  // Ordenar las letras de cada palabra y comparar
  return [...palabra1].sort().join('') === [...palabra2].sort().join('');
}

console.log(sonAnagramas('listen', 'silent')); // true
console.log(sonAnagramas('hello', 'world')); // false
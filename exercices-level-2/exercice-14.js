/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esPrimo(numero) {
  if (numero < 2) return false; // Los números menores que 2 no son primos
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false; // Si es divisible por otro número, no es primo
  }
  return true;
}

function primosHasta100() {
  const primos = [];
  for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}

console.log("Números primos entre 1 y 100:", primosHasta100().join(", "));

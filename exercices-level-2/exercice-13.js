/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacciSequence(n) {
  const sequence = [0, 1]; // Los dos primeros números de la serie

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]); // Suma de los dos anteriores
  }

  return sequence;
}

const first50Fibonacci = fibonacciSequence(50);
console.log(first50Fibonacci.join(", "));

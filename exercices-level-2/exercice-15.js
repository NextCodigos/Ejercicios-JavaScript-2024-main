/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

// Función para calcular el área de un polígono
function calcularAreaPoligono(poligono) {
  const { tipo, ...dimensiones } = poligono;

  switch (tipo.toLowerCase()) {
    case "triangulo":
      if (dimensiones.base && dimensiones.altura) {
        return (dimensiones.base * dimensiones.altura) / 2;
      }
      throw new Error("El triángulo requiere 'base' y 'altura'.");

    case "cuadrado":
      if (dimensiones.lado) {
        return dimensiones.lado ** 2;
      }
      throw new Error("El cuadrado requiere 'lado'.");

    case "rectangulo":
      if (dimensiones.base && dimensiones.altura) {
        return dimensiones.base * dimensiones.altura;
      }
      throw new Error("El rectángulo requiere 'base' y 'altura'.");

    default:
      throw new Error("Tipo de polígono no soportado. Use 'triangulo', 'cuadrado' o 'rectangulo'.");
  }
}

// Ejemplos de uso
try {
  const areaTriangulo = calcularAreaPoligono({ tipo: "triangulo", base: 10, altura: 5 });
  console.log(`Área del triángulo: ${areaTriangulo}`);

  const areaCuadrado = calcularAreaPoligono({ tipo: "cuadrado", lado: 4 });
  console.log(`Área del cuadrado: ${areaCuadrado}`);

  const areaRectangulo = calcularAreaPoligono({ tipo: "rectangulo", base: 8, altura: 3 });
  console.log(`Área del rectángulo: ${areaRectangulo}`);
} catch (error) {
  console.error(error.message);
}

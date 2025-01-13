/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

import fetch from "node-fetch";
import sharp from "sharp";

/**
 * Función para calcular el aspect ratio de una imagen a partir de una URL
 * @param {string} imageUrl - URL de la imagen
 */
async function calculateAspectRatio(imageUrl) {
  try {
    // Descargar la imagen como un buffer
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(
        `No se pudo descargar la imagen. Código de estado: ${response.status}`
      );
    }

    const imageBuffer = await response.buffer();

    // Obtener las dimensiones de la imagen
    const metadata = await sharp(imageBuffer).metadata();
    const { width, height } = metadata;

    if (!width || !height) {
      throw new Error("No se pudieron obtener las dimensiones de la imagen.");
    }

    // Calcular el aspect ratio
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // Máximo común divisor
    const divisor = gcd(width, height);
    const aspectRatio = `${width / divisor}:${height / divisor}`;

    console.log(`Dimensiones: ${width}x${height}`);
    console.log(`Aspect Ratio: ${aspectRatio}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// URL de ejemplo
const imageUrl =
  "https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png";

// Calcular el aspect ratio de la imagen
calculateAspectRatio(imageUrl);

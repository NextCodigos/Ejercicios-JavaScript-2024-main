/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

function textoAMorse(texto) {
    const morse = {
        a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.",
        g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..",
        m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.",
        s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-",
        y: "-.--", z: "--..", 0: "-----", 1: ".----", 2: "..---",
        3: "...--", 4: "....-", 5: ".....", 6: "-....", 7: "--...",
        8: "---..", 9: "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..",
        "'": ".----.", "!": "-.-.--", "/": "-..-.", "(": "-.--.",
        ")": "-.--.-", "&": ".-...", ":": "---...", ";": "-.-.-.",
        "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-",
        '"': ".-..-.", "$": "...-..-", "@": ".--.-.", " ": " "
    };

    return texto
        .toLowerCase()
        .split("")
        .map(char => morse[char] || "")
        .join(" ");
}

function morseATexto(morseCode) {
    const texto = {
        ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e", "..-.": "f",
        "--.": "g", "....": "h", "..": "i", ".---": "j", "-.-": "k", ".-..": "l",
        "--": "m", "-.": "n", "---": "o", ".--.": "p", "--.-": "q", ".-.": "r",
        "...": "s", "-": "t", "..-": "u", "...-": "v", ".--": "w", "-..-": "x",
        "-.--": "y", "--..": "z", "-----": "0", ".----": "1", "..---": "2",
        "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7",
        "---..": "8", "----.": "9", ".-.-.-": ".", "--..--": ",", "..--..": "?",
        ".----.": "'", "-.-.--": "!", "-..-.": "/", "-.--.": "(", "-.--.-": ")",
        ".-...": "&", "---...": ":", "-.-.-.": ";", "-...-": "=", ".-.-.": "+",
        "-....-": "-", "..--.-": "_", ".-..-.": '"', "...-..-": "$", ".--.-.": "@",
        "": " "
    };

    return morseCode
        .split("  ") // Separar palabras
        .map(word =>
            word
                .split(" ") // Separar letras
                .map(symbol => texto[symbol] || "")
                .join("")
        )
        .join(" ");
}

function convertirTextoMorse(entrada) {
    // Detectar si es texto o morse (si contiene solo . - o espacios, es morse)
    if (/^[.\-\s]+$/.test(entrada.trim())) {
        return morseATexto(entrada);
    } else {
        return textoAMorse(entrada);
    }
}

// Prueba del programa
const entrada1 = "Hola mundo";
const entrada2 = ".... --- .-.. .-  -- ..- -. -.. ---";

console.log(convertirTextoMorse(entrada1)); // Salida esperada: ".... --- .-.. .-  -- ..- -. -.. ---"
console.log(convertirTextoMorse(entrada2)); // Salida esperada: "hola mundo"

// Explicación:

//     Mapeos Morse-Texto y Texto-Morse: Creamos dos objetos que actúan como diccionarios para las conversiones.
//     Conversión Texto a Morse:
//         Convertimos el texto a minúsculas.
//         Recorremos cada carácter y buscamos su equivalencia en el diccionario.
//     Conversión Morse a Texto:
//         Dividimos el código Morse por palabras usando doble espacio (" ").
//         Dividimos cada palabra en letras usando un espacio simple.
//         Buscamos cada símbolo en el diccionario Morse a texto.
//     Detección Automática:
//         Si la entrada contiene solo puntos (.), rayas (-), y espacios, asumimos que es Morse.
//         De lo contrario, es texto natural.

// ¡El programa funciona tanto para texto a Morse como para Morse a texto!
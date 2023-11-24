//4
const pt = require("prompt-sync")({sigint: true})

let cadenaInput = pt("Introducir texto --> ")
let palabra
let cadena = ""

while (cadenaInput != "cancelar") {
    if (String(cadenaInput)) {
        palabra = String(cadenaInput)
        cadena = (cadena + palabra + "-")
    } else {
        console.log("solo son correctos valores alfabeticos")
    }

    cadenaInput = pt("Introducir texto --> ")
}

console.log("La cadena hecha es: " + cadena);
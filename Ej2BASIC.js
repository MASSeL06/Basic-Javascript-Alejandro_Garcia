//* Pide una nota (Number) y muestra su nota según 0-3, 3-5, 5-6, 6-7, 7-9, 9-10

const prompt = require ("prompt-sync")({ sigint: true })

const nota = prompt ("Introduce tu nota petarda")

if (nota >= 0 && nota <= 10){
    if (nota < 3 ) {
    console.log("Muy deficiente")
    } 
    else if (nota >= 3 && nota < 5) {
    console.log("Insuficiente")
    } 
    else if (nota >= 5 && nota < 6) {
    console.log("Suficiente")
    } 
    else if (nota >= 6 && nota < 7) {
    console.log("Bien")
    }
    else if (nota >= 7 && nota < 9) {
    console.log("Notable")
    }
    else if (nota >= 9) {
    console.log("Sobresaliente")
    }

} else {
    console.log("Nota incorrecta")
}
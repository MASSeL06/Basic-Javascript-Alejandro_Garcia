//*Pregunta edad, si es +18 puede conducir, sino no

const scanner = require ("prompt-sync")({ sigint: true })

const nombre= scanner("Introduce tu nombre")

const edad = scanner("Introduce tu edad")

if (Number(edad)) {
if (edad >= 18) {
    console.log("Felicidades, "+ nombre +" puedes conducir")
} else {
    console.log("Lo siento, "+ nombre +" no puedes conducir")
}
} else {
    console.log("Introduce un numero valido")
}
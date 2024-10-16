const promptSync = require("prompt-sync")
const input = promptSync()

function filtrarPositivos(numeros) {
    return numeros.filter(numero => numero > 0)
}

const entrada = input("Digite os números separados por espaço: ")
const vetor = entrada.split(" ").map(Number)

const positivos = filtrarPositivos(vetor)

console.log("Números positivos:", positivos)
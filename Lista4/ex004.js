const promptSync = require("prompt-sync")
const input = promptSync()

function filtrarNomesPorLetra(nomes, letra) {
    return nomes.filter(nome => nome.includes(letra))
}

const entrada = input("Digite os nomes separados por vírgula: ")
const nomes = entrada.split(",").map(nome => nome.trim())

const letra = input("Digite a letra a ser filtrada: ")

const nomesFiltrados = filtrarNomesPorLetra(nomes, letra)
console.log("Nomes filtrados:", nomesFiltrados)
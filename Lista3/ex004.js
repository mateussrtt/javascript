const promptSync = require("prompt-sync")()
const numeros = []
const impares = []
let falhas = 0

while (numeros.length < 50) {
  const numero = Math.floor(Math.random() * (100 - 1 + 1)) + 1

  let jaPossui = false
  for (let j = 0; j < numeros.length; j++) {
    if (numeros[j] === numero) {
      jaPossui = true
      break
    }
  }

  if (!jaPossui) {
    numeros.push(numero)
  } else {
    falhas++
  }
}

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    impares.push(numeros[i])
  }
}

let somaImpar = 0
for (let i = 0; i < impares.length; i++) {
  somaImpar += impares[i]
}

console.log(`Números gerados: ${numeros}`)
console.log(`Tentativas não inseridas: ${falhas}`)
console.log(`Números ímpares: ${impares}`)
console.log(`Somatório dos números ímpares: ${somaImpar}`);

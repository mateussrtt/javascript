const promptSync = require("prompt-sync")(); // Os parênteses no final são importantes
const numeros = []

for (let i = 0; i < 10; i++) {
  let numero = parseInt(promptSync(`Digite o ${i + 1}° número: `), 10)
  numeros.push(numero)
}

let maior = numeros[0]
let menor = numeros[0]

for (let i = 1; i < 10; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i]
  }
  if (numeros[i] < menor) {
    menor = numeros[i]
  }
}

console.log(`O maior número é: ${maior}`)
console.log(`O menor número é: ${menor}`)

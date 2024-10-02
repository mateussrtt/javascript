const promptSync = require("prompt-sync")()
const temperaturas = []

for (let i = 0; i < 7; i++) {
  let temper = parseFloat(promptSync(`Digite a temperatura do dia ${i + 1}: `))
  temperaturas.push(temper)
}

let soma = 0

for (let i = 0; i < 7; i++) {
  soma += temperaturas[i]
}

const media = soma / 7

let diasAcima = 0

for (let i = 0; i < 7; i++) {
  if (temperaturas[i] > media) {
    diasAcima++
  }
}

console.log(`A média das temperaturas é: ${media.toFixed(2)}°C`);
console.log(`Número de dias com temperatura acima da média: ${diasAcima}`);
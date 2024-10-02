const promptSync = require("prompt-sync")(); // Os parênteses no final são importantes
const numeros = []

for (let i = 0; i < 10; i++) {
  let numero = parseInt(promptSync(`Digite o ${i + 1}° número: `), 10)
  numeros.push(numero)
}

let somaPar = 0;
let contadorPar = 0;

for (let i = 0; i < 10; i++) {
  if (numeros[i] % 2 === 0) {
    somaPar += numeros[i]
    contadorPar++
  }
  
}

if(contadorPar > 0){
    const mediaPares = somaPar / contadorPar;
    console.log(`A média dos números pares é: ${mediaPares}`)
} else {
    console.log("Não existem números pares no vetor.")
}
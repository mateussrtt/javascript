const promptSync = require("prompt-sync")
const input = promptSync()

function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return "Os números são iguais."
    }
}

const numero1 = parseFloat(input("Digite o primeiro número: "))
const numero2 = parseFloat(input("Digite o segundo número: "))

const resultado = maiorNumero(numero1, numero2)

if (typeof resultado === 'number') {
    console.log(`O maior número entre ${numero1} e ${numero2} é: ${resultado}.`)
} else {
    console.log(resultado)
}
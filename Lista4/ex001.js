function converterParaReal(valor, moedaDeOrigem) {

    const taxas = {
        USD: 5.35,
        EUR: 6.38,
        ARS: 0.056 
    };

    if (!taxas[moedaDeOrigem]) {
        return "Moeda de origem não existente em nosso câmbio."
    }

    const valorConvertido = valor * taxas[moedaDeOrigem]
    return valorConvertido
}

const promptSync = require("prompt-sync")
const input = promptSync()

const moedaOrigem = input("Digite a moeda de origem (USD, EUR, ARS): ").toUpperCase()
const valor = parseFloat(input("Digite o valor a ser convertido: "))

const resultado = converterParaReal(valor, moedaOrigem)
console.log(`Valor convertido: ${resultado} BRL`)
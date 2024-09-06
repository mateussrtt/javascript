const promptSync = require("prompt-sync")
const imput = promptSync()

const valor = (Math.random() * 101);

    const sucessor = valor + 1
    const antecessor = valor - 1

    console.log('Valor:',valor.toFixed(0))
    console.log('Antecessor:',antecessor.toFixed(0))
    console.log('Sucessor',sucessor.toFixed(0))



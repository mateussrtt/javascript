const promptSync = require("prompt-sync")
const imput = promptSync()

parseInt()
parseFloat()

const numero = parseFloat( imput("Digite o valor que você queira guardar na variável: "))
console.log(numero)

const numero2 = parseFloat( imput("Digite o valor pra guardar na segunda variável: "))
console.log(numero2)

const media = (numero + numero2) / 2

console.log("O valor da media: ",media)
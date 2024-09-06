const promptSync = require("prompt-sync")
const imput = promptSync()

const lado = imput("Digite um valor para o lado do quadrado: ")

    const area = lado * lado

    console.log('O valor do lado é:', lado)
    console.log('O valor da área do quadrado será:', area)
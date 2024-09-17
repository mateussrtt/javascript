const promptSync = require("prompt-sync")
const imput = promptSync()

const idade = parseInt(imput("Digite a sua idade: "))

if(idade < 16){
    console.log("Não Eleitor")
} else if(idade >= 18 && idade < 65){
    console.log("Eleitor Obrigatório")
} else {
    console.log("Eleitor Facultativo")
}


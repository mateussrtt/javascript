const promptSync = require("prompt-sync")
const input = promptSync()

const salario = parseFloat(input("Digite o seu salário atual(exemplo: 2734.58): "))

let aumentoPorcento, aumento, novoSalario

if (salario <= 280){
    aumentoPorcento = 0.20
} else if (salario > 280 && salario <= 700){
    aumentoPorcento = 0.15
} else if (salario > 700 && salario <= 1500){
    aumentoPorcento = 0.10
} else if (salario > 1500){
    aumentoPorcento = 0.05
}

aumento = salario * aumentoPorcento
novoSalario = salario + aumento

console.log(`Salário antes do reajuste: R$ ${salario.toFixed(2)}`)
console.log(`Valor do aumento: R$ ${aumento.toFixed(2)}`)
console.log(`Novo salário, após o aumento: R$ ${novoSalario.toFixed(2)}`)
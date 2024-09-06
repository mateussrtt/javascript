const promptSync = require("prompt-sync")
const imput = promptSync()

    const hora = imput("Quanto você ganha por hora? ")
    const horasNoMes = imput("Quantas horas você trabalha no mês? ")
    const salario = hora * horasNoMes
    const impostoRenda = salario * 0.15
    const inss = salario * 0.10
    const sindicato = salario * 0.02
    const salarioLiquido = salario - impostoRenda - inss - sindicato

    console.log('O salário bruto é R$',salario)
    console.log('O pagamento ao INSS é de R$',inss)
    console.log('O pagamento ao sindicato é de R$',sindicato)
    console.log('O pagamento do imposto de renda é de R$',impostoRenda)
    console.log('O salário líquido será de R$', salarioLiquido)

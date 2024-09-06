const promptSync = require("prompt-sync")
const imput = promptSync()

const metros = imput("Digite o valor em metros: ")

    const decimetros = metros * 10;
    const centimetros = decimetros * 10;
    const milimetros = centimetros * 10;

    console.log(`${metros} metros é equivalente a:`);
    console.log(`${decimetros} decímetros`);
    console.log(`${centimetros} centímetros`);
    console.log(`${milimetros} milímetros`);
/*
Hacer un programa que halle el área de un círculo.
*/

const readline = require('node:readline') 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingresar el valor del radio del circulo a calcular: ',
    (a)=>{
        console.log(`El area del circulo es ${(Math.PI*Math.pow(a,2)).toFixed(2)}`)
        rl.close()
    }
)
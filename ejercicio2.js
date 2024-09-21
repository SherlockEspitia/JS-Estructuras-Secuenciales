/*
Elabore un programa que realice la conversión de libras a kilogramos
Donde 1 Kg. = 2.2046 libras.
*/

const readline = require('node:readline') 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese el la cantidad de libras a convertir en kilogramos: ',
    (a)=>{
        let kilogramos = Number(a)/2.2046

        console.log(`Las ${a} lbs equivalen a ${kilogramos} kg`)
        rl.close()
    }
)
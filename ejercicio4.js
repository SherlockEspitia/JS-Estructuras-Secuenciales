/*
Elabore un programa que permita ingresar el precio 
y la cantidad de un artículo a comprar. Calcular el total a pagar. (Considerar el IVA 19%).
*/

const readline = require('node:readline') 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese el precio del producto: ', 
    (a)=>{
      rl.question('Ingrese la cantidad comprada: ',
        (a1)=>{
            let total = a*a1
            console.log(`El producto cuesta $${a} por ${a1} unidades para un total de $${total} `)
            rl.close()
        })  
    }
)
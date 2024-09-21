/*
Calcular el nuevo salario de un empleado si se le descuenta el 20% de su salario actual.
*/
const readline = require('node:readline') 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese su salario actual: ',
    (a)=>{
        console.log(`El nuevo salario es ${a*0.8}`)
        rl.close()
    }
)
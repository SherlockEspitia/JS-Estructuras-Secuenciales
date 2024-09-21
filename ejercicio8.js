/*
Escriba un programa donde se ingrese el tiempo necesario para un cierto proceso en horas, minutos y segundos. 
Se calcule el costo total del proceso sabiendo que el costo por segundo es $200.
*/

const readline = require('node:readline') 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingresar el tiempo en el siguiente formato HH:MM:SS : ',
    (a)=>{
        let [h, m, s] = a.split(':')
        let costo = (Number(s) + Number(m)*60 + Number(h)*3600)*200
        console.log(`El costo del proceso es $${costo}`)
        rl.close()
    }
)
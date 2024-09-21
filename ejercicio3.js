/* Elabore un algoritmo que Calcula el precio de un boleto de viaje, 
tomando en cuenta el número de kilómetros que se van a recorrer, 
siendo el precio $500 por Km.
*/

const readline = require('node:readline') 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese la cantidad de kilometros recorridos: ',
    (a)=>{
        boleto = Number(a)*500
        console.log(`El costo de ${a}km es $${boleto}`);
        rl.close()       
    }
)
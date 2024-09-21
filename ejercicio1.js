/*
Un vendedor recibe un sueldo base más un 10% extra por comisión de sus ventas, 
el vendedor desea saber cuánto dinero obtendrá por concepto de comisiones por las tres ventas que realiza en el mes 
y el total que recibirá en el mes tomando en cuenta su sueldo base y comisiones
*/

const readline = require('node:readline') 
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let sueldo = 0;
let venta1 = 0;
let venta2 = 0;
let venta3 = 0;

rl.question('Ingrese su sueldo base: ', (a1)=>{
    sueldo=Number(a1)
    rl.question('Ingrese el valor de la primera venta: ', (a2)=>{
        venta1= Number(a2)
        rl.question('Ingrese el valor de la segunda venta: ', (a3)=>{
            venta2= Number(a3)
            rl.question('Ingrese el valor de la tecera venta: ', (a4)=>{
                venta3= Number(a4)
                let comisiones = (venta1+ venta2+ venta3)*0.10
                let salario = sueldo + comisiones
            
                console.log('El empleado gana por comisiones: ', comisiones)
                console.log('El salario total es: ', salario)
                rl.close()
            })
        })
    })
})


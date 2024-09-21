/*
Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa 
y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

La calificación de Matemáticas se obtiene de la siguiente manera:
Examen 90%
Promedio de tareas 10%
En esta materia se pidió un total de tres tareas

La calificación de Física de obtiene de la siguiente manera:
Examen 80%
Promedio de tareas 20%
En esta materia se pidió un total de dos tareas

La calificación de Química se obtiene de la siguiente manera:
Examen 85%
Promedio de tareas 15%
En esta materia se pidió un promedio de tres tareas.
*/


const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('node:process');

// Función para calcular el promedio de un array de números
function calcularPromedio(notas) {
    const suma = notas.reduce((a, b) => a + b, 0);
    return suma / notas.length;
}

// Función para calcular la calificación final de una materia
function calcularCalificacionFinal(examen, tareas, pesoExamen, pesoTareas) {
    const promedioTareas = calcularPromedio(tareas);
    return (examen * pesoExamen) + (promedioTareas * pesoTareas);
}

// Función para leer un array de números
async function leerArrayDeNumeros(rl, pregunta) {
    const respuesta = await rl.question(pregunta);
    return respuesta.split(',').map(Number);
}

async function main() {
    const rl = readline.createInterface({ input, output });

    try {
        // Leer datos de Matemáticas
        const examenMatematicas = await rl.question('Calificación del examen de Matemáticas: ');
        const tareasMatematicas = await leerArrayDeNumeros(rl, 'Calificaciones de las tareas de Matemáticas (separadas por comas): ');
        const calificacionMatematicas = calcularCalificacionFinal(Number(examenMatematicas), tareasMatematicas, 0.9, 0.1);

        // Leer datos de Física
        const examenFisica = await rl.question('Calificación del examen de Física: ');
        const tareasFisica = await leerArrayDeNumeros(rl, 'Calificaciones de las tareas de Física (separadas por comas): ');
        const calificacionFisica = calcularCalificacionFinal(Number(examenFisica), tareasFisica, 0.8, 0.2);

        // Leer datos de Química
        const examenQuimica = await rl.question('Calificación del examen de Química: ');
        const tareasQuimica = await leerArrayDeNumeros(rl, 'Calificaciones de las tareas de Química (separadas por comas): ');
        const calificacionQuimica = calcularCalificacionFinal(Number(examenQuimica), tareasQuimica, 0.85, 0.15);

        // Calcular promedio general
        const promedioGeneral = (calificacionMatematicas + calificacionFisica + calificacionQuimica) / 3;

        // Mostrar resultados
        console.log(`Calificación final en Matemáticas: ${calificacionMatematicas.toFixed(2)}`);
        console.log(`Calificación final en Física: ${calificacionFisica.toFixed(2)}`);
        console.log(`Calificación final en Química: ${calificacionQuimica.toFixed(2)}`);
        console.log(`Promedio general: ${promedioGeneral.toFixed(2)}`);
    } finally {
        rl.close();
    }
}

main().catch(console.error);
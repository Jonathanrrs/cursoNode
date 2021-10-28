require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {

        console.clear();
        console.log('================================='.green);
        console.log('   Selecciones una opción'.green);
        console.log('=================================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'3.'.green} Listar tareas pendientes`);
        console.log(`${'4.'.green} Completar tareas(s)`);
        console.log(`${'5.'.green} Borrar tarea`);
        console.log(`${'6.'.green} Salir \n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        /* La pregunta que hace  de hacer */
        readLine.question('Seleccione una opción: ', (opt) => {

            readLine.close(); /* cuando ya no se usa */
            resolve(opt);
        });

    });

}

const pausa = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        /* La pregunta que hace  de hacer */
        readLine.question(`\nPresiones ${'Enter'.green} para continuar\n`, (opt) => {
            readLine.close(); /* cuando ya no se usa */
            resolve();
        });
    })
}

module.exports = {
    mostrarMenu,
    pausa
}
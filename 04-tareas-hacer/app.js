require('colors');


const { inquirerMenu, pausaMenu } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');





const main = async () => {
    console.log('hola mundo');

    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log({opt});
       

        await pausaMenu();
    } while (opt !== '0');
}

main();
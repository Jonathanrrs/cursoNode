require('colors');


const { inquirerMenu, pausaMenu } = require('./helpers/inquirer');



console.clear();


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
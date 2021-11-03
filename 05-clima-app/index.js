require('dotenv').config();
const { inquirerMenu, pausaMenu, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
require('colors');


const main = async() => {
    
    let opt;

    do {
        
        const busquedas = new Busquedas();
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                /* mostrar mensaje */
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);

                /* Buscar los lugares */

                /* Seleccionar el lugar */

                /* clima */

                /* Mostrar resultados */
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:');
                console.log('Latitud:');
                console.log('Lng:');
                console.log('Temperatura:');
                console.log('Mínima:');
                console.log('Máxima:');
                break;
            case 2: 
                console.log('opcion2');
                break;
            
        }
        await pausaMenu();
    } while (opt !== 0);
}

main();
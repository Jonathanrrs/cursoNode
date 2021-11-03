require('dotenv').config();
const { inquirerMenu, pausaMenu, leerInput, listarLugares } = require("./helpers/inquirer");
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
                const termino = await leerInput('Ciudad: ');

                /* Buscar los lugares */
                const lugares = await busquedas.ciudad(termino);
                
                /* Seleccionar el lugar */
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find(l => l.id === id);
                // console.log(lugarSel);
                /* clima */

                /* Mostrar resultados */
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre);
                console.log('Latitud:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
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
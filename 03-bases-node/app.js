const {crearArchivo} = require('./helpers/multiplicar');


const argv = require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,

                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            default: false
                        })
                        .check((argv, options) => {
                            if(isNaN(argv.base)) {
                                throw 'La base debe ser un número'
                            }
                            return true
                        })
                        .argv;

console.clear();

crearArchivo(argv.base, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

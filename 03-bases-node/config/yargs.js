const argv = require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la  base de la tabla de multiplicar'

                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla en consola'
                        })
                        .option('h', {
                            alias: 'hasta',
                            type: 'number',
                            describe: 'Es el rango de la tabla'
                        })
                        .check((argv, options) => {
                            if(isNaN(argv.base)) {
                                throw 'La base debe ser un número'
                            }
                            return true
                        })
                        .argv;

module.exports = argv;
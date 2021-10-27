const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors'); /* es igual el require */

console.clear();

console.log(argv);
crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))

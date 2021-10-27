const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors'); /* es igual el require */

console.clear();

crearArchivo(argv.base, argv.listar)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))

const {crearArchivo} = require('./helpers/multiplicar');


console.clear();

const num = 7;

crearArchivo(num)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

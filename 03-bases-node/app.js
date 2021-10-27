const {crearArchivo} = require('./helpers/multiplicar');


console.clear();


const [,,arg3 = 'num=5'] = process.argv;
const [, num = 5] = arg3.split('=');
console.log(num); 

// const num = 7;

crearArchivo(num)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))

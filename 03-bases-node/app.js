const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv;

console.clear();



console.log(process.argv); 
console.log(argv); 

// const num = 7;

// crearArchivo(num)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err))

const fs = require('fs');

console.clear();
console.log('================');
console.log('   Tabla del 5');
console.log('================');

const num = 7;
let salida = '';
for (let index = 1; index <= 10; index++) {
    
    const multiplicar = num*index;
    salida += `${num} x ${index} = ${multiplicar}\n`; /* \n salto de linea */
}

console.log(salida);

fs.writeFile(`tabla-${num}.txt`, salida, (err) => {
   if(err) throw err;
   console.log(`Tabla-${num}.txt creado`); 
})
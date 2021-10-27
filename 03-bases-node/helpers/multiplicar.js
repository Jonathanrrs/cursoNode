const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (num = 10, listar) => {

    try {
      
        console.log('================'.green);
        console.log('   Tabla del'.green, colors.blue(num));
        console.log('================'.green);


        let salida = '';
        for (let index = 1; index <= 10; index++) {

            const multiplicar = num * index;
            salida += `${num} ${'x'.green} ${index} ${'='.green} ${multiplicar}\n`; /* \n salto de linea */
        }

        if(listar) {
            console.log(salida);
        }

        fs.writeFileSync(`tabla-${num}.txt`, salida);

        return (`Tabla-${num}.txt creado`);
    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivo
}
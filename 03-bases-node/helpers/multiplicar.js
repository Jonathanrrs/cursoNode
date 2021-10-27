const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (num = 10, listar, hasta = 10) => {

    try {
      
        console.log('================'.green);
        console.log('   Tabla del'.green, colors.blue(num));
        console.log('================'.green);


        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {

            const multiplicar = num * index;
            consola += `${num} ${'x'.green} ${index} ${'='.green} ${multiplicar}\n`; /* \n salto de linea */
            salida += `${num} x ${index} = ${multiplicar}\n`; /* \n salto de linea */
        }

        if(listar) {
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);

        return (`Tabla-${num}.txt creado`);
    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivo
}
const fs = require('fs');

const crearArchivo = async (num = 10) => {

    try {
        console.log('================');
        console.log(`   Tabla del ${num}`);
        console.log('================');


        let salida = '';
        for (let index = 1; index <= 10; index++) {

            const multiplicar = num * index;
            salida += `${num} x ${index} = ${multiplicar}\n`; /* \n salto de linea */
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${num}.txt`, salida);

        return (`Tabla-${num}.txt creado`);
    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivo
}
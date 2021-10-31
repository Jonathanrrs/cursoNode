class Busquedas {

    historial = ['Colima', 'Madrid', 'New York'];

    constructor() {
        //Todo: leer Db si existe
    }

    async ciudad(lugar = '') {
        /* petición http */
        console.log(lugar);

        return []; /* retornar los lugares */
    }
}

module.exports = Busquedas;
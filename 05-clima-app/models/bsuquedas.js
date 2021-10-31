const axios = require('axios');

class Busquedas {

    historial = ['Colima', 'Madrid', 'New York'];

    constructor() {
        //Todo: leer Db si existe
    }

    async ciudad(lugar = '') {
        /* petición http */
        // console.log('Ciudad',lugar);

        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data);

        return []; /* retornar los lugares */
    }
}

module.exports = Busquedas;
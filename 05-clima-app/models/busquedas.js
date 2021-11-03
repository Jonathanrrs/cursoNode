const axios = require('axios');

class Busquedas {

    historial = ['Colima', 'Madrid', 'New York'];

    constructor() {
        //Todo: leer Db si existe
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': '5',
            'language': 'es'
        }
    }

    get paramsWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    async ciudad(lugar = '') {

        try {
            /* petición http */
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            });

            const resp = await instance.get();

            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            })) /* regresar objeto de manera implicita */

        } catch (error) {
            return [];
        }

        // return []; /* retornar los lugares */
    }

    async climaLugar(lat, lon) {
        try {
            /* instancia axios */
           
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?`,
                params: {...this.paramsWeather, lat, lon}
               
            })
            // resp.data
            const resp = await instance.get();
            const {main, weather} = resp.data
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Busquedas;
const axios = require('axios');

const getClima = async(lat, lng) => {
    try {
        let resultado = await (axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9604647e495fd8e4063b25f14ef1b056`));
        return resultado.data.main.temp;
    } catch (error) {
        throw new Error(`No se encontró la temperatura del los datos latitud:${lat} longitud:${lng}`);
    }


    // if (resultado.response.status === '400') {
    //     throw new Error(`No se encontró la temperatura del los datos latitud:${lat} longitud:${lng}`);
    // } else {
    //     return resultado.data.main.temp;
    // }
}

module.exports = {
    getClima
}
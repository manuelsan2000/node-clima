const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedURI = encodeURI(direccion);

    let respuesta = await (axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURI}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`))

    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    } else {
        let location = respuesta.data.results[0];
        return {
            direccion: location.formatted_address,
            lat: location.geometry.location.lat,
            lng: location.geometry.location.lng
        }
    }
}

// console.log(desc);

module.exports = {
    getLugarLatLng
}
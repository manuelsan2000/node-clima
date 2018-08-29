// const axios = require('axios');

// const argv = require('yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad',
        demand: true
    }
}).argv;

// const argv = require('yargs').options({
//     latitud: {
//         alias: 'lat',
//         desc: 'Latitud del punto',
//         demand: true
//     },
//     longitud: {
//         alias: 'lng',
//         desc: 'Longitud del punto',
//         demand: true
//     }
// }).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await (lugar.getLugarLatLng(direccion));
        let temp = await (clima.getClima(coors.lat, coors.lng));
        // console.log(`La temperatura es ${temp}`);
        return `La temperatura en ${coors.direccion} es ${temp}`;
    } catch (e) {
        console.log(`No se pudo determinar la temperatura en ${direccion}`);
    }
}

getInfo(argv.direccion)
    .then(rst => console.log(rst))
    .catch(error => console.log(error));

// clima.getClima(argv.latitud, argv.longitud)
//     .then(rst => {
//         console.log('==========================');
//         console.log(rst);
//         console.log('==========================');
//     })
//     .catch(error => {
//         console.log(error);
//         console.log('*************************');
//     })

// lugar.getLugarLatLng(argv.direccion)
//     .then(direccion => {
//         // console.log(`Direccion: ${ direccion.direccion}`);
//         // console.log(`Lat: ${ direccion.lang}`);
//         // console.log(`Lng: ${ direccion.lng}`);
//         console.log(direccion);
//     })
//     .catch(error => console.log(error));
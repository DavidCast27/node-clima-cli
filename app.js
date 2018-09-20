const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err.message);
// });

// clima.getClima(10.3910485, -75.4794257).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err.message);
// });

let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);
    return `El clima en ${coors.direccion} es de ${temp} ºC`
}


getInfo(argv.direccion).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err.message);
});
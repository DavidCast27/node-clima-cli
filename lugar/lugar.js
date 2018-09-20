const axios = require('axios');
const apiKey = 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI';

const getLugarLatLng = async(direccion) => {
    let direccionEncodeUri = encodeURI(direccion);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${direccionEncodeUri}&key=${apiKey}`;
    let resp = await axios.get(url)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let { lat: latitud, lng: longitud } = location.geometry.location;
    return {
        direccion: location.formatted_address,
        lat: latitud,
        lng: longitud
    }
}

module.exports = {
    getLugarLatLng
}
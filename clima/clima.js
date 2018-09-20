const axios = require('axios');
const apiKey = '4e7ef28bae8afe811f6e9f9c0f753159';

const getClima = async(lat, lng) => {

    let latEncodeUri = encodeURI(lat);
    let lngEncodeUri = encodeURI(lng);

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latEncodeUri}&lon=${lngEncodeUri}&units=metric&appid=${apiKey}`;
    let resp = await axios.get(url)
    if (resp.cod === 400) {
        throw new Error(`No hay resultados para las coordenadas ${lat}, ${lng}`);
    } else {
        return resp.data.main.temp;
    }
}

module.exports = {
    getClima
}

const axios = require('axios');

const API_KEY_WEATHER = 'b830ba2299bbb2c76d9e238e8830e53f';

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${API_KEY_WEATHER}`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
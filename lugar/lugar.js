const axios = require('axios');

const API_KEY = 'AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ';

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI( direccion );
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=${ API_KEY }`)
    let status = resp.data.status;

    if ( status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad: ${ direccion }`);
    } 
      
    let location = resp.data.results[0];
    let formatted_address = location.formatted_address;

    let coord = location.geometry.location;
    let lat = Number(coord.lat.toFixed(2));
    let lng = Number(coord.lng.toFixed(2));

    return {
        direccion: formatted_address,
        lat: lat,
        lng: lng
    }
}

module.exports = {
    getLugarLatLng
}
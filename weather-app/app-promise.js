const yargs = require('yargs');
const axios = require('axios');



const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


let encodedAddress = encodeURIComponent(argv.address);
let geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

console.log(geoCodeUrl);


axios.get(geoCodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable the find the address.');
        }
        console.log(response.data.results[0].formatted_address);


        let latitude = response.data.results[0].geometry.location.lat;
        let longitude = response.data.results[0].geometry.location.lng;
        let weatherUrl = `https://api.darksky.net/forecast/a2b0348f7fa5d9fb164cc5c3ff9a4f8a/${latitude},${longitude}?exclude=minutely,hourly,daily,alerts,flags&units=si`;
        return axios.get(weatherUrl);

    })
    .then((response) => {
        let temperature = response.data.currently.temperature;
        let apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`Its currently ${temperature}. It feels like ${apparentTemperature}.`);
        
    })
    .catch((error) => {
        if (error.code === 'ENOTFOUND') {
            console.log('Unable to connect to API server');
        } else {
            console.log(error.message);
        }
    });
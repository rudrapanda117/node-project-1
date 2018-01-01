const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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



geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});


//a2b0348f7fa5d9fb164cc5c3ff9a4f8a

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/a2b0348f7fa5d9fb164cc5c3ff9a4f8a/12.9496676,77.7012903?exclude=minutely,hourly,daily,alerts,flags',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to forecast.io server.');
    } else if (response.statusCode === 400) {
        console.log('Unable to fetch WebAuthnAssertion.');
    } else if (response.statusCode === 200) {
        console.log(body.currently.temperature);
    }

});
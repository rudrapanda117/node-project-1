const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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
        weather.getWeather(results.latitude, results.longitude, (erroMesssage, weatherResults) => {
            if (erroMesssage) {
                console.log(erroMesssage);
            } else {
               // console.log(JSON.stringify(weatherResults, undefined, 2));
               console.log(`It's currently ${weatherResults.temperature} celcius. It feels like ${weatherResults.apparentTemperature} celcius.`);
               

            }
        });
    }
});


//a2b0348f7fa5d9fb164cc5c3ff9a4f8a
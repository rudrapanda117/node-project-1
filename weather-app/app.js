const request = require('request');
const yargs = require('yargs');

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

let address = argv.address;
let encodedAddress = encodeURIComponent(address);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to google server!');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find the address!');
    }
    else if (body.status === 'INVALID_REQUEST') {
        console.log(body.error_message);
    } else if (body.status === 'OK') {
        //  console.log(JSON.stringify(response, undefined, 2));
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lng}`);
    }

})
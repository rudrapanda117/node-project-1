const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=munnekolala,%20marathalli,bengaluru',
    json: true
}, (error, response, body) => {
    console.log(body);
    
})
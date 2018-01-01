const request = require('request');




let getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/a2b0348f7fa5d9fb164cc5c3ff9a4f8a/${latitude},${longitude}?exclude=minutely,hourly,daily,alerts,flags&units=si`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to forecast.io server.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }

    });
};

module.exports.getWeather = getWeather;
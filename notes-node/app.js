console.log('Starting App.js');


const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo();

//console.log(user);


fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.age} `, function (err) {
    if (err) {
        console.log('Unable to write file');

    }
});
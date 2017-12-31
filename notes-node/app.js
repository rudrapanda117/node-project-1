console.log('Starting App.js');


const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo();
//console.log(user);

let res = notes.addNote();
console.log(res);

let addRes = notes.add(1, 2);
console.log(addRes);




// fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.addNote()} `, function (err) {
//     if (err) {
//         console.log('Unable to write file');

//     }
// });
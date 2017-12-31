console.log('Starting App.js');


const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

let user = os.userInfo();
//console.log(user);

let res = notes.addNote();
console.log(res);

let addRes = notes.add(1, 2);
console.log(addRes);


console.log(_.partition([1, 2, 3, 4], n => n % 2));
console.log(_.isString('abc'));






// fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.addNote()} `, function (err) {
//     if (err) {
//         console.log('Unable to write file');

//     }
// });
console.log('Starting App.js');


const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

console.log(process.argv);


let command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') {
    console.log('adding new note');

} else if (command === 'list') {
    console.log('listing all notes');

} else if (command === 'read') {
    console.log(' reading notes');

} else if (command === 'remove') {
    console.log('remove notes');

} else {
    console.log('Command not recognized');

}
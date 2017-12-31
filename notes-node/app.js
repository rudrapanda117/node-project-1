console.log('Starting App.js');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


let argv = yargs.argv ;
let command = process.argv[2];


console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
   let note = notes.addNote(argv.title, argv.body);
   if(_.isEmpty(note)) {
       console.log('Note is already in use');       
   } else {
       console.log('Note Created '+ 'with title: ',note.title+ 'with body: '+ note.body);
       
   }
} else if (command === 'list') {
   notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}
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
       console.log('Note Created');
       notes.logNote(note);
       
   }
} else if (command === 'list') {
   notes.getAll();
} else if (command === 'read') {
    let note = notes.readNote(argv.title);
    if(_.isEmpty(note)) {
        console.log('Note not found');        
    }else {
        console.log(`Note found.`);
        notes.logNote(note);
    }
} else if (command === 'remove') {
    let notesRemoved = notes.removeNote(argv.title);
    let message = notesRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
    
} else {
    console.log('Command not recognized');
}

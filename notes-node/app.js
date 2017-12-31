const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

let titleArgDesc = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
let bodyArgDesc = {
    describe: ' body of note',
    demand: true,
    alias: 'b'
}

let argv = yargs
.command('add','Add a new note', {
    title: titleArgDesc,
    body: bodyArgDesc
})
.command('list','List all notes')
.command('read','Read note',{
    title: titleArgDesc
})
.command('remove','Remove a note',{
    title: titleArgDesc,
})
.help()
.argv ;
let command = process.argv[2];

if (command === 'add') {
   let note = notes.addNote(argv.title, argv.body);
   if(_.isEmpty(note)) {
       console.log('Note is already in use');       
   } else {
       console.log('Note Created');
       notes.logNote(note);
       
   }
} else if (command === 'list') {
   let noteList = notes.getAll();
   console.log(`Printing ${noteList.length} note(s).`);
   noteList.forEach(note => {
    notes.logNote(note);
   });
   
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

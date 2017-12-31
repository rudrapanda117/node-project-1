console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    console.log('Adding note ', title, body);
    let notes = [];
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {}

    let note = {
        title,
        body
    };


    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else  {
        console.log('Avoiding adding same title: ', title);
        
    }




};

var getAll = () => {
    console.log('Getting all notes');
}

var readNote = (title) => {
    console.log('Reading note: ', title);
}

var removeNote = (title) => {
    console.log('Removing note: ', title);
}


module.exports = {
    //addNote: addNote
    addNote, // Es6 format
    getAll,
    readNote,
    removeNote
}
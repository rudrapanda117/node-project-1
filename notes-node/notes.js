console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {

    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }

};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    console.log('Adding note ', title, body);
    let notes = fetchNotes();

    let note = {
        title,
        body
    };


    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log('Avoiding adding same title: ', title);
        return {};

    }
};

var getAll = () => {
    console.log('Getting all notes');
}

var readNote = (title) => {
    console.log('Reading note: ', title);
}

var removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    if(notes.length !== filteredNotes.length) {
        return true;
    } else {
        return false;
    }
}


module.exports = {
    //addNote: addNote
    addNote, // Es6 format
    getAll,
    readNote,
    removeNote
}
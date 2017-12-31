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

let addNote = (title, body) => {
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

let getAll = () => {
    return fetchNotes();
}

let readNote = (title) => {
   let notes = fetchNotes();
   let filteredNotes = notes.filter((note) => note.title === title);
   return filteredNotes.length > 0 ? filteredNotes[0] : {} ;
}

let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    if(notes.length !== filteredNotes.length) {
        return true;
    } else {
        return false;
    }
}

let logNote = (note) => {
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}


module.exports = {
    //addNote: addNote
    addNote, // Es6 format
    getAll,
    readNote,
    removeNote,
    logNote
}
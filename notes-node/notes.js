console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note ', title, body);
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
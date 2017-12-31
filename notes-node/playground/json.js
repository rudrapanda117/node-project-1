let obj = {
    name: 'Rudrasish'
};

let stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);


let personString = '{"name": "Rudrasish","age":25}';
let personJson = JSON.parse(personString);

console.log(typeof personJson);
console.log(personJson);
console.log(personJson.name, personJson.age);


const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: ' Some body'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let noteObj = JSON.parse(noteString);

console.log(noteObj.title, noteObj.body);




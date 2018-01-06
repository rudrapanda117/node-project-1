const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello world!');
});

app.listen(8700);

module.exports.app = app;
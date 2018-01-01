const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.use((req, res, next) => {
    let now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);  
    let log =   `${now}: ${req.method} ${req.url}`;
    fs.appendFile('Server.log',log+'\n', (err) => {
        console.log('Unable to append to server.log .');        
    })
    next();
});

app.use((req, res, next) => {
    //res.render('maintenance.hbs');
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        aboutMessage: 'This is about page',
        pageTitle: 'About Page'
    });
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(8900, () => {
    console.log('Server is up on port 3000');

});
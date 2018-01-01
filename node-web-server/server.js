const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('home.hbs',{
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my website'
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
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
const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});



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
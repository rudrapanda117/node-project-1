const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.send('<h1>Hi, hello Express!</h1>');
    //response.send({a:1,b:2});
});

app.get('/about', (request, response) => {
    response.send('<h1>About page</h1>');
});

app.get('/bad', (request, response) => {
    response.send({
            errorMessage: 'Unable to handle request'
    });
});

app.listen(8900, () => {
    console.log('Server is up on port 3000');
    
});
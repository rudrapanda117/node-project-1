let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey . it worked');
       // reject(' Unable to fulfill promise.')
    }, 2000);
});

somePromise.then((result) => {
    console.log('result', result);
}, (errorMessage) => {
    console.log('error:', errorMessage);
});
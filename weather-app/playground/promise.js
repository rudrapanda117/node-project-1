let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be number');
            }
        }, 2000);
    });
}

let promise = asyncAdd(1, 2);

promise.then((result) => {
        console.log(result);
        return asyncAdd(result , 4);
    },
    (errorMessage) => {
        console.log(errorMessage);
    })
    .then((result) => {
        console.log(result);
    },
    (errorMessage) => {
        console.log(errorMessage);
    })
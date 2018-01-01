let getUser = (id, callback) => {
    let user = {
        id:id,
        name: 'rudrasish'
    }

    setTimeout(() => {callback(user);}, 3000)
    
};

getUser(1, (user) => { console.log('Got user: ', user);});
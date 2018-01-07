const db = require('./db');

module.exports.handleSignUp = (email, password) => {
    db.saveUser({
        // Es 6 syntax
        email,
        password
    })
}
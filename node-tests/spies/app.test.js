const expect = require('expect');

// This requires expect library prior to v21 as library after v21 is not backward compatible
// better go for chai or sinnon


// used for monkey patching the node test
const rewire = require('rewire');


var app = rewire('./app');


describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy cotrrectly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });


    it('should call userSaver with user object', () => {
        let email = 'truhkjg@ujhf.com';
        let password = '123';

        app.handleSignUp(email, password);
        expect(db.saveUser). toHaveBeenCalledWith({email, password});
    })

});
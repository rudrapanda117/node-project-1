const utils = require('./utils');


describe('util test', () => {


    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        if (res != 44) {
            throw new Error(` Expected 44, but got ${res}`)
        }
    });

    it('should square a numbers', () => {
        var res = utils.square(3);
        if (res != 9) {
            throw new Error(` Expected 9, but got ${res}`)
        }
    });

});
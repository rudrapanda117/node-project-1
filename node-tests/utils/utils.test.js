const expect = require('expect');

const utils = require('./utils');


describe('util test', () => {


    it('should add two numbers', () => {
        var res = utils.add(33, 11);
       expect(res).toBe(44);
    //  /  expect(res).toNotBeA('number');

    });

    it('should square a numbers', () => {
        var res = utils.square(3);
        expect(res).toBe(9);
       // expect(res).toBeA('number')
    });

});
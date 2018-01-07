const expect = require('expect');

// This requires expect library prior to v21 as library after v21 is not backward compatible
// better go for chai or sinnon

describe('App', () => {

    it('should call the spy cotrrectly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });
});
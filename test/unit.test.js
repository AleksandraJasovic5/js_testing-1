const assert = require('assert');
const MyMath = require('../Maths');

describe('Maths test', function() {
    it('Test if 1 + 1 = 2', function() {
        assert.equal(MyMath.add(1, 1), 2);
    });

    it('Test if 1 - 1 = 0', function() {
        assert.equal(MyMath.sub(1, 1), 0);
    });
       it('Test if 16 / 4 = 4', async function() {
        assert.equal(MyMath.divide(16,4), 4);
    });
    it('Test if 2 * 3 * 5 = 30', function() {
        assert.equal(MyMath.multiply(2, 3, 5), 30);
    });
});

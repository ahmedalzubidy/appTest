const srcJS = require('../../src.js');
const {use, expect, assert} = require('chai');
const chaiPromised = require('chai-as-promised');
const sinon = require('sinon');

use(chaiPromised);

describe('srcJS.js', function () {
    describe('cal', function () {
        it('should return the total', function (done) {
            let data = srcJS.cal(1);
            expect(data).to.be.not.null;
            expect(data.toString()).to.equals('2');
            done();
        });
    });
});
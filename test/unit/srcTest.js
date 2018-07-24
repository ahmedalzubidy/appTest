const srcJS = require('../../src.js');
const {
  use,
  expect
} = require('chai');
const chaiPromised = require('chai-as-promised');

use(chaiPromised);

describe('srcJS.js', function () {
  describe('cal', function () {
    it('should return the total', function (done) {
      const data = srcJS.cal(1);
      expect(data.toString()).to.equals('2');
      done();
    });
  });
});

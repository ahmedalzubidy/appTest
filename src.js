console.log('hello world!');

const x = 1;

class AppTest {}

AppTest.prototype.cal = function cal(y) {
  return (x + y);
};

module.exports = new AppTest();

console.log('hello world!')

var x = 1;

class appTest {}

appTest.prototype.cal = function cal(y){
    return (x+y);
}

module.exports = new appTest();
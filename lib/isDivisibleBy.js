var toFloat = require('./toFloat');
var toInt = require('./toInt');

module.exports = function (str, num) {
  return toFloat(str) % toInt(num) === 0;
};

var isFullWidth = require('./isFullWidth');
var isHalfWidth = require('./isHalfWidth');

module.exports = function(str) {
  return isFullWidth(str) && isHalfWidth(str);
};

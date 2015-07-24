var isHexadecimal = require('./isHexadecimal');

module.exports = function(str) {
  return isHexadecimal(str) && str.length === 24;
};


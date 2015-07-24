var toString = require('./toString');

module.exports = function (str, elem) {
  return str.indexOf(toString(elem)) >= 0;
};

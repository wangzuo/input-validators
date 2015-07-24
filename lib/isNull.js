var toString = require('./toString');

module.exports = function (str) {
  return toString(str).length === 0;
};

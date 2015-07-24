var toString = require('./toString');

module.exports = function(str, comparison) {
  return str === toString(comparison);
};

var toDate = require('./toDate');

module.exports = function(str, date) {
  var comparison = toDate(date || new Date());
  var original = toDate(str);
  return original && comparison && original < comparison;
};

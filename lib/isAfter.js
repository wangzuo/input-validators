var toDate = require('./toDate');

module.exports = function(str, date) {
  var comparison = toDate(date || new Date())
    , original = toDate(str);

  return !!(original && comparison && original > comparison);
};

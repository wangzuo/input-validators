module.exports = function(str) {
  return !isNaN(Date.parse(str));
};

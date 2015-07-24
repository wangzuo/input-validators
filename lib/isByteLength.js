module.exports = function(str, min, max) {
  return str.length >= min && (typeof max === 'undefined' || str.length <= max);
};

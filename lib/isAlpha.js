var alpha = /^[A-Z]+$/i;

module.exports = function(str) {
  return alpha.test(str);
};

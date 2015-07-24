var numeric = /^[-+]?[0-9]+$/;

module.exports = function (str) {
  return numeric.test(str);
};

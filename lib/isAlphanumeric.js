var alphanumeric = /^[0-9A-Z]+$/i;

module.exports = function(str) {
  return alphanumeric.test(str);
};

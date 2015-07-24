var ascii =  /^[\x00-\x7F]+$/;

module.exports = function(str) {
  return ascii.test(str);
};

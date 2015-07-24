var hexadecimal = /^[0-9A-F]+$/i;

module.exports = function (str) {
  return hexadecimal.test(str);
};

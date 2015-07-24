var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

module.exports = function(str) {
  return hexcolor.test(str);
};

module.exports = function (str, chars) {
  var pattern = chars ? new RegExp('[' + chars + ']+$', 'g') : /\s+$/g;
  return str.replace(pattern, '');
};


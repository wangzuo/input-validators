module.exports = function (str, chars) {
  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
};

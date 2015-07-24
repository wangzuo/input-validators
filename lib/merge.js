module.exports = function(obj, defaults) {
  obj = obj || {};
  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  
  return obj;
}

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

module.exports = function(str) {
  return surrogatePair.test(str);
};

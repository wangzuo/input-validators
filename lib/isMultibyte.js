var multibyte = /[^\x00-\x7F]/;

module.exports =  function (str) {
  return multibyte.test(str);
};

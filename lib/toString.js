module.exports = function (input) {
  if (typeof input === 'object' && input !== null && input.toString) {
    input = input.toString();
  } else if (input === null || typeof input === 'undefined' || (isNaN(input) && !input.length)) {
    input = '';
  } else if (typeof input !== 'string') {
    input += '';
  }
  return input;
}; 

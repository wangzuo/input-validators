var merge = require('./merge');
var isEmail = require('./isEmail');

var default_normalize_email_options = {
  lowercase: true
};

module.exports = function (email, options) {
  options = merge(options, default_normalize_email_options);
  if (!isEmail(email)) {
    return false;
  }
  var parts = email.split('@', 2);
  parts[1] = parts[1].toLowerCase();
  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    parts[0] = parts[0].toLowerCase().replace(/\./g, '');
    if (parts[0][0] === '+') {
      return false;
    }
    parts[0] = parts[0].split('+')[0];
    parts[1] = 'gmail.com';
  } else if (options.lowercase) {
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
};


var merge = require('./merge');

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_space_after_digits: false
};

function currencyRegex(options) {
  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?')
    , negative = '-?'
    , whole_dollar_amount_without_sep = '[1-9]\\d*'
    , whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*'
    , valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep]
    , whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?'
    , decimal_amount = '(\\' + options.decimal_separator + '\\d{2})?';
  var pattern = whole_dollar_amount + decimal_amount;
  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    }
    else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }
  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = '( (?!\\-))?' + pattern;
  }
  else if (options.allow_space_after_symbol) {
    pattern = ' ?' + pattern;
  }
  else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }
  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }
  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
    }
    else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }
  return new RegExp(
    '^' +
      // ensure there's a dollar and/or decimal amount, and that it doesn't start with a space or a negative sign followed by a space
      '(?!-? )(?=.*\\d)' +
      pattern +
      '$'
  );
}


module.exports = function (str, options) {
  options = merge(options, default_currency_options);
  return currencyRegex(options).test(str);
};

var phones = {
  'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'pt-PT': /^(\+351)?9[1236]\d{7}$/,
  'el-GR': /^(\+30)?((2\d{9})|(69\d{8}))$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'en-ZM': /^(\+26)?09[567]\d{7}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/
};

module.exports = function(str, locale) {
  if (locale in phones) {
    return phones[locale].test(str);
  }
  return false;
};

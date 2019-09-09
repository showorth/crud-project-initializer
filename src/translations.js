import Polyglot from 'node-polyglot';

const phrases = require('./phrases');

export const polyglot = new Polyglot({ phrases, locale: 'en-CA' });

export const setLocale = (locale) => {
  polyglot.locale(locale);
};

export default function translate(key, args) {
  const localeKey = `${polyglot.currentLocale}.${key}`;
  return polyglot.t(localeKey, args);
}

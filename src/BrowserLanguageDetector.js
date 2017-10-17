/* eslint-disable quotes */
import {flatten} from '../src/utils';

const defaultOptions = {
  fallbackLanguage: 'en',
  queryString: 'lang',
  detectors: []
};

class BrowserLanguageDetector {
  static config(options) {
    this.options = {...defaultOptions, ...options};
    return this;
  }

  static detect() {
    if (!this.options) this.config();
    const detectors = this.options.detectors.map(A => new A(this.options).detect());
    this.languages = flatten(detectors.map(a => a.languages));

    this.lang = this.selectPreferredLanguage(this.options.fallbackLanguage, this.languages);

    return this;
  }

  static selectPreferredLanguage(fallbackLanguage, languages = []) {
    if (!fallbackLanguage) {
      throw new Error('fallbackLanguage is not defined');
    }
    const navigatorLanguageIndex = languages.indexOf(fallbackLanguage);
    return languages[navigatorLanguageIndex] || fallbackLanguage;
  }
}

export default BrowserLanguageDetector.detect();
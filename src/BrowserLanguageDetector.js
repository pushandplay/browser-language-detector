/* eslint-disable quotes */
import {flatten, uniq} from '../src/utils';

const defaultOptions = {
  fallbackLanguage: 'en',
  queryString: 'lang',
  detectors: []
};

class BrowserLanguageDetector {
  static config(configOptions) {
    this.options = {...defaultOptions, ...this.options, ...configOptions};
    return this.detect();
  }

  static detect() {
    if (!this.options) this.config();
    const detectorsResult = this.options.detectors.map(A => new A(this.options).detect());
    this.languages = uniq(flatten(detectorsResult.map(a => a.languages)));
    this.language = this.selectPreferredLanguage(this.options.fallbackLanguage, this.languages);

    console.log(detectorsResult);

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

export default BrowserLanguageDetector;
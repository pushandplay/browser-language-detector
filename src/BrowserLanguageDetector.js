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
    const detectorsResult = this.applyDetectors(this.options.detectors, this.options);
    this.languages = uniq(flatten(detectorsResult.map(a => a.languages)));
    this.language = this.selectPreferredLanguage(this.options.fallbackLanguage, this.languages);

    return this;
  }

  static applyDetectors(detectors, detectorsOptions) {
    return detectors.map(A => new A(detectorsOptions).detect());
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
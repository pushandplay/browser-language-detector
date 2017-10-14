import {flatten} from '../src/utils';
import NavigatorDetector from './detectors/NavigatorDetector';
import HTMLTagDetector from './detectors/HTMLTagDetector';
import QueryStringDetector from './detectors/QueryStringDetector';

const defaultOptions = {
  fallbackLanguage: 'en',
  queryString: 'lang',
  detectors: [NavigatorDetector, HTMLTagDetector, QueryStringDetector]
};

class BrowserLanguageDetector {
  static config(options) {
    this.options = {...defaultOptions, ...options};
    return this;
  }

  static detect() {
    if (!this.options) this.config();
    const detectors = this.getDetectors();
    const languages = []
      .concat(
        detectors.navigator.languages,
        detectors.queryString.languages,
        detectors.htmlTag.languages,
      );

    this.lang = this.selectPreferredLanguage(languages);

    return this;
  }

  static getDetectors() {
    const detectors = this.options.detectors.map(A => new A(this.options).detect());
    const langs = detectors.map(a => a.languages);
    console.log(flatten(langs));
    return {
      navigator: new NavigatorDetector(this.options).detect(),
      queryString: new QueryStringDetector(this.options).detect(),
      htmlTag: new HTMLTagDetector(this.options).detect(),
    };
  }

  static selectPreferredLanguage(languages) {
    const navigatorLanguageIndex = languages.indexOf(this.options.fallbackLanguage);
    return languages[navigatorLanguageIndex] || this.options.fallbackLanguage;
  }
}

export default BrowserLanguageDetector;
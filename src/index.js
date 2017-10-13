import NavigatorDetector from './detectors/NavigatorDetector';
import HTMLTagDetector from './detectors/HTMLTagDetector';
import QueryStringDetector from './detectors/QueryStringDetector';

const defaultOptions = {
  fallbackLanguage: 'en',
  whiteListLanguages: [],
  queryString: 'lang'
};

class BrowserLanguageDetector {
  static config(options) {
    this.options = {...defaultOptions, ...options, target: this};
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
    return {
      navigator: new NavigatorDetector(this.options),
      queryString: new QueryStringDetector(this.options),
      htmlTag: new HTMLTagDetector(this.options),
    };
  }

  static selectPreferredLanguage(languages) {
    const navigatorLanguageIndex = languages.indexOf(this.options.fallbackLanguage);
    return languages[navigatorLanguageIndex] || this.options.fallbackLanguage;
  }
}

export default BrowserLanguageDetector;
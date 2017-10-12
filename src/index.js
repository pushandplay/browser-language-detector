import NavigatorDetector from './detectors/NavigatorDetector';
import HTMLTagDetector from './detectors/HTMLTagDetector';
import QueryStringDetector from './detectors/QueryStringDetector';

const defaultOptions = {
  defaultLanguage: 'en',
  whiteListLanguages: [],
  queryString: 'lang'
};

class BrowserLanguageDetector {
  static config(options) {
    this.options = {...defaultOptions, ...options};
    return this;
  }

  static detect() {
    const navigatorDetector = new NavigatorDetector(this.options);
    const queryStringDetector = new QueryStringDetector(this.options);
    const htmlTagDetector = new HTMLTagDetector(this.options);
    const languages = []
      .concat(
        navigatorDetector.detect(),
        queryStringDetector.detect(),
        htmlTagDetector.detect(),
      );

    //  TODO: in progress
    return BrowserLanguageDetector.selectPreferredLanguage(languages);
  }

  static selectPreferredLanguage(languages) {
    const navigatorLanguageIndex = languages.indexOf(this.options.defaultLanguage);
    return languages[navigatorLanguageIndex] || this.options.defaultLanguage;
  }
}

export default BrowserLanguageDetector;
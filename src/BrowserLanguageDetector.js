/* eslint-disable quotes */
import {flatten, uniq} from '../src/utils';

const defaultOptions = {
  fallbackLanguage: 'en',
  queryString: 'lang',
  plugins: [],
  whiteListLanguages: []
};

class BrowserLanguageDetector {
  static config(configOptions) {
    this.options = {...defaultOptions, ...this.options, ...configOptions};
    return this.detect();
  }

  static detect() {
    if (!this.options) this.config();
    const pluginsResult = this.applyPlugins(this.options.plugins, this.options);
    this.languages = uniq(flatten(pluginsResult.map(a => a.languages)));
    this.language = this.selectPreferredLanguage(this.options.fallbackLanguage, this.languages);

    return this;
  }

  static applyPlugins(plugins, options) {
    return plugins.map(A => new A(options).detect());
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
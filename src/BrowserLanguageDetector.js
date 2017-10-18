/* eslint-disable quotes */
import {flatten, uniq} from '../src/utils';

const defaultOptions = {
  fallbackLanguage: 'en',
  // queryString: 'lang', TODO: move into QueryStringPlugin
  plugins: [],
  whiteListLanguages: []
};

class BrowserLanguageDetector {
  /**
   * Apply user config
   * @param {object} configOptions - Object with user config
   * @return {BrowserLanguageDetector} Return BrowserLanguageDetector with applied config
   */
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

  /**
   * Apply plugins
   * @param {array} plugins - List of applyed plugins
   * @param {opject} options - Object with user preferences
   * @return {array} Array with result of applied plugins
   */
  static applyPlugins(plugins, options) {
    return plugins.map(A => new A(options).detect());
  }

  /**
   * Apply supported languages
   * @param {array} languages - list of supported languages
   * @param {string} fallbackLanguage - Fallback language
   * @return {array} List of languages
   */
  static applyWhiteListLanguages(languages, fallbackLanguage) {
    return languages;
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
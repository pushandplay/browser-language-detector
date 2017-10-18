/* eslint-disable quotes */
import {flatten, uniq} from '../src/utils';

const defaultOptions = {
  fallbackLanguage: 'en',
  // precision: false, TODO:
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
    this.languages = this.applyWhiteListLanguages(this.languages, this.options.whiteListLanguages);
    this.language = this.selectPreferredLanguage(this.languages, this.options.fallbackLanguage);

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
   * @param {array} languages - list of detected languages
   * @param {string} whiteListLanguages - List of supported  languages
   * @return {array} List of languages
   */
  static applyWhiteListLanguages(languages, whiteListLanguages) {
    if (whiteListLanguages && whiteListLanguages.length) {
      return languages.filter(language => whiteListLanguages.indexOf(language) !== -1);
    }
    return languages;
  }

  /**
   * Apply fallback language
   * @param {array} languages - List of supported languages
   * @param {string} fallbackLanguage - Fallback language
   * @return {array} List of languages
   */
  static applyFallbackLanguage(languages, fallbackLanguage) {
    if (languages.indexOf(fallbackLanguage) !== -1) {
      return languages;
    }
    return [fallbackLanguage];
  }

  /**
   * @param {array} languages - List of supported languages
   * @param {string} fallbackLanguage
   */
  static selectPreferredLanguage(languages = [], fallbackLanguage) {
    if (!fallbackLanguage) {
      throw new Error('fallbackLanguage is not defined');
    }

    const navigatorLanguageIndex = languages.indexOf(fallbackLanguage);
    return languages[navigatorLanguageIndex] || fallbackLanguage;
  }
}

export default BrowserLanguageDetector;
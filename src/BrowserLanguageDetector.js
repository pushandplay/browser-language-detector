/* eslint-disable quotes */
/**
 * How it works ...
 * TODO
 */
import {flatten, uniq} from '../src/utils';

const defaultOptions = {
  fallbackLanguage: undefined,
  // precision: false, TODO: will be implemented in next version
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

    if (!this.options.plugins && !this.options.plugins.length) {
      throw new Error('Using no one plugins');
    }
    if (!this.options.fallbackLanguage && this.options.whiteListLanguages && this.options.whiteListLanguages.length) {
      throw new Error('BrowserLanguageDetector. WhiteListLanguages language using only together with fallbackLanguage');
    }
    if (this.options.fallbackLanguage && (!this.options.whiteListLanguages || !this.options.whiteListLanguages.length)) {
      throw new Error('BrowserLanguageDetector. FallbackLanguage language using only together with whiteListLanguages');
    }

    return this.detect();
  }

  static detect() {
    if (!this.options) this.config();
    const pluginsResult = this.applyPlugins(this.options.plugins, this.options);
    this.detectedLanguages = uniq(flatten(pluginsResult.map(a => a.detectedLanguages)));
    const detectedLanguagesWithWhiteListLanguages = this.applyWhiteListLanguages(this.detectedLanguages, this.options.whiteListLanguages);
    this.preferredLanguage = this.selectPreferredLanguage(detectedLanguagesWithWhiteListLanguages, this.options.fallbackLanguage, this.options.whiteListLanguages);

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
    if (fallbackLanguage && languages.indexOf(fallbackLanguage) !== -1) {
      return languages;
    }
    return [fallbackLanguage];
  }

  /**
   * @param {array} languages - List of supported languages
   * @param {string} fallbackLanguage
   * @param {string} whiteListLanguages - List of supported  languages
   */
  static selectPreferredLanguage(languages, fallbackLanguage, whiteListLanguages) {
    if (fallbackLanguage && whiteListLanguages) {
      if (whiteListLanguages.indexOf(fallbackLanguage) === -1) {
        throw new Error('fallbackLanguage should be in whiteListLanguages');
      }
      return whiteListLanguages[0];
    } else if (languages) {
      return languages[0];
    }
    throw new Error('preferred language can not be detected');
  }
}

export default BrowserLanguageDetector;
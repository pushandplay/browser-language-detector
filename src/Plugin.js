import {uniq} from './utils';

class Plugin {
  detectedLanguages = [];
  data = {};

  /**
   * @constructor
   * @param {object} options - Object with user preverences
   * @return {Plugin}
   */
  constructor(options = {}) {
    this.options = {...this.options, ...options};
    return this;
  }

  detect() {
    return {
      data: this.data,
      detectedLanguages: uniq(this.detectedLanguages)
    };
  }

  /**
   * @param {object} window - window object
   * @return {object} Object depents on user browser
   */
  static navigator(window = {}) {
    return window.navigator || window.clientInformation || {};
  }
}

export default Plugin;
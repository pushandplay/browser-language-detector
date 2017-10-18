import {uniq} from './utils';

class Detector {
  languages = [];
  data = {};

  constructor(options = {}) {
    this.options = {...this.options, ...options};
    return this;
  }

  detect() {
    return {
      data: this.data,
      languages: uniq(this.languages)
    };
  }

  static navigator(window = {}) {
    return window.navigator || window.clientInformation || {};
  }
}

export default Detector;
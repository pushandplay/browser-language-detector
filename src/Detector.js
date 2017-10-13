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
      ...this.data,
      languages: uniq(this.languages)
    };
  }
}

export default Detector;
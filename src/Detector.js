import {uniq} from './utils';

class Detector {
  languages = [];
  constructor(options = {}) {
    this.options = {...this.options, ...options};
    return this;
  }

  detect() {
    return uniq(this.languages);
  }
}

export default Detector;
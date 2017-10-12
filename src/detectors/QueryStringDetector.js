/* eslint-disable max-depth */
import Detector from '../Detector';

class QueryStringDetector extends Detector {
  detect() {
    if (typeof window !== 'undefined') {
      const query = window.location.search.substring(1);
      const params = query.split('&');
      for (let i = 0; i < params.length; i++) {
        const pos = params[i].indexOf('=');
        if (pos > 0) {
          const key = params[i].substring(0, pos);
          if (key === this.options.queryString) {
            this.languages = [params[i].substring(pos + 1)];
          }
        }
      }
    }

    return super.detect();
  }
}

export default QueryStringDetector;
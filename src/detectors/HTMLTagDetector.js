import Detector from '../Detector';

class HTMLTagDetector extends Detector {
  detect() {
    const htmlTag = typeof document !== 'undefined' ? document.documentElement : null;

    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      this.languages = [htmlTag.getAttribute('lang')];
    }

    return super.detect();
  }
}

export default HTMLTagDetector;
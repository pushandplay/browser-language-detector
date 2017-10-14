import Detector from '../Detector';

class HTMLTagDetector extends Detector {
  detect() {
    const htmlTag = typeof document !== 'undefined' ? document.documentElement : null;

    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      const lang = htmlTag.getAttribute('lang');
      this.languages = [lang];
      this.data = {lang};
    }

    return super.detect();
  }
}

export default HTMLTagDetector;
import Detector from '../Detector';
import {simplify} from '../utils';

class NavigatorDetector extends Detector {
  detect() {
    const navigator = Detector.navigator(window);
    this.languages = []
      .concat(
        navigator.languages,
        navigator.language,
        navigator.userLanguage,
        navigator.browserLanguage,
        navigator.systemLanguage,
        this.options.fallbackLanguage
      )
      .filter(language => language);

    this.data = {languages: this.languages};
    this.languages.map(language => simplify(language));

    return super.detect();
  }
}

export default NavigatorDetector;
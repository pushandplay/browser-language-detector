import Detector from '../Detector';
import {simplify} from '../utils';

class NavigatorDetector extends Detector {
  detect() {
    const navigator = window.navigator || window.clientInformation || {};
    this.languages = []
      .concat(
        navigator.languages,
        navigator.language,
        navigator.userLanguage,
        navigator.browserLanguage,
        navigator.systemLanguage,
        this.options.fallbackLanguage
      )
      .filter(language => language)
      //  TODO: implement precision detection
      .map(language => simplify(language));

    return super.detect();
  }
}

export default NavigatorDetector;
import Plugin from '../Plugin';
import {simplify, uniq} from '../utils';

class NavigatorPlugin extends Plugin {
  detect() {
    const navigator = Plugin.navigator(window);
    this.detectedLanguages = []
      .concat(
        navigator.languages,
        navigator.language,
        navigator.userLanguage,
        navigator.browserLanguage,
        navigator.systemLanguage,
      )
      .filter(language => language)
      .map(language => simplify(language));
    this.detectedLanguages = uniq(this.detectedLanguages);

    return super.detect();
  }
}

export default NavigatorPlugin;
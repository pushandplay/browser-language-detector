import Plugin from '../Plugin';
import {simplify} from '../utils';

class NavigatorPlugin extends Plugin {
  detect() {
    const navigator = Plugin.navigator(window);
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
      .map(language => simplify(language));

    return super.detect();
  }
}

export default NavigatorPlugin;
import Plugin from '../Plugin';

class HTMLTagPlugin extends Plugin {
  detect() {
    const htmlTag = typeof document !== 'undefined' ? document.documentElement : null;

    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      const htmlTagLanguage = htmlTag.getAttribute('lang');
      this.languages = [htmlTagLanguage];
      this.data = {htmlTagLanguage};
    }

    return super.detect();
  }
}

export default HTMLTagPlugin;
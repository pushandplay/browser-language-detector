import BrowserLanguageDetector from '../dist/BrowserLanguageDetector.min';

const config = {
  defaultLanguage: 'es'
};

describe('BrowserLanguageDetector', () => {
  test('Language showld be equal "en"', () => {
    expect(BrowserLanguageDetector.detect()).toBe('en');
  });

  test('Language showld be equal "es"', () => {
    expect(BrowserLanguageDetector.config(config).detect()).toBe('es');
  });
});
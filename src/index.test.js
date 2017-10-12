import BrowserLanguageDetector from '../dist/BrowserLanguageDetector.min';

const config = {
  defaultLanguage: 'ru'
};

describe('BrowserLanguageDetector', () => {
  test('Language showld be equal "ru"', () => {
    expect(BrowserLanguageDetector.config(config).detect()).toBe('ru');
  });

  test('Language showld be equal "en"', () => {
    expect(BrowserLanguageDetector.config().detect()).toBe('en');
  });
});
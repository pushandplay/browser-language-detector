import BrowserLanguageDetector from '../dist/BrowserLanguageDetector.min';

const config = {
  fallbackLanguage: 'es'
};

describe('BrowserLanguageDetector', () => {
  test('Language should be equal "en"', () => {
    expect(BrowserLanguageDetector.detect().lang).toBe('en');
  });

  test('Language should be equal "es"', () => {
    expect(BrowserLanguageDetector.config(config).detect().lang).toBe('es');
  });
});


describe('BrowserLanguageDetector with detectors', () => {
  test('Language should be equal "es"', () => {
    const cong = {
      fallbackLanguage: 'es',
      // detectors: [NavigatorDetector, HTMLTagDetector, QueryStringDetector]
    };

    expect(BrowserLanguageDetector.config(cong).detect().lang).toBe('es');
  });
});
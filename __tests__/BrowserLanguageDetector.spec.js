/* eslint-disable max-nested-callbacks */
import BrowserLanguageDetector from '../src/BrowserLanguageDetector.full';

const config = {
  fallbackLanguage: 'es',
  whiteListLanguages: ['es', 'en']
};

describe('BrowserLanguageDetector', () => {
  test('Language should be equal "en"', () => {
    expect(BrowserLanguageDetector).toHaveProperty('preferredLanguage', 'en');
  });

  test('The preferredLanguage language should be "es"', () => {
    expect(BrowserLanguageDetector.config(config)).toHaveProperty('preferredLanguage', 'es');
  });

  test('The options.fallbackLanguage language should be "es"', () => {
    expect(BrowserLanguageDetector.config(config).options).toHaveProperty('fallbackLanguage', 'es');
  });

  test('The options.whiteListLanguages language should be equal ["es", "en"]', () => {
    expect(BrowserLanguageDetector.config(config).options.whiteListLanguages).toEqual(['es', 'en']);
  });

  test('Languages should be equal ["en", "es"]', () => {
    expect(BrowserLanguageDetector.applyFallbackLanguage(['en', 'es'], 'en')).toEqual(['en', 'es']);
  });

  test('Languages should be equal ["ru", "es"]', () => {
    expect(BrowserLanguageDetector.applyFallbackLanguage(['en', 'es'], 'ru')).toEqual(['ru']);
  });

  test('Languages should be equal ["ru"]', () => {
    expect(BrowserLanguageDetector.applyWhiteListLanguages(['en', 'es', 'ru'], ['ru'])).toEqual(['ru']);
  });

  test('Languages should be equal []', () => {
    expect(BrowserLanguageDetector.applyWhiteListLanguages(['en', 'es', 'ru'], ['zh'])).toEqual([]);
  });

  test('Languages should be equal ["en", "es"]', () => {
    expect(BrowserLanguageDetector.applyWhiteListLanguages(['en', 'es'])).toEqual(['en', 'es']);
  });
});

describe('BrowserLanguageDetector.selectPreferredLanguage()', () => {
  test('The preferredLanguage should be "es"', () => {
    const languages = ['en', 'ru', 'es'];
    const fallbackLanguage = 'ru';
    const whiteListLanguages = ['es', 'ru'];

    expect(BrowserLanguageDetector.selectPreferredLanguage(languages, fallbackLanguage, whiteListLanguages)).toBe('es');
  });

  test('Should be error when if the preferred language is not in the white list', () => {
    const languages = ['zh'];
    const fallbackLanguage = 'ruw';
    const whiteListLanguages = ['es', 'it'];

    expect(() => {
      BrowserLanguageDetector.selectPreferredLanguage(languages, fallbackLanguage, whiteListLanguages);
    }).toThrowError('fallbackLanguage should be in whiteListLanguages');
  });

  test('Should be error when preferred language can not be detected', () => {
    const languages = undefined;
    const fallbackLanguage = 'it';
    const whiteListLanguages = ['ru', 'es', 'it'];

    expect(() => {
      BrowserLanguageDetector.selectPreferredLanguage(languages, fallbackLanguage, whiteListLanguages);
    }).toThrowError('preferred language can not be detected');
  });
});
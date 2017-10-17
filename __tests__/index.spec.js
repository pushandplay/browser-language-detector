/* eslint-disable max-nested-callbacks */
import BrowserLanguageDetector from '../src/BrowserLanguageDetector.full';

const config = {
  fallbackLanguage: 'es'
};

describe('BrowserLanguageDetector', () => {
  test('Language should be equal "en"', () => {
    expect(BrowserLanguageDetector.lang).toBe('en');
  });

  test('Language should be equal "es"', () => {
    expect(BrowserLanguageDetector.config(config).detect().lang).toBe('es');
  });
});

describe('BrowserLanguageDetector.selectPreferredLanguage()', () => {
  test('Should throw error without params', () => {
    expect(BrowserLanguageDetector.selectPreferredLanguage).toThrowError('fallbackLanguage is not defined');
  });
  test('Should be equal "en"', () => {
    expect(BrowserLanguageDetector.selectPreferredLanguage('en')).toEqual('en');
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
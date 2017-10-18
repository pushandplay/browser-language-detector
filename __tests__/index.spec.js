/* eslint-disable max-nested-callbacks */
import BrowserLanguageDetector from '../src/BrowserLanguageDetector.full';

const config = {
  fallbackLanguage: 'es'
};

describe('BrowserLanguageDetector', () => {
  test('Language should be equal "en"', () => {
    expect(BrowserLanguageDetector.language).toBe('en');
  });

  test('Language should be equal "es"', () => {
    expect(BrowserLanguageDetector.config(config).detect().language).toBe('es');
  });

  test('Language should be equal "es" (detect)', () => {
    expect(BrowserLanguageDetector.detect().language).toBe('es');
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

    expect(BrowserLanguageDetector.config(cong).detect().language).toBe('es');
  });
});
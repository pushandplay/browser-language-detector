/* eslint-disable max-nested-callbacks */
import NavigatorPlugin from '../src/plugins/NavigatorPlugin';

const config = {
  fallbackLanguage: 'ru'
};

describe('NavigatorPlugin', () => {
  describe('Test with config', () => {
    test('Should be equal ["en", "ru"]', () => {
      expect((new NavigatorPlugin(config)).detect().languages).toEqual(['en', 'ru']);
    });
  });
  describe('Test without config', () => {
    test('Should be equal ["en"]', () => {
      expect((new NavigatorPlugin()).detect().languages).toEqual(['en']);
    });
  });

  describe('Test without navigator and clientInformation', () => {
    Object.defineProperty(window, 'navigator', {
      writable: true,
      value: null
    });

    test('Should be equal ["en"]', () => {
      expect((new NavigatorPlugin()).detect().languages).toEqual(['en']);
    });

    test('Should be equal ["en", "ru"]', () => {
      expect((new NavigatorPlugin(config)).detect().languages).toEqual(['en', 'ru']);
    });
  });

  describe('Test with clientInformation', () => {
    Object.defineProperty(window, 'clientInformation', {
      writable: true,
      value: {
        userLanguage: 'es'
      }
    });

    test('Should be equal ["en", "es"]', () => {
      expect((new NavigatorPlugin({fallbackLanguage: 'es'})).detect().languages).toEqual(['en', 'es']);
    });
  });
});
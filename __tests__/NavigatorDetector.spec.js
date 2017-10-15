/* eslint-disable max-nested-callbacks */
import NavigatorDetector from '../src/detectors/NavigatorDetector';

const config = {
  fallbackLanguage: 'ru'
};

describe('NavigatorDetector', () => {
  describe('Test with config', () => {
    test('Should be equal ["en", "ru"]', () => {
      expect((new NavigatorDetector(config)).detect().languages).toEqual(['en', 'ru']);
    });
  });
  describe('Test without config', () => {
    test('Should be equal ["en"]', () => {
      expect((new NavigatorDetector()).detect().languages).toEqual(['en']);
    });
  });

  describe('Test without navigator and clientInformation', () => {
    Object.defineProperty(window, 'navigator', {
      writable: true,
      value: null
    });

    test('Should be equal ["en"]', () => {
      expect((new NavigatorDetector()).detect().languages).toEqual(['en']);
    });

    test('Should be equal ["en", "ru"]', () => {
      expect((new NavigatorDetector(config)).detect().languages).toEqual(['en', 'ru']);
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
      expect((new NavigatorDetector({fallbackLanguage: 'es'})).detect().languages).toEqual(['en', 'es']);
    });
  });
});
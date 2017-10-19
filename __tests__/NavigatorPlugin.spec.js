/* eslint-disable max-nested-callbacks */
import NavigatorPlugin from '../src/plugins/NavigatorPlugin';

describe('NavigatorPlugin', () => {
  describe('Test with config', () => {
    test('Should be equal ["en", "ru"]', () => {
      expect((new NavigatorPlugin()).detect().detectedLanguages).toEqual(['en']);
    });
  });
  describe('Test without config', () => {
    test('Should be equal ["en"]', () => {
      expect((new NavigatorPlugin()).detect().detectedLanguages).toEqual(['en']);
    });
  });

  describe('Test without navigator and clientInformation', () => {
    Object.defineProperty(window, 'navigator', {
      writable: true,
      value: null
    });

    test('Should be equal ["en"]', () => {
      expect((new NavigatorPlugin()).detect().detectedLanguages).toEqual(['en']);
    });

    test('Should be equal ["en", "ru"]', () => {
      expect((new NavigatorPlugin()).detect().detectedLanguages).toEqual(['en']);
    });
  });

  describe('Test with clientInformation', () => {
    Object.defineProperty(window, 'navigator', {
      writable: true,
      value: null
    });
    Object.defineProperty(window, 'clientInformation', {
      writable: true,
      value: {
        userLanguage: 'es'
      }
    });

    test('Should be equal ["es"]', () => {
      expect((new NavigatorPlugin()).detect().detectedLanguages).toEqual(['en']);
    });
  });
});
/* eslint-disable max-nested-callbacks */
import NavigatorDetector from './NavigatorDetector';

const config = {
  defaultLanguage: 'ru'
};

describe('NavigatorDetector', () => {
  describe('Test with config', () => {
    test('Showld be equal ["en", "ru"]', () => {
      expect((new NavigatorDetector(config)).detect()).toEqual(['en', 'ru']);
    });
  });
  describe('Test wuthout config', () => {
    test('Showld be equal ["en"]', () => {
      expect((new NavigatorDetector()).detect()).toEqual(['en']);
    });
  });

  describe('Test without navigator and clientInformation', () => {
    Object.defineProperty(window.navigator, 'navigator', {
      writable: true,
      value: null
    });

    test('Showld be equal ["en"]', () => {
      expect((new NavigatorDetector()).detect()).toEqual(['en']);
    });

    test('Showld be equal ["en", "ru"]', () => {
      expect((new NavigatorDetector(config)).detect()).toEqual(['en', 'ru']);
    });
  });

  Object.defineProperty(window, 'clientInformation', {
    writable: true,
    value: {
      userLanguage: 'es'
    }
  });

  describe('Test with clientInformation', () => {
    test('Showld be equal ["en", "es"]', () => {
      expect((new NavigatorDetector({defaultLanguage: 'es'})).detect()).toEqual(['en', 'es']);
    });
  });
});
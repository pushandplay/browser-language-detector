/* eslint-disable max-nested-callbacks */
import Detector from '../src/Detector';

describe('Detector', () => {
  test('Call Detector.navigator() without argument', () => {
    expect(Detector.navigator()).toEqual({});
  });
});
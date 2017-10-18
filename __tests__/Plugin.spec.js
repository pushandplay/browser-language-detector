/* eslint-disable max-nested-callbacks */
import Plugin from '../src/Plugin';

describe('Plugin', () => {
  test('Call Plugin.navigator() without argument', () => {
    expect(Plugin.navigator()).toEqual({});
  });
});
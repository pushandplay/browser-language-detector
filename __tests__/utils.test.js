import {flatten} from '../src/utils';

describe('Test utils flatten', () => {
  test('Showld be equal functions', () => {
    expect(flatten).toBeDefined();
  });

  test('Should be equal [] (call without arguments)', () => {
    expect(flatten()).toEqual([]);
  });

  test('Should be equal []', () => {
    expect(flatten([])).toEqual([]);
  });

  test('Should be equal [0,1,2]', () => {
    expect(flatten([0, 1, 2])).toEqual([0, 1, 2]);
  });

  test('Should be equal [0,1,2,3]', () => {
    expect(flatten([0, [1, 2], 3])).toEqual([0, 1, 2, 3]);
  });

  test('Should be equal [0,1,1,2]', () => {
    expect(flatten([0, [1, [1], 2]])).toEqual([0, 1, 1, 2]);
  });
});
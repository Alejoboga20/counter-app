import { returnArray } from '../../playground/07-deses-arr';

describe('Tests for arrays', () => {
  test('should return an array', () => {
    const array = returnArray();
    expect(array).toEqual(['ABC', 123]);
  });
  test('should contain numbers and letters', () => {
    const [letters, numbers] = returnArray();
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
  });
});

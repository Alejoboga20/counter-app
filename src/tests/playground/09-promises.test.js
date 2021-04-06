import { getHeroByIdAsync } from '../../playground/09-promises';
import { heroes } from '../../data/heroes';

describe('tests for promises', () => {
  test('should return a hero async', (done) => {
    const id = 1;
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toEqual(heroes[0]);
      done();
    });
  });

  test('should return an error when hero does not exist', (done) => {
    const id = 10;
    getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});

import { getUser, getActiveUser } from '../../playground/05-funciones';

describe('Tests for functions', () => {
  test('should return an object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test('should return an active user', () => {
    const userTest = {
      uid: 'ABC567',
      username: 'El_Papi1502'
    };

    const user = getActiveUser(userTest.username);
    expect(user).toEqual(userTest);
  });
});

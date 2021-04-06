import { getGreeting } from '../../playground/02-template-string';

describe('Tests for templateStrings', () => {
  test('It should get Greeting', () => {
    const name = 'testUser';
    const greeting = getGreeting(name);
    expect(greeting).toBe(`Hello ${name}`);
  });

  test('It should get Hello World when no name is provided', () => {
    const greeting = getGreeting();
    expect(greeting).toBe('Hello World');
  });
});

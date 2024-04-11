import { describe, it, expect } from 'vitest';
import type { Person } from './types';
import { sayHello } from './service/personService';

describe('Person Service', () => {
  it('should say hello', () => {
    const person: Person = { name: 'Billy Bob' };
    expect(sayHello(person)).toBe('Hello, Billy Bob!');
  });
});

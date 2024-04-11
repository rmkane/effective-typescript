import type { Person } from '../types';

function sayHello(person: Person) {
  return `Hello, ${person.name}!`;
}

export { sayHello };

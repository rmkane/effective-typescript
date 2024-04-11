import type { Person } from './types';
import { sayHello } from './service/personService';

let person: Person = { name: 'Joe Schmoe', age: 42 };

const result = sayHello(person);

console.log('Response:', result);

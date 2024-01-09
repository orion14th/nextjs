 
import {add,subtract} from './JestTest';


test('Subtract 2 + 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});


test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(add(5, 7)).toBe(12);
});

test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);
});

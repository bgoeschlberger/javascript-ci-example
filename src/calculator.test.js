import { Calculator } from "./calculator.js";

 
test('adding integers should work', () => {
  const calculator = new Calculator();
  expect(calculator.add(1,1)).toBe(2);
});

test('adding floats should work', () => {
  const calculator = new Calculator();
  expect(calculator.add(1.1,1.1)).toBe(2.2);
  expect(calculator.add(1.1,1)).toBe(2.1);
  expect(calculator.add(1,1.1)).toBe(2.1);
});

test('numeric strings should be coerced', () => {
  const calculator = new Calculator();
  expect(calculator.add('1', 1)).toBe(2);
  expect(calculator.add('1.1', 1)).toBe(2.1);
  expect(calculator.add(1, '1')).toBe(2);
  expect(calculator.add(1, '1.1')).toBe(2.1);
});

test('non-numerical input should fail', () => {
  const calculator = new Calculator();
  expect(() => calculator.add('a', 1)).toThrow();
  expect(() => calculator.add(1, 'a')).toThrow();
});

test('empty string should fail', () => {
  const calculator = new Calculator();
  expect(() => calculator.add('', 1)).toThrow();
  expect(() => calculator.add(1, '')).toThrow();
});

test('undefined should fail', () => {
  const calculator = new Calculator();
  expect(() => calculator.add(undefined, 1)).toThrow();
  expect(() => calculator.add(1, undefined)).toThrow();
});

test('null should fail', () => {
  const calculator = new Calculator();
  expect(() => calculator.add(null, 1)).toThrow();
  expect(() => calculator.add(1, null)).toThrow();
});
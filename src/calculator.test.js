import { Calculator } from "./calculator.js";

 
test('add 1 and 1 should be 2', () => {
  const calculator = new Calculator();
  expect(calculator.add(1,1)).toBe(2);
});

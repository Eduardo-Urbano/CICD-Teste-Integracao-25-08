const math = require('../math');

test('soma 2 + 3 igual a 5', () => {
  expect(math.add(2, 3)).toBe(5);
});

test('subtrai 5 - 2 igual a 3', () => {
  expect(math.subtract(5, 2)).toBe(3);
});

test('multiplica 3 * 4 igual a 12', () => {
  expect(math.multiply(3, 4)).toBe(12);
});

test('divide 10 / 2 igual a 5', () => {
  expect(math.divide(10, 2)).toBe(5);
});

test('lança erro ao dividir por zero', () => {
  expect(() => math.divide(10, 0)).toThrow('Divisão por zero não é permitida');
});
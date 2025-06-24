// __tests__/calculate.test.js

import { sum, subtract, multiply, divide } from '../src/js/calculate';

describe('sum function', () => {
  test('should add two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('should add a positive and a negative number correctly', () => {
    expect(sum(5, -3)).toBe(2);
  });

  test('should add two negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test('should add zero to a number', () => {
    expect(sum(10, 0)).toBe(10);
  });
});

describe('subtract function', () => {
  test('should subtract two positive numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('should subtract a negative number from a positive', () => {
    expect(subtract(5, -2)).toBe(7);
  });

  test('should subtract a positive number from a negative', () => {
    expect(subtract(-5, 2)).toBe(-7);
  });

  test('should subtract two negative numbers', () => {
    expect(subtract(-5, -2)).toBe(-3);
  });
});

describe('multiply function', () => {
  test('should multiply two positive numbers correctly', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('should multiply by zero', () => {
    expect(multiply(10, 0)).toBe(0);
  });

  test('should multiply a positive and a negative number', () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  test('should multiply two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });
});

describe('divide function', () => {
  test('should divide two positive numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('should handle decimal results', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Деление на ноль невозможно.');
  });
});

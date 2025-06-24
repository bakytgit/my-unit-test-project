// src/js/calculate.js

/**
 * Вычисляет сумму двух чисел.
 * @param {number} a Первое число.
 * @param {number} b Второе число.
 * @returns {number} Сумма чисел.
 */
export function sum(a, b) {
  return a + b;
}

/**
 * Вычисляет разницу между двумя числами.
 * @param {number} a Уменьшаемое.
 * @param {number} b Вычитаемое.
 * @returns {number} Разница чисел.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Умножает два числа.
 * @param {number} a Первый множитель.
 * @param {number} b Второй множитель.
 * @returns {number} Произведение чисел.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Делит первое число на второе.
 * @param {number} a Делимое.
 * @param {number} b Делитель.
 * @returns {number} Результат деления.
 * @throws {Error} Если делитель равен нулю.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль невозможно.");
  }
  return a / b;
}

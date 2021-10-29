/**
 * Генерируем случайное дробное число в заданом диапозоне (от и до)
 *
 * @param {number} min - вводим первое положительное число.
 * @param {number} max - вводим второе положительное число.
 * @param {number} simbolsAfterComma - указываем желаемое количество знаком после запятой.
 * @return {number} - возврещаем сгенерированное, положительное, случайное, дробное число.
 */

const getRandomFloatNumber = (min = 1, max = 10, simbolsAfterComma = 5) => {
  if (min > max) {
    [min, max] = [max, min];
  }
  if (min < 0 || max < 0) {
    throw 'Число не может быть отрицательным.';
  }
  if (min === max) {
    throw 'Минимальное значение не может быть равно максимальному, и наоборот.';
  }
  const result = Math.random() * (max - min) + min;

  return +result.toFixed(simbolsAfterComma);
};

/**
 * Генерируем случайное число в заданом диапозоне (от и до)
 *
 * @param {number} min - вводим первое положительное число.
 * @param {number} max - вводим второе положительное число.
 * @return {number} - возврещаем сгенерированное, положительное, случайное число.
 */

const getRandomNumber = (min, max) => getRandomFloatNumber(min, max, 0);


export {getRandomFloatNumber, getRandomNumber};

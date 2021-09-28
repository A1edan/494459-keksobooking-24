/*
 * Генерируем случайное число в заданом диапозоне (от и до)
 *
 * @param {number} min - вводим первое положительное число.
 * @param {number} max - вводим второе положительное число.
 * @return {number} - возврещаем сгенерированное, положительное случайное число.
 */

const getRandomNumber = (min, max) => {
  if (typeof min === 'number' && typeof max === 'number') {
    if (min >= max) {
      return 'Минимальное число не может быть больше максимального, или равно ему.';
    }
    if (min && max >= 0) {
      return Math.round(Math.random() * (max - min) + min);
    }
  }
  return 'Введите целое положительное число.';
};

getRandomNumber(5, 44);

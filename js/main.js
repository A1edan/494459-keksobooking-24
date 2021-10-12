/**
 * Генерируем случайное дробное число в заданом диапозоне (от и до)
 *
 * @param {number} min - вводим первое положительное число.
 * @param {number} max - вводим второе положительное число.
 * @param {number} simbolsAfterComma - указываем желаемое количество знаком после запятой.
 * @return {number} - возврещаем сгенерированное, положительное, случайное, дробное число.
 */

const getRandomFloatNumber = (min = 1, max = 100, simbolsAfterComma = 5) => {
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

const makePinData = () => {
  const FEAUTERS = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const TYPEOFROOM = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const CHEKINOUT = ['12:00', '13:00', '14:00'];
  const PHOTOS = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ];

  const avatar = () => {
    let result = getRandomNumber(1, 10);
    if (result < 10) {
      result = `0${result}`;
    }
    return `img/avatars/user${result}.png`;
  };

  const getRandomStringFromArray = (arr) => arr[getRandomNumber(0, arr.length - 1)];

  const getRandomArray = (arr) => arr.slice(0, getRandomNumber(1, arr.length));

  const location = {
    lat: getRandomFloatNumber(35.65, 35.7, 5),
    lng: getRandomFloatNumber(139.7, 139.8, 5),
  };
  return {
    author: {
      avatar: avatar(),
    },
    offer: {
      title: 'Бла, бла, бла',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(),
      type: getRandomStringFromArray(TYPEOFROOM),
      rooms: getRandomNumber(),
      guests: getRandomNumber(),
      checkin: getRandomStringFromArray(CHEKINOUT),
      checkout: getRandomStringFromArray(CHEKINOUT),
      feauters: getRandomArray(FEAUTERS),
      description: 'Бла, бла, бла',
      photos: getRandomArray(PHOTOS),
    },
    location: location,
  };
};

const createAdvertisements = (count) => [...Array(count)].map(makePinData);

createAdvertisements(10);

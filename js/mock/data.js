import { getRandomFloatNumber, getRandomNumber } from './random-number-generator.js';

const COUNT_ADS = 10;

const makePinData = () => {
  const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
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

  const valueType = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalow: 'Бунгало',
    hotel: 'Отель',
  };

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
      type: valueType[getRandomStringFromArray(TYPEOFROOM)],
      rooms: getRandomNumber(),
      guests: getRandomNumber(),
      checkin: getRandomStringFromArray(CHEKINOUT),
      checkout: getRandomStringFromArray(CHEKINOUT),
      features: getRandomArray(FEATURES),
      description: 'Бла, бла, бла',
      photos: getRandomArray(PHOTOS),
    },
    location: location,
  };
};

export { makePinData, COUNT_ADS };

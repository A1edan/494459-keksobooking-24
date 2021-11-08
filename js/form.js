const adForm = document.querySelector('.ad-form');
const formsDisabled = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterDisabled = mapFilter.querySelectorAll('select');

const switchToDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');

  formsDisabled.forEach((form) => form.setAttribute('disabled', ''));
  mapFilterDisabled.forEach((filter) => filter.setAttribute('disabled', ''));
};

const switchToAvalabled = () => {
  adForm.classList.remove('ad-form--disabled');
  formsDisabled.forEach((form) => form.removeAttribute('disabled'));
};

const formFieldsets = adForm.querySelectorAll('.ad-form__element');
const filterFieldsets = mapFilter.querySelectorAll('.map__filter');

const enableFilter = () => {
  mapFilter.classList.add('map__filters--disabled');
  filterFieldsets.forEach((fieldset) => fieldset.removeAttribute('disabled'));
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  formFieldsets.forEach((fieldset) => fieldset.removeAttribute('disabled'));
};

const housingType = document.querySelector('#type');
const housingOptions = housingType.querySelectorAll('option');
const pricesPeerNight = document.querySelector('#price');

const priceChangeHandler = (evt) => {
  const housingPrices = {
    bungalow: '0',
    flat: '1000',
    hotel: '3000',
    house: '5000',
    palace: '10000',
  };

  housingOptions.forEach((option) => {
    if (evt.target.value === option.value) {
      pricesPeerNight.setAttribute('min', housingPrices[evt.target.value]);
      pricesPeerNight.setAttribute('placeholder', housingPrices[evt.target.value]);
    }
  });
};

housingType.addEventListener('change', priceChangeHandler);

const roomsGuests = {
  1: {
    correct: [1],
    error: 'Для одной комнаты только один гость',
  },
  2: {
    correct: [1, 2],
    error: 'Для двух комнат — максимум два гостя',
  },
  3: {
    correct: [1, 2, 3],
    error: 'Для трёх комнат — до трёх гостей',
  },
  100: {
    correct: [0],
    error: 'Не для гостей',
  },
};

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

const roomsChangeHandler = (evt) => {
  const rooms = Number(roomNumber.value);
  const guests = Number(capacity.value);

  if (!roomsGuests[rooms].correct.includes(guests)) {
    evt.target.setCustomValidity(roomsGuests[rooms].error);
  } else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
};

roomNumber.addEventListener('change', roomsChangeHandler);
capacity.addEventListener('change', roomsChangeHandler);

export { switchToDisabled, switchToAvalabled, enableFilter, enableForm, priceChangeHandler, roomsChangeHandler };

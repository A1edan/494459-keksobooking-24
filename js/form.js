const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFilterSelects = mapFilters.querySelectorAll('select');

const formDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  adFormFieldsets.forEach((form) => form.setAttribute('disabled', ''));
  mapFilterSelects.forEach((filter) => filter.setAttribute('disabled', ''));
};

const formEnabled = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  adFormFieldsets.forEach((form) => form.removeAttribute('disabled'));
  mapFilterSelects.forEach((select) => select.removeAttribute('disabled'));
};

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

const housingType = document.querySelector('#type');
const housingOptions = housingType.querySelectorAll('option');
const pricePeerNight = document.querySelector('#price');

const housingPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const priceChangeHandler = (evt) => {
  housingOptions.forEach((option) => {
    if (evt.target.value === option.value) {
      pricePeerNight.setAttribute('min', housingPrices[evt.target.value]);
      pricePeerNight.setAttribute('placeholder', housingPrices[evt.target.value]);
    }
  });
};

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const timeInOutHandler = (evt) => {
  if (evt.target === timeIn) {
    timeOut.value = evt.target.value;
  } else {
    timeIn.value = evt.target.value;
  }
};

const addFormHandlers = () => {
  roomNumber.addEventListener('change', roomsChangeHandler);
  capacity.addEventListener('change', roomsChangeHandler);
  housingType.addEventListener('change', priceChangeHandler);
  timeIn.addEventListener('change', timeInOutHandler);
  timeOut.addEventListener('change', timeInOutHandler);
};


export { formDisabled, formEnabled, addFormHandlers };

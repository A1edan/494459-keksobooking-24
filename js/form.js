const adForm = document.querySelector('.ad-form');
const formsDisabled = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFilterDisabled = mapFilters.querySelectorAll('select');


const switchToDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  formsDisabled.forEach((form) => form.setAttribute('disabled', ''));
  mapFilterDisabled.forEach((filter) => filter.setAttribute('disabled', ''));
};

const switchToAvalabled = () => {
  adForm.classList.remove('ad-form--disabled');
  adForm.forEach((form) => form.removeAttribute('disabled', 'disabled'));
};

export { switchToDisabled, switchToAvalabled };

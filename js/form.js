const switchDisabled = () => {

  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');

  const formDisabled = adForm.querySelectorAll('.ad-form__element');
  const mapDisabled = mapFilters.querySelectorAll('.map__filter');

  formDisabled.forEach((value) => {
    value.setAttribute('disabled', '');
  });
  mapDisabled.forEach((value) => {
    value.setAttribute('disabled', '');
  });
};

export { switchDisabled };

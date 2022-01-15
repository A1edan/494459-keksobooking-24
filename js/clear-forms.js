const mapFilters = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');

const reset = () => resetButton.addEventListener('click', () => {
  mapFilters.reset();
});

export { reset };

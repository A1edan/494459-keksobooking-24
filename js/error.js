const errorTemplate = document.querySelector('#error').content;
const error = errorTemplate.querySelector('.error').cloneNode(true);
// const errorButton = errorTemplate.querySelector('.error__button').cloneNode(true);

const errorKeyClose = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    error.remove();
  }
  document.removeEventListener('keydown', errorKeyClose);
};

const showError = () => {
  document.body.append(error);
  document.addEventListener('keydown', errorKeyClose);
  error.addEventListener('click', () => error.remove());
  // errorButton.addEventListener('click', () => error.remove());
};

export { showError };

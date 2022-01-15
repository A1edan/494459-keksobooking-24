const successTemplate = document.querySelector('#success').content;
const success = successTemplate.querySelector('.success').cloneNode(true);

const successKeyClose = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    success.remove();
  }
  document.removeEventListener('keydown', successKeyClose);
};

const showSuccess = () => {
  document.body.append(success);
  success.addEventListener('click', () => success.remove());
  document.addEventListener('keydown', successKeyClose);
};

export { showSuccess };

import { adForm } from './form.js';
import { showSuccess } from './success.js';
import { showError } from './error.js';

const ADS_COUNT = 10;

const getData = (onSuccess, onError) => fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  })
  .then((pins) => {
    onSuccess(pins.slice(0, ADS_COUNT));
  })
  .catch(() => {
    onError(showError());
  });


const sendData = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch('https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if (response.ok) {
          adForm.reset();
          showSuccess();
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        showError();
      });
  });
};

export { getData, sendData };

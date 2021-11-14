const popupTemplate = document.querySelector('#card').content;
const popupPhotoTemplate = popupTemplate.querySelector('.popup__photo');

const insertOrRemove = (el, text, extText = '') => {
  if (text) {
    el.textContent = `${text}${extText}`;
  } else {
    el.remove();
  }
};

const showPopup = ({ offer, author }) => {
  const popup = popupTemplate.querySelector('.popup').cloneNode(true);

  insertOrRemove(popup.querySelector('.popup__title'), offer.title);
  insertOrRemove(popup.querySelector('.popup__text--address'), offer.address);
  insertOrRemove(popup.querySelector('.popup__text--price'), offer.price, ' ₽/ночь');
  insertOrRemove(popup.querySelector('.popup__type'), offer.type);
  if (offer.rooms || offer.guests) {
    popup.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    popup.querySelector('.popup__text--capacity').remove();
  }

  if (offer.checkin || offer.checkout) {
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    popup.querySelector('.popup__text--time').remove();
  }

  if (offer.features) {
    popup.querySelector('.popup__features').textContent = offer.features;
  } else {
    popup.querySelector('.popup__features').remove();
  }

  if (offer.description) {
    popup.querySelector('.popup__description').textContent = offer.description;
  } else {
    popup.querySelector('.popup__description').remove();
  }

  if (offer.photos) {
    const popupPhotos = popup.querySelector('.popup__photos');
    popupPhotos.innerHTML = '';

    const photos = offer.photos;

    photos.forEach((src) => {
      const photo = popupPhotoTemplate.cloneNode(true);
      photo.setAttribute('src', src);
      popupPhotos.append(photo);
    });
  } else {
    popup.querySelector('.popup__photo').remove();
  }

  if (author.avatar) {
    popup.querySelector('.popup__avatar').setAttribute('src', author.avatar);
  } else {
    popup.querySelector('.popup__avatar').remove();
  }

  return popup;
};

export { showPopup };

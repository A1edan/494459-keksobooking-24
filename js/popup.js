const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const popup = popupTemplate.cloneNode(true);

const showPopup = (show) => {
  if (show.offer.title) {
    popup.querySelector('.popup__title').textContent = show.offer.title;
  } else {
    popup.querySelector('.popup__title').remove();
  }

  if (show.offer.address) {
    popup.querySelector('.popup__text--address').textContent = show.offer.address;
  } else {
    popup.querySelector('.popup__text--address').remove();
  }

  if (show.offer.price) {
    popup.querySelector('.popup__text--price').textContent = `${show.offer.price} ₽/ночь`;
  } else {
    popup.querySelector('.popup__text--price').remove();
  }

  if (show.offer.type) {
    popup.querySelector('.popup__type').textContent = show.offer.type;
  } else {
    popup.querySelector('.popup__type').remove();
  }

  if (show.offer.rooms || show.offer.guests) {
    popup.querySelector('.popup__text--capacity').textContent = `${show.offer.rooms} комнаты для ${show.offer.guests} гостей`;
  } else {
    popup.querySelector('.popup__text--capacity').remove();
  }

  if (show.offer.checkin || show.offer.checkout) {
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${show.offer.checkin}, выезд до ${show.offer.checkout}`;
  } else {
    popup.querySelector('.popup__text--time').remove();
  }

  if (show.offer.features) {
    popup.querySelector('.popup__features').textContent = show.offer.features;
  } else {
    popup.querySelector('.popup__features').remove();
  }

  if (show.offer.description) {
    popup.querySelector('.popup__description').textContent = show.offer.description;
  } else {
    popup.querySelector('.popup__description').remove();
  }

  if (show.offer.photos) {
    const popupPhotos = popup.querySelector('.popup__photos');
    popupPhotos.innerHTML = '';

    const photos = show.offer.photos;

    photos.forEach((src) => {
      const photo = document.createElement('img');
      photo.classList.add('popup__photo');
      photo.setAttribute('src', src);
      photo.setAttribute('width', 45);
      photo.setAttribute('height', 40);
      photo.setAttribute('alt', 'Фотография жилья');
      popupPhotos.append(photo);
    });
  } else {
    popup.querySelector('.popup__photo').remove();
  }

  if (show.author.avatar) {
    popup.querySelector('.popup__avatar').setAttribute('src', show.author.avatar);
  } else {
    popup.querySelector('.popup__avatar').remove();
  }

  document.querySelector('#map-canvas').append(popup);
};

export { showPopup };

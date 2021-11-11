const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const popup = popupTemplate.cloneNode(true);

const showPopup = (ad) => {
  if (ad.offer.title) {
    popup.querySelector('.popup__title').textContent = ad.offer.title;
  } else {
    popup.querySelector('.popup__title').remove();
  }

  if (ad.offer.address) {
    popup.querySelector('.popup__text--address').textContent = ad.offer.address;
  } else {
    popup.querySelector('.popup__text--address').remove();
  }

  if (ad.offer.price) {
    popup.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  } else {
    popup.querySelector('.popup__text--price').remove();
  }

  if (ad.offer.type) {
    popup.querySelector('.popup__type').textContent = ad.offer.type;
  } else {
    popup.querySelector('.popup__type').remove();
  }

  if (ad.offer.rooms || ad.offer.guests) {
    popup.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  } else {
    popup.querySelector('.popup__text--capacity').remove();
  }

  if (ad.offer.checkin || ad.offer.checkout) {
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  } else {
    popup.querySelector('.popup__text--time').remove();
  }

  if (ad.offer.features) {
    popup.querySelector('.popup__features').textContent = ad.offer.features;
  } else {
    popup.querySelector('.popup__features').remove();
  }

  if (ad.offer.description) {
    popup.querySelector('.popup__description').textContent = ad.offer.description;
  } else {
    popup.querySelector('.popup__description').remove();
  }

  if (ad.offer.photos) {
    const popupPhotos = popup.querySelector('.popup__photos');
    popupPhotos.innerHTML = '';

    const photos = ad.offer.photos;

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

  if (ad.author.avatar) {
    popup.querySelector('.popup__avatar').setAttribute('src', ad.author.avatar);
  } else {
    popup.querySelector('.popup__avatar').remove();
  }

  document.querySelector('#map-canvas').append(popup);
};

export { showPopup };

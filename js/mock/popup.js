const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const popup = popupTemplate.cloneNode(true);

const adsPopup = (ads) => {
  if (ads.offer.title) {
    popup.querySelector('.popup__title').textContent = ads.offer.title;
  } else {
    popup.querySelector('.popup__title').remove();
  }

  if (ads.offer.address) {
    popup.querySelector('.popup__text--address').textContent = ads.offer.address;
  } else {
    popup.querySelector('.popup__text--address').remove();
  }

  if (ads.offer.price) {
    popup.querySelector('.popup__text--price').textContent = `${ads.offer.price} ₽/ночь`;
  } else {
    popup.querySelector('.popup__text--price').remove();
  }

  if (ads.offer.type) {
    popup.querySelector('.popup__type').textContent = ads.offer.type;
  } else {
    popup.querySelector('.popup__type').remove();
  }

  if (ads.offer.rooms || ads.offer.guests) {
    popup.querySelector('.popup__text--capacity').textContent = `${ads.offer.rooms} комнаты для ${ads.offer.guests} гостей`;
  } else {
    popup.querySelector('.popup__text--capacity').remove();
  }

  if (ads.offer.checkin || ads.offer.checkout) {
    popup.querySelector('.popup__text--time').textContent = `Заезд после ${ads.offer.checkin}, выезд до ${ads.offer.checkout}`;
  } else {
    popup.querySelector('.popup__text--time').remove();
  }

  if (ads.offer.features) {
    popup.querySelector('.popup__features').textContent = ads.offer.features;
  } else {
    popup.querySelector('.popup__features').remove();
  }

  if (ads.offer.description) {
    popup.querySelector('.popup__description').textContent = ads.offer.description;
  } else {
    popup.querySelector('.popup__description').remove();
  }

  if (ads.offer.photos) {
    const popupPhotos = popup.querySelector('.popup__photos');
    popupPhotos.innerHTML = '';

    const photos = ads.offer.photos;

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

  if (ads.author.avatar) {
    popup.querySelector('.popup__avatar').setAttribute('src', ads.author.avatar);
  } else {
    popup.querySelector('.popup__avatar').remove();
  }

  document.querySelector('#map-canvas').append(popup);
};

export { adsPopup };

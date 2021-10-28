const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
const popup = popupTemplate.cloneNode(true);

const adsPopup = (ads) => {
  popup.querySelector('.popup__title').textContent = ads.offer.title;
  popup.querySelector('.popup__text--address').textContent = ads.offer.address;
  popup.querySelector('.popup__text--price').textContent = `${ads.offer.price} ₽/ночь`;
  popup.querySelector('.popup__type').textContent = ads.offer.type;
  popup.querySelector('.popup__text--capacity').textContent = `${ads.offer.rooms} комнаты для ${ads.offer.guests} гостей`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${ads.offer.checkin}, выезд до ${ads.offer.checkout}`;
  popup.querySelector('.popup__features').textContent = ads.offer.features;
  popup.querySelector('.popup__description').textContent = ads.offer.description;

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

  const userAvatar = popup.querySelector('.popup__avatar');
  userAvatar.setAttribute('src', ads.author.avatar);

  const map = document.querySelector('#map-canvas');
  map.append(popup);
};

export { adsPopup };

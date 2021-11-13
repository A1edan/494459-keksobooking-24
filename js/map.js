import { formEnabled } from './form.js';
import { createAdvertisements } from './mock/create-advertisements.js';
import { COUNT_ADS } from './mock/data.js';
import { showPopup } from './popup.js';

const address = document.querySelector('#address');
address.setAttribute('disabled', '');

const addMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      formEnabled();
      address.value = '35.6895, 139.692';
    })
    .setView(
      {
        lat: 35.6895,
        lng: 139.692,
      },
      12,
    );

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const mainPinIcon = L.icon(
    {
      iconUrl: './img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    },
  );

  const pin = L.marker(
    {
      lat: 35.6895,
      lng: 139.692,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  ).addTo(map);

  pin.on('move', (evt) => {
    const coordinates = evt.target.getLatLng();
    address.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
  });


  const points = createAdvertisements(COUNT_ADS);

  const createPin = (point) => {
    const { lat, lng } = point.location;
    const price = point.offer.price;
    const title = point.offer.title;
    const pinIcon = L.icon(
      {
        iconUrl: '../img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

    L.marker(
      {
        lat,
        lng,
        price,
        title,
      },
      {
        icon: pinIcon,
      },
    ).addTo(map).bindPopup(showPopup(point));
  };

  points.forEach((point) => {
    createPin(point);
  });
};

export { addMap };

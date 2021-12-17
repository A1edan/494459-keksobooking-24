import { formEnabled } from './form.js';
import { showPopup } from './popup.js';

const ZOOM = 12;
const NUMBERS_AFTER_COMMA = 5;

const address = document.querySelector('#address');
address.setAttribute('readonly', '');

const coords = {
  lat: 35.6895,
  lng: 139.692,
};

const addMap = (points) => {
  const map = L.map('map-canvas')
    .on('load', () => {
      formEnabled();
      address.value = `${coords.lat}, ${coords.lng}`;
    })
    .setView(
      coords,
      ZOOM,
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

  const mainPin = L.marker(
    coords,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  ).addTo(map);

  mainPin.on('move', (evt) => {
    const coordinates = evt.target.getLatLng();
    address.value = `${coordinates.lat.toFixed(NUMBERS_AFTER_COMMA)}, ${coordinates.lng.toFixed(NUMBERS_AFTER_COMMA)}`;
  });

  const createPin = (point) => {
    const { lat, lng } = point.location;
    const pinIcon = L.icon(
      {
        iconUrl: './img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

    L.marker(
      {
        lat,
        lng,
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

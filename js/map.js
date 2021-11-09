import { formEnabled } from './form.js';

const addMap = () => {

  const map = L.map('map-canvas')
    .on('load', () => {
      formEnabled();
    })
    .setView(
      {
        lat: 35.6895,
        lng: 139.692,
      },
      16,
    );

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const mainPin = L.icon(
    {
      iconUrl: '../img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 26],
    },
  );

  const pin = L.marker(
    {
      lat: 35.6895,
      lng: 139.692,
    },
    {
      draggable: true,
      icon: mainPin,
    },
  );

  pin.addTo(map);

};

export { addMap };

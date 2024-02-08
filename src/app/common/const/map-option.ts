import L, { latLng, MapOptions, tileLayer } from 'leaflet';

export const mapOption: MapOptions = {
  layers: [
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }),
  ],
  zoom: 5,
  center: latLng(51, -0.09),
  zoomControl: false,
};

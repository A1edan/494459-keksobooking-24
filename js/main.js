import { createAdvertisements } from './mock/create-advertisements.js';
import { NUMBEROBJECTGENERATE } from './mock/data.js';
import { showPopup } from './popup.js';

const showData = createAdvertisements(NUMBEROBJECTGENERATE);
showPopup(showData[0]);

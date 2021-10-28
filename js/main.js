import {createAdvertisements} from './mock/create-advertisements.js';
import {NUMBEROBJECTGENERATE} from './mock/data.js';
import {adsPopup} from './mock/popup.js';

const adsData = createAdvertisements(NUMBEROBJECTGENERATE);
adsPopup(adsData[0]);

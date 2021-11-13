import { createAdvertisements } from './mock/create-advertisements.js';
import { COUNT_ADS } from './mock/data.js';
import { showPopup } from './popup.js';
import { formDisabled, formEnabled, addFormHandlers } from './form.js';
import { addMap } from './map.js';


const adsData = createAdvertisements(COUNT_ADS);
showPopup(adsData[0]);
formDisabled();
formEnabled();
addFormHandlers();
addMap();

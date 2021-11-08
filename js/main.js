import { createAdvertisements } from './mock/create-advertisements.js';
import { COUNT_ADS } from './mock/data.js';
import { showPopup } from './popup.js';
import { switchToDisabled, switchToAvalabled, addFormHandlers } from './form.js';


const adsData = createAdvertisements(COUNT_ADS);
showPopup(adsData[0]);
switchToDisabled();
switchToAvalabled();
addFormHandlers();

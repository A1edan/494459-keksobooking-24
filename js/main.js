import { createAdvertisements } from './mock/create-advertisements.js';
import { NUMBEROBJECTGENERATE } from './mock/data.js';
import { showPopup } from './popup.js';
import { switchToDisabled } from './form-disabled.js';

const showData = createAdvertisements(NUMBEROBJECTGENERATE);
showPopup(showData[0]);
switchToDisabled();

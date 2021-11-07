import { createAdvertisements } from './mock/create-advertisements.js';
import { NUMBEROBJECTGENERATE } from './mock/data.js';
import { showPopup } from './popup.js';
import { switchToDisabled, switchToAvalabled, enableFilter, enableForm } from './form.js';


const showData = createAdvertisements(NUMBEROBJECTGENERATE);
showPopup(showData[0]);
switchToDisabled();
switchToAvalabled();
enableFilter();
// enableForm();

import { createAdvertisements } from './mock/create-advertisements.js';
import { COUNT_ADS } from './mock/data.js';
import { formDisabled, addFormHandlers } from './form.js';
import { addMap } from './map.js';

const adsData = createAdvertisements(COUNT_ADS);

formDisabled();
addFormHandlers();
addMap(adsData);

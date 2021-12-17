import { formDisabled, addFormHandlers, adForm } from './form.js';
import { addMap } from './map.js';
import { getData, sendData } from './api.js';
import { reset } from './clear-forms.js';

formDisabled();
addFormHandlers();

getData(addMap);
sendData(adForm);
reset();

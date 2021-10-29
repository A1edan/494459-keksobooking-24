import { makePinData } from './data.js';

const createAdvertisements = (count) => [...Array(count)].map(makePinData);

export { createAdvertisements };

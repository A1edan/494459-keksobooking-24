import { makePinData } from './data';

const createAdvertisements = (count) => [...Array(count)].map(makePinData);

export {createAdvertisements};

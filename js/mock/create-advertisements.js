import {makePinsData} from './data.js';

const createAdvertisements = (count) => [...Array(count)].map(makePinsData);

export {createAdvertisements};

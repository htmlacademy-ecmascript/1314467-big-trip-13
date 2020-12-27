import {generateTripPoint} from "./mocks/mocksData.js";
import {QUANTITY_PINS} from './utils/const.js';
import Trip from "./presenters/trip.js";

export const points = new Array(QUANTITY_PINS).fill().map(generateTripPoint);
console.log(points);

const tripInfoElement = document.querySelector(`.trip-main`);
const tripMenuElement = tripInfoElement.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

const tripBoardPresenter = new Trip(tripInfoElement, tripMenuElement, tripEvents);
tripBoardPresenter.init(points);



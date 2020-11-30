const QUANTITY_PINS = 3;
import {createFormTemplate} from "./view/trip-form-template.js";
import {createTripInfoTemplate} from "./view/info-trip-template.js";
import {createTripCostTemplate} from "./view/trip-cost-template.js";
import {createNavTemplate} from "./view/nav-template.js";
import {createFiltersTemplate} from "./view/trip-filters.js";
import {createTripSortTemplate} from "./view/trip-sort-template.js";
import {createPointTemplate} from "./view/trip-point-template.js";
import {generateTripPoint} from "./mocks/mocksData.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const points = new Array(QUANTITY_PINS).fill().map(generateTripPoint);

const tripElement = document.querySelector(`.trip-main`);
render(tripElement, createTripInfoTemplate(points), `afterbegin`);

const tripCostElement = tripElement.querySelector(`.trip-info`);
render(tripCostElement, createTripCostTemplate(points), `beforeend`);

const tripControls = tripElement.querySelector(`.trip-controls`);
const firstElement = tripControls.querySelector(`:first-child`);
render(firstElement, createNavTemplate(), `afterend`);
render(tripControls, createFiltersTemplate(), `beforeend`);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createTripSortTemplate(), `afterbegin`);
const eventsContainer = tripEvents.querySelector(`.trip-events__list`);
render(eventsContainer, createFormTemplate(points[1]), `beforeend`);


for (let point of points) {
  render(eventsContainer, createPointTemplate(point), `beforeend`);
}

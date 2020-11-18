const QUANTITY_PINS = 3;

import { createFormTemplate } from "./view/trip-form-template.js";
import { createTripInfoTemplate } from "./view/info-trip-template.js";
import { createTripCostTemplate } from "./view/trip-cost-template.js";
import { createNavTemplate } from "./view/nav-template.js";
import { createFiltersTemplate } from "./view/trip-filters.js";
import { createTripSortTemplate } from "./view/trip-sort-template.js";
import { createDayTemplate } from "./view/trip-day-template.js";
import { createPointTemplate } from "./view/trip-point-template.js";

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};


const tripElement = document.querySelector(`.trip-main`);
render(tripElement, createTripInfoTemplate(), `afterbegin`);

const tripCostElement = tripElement.querySelector(`.trip-info`);
render(tripCostElement, createTripCostTemplate(), `beforeend`);

const tripControls = tripElement.querySelector(`.trip-controls`);


const firstElement = tripControls.querySelector(`:first-child`);
render(firstElement, createNavTemplate(), `afterend`);
render(tripControls, createFiltersTemplate(), `beforeend`);
const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createTripSortTemplate(), `afterbegin`);

render(tripEvents, createFormTemplate(), `beforeend`);

render(tripEvents, createDayTemplate(), `beforeend`);

const tripDayEventsContainer = tripEvents.querySelector(`.trip-events__list`);
for (let i = 0; i < QUANTITY_PINS; i++) {
    render(tripDayEventsContainer, createPointTemplate(), `beforeend`);
}
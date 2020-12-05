import {createElement} from "../utils.js";
import {getTripRoute, getTripDates, getSumCost} from "../mocks/mocksData.js";

const createTripInfoTemplate = (points) => {
  const period = getTripDates(points);
  const title = getTripRoute(points);
  const total = getSumCost(points);

  return `<section class="trip-main__trip-info  trip-info">
             <div class="trip-info__main">
               <h1 class="trip-info__title">${title}</h1>
               <p class="trip-info__dates">${period}</p>
             </div>
              <p class="trip-info__cost">
               Total: &euro;&nbsp;<span class="trip-info__cost-value">${total}</span>
              </p>
           </section>`;
};

export default class InfoTrip {
  constructor(points) {
    this._data = points;
    this._element = null;
  }

  getTemplate() {
    return createTripInfoTemplate(this._data);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

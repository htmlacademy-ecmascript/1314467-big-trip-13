import Abstract from "./abstract.js";
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

export default class InfoTrip extends Abstract {
  constructor(points) {
    super();
    this._data = points;
  }

  getTemplate() {
    return createTripInfoTemplate(this._data);
  }
}

import Abstract from "./abstract.js";

const createEmptyTripListTemplate = () => {
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
};

export default class TripListEmpty extends Abstract {
  getTemplate() {
    return createEmptyTripListTemplate();
  }
}

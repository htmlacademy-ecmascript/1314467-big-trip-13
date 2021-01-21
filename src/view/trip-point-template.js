import Abstract from "./abstract.js";

const createOffer = (offers) => {

  return offers.slice(0, 3).map((offer) => {

    return `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      ${offer.title ? `&plus;&euro;&nbsp;` : ``}
      <span class="event__offer-price">${offer.cost}</span>
    </li>`;
  }).join(`\n`);
};

const createPointTemplate = (point) => {
  const {tripType, destination, time, offers, price, isFavorite} = point;
  const offerTemplate = createOffer(offers);
  const isFavoriveClass = isFavorite ? `event__favorite-btn event__favorite-btn--active` : `event__favorite-btn`;

  return `<li class="trip-events__item">
            <div class="event">
                <time class="event__date" datetime=${time.day.format(`YYYY-MM-DD`)}>${time.day.format(`MMM DD`)}</time>
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/${tripType.toLowerCase()}.png" alt="Event type icon">
              </div>

              <h3 class="event__title">${tripType} ${destination}</h3>
              <div class="event__schedule">
                <p class="event__time">
                  <time class="event__start-time" datetime="${time.begin.format(`HH:mm`)}">${time.begin.format(`HH:mm`)}</time>
                  &mdash;
                  <time class="event__end-time" datetime="${time.end.format(`HH:mm`)}">${time.end.format(`HH:mm`)}</time>
                </p>
                <p class="event__duration">${time.difference}</p>
              </div>
              
              <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${price}</span>
              </p>
              <h4 class="visually-hidden">Offers:</h4>
              <ul class="event__selected-offers">
              ${offerTemplate}
             </ul>
             
             <button class="${isFavoriveClass}" type="button">
             <span class="visually-hidden">Add to favorite</span>
             <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
              <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
             </svg>
             </button>

             <button class="event__rollup-btn" type="button">
             <span class="visually-hidden">Open event</span>
             </button>
            </div>
         </li>`;
};

export default class PointTrip extends Abstract {
  constructor(point) {
    super();
    this._data = point;
    this._editClickHandler = this._editClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createPointTemplate(this._data);
  }

  _editClickHandler() {
    this._callback.editClick();
  }

  _favoriteClickHandler() {
    this._callback.favoriteClick();
  }

  setEditClickOpenHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._editClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._favoriteClickHandler);
  }
}


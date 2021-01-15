import Smart from "./smart.js";
import {CITY_DATA, TRIP_TYPES} from "../utils/const.js";
import {getRandomDescriptions, getRandomServices} from "../mocks/mocksData.js";


const createCitiesList = () => {
  return CITY_DATA.map((city) => `<option value="${city}"></option>`).join(``);
};

const createPhotoList = (photos) => {
  return `${photos.map((photo) =>`<img class="event__photo" src="${photo}" alt="Event photo">`).join(``)}`;
};

const createOffers = (offers) => {
  return offers.map((offer) => {

    return `<div class="event__offer-selector">
               <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title}" type="checkbox" name="event-offer-luggage" ${offer.isChecked ? `checked` : `` }>
               <label class="event__offer-label" for="event-offer-${offer.title}">
                 <span class="event__offer-title">${offer.title}</span>
                    &plus;&euro;&nbsp;
                 <span class="event__offer-price">${offer.cost}</span>
                </label>
            </div>`;
  }).join(``);
};

const createAvailableTypes = (selectedType) => {
  return TRIP_TYPES.map((type) => {
    const isChecked = type === selectedType;

    return `
  <div class="event__type-item">
    <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}" ${isChecked ? `checked` : ``}>
    <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type.toLowerCase()}</label>
  </div>`;
  }).join(``);
};


const createEditFormTemplate = (data) => {
  const {tripType, destination, offers, descriptions, time, price, photos} = data;

  return `<li class="trip-events__item"> 
   <form class="event event--edit" action="#" method="post">
    <header class="event__header">

      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${tripType.toLowerCase()}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            
            <div class="event__type-item">
            ${createAvailableTypes(tripType)}
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${tripType}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination ? destination : ``}" list="destination-list-1">
        <datalist id="destination-list-1">
        ${createCitiesList()}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${time.begin.format(`DD/MM/YY HH:mm`)}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${time.end.format(`DD/MM/YY HH:mm`)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>
      
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
      <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
    </header>

    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
        ${createOffers(offers)}
        </div>
      </section>
      
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${descriptions}</p>
        <div class="event__photos-container">
          <div class="event__photos-tape">
          ${createPhotoList(photos)}
          </div>
        </div>
      </section>
    </section>
  </form>
  </li>`;
};

export default class EditTrip extends Smart {
  constructor(point) {
    super();
    this._data = EditTrip.parcePointToData(point);
    this._editFormClickHandler = this._editFormClickHandler.bind(this);
    this._closeEditFormClickHandler = this._closeEditFormClickHandler.bind(this);
    this._typeChangeHandler = this._typeChangeHandler.bind(this);
    this._destinationChangeHandler = this._destinationChangeHandler.bind(this);
    this._setInnerHandlers();
    this.restoreHandlers();
  }

  getTemplate() {
    return createEditFormTemplate(this._data);
  }

  _destinationChangeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      destination: evt.target.value,
      descriptions: getRandomDescriptions()
    });
  }
  _typeChangeHandler(evt) {
    evt.preventDefault();
    this.updateData({
      tripType: evt.target.value,
      offers: getRandomServices()
    });
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector(`.event__input--destination`)
      .addEventListener(`change`, this._destinationChangeHandler);
    this.getElement()
      .querySelector(`.event__type-list`).addEventListener(`change`, this._typeChangeHandler);
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setEditFormOpenHandler(this._callback.openForm);
    this.setEditFormCloseHandler(this._callback.closeForm);
  }

  _editFormClickHandler(evt) {
    evt.preventDefault();
    this._callback.openForm(EditTrip.parseDataToPoint(this._data));
  }

  _closeEditFormClickHandler() {
    this._callback.closeForm();
  }

  setEditFormOpenHandler(callback) {
    this._callback.openForm = callback;
    this.getElement().querySelector(`form`).addEventListener(`submit`, this._editFormClickHandler);
  }

  setEditFormCloseHandler(callback) {
    this._callback.closeForm = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._closeEditFormClickHandler);
  }

  static parcePointToData(point) {
    return Object.assign({}, point);
  }

  static parseDataToPoint(data) {
    return Object.assign({}, data);
  }
}

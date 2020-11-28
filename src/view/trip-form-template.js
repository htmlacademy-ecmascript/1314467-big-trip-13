import dayjs from "dayjs";
const LABEL_OF_TYPES = {
  'Taxi': ` to `,
  'Bus': ` to `,
  'Train': ` to `,
  'Ship': ` to `,
  'Transport': ` to `,
  'Drive': ` to `,
  'Flight': ` to `,
  'Sightseeing': ` in `,
  'Restaurant': ` in `,
  'Check-in': ` in `
};


const cities = [`Tel-Aviv`, `Minsk`, `Rome`, `Madrid`, `Moskow`, `Baku`, `New York`, `London`];

const createCitiesList = () => {
  return cities.map((city) => `<option value="${city}"></option>`).join(``);
};
const createPhotoList = (photos) => {
  return photos.map((photo) => `<img class="event__photo" src="${photo}" alt="Event photo">`).join(``);
};
const createOffers = (offers) => {
  return offers.map(({title, cost, isChecked}) => {
    return `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${title}" type="checkbox" name="event-offer-luggage" ${isChecked ? `checked` : `` }>
        <label class="event__offer-label" for="event-offer-${title}">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${cost}</span>
        </label>
    </div>`;
  }).join(``);
};

export const createFormTemplate = (point) => {
  const {tripType, destination, offers, descriptions, photo, time, price} = point;
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
              <input id="event-type-${tripType.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${tripType.toLowerCase()}">
              <label class="event__type-label  event__type-label--${tripType.toLowerCase()}" for="event-type-${tripType.toLowerCase()}-1">${tripType}</label>
            </div>

          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
        ${tripType}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${LABEL_OF_TYPES[tripType]}${destination}" list="destination-list-1">
        <datalist id="destination-list-1">
        ${createCitiesList()}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dayjs(time.begin).format(`DD/MM/YY HH:mm`)}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dayjs(time.end).format(`DD/MM/YY HH:mm`)}">
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
          ${createPhotoList(photo)}
          </div>
        </div>
      </section>
    </section>
  </form>
  </li>`;
};

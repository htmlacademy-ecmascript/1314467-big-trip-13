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


export const createPointTemplate = (point) => {
  const {tripType, destination, time, offers, price, isFavorite} = point;
  const createOffer = () => {
    return offers.slice(0, 3).filter((el) => el.isChecked).map((it) => {
      return `<li class="event__offer">
        <span class="event__offer-title">${it.title}</span>
        ${it.title ? `&plus;&euro;&nbsp;` : ``}
        <span class="event__offer-price">${it.cost}</span>
      </li>`;
    }).join(`\n`);
  };
  const offerTemplate = createOffer();

  const isFavoriveClass = isFavorite ? `event__favorite-btn event__favorite-btn--active` : `event__favorite-btn`;


  return `<li class="trip-events__item">
            <div class="event">
                <time class="event__date" datetime=${dayjs(time.day).format(`YYYY-MM-DD`)}>${dayjs(time.day).format(`MMM DD`)}</time>
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/${tripType.toLowerCase()}.png" alt="Event type icon">
              </div>
              <h3 class="event__title">${tripType}${LABEL_OF_TYPES[tripType]}${destination}</h3>
              <div class="event__schedule">
                <p class="event__time">
                  <time class="event__start-time" datetime="${dayjs(time.begin).format(`HH:mm`)}">${dayjs(time.begin).format(`HH:mm`)}</time>
                  &mdash;
                  <time class="event__end-time" datetime="${dayjs(time.end).format(`HH:mm`)}">${dayjs(time.end).format(`HH:mm`)}</time>
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
            <button class="event__rollup-btn" type="button"><span class="visually-hidden">Open event</span></button>
            
        </div>
      </li>`;

};

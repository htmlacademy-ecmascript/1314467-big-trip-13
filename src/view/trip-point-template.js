const labelOfType = {
  'Taxi': `to`,
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
  const {tripType, duration, destination, startTime, endTime, offers, price} = point;
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


  return `<li class="trip-events__item">
            <div class="event">
              <div class="event__type">
                <img class="event__type-icon" width="42" height="42" src="img/icons/${tripType.toLowerCase()}.png" alt="Event type icon">
              </div>
              <h3 class="event__title">${tripType}${labelOfType[tripType]}${destination}</h3>
              <div class="event__schedule">
                <p class="event__time">
                  <time class="event__${startTime}" datetime="2019-03-19T11:20">${startTime}</time>
                  &mdash;
                  <time class="event__end-time" datetime="2019-03-19T13:00">${endTime}</time>
                </p>
                <p class="event__duration">${duration}</p>
              </div>
              <p class="event__price">
                &euro;&nbsp;<span class="event__price-value">${price}</span>
              </p>
              <h4 class="visually-hidden">Offers:</h4>
              <ul class="event__selected-offers">
              ${offerTemplate}
            </ul>
            <button class="event__rollup-btn" type="button"><span class="visually-hidden">Open event</span></button>
            
        </div>
      </li>`;

};

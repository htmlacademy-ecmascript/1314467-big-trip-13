import dayjs from "dayjs";

const getTripDates = (points) => {
  const tripStartDate = `${dayjs(points[0].time.begin).format(`DD MMM`)}`;
  const tripEndDate = `${dayjs(points[points.length - 1].time.end).format(`DD MMM`)}`;

  return `${tripStartDate} - ${tripEndDate}`;
};

const getTripRoute = (points) => {
  const cities = [...new Set(points.map((point) => point.destination))];

  return cities.length > 3 ?
    `${cities[0]} — ... — ${cities[cities.length - 1]}` :
    `${cities.join(` — `)}`;
};

export const createTripInfoTemplate = (points) => {
  const period = getTripDates(points);
  const title = getTripRoute(points);

  return `<section class="trip-main__trip-info  trip-info">
          <div class="trip-info__main">
            <h1 class="trip-info__title">${title}</h1>
            <p class="trip-info__dates">${period}</p>
          </div>
        </section>`;
};

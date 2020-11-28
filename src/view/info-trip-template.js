import dayjs from "dayjs";
export const createTripInfoTemplate = (points) => {
  let title;
  let period;
  switch (points.length) {
    case 1:
      title = `${points[0].destination}`;
      period = `${dayjs(points[0].time.begin).format(`DD MMM`)} - ${dayjs(points[0].time.end).format(`DD MMM`)}`;
      break;

    case 2:
      title = `${points[0].destination} - ${points[1].destination}`;
      period = `${dayjs(points[0].time.begin).format(`DD MMM`)} - ${dayjs(points[1].time.end).format(`DD MMM`)}`;
      break;

    case 3:
      title = `${points[0].destination} - ${points[1].destination} - ${points[points.length - 1].destination}`;
      period = `${dayjs(points[0].time.begin).format(`DD MMM`)} - ${dayjs(points[points.length - 1].time.end).format(`DD MMM`)}`;
      break;
  }


  return `<section class="trip-main__trip-info  trip-info">
          <div class="trip-info__main">
            <h1 class="trip-info__title">${title}</h1>
            <p class="trip-info__dates">${period}</p>
          </div>
        </section>`;
};

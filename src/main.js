const QUANTITY_PINS = 5;
import InfoTrip from "./view/info-trip-template.js";
import NavTrip from "./view/nav-template.js";
import FiltersTrip from "./view/trip-filters.js";
import SortTrip from "./view/trip-sort-template.js";
import EditTrip from "./view/trip-EditForm-template.js";
import PointTrip from "./view/trip-point-template.js";
import TripListEmpty from "./view/trip-List-Empty.js";
import {generateTripPoint} from "./mocks/mocksData.js";
import {render, RenderPosition, replace} from "./utils/render.js";

export const points = new Array(QUANTITY_PINS).fill().map(generateTripPoint);


const tripElement = document.querySelector(`.trip-main`);
const tripControls = tripElement.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const eventsContainer = tripEvents.querySelector(`.trip-events__list`);

const renderTripPoint = (tripListElement, tripPoint) => {
  const tripComponent = new PointTrip(tripPoint);
  const editTripComponent = new EditTrip(tripPoint);

  const replaceTripPointToEditForm = () => {
    replace(editTripComponent.getElement(), tripComponent.getElement());
  };

  const replaceEditFormToTripCard = () => {
    replace(tripComponent.getElement(), editTripComponent.getElement());
  };

  const onEscDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceEditFormToTripCard();
      document.removeEventListener(`keydown`. onEscDown);
    }
  };

  tripComponent.setEditClickOpenHandler(() => {
    replaceTripPointToEditForm();
    document.addEventListener(`keydown`, onEscDown);
  });

  editTripComponent.setEditFormOpenHandler(() => {
    replaceEditFormToTripCard();
    document.addEventListener(`keydown`, onEscDown);
  });

  editTripComponent.setEditFormCloseHandler(() => {
    replaceEditFormToTripCard();
    document.addEventListener(`keydown`, onEscDown);
  });

  render(tripListElement, tripComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderBoard = () =>{
  render(tripControls, new NavTrip().getElement(), RenderPosition.AFTERBEGIN);
  render(tripControls, new FiltersTrip().getElement(), RenderPosition.BEFOREEND);
  render(tripEvents, new SortTrip().getElement(), RenderPosition.AFTERBEGIN);

  if (points.length === 0) {
    render(tripEvents, new TripListEmpty().getElement(), RenderPosition.BEFOREEND);
  } else {
    render(tripElement, new InfoTrip(points).getElement(), RenderPosition.AFTERBEGIN);
    points.forEach(((point) => renderTripPoint(eventsContainer, point)));
  }
};
renderBoard();

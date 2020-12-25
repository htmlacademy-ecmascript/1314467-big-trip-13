import SortTrip from "../view/trip-sort-template.js";
import TripListEmpty from "../view/trip-List-Empty.js";
import TripList from "../view/trip-List-Component.js";
import InfoTrip from "../view/info-trip-template.js";
import NavTrip from "../view/nav-template.js";
import FiltersTrip from "../view/trip-filters.js";
import PointPresenter from "./point.js";

import {
  render,
  RenderPosition} from "../utils/render.js";

import {updateItem} from "../utils/common.js";

const sortTripComponent = new SortTrip();
const tripListEmptyComponent = new TripListEmpty();
const tripList = new TripList();
const tripNav = new NavTrip();
const tripFilter = new FiltersTrip();

export default class Trip {
  constructor(infoContainer, tripMenuElement, tripContainer) {
    this._tripContainer = tripContainer;
    this._infoContainer = infoContainer;
    this._tripMenuElement = tripMenuElement;

    this._pointPresenter = {};
    this._infoTrip = null;

    this._handleTripChange = this._handleTripChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(tripCards) {
    this._tripCards = tripCards.slice();

    this._infoTrip = new InfoTrip(tripCards);

    render(this._tripContainer, tripList, RenderPosition.BEFOREEND);
    this._renderTripList();
  }

  _renderInfoTrip() {
    render(this._infoContainer, this._infoTrip, RenderPosition.AFTERBEGIN);
  }

  _renderNavTrip() {
    render(this._tripMenuElement, tripNav, RenderPosition.AFTERBEGIN);
  }

  _renderFiltersElement() {
    render(this._tripMenuElement, tripFilter, RenderPosition.BEFOREEND);
  }

  _renderSortTrip() {
    render(this._tripContainer, sortTripComponent, RenderPosition.AFTERBEGIN);
  }

  _rendertripListEmpty() {
    if (this._tripCards.length === 0) {
      render(this._tripContainer, tripListEmptyComponent, RenderPosition.BEFOREEND);
    }
    return;
  }


  _renderTripPoints() {
    this._tripCards.forEach((tripCard) => this._renderTripPoint(tripCard));

  }

  _renderTripPoint(tripCard) {
    const pointPresenter = new PointPresenter(tripList, this._handleTripChange, this._handleModeChange);
    pointPresenter.init(tripCard);
    this._pointPresenter[tripCard.id] = pointPresenter;
  }

  _handleTripChange(updatedTrip) {
    this._tripCards = updateItem(this._tripCards, updatedTrip);
    this._pointPresenter[updatedTrip.id].init(updatedTrip);
  }

  _handleModeChange() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _clearTripList() {
    Object.values(this._pointPresenter)
    .forEach((presenter) => presenter.destroy());
    this._pointPresenter = {};
  }


  _renderTripList() {
    this._renderInfoTrip();
    this._renderNavTrip();
    this._renderFiltersElement();
    this._rendertripListEmpty();
    this._renderSortTrip();
    this._renderTripPoints();
  }

}

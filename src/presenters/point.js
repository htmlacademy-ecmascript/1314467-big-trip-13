import EditTrip from "../view/trip-EditForm-template.js";
import PointTrip from "../view/trip-point-template.js";

import {
  render,
  RenderPosition,
  replace,
  remove} from "../utils/render.js";

import {Mode} from "../utils/const.js";


export default class Point {
  constructor(tripListContainer, changeData, changeMode) {
    this._tripListContainer = tripListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;
    this._mode = Mode.DEFAULT;

    this._tripComponent = null;
    this._editTripComponent = null;

    this._editClickHandler = this._editClickHandler.bind(this);
    this._editFormClickHandler = this._editFormClickHandler.bind(this);
    this._closeEditFormClickHandler = this._closeEditFormClickHandler.bind(this);
    this._onEscDown = this._onEscDown.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  init(tripCard) {
    this._tripCard = tripCard;

    const prevTripComponent = this._tripComponent;
    const prevTripEditComponent = this._tripEditComponent;

    this._tripComponent = new PointTrip(tripCard);
    this._tripEditComponent = new EditTrip(tripCard);

    this._tripComponent.setEditClickOpenHandler(this._editClickHandler);
    this._tripEditComponent.setEditFormOpenHandler(this._editFormClickHandler);
    this._tripEditComponent.setEditFormCloseHandler(this._closeEditFormClickHandler);
    this._tripComponent.setFavoriteClickHandler(this._favoriteClickHandler);

    if (prevTripComponent === null || prevTripEditComponent === null) {
      render(this._tripListContainer, this._tripComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._tripComponent, prevTripComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._tripEditComponent, prevTripEditComponent);
    }

    remove(prevTripComponent);
    remove(prevTripEditComponent);
  }

  destroy() {
    remove(this._tripComponent);
    remove(this._tripEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToTripCard();
    }
  }

  _replaceTripToForm() {
    replace(this._tripEditComponent, this._tripComponent);
    document.addEventListener(`keydown`, this._onEscDown);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToTripCard() {
    replace(this._tripComponent, this._tripEditComponent);
    document.removeEventListener(`keydown`, this._onEscDown);
    this._mode = Mode.DEFAULT;
  }

  _onEscDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._replaceFormToTripCard();
    }
  }

  _editClickHandler() {
    this._replaceTripToForm();
  }

  _editFormClickHandler(tripCard) {
    this._changeData(tripCard);
    this._replaceFormToTripCard();
  }

  _closeEditFormClickHandler() {
    this._replaceFormToTripCard();
  }

  _favoriteClickHandler() {
    this._changeData(
        Object.assign(
            {},
            this._tripCard,
            {
              isFavorite: !this._tripCard.isFavorite,
            }
        )
    );
  }


}


import {
  getRandomInteger,
  getRandomBoolean} from "./common.js";

export const MIN_PRICE = 1;
export const MAX_PRICE = 1000;
export const MAX_DESCRIPTIONS = 7;
export const QUANTITY_PINS = 7;
export const HOURS_IN_DAY = 24;
export const MINUTES_IN_HOUR = 60;
export const TRIP_TYPES = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
export const CITY_DATA = [`Tel-Aviv`, `Minsk`, `Rome`, `Madrid`, `Moskow`, `Baku`, `New York`, `London`];
export const DESCRIPTIONS_DATA = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Cras aliquet varius magna, non porta ligula feugiat eget.
Fusce tristique felis at fermentum pharetra.
Aliquam id orci ut lectus varius viverra.
Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.
Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`];

const TO = ` to `;
const IN = ` in `;

export const LABEL_OF_TYPES = {
  'Taxi': TO,
  'Bus': TO,
  'Train': TO,
  'Ship': TO,
  'Transport': TO,
  'Drive': TO,
  'Flight': TO,
  'Sightseeing': IN,
  'Restaurant': IN,
  'Check-in': IN
};


export const PHOTO_DATA = `http://picsum.photos/248/152?r=`;

export const SERVISES = [
  {
    type: `meal`,
    title: `Add breakfast`,
    cost: getRandomInteger(10, 30),
    isChecked: getRandomBoolean()
  },
  {
    type: `luggage`,
    title: `Add luggage`,
    cost: getRandomInteger(10, 20),
    isChecked: getRandomBoolean()
  },
  {
    type: `transfer`,
    title: `Book tickets`,
    cost: getRandomInteger(5, 15),
    isChecked: getRandomBoolean()
  },
  {
    type: `comfort`,
    title: `Switch to comfort`,
    cost: getRandomInteger(10, 30),
    isChecked: getRandomBoolean()
  },
  {
    type: `meal`,
    title: `Lunch in city`,
    cost: getRandomInteger(30, 70),
    isChecked: getRandomBoolean()
  },
  {
    type: `transfer`,
    title: `Order Uber`,
    cost: getRandomInteger(10, 30),
    isChecked: getRandomBoolean()
  },
  {
    type: `transfer`,
    title: `Rent a car`,
    cost: getRandomInteger(50, 150),
    isChecked: getRandomBoolean()
  }
];

export const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};


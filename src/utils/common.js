import {HOURS_IN_DAY, MINUTES_IN_HOUR} from "../utils/const.js";
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomBoolean = () => {
  return (
    Boolean(getRandomInteger(0, 1))
  );
};

export function updateItem(items, update) {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
}


export const sortPointDate = (pointA, pointB) => {
  return pointA.time.day - pointB.time.day;
};

export const sortPointPrice = (pointA, pointB) => {
  return pointA.price - pointB.price;
};


export const sortPointTime = (pointA, pointB) => {
  const hoursA = pointA.time.end.diff(pointA.time.begin, `hour`) % HOURS_IN_DAY;
  const minutesA = pointA.time.end.diff(pointA.time.begin, `minute`) % MINUTES_IN_HOUR;
  const hoursB = pointB.time.end.diff(pointB.time.begin, `hour`) % HOURS_IN_DAY;
  const minutesB = pointB.time.end.diff(pointB.time.begin, `minute`) % MINUTES_IN_HOUR;
  const diff1 = hoursA > 0 ? hoursA * 60 + minutesA : minutesA;
  const diff2 = hoursB > 0 ? hoursB * 60 + minutesB : minutesB;
  return diff1 - diff2;

};

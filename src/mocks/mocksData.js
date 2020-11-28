import dayjs from "dayjs";
const MIN_PRICE = 1;
const MAX_PRICE = 1000;
const MAX_DESCRIPTIONS = 7;

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomBoolean = () => {
  return (
    Boolean(getRandomInteger(0, 1))
  );
};

const services = [
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


const generateTripType = () => {
  const tripTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
  const randomIndex = getRandomInteger(0, tripTypes.length - 1);
  return tripTypes[randomIndex];

};


const generateDestination = () => {
  const cityData = [`Tel-Aviv`, `Minsk`, `Rome`, `Madrid`, `Moskow`, `Baku`, `New York`, `London`];
  const randomIndex = getRandomInteger(0, cityData.length - 1);
  return cityData[randomIndex];

};

const getRandomPhotos = (count) => {
  const result = [];

  while (result.length !== count) {
    result.push(`http://picsum.photos/248/152?r=${getRandomInteger(0, 10)}`);
  }

  return result;
};
const calculateDifferenceTime = (begin, end) => {
  const hours = end.diff(begin, `hour`) % 24;
  const minutes = end.diff(begin, `minute`) % 60;
  return `${hours > 0 ? `${hours}H ${minutes}M` : `${minutes}M` }`;
};

const generateTime = () => {
  const daysGap = getRandomInteger(-7, 7);
  const hoursGap = getRandomInteger(0, 48);
  const minutesGap = getRandomInteger(0, 60);
  const days = dayjs().add(daysGap, `day`);
  const beginTime = dayjs().add(hoursGap, `hour`);
  const endTime = beginTime.add(hoursGap, `hour`).add(minutesGap, `minute`);

  return {
    day: days,
    begin: beginTime,
    end: endTime,
    difference: calculateDifferenceTime(beginTime, endTime),
  };
};


const generatePrice = () => {
  return getRandomInteger(MIN_PRICE, MAX_PRICE);

};

const getDescriptions = () => {
  const descriptions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Cras aliquet varius magna, non porta ligula feugiat eget.
    Fusce tristique felis at fermentum pharetra.
    Aliquam id orci ut lectus varius viverra.
    Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
    Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
    Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
    Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.
    Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

  const arrDescriptions = descriptions.split(`.`);
  let text = ``;
  for (let i = 0; i < getRandomInteger(1, MAX_DESCRIPTIONS); i++) {
    text += arrDescriptions[getRandomInteger(0, arrDescriptions.length - 1)];

  }
  return text;
};

const renderServicesData = (counts) => {
  const servicesCopy = [...services];
  const result = [];

  for (let i = 0; i < counts; i++) {
    const element = servicesCopy.splice(getRandomInteger(0, servicesCopy.length - 1), 1);

    result.push(element[0]);
  }
  return result;
};

const getPhotos = () => {
  const randomInteger = getRandomInteger(1, 10);

  const photos = [];
  for (let i = randomInteger; i--;) {
    photos.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return photos;
};

export const generateTripPoint = () => {
  return {
    tripType: generateTripType(),
    destination: generateDestination(),
    time: generateTime(),
    price: generatePrice(),
    photos: getRandomPhotos(getRandomInteger(0, 7)),
    offers: renderServicesData(getRandomInteger(0, 5)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    descriptions: getDescriptions(),
    photo: getPhotos(),
  };


};

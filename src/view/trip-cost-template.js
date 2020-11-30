
const getTripCost = (points) => {
  return points.reduce(((pointAcc, point) => {
    const selectedOffersTotalPrice = point.offers
      .filter((offer) => offer.checked)
      .reduce(((offersAcc, offer) => offersAcc + offer.price), 0);
    return selectedOffersTotalPrice + pointAcc + point.price;
  }), 0);
};

export const createTripCostTemplate = (points) => {
  const total = getTripCost(points);
  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${total}</span>
    </p>`;
};

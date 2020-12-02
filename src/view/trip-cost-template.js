export const createTripCostTemplate = (points) => {
  const total = Object.values(points.map(((it) => it.price))).reduce((a, b) => a + b);

  return `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${total}</span>
    </p>`;
};

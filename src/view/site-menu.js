export const createSiteMenuTemplate = () => {
    return ` <body class="page-body">
  <header class="page-header">
    <div class="page-body__container  page-header__container">
      <img class="page-header__logo" src="img/logo.png" width="42" height="42" alt="Trip logo">

      <div class="trip-main">
        <section class="trip-main__trip-info  trip-info">
          <div class="trip-info__main">
            <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

            <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
          </div>

          <p class="trip-info__cost">
            Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
          </p>
        </section>

        <div class="trip-main__trip-controls  trip-controls">
          <h2 class="visually-hidden">Switch trip view</h2>
          <nav class="trip-controls__trip-tabs  trip-tabs">
            <a class="trip-tabs__btn" href="#">Table</a>
            <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Stats</a>
          </nav>

          <h2 class="visually-hidden">Filter events</h2>
          <form class="trip-filters" action="#" method="get">
            <div class="trip-filters__filter">
              <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
              <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
            </div>

            <div class="trip-filters__filter">
              <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
              <label class="trip-filters__filter-label" for="filter-future">Future</label>
            </div>

            <div class="trip-filters__filter">
              <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
              <label class="trip-filters__filter-label" for="filter-past">Past</label>
            </div>

            <button class="visually-hidden" type="submit">Accept filter</button>
          </form>
        </div>

        <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>
      </div>
    </div>
  </header>

  <main class="page-body__page-main  page-main">
    <div class="page-body__container">
      <section class="trip-events  trip-events--hidden">
        <h2 class="visually-hidden">Trip events</h2>
      </section>

      <section class="statistics">
        <h2 class="visually-hidden">Trip statistics</h2>

        <div class="statistics__item statistics__item--money">
          <canvas class="statistics__chart  statistics__chart--money" width="900"></canvas>
        </div>

        <div class="statistics__item statistics__item--transport">
          <canvas class="statistics__chart  statistics__chart--transport" width="900"></canvas>
        </div>

        <div class="statistics__item statistics__item--time-spend">
          <canvas class="statistics__chart  statistics__chart--time" width="900"></canvas>
        </div>
      </section>
    </div>
  </main>
</body>`;

};
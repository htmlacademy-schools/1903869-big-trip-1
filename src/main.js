import { StatsView } from './view/chart-view';
import { TripTabs } from './view/trip-tabs';
import { createRandomWaypoint } from './way-point';
import { render, remove, MenuItem } from './utils';
import TripPresenter from './presenter/trip-presenter';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model';
import FilterPresenter from './presenter/filter-presenter';

const pageMainElement = document.querySelector('.trip-events');
const tripControls = document.querySelector('.trip-controls');

const siteTabs = new TripTabs();

render(siteTabs, tripControls, '.trip-controls__navigation');

const waypointCount = 20;
const points = [];
for (let i = 0; i < waypointCount; i++) {
  points.push(createRandomWaypoint());
}

const filterModel = new FilterModel();
const pointsModel = new PointsModel();
pointsModel.points = points;

const tripPresenter = new TripPresenter(
  pageMainElement,
  pointsModel,
  filterModel
);
const filterPresenter = new FilterPresenter(tripControls, filterModel);

let statisticsComponent = null;
let mode = MenuItem.TABLE;

const handleTabClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      if (mode !== MenuItem.TABLE) {
        filterPresenter.init();
        tripPresenter.init();
        remove(statisticsComponent);
        mode = MenuItem.TABLE;
      }
      break;
    case MenuItem.STATS:
      if (mode !== MenuItem.STATS) {
        filterPresenter.destroy();
        tripPresenter.destroy();
        statisticsComponent = new StatsView(pointsModel.points);
        statisticsComponent.setCharts();
        render(statisticsComponent, pageMainElement);
        mode = MenuItem.STATS;
      }
      break;
  }
};

siteTabs.tabClickHandler(handleTabClick);

tripPresenter.init();
filterPresenter.init();

document
  .querySelector('.trip-main__event-add-btn')
  .addEventListener('click', (e) => {
    e.preventDefault();
    remove(statisticsComponent);
    filterPresenter.destroy();
    filterPresenter.init();
    tripPresenter.destroy();
    tripPresenter.init();
    mode = 'TABLE';
  });

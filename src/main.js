import { TripTabs } from './view/trip-tabs';
import { createRandomWaypoint } from './way-point';
import { render } from './utils';
import TripPresenter from './presenter/trip-presenter';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model';
import FilterPresenter from './presenter/filter-presenter';

const pageMainElement = document.querySelector('.trip-events');
const tripControls = document.querySelector('.trip-controls');

render(new TripTabs(), tripControls, '.trip-controls__navigation');

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
tripPresenter.init();
filterPresenter.init();

document
  .querySelector('.trip-main__event-add-btn')
  .addEventListener('click', (e) => {
    e.preventDefault();
    tripPresenter.createPoint();
  });

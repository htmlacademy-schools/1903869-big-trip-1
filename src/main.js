import { Menu } from './view/menu';
import { Filters } from './view/filters';
import { createRandomWaypoint } from './way-point';
import { render } from './utils';
import TripPresenter from './presenter/trip-presenter';

const pageMainElement = document.querySelector('.trip-events');
const tripControls = document.querySelector('.trip-controls');

const menuModel = new Menu();
render(menuModel, tripControls, '.trip-controls__navigation');

const filtersModel = new Filters();
render(filtersModel, tripControls, '.trip-controls__filters');

const waypointCount = 20;
const points = [];
for (let i = 0; i < waypointCount; i++) {
  points.push(createRandomWaypoint());
}

const tripPresenter = new TripPresenter(pageMainElement);
tripPresenter.init(points);

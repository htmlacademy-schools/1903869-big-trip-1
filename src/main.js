import { TripTabs } from './view/trip-tabs';
import { TripFilters } from './view/trip-filters';
import { createRandomWaypoint } from './way-point';
import { render } from './utils';
import TripPresenter from './presenter/trip-presenter';

const pageMainElement = document.querySelector('.trip-events');
const tripControls = document.querySelector('.trip-controls');

render(new TripTabs(), tripControls, '.trip-controls__navigation');
render(new TripFilters(), tripControls, '.trip-controls__filters');

const waypointCount = 20;
const points = [];
for (let i = 0; i < waypointCount; i++) {
  points.push(createRandomWaypoint());
}

const tripPresenter = new TripPresenter(pageMainElement);
tripPresenter.init(points);

import {Menu} from './view/menu';
import {Filters} from './view/filters';
import {Sort} from './view/sort';
import {Waypoint} from './view/way-point';
import {CreationForm} from './view/creation-form';
import {createRandomWaypoint} from './way-point';
import {emptyListElement} from './utils';

const render = (component, container, place) => {
  const fragment = container.querySelector(place) || container;
  const renderComponent = component.getElement || component;
  fragment.appendChild(renderComponent);
};

const tripControls = document.querySelector('.trip-controls');
const tripEvents = document.querySelector('.trip-events');
const tripEventsList = document.createElement('ul');

const menuModel = new Menu();
render(menuModel, tripControls, '.trip-controls__navigation');

const filtersModel = new Filters();
render(filtersModel, tripControls, '.trip-controls__filters');

const waypointCount = 20;

if (waypointCount) {
  const waypointModels = [];
  for (let i = 0; i < 20; i++) {
    waypointModels.push(createRandomWaypoint());
  }

  const sortModel = new Sort();
  render(sortModel, tripEvents);

  tripEventsList.classList.add('trip-events__list');
  render(tripEventsList, tripEvents);

  for (let i = 0; i < waypointCount; i++) {
    const creationForm = new CreationForm(waypointModels[i]);
    const waypoint = new Waypoint(waypointModels[i]);

    waypoint.addEventListeners(creationForm.getElement, tripEventsList);

    creationForm.addEventListeners(waypoint.getElement, tripEventsList);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && tripEventsList.contains(creationForm.getElement)) {
        tripEventsList.replaceChild(waypoint.getElement, creationForm.getElement);
      }
    });

    render(waypoint, tripEventsList);
  }
} else {
  render(emptyListElement, tripEvents);
}

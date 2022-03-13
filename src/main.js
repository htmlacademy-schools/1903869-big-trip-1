import {menuView} from './view/Menu';
import {filtersView} from './view/Filters';
import {sortView} from './view/Sort';
import {waypointView} from './view/Waypoint';
import {creationFormView} from './view/CreationForm';
import {createRandomWaypoint} from './waypoint';

const render = (component, container, place) => {
  const fragment = container.querySelector(place) || container;
  fragment.appendChild(component);
};

const tripControls = document.querySelector('.trip-controls');
const tripEvents = document.querySelector('.trip-events');
const tripEventsList = document.createElement('ul');

const menuModel = menuView();
render(menuModel.getElement(), tripControls, '.trip-controls__navigation');

const filtersModel = filtersView();
render(filtersModel.getElement(), tripControls, '.trip-controls__filters');

const sortModel = sortView();
render(sortModel.getElement(), tripEvents);

tripEventsList.classList.add('trip-events__list');
render(tripEventsList, tripEvents);

const waypointModels = [];
for (let i = 0; i < 20; i++) {
  waypointModels.push(createRandomWaypoint());
}

const formModel = creationFormView();
const formParams = {
  isCreationForm: true
};
render(formModel.getElement({...waypointModels[0], ...formParams}), tripEventsList);

const waypointsModel = [
  waypointView(),
  waypointView(),
  waypointView(),
];
waypointsModel.forEach((waypointModel, i) => render(waypointModel.getElement(waypointModels[i]), tripEventsList));

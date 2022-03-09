import {menuView} from './view/Menu';
import {filtersView} from './view/Filters';
import {sortView} from './view/Sort';
import {waypointView} from './view/Waypoint';
import {creationFormView} from './view/CreationForm';

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

const formModel = creationFormView();
const formParams = {
  isCreationForm: true
};
render(formModel.getElement(formParams), tripEventsList);

const waypointsModel = [
  waypointView(),
  waypointView(),
  waypointView(),
];
const waypointParams = {
  date: '2022-01-01',
  event: 'Taxi Amsterdam',
  time: {
    start: '2022-01-01 10:30',
    end: '2022-01-01 11:30'
  },
  price: '20',
  offers: [
    {
      title: 'Uber Order',
      price: '20'
    },
  ]
};

waypointsModel.forEach((waypointModel) => render(waypointModel.getElement(waypointParams), tripEventsList));

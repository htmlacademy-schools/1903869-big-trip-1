import { PointsListView } from '../view/points-list';
import { Sort } from '../view/sort';
import PointPresenter from './point-presenter';
import {
  render,
  SortType,
  sortTaskByDay,
  sortTaskByDuration,
  sortTaskByPrice,
  updateItem,
} from '../utils';
import { EmptyListView } from '../view/empty-list';

export default class TripPresenter {
  constructor(mainElement) {
    this.tripSortComponent = new Sort();
    this.noTripPointComponent = new EmptyListView();
    this.tripEventsListElement = new PointsListView();
    this.points = [];

    this.pointPresenter = new Map();
    this.tripPointsElement = mainElement;

    this.sortType = SortType.DAY;
    this.sourcedTripPoints = [];
  }

  init = (points) => {
    this.points = [...points];
    this.sourcedTripPoints = [...points];
    this.renderMain();
  };

  renderNoTasks = () => {
    render(this.tripPointsElement, this.noTripPointComponent);
  };

  renderTripEventsListElement = () => {
    render(this.tripEventsListElement, this.tripPointsElement);
  };

  handleModeChange = () => {
    this.pointPresenter.forEach((presenter) => presenter.resetView());
  };

  handlePointChange = (updatedPoint) => {
    this.points = updateItem(this.points, updatedPoint);
    this.sourcedTripPoints = updateItem(this.sourcedTripPoints, updatedPoint);
    this.pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  sortTasks = (sortType) => {
    switch (sortType) {
      case SortType.DAY:
        this.points.sort(sortTaskByDay);
        break;
      case SortType.TIME:
        this.points.sort(sortTaskByDuration);
        break;
      case SortType.PRICE:
        this.points.sort(sortTaskByPrice);
        break;
      default:
        this.points = [...this.sourcedTripPoints];
    }

    this.sortType = sortType;
  };

  handleSortTypeChange = (sortType) => {
    if (this.sortType === sortType) {
      return;
    }

    this.sortTasks(sortType);
    this.clearTaskList();
    this.renderTripEventsList();
  };

  renderSort = () => {
    render(this.tripSortComponent, this.tripPointsElement);
    this.tripSortComponent.setSortTypeChangeHandler(this.handleSortTypeChange);
  };

  renderTripEvent = (tripPoint) => {
    const pointPresenter = new PointPresenter(
      this.tripEventsListElement,
      this.handlePointChange,
      this.handleModeChange
    );
    pointPresenter.init(tripPoint);
    this.pointPresenter.set(tripPoint.id, pointPresenter);
  };

  renderTripEventsList = () => {
    this.points.forEach((point) => this.renderTripEvent(point));
  };

  renderMain = () => {
    if (this.points.length === 0) {
      this.renderNoTasks();
    } else {
      this.renderSort();
      this.sortTasks(this.sortType);
      this.renderTripEventsList();
      this.renderTripEventsListElement();
    }
  };

  clearTaskList = () => {
    this.pointPresenter.forEach((presenter) => presenter.destroy());
    this.pointPresenter.clear();
  };
}

import { PointsListView } from '../view/points-list';
import { Sort } from '../view/sort';
import PointPresenter from './point-presenter';
import { render } from '../utils';
import { EmptyListView } from '../view/empty-list';

export default class TripPresenter {
  constructor(mainElement) {
    this.tripSortComponent = new Sort();
    this.noTripPointComponent = new EmptyListView();
    this.tripEventsListElement = new PointsListView();
    this.points = [];

    this.pointPresenter = new Map();
    this.tripPointsElement = mainElement;
  }

  init = (points) => {
    this.points = [...points];
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
    const updateIndex = this.points.findIndex(
      (item) => item.id === updatedPoint.id
    );

    this.points =
      updateIndex === -1
        ? this.points
        : [
            ...this.points.slice(0, updateIndex),
            updatedPoint,
            ...this.points.slice(updateIndex + 1),
          ];
    this.pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  renderSort = () => {
    render(this.tripSortComponent, this.tripPointsElement);
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
      this.renderTripEventsList();
      this.renderTripEventsListElement();
    }
  };

  clearTaskList = () => {
    this.pointPresenter.forEach((presenter) => presenter.destroy());
    this.pointPresenter.clear();
  };
}

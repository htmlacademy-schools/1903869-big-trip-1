import dayjs from 'dayjs';

export const sortTaskByDay = (pointA, pointB) =>
  dayjs(pointA.startDate).diff(dayjs(pointB.startDate));

export const sortTaskByDuration = (pointA, pointB) => {
  const durationPointA = dayjs(pointA.endDate).diff(dayjs(pointA.startDate));
  const durationPointB = dayjs(pointB.endDate).diff(dayjs(pointB.startDate));

  if (durationPointB - durationPointA !== 0) {
    return durationPointB - durationPointA;
  } else {
    return dayjs(pointA.startDate).diff(dayjs(pointB.startDate));
  }
};

export const sortTaskByPrice = (pointA, pointB) => {
  if (pointB.price - pointA.price !== 0) {
    return pointB.price - pointA.price;
  } else {
    return dayjs(pointA.startDate).diff(dayjs(pointB.startDate));
  }
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const render = (component, container, place) => {
  const containerChild = container.getElement || container;
  const fragment = place ? containerChild.querySelector(place) : containerChild;
  const renderComponent = component.getElement || component;

  fragment.append(renderComponent);
};

export const renderBefore = (component, container, place) => {
  const containerChild = container.getElement || container;
  const fragment = place ? containerChild.querySelector(place) : containerChild;
  const renderComponent = component.getElement || component;

  fragment.prepend(renderComponent);
};

export const remove = (component) => {
  if (component === null) {
    return;
  }
  component.getElement.remove();
  component.deleteElement();
};

export const replace = (newElement, oldElement) => {
  const newChild = newElement.getElement || newElement;
  const oldChild = oldElement.getElement || oldElement;
  const parent = oldChild.parentElement;

  parent.replaceChild(newChild, oldChild);
};

export const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};

export const SortType = {
  DAY: 'sort-day',
  TIME: 'sort-time',
  PRICE: 'sort-price',
};

export const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past',
};

export const filter = {
  [FilterType.EVERYTHING]: (points) => [...points].filter((point) => point),
  [FilterType.FUTURE]: (points) =>
    [...points].filter((point) => new Date(point.timeStart) > new Date()),
  [FilterType.PAST]: (points) =>
    [...points].filter((point) => new Date(point.timeEnd) < new Date()),
};

export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

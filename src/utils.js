export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

export const emptyListElement = createElement('<p class="trip-events__msg">Click New Event to create your first point</p>');

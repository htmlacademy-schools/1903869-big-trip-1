export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};
export const render = (component, container, place) => {
  const fragment = place ? container.querySelector(place) : container;
  const renderComponent = component.getElement || component;
  fragment.appendChild(renderComponent);
};

export const remove = (component) => {
  if (component === null) {
    return;
  }
  component.element.remove();
  component.deleteElement();
};

export const replace = (newElement, oldElement) => {
  const parent = oldElement.element.parentElement;

  parent.replaceChild(newElement.element, oldElement.element);
};

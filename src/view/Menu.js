const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

export const menuView = () => {
  let element = null;

  const getTemplate = () => `
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>
  `;

  const getElement = () => {
    if (!element) {
      element = createElement(getTemplate());
    }

    return element;
  };

  return {
    getElement
  };
};

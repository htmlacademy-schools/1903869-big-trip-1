/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOREM_IPSUM\": () => (/* binding */ LOREM_IPSUM),\n/* harmony export */   \"WAYPOINT_TYPES\": () => (/* binding */ WAYPOINT_TYPES),\n/* harmony export */   \"OFFER_TYPES\": () => (/* binding */ OFFER_TYPES)\n/* harmony export */ });\nconst LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';\nconst WAYPOINT_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];\nconst OFFER_TYPES = ['Add lagguage', 'Add meal', 'Choose seats', 'Travel by Train', 'Switch to comfort class'];\n\n//# sourceURL=webpack://big-trip/./src/consts.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/Menu */ \"./src/view/Menu.js\");\n/* harmony import */ var _view_Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/Filters */ \"./src/view/Filters.js\");\n/* harmony import */ var _view_Sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/Sort */ \"./src/view/Sort.js\");\n/* harmony import */ var _view_Waypoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/Waypoint */ \"./src/view/Waypoint.js\");\n/* harmony import */ var _view_CreationForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/CreationForm */ \"./src/view/CreationForm.js\");\n/* harmony import */ var _waypoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waypoint */ \"./src/waypoint.js\");\n\n\n\n\n\n\n\nconst render = (component, container, place) => {\n  const fragment = container.querySelector(place) || container;\n  fragment.appendChild(component);\n};\n\nconst tripControls = document.querySelector('.trip-controls');\nconst tripEvents = document.querySelector('.trip-events');\nconst tripEventsList = document.createElement('ul');\nconst menuModel = (0,_view_Menu__WEBPACK_IMPORTED_MODULE_0__.menuView)();\nrender(menuModel.getElement(), tripControls, '.trip-controls__navigation');\nconst filtersModel = (0,_view_Filters__WEBPACK_IMPORTED_MODULE_1__.filtersView)();\nrender(filtersModel.getElement(), tripControls, '.trip-controls__filters');\nconst sortModel = (0,_view_Sort__WEBPACK_IMPORTED_MODULE_2__.sortView)();\nrender(sortModel.getElement(), tripEvents);\ntripEventsList.classList.add('trip-events__list');\nrender(tripEventsList, tripEvents);\nconst waypointModels = [];\n\nfor (let i = 0; i < 20; i++) {\n  waypointModels.push((0,_waypoint__WEBPACK_IMPORTED_MODULE_5__.createRandomWaypoint)());\n}\n\nconst formModel = (0,_view_CreationForm__WEBPACK_IMPORTED_MODULE_4__.creationFormView)();\nconst formParams = {\n  isCreationForm: true\n};\nrender(formModel.getElement({ ...waypointModels[0],\n  ...formParams\n}), tripEventsList);\nconst waypointsModel = [(0,_view_Waypoint__WEBPACK_IMPORTED_MODULE_3__.waypointView)(), (0,_view_Waypoint__WEBPACK_IMPORTED_MODULE_3__.waypointView)(), (0,_view_Waypoint__WEBPACK_IMPORTED_MODULE_3__.waypointView)()];\nwaypointsModel.forEach((waypointModel, i) => render(waypointModel.getElement(waypointModels[i]), tripEventsList));\n\n//# sourceURL=webpack://big-trip/./src/main.js?");

/***/ }),

/***/ "./src/view/CreationForm.js":
/*!**********************************!*\
  !*** ./src/view/CreationForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creationFormView\": () => (/* binding */ creationFormView)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ \"./src/consts.js\");\n\n\nconst createElement = template => {\n  const newElement = document.createElement('div');\n  newElement.innerHTML = template;\n  return newElement.firstElementChild;\n};\n\nconst creationFormView = () => {\n  let element = null;\n\n  const getTemplate = ({\n    isCreationForm,\n    destination,\n    type,\n    offers,\n    price\n  }) => `\n  <li class=\"trip-events__item\">\n    <form class=\"event event--edit\" action=\"#\" method=\"post\">\n      <header class=\"event__header\">\n        <div class=\"event__type-wrapper\">\n          <label class=\"event__type  event__type-btn\" for=\"event-type-toggle-1\">\n            <span class=\"visually-hidden\">Choose event type</span>\n            <img class=\"event__type-icon\" width=\"17\" height=\"17\" src=\"img/icons/${type.toLowerCase()}.png\" alt=\"Event type icon\">\n          </label>\n          <input class=\"event__type-toggle  visually-hidden\" id=\"event-type-toggle-1\" type=\"checkbox\">\n\n          <div class=\"event__type-list\">\n            <fieldset class=\"event__type-group\">\n              <legend class=\"visually-hidden\">Event type</legend>\n\n              <div class=\"event__type-item\">\n                <input id=\"event-type-taxi-1\" class=\"event__type-input  visually-hidden\" type=\"radio\" name=\"event-type\" value=\"taxi\">\n                <label class=\"event__type-label  event__type-label--taxi\" for=\"event-type-taxi-1\">Taxi</label>\n              </div>\n\n              <div class=\"event__type-item\">\n                <input id=\"event-type-bus-1\" class=\"event__type-input  visually-hidden\" type=\"radio\" name=\"event-type\" value=\"bus\">\n                <label class=\"event__type-label  event__type-label--bus\" for=\"event-type-bus-1\">Bus</label>\n              </div>\n\n              <div class=\"event__type-item\">\n                <input id=\"event-type-train-1\" class=\"event__type-input  visually-hidden\" type=\"radio\" name=\"event-type\" value=\"train\">\n                <label class=\"event__type-label  event__type-label--train\" for=\"event-type-train-1\">Train</label>\n              </div>\n\n              <div class=\"event__type-item\">\n                <input id=\"event-type-ship-1\" class=\"event__type-input  visually-hidden\" type=\"radio\" name=\"event-type\" value=\"ship\">\n                <label class=\"event__type-label  event__type-label--ship\" for=\"event-type-ship-1\">Ship</label>\n              </div>\n\n              <div class=\"event__type-item\">\n                <input id=\"event-type-drive-1\" class=\"event__type-input  visually-hidden\" type=\"radio\" name=\"event-type\" value=\"drive\">\n                <label class=\"event__type-label  event__type-label--drive\" for=\"event-type-drive-1\">Drive</label>\n              </div>\n\n              <div class=\"event__type-item\">\n                <input id=\"event-type-flight-1\" class=\"event__type-input  visually-hidden\" type=\"radio\" name=\"event-type\" value=\"flight\" checked>\n                <label class=\"event__type-label  event__type-label--flight\" for=\"event-type-flight-1\">Flight</label>\n              </div>\n\n              <div class=\"event__type-item\">\n                <input id=\"event-type-check-in-1\" class=\"event__type-input  visually-hidden\" type=\"radio\" name=\"event-type\" value=\"check-in\">\n                <label class=\"event__type-label  event__type-label--check-in\" for=\"event-type-check-in-1\">Check-in</label>\n              </div>\n\n              <div class=\"event__type-item\">\n                <input id=\"event-type-sightseeing-1\" class=\"event__type-input  visually-hidden\" type=\"radio\" name=\"event-type\" value=\"sightseeing\">\n                <label class=\"event__type-label  event__type-label--sightseeing\" for=\"event-type-sightseeing-1\">Sightseeing</label>\n              </div>\n\n              <div class=\"event__type-item\">\n                <input id=\"event-type-restaurant-1\" class=\"event__type-input  visually-hidden\" type=\"radio\" name=\"event-type\" value=\"restaurant\">\n                <label class=\"event__type-label  event__type-label--restaurant\" for=\"event-type-restaurant-1\">Restaurant</label>\n              </div>\n            </fieldset>\n          </div>\n        </div>\n\n        <div class=\"event__field-group  event__field-group--destination\">\n          <label class=\"event__label  event__type-output\" for=\"event-destination-1\">\n            ${type}\n          </label>\n          <input class=\"event__input  event__input--destination\" id=\"event-destination-1\" type=\"text\" name=\"event-destination\" value=\"${destination.city}\" list=\"destination-list-1\">\n          <datalist id=\"destination-list-1\">\n            <option value=\"Amsterdam\"></option>\n            <option value=\"Geneva\"></option>\n            <option value=\"Chamonix\"></option>\n          </datalist>\n        </div>\n\n        <div class=\"event__field-group  event__field-group--time\">\n          <label class=\"visually-hidden\" for=\"event-start-time-1\">From</label>\n          <input class=\"event__input  event__input--time\" id=\"event-start-time-1\" type=\"text\" name=\"event-start-time\" value=\"19/03/19 00:00\">\n          &mdash;\n          <label class=\"visually-hidden\" for=\"event-end-time-1\">To</label>\n          <input class=\"event__input  event__input--time\" id=\"event-end-time-1\" type=\"text\" name=\"event-end-time\" value=\"19/03/19 00:00\">\n        </div>\n\n        <div class=\"event__field-group  event__field-group--price\">\n          <label class=\"event__label\" for=\"event-price-1\">\n            <span class=\"visually-hidden\">Price</span>\n            &euro;\n          </label>\n          <input class=\"event__input  event__input--price\" id=\"event-price-1\" type=\"text\" name=\"event-price\" value=\"${price}\">\n        </div>\n\n        <button class=\"event__save-btn  btn  btn--blue\" type=\"submit\">Save</button>\n\n        <button class=\"event__reset-btn\" type=\"reset\">${isCreationForm ? 'Cancel' : 'Delete'}</button>\n\n        ${isCreationForm ? '' : `\n          <button class=\"event__rollup-btn\" type=\"button\">\n            <span class=\"visually-hidden\">Open event</span>\n          </button>\n        `}\n      </header>\n\n      <section class=\"event__details\">\n        <section class=\"event__section  event__section--offers\">\n          <h3 class=\"event__section-title  event__section-title--offers\">Offers</h3>\n\n          <div class=\"event__available-offers\">\n            ${_consts__WEBPACK_IMPORTED_MODULE_0__.OFFER_TYPES.map(offer => `\n                <div class=\"event__offer-selector\">\n                  <input class=\"event__offer-checkbox visually-hidden\" id=\"event-offer-${offer}\" type=\"checkbox\" name=\"event-offer-luggage\" ${offers.map(item => item.name).includes(offer) ? 'checked' : ''}>\n                  <label class=\"event__offer-label\" for=\"event-offer-${offer}\">\n                    <span class=\"event__offer-title\">${offer}</span>\n                    &plus;&euro;&nbsp;\n                    <span class=\"event__offer-price\">30</span>\n                  </label>\n                </div>\n              `).join('')}\n          </div>\n        </section>\n\n        <section class=\"event__section  event__section--destination\">\n          <h3 class=\"event__section-title  event__section-title--destination\">Destination</h3>\n          <p class=\"event__destination-description\">${destination.description}</p>\n\n          <div class=\"event__photos-container\">\n            <div class=\"event__photos-tape\">\n              ${destination.photos.map(photo => `\n                <img class=\"event__photo\" src=\"${photo}\" alt=\"Event photo\">\n              `).join('')}\n            </div>\n          </div>\n        </section>\n      </section>\n    </form>\n  </li>`;\n\n  const getElement = args => {\n    if (!element) {\n      element = createElement(getTemplate(args));\n    }\n\n    return element;\n  };\n\n  return {\n    getElement\n  };\n};\n\n//# sourceURL=webpack://big-trip/./src/view/CreationForm.js?");

/***/ }),

/***/ "./src/view/Filters.js":
/*!*****************************!*\
  !*** ./src/view/Filters.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filtersView\": () => (/* binding */ filtersView)\n/* harmony export */ });\nconst createElement = template => {\n  const newElement = document.createElement('div');\n  newElement.innerHTML = template;\n  return newElement.firstElementChild;\n};\n\nconst filtersView = () => {\n  let element = null;\n\n  const getTemplate = () => `\n    <form class=\"trip-filters\" action=\"#\" method=\"get\">\n      <div class=\"trip-filters__filter\">\n        <input id=\"filter-everything\" class=\"trip-filters__filter-input  visually-hidden\" type=\"radio\" name=\"trip-filter\" value=\"everything\">\n        <label class=\"trip-filters__filter-label\" for=\"filter-everything\">Everything</label>\n      </div>\n\n      <div class=\"trip-filters__filter\">\n        <input id=\"filter-future\" class=\"trip-filters__filter-input  visually-hidden\" type=\"radio\" name=\"trip-filter\" value=\"future\">\n        <label class=\"trip-filters__filter-label\" for=\"filter-future\">Future</label>\n      </div>\n\n      <div class=\"trip-filters__filter\">\n        <input id=\"filter-past\" class=\"trip-filters__filter-input  visually-hidden\" type=\"radio\" name=\"trip-filter\" value=\"past\" checked>\n        <label class=\"trip-filters__filter-label\" for=\"filter-past\">Past</label>\n      </div>\n\n      <button class=\"visually-hidden\" type=\"submit\">Accept filter</button>\n    </form>\n  `;\n\n  const getElement = () => {\n    if (!element) {\n      element = createElement(getTemplate());\n    }\n\n    return element;\n  };\n\n  return {\n    getElement\n  };\n};\n\n//# sourceURL=webpack://big-trip/./src/view/Filters.js?");

/***/ }),

/***/ "./src/view/Menu.js":
/*!**************************!*\
  !*** ./src/view/Menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuView\": () => (/* binding */ menuView)\n/* harmony export */ });\nconst createElement = template => {\n  const newElement = document.createElement('div');\n  newElement.innerHTML = template;\n  return newElement.firstElementChild;\n};\n\nconst menuView = () => {\n  let element = null;\n\n  const getTemplate = () => `\n    <nav class=\"trip-controls__trip-tabs  trip-tabs\">\n      <a class=\"trip-tabs__btn trip-tabs__btn--active\" href=\"#\">Table</a>\n      <a class=\"trip-tabs__btn\" href=\"#\">Stats</a>\n    </nav>\n  `;\n\n  const getElement = () => {\n    if (!element) {\n      element = createElement(getTemplate());\n    }\n\n    return element;\n  };\n\n  return {\n    getElement\n  };\n};\n\n//# sourceURL=webpack://big-trip/./src/view/Menu.js?");

/***/ }),

/***/ "./src/view/Sort.js":
/*!**************************!*\
  !*** ./src/view/Sort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortView\": () => (/* binding */ sortView)\n/* harmony export */ });\nconst createElement = template => {\n  const newElement = document.createElement('div');\n  newElement.innerHTML = template;\n  return newElement.firstElementChild;\n};\n\nconst sortView = () => {\n  let element = null;\n\n  const getTemplate = () => `\n    <form class=\"trip-events__trip-sort  trip-sort\" action=\"#\" method=\"get\">\n      <div class=\"trip-sort__item  trip-sort__item--day\">\n        <input id=\"sort-day\" class=\"trip-sort__input  visually-hidden\" type=\"radio\" name=\"trip-sort\" value=\"sort-day\" checked>\n        <label class=\"trip-sort__btn\" for=\"sort-day\">Day</label>\n      </div>\n\n      <div class=\"trip-sort__item  trip-sort__item--event\">\n        <input id=\"sort-event\" class=\"trip-sort__input  visually-hidden\" type=\"radio\" name=\"trip-sort\" value=\"sort-event\" disabled>\n        <label class=\"trip-sort__btn\" for=\"sort-event\">Event</label>\n      </div>\n\n      <div class=\"trip-sort__item  trip-sort__item--time\">\n        <input id=\"sort-time\" class=\"trip-sort__input  visually-hidden\" type=\"radio\" name=\"trip-sort\" value=\"sort-time\">\n        <label class=\"trip-sort__btn\" for=\"sort-time\">Time</label>\n      </div>\n\n      <div class=\"trip-sort__item  trip-sort__item--price\">\n        <input id=\"sort-price\" class=\"trip-sort__input  visually-hidden\" type=\"radio\" name=\"trip-sort\" value=\"sort-price\">\n        <label class=\"trip-sort__btn\" for=\"sort-price\">Price</label>\n      </div>\n\n      <div class=\"trip-sort__item  trip-sort__item--offer\">\n        <input id=\"sort-offer\" class=\"trip-sort__input  visually-hidden\" type=\"radio\" name=\"trip-sort\" value=\"sort-offer\" disabled>\n        <label class=\"trip-sort__btn\" for=\"sort-offer\">Offers</label>\n      </div>\n    </form>\n  `;\n\n  const getElement = () => {\n    if (!element) {\n      element = createElement(getTemplate());\n    }\n\n    return element;\n  };\n\n  return {\n    getElement\n  };\n};\n\n//# sourceURL=webpack://big-trip/./src/view/Sort.js?");

/***/ }),

/***/ "./src/view/Waypoint.js":
/*!******************************!*\
  !*** ./src/view/Waypoint.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"waypointView\": () => (/* binding */ waypointView)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst createElement = template => {\n  const newElement = document.createElement('div');\n  newElement.innerHTML = template;\n  return newElement.firstElementChild;\n};\n\nconst waypointView = () => {\n  let element = null; // date: string\n  // event: string\n  // time: {start: string, end: string}\n  // price: string\n  // offers: {title: string, price: string}[]\n\n  const getTemplate = ({\n    date,\n    type,\n    destination,\n    time,\n    price,\n    offers = []\n  }) => `\n      <li class=\"trip-events__item\">\n        <div class=\"event\">\n          <time class=\"event__date\" datetime=\"${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('YYYY-MM-DD')}\">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(' MMM D')}</time>\n          <div class=\"event__type\">\n            <img class=\"event__type-icon\" width=\"42\" height=\"42\" src=\"img/icons/${type.toLowerCase()}.png\" alt=\"Event type icon\">\n          </div>\n          <h3 class=\"event__title\">${type} ${destination.city}</h3>\n          <div class=\"event__schedule\">\n            <p class=\"event__time\">\n              <time class=\"event__start-time\" datetime=\"${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.start).format('YYYY-MM-DDThh:mm')}\">\n                ${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.start).format('hh:mm')}\n              </time>\n              &mdash;\n              <time class=\"event__end-time\" datetime=\"${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.end).format('YYYY-MM-DDThh:mm')}\">\n                ${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.end).format('hh:mm')}\n              </time>\n            </p>\n            <p class=\"event__duration\">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(time.end).diff(time.start, 'minutes')}M</p>\n          </div>\n          <p class=\"event__price\">\n            &euro;&nbsp;<span class=\"event__price-value\">${price}</span>\n          </p>\n          <h4 class=\"visually-hidden\">Offers:</h4>\n          <ul class=\"event__selected-offers\">\n            ${offers.map(offer => `\n              <li class=\"event__offer\">\n                <span class=\"event__offer-title\">${offer.name}</span>\n                &plus;&euro;&nbsp;\n                <span class=\"event__offer-price\">${offer.price}</span>\n              </li>`).join('')}\n          </ul>\n          <button class=\"event__favorite-btn event__favorite-btn--active\" type=\"button\">\n            <span class=\"visually-hidden\">Add to favorite</span>\n            <svg class=\"event__favorite-icon\" width=\"28\" height=\"28\" viewBox=\"0 0 28 28\">\n              <path d=\"M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z\"/>\n            </svg>\n          </button>\n          <button class=\"event__rollup-btn\" type=\"button\">\n            <span class=\"visually-hidden\">Open event</span>\n          </button>\n        </div>\n      </li>\n  `;\n\n  const getElement = args => {\n    if (!element) {\n      element = createElement(getTemplate(args));\n    }\n\n    return element;\n  };\n\n  return {\n    getElement\n  };\n};\n\n//# sourceURL=webpack://big-trip/./src/view/Waypoint.js?");

/***/ }),

/***/ "./src/waypoint.js":
/*!*************************!*\
  !*** ./src/waypoint.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createOffer\": () => (/* binding */ createOffer),\n/* harmony export */   \"createWaypointModel\": () => (/* binding */ createWaypointModel),\n/* harmony export */   \"createRandomWaypoint\": () => (/* binding */ createRandomWaypoint)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ \"./src/consts.js\");\n\n\nconst createRandomDestination = () => {\n  const lrArray = _consts__WEBPACK_IMPORTED_MODULE_0__.LOREM_IPSUM.split('. ');\n  const destinationStartIndex = Math.round(Math.random() * (lrArray.length - 1));\n  const destinationEndIndex = destinationStartIndex + 5 < lrArray.length - 1 ? destinationStartIndex + 5 : lrArray.length - 1;\n  const newArr = [];\n\n  for (let i = destinationStartIndex; i < destinationEndIndex; i++) {\n    newArr.push(lrArray[i]);\n  }\n\n  return {\n    city: 'Geneva',\n    description: newArr.join('. '),\n    photos: [`http://picsum.photos/248/152?r=${Math.random()}`]\n  };\n};\n\nconst createRandomType = () => {\n  const types = _consts__WEBPACK_IMPORTED_MODULE_0__.WAYPOINT_TYPES;\n  const randomTypeIndex = Math.round(Math.random() * (types.length - 1));\n  return types[randomTypeIndex];\n};\n\nconst createOffer = ({\n  name,\n  price\n}) => ({\n  name,\n  price\n});\n\nconst createOffers = () => {\n  const offerTypes = _consts__WEBPACK_IMPORTED_MODULE_0__.OFFER_TYPES;\n  const iterationsCount = Math.round(Math.random() * 5);\n  const offers = [];\n\n  for (let i = 0; i < iterationsCount; i++) {\n    const name = offerTypes[Math.round(Math.random() * (offerTypes.length - 1))];\n    const price = Math.round(Math.random() * 300);\n    offers.push(createOffer({\n      name,\n      price\n    }));\n  }\n\n  return offers;\n};\n\nconst createWaypointModel = ({\n  type,\n  destination,\n  offers = []\n}) => ({\n  type,\n  offers,\n  destination,\n  date: '2022-01-01',\n  time: {\n    start: '2022-01-01 10:30',\n    end: '2022-01-01 11:30'\n  },\n  price: Math.round(Math.random() * 300)\n});\nconst createRandomWaypoint = () => {\n  const type = createRandomType();\n  const destination = createRandomDestination();\n  const offers = createOffers();\n  return createWaypointModel({\n    type,\n    destination,\n    offers\n  });\n};\n\n//# sourceURL=webpack://big-trip/./src/waypoint.js?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",f=\"month\",h=\"quarter\",c=\"year\",d=\"date\",$=\"Invalid Date\",l=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},D=\"en\",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if(\"string\"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g=\"set\"+(this.$u?\"UTC\":\"\");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+\"Hours\",0);case u:return l(g+\"Minutes\",1);case s:return l(g+\"Seconds\",2);case i:return l(g+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h=\"set\"+(this.$u?\"UTC\":\"\"),$=(n={},n[a]=h+\"Date\",n[d]=h+\"Date\",n[f]=h+\"Month\",n[c]=h+\"FullYear\",n[u]=h+\"Hours\",n[s]=h+\"Minutes\",n[i]=h+\"Seconds\",n[r]=h+\"Milliseconds\",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,\"0\")},d=n.meridiem||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,\"0\"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,\"0\"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,\"0\"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,\"0\"),s:String(this.$s),ss:O.s(this.$s,2,\"0\"),SSS:O.s(this.$ms,3,\"0\"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",f],[\"$y\",c],[\"$D\",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));\n\n//# sourceURL=webpack://big-trip/./node_modules/dayjs/dayjs.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
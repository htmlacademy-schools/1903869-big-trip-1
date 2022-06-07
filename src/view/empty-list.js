import { AbstractComponent } from '../abstract-view';

export class EmptyListView extends AbstractComponent {
  getTemplate() {
    return '<p class="trip-events__msg">Click New Event to create your first point</p>';
  }
}

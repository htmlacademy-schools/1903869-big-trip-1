import { nanoid } from 'nanoid';
import { remove, renderBefore, UserAction, UpdateType } from '../utils';
import { CreationForm } from '../view/creation-form';

export default class PointNewPresenter {
  pointListContainer = null;
  changeData = null;
  pointAddComponent = null;

  constructor(pointListContainer, changeData) {
    this.pointListContainer = pointListContainer;
    this.changeData = changeData;
  }

  init = () => {
    if (this.pointAddComponent !== null) {
      return;
    }

    this.pointAddComponent = new CreationForm({
      isCreationForm: true,
      destination: { photos: [] },
      type: '',
      offers: [],
      price: '',
      timeStart: '',
      timeEnd: '',
    });
    this.pointAddComponent.setFormSubmitHandler(this.handleFormSubmit);
    this.pointAddComponent.setDeleteClickHandler(this.handleDeleteClick);

    renderBefore(this.pointAddComponent, this.pointListContainer);

    document.addEventListener('keydown', this.escKeyDownHandler);
  };

  destroy = () => {
    if (this.pointAddComponent === null) {
      return;
    }

    remove(this.pointAddComponent);
    this.pointAddComponent = null;

    document.removeEventListener('keydown', this.escKeyDownHandler);
  };

  handleFormSubmit = (task) => {
    this.changeData(UserAction.ADD_POINT, UpdateType.MINOR, {
      id: nanoid(),
      ...task,
    });
    this.destroy();
  };

  handleDeleteClick = () => {
    this.destroy();
  };

  escKeyDownHandler = (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      e.preventDefault();
      this.destroy();
    }
  };
}

import { action, observable } from "mobx";

export default class BasicStore<T> {
  @observable status: T;

  @action
  setStatus(object: Partial<T>) {
    const properties = Object.getOwnPropertyNames(object);
    properties.forEach(property => {
      if (this.status.hasOwnProperty(property)) {
        this.status[property] = object[property];
      }
    });
  }

  @action
  destroyStatus() {
    this.status = null;
  }
}

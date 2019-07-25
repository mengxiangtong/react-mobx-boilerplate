import { action, observable } from "mobx";

export default class BasicStore<T> {
  @observable status: T;

  @action
  setStatus(object: Partial<T>) {
    this.status = Object.assign({}, this.status, object);
  }

  @action
  destroyStatus() {
    this.status = null;
  }
}

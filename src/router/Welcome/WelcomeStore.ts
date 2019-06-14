import { observable, action } from "mobx";
import BasicStore from "../../store/BasicStore";

export class WelcomeStoreInitStatus {
  @observable name: string = "hello world";
}

export class WelcomeStore extends BasicStore<WelcomeStoreInitStatus> {
  @observable status = new WelcomeStoreInitStatus();

  @action
  changeName() {
    this.setStatus({ name: "三十文" });
  }
}

const welcomeStore = new WelcomeStore();
export default welcomeStore;

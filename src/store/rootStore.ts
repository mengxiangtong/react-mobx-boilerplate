import globalStore from "./GlobalStore";
import welcomeStore from "../router/Welcome/WelcomeStore";

const rootStore = {
  globalStore: globalStore,
  welcomeStore: welcomeStore
};

export default rootStore;

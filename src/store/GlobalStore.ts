import BasicStore from "./BasicStore";

class GlobalStoreInitStatus {}

class GlobalStore extends BasicStore<GlobalStoreInitStatus> {}

const globalStore = new GlobalStore();
export default globalStore;

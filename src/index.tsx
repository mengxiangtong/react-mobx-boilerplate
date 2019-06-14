import "./external";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import router from "./router/router";
import rootStore from "./store/rootStore";

import "./style/global.less";

ReactDOM.render(
  <Provider {...rootStore}>{router}</Provider>,
  document.querySelector("#main-view-wrapper")
);

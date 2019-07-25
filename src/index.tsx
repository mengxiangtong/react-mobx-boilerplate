import "./external";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import router from "./router/router";
import requestUtil from "./util/requestUtil";

import "./style/global.less";

requestUtil.configAxiosInstance();

ReactDOM.render(
  <Provider>{router}</Provider>,
  document.querySelector("#main-view-wrapper")
);

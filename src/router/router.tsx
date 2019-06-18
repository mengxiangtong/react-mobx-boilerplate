import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from "enhancer/loadable";

import BasicLayout from "layout/BasicLayout/BasicLayout";

const routerPrefix = "/";

export const routerOutline = {
  WelcomePage: `${routerPrefix}welcome`
};

const Welcome = loadable(() => import("router/Welcome/WelCome"));

const router = (
  <BrowserRouter>
    <Switch>
      {/* 空路由页面 */}
      <Route exact path={routerPrefix} />

      {/* 独立页面 */}
      {/*<Route path={routerOutline.WelcomePage} component={Welcome}/>*/}

      {/* 携带基础布局的页面 */}
      <Route>
        <BasicLayout>
          <Switch>
            <Route exact path={routerOutline.WelcomePage} component={Welcome} />

            {/* 个人中心模块 */}
            <Route
              exact
              path="/user"
              component={() => <React.Fragment>{/* Routes */}</React.Fragment>}
            />
          </Switch>
        </BasicLayout>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default router;

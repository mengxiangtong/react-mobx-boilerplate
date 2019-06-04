import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "router/Welcome/WelCome";

const router = (
  <BrowserRouter>
    <div>
      <Route strict={true} path={"/"} component={Welcome} />
    </div>
  </BrowserRouter>
);

export default router;

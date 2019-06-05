import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import wrapperComponent from 'enhancer/wrapperComponent'
import loadable from 'enhancer/loadable'

import BasicLayout from 'layout/BasicLayout/BasicLayout'

const routerPrefix = ''
export const routerOutline = {
  WelcomePage: `${routerPrefix}/welcome`
}

const Welcome = loadable(() => import('router/Welcome/WelCome'))

const router = (
  <BrowserRouter>
    <div>
      <Route
        component={wrapperComponent(
          BasicLayout,
          <React.Fragment>
            <Route
              strict
              path={routerOutline.WelcomePage}
              component={Welcome}
            />
          </React.Fragment>
        )}
      />
    </div>
  </BrowserRouter>
)

export default router

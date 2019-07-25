import { withRouter } from "react-router-dom";

/**
 * 将 react-router-dom 的 withRouter 封装成 Decorator
 */
export function wrapperRouter(): any {
  return function decorate(Component: any): any {
    return withRouter(Component);
  };
}

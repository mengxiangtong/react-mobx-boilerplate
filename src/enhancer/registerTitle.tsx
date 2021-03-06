import * as React from "react";

/**
 * 添加页面 title 的注解，注解必须放在 mobx 的 inject 之上
 * @param title 页面标题
 */
export function registerTitle(title: string): any {
  return function decorate(Component: any) {
    return class RegisterTitleComponent extends React.Component<any, any> {
      componentDidMount(): void {
        document.title = title;
      }

      render() {
        return <Component {...this.props} />;
      }
    };
  };
}

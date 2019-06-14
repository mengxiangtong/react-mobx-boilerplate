import * as React from "react";
import { inject, observer } from "mobx-react";
import { WelcomeStore } from "./WelcomeStore";

import "./Welcome.less";

@inject("welcomeStore")
@observer
export default class Welcome extends React.Component<
  {
    welcomeStore: WelcomeStore;
  },
  any
> {
  render() {
    const { welcomeStore } = this.props;

    return (
      <div className="text" onClick={() => welcomeStore.changeName()}>
        {welcomeStore.status.name}
      </div>
    );
  }
}

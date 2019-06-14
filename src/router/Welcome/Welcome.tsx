import * as React from "react";
import { inject, observer } from "mobx-react";
import { WelcomeStore } from "./WelcomeStore";
import registerTitle from "enhancer/registerTitle";

@registerTitle("欢迎")
@inject("welcomeStore")
@observer
export default class Welcome extends React.Component<
  {
    welcomeStore: WelcomeStore;
  },
  any
> {
  componentDidMount(): void {
    console.log(this.props);
  }

  render() {
    const { welcomeStore } = this.props;

    return (
      <div className="text" onClick={() => welcomeStore.changeName()}>
        {welcomeStore.status.name}
      </div>
    );
  }
}

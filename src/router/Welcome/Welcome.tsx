import * as React from "react";
import { observer } from "mobx-react";
import { registerTitle } from "enhancer";
import welcomeStore from "./WelcomeStore";

@registerTitle("欢迎")
@observer
export default class Welcome extends React.Component<any, any> {
  componentDidMount(): void {
    console.log(this.props);
  }

  render() {
    return (
      <div className="text" onClick={() => welcomeStore.changeName()}>
        {welcomeStore.status.name}
      </div>
    );
  }
}

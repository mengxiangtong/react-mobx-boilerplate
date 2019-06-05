import * as React from 'react'
import registerTitle from 'enhancer/registerTitle'

@registerTitle('欢迎')
export default class Welcome extends React.Component {
  render() {
    return <div>welcome</div>
  }
}

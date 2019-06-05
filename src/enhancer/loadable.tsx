import * as React from 'react'
import loadableComponent from '@loadable/component'

export default function loadable(loadableConstructor) {
  const Comp = loadableComponent(loadableConstructor)
  return function (props) {
    return <Comp {...props} />
  }
}

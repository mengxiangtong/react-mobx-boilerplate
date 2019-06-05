import * as React from 'react'
import { Layout } from 'antd'
import { BasicLayoutState } from 'declare/LayoutInterface'

import BasicSideMenu from '../BasicSideMenu/BasicSideMenu'
import BasicHeader from '../BasicHeader/BasicHeader'

export default class BasicLayout extends React.Component<any,
  BasicLayoutState> {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  onCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={() => this.onCollapse()}>
          <BasicSideMenu/>
        </Layout.Sider>
        <Layout>
          <BasicHeader/>
          <Layout.Content>{this.props.children}</Layout.Content>
        </Layout>
      </Layout>
    )
  }
}

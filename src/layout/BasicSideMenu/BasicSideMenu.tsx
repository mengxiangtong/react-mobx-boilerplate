import * as React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

export default class BasicSideMenu extends React.Component {
  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        defaultOpenKeys={["dataset"]}
      >
        <Menu.Item key="dashboard">
          <Link to={"/"}>
            <Icon type="pie-chart" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

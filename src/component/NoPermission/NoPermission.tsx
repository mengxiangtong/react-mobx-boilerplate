import * as React from "react";
import { Button, Row } from "antd";
import { Link } from "react-router-dom";

import "./NoPermission.less";

export default class NoPermission extends React.Component {
  render() {
    return (
      <div className="no-permission-component">
        <Row className="permission-block">
          <img
            style={{ width: "35%" }}
            src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
          />
          <div className="permission-right-block">
            <div className="no-permission-tips">抱歉，您暂无权限访问此页面</div>
            <Link to={"/"}>
              <Button htmlType="button">返回首页</Button>
            </Link>
          </div>
        </Row>
      </div>
    );
  }
}

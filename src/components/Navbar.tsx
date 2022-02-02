import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";

const Navbar = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item key="1">Login</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;

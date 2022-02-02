import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { useRouter } from "../hooks/useRouter";
import { RouteName } from "../router";

const Navbar = () => {
  const { navigate } = useRouter();
  let [auth, setAuth] = useState<boolean>(true);
  return (
    <Header>
      <Row justify="end">
        {auth ? (
          <>
            <div style={{ color: "white" }}>Hello, Max</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => setAuth(false)} key="1">
                Exit
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => navigate(RouteName.LOGIN)} key="1">
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default Navbar;

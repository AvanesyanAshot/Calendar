import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useRouter } from "../hooks/useRouter";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteName } from "../router";

const Navbar = () => {
  const { navigate } = useRouter();
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Hello, Max</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log(false)} key="1">
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

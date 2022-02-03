import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useActions } from "../hooks/useActions";
import { useRouter } from "../hooks/useRouter";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteName } from "../router";

const Navbar = () => {
  const { navigate } = useRouter();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  return (
    <Header>
      <Row>
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Hello, {user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={logout} key="1">
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

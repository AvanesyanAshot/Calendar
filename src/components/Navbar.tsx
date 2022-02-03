import { Menu, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "../hooks/useRouter";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteName } from "../router";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const Navbar = () => {
  const { navigate } = useRouter();
  const dispatch = useDispatch();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  return (
    <Header>
      {isAuth ? (
        <>
          <div style={{ color: "white" }}>Hello, {user.username}</div>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item
              onClick={() => dispatch(AuthActionCreators.logout())}
              key="1"
            >
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
    </Header>
  );
};

export default Navbar;

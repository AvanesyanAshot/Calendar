import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteName } from "../router";

const NotFound = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  let navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      return navigate(RouteName.CALENDAR);
    } else {
      return navigate(RouteName.LOGIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Not found</div>;
};

export default NotFound;

import React, { FC } from "react";
import { privateRoutes, publicRoutes } from "../router";
import { Routes, Route } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
    </Routes>
  );
};

export default AppRouter;

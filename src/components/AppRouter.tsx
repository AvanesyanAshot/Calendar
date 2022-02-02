import React, { FC } from "react";
import { privateRoutes, publicRoutes } from "../router";
import { Routes, Route } from "react-router-dom";

const AppRouter: FC = () => {
  const auth = true;
  return (
    <Routes>
      {auth
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

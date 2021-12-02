import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import { publicRoutes } from "../routes";
import { HOME, BOOK_PAGE, ADMIN } from "../services/const";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => {
        
        return <Route key={path} path={path} element={Component} />;
      })}
    </Routes>
  );
};

export default AppRouter;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/";
import FavoritePage from "../pages/FavoritePage/";
import BascetPage from "../pages/BascetPage/";
import NotFoundPage from "../pages/NotFoundPage/";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/bascet" element={<BascetPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
